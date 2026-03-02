---
layout: post
title: "AI Doesn't Fix My ADHD. It Inverts It."
description: "For the millions of adults with inattentive ADHD, AI tools don't remove the disorder's core problem — they replace the inability to start with the inability to stop."
created_date: 2026-03-02
updated_date: 2026-03-02
---
I have inattentive ADHD and I build AI tools for a living. The first weeks with a large language model felt like someone had finally fixed my brain. The blank page — the thing that has defeated me more often than any deadline, any boss, any amount of self-recrimination — was gone. Refactoring work and tech debt that had given me a crushing feeling of overwhelm on a small startup team suddenly became approachable. We are now well on our way to fully autonomous resolution of most bugs and even small features. The productivity gains are real. They are transformative.

Three months later I had 14 open threads across six projects. I had produced more than in the previous year, and I was further behind than when I started. Every problem AI solved for my ADHD brain had created a mirror problem — not despite the benefit, but because of it.

The arc is common enough to have its own shape in online ADHD communities: euphoria, proliferation, disorientation. The conventional wisdom, from CHADD to ADDitude Magazine to Understood.org, is that AI is a superpower for the neurodivergent brain. The emerging evidence suggests we're wrong — not about the benefits, but about what happens after they compound.

## The superpower narrative is everywhere. The evidence for it is almost nowhere.

As of early 2026, not a single randomised controlled trial has measured how generative AI affects ADHD-specific outcomes. The largest positive study is a Microsoft-commissioned report in which 88% of employees with various disabilities reported feeling more productive using Copilot [^1] — but it lumped ADHD together with autism and dyslexia, measured satisfaction rather than outcomes, and was funded by the company selling the product. A 2025 scoping review found only 9 of 21 sources on AI for neurodivergent populations contained original data [^2]. The superpower narrative isn't built on evidence. It's built on the first act of a three-act story.

## Every benefit creates a mirror problem

Russell Barkley describes ADHD as fundamentally a disorder of executive function: deficits in working memory, time perception, self-regulation, and — critically — task initiation [^3]. William Dodson's concept of the "interest-based nervous system" captures the motivational architecture: ADHD brains run on novelty, challenge, and urgency, not on importance or distant reward [^4]. AI addresses these deficits with precision. It eliminates the blank-page problem. It holds the state of a problem while you think. It can develop an idea without requiring you to immediately pursue it.

*Task initiation becomes task cessation.* The frictionlessness that makes it easy to start makes it nearly impossible to stop. Inattentive ADHD includes hyperfocus — intense, absorbing attention on something interesting for hours without noticing time pass. A large language model conversation has no natural interruptions. It is always available, always responsive, always interesting. Recent research distinguishes two types of hyperfocus: one mediated by executive function and one driven by reward sensitivity. AI tools are structurally optimised to trigger the reward-driven variant. The one you don't control.

*Productivity becomes compulsion.* An AI conversation operates on a variable ratio reinforcement schedule [^5] — the same reward pattern that makes slot machines the most addictive form of gambling. You send a prompt. Sometimes the response is extraordinary. Sometimes it's wrong in a way that sends you down a 30-minute correction loop. You can't predict which, and that unpredictability is what makes the behaviour compulsive. The software engineer Glyph made the connection explicit: large language models are slot machines [^6]. You remember the jackpots. You forget the hours of futzing.

ADHD brains are neurologically predisposed to this trap. PET imaging studies led by Nora Volkow found that adults with ADHD have lower dopamine receptor availability in the brain's core reward regions [^7] — the mechanism behind the documented two-to-three-times higher risk of behavioural addictions in people with ADHD [^8]. I avoid algorithmic social media for exactly this reason. But AI gets a pass. It doesn't *feel* like scrolling Instagram. It feels like work. It *is* productive, some of the time, which is what makes it more dangerous for an ADHD brain — not less. A slot machine that occasionally pays out in useful work product is harder to walk away from than one that pays out in dopamine alone.

*Working memory offload becomes cognitive offloading.* An MIT Media Lab EEG study found that ChatGPT users showed reduced brain connectivity in regions governing memory encoding, semantic processing, and executive function — and that over four months, users progressively disengaged, defaulting to copy-paste behaviour [^9]. Anthropic's own research confirmed the pattern: developers who used AI scored 17% lower on comprehension tests than those who coded by hand, with the steepest decline in debugging skills [^10]. For a brain already running a working memory deficit, outsourcing cognition to a model doesn't scaffold the deficit. It deepens it.

*Idea capture becomes idea proliferation.* The most draining pattern in inattentive ADHD is idea generation that outpaces execution. A large language model can develop any idea just enough to feel validated. For a neurotypical user, whose bottleneck is ideation, this is useful. For an ADHD brain, whose bottleneck is filtering and committing, it's the wrong tool applied at the wrong point. The friction that informally served as a filter is gone.

*Focus becomes fragmentation.* Long-running AI agents can take 5, 10, 15 minutes per run. Boris Cherny, the creator of Claude Code, has described running five terminal sessions in parallel plus another ten in the browser [^11] — and for a disciplined mind that's a multiplier. For an ADHD mind it's six things in flight, none in focus, each one interrupting the others at unpredictable intervals. Each agent return is a context switch you didn't choose.

## The burnout pattern has empirical support

A UC Berkeley ethnographic study found that AI increased both the pace and scope of work with no reduction in hours [^12]. A Quantum Workplace survey found AI power users report 45% higher burnout rates [^13]. The METR developer productivity study — a proper randomised controlled trial — found that AI made experienced developers 19% *slower* while those same developers believed they had been 20% faster [^14]. That perception-reality gap is the whole problem for ADHD brains. ADHD already impairs accurate self-assessment of time and performance. A tool that widens the gap between felt and actual productivity, in a population that already struggles to perceive it, does not show up as a problem until it shows up as a collapse.

## Medication restores internal regulation. AI bypasses it.

Stimulant medication restores *internal* regulatory capacity — it raises baseline dopamine to levels that allow the brain's own executive function systems to operate [^3]. AI bypasses internal regulation entirely. The regulatory capacity isn't restored; it's routed around. This is the difference between a prosthetic that strengthens the limb and one that replaces it. Only one carries the risk that the underlying capacity atrophies — and the MIT EEG data on progressive cognitive disengagement suggests that risk is not theoretical [^9].

## The people most at risk are the least likely to notice

This is not a call to stop using AI. The craft of software engineering will change more in the next two years than it has in the previous twenty. But the adaptation has to be conscious, because the institutional pressure is moving in the opposite direction: companies including Meta, Amazon, and Shopify are now tying AI usage to performance reviews [^15]. No employer would measure your performance by how many hours you spent at a slot machine, but that is structurally what happens when you measure AI adoption without measuring its cognitive costs.

The interventions that work will have to be structural rather than volitional. The whole point of ADHD is that willpower is not a reliable resource. The constraint has to be in place before the session starts — not during it, when executive function is already compromised.

*One thread, one timer, one decision.* One thread per session. If the conversation drifts, close it. A timer that is external, audible, and non-negotiable — because time-blindness means the three-hour wall is invisible until you're past it.

*One agent, one note, one break.* One agent at a time, with a written note of what it's doing and what you'll do when it returns. Not a second terminal. Track session length not to optimise it but to make it visible.

*Backlog before building.* Before chasing an idea into code, add it to the backlog. The ADHD impulse is to build now and explain later — and AI makes "now" instantaneous. But a pull request your team didn't ask for is not a contribution; it's an imposition.

These are not fixes. They are constraints that compensate for the constraints AI removed — the ones that were, it turns out, load-bearing.

I still use AI every day. I'm using it right now. The difference is that I no longer see it as a solve for ADHD. It's the problem and the fix at the same time, and the only thing standing between the two is a structure I have to build before I sit down — because once I sit down, I won't notice which one I'm getting.

---

*[Author] is CTO of CorralData, a business intelligence company. He was diagnosed with inattentive ADHD as an adult.*

---

## References

[^1]: EY & Microsoft. (2024). *GenAI for accessibility: More human, not less*. https://www.ey.com/en_uk/newsroom/2024/12/study-highlights-benefits-of-copilot

[^2]: Ronksley-Pavia, M., Nguyen, L., Wheeley, E., Rose, J., Neumann, M. M., Bigum, C., & Neumann, D. L. (2025). A scoping literature review of generative artificial intelligence for supporting neurodivergent school students. *Computers & Education: Artificial Intelligence*, *9*, 100437. https://doi.org/10.1016/j.caeai.2025.100437

[^3]: Barkley, R. A. (2012). *Executive functions: What they are, how they work, and why they evolved*. Guilford Press.

[^4]: Dodson, W. W. (2005). Pharmacotherapy of adult ADHD. *Journal of Clinical Psychology*, *61*(5), 589–606. https://doi.org/10.1002/jclp.20122

[^5]: Ferster, C. B., & Skinner, B. F. (1957). *Schedules of reinforcement*. Appleton-Century-Crofts.

[^6]: Glyph. (2024). LLMs are like a slot machine. In C. Doctorow, *Pluralistic* [Blog]. https://pluralistic.net/

[^7]: Volkow, N. D., Wang, G.-J., Kollins, S. H., et al. (2009). Evaluating dopamine reward pathway in ADHD. *JAMA*, *302*(10), 1084–1091. https://doi.org/10.1001/jama.2009.1308

[^8]: Weiss, M. D., McBride, N. M., Craig, S., & Jensen, P. (2022). Conceptual review of ADHD and substance use: Pathways to risk. *Current Psychiatry Reports*, *24*(3), 163–173.

[^9]: Kos'myna, N., Hauptmann, E., Yuan, Y. T., et al. (2025). Your brain on ChatGPT: Accumulation of cognitive debt when using an AI assistant. *arXiv*. https://arxiv.org/abs/2506.08872

[^10]: Shen, J. H., & Tamkin, A. (2026, January 29). How AI assistance impacts the formation of coding skills. *Anthropic Research*. https://www.anthropic.com/research/AI-assistance-coding-skills

[^11]: Cherny, B. [@bcherny]. (2026, January 2). I'm Boris and I created Claude Code [Thread]. X. https://x.com/bcherny/status/2007179832300581177

[^12]: Ranganathan, A., & Ye, X. M. (2026, February 9). AI doesn't reduce work—it intensifies it. *Harvard Business Review*. https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it

[^13]: Quantum Workplace. (2024). *Employee engagement trends report*. https://www.quantumworkplace.com/employee-engagement-trends-report/employee-experience

[^14]: Becker, J., Rush, N., Barnes, E., & Rein, D. (2025). Measuring the impact of early-2025 AI on experienced open-source developer productivity. *METR*. https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/

[^15]: Gale, J. (2025, November). Internal memo on AI-driven impact in performance reviews. Meta Platforms; reported in *HR Grapevine*. https://www.hrgrapevine.com/us/content/article/2025-11-17-meta-to-formally-review-employees-ai-performance-from-2026