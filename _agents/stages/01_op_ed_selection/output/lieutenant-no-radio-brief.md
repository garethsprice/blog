# Brief: What militaries know about delegating to autonomous agents

Sep 23, 2026 · Gareth Price. Supplied by the author; filed verbatim in substance.

## Angle
Every team running autonomous agents overnight is re-solving a problem militaries solved centuries ago: how to delegate high-stakes authority to subordinates you cannot supervise in real time. The mechanisms that worked are simple, consistent across two thousand years, and map almost one-to-one onto agent design. The mechanisms that failed also map, and the failures are the more useful lesson.

**Why now:** Agent frameworks shipped approval gates, durable pauses and scheduled missions in the last 18 months. The US military is publicly arguing whether agents can receive commander's intent (June 2026 memorandum on DoDD 3000.09; War on the Rocks exchange, Sept 2026).

**Pitch:** Your overnight agent is a lieutenant with no radio.

## Audience and format
Engineers and technical founders operating agent systems. HN front page bar. 1,800–2,400 words. Economist register. Ends on failure modes, not a checklist.

## Nine mechanisms
1 Commander's intent → mission file with end state. 2 Constraints/restraints → allowed/propose/forbidden tiers. 3 ROE + positive ID → evidence requirement per action class. 4 Backbrief and rehearsal → evening backbrief, shadow mode. 5 Decision points and CCIRs → pre-planned branches, paging rules. 6 Span of control → cap producers per approver. 7 Staff in commander's name → reviewer agent that rejects but cannot approve. 8 Reserve → held budget. 9 AAR and earned delegation → nightly AAR, autonomy ratchet.

## Position on the counterargument
The mechanisms transfer; the accountability does not. A named human accepts every consequential risk. Reviewer agents filter, never sign.

## Failure modes
Re-centralisation (Halleck, Vietnam helicopters); rubber-stamping (attributed, hedged targeting-review reporting); shared authority without agreement (Cannae); silent deviation.

## Leave out
OODA, weapons ethics beyond accountability, CorralData product, framework code.
