---
layout: post
title: "Your Overnight Agent Is a Lieutenant With No Radio"
description: "Decide what an overnight agent may do while you're asleep and which decisions must wait until morning. Military delegation offers lessons about setting limits and resisting needless approval."
created_date: 2026-09-23
updated_date: 2026-09-23
---

Suppose an agent spends the night fixing failing tests. It traces one failure to a database migration. Should it change the application, rewrite the migration or leave the problem for you? "Make the tests pass" doesn't answer that question. You're asleep. Its instructions need to settle that choice before the run starts.

Military commanders have spent centuries giving orders to people they cannot reach. Their methods offer useful lessons for an overnight agent: decide what it may do while you're asleep, and which decisions must wait until morning. Once you've granted that authority, let it get on with the work.

Horatio Nelson wrote orders for just such a loss of contact. On 9 October 1805, twelve days before Trafalgar, he told his captains what to do if they could no longer read his signals: "in case Signals can neither be seen or perfectly understood, no Captain can do very wrong if he places his Ship alongside that of an Enemy."[^nelson]

Nelson specified what to do when signals failed. An agent needs an equally explicit fallback, even if that means stopping and leaving a proposal.

## Explain what success means

Military doctrine calls this approach mission command; the Prussian version is called *Auftragstaktik*. The order explains what needs to happen and why, leaving the details to the person on the spot, who can see what has changed. US Air Force doctrine puts it plainly: commanders direct "what" and "why"; subordinates devise "how."[^afdp]

Approval gates and scheduled runs control when an agent works, but don't tell you what instructions to write. A task list gives little guidance when the situation falls outside it. The agent also needs to know what a successful result would look like.

Suppose the failing test checks that customer records survive a database upgrade. An instruction could say:

> Find why the upgrade test fails. Existing customer records must survive the upgrade unchanged. You may edit application code and run tests in development. Prepare any migration change for human review. Do not weaken the test or change production data.

## How much authority to give an agent

### Write down the limits, and the evidence each action needs

Helmuth von Moltke, chief of the Prussian general staff, gave each subordinate "freedom of action and decision within his authority" in his 1869 instructions to senior commanders.[^hughes] The goal and the limits are separate parts of the order. For the test-fixing agent, those limits might be:

- allowed: edit application code and run tests in a development environment
- proposed: prepare a migration change for a human to approve
- forbidden: change production data

The forbidden list describes the 3am disaster. It needs to be explicit, even when changing production data seems obviously outside the task.

Each permitted action also needs evidence suited to its risks. Passing tests might be required before the agent commits an application fix. They would not authorise a migration change you've reserved for review. If the required evidence is missing, the agent should leave the action for review.

### Keep responsibility with a person

"I do not use agents. I command them," wrote Major Cody Nichols, a US Air Force cyber officer, in *War on the Rocks*, a defence-policy site, on 31 August 2026. He argued that the Pentagon was adopting the centralised half of mission command while neglecting decentralised execution.[^nichols] A reply the next day pointed to what this analogy leaves out: military subordinates are personally accountable for their decisions.[^reply]

Retraining or disabling an agent may change its behaviour, but it does not make the agent answerable for a decision. Responsibility rests with the person who grants its permissions. Name that person and record the work and risks they have authorised. This can cover a class of actions in advance, such as application fixes that pass specified checks. A migration outside that permission still needs a human decision, however many reviewer agents have checked it.

### Rehearse, monitor and review

Before an overnight run, ask the agent to explain its plan. That gives you a chance to catch a misunderstanding before it starts.

Explaining a plan gives little evidence of how the agent will behave. Have it prepare proposals for you to assess before granting permission to carry them out. The test-fixing agent could work this way until you've seen how it handles ambiguous failures, including when it leaves a migration alone.

The reporting routine needs to account for missing reports. Polybius, a Greek historian who travelled with Roman armies, described their camp routine in the mid-second century BC. At sunset a chosen soldier collected the watchword from the tribune on a wooden tablet. It passed from unit to unit and had to return before dark. The tribune checked which tablets came back; their markings let him trace a missing return to a particular part of the camp.[^poly6] You need an equivalent way to notice when an expected report fails to arrive, with a rule for when that absence should wake someone.

Use completed runs to decide whether to change the agent's permissions. US Space Force doctrine ties greater authority to demonstrated competence.[^sdp] An agent's review history can help you decide whether a type of action is ready to move from proposed to allowed. A serious failure should prompt you to reconsider that permission and whether the evidence you required was sufficient.

### Keep teams small, and keep sign-off with humans

Your available time should limit how much work reaches you for approval. If the morning digest routinely takes longer to review than you have available, reduce the number of agents reporting to you or the kinds of proposal they can submit.

A reviewer agent can reduce that workload by rejecting incomplete proposals or asking for more evidence before they reach you. It can check a proposal against rules you've approved, but cannot accept responsibility for an exception to those rules.

## Where delegation breaks

Shared authority needs a procedure for resolving disagreement. A two-person rule should require both people to sign. Reserve it for a short list of actions that cannot be undone, and leave the action pending when the reviewers disagree.

Review turns into rubber-stamping when the volume outruns the reviewer's attention. In April 2024, *+972 Magazine*, an Israeli-Palestinian outlet, and *Local Call* reported on Lavender, an AI system that suggested targets. They said intelligence officers spent about 20 seconds checking each target. One officer told the reporter: "I had zero added value as a human, apart from being a stamp of approval."[^abraham] The Israel Defense Forces disputed the account, saying an analyst must examine each target independently. The reporting rests on six anonymous officers. It raises a question about whether reviewers have enough time to make an independent judgment.

That question also matters for an agent approval queue. If almost every proposal is approved within seconds, check whether the reviewer has time to read the change and its evidence. For a migration, that includes what would happen to existing data; a green test result alone does not answer that. The review screen needs to make that information available before asking for a decision.

An agent also needs room to revise its plan when the original approach stops serving the goal. If application patches cannot fix the failure, the agent should investigate the migration and prepare a proposal. That changes its approach without expanding its authority. It should report that change of plan, so you know what remains unfinished.

Communication also changes what a commander can do from a distance. Abraham Lincoln spent long hours in the War Department's telegraph office and sent about a thousand telegrams during the American civil war.[^wheeler] The telegraph let him reach commanders far from Washington. In an agent workflow, that ability to stay in touch can become a temptation to intervene in every decision.

An approval screen lets you take back decisions you've already delegated. If every permitted application fix still needs your signature, the agent can work only as fast as you can review.

Before the next overnight run, check what still needs your approval. Keep the checks that protect against a specific risk. Remove those that merely ask you to repeat a decision you've already made. Every unnecessary approval puts you back at the telegraph and leaves the agent waiting for orders.

---

### References

[^nelson]: Nelson, H. (1805, October 9). *Memorandum* [The Trafalgar memorandum]. British Library, Add MS 37953; fair copy in the Royal Collection, RCIN 1198306. [https://www.rct.uk/collection/1198306/](https://www.rct.uk/collection/1198306/). Text as transcribed in Corbett, J. S. (Ed.). (1905). *Fighting instructions, 1530–1816*. Navy Records Society.

[^afdp]: US Air Force. (2023, August 14). *Air Force Doctrine Publication 1-1: Mission command*. LeMay Center. [https://www.doctrine.af.mil/Portals/61/documents/AFDP_1-1/AFDP%201-1%20Mission%20Command.pdf](https://www.doctrine.af.mil/Portals/61/documents/AFDP_1-1/AFDP%201-1%20Mission%20Command.pdf)

[^hughes]: Moltke, H. von. (1993). Instructions for large unit commanders (1869). In D. J. Hughes (Ed.), *Moltke on the art of war: Selected writings* (p. 185). Presidio. Quoted in Shunk, D. (2016, March 18). German mission orders: Their doctrinal and operational development from 1866–1940 and mission order combat illustrations from the 1870–71, 1914–18 and 1939–45 wars. *Army Press Online Journal*, 16-12. [https://www.govinfo.gov/content/pkg/GOVPUB-D110-9b33f99d39f0ac5361de11fc96b7e709/pdf/GOVPUB-D110-9b33f99d39f0ac5361de11fc96b7e709.pdf](https://www.govinfo.gov/content/pkg/GOVPUB-D110-9b33f99d39f0ac5361de11fc96b7e709/pdf/GOVPUB-D110-9b33f99d39f0ac5361de11fc96b7e709.pdf)

[^poly6]: Polybius. (1922–27). *The histories* (W. R. Paton, Trans.), 6.34–37. Loeb Classical Library. [https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Polybius/6*.html](https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Polybius/6*.html)

[^sdp]: US Space Force. (2024, November; Admin Change 1, May 2026). *Space Doctrine Publication 6-0: Mission command*. STARCOM. [https://www.starcom.spaceforce.mil/Portals/2/SDP%206-0%20Mission%20Command%20(Nov%202024).pdf](https://www.starcom.spaceforce.mil/Portals/2/SDP%206-0%20Mission%20Command%20(Nov%202024).pdf)

[^nichols]: Nichols, C. (2026, August 31). Stop using AI. Start commanding it. *War on the Rocks*. [https://warontherocks.com/stop-using-ai-start-commanding-it/](https://warontherocks.com/stop-using-ai-start-commanding-it/)

[^reply]: Justin Mc [byline]. (2026, September 1). Stop commanding AI. Start understanding mission command. *Mind of Things* [Substack]. [https://justinmc.substack.com/p/stop-commanding-ai-start-understanding](https://justinmc.substack.com/p/stop-commanding-ai-start-understanding)

[^abraham]: Abraham, Y. (2024, April 3). 'Lavender': The AI machine directing Israel's bombing spree in Gaza. *+972 Magazine*. [https://www.972mag.com/lavender-ai-israeli-army-gaza/](https://www.972mag.com/lavender-ai-israeli-army-gaza/)

[^wheeler]: Wheeler, T. (2006). *Mr. Lincoln's T-mails: The untold story of how Abraham Lincoln used the telegraph to win the Civil War*. HarperCollins.
