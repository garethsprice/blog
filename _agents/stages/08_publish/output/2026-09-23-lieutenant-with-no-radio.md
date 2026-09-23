---
layout: post
title: "Your Overnight Agent Is a Lieutenant With No Radio"
description: "Armies spent two thousand years learning to delegate to people they could not reach. Their methods carry over to AI agents almost unchanged. Their accountability does not, and their failures are a warning about the approval screen you are building."
created_date: 2026-09-23
updated_date: 2026-09-23
---

Armies solved the overnight-agent problem long ago. They learned how to hand real authority to people they could not reach. Their methods carry over to AI agents almost unchanged. Their accountability does not. And the ways their delegation failed teach more than the ways it worked, because a good approval screen makes the worst failure easier.

The problem is easy to state. An agent that runs overnight will hit a case its prompt did not foresee, and no one will be awake to answer. Horatio Nelson had the same problem at sea. On 9 October 1805, twelve days before Trafalgar, he wrote down what his captains should do if they could no longer read his orders: "in case Signals can neither be seen or perfectly understood, no Captain can do very wrong if he places his Ship alongside that of an Enemy."[^nelson] Armies have worked on this problem for two thousand years.

## Give the goal, not the steps

Military doctrine calls this idea mission command. The Prussian version is called *Auftragstaktik*. The order says what to achieve and why. It leaves the how to the person on the spot, who can see things the order's author cannot. Helmuth von Moltke, chief of the Prussian general staff, made it a rule in 1858: "an order should contain only what the subordinate for the achievement of his goals cannot determine on his own."[^muth] Nelson's memorandum does the same at sea. It admits that "Something must be left to chance". Then it gives one fallback that serves the goal however the battle goes. Current US Air Force doctrine puts it in one line: commanders direct "what" and "why"; subordinates devise "how."[^afdp]

In the past 18 months, agent frameworks have shipped the tools for this: approval gates, pauses that survive a restart, and scheduled runs. The tools say nothing about what to write in the order. A task list breaks at the first case it did not list. An end state (the result the work must reach) lets the agent handle the case nobody listed. So test your agent's mission file the way Nelson would: can the agent act correctly when no human can be reached?

## Eight army routines map onto agent design

Mission command is a philosophy. Routines are what made it work. Eight of them turn up again and again in the record, and each has a direct equivalent for agents.

### Write down the limits, and the evidence each action needs

Moltke's 1869 instructions to senior commanders give each subordinate "freedom of action and decision within his authority."[^hughes] Those last three words matter most. Freedom has limits, and doctrine lists them separately: what the subordinate must do, and what the subordinate must not do. An agent needs the same split, as three tiers of action:

- allowed: the agent acts alone
- proposed: the agent asks a human to approve
- forbidden: the agent never does it

Teams write the first two, because those describe the work. The forbidden list describes the 3am disaster. It is the one teams most easily skip.

Rules of engagement tie authority to evidence. A soldier may fire only after positively identifying the target, however sure the soldier feels. Ukraine's drone war has built this rule into hardware. Russian jamming cuts the link between operator and drone near the target. So since early 2024, Ukrainian units have used drones that finish the attack on their own. The operator still picks the target. The drone keeps its aim after it loses contact. CSIS, a Washington think-tank, estimated in March 2025 that this raised hit rates from 10–20% to 70–80%.[^csis] The drone may carry on without a human only because a human identified the target first. Agents need the same rule. Each type of action an agent may take alone (each "action class") should require matching evidence: a passing test suite, a diff under a size limit, or a record that matches. No evidence, no authority.

### Build trust by rehearsing, then grant it on the record

Rehearsal makes a subordinate predictable before it matters. In late September 1805, Nelson explained his plan to his captains over dinners aboard *Victory*. On 1 October he wrote to Emma Hamilton that the effect "was like an electric shock."[^emma] The Mongols rehearsed on a larger scale. Ata-Malik Juvaini, a Persian historian who served the Mongols, recorded that Chinggis Khan's winter hunts drove game into a ring. If animals broke through a stretch of the line, the commanders "of thousands, hundreds and tens are clubbed". War, he wrote, "is after the same fashion".[^juvaini]

Agents can rehearse in two ways. In an evening backbrief, the agent says in its own words what it will do tonight, before it starts, so a human can spot where the plan has drifted. In shadow mode, the agent runs a new class of action as proposals only, for weeks. A human compares its choices with their own before it may act alone.

Good routines also decide in advance what should wake the commander. Polybius, a Greek historian who travelled with Roman armies, described their camp routine in the mid-second century BC. At sunset a chosen soldier collected the watchword from the tribune on a wooden tablet. He carried it from unit to unit, and it had to be back before dark. If a tablet was missing, the tribune "knows by the marks from what quarter the tablet has not returned".[^poly6] At night, inspectors collected a token from each post they found awake, and handed them all in at dawn. The routine made silence a signal. An agent needs two things here. First, branches planned in advance, so routine cases never turn into proposals. Second, a clear rule for when to page a human, including when an expected report does not arrive.

The after-action review turns every exercise into data. The US Army built the habit at its National Training Center in the Mojave desert, activated in 1980. From 1982, instrumented mock battles there fed a structured debrief, which an Army history calls the "principal learning experience".[^chapman] The Center for Army Lessons Learned followed in 1985, set up after mistakes in the 1983 invasion of Grenada.[^call] Doctrine then links authority to the record. The US Space Force tells commanders to delegate "greater authority to subordinates who have demonstrated competency".[^sdp]

For agents, this becomes an autonomy ratchet. Each night, an automated review scores each action class. A clean record moves a class up from proposed to allowed. One bad outcome moves it back down. Authority can go either way, and the record decides.

### Keep teams small, and keep sign-off with humans

Lasting military hierarchies limit how many people one person commands. Juvaini records that the Mongols divided their people "into companies of ten," with a commander over each ten, hundred, thousand and ten thousand.[^juvaini] In the Imperial era, a Roman century held 80 men, in tent groups of eight.[^hyginus] In 2014, US Army doctrine put the workable number at two to six subordinate units.[^fm60] The limit is the commander's attention, and approvers have the same limit. If the morning digest has to scroll, the system has a fan-out problem: too much reports to one person. Set the cap twice: on how many agents report to one approver, and on how many action classes each agent may propose.

Staff officers act in the commander's name, but the responsibility stays with the commander. In 1866 the King of Prussia authorised Moltke to issue orders to his army commanders directly in the King's name.[^britannica] The name on the order was the King's, and so was the blame. A reviewer agent that checks another agent's proposals is a staff officer. It can reject a proposal, ask for more evidence and trim the digest, all in the approver's name. It cannot approve. Approving means accepting the risk, and a reviewer has nothing to lose.

## Accountability does not transfer to agents

On 31 August 2026, Major Cody Nichols, a US Air Force cyber officer, argued in *War on the Rocks*, a defence-policy site, that agents can receive intent the way airmen do: "I do not use agents. I command them."[^nichols] He said the Pentagon was paying for the centralised half of mission command and ignoring decentralised execution. The next day a reply on Substack, "Stop Commanding AI. Start Understanding Mission Command," pushed back. It said mission command rests on "risk acceptance and personal accountability", and that Nichols offers "decentralized execution without decentralized accountability." Its sharpest line says Nichols would "replace interpersonal trust with engineering assurance."[^reply]

The reply is right, and the history above backs it. Every routine in this essay assumes that someone answers for the result. Nelson's captains faced courts martial. Juvaini's commanders of ten faced the club. A Roman sentry who lost his token faced a tribunal. You can retrain an agent or switch it off. You cannot hold it responsible in a way that changes what the next agent does. The White House made the same point in June 2026, when it ordered an update to the Pentagon's directive on autonomous weapons. Trust, the memorandum says, "is rooted in an unbroken chain of command and accountability".[^nspm]

The routines still transfer, because what they produce is predictability. Predictability is what the reply calls engineering assurance, and it is all an operator needs from the agent. Trust stays with a person. Every consequential action needs a named human who accepted the risk, in writing, before the agent acted. Reviewer agents filter. They never sign.

## Delegation breaks in four ways, and a good approval screen makes the worst one easier

Shared authority fails when it means taking turns. At Cannae in 216 BC, Rome's two consuls, Varro and Paullus, disagreed about whether to fight Hannibal's cavalry on open ground. By custom, they commanded on alternate days. Polybius says Varro advanced on his day "in spite of the protests and active opposition of his colleague". Livy says he gave the signal without consulting him.[^poly3][^livy] Rome lost most of its army that afternoon. Polybius's patron was Paullus's grandson, so his blame on Varro may be unfair.[^oconnell] But both accounts record the alternation. Two approvers who each assume the other one checked have rebuilt it. A two-person rule works only when both people must sign, and only for a short list of actions that cannot be undone.

Review turns into rubber-stamping when the volume outruns the reviewer's attention. In April 2024, *+972 Magazine*, an Israeli-Palestinian outlet, and *Local Call* reported on Lavender, an AI system that suggested targets. They said intelligence officers spent about 20 seconds checking each target. One officer told the reporter: "I had zero added value as a human, apart from being a stamp of approval."[^abraham] The Israel Defense Forces disputed the account. They said an analyst must examine each target independently. The claim rests on six anonymous officers. Whatever happened in Gaza, the failure it describes does not need a war: a review loop can stop working while every dashboard says it is healthy. The phrase "human on the loop" dates from a 2009 US Air Force plan for drones.[^usaf] Nothing in the phrase measures whether the human is paying attention. Watch for this pattern: an approval rate near 100%, with review times under a minute.

Departing from the plan can go wrong in two ways. A subordinate who departs from the plan without saying so breaks the deal, even if the outcome is good, because the next plan will be built on false assumptions. A subordinate who follows the letter of an order against its purpose breaks the deal too. At Waterloo on 18 June 1815, Marshal Grouchy heard the cannon before noon, and one of his generals urged him to march toward it. Grouchy replied, by one account, "My duty is to execute the Emperor's orders".[^grouchy] Napoleon had told his chief of staff in 1806, "I alone know what I have to do."[^durham] An agent needs permission to depart from its plan when the end state requires it. It also needs an absolute duty to report that it did.

The most common failure is the one a good approval screen invites. A fast channel tempts the person at the top to pull decisions up to themselves. Abraham Lincoln spent long hours in the War Department's telegraph office and sent about a thousand telegrams during the American civil war.[^wheeler] After Gettysburg, Washington pressed George Meade by telegraph for a pursuit that Meade judged unwise. On 14 July 1863 a telegram told him that Lee's escape had caused "great dissatisfaction in the mind of the President". Meade asked to be relieved.[^mackowski] A century later, Martin van Creveld, a military historian, described a company commander in a Vietnam firefight, watched by his battalion commander circling above, "who was in turn supervised by the brigade commander circling a thousand or so feet higher up".[^vancreveld] The telegraph and the helicopter were built to extend command. Both were used to collapse it. A clean approval screen with one-tap approval on a phone does the same. It makes it cheap to send every decision through one person. The whole system then slows to that person's pace, while looking busy.

Tomorrow, count how often actions in the allowed tier get pulled back into approval. If that number is rising, the agent has not become less trustworthy. Its commander has found a telegraph.

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

[^call]: US Army. (2015, July 24). [Article on the history of the Center for Army Lessons Learned]. *Army.mil*. [https://www.army.mil/article/152822/](https://www.army.mil/article/152822/)

[^sdp]: US Space Force. (2024, November; Admin Change 1, May 2026). *Space Doctrine Publication 6-0: Mission command*. STARCOM. [https://www.starcom.spaceforce.mil/Portals/2/SDP%206-0%20Mission%20Command%20(Nov%202024).pdf](https://www.starcom.spaceforce.mil/Portals/2/SDP%206-0%20Mission%20Command%20(Nov%202024).pdf)

[^hyginus]: Pseudo-Hyginus. (c. 2nd century AD). *De munitionibus castrorum*, 1. [https://www.roman-britain.co.uk/classical-references/de-munitionibus-castrorum-pseudo-hyginus/](https://www.roman-britain.co.uk/classical-references/de-munitionibus-castrorum-pseudo-hyginus/)

[^fm60]: US Army. (2014, May). *FM 6-0: Commander and staff organization and operations*, para. D-7. [https://www.milsci.ucsb.edu/sites/default/files/sitefiles/fm6_0.pdf](https://www.milsci.ucsb.edu/sites/default/files/sitefiles/fm6_0.pdf)

[^britannica]: Encyclopaedia Britannica. Helmuth von Moltke: Chief of the general staff. [https://www.britannica.com/biography/Helmuth-von-Moltke/Chief-of-the-general-staff](https://www.britannica.com/biography/Helmuth-von-Moltke/Chief-of-the-general-staff)

[^nichols]: Nichols, C. (2026, August 31). Stop using AI. Start commanding it. *War on the Rocks*. [https://warontherocks.com/stop-using-ai-start-commanding-it/](https://warontherocks.com/stop-using-ai-start-commanding-it/)

[^reply]: Justin Mc [byline]. (2026, September 1). Stop commanding AI. Start understanding mission command. *Mind of Things* [Substack]. [https://justinmc.substack.com/p/stop-commanding-ai-start-understanding](https://justinmc.substack.com/p/stop-commanding-ai-start-understanding)

[^nspm]: The White House. (2026, June 5). *National Security Presidential Memorandum 11: Artificial intelligence in the national security enterprise*, Sec. 1. [https://www.whitehouse.gov/presidential-actions/2026/06/national-security-presidential-memorandum-nspm-11/](https://www.whitehouse.gov/presidential-actions/2026/06/national-security-presidential-memorandum-nspm-11/)

[^poly3]: Polybius. *The histories* (E. S. Shuckburgh, Trans.), 3.110–113. [https://faculty.uml.edu/ethan_spanier/Teaching/documents/CP13.4BattleofCannae.pdf](https://faculty.uml.edu/ethan_spanier/Teaching/documents/CP13.4BattleofCannae.pdf)

[^livy]: Livy. *Ab urbe condita*, 22.41, 22.45. [https://www.thelatinlibrary.com/livy/liv.22.shtml](https://www.thelatinlibrary.com/livy/liv.22.shtml)

[^oconnell]: O'Connell, R. L. (2010). *The ghosts of Cannae: Hannibal and the darkest hour of the Roman Republic* (ch. 7). Random House.

[^abraham]: Abraham, Y. (2024, April 3). 'Lavender': The AI machine directing Israel's bombing spree in Gaza. *+972 Magazine*. [https://www.972mag.com/lavender-ai-israeli-army-gaza/](https://www.972mag.com/lavender-ai-israeli-army-gaza/)

[^usaf]: US Air Force. (2009, May 18). *Unmanned aircraft systems flight plan 2009–2047*. [https://apps.dtic.mil/sti/citations/ADA504096](https://apps.dtic.mil/sti/citations/ADA504096). The term was popularised by Human Rights Watch. (2012, November 19). *Losing humanity: The case against killer robots*. [https://www.hrw.org/report/2012/11/19/losing-humanity/case-against-killer-robots](https://www.hrw.org/report/2012/11/19/losing-humanity/case-against-killer-robots)

[^grouchy]: Millar, S. "My duty is to execute the Emperor's orders": Grouchy at Walhain. *The Napoleon Series*. [https://www.napoleon-series.org/military-info/battles/1815/c_grouchyorders.html](https://www.napoleon-series.org/military-info/battles/1815/c_grouchyorders.html)

[^durham]: Durham, N. L. (2009). *The command and control of the Grand Armée: Napoleon as organizational designer* [Master's thesis, Naval Postgraduate School], citing Rothenberg (1978). [https://hdl.handle.net/10945/4722](https://hdl.handle.net/10945/4722)

[^wheeler]: Wheeler, T. (2006). *Mr. Lincoln's T-mails: The untold story of how Abraham Lincoln used the telegraph to win the Civil War*. HarperCollins.

[^mackowski]: Halleck, H. W. (1863, July 14). Telegram to G. G. Meade. *Official Records*, Ser. I, Vol. 27. Discussed in Mackowski, C. (2022, July 14). Halleck and Meade in the days after Gettysburg. *Emerging Civil War*. [https://emergingcivilwar.com/2022/07/14/halleck-and-meade-in-the-days-after-gettysburg/](https://emergingcivilwar.com/2022/07/14/halleck-and-meade-in-the-days-after-gettysburg/)

[^vancreveld]: van Creveld, M. (1985). *Command in war* (p. 255). Harvard University Press. Quoted in Pigeau, R., & McCann, C. (2002). Re-conceptualizing command and control. *Canadian Military Journal*, 3(1), 53–64. [https://www.journal.forces.gc.ca/vo3/no1/doc/53-64-eng.pdf](https://www.journal.forces.gc.ca/vo3/no1/doc/53-64-eng.pdf)
