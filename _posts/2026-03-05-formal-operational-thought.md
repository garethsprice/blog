---
layout: post
title: "Monkey Software Doesn't Run on Fish Hardware"
description: "Silicon Valley is again amok with trillion-dollar proclamations that everyone will soon build their own software. But the ability to decompose a problem into logical steps is not a universal skill — it is a cognitive mode that surprisingly few people can perform reliably."
created_date: 2026-03-05
updated_date: 2026-03-05
---
You are cooking dinner for friends. Three dishes, one oven, guests arriving at seven. How do you plan the evening?

If your mind immediately began sequencing — the roast takes the longest so it goes in first; the side dish can bake while the roast rests; the salad needs no heat so it can be prepped during downtime; work backwards from seven to set start times — you just performed what cognitive scientists call formal operational thought. You held multiple variables in mind, identified dependencies, reasoned about constraints, and imposed a logical structure on an ambiguous problem. A few seconds of effort, at most. If you work in tech, a Gantt chart may already have made an appearance.

What percentage of the adult population do you think could do the same? Hold that estimate.

A few years ago, a CEO managing over five billion dollars in assets sat down in front of an early prototype of our AI analytics copilot — a system designed to let non-technical people query data in plain English. They typed a four-character internal code, a shorthand that meant something to them and no one else. The system did not recognise it. They left the room. That was the entire interaction. We did not get the contract.[^1]

That episode is not a story about a bad demo. It is a symptom of a broken model that technical people have of how most people think — a model that underpins the most consequential bet in technology.

Andrej Karpathy, formerly of OpenAI and Tesla, coined the term "vibe coding" — describe the vibes, let the AI write the code.[^2] Jensen Huang, CEO of NVIDIA, told an audience in early 2025 that nobody should have to learn to program.[^3] Investors fund startups on the explicit thesis that technical talent is about to become cheap and abundant. Beneath the optimism sits a single assumption: that non-technical people can specify what they want with enough precision for a machine to build it. The cognitive science, the historical record, and the evidence from every company that has put generations of software in front of real users says they cannot.

## Two-thirds of adults reason concretely, not abstractly

Remember the dinner question? The thinking it required — abstract, systematic, hypothetical — is what Piaget's developmental framework calls formal operational thought, the fourth and final stage of cognitive development. The stage before it, concrete operational thought, is where roughly two-thirds of adults remain.[^4]

Concrete operational thinkers reason logically about things they can see, touch, and directly experience. What they cannot reliably do is hold multiple hypothetical states in mind, systematically isolate variables, or decompose a novel problem into an ordered sequence of steps when no template exists.

The distinction is not a spectrum. It is a qualitative difference in how people approach problems. In Piaget's classic pendulum task, subjects are given a string, a set of weights, and a bar, and asked to determine what controls the speed of the swing. Four variables are in play: string length, weight, release height, and force of push. A formal operational thinker isolates each variable and tests them independently — changing one while holding the others constant — and identifies that only string length matters. A concrete operational thinker changes the weight and the string length at the same time, sees that something changed, and draws the wrong conclusion. The latter approach is not stupidity. It is a different cognitive mode, one that works well for familiar, tangible problems and fails for abstract, novel ones.

Only 25 to 35 per cent of adults in developed countries operate reliably at the formal operational level when confronting novel problems. Dasen (1994) puts it more starkly: only one-third of adults ever reach formal operations at all. Keating (1979) found that 40 to 60 per cent of college students — pre-selected for academic aptitude — fail at formal operational tasks.[^5]

## Design for a mind you have never inhabited

If you are a software engineer, those numbers probably seem implausible. That is because you are a formal operational thinker who works alongside other formal operational thinkers, was educated alongside them, and socialises with them. Your cognitive mode is so natural that you assume it is universal.

There is an Eastern parable, popularised by the writer-philosopher Alan Watts, about a monkey who sees a fish in a river, assumes it is drowning — because the monkey would be — and heroically lifts it into a tree to save it.[^6] The fish dies, no doubt in a state of confusion. Tech companies are the monkey. The software they build is, often, the tree. They sit by the river scooping up fish and wondering why they keep trying to swim away. The industry's error is not malice or stupidity. It is projection: the well-meaning assumption that everyone's mind works like theirs, when most of the world is fish.

I studied AI at the University of Manchester and watched the distribution first-hand. The opening weeks of a computer science degree draw a packed lecture hall that dwindles each week and then stabilises — the students who remain are the ones who can connect the logical abstractions of basic programming to the concrete problems those abstractions solve. Many intelligent, motivated people simply cannot make that connection. This is not unique to my experience. A multi-institutional study across 13 countries found an average failure rate of 28 per cent in introductory programming courses — among self-selected students who chose to study computing.[^7] The general population does not have a higher aptitude.

I run a company that builds AI-powered business intelligence for non-technical users, and the same distribution appears in our customer base. A successful business owner once assured us their Excel files all followed the same format. They did not. Column headers shifted between sheets. Date formats varied. Units appeared and disappeared. They were not being careless — they genuinely could not see the structural inconsistencies, because structural consistency is not how they process information. They are excellent at what they do, which requires pattern recognition, relationship management, and institutional knowledge no engineer could replicate. Structural decomposition is simply not part of their cognitive toolkit. That is not a failing. It is concrete operational thought encountering a task that demands formal operations.

## The bottleneck was never writing code

The vibe coding thesis conflates writing code with engineering software. Writing code translates a structured specification into machine instructions — that act is being commoditised. Engineering software takes an ambiguous, contradictory tangle of human needs and produces a coherent system that resolves them. The code records the output of that thinking. Automating the notation does not automate the thought.

The strongest objection is that people have never been able to think structurally, yet complex software is used by billions anyway. The market solved this through specialisation, not universal competence.[^8] This is partly right. Every wave of tooling — Visual Basic, WordPress, no-code, now AI — has expanded what non-technical people can build. But no wave has eliminated the need for the person who looks at an ambiguous problem and imposes structure. Each tool moved the structured thinker up the stack to harder problems. The pattern has repeated for forty years in software — and for considerably longer in engineering at large.[^9]

The companies that will win a mass audience are not building for the 25% of users who can specify what they want. They are building products that perform structural thinking on behalf of the user — systems that decompose "how are we doing" into the five analytical sub-questions the user does not know to ask (If you are wondering what those five questions are, you might be a concrete thinker).

Engineers who impose structure on ambiguous problems are about to become more valuable, not less. AI generates an effectively infinite supply of code. The scarce resource is the judgment to determine what the code should do.

Giving everyone access to powerful tools is not the same as giving everyone the ability to use them. Until the industry grasps that, it will keep hoisting fish up into the trees — and the transformational promise of AI will remain, for the majority of people, exactly that: a promise.

---

### Reference

[^1]: The anecdotes in this piece are drawn from real interactions with users of CorralData's AI analytics platform. Details have been altered to protect identities. The product has since been redesigned with unstructured thinkers specifically in mind — which is, in a sense, the point.

[^2]: Karpathy, A. (2025, February 4). *There's a new kind of coding I call "vibe coding"...* [Post]. X (formerly Twitter). [SOURCE NEEDED — verify exact post URL and date]

[^3]: Huang, J. (2025, February). Remarks at the World Government Summit, Dubai. Widely reported; see, e.g., Kharpal, A. (2025, February 11). Nvidia CEO Jensen Huang says kids shouldn't learn to code. *CNBC*. [SOURCE NEEDED — verify exact URL]

[^4]: Inhelder, B., & Piaget, J. (1958). *The Growth of Logical Thinking from Childhood to Adolescence* (A. Parsons & S. Milgram, Trans.). Basic Books. The pendulum task and the concrete-to-formal operational distinction are developed in Chapter 4. For the adult distribution, see Kuhn, D., Langer, J., Kohlberg, L., & Haan, N. S. (1977). The development of formal operations in logical and moral judgment. *Genetic Psychology Monographs*, 95(1), 97–188.

[^5]: Dasen, P. (1994). Culture and cognitive development from a Piagetian perspective. In W. J. Lonner & R. S. Malpass (Eds.), *Psychology and Culture*. Allyn and Bacon. Keating, D. P. (1979). Adolescent thinking. In J. Adelson (Ed.), *Handbook of Adolescent Psychology*. Wiley.

[^6]: The parable appears in various forms across Eastern folk traditions. Its best-known English version is from Watts, A. W. (1973). Lecture on virtue [Audio recording]. The phrasing is widely quoted as: "Kindly let me help you or you will drown, said the monkey, putting the fish safely up a tree." Presumably in our use of this metaphor there is a profit mechanism for the monkey when the fish make it into the tree, but like most early-stage startups we will leave the future revenue model to the imagination.

[^7]: Bennedsen, J., & Caspersen, M. E. (2019). Failure rates in introductory programming — 12 years later. *ACM Inroads*, 10(2), 30–36. [https://doi.org/10.1145/3324888](https://doi.org/10.1145/3324888). The 28 per cent figure is the 2017 global average. [REVIEW — verify DOI is correct]

[^8]: This counterargument is most clearly articulated in Narayanan, A., & Kapoor, S. (2024). *AI Snake Oil: What Artificial Intelligence Can Do, What It Can't, and How to Tell the Difference*. Princeton University Press.

[^9]: Vitruvius argued in 30 BC that the architect's job was to absorb complexity on behalf of inhabitants who could not be expected to reason about structure, materials, and climate themselves (Vitruvius, trans. 1914, Book I, Ch. 1). The job description has not changed; only the materials have. Vitruvius, P. (c. 30 BC/1914). The Ten Books on Architecture (M. H. Morgan, Trans.). Harvard University Press. [https://www.gutenberg.org/ebooks/20239](https://www.gutenberg.org/ebooks/20239)