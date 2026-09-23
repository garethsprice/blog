---
layout: post
title: "Your Overnight Agent Is a Lieutenant With No Radio"
description: "An overnight agent needs instructions that hold up when nobody is available to answer. Military delegation offers useful lessons about setting limits, but an approval screen can leave one person making every decision."
created_date: 2026-09-23
updated_date: 2026-09-23
---

An overnight agent will eventually hit a case its instructions don't cover. Nobody is awake to answer, so it needs some way to decide whether to continue or stop. Military commanders have spent centuries dealing with a version of this problem: giving orders to people they won't be able to reach. Their methods offer useful ways to set an agent's authority, provided a human remains responsible for the work.

Horatio Nelson wrote orders for just such a loss of contact. On 9 October 1805, twelve days before Trafalgar, he told his captains what to do if they could no longer read his signals: "in case Signals can neither be seen or perfectly understood, no Captain can do very wrong if he places his Ship alongside that of an Enemy."[^nelson]

## Explain what success means

Military doctrine calls this idea mission command; the Prussian version is called *Auftragstaktik*. The order explains what needs to happen and why, leaving the details to the person on the spot, who can see what has changed. Helmuth von Moltke, chief of the Prussian general staff, made it a rule in 1858: "an order should contain only what the subordinate for the achievement of his goals cannot determine on his own."[^muth] US Air Force doctrine uses the same distinction: commanders direct "what" and "why"; subordinates devise "how."[^afdp]

Approval gates and scheduled runs control when an agent works, but leave the author to decide what its instructions should say. A task list gives little guidance when the situation falls outside it. The agent also needs to know what a successful result would look like.

Suppose an agent is fixing failing tests overnight and traces a failure to a database migration. "Make the tests pass" leaves open whether it should change the application, rewrite the migration or weaken the test. A useful instruction would describe the behaviour the tests are meant to protect and say which changes the agent may make.

## How much authority to give an agent

### Write down the limits, and the evidence each action needs

Moltke's 1869 instructions to senior commanders give each subordinate "freedom of action and decision within his authority."[^hughes] The goal and the limits are separate parts of the order. For the test-fixing agent, those limits might be:

- allowed: edit application code and run tests in a development environment
- proposed: prepare a migration change for a human to approve
- forbidden: change production data

The forbidden list describes the 3am disaster. It needs to be explicit, even when changing production data seems obviously outside the task.

Ukraine's drone war offers a narrow example of autonomy after a human decision. Russian jamming cuts the link between operator and drone near the target. Since early 2024, Ukrainian units have used drones that finish the attack on their own: the operator picks the target, and the drone maintains its aim if the link drops. CSIS, a Washington think-tank, estimated in March 2025 that this raised hit rates from 10–20% to 70–80%.[^csis] The operator has made the targeting decision before contact is lost.

For an agent, permission should likewise depend on a specific check. Passing tests might be required before it commits an application fix. They would not authorise a migration change that the operator had reserved for review. Each permitted action needs evidence suited to its risks; if that evidence is missing, the agent should leave the action for review.

### Rehearse before granting authority

In late September 1805, Nelson explained his plan to his captains over dinners aboard *Victory*. On 1 October he wrote to Emma Hamilton that the effect "was like an electric shock."[^emma] An agent's evening backbrief serves a more modest purpose: it describes the work it plans to do, giving the operator a chance to catch a misunderstanding before the run starts.

That conversation gives little evidence of how the agent will behave during the run. In shadow mode, it prepares proposals for a human to assess before receiving permission to carry them out. The test-fixing agent could work this way until its operator has seen how it handles ambiguous failures, including when it leaves a migration alone.

The reporting routine needs to account for missing reports. Polybius, a Greek historian who travelled with Roman armies, described their camp routine in the mid-second century BC. At sunset a chosen soldier collected the watchword from the tribune on a wooden tablet. He carried it from unit to unit, and it had to be back before dark. If a tablet was missing, the tribune "knows by the marks from what quarter the tablet has not returned".[^poly6] At night, inspectors collected a token from each post they found awake, and handed them all in at dawn. An agent's operator needs an equivalent way to notice when an expected report fails to arrive, with a rule for when that absence should wake someone.

Review after the work provides a basis for changing those permissions. At the US Army's National Training Center, instrumented mock battles fed a structured debrief that an Army history calls the "principal learning experience".[^chapman] US Space Force doctrine makes the link to authority explicit, telling commanders to delegate "greater authority to subordinates who have demonstrated competency".[^sdp] An agent's review history can help its operator decide whether a type of action is ready to move from proposed to allowed. A serious failure should trigger a review of that permission, including whether the evidence required was sufficient.

### Keep teams small, and keep sign-off with humans

An approver's available time should limit how much work reaches them. Military hierarchies face a similar constraint: Ata-Malik Juvaini, a Persian historian who served the Mongols, records that they divided their people "into companies of ten," with a commander over each ten, hundred, thousand and ten thousand.[^juvaini] In 2014, US Army doctrine put the workable number at two to six subordinate units.[^fm60] Those numbers are no prescription for an agent system. The useful test is whether the morning digest routinely takes longer to review than the approver has available. If it does, reduce the number of agents reporting to that person or the kinds of proposal they can submit.

A reviewer agent can reduce that workload by rejecting incomplete proposals or asking for more evidence before they reach a human. Staff work offers a useful comparison. In 1866 the King of Prussia authorised Moltke to issue orders to his army commanders directly in the King's name.[^britannica] A reviewer similarly works within someone else's authority. It can check a proposal against rules the operator has approved, but cannot accept responsibility for an exception to those rules.

## Accountability does not transfer to agents

On 31 August 2026, Major Cody Nichols, a US Air Force cyber officer, argued in *War on the Rocks*, a defence-policy site, that agents can receive intent the way airmen do: "I do not use agents. I command them."[^nichols] He said the Pentagon was paying for the centralised half of mission command and ignoring decentralised execution. The next day a reply on Substack, "Stop Commanding AI. Start Understanding Mission Command," pushed back. It said mission command rests on "risk acceptance and personal accountability", and that Nichols offers "decentralized execution without decentralized accountability." It accused him of trying to "replace interpersonal trust with engineering assurance."[^reply]

That objection matters because military delegation depends on personal responsibility. Nelson's captains faced courts martial; a Roman sentry could face a tribunal. Retraining or disabling an agent may change the system's behaviour, but it does not make the agent answerable for a decision. The White House used similar language in June 2026, when it ordered an update to the Pentagon's directive on autonomous weapons. Trust, the memorandum says, "is rooted in an unbroken chain of command and accountability".[^nspm]

Rehearsals and reviews can help make an agent's behaviour more predictable. Responsibility still rests with the person who grants its permissions. That person should be named, with a written record of the work and risks they have authorised. This can cover a class of actions in advance, such as application fixes that pass specified checks. A migration outside that permission still needs a human decision, however many reviewer agents have checked it.

## Where delegation breaks

Shared authority needs a procedure for resolving disagreement. At Cannae in 216 BC, Rome's two consuls, Varro and Paullus, disagreed about whether to fight Hannibal's cavalry on open ground. By custom, they commanded on alternate days. Polybius says Varro advanced on his day "in spite of the protests and active opposition of his colleague". Livy says he gave the signal without consulting him.[^poly3][^livy] Rome lost most of its army that afternoon. Polybius's patron was Paullus's grandson, so his blame on Varro may be unfair.[^oconnell] Both accounts, though, describe an arrangement in which one commander could proceed over the other's objection. For an agent workflow, a two-person rule should require both people to sign. Reserve it for a short list of actions that cannot be undone, and leave the action pending when the reviewers disagree.

Review turns into rubber-stamping when the volume outruns the reviewer's attention. In April 2024, *+972 Magazine*, an Israeli-Palestinian outlet, and *Local Call* reported on Lavender, an AI system that suggested targets. They said intelligence officers spent about 20 seconds checking each target. One officer told the reporter: "I had zero added value as a human, apart from being a stamp of approval."[^abraham] The Israel Defense Forces disputed the account, saying an analyst must examine each target independently. The reporting rests on six anonymous officers. It raises a question about whether reviewers have enough time to make an independent judgment.

That question also matters for an agent approval queue. If almost every proposal is approved within seconds, check whether the reviewer has time to read the change and its evidence. For a migration, that includes what would happen to existing data; a green test result alone does not answer that. The review screen needs to make that information available before asking for a decision.

An agent also needs room to revise its plan when the original approach stops serving the goal. At Waterloo on 18 June 1815, Marshal Grouchy heard the cannon before noon, and one of his generals urged him to march toward it. Grouchy replied, by one account, "My duty is to execute the Emperor's orders".[^grouchy] For the test-fixing agent, changing course might mean investigating the migration and preparing a proposal instead of continuing to patch application code. It should report that change of plan, so the operator knows what remains unfinished. Permission to change the plan still has to fit within the agreed limits.

Easy communication creates a different problem: the person at the top can take back decisions they have already delegated. Abraham Lincoln spent long hours in the War Department's telegraph office and sent about a thousand telegrams during the American civil war.[^wheeler] After Gettysburg, Washington pressed George Meade by telegraph for a pursuit that Meade judged unwise. On 14 July 1863 a telegram told him that Lee's escape had caused "great dissatisfaction in the mind of the President". Meade asked to be relieved.[^mackowski] A century later, Martin van Creveld, a military historian, described a company commander in a Vietnam firefight, watched by his battalion commander circling above, "who was in turn supervised by the brigade commander circling a thousand or so feet higher up".[^vancreveld]

Better communications gave senior commanders closer access to decisions below them. An approval screen can encourage the same habit by making it easy to send every decision through one person, including work that person has already authorised. The queue then grows with the work, and everything waits for the approver.

Tomorrow, count how often actions in the allowed tier get pulled back into approval, and ask why. If there's no new risk behind the extra checks, the agent's commander may have found a telegraph.

---

### References

[^nelson]: Nelson, H. (1805, October 9). *Memorandum* [The Trafalgar memorandum]. British Library, Add MS 37953; fair copy in the Royal Collection, RCIN 1198306. [https://www.rct.uk/collection/1198306/](https://www.rct.uk/collection/1198306/). Text as transcribed in Corbett, J. S. (Ed.). (1905). *Fighting instructions, 1530–1816*. Navy Records Society.

[^muth]: Moltke, H. von (1858), as translated in Muth, J. (2011, September 9). An elusive command philosophy and a different command culture. *Foreign Policy*. [https://foreignpolicy.com/2011/09/09/an-elusive-command-philosophy-and-a-different-command-culture/](https://foreignpolicy.com/2011/09/09/an-elusive-command-philosophy-and-a-different-command-culture/)

[^afdp]: US Air Force. (2023, August 14). *Air Force Doctrine Publication 1-1: Mission command*. LeMay Center. [https://www.doctrine.af.mil/Portals/61/documents/AFDP_1-1/AFDP%201-1%20Mission%20Command.pdf](https://www.doctrine.af.mil/Portals/61/documents/AFDP_1-1/AFDP%201-1%20Mission%20Command.pdf)

[^hughes]: Moltke, H. von. (1993). Instructions for large unit commanders (1869). In D. J. Hughes (Ed.), *Moltke on the art of war: Selected writings* (p. 185). Presidio. Quoted in Shunk, D. (2016, March 18). German mission orders: Their doctrinal and operational development from 1866–1940 and mission order combat illustrations from the 1870–71, 1914–18 and 1939–45 wars. *Army Press Online Journal*, 16-12. [https://www.govinfo.gov/content/pkg/GOVPUB-D110-9b33f99d39f0ac5361de11fc96b7e709/pdf/GOVPUB-D110-9b33f99d39f0ac5361de11fc96b7e709.pdf](https://www.govinfo.gov/content/pkg/GOVPUB-D110-9b33f99d39f0ac5361de11fc96b7e709/pdf/GOVPUB-D110-9b33f99d39f0ac5361de11fc96b7e709.pdf)

[^csis]: Bondar, K. (2025, March 6). *Ukraine's future vision and current capabilities for waging AI-enabled autonomous warfare*. Center for Strategic and International Studies. [https://www.csis.org/analysis/ukraines-future-vision-and-current-capabilities-waging-ai-enabled-autonomous-warfare](https://www.csis.org/analysis/ukraines-future-vision-and-current-capabilities-waging-ai-enabled-autonomous-warfare)

[^emma]: Nelson, H. (1805, October 1). Letter to Lady Hamilton. In N. H. Nicolas (Ed.), *The dispatches and letters of Vice Admiral Lord Viscount Nelson* (Vol. 7). [https://www.wtj.com/archives/nelson/1805_10a.htm](https://www.wtj.com/archives/nelson/1805_10a.htm)

[^juvaini]: Juvaini, ʿA. (1958). *The history of the world-conqueror* (J. A. Boyle, Trans.; Vol. 1, pp. 27–31). Manchester University Press. [https://archive.org/details/historyoftheworl011691mbp](https://archive.org/details/historyoftheworl011691mbp)

[^poly6]: Polybius. (1922–27). *The histories* (W. R. Paton, Trans.), 6.34–37. Loeb Classical Library. [https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Polybius/6*.html](https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Polybius/6*.html)

[^chapman]: Chapman, A. W. (1992). *The origins and development of the National Training Center, 1976–1984*. US Army Training and Doctrine Command. [https://files.eric.ed.gov/fulltext/ED369659.pdf](https://files.eric.ed.gov/fulltext/ED369659.pdf)

[^sdp]: US Space Force. (2024, November; Admin Change 1, May 2026). *Space Doctrine Publication 6-0: Mission command*. STARCOM. [https://www.starcom.spaceforce.mil/Portals/2/SDP%206-0%20Mission%20Command%20(Nov%202024).pdf](https://www.starcom.spaceforce.mil/Portals/2/SDP%206-0%20Mission%20Command%20(Nov%202024).pdf)

[^fm60]: US Army. (2014, May). *FM 6-0: Commander and staff organization and operations*, para. D-7. [https://www.milsci.ucsb.edu/sites/default/files/sitefiles/fm6_0.pdf](https://www.milsci.ucsb.edu/sites/default/files/sitefiles/fm6_0.pdf)

[^britannica]: Encyclopaedia Britannica. Helmuth von Moltke: Chief of the general staff. [https://www.britannica.com/biography/Helmuth-von-Moltke/Chief-of-the-general-staff](https://www.britannica.com/biography/Helmuth-von-Moltke/Chief-of-the-general-staff)

[^nichols]: Nichols, C. (2026, August 31). Stop using AI. Start commanding it. *War on the Rocks*. [https://warontherocks.com/stop-using-ai-start-commanding-it/](https://warontherocks.com/stop-using-ai-start-commanding-it/)

[^reply]: Justin Mc [byline]. (2026, September 1). Stop commanding AI. Start understanding mission command. *Mind of Things* [Substack]. [https://justinmc.substack.com/p/stop-commanding-ai-start-understanding](https://justinmc.substack.com/p/stop-commanding-ai-start-understanding)

[^nspm]: The White House. (2026, June 5). *National Security Presidential Memorandum 11: Artificial intelligence in the national security enterprise*, Sec. 1. [https://www.whitehouse.gov/presidential-actions/2026/06/national-security-presidential-memorandum-nspm-11/](https://www.whitehouse.gov/presidential-actions/2026/06/national-security-presidential-memorandum-nspm-11/)

[^poly3]: Polybius. *The histories* (E. S. Shuckburgh, Trans.), 3.110–113. [https://faculty.uml.edu/ethan_spanier/Teaching/documents/CP13.4BattleofCannae.pdf](https://faculty.uml.edu/ethan_spanier/Teaching/documents/CP13.4BattleofCannae.pdf)

[^livy]: Livy. *Ab urbe condita*, 22.41, 22.45. [https://www.thelatinlibrary.com/livy/liv.22.shtml](https://www.thelatinlibrary.com/livy/liv.22.shtml)

[^oconnell]: O'Connell, R. L. (2010). *The ghosts of Cannae: Hannibal and the darkest hour of the Roman Republic* (ch. 7). Random House.

[^abraham]: Abraham, Y. (2024, April 3). 'Lavender': The AI machine directing Israel's bombing spree in Gaza. *+972 Magazine*. [https://www.972mag.com/lavender-ai-israeli-army-gaza/](https://www.972mag.com/lavender-ai-israeli-army-gaza/)

[^grouchy]: Millar, S. "My duty is to execute the Emperor's orders": Grouchy at Walhain. *The Napoleon Series*. [https://www.napoleon-series.org/military-info/battles/1815/c_grouchyorders.html](https://www.napoleon-series.org/military-info/battles/1815/c_grouchyorders.html)

[^wheeler]: Wheeler, T. (2006). *Mr. Lincoln's T-mails: The untold story of how Abraham Lincoln used the telegraph to win the Civil War*. HarperCollins.

[^mackowski]: Halleck, H. W. (1863, July 14). Telegram to G. G. Meade. *Official Records*, Ser. I, Vol. 27. Discussed in Mackowski, C. (2022, July 14). Halleck and Meade in the days after Gettysburg. *Emerging Civil War*. [https://emergingcivilwar.com/2022/07/14/halleck-and-meade-in-the-days-after-gettysburg/](https://emergingcivilwar.com/2022/07/14/halleck-and-meade-in-the-days-after-gettysburg/)

[^vancreveld]: van Creveld, M. (1985). *Command in war* (p. 255). Harvard University Press. Quoted in Pigeau, R., & McCann, C. (2002). Re-conceptualizing command and control. *Canadian Military Journal*, 3(1), 53–64. [https://www.journal.forces.gc.ca/vo3/no1/doc/53-64-eng.pdf](https://www.journal.forces.gc.ca/vo3/no1/doc/53-64-eng.pdf)
