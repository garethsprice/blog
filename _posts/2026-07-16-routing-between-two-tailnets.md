---
layout: post
title: "An Exit Node Won't Carry You Into a Second Tailnet"
description: "One machine joined to two Tailscale tailnets can hinge them together — personal devices on one side, a private work network on the other. But the feature that promises to route everything deliberately refuses private addresses, and the failure disguises itself as a DNS problem that no amount of DNS debugging will fix."
created_date: 2026-07-16
updated_date: 2026-07-16
---

Tailscale offers two ways to send your traffic through another machine, and they look interchangeable. An exit node advertises `0.0.0.0/0`: send me everything. A subnet router advertises a specific CIDR: send me this network. The difference sounds like an implementation detail. It is not — an exit node's "everything" deliberately excludes private address ranges, so the one network you built the bridge to reach is the one network the exit node will never carry. I learned this bridging two tailnets through a single box; what follows is that lesson with the debugging shortened.

The setup: I run two tailnets. A personal one has my phone, laptop, and home server. A work one is a private network — think cloud VPC — with internal-only services on `10.20.0.0/16`, reachable through a subnet router that already lives on that tailnet. One machine at home, `gw`, is joined to both. When I travel, I want my phone on the personal tailnet only, using `gw` as an exit node so my traffic leaves from home, and I want requests for the work-internal domain (`*.internal.example.com`, which resolves to `10.20.x.x`) bounced through `gw` onto the work tailnet. One tailnet on the phone, one box as the hinge, private traffic crossing between them. (Every address and name here is a placeholder; the pattern is the point.)

The obvious alternative is to skip the bridge and join the phone to the work tailnet directly. Mobile clients run one tailnet at a time, so that means switching accounts whenever work comes up — and it means enrolling a personal phone in a corporate network, which is exactly the coupling both sides' security policies exist to prevent. The hinge keeps the memberships clean: the personal tailnet gains one route, and the work tailnet never learns my phone exists.

## Two daemons, one netfilter

A single `tailscaled` cannot join two tailnets, but two daemons on one host can, each fully isolated with its own state, socket, port, and tun device:

```
tailscaled \
  --state=/var/lib/tailscale-work/tailscaled.state \
  --socket=/run/tailscale-work/tailscaled.sock \
  --port=41642 \
  --tun=tailscale1
```

The default daemon owns `tailscale0`; the second owns `tailscale1`, and every CLI call to it needs the `--socket` flag.

The landmine: both daemons write to the same netfilter chains (`ts-input`, `ts-forward`, `ts-postrouting`), and they stomp on each other. A restart, a `tailscale up`, or a routine netmap update can wipe the rules the *other* daemon needs, and connectivity dies silently — often weeks later, after a change that looked unrelated. I ended up running a small `nft monitor` reconciler as a systemd service that re-asserts the handful of rules both interfaces need whenever the ruleset changes. If you run dual daemons, budget time for this. It is the least-documented part of the whole setup.

## DNS works, TCP hangs

My first version was the naive one: point the phone at `gw` as an exit node, done. General internet worked immediately. DNS resolved the internal names to the right `10.20.x.x` addresses. And every connection to those addresses hung. While the phone's `curl` sat at "Trying 10.20.1.10:443...", `tcpdump` on `gw` showed zero packets for that address arriving on any interface. The phone was not even trying to send them.

The cause: a Tailscale exit node's `0.0.0.0/0` route deliberately excludes the RFC 1918 private ranges — `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`. The exclusion is a feature. It lets you keep talking to your own LAN — printer, NAS — while an exit node is active. So when my phone tried to reach `10.20.1.10`, it saw a private address, decided "that's local", and sent the packet out the coffee-shop Wi-Fi it was sitting on, where it died.

DNS kept working through all of this because Tailscale's resolver forwards queries itself, and that path is not subject to the route filtering. The asymmetry is worth memorising as a diagnostic: when the name resolves fine but nothing connects, suspect routing, not DNS.

## A specific route beats "route everything"

The fix is to stop asking the exit node to reach the private network and advertise that network explicitly as a subnet route. A specific advertised CIDR is not subject to the RFC 1918 exclusion; the client installs a real route for it and tunnels it to the advertising node. On `gw`, on the personal tailnet's daemon:

```
tailscale set \
  --advertise-exit-node \
  --advertise-routes=10.20.0.0/16
```

(`--advertise-routes` replaces the whole list, so re-passing `--advertise-exit-node` keeps `0.0.0.0/0` in place.)

Advertising is half the job. Until a tailnet admin approves the route in the admin console, clients ignore it. Verify from the box rather than trusting your memory of the console:

```
tailscale status --json | jq '.Self.AllowedIPs'
# the /16 must appear here; if it doesn't, it isn't approved
```

Mobile clients pick up approved subnet routes automatically — there is no per-route toggle like Linux's `--accept-routes` — so toggle Tailscale off and on if the route hasn't appeared within a few seconds.

Approval can also quietly evaporate. If the advertisement is ever re-issued without the flags — someone re-runs a bare `tailscale up` — the route reverts to unapproved. An `autoApprovers` block in the tailnet policy re-approves it on re-advertisement:

```jsonc
"autoApprovers": {
    "routes": {
        "10.20.0.0/16": ["you@example.com"]
    }
}
```

The approver is your login for a user-owned device, or a `tag:` if the box is tagged. It only affects future advertisements.

With the route in place, longest-prefix match does the right thing: `10.20.0.0/16` goes to `gw` as a subnet route, everything else follows the exit node's `0.0.0.0/0`, and the two coexist on the phone without ceremony.

## The box still has to forward

Solving the client half gets the packet to `gw`. The box still has to move it from the personal tun (`tailscale0`) onto the work tun (`tailscale1`) and back. Three requirements:

1. IP forwarding on: `net.ipv4.ip_forward=1` (and the v6 equivalent if you use it).
2. A route to the private network via the work daemon. Tailscale installs it in its own routing table when the work tailnet's subnet router advertises the CIDR. Confirm the cross-tun path resolves for a foreign source:

   ```
   ip route get 10.20.1.10 iif tailscale0 from 100.64.0.10
   # should resolve out tailscale1
   ```
3. NAT on egress. The work side has no route back to a personal-tailnet address, so the packet's source is rewritten to `gw`'s work-tailnet IP as it leaves — an address the far subnet router already accepts. Tailscale's own `ts-postrouting` chain does this for marked traffic; the job is making sure that chain survives the dual-daemon stomping described above.

Once a packet lands on `gw`, the plumbing stops caring whether a subnet route or an exit node brought it there. Both arrive marked, and both get accepted and masqueraded identically. The distinction that dominates the client side vanishes at the box.

## DNS is a separate layer; solve it separately

Routing gets packets to the private network. DNS is what makes `app.internal.example.com` resolve to `10.20.x.x` in the first place, and it fails in its own two ways.

The internal names are split-horizon: they resolve to private addresses only from a resolver *inside* the private network — the VPC's `.2` resolver at `10.20.0.2`, say. Public resolvers return an edge address or nothing. The client has to send those queries to the internal resolver, which is reachable now that the subnet route exists.

And the browser will sabotage you. Chrome and Firefox ship DNS-over-HTTPS ("Secure DNS") on by default. It bypasses the operating system's resolver entirely, asks a public DoH server, gets the wrong answer — or none — for an internal-only name, and fails before the carefully routed internal resolver ever sees the query. The fingerprint is asymmetry: `curl` and `dig` work while the browser doesn't. Turn Secure DNS off, or point it at a server that can answer.

## Ping lies, and other traps

Three debugging traps burned real time on the way here:

- `ping` lies. ICMP is blocked across much of cloud networking; `gw` itself showed 100% packet loss to a service it could reach over TCP on port 443. Test reachability with `curl` or `nc -vz`, and treat a failed ping as no information.
- `curl` works through a name's A records in order. I filtered `tcpdump` on the address I had seen resolved earlier and caught nothing — curl was stuck on a different address from the same set. Filter on the whole CIDR.
- Advertised is not approved. It is easy to advertise a route, skip the console step, and stare at a broken setup. `AllowedIPs` is the ground truth.

When it breaks again, start from the symptom. If the name doesn't resolve at all, work the DNS layer: internal resolver, browser DoH. If it resolves to the right private address and TCP hangs, run `tcpdump` on the box for the target CIDR while the client connects — no packets arriving means the client isn't tunneling the range (the route is missing or unapproved: the RFC 1918 trap again), while packets arriving on the ingress tun but never leaving the egress tun mean forwarding, masquerade, or stomped netfilter chains. And if `ping` fails where you expected success, it probably worked anyway; re-test over TCP before believing the failure.

The finished system is small: two daemons, one advertised and approved `/16`, a sysctl, and a NAT rule that was already there. What made it hard is that the failure sits exactly on the seam between two features engineered to feel identical. The exit node's promise reads "send me everything"; the fine print reads "everything except private space". For the network you actually built the bridge to reach, you have to name it — advertise it, approve it — before the tunnel will admit it exists.
