---
layout: post
title: "AI Doesn't Fix My ADHD. It Inverts It."
description: "For the millions of adults with inattentive ADHD, AI tools don't remove the disorder's core problem — they replace the inability to start with the inability to stop."
created_date: 2026-03-02
updated_date: 2026-03-02
---
I have inattentive ADHD and I build AI tools for a living. The first weeks with a large language model felt like someone had finally fixed my brain. The blank page — the thing that has defeated me more often than any deadline, any boss, any amount of self-recrimination — was gone. I didn't have to write the first paragraph. I just had to respond to one. Ideas that had been sitting in notebooks for months suddenly moved. I started projects I'd been circling for years. Refactoring work and tech debt that had given me a crushing feeling of overwhelm on a small startup team — the kind of work where you know it matters but can't make yourself start — suddenly became approachable. We are now well on our way to fully autonomous resolution of most bugs and even small features. The productivity gains are not hypothetical. They are transformative.

Three months later I had 14 open threads across six projects. I had produced more than in the previous year, and I was further behind than when I started. Every problem AI solved for my ADHD brain had created a mirror problem — not despite the benefit, but because of it.

The pattern is common enough to have its own shape in online ADHD communities. The specifics differ — features instead of projects, research rabbit holes instead of architecture tangents — but the arc is the same: euphoria, proliferation, disorientation. The conventional wisdom, from CHADD, the largest ADHD advocacy organisation in the United States, to ADDitude Magazine to Understood.org, is that AI is a superpower for the neurodivergent brain. The emerging evidence suggests we're wrong — not about the benefits, which are real, but about what happens after the benefits have had time to compound.

## The superpower narrative is everywhere. The evidence for it is almost nowhere.

The claim that AI tools transform ADHD has achieved the status of settled fact across the ADHD ecosystem. CHADD's *Attention Magazine* calls AI "a game-changer" [^1]. ADDitude positions ChatGPT as "an executive function tool for ADHD brains" [^2]. There are books, dedicated websites, and abundant personal testimony.

As of early 2026, not a single randomised controlled trial has measured how generative AI affects ADHD-specific outcomes. Not productivity. Not burnout. Not hyperfocus. Not task-switching.

The largest positive study is a report commissioned by Microsoft, surveying employees with various disabilities using Copilot. Of those surveyed, 88% reported feeling more productive [^3]. But the study lumped ADHD together with autism, dyslexia, and other conditions; measured satisfaction rather than outcomes; and was funded by the company selling the product. A 2025 scoping review in *Computers & Education: Artificial Intelligence* examined all available research on generative AI for neurodivergent populations and found only 9 of 21 sources contained original data [^4]. The authors called the evidence base "particularly striking" in its thinness.

The superpower narrative isn't built on evidence. It's built on the first act of a three-act story.

## Every benefit creates a mirror problem

Russell Barkley, the most cited ADHD researcher alive, describes the condition as fundamentally a disorder of executive function: deficits in working memory, time perception, self-regulation, and — critically — task initiation [^5]. William Dodson, a psychiatrist specialising in adult ADHD, captures the motivational architecture with his concept of the "interest-based nervous system": ADHD brains run on novelty, challenge, and urgency, not on importance or distant reward [^6].

AI addresses these deficits with precision. It eliminates the blank-page problem. It holds the state of a problem while you think, functioning as external working memory. It can receive and develop an idea without requiring you to immediately pursue it.

*Task initiation becomes task cessation.* The frictionlessness that makes it easy to start makes it nearly impossible to stop. Inattentive ADHD includes hyperfocus — the ability to sustain intense, absorbing attention on something interesting for hours without noticing time pass. Traditional work has natural interruptions: meetings, colleagues, the end of a workday. A large language model conversation has none. It is always available, always responsive, always interesting. Recent research has distinguished two types of hyperfocus: one mediated by executive function and one driven by reward sensitivity. AI tools — low-friction, high-novelty, endlessly responsive — are structurally optimised to trigger the reward-driven variant. The one you don't control.

Steve Yegge, the software engineer whose essays on developer tools have shaped industry debate for two decades, described this as AI's "vampiric effect" in a widely discussed February 2026 interview [^7]: the tool gets you excited, you work at extraordinary intensity, and you collapse from exhaustion after sessions you can't account for. He proposed that only about three productive hours per day are sustainable at maximum AI-assisted intensity. For someone with ADHD time-blindness, three hours and seven hours feel identical from the inside.

*Productivity becomes compulsion.* An AI conversation operates on what behavioural psychology calls a variable ratio reinforcement schedule [^8] — the same reward pattern that makes slot machines the most addictive form of gambling. You send a prompt. Sometimes the response is extraordinary. Sometimes it's mediocre. Sometimes it's wrong in a way that sends you down a 30-minute correction loop. You can't predict which you'll get, and that unpredictability is precisely what makes the behaviour compulsive. Variable rewards trigger dopamine release not at the moment of reward but at the moment of *anticipation* — and the less predictable the reward, the stronger the signal.

This is the mechanism at the centre of the landmark Meta addiction trial underway in Los Angeles, where plaintiffs argue that Instagram's algorithmic feed is a defective product because its variable-reward design exploits this neural pathway. The software engineer Glyph made the connection to AI explicit: large language models are slot machines [^9]. You remember the jackpots. You forget the hours of futzing.

ADHD brains are neurologically predisposed to this trap. PET imaging studies led by Nora Volkow, director of the National Institute on Drug Abuse, found that adults with ADHD have lower dopamine receptor and transporter availability in the nucleus accumbens and midbrain — the brain's core reward regions [^10]. The reward pathway is underactive at baseline, which means ADHD brains need stronger, more immediate, more novel stimulation to achieve the same dopaminergic response — the mechanism behind the documented two-to-three-times higher risk of substance use, gambling, and compulsive internet use in people with ADHD [^11] [^12].

I avoid algorithmic social media for exactly this reason. I recognised years ago that an infinite scroll tuned to my interests was an addictive time sink for a brain wired the way mine is. Most people with ADHD who have thought carefully about their condition have made similar calculations — limiting social media, avoiding certain games, structuring their environment to reduce the pull of variable-reward stimuli. But AI gets a pass. It doesn't *feel* like scrolling Instagram. It feels like work. It *is* productive, some of the time, which is what makes it more dangerous than social media for an ADHD brain — not less. A slot machine that occasionally pays out in useful work product is harder to walk away from than one that pays out in dopamine alone.

*Working memory offload becomes cognitive offloading.* Working memory offload means the tool holds information while you think. Cognitive offloading means the tool thinks while you watch. An MIT Media Lab EEG study published in 2025 found that ChatGPT users showed reduced brain connectivity in regions governing memory encoding, semantic processing, and executive function — and that over four months, users progressively disengaged, defaulting to copy-paste behaviour [^13]. The task was completed, but nothing was integrated into the user's memory networks. For a brain already running a working memory deficit, outsourcing cognition to a model doesn't scaffold the deficit. It deepens it.

Anthropic's own research confirmed the pattern from a different angle. In a randomised controlled trial of 52 software engineers learning a new Python library, developers who used AI scored 17% lower on comprehension tests than those who coded by hand, with the steepest decline in debugging skills [^14]. The distinction isn't AI versus no AI — it's cognitive engagement versus cognitive offloading. I build tools on Anthropic's platform; the fact that their research cuts against the uncritical adoption of those tools makes it harder, not easier, to dismiss.

*Idea capture becomes idea proliferation.* One of the most draining patterns in inattentive ADHD is idea generation that outpaces execution — the mental queue that's always full, the notebook of projects that are 10% started. A large language model can develop any idea just enough to feel validated. For a neurotypical user, whose bottleneck is often ideation, this is useful. For an ADHD brain, whose bottleneck is filtering and committing, it's the wrong tool applied at the wrong point. The friction that informally served as a filter — the effort of starting something new — is gone. What replaces it is not productivity but proliferation: more threads, more open loops, more distance between where you are and where you intended to be.

*Focus becomes fragmentation.* Long-running AI agents — the kind that execute multi-step tasks autonomously — can take 5, 10, 15 minutes per run, and benchmarks show those times growing month over month. For a neurotypical developer, that's a coffee break. For an ADHD brain, it's an eternity of unstructured time that the brain will fill with something, anything, that provides stimulation. You open a second terminal. A third. Boris Cherny, the creator of Claude Code, has described a workflow with five terminal windows running agents in parallel, plus another five to ten sessions in the browser [^15], and for a disciplined mind that's a multiplier. For an ADHD mind it's a descent into a state I recognise from every bad workday I've ever had: six things in flight, none of them in focus, each one interrupting the others at unpredictable intervals. The agents return on their own schedule, not yours. Each return is a context switch you didn't choose.

## The burnout pattern has empirical support

A UC Berkeley study published in February 2026, based on eight months of ethnographic research at a 200-person tech company, found that AI increased both the pace and scope of work with no reduction in hours [^16]. Workers began attempting tasks they would previously have outsourced or avoided. The researchers warned of workload creep, cognitive fatigue, and weakened decision-making. Siddhant Khare, a software engineer whose essay on AI fatigue went viral the same month, identified the mechanism: AI reduces the cost of production but increases the cost of coordination, review, and decision-making — and those costs fall entirely on the human [^17].

A Quantum Workplace survey found that employees who frequently use AI report 45% higher burnout rates than those who never or infrequently use AI [^18].

The METR developer productivity study — a randomised controlled trial by a research organisation studying AI's impact on expert work — found that AI made experienced developers 19% *slower* while those same developers believed they had been 20% faster [^19]. That perception-reality gap is not a curiosity. For ADHD brains, it's the whole problem. ADHD already impairs accurate self-assessment of time and performance. A tool that widens the gap between felt productivity and actual productivity, in a population that already struggles to perceive the gap, does not show up as a problem until it shows up as a collapse. You feel productive. The metrics say you're productive. The burnout arrives anyway, and you can't explain it, because everything looked like it was working.

The cost doesn't stay with you. It spills onto your team. AI-assisted coding made it trivial to chase any idea that occurred to me, and I did — diving into implementation before the work had been discussed, prioritised, or added to the sprint. My team members found their backlog flooded with unplanned pull requests. QA accumulated a review queue that grew faster than it could be worked down. Nobody had agreed to this work. I had simply built it because the tool made building feel effortless, and the ADHD drive to act on an idea before it escapes did the rest. Flooding a sprint with work nobody asked for is not just bad process. It's rude. For someone with ADHD it carries a particular cruelty: the guilt of burdening your colleagues compounds the burnout you're already not noticing.

## Medication restores internal regulation. AI bypasses it.

A clinician reading this far will raise a reasonable objection: ADHD medication does the same things. Stimulants lower the activation barrier. They improve working memory. They enable sustained focus. We don't pathologise those effects — we prescribe them. Why is AI's version dangerous while medication's version is therapeutic?

The distinction is in the direction of the intervention. Stimulant medication restores *internal* regulatory capacity. It raises baseline dopamine and norepinephrine to levels that allow the brain's own executive function systems to operate [^5]. AI bypasses internal regulation entirely. It removes the need to initiate, to hold information in working memory, to filter ideas through effort. The regulatory capacity isn't restored; it's routed around. This is the difference between a prosthetic that strengthens the limb and one that replaces it. Both help. But only one carries the risk that the underlying capacity atrophies with disuse — and the MIT EEG data on progressive cognitive disengagement suggests that risk is not theoretical [^13].

## The people most at risk are the least likely to notice

The same mechanisms that provide relief also remove informal constraints that ADHD brains depend on without knowing it. The friction of starting something new was also the friction that prevented starting 12 things at once. The effort of holding a problem in working memory was also the signal that told you how long you'd been working. The difficulty of developing an idea was also the filter that kept you from pursuing all of them. The time it took to write code by hand was also the governor that kept your output at a pace your team could absorb.

The emerging research — on cognitive offloading, work intensification, the perception-reality gap, the burnout rates among power users — describes a pattern that affects everyone. But it maps with specific, predictable precision onto the neurological profile of inattentive ADHD: executive function deficits, dopamine-driven reward-seeking, time-blindness, and a documented susceptibility to masking-driven burnout that stays invisible until it becomes collapse.

No one has studied this population specifically. The speed of AI adoption has outpaced the clinical research infrastructure that would normally characterise these risks before millions of people absorb them. We are running an uncontrolled experiment on brains that are neurologically predisposed to every risk the early research has identified — and the people best positioned to notice the harm are the ones whose condition makes it hardest to notice.

This is not a call to stop using AI. That is not going to happen, and it shouldn't. The craft of software engineering will change more in the next two years than it has in the previous twenty, and the productivity gains for neurodivergent brains are real enough that walking away from AI would be its own kind of self-sabotage. But the adaptation has to be conscious, because the institutional pressure is moving in the opposite direction. Companies including Meta, Amazon, and Shopify are now tying AI tool usage to performance reviews [^20]. No employer would measure your performance by how many hours you spent at a slot machine, but that is structurally what happens when you measure AI adoption without measuring its cognitive costs — and the people paying those costs most heavily are the ones whose neurology makes the costs invisible.

The interventions that work will have to be structural rather than volitional. The whole point of ADHD is that willpower is not a reliable resource. Asking people with a self-regulation deficit to regulate their use of a tool more dysregulating than anything the ADHD literature has had to account for is the same advice, repackaged, that ADHD professionals have been failing to follow for decades. The constraint has to be in place before the session starts — not during it, when executive function is already compromised.

*One thread, one timer, one decision.* One thread per session, defined in writing before you open the model. If the conversation drifts, close it. A timer that is external, audible, and non-negotiable — not an app notification you can swipe away, because time-blindness means the three-hour wall is invisible until you're past it.

*One agent, one note, one break.* When working with long-running agents, one agent at a time, with a written note of what it's doing and what you'll do when it returns. Not a second terminal, not a third — the unstructured wait is exactly the gap your brain will fill with new work that fragments the original task. Track session length not to optimise it but to make it visible; a session past 90 minutes without a deliberate break is almost certainly hyperfocus, and you can't manage what you can't see.

*Backlog before building.* Before chasing an idea into code, add it to the backlog. Let the team discuss and prioritise it. The ADHD impulse is to build now and explain later — and AI makes "now" instantaneous. But a pull request your team didn't ask for is not a contribution; it's an imposition. The discipline is upstream: decide with your team what to build before the tool makes building irresistible.

These are not fixes. They are constraints that compensate for the constraints AI removed — the ones that were, it turns out, load-bearing.

I still use AI every day. I'm using it right now. The difference is that I no longer see it as a solve for ADHD. It's the problem and the fix at the same time, and the only thing standing between the two is a structure I have to build before I sit down — because once I sit down, I won't notice which one I'm getting.

---

*[Author] is CTO of CorralData, a business intelligence company. He was diagnosed with inattentive ADHD as an adult.*

---

## References

[^1]: Sophos, S. (2024, December). Harnessing artificial intelligence to live better with ADHD. *Attention Magazine*. https://chadd.org/adhd-news/adhd-news-adults/attention-monthly-harnessing-artificial-intelligence-to-live-better-with-adhd/

[^2]: Fleck, C. (2023, June). ChatGPT on ADHD: Using AI as an executive function support. *ADDitude Magazine*. https://www.additudemag.com/chatgpt-ai-adhd-executive-function-support/

[^3]: EY & Microsoft. (2024). *GenAI for accessibility: More human, not less. How does Microsoft 365 Copilot support employees with disability and/or neurodivergence?* https://www.ey.com/en_uk/newsroom/2024/12/study-highlights-benefits-of-copilot

[^4]: Ronksley-Pavia, M., Nguyen, L., Wheeley, E., Rose, J., Neumann, M. M., Bigum, C., & Neumann, D. L. (2025). A scoping literature review of generative artificial intelligence for supporting neurodivergent school students. *Computers & Education: Artificial Intelligence*, *9*, 100437. https://doi.org/10.1016/j.caeai.2025.100437

[^5]: Barkley, R. A. (2012). *Executive functions: What they are, how they work, and why they evolved*. Guilford Press.

[^6]: Dodson, W. W. (2005). Pharmacotherapy of adult ADHD. *Journal of Clinical Psychology*, *61*(5), 589–606. https://doi.org/10.1002/jclp.20122

[^7]: Yegge, S. (2026, February). Steve Yegge on AI agents and the future of software engineering [Interview]. In G. Orosz, *The Pragmatic Engineer*. https://newsletter.pragmaticengineer.com/p/steve-yegge-on-ai-agents-and-the

[^8]: Ferster, C. B., & Skinner, B. F. (1957). *Schedules of reinforcement*. Appleton-Century-Crofts.

[^9]: Glyph. (2024). LLMs are like a slot machine. In C. Doctorow, *Pluralistic* [Blog]. https://pluralistic.net/

[^10]: Volkow, N. D., Wang, G.-J., Kollins, S. H., Wigal, T. L., Newcorn, J. H., Telang, F., Fowler, J. S., Zhu, W., Logan, J., Ma, Y., Pradhan, K., Wong, C., & Swanson, J. M. (2009). Evaluating dopamine reward pathway in ADHD: Clinical implications. *JAMA*, *302*(10), 1084–1091. https://doi.org/10.1001/jama.2009.1308

[^11]: Volkow, N. D., Wang, G.-J., Newcorn, J. H., Kollins, S. H., Wigal, T. L., Telang, F., Fowler, J. S., Goldstein, R. Z., Klein, N., Logan, J., Wong, C., & Swanson, J. M. (2011). Motivation deficit in ADHD is associated with dysfunction of the dopamine reward pathway. *Molecular Psychiatry*, *16*(11), 1147–1154. https://doi.org/10.1038/mp.2010.97

[^12]: Weiss, M. D., McBride, N. M., Craig, S., & Jensen, P. (2022). Conceptual review of ADHD and substance use: Pathways to risk. *Current Psychiatry Reports*, *24*(3), 163–173.

[^13]: Kos'myna, N., Hauptmann, E., Yuan, Y. T., Situ, J., Liao, X.-H., Beresnitzky, A. V., Braunstein, I., & Maes, P. (2025). Your brain on ChatGPT: Accumulation of cognitive debt when using an AI assistant for essay writing task. *arXiv*. https://arxiv.org/abs/2506.08872

[^14]: Shen, J. H., & Tamkin, A. (2026, January 29). How AI assistance impacts the formation of coding skills. *Anthropic Research*. https://www.anthropic.com/research/AI-assistance-coding-skills

[^15]: Cherny, B. [@bcherny]. (2026, January 2). I'm Boris and I created Claude Code [Thread]. X. https://x.com/bcherny/status/2007179832300581177; see also Mercado, T. (2026, January 6). The creator of Claude Code just revealed his workflow, and developers are losing their minds. *VentureBeat*. https://venturebeat.com/technology/the-creator-of-claude-code-just-revealed-his-workflow-and-developers-are

[^16]: Ranganathan, A., & Ye, X. M. (2026, February 9). AI doesn't reduce work—it intensifies it. *Harvard Business Review*. https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it

[^17]: Khare, S. (2026, February). AI fatigue: How artificial intelligence is burning out the engineers who build it. *Business Insider*.

[^18]: Quantum Workplace. (2024). *Employee engagement trends report: Employee experience*. https://www.quantumworkplace.com/employee-engagement-trends-report/employee-experience

[^19]: Becker, J., Rush, N., Barnes, E., & Rein, D. (2025). Measuring the impact of early-2025 AI on experienced open-source developer productivity. *METR*. https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/

[^20]: Gale, J. (2025, November). Internal memo on AI-driven impact in performance reviews. Meta Platforms; reported in HR Grapevine. https://www.hrgrapevine.com/us/content/article/2025-11-17-meta-to-formally-review-employees-ai-performance-from-2026