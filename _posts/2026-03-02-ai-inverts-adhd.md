---
layout: post
title: "AI Doesn't Fix My ADHD. It Inverts It."
description: "For the millions of adults with inattentive ADHD, AI tools don't remove the disorder's core problem — they replace the inability to start with the inability to stop."
created_date: 2026-03-02
updated_date: 2026-03-02
---
I have inattentive ADHD and I build AI tools for a living. The first weeks with a large language model felt like someone had finally fixed my brain. The blank page — the thing that has defeated me more often than any deadline, any boss, any amount of self-recrimination — was gone. Refactoring work and tech debt that had given me a crushing feeling of overwhelm on a small startup team suddenly became approachable. The productivity gains are transformative. I have had article ideas in my head for years that never got written; this blog would not exist without AI.

Three months later I had 14 open threads across six projects. I had produced more than in the previous year, and I was further behind than when I started. Every problem AI solved for my ADHD brain had created a mirror problem — not despite the benefit, but because of it. The arc is common enough to have its own shape in online ADHD communities: euphoria, proliferation, disorientation [^16]. The emerging evidence suggests the conventional wisdom — that AI is a superpower for the neurodivergent brain — is wrong. Not about the benefits, but about what happens after they compound.

## The superpower narrative is everywhere. The evidence for it is almost nowhere.

As of early 2026, not a single randomised controlled trial has measured how generative AI affects ADHD-specific outcomes. The largest positive study is a Microsoft-commissioned report in which 88% of employees with various disabilities reported feeling more productive using Copilot [^1] — but it lumped ADHD together with autism and dyslexia, measured satisfaction rather than outcomes, and was funded by the company selling the product. A 2025 scoping review found only 9 of 21 sources on AI for neurodivergent populations contained original data [^2]. The superpower narrative isn't built on evidence. It's built on the first act of a three-act story.

## Every benefit creates a mirror problem

Russell Barkley describes ADHD as fundamentally a disorder of executive function: deficits in working memory, time perception, self-regulation, and — critically — task initiation [^3]. William Dodson's "interest-based nervous system" describes the other half: ADHD brains run on novelty, challenge, and urgency, not on importance or distant reward [^4]. AI addresses every one of these deficits — eliminating the blank-page problem, holding the state of a problem while you think, developing an idea without requiring you to immediately pursue it. But each of these solutions has a shadow side, and the shadows map precisely onto the vulnerabilities of an ADHD brain.

*Task initiation becomes task cessation.* The frictionlessness that makes it easy to start makes it nearly impossible to stop. A large language model conversation has no natural interruptions. It is always available, always responsive, always interesting — and structurally optimised to trigger the reward-driven variant of hyperfocus. The one you don't control.

*Productivity becomes compulsion.* An AI conversation operates on a variable ratio reinforcement schedule [^5] — the same mechanism that Natasha Dow Schüll's research identified as what makes slot machines the form of gambling most consistently linked to addiction [^6]. You send a prompt. Sometimes you get a brilliant solution. Sometimes you get a 30-minute correction loop. You can't predict which, and that unpredictability is what makes the behaviour compulsive [^7]. You remember the jackpots. You forget the hours of futzing.

ADHD brains are neurologically predisposed to this trap. PET imaging studies led by Nora Volkow found that adults with ADHD have lower dopamine receptor availability in the brain's core reward regions [^8] — the mechanism behind the two-to-three-times higher risk of behavioural addictions in people with ADHD [^9]. I avoid algorithmic social media for exactly this reason, but AI gets a pass because it *feels* like work — and a slot machine that often pays out in work product better than you could have imagined is harder to walk away from than one that pays out in dopamine alone.

*Working memory offload becomes cognitive offloading.* An MIT Media Lab EEG study found that ChatGPT users showed reduced brain connectivity in regions governing memory encoding and executive function, and that over four months users progressively disengaged, defaulting to copy-paste behaviour [^10]. Anthropic's own research confirmed the pattern: developers who used AI scored 17% lower on comprehension tests, with the steepest decline in debugging skills [^11]. For a brain already running a working memory deficit, outsourcing cognition to a model doesn't scaffold the deficit. It deepens it. Stimulant medication works the opposite way — it raises baseline dopamine to levels that let the brain's own executive function systems operate [^3]. AI bypasses internal regulation entirely.

*Idea capture becomes idea proliferation.* The most draining pattern in inattentive ADHD is idea generation that outpaces execution. A large language model can develop any idea just enough to feel validated — useful if your bottleneck is ideation, dangerous if your bottleneck is filtering and committing. The friction that informally served as a filter is gone.

*Focus becomes fragmentation.* Long-running AI agents can take 5, 10, 15 minutes per run. Boris Cherny, the creator of Claude Code, has described running five terminal sessions in parallel plus another ten in the browser [^12] — and for a disciplined mind that's a multiplier. For an ADHD mind it's six things in flight, none in focus, each one interrupting the others at unpredictable intervals. Each agent return is a context switch you didn't choose.

The burnout data supports the pattern. A UC Berkeley ethnographic study found that AI increased both the pace and scope of work with no reduction in hours [^13]. A Quantum Workplace survey found AI power users report 45% higher burnout rates [^14]. The METR developer productivity study — a randomised controlled trial — found that AI made experienced developers 19% *slower* while those same developers believed they had been 20% faster [^15]. A tool that widens the gap between felt and actual productivity, in a population that already struggles to perceive the gap, does not show up as a problem until it shows up as a collapse.

## The people most at risk are the least likely to notice

These risks affect everyone who uses AI, but they map precisely onto the neurological profile of inattentive ADHD — and the people best positioned to notice the harm are the ones whose condition makes it hardest to notice.

This is not a call to stop using AI. Without question, the craft of software engineering will change more in the next two years than it has in the previous twenty — and for novelty-seeking brains like ours, brains that light up at new tools and new problems, this is a fantastic time to be an engineer. But the adaptation has to be conscious, because the institutional pressure is pushing hard in one direction: companies including Meta, Amazon, and Shopify are now tying AI usage to performance reviews [^17]. No employer would measure your performance by how many hours you spent at a slot machine, but that is structurally what happens when you measure AI adoption without measuring its cognitive costs.

The whole point of ADHD is that willpower is not a reliable resource. The constraint has to be in place before the session starts — not during it, when executive function is already compromised.

## What has worked for me

These are rules I've arrived at through painful iteration. The hard part isn't following them — it's not chasing the six other ideas that surface while you're working on the one you committed to. But I get more done and shipped focusing on one thing until it's finished than I ever did running six things in parallel, and the work is better.

*One thread, one timer, one decision.* One thread per session. If the conversation drifts, close it. A timer that is external, audible, and non-negotiable — because time-blindness means the three-hour wall is invisible until you're past it.

*One agent, one note, one break.* One agent at a time, with a written note of what it's doing and what you'll do when it returns. Not a second terminal. Track session length not to optimise it but to make it visible.

*Backlog before building.* Before chasing an idea into code, add it to the backlog. The ADHD impulse is to build now and explain later — and AI makes "now" instantaneous. But a pull request your team didn't ask for is not a contribution; it's an imposition.

These are not fixes. They are constraints that compensate for the constraints AI removed — the ones that were, it turns out, load-bearing.

I still use AI every day. I'm using it right now. The difference is that I no longer see it as a miracle solution for ADHD. It's an incredible tool, but it is also the problem and the fix at the same time, and the only thing standing between the two is a structure I have to build before I sit down — because once I sit down, I won't notice which one I'm getting.

---

*[Author] is CTO of CorralData, a business intelligence company. He was diagnosed with inattentive ADHD as an adult.*

---

## References

[^1]: EY & Microsoft. (2024). *GenAI for accessibility: More human, not less*. [https://www.ey.com/en_uk/newsroom/2024/12/study-highlights-benefits-of-copilot](https://www.ey.com/en_uk/newsroom/2024/12/study-highlights-benefits-of-copilot)

[^2]: Ronksley-Pavia, M., Nguyen, L., Wheeley, E., Rose, J., Neumann, M. M., Bigum, C., & Neumann, D. L. (2025). A scoping literature review of generative artificial intelligence for supporting neurodivergent school students. *Computers & Education: Artificial Intelligence*, *9*, 100437. [https://doi.org/10.1016/j.caeai.2025.100437](https://doi.org/10.1016/j.caeai.2025.100437)

[^3]: Barkley, R. A. (2012). *Executive functions: What they are, how they work, and why they evolved*. Guilford Press.

[^4]: Dodson, W. W. (2005). Pharmacotherapy of adult ADHD. *Journal of Clinical Psychology*, *61*(5), 589–606. [https://doi.org/10.1002/jclp.20122](https://doi.org/10.1002/jclp.20122)

[^5]: Ferster, C. B., & Skinner, B. F. (1957). *Schedules of reinforcement*. Appleton-Century-Crofts.

[^6]: Schüll, N. D. (2012). *Addiction by design: Machine gambling in Las Vegas*. Princeton University Press.

[^7]: Glyph. (2024). LLMs are like a slot machine. In C. Doctorow, *Pluralistic* [Blog]. [https://pluralistic.net/](https://pluralistic.net/)

[^8]: Volkow, N. D., Wang, G.-J., Kollins, S. H., et al. (2009). Evaluating dopamine reward pathway in ADHD. *JAMA*, *302*(10), 1084–1091. [https://doi.org/10.1001/jama.2009.1308](https://doi.org/10.1001/jama.2009.1308)

[^9]: Weiss, M. D., McBride, N. M., Craig, S., & Jensen, P. (2022). Conceptual review of ADHD and substance use: Pathways to risk. *Current Psychiatry Reports*, *24*(3), 163–173.

[^10]: Kos'myna, N., Hauptmann, E., Yuan, Y. T., et al. (2025). Your brain on ChatGPT: Accumulation of cognitive debt when using an AI assistant. *arXiv*. [https://arxiv.org/abs/2506.08872](https://arxiv.org/abs/2506.08872)

[^11]: Shen, J. H., & Tamkin, A. (2026, January 29). How AI assistance impacts the formation of coding skills. *Anthropic Research*. [https://www.anthropic.com/research/AI-assistance-coding-skills](https://www.anthropic.com/research/AI-assistance-coding-skills)

[^12]: Cherny, B. [@bcherny]. (2026, January 2). I'm Boris and I created Claude Code [Thread]. X. [https://x.com/bcherny/status/2007179832300581177](https://x.com/bcherny/status/2007179832300581177)

[^13]: Ranganathan, A., & Ye, X. M. (2026, February 9). AI doesn't reduce work—it intensifies it. *Harvard Business Review*. [https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it](https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it)

[^14]: Quantum Workplace. (2024). *Employee engagement trends report*. [https://www.quantumworkplace.com/employee-engagement-trends-report/employee-experience](https://www.quantumworkplace.com/employee-engagement-trends-report/employee-experience)

[^15]: Becker, J., Rush, N., Barnes, E., & Rein, D. (2025). Measuring the impact of early-2025 AI on experienced open-source developer productivity. *METR*. [https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)

[^16]: De Klerk, T. (2026, February). AI + ADHD: The cost of infinite possibility. *Medium*. [https://theunisdk.medium.com/ai-adhd-the-cost-of-infinite-possibility-fc4d447583a7](https://theunisdk.medium.com/ai-adhd-the-cost-of-infinite-possibility-fc4d447583a7)

[^17]: Gale, J. (2025, November). Internal memo on AI-driven impact in performance reviews. Meta Platforms; reported in *HR Grapevine*. [https://www.hrgrapevine.com/us/content/article/2025-11-17-meta-to-formally-review-employees-ai-performance-from-2026](https://www.hrgrapevine.com/us/content/article/2025-11-17-meta-to-formally-review-employees-ai-performance-from-2026)