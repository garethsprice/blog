---
layout: post
title: "How Cheap Code Broke Organisational Decision-Making"
description: "When building was slow, weak ideas died before they consumed resources. AI removed that filter. The result is an alignment tax — the cost has shifted from code that's hard to write to agreement that never happened."
created_date: 2026-02-28
updated_date: 2026-02-28
---
The cost of writing software used to enforce organisational discipline. Not because anyone designed it that way, but because when building was slow and expensive, weak ideas died before they consumed resources. A half-formed feature that required two weeks of engineering time got questioned. A speculative refactor that needed a sprint got debated. The cost of execution was, in practice, a coordination mechanism — it forced teams to agree on what mattered before anyone started building.

AI coding tools have removed that cost without replacing the function it served. At CorralData, the AI-powered business intelligence company where I'm CTO, I've watched this happen in real time. We generate more output than ever. Much of it never ships — not because the code is bad, but because the team never reached consensus on what it was for. Half-formed ideas get prototyped, absorb review cycles, and stall when nobody has agreed on the problem being solved. The waste is not in the code. The waste is in the alignment that was never established before the code was written.

## The evidence for execution surplus

The pattern is visible in industry data. Faros AI, a developer analytics platform, tracked more than 10,000 developers and found that high-AI-adoption teams merged 98% more pull requests, while review time increased 91% and PR sizes grew 154%.[^1] If teams had strong alignment, more output would mean more shipped product. Instead, Google's 2024 DORA report found that every 25% increase in AI adoption yielded a 2.1% productivity gain alongside a 7.2% decrease in delivery stability.[^2] The researchers called this the "Vacuum Hypothesis": time freed by AI is absorbed by lower-value work. What they did not say, but the data implies, is that much of that work is building things that should never have been started.

The Harness 2025 software delivery survey sharpened this: 45% of all deployments involving AI-generated code led to production problems.[^3] Apiiro, a code risk platform, found AI-generated code introducing over 10,000 new security findings per month by mid-2025 — not because the code was syntactically worse, but because shallow gains in correctness masked deeper architectural flaws.[^4] These are not bugs introduced by sloppy developers. They are the predictable consequence of building faster than you can think.

## Why friction was load-bearing

Lisanne Bainbridge identified the core paradox in 1983: automating routine work does not simplify the operator's job but transforms it into something cognitively harder — continuous monitoring and rare, high-stakes intervention.[^5] Software teams are now living inside Bainbridge's irony. Scaffolding, boilerplate, test generation — the routine work that AI handles — was also the work that kept developers fluent in their own systems. Removing it shifted the cognitive load from production to supervision, a transition Bainbridge predicted would be more exhausting, not less.

Thierry Warin, writing in the California Management Review in April 2025, applied Ronald Coase's transaction cost framework[^6] to AI agents and found that while AI reduces execution costs at the micro level, it risks increasing organisational entropy — duplicated effort, conflicting processes, decreased coordination.[^7] This is the pattern I have watched emerge at CorralData: cheaper execution, more expensive alignment.

Every major advance in software engineering has attacked what Fred Brooks in 1986 called accidental complexity: the difficulty of representing a program in a given toolchain.[^8] AI coding tools are the most powerful such attack yet. But essential complexity — deciding what to build, for whom, and why — is unchanged. A team can go from idea to prototype in hours and still need weeks to determine whether the idea was worth pursuing.

The optimist's response is that AI-generated prototypes produce signal that specifications cannot. This is true, and for small teams with tight feedback loops it works. But it assumes the organisation can absorb what it learns as fast as it builds. At CorralData, I prototyped three competing approaches to a new agentic workflow feature in a single week — work that would previously have taken a month. Under normal circumstances, each would have been a small spike: build the minimum, learn, decide. Instead, AI tools made it easy to push each prototype well past its original MVP scope, adding capabilities nobody had asked for. By the end of the week I had three sophisticated implementations, each solving a slightly different version of the problem. Choosing between them was harder, not easier, because scope had drifted in three directions. The prototypes that were supposed to narrow the decision had widened it. We learned to treat the scope document as a ceiling, not a floor — to build exactly what was specified and stop, because AI makes overshooting effortless.

## Rebuilding the alignment layer

Organisations must rebuild the alignment function deliberately. At CorralData, this has meant three concrete changes.

First, scoping before building. We require clearly written tickets with acceptance criteria before any AI-assisted coding begins. AI can help draft these — generating ticket outlines, suggesting acceptance criteria, identifying edge cases — but the scope must be human-reviewed and agreed upon before work starts. This matters because the specification is no longer just a planning document for the next sprint — it is a coordination device that must connect to the product roadmap and longer-term company direction. When a developer can build a feature in an afternoon, the question shifts from "can we build this?" to "does this serve where we are going?" — answerable only against a roadmap the team understands and has committed to. Longer-term planning — the kind that felt bureaucratic when building was slow — becomes the essential context that prevents fast execution from producing fast drift.

Second, structured sharing of work. When code is produced faster than it can be reviewed, the default is that individuals build in isolation and surface finished work that nobody else understands. We have shifted toward frequent, short demonstrations of work in progress — not for approval, but for shared comprehension. If the team cannot explain what a feature does and why it exists, it is not ready for production regardless of whether the code passes tests.

Third, and most difficult: psychological safety around pace. The first two changes are process — they can be mandated. This one is cultural. If people cannot say "I don't understand what we just built" or "this is moving faster than I can follow," then alignment failures are invisible until they become expensive. Speed pressure is real, and AI tools intensify it: when a colleague can prototype a feature in an afternoon, admitting you need a day to understand the problem feels like falling behind. But the team that ships a misaligned feature fast has not moved fast. It has created rework. The teams that will thrive with AI coding tools are not the ones that ship the most code. They are the ones that have built the culture to decide, clearly and collectively, what is worth shipping — and have the safety to say when they don't know.

The productivity story of AI coding tools has been told as a story about speed. It is actually a story about decision-making. The bottleneck has moved from execution to alignment. Every organisation that fails to recognise this will produce more code, ship less of it, and wonder where the productivity went.

---
### References

[^1]: Faros AI. (2025). The AI productivity paradox. [https://www.faros.ai/blog/ai-software-engineering](https://www.faros.ai/blog/ai-software-engineering)

[^2]: Google DORA Team. (2024). *Accelerate State of DevOps Report*. [https://cloud.google.com/blog/products/devops-sre/announcing-the-2024-dora-report](https://cloud.google.com/blog/products/devops-sre/announcing-the-2024-dora-report)

[^3]: Harness. (2025). *The State of AI in Software Engineering*. [https://www.harness.io/the-state-of-ai-in-software-engineering](https://www.harness.io/the-state-of-ai-in-software-engineering)

[^4]: Apiiro. (2025). 4× velocity, 10× vulnerabilities: AI coding assistants are shipping more risks. [https://apiiro.com/blog/4x-velocity-10x-vulnerabilities-ai-coding-assistants-are-shipping-more-risks/](https://apiiro.com/blog/4x-velocity-10x-vulnerabilities-ai-coding-assistants-are-shipping-more-risks/)

[^5]: Bainbridge, L. (1983). Ironies of Automation. *Automatica*, *19*(6), 775–779. [https://ckrybus.com/static/papers/Bainbridge_1983_Automatica.pdf](https://ckrybus.com/static/papers/Bainbridge_1983_Automatica.pdf)

[^6]: Coase, R. H. (1937). The Nature of the Firm. *Economica*, *4*(16), 386–405. [https://onlinelibrary.wiley.com/doi/full/10.1111/j.1468-0335.1937.tb00002.x](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1468-0335.1937.tb00002.x)

[^7]: Warin, T. (2025). From Coase to AI Agents: Why the Economics of the Firm Still Matters in the Age of Automation. *California Management Review Insight*. [https://cmr.berkeley.edu/2025/04/from-coase-to-ai-agents-why-the-economics-of-the-firm-still-matters-in-the-age-of-automation/](https://cmr.berkeley.edu/2025/04/from-coase-to-ai-agents-why-the-economics-of-the-firm-still-matters-in-the-age-of-automation/)

[^8]: Brooks, F. P. (1986). No Silver Bullet — Essence and Accident in Software Engineering. *Proceedings of the IFIP Tenth World Computing Conference*. [https://worrydream.com/refs/Brooks_1986_-_No_Silver_Bullet.pdf](https://worrydream.com/refs/Brooks_1986_-_No_Silver_Bullet.pdf)