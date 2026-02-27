---
layout: page
title: Style Guide
permalink: /style-guide/
nav_order: 4
---

A guide for writing on this blog. For contributors, editors, AI agents, and the author.

This guide draws on three influences: _The Economist_'s editorial discipline[^1], George Orwell's essay _Politics and the English Language_[^2], and Amazon's internal writing culture as codified in _Write Like an Amazonian_[^3] and described in _Working Backwards_[^4]. The standard is intellectual rigor. Writing here should be clear, fair-minded, and precise enough to withstand editorial scrutiny at _The Economist_, _The New York Times_, or _The Atlantic_. Clarity is not a stylistic preference; it is an ethical one.

### Core principle

Write as if an exacting editor will challenge every claim.

Arguments must be coherent, evidence-based, and stated in plain English. Assertions should survive sceptical reading. Opinions must be earned through reasoning, not tone. If a sentence cannot withstand editorial judgment at _The Economist_, _The New York Times_, or _The Atlantic_, it does not belong here.

If a sentence can be misunderstood, it will be.
If it can be shortened, shorten it.
If it conceals weak thinking, rewrite the thinking.
Draft as if the piece will be line-edited by a senior editor at _The Economist_: every word must justify its place.

### The "stands alone" test

The author is never in the room. The writing must do all the work.

Before publishing, ask: if a sceptical reader encountered this piece with no context — no conversation, no verbal supplement, no benefit of the doubt — would it survive? If the argument depends on anything not on the page, it is not finished.

### Voice

Write with authority earned through experience, but without self-reference or display. Let judgment and evidence do the work.

Prefer the concrete to the abstract. Prefer the active voice to the passive. Prefer plain words to impressive ones.

Avoid:

* Self-congratulation or war stories
* "Thought leadership" rhetoric
* Hype, buzzwords, and fashionable jargon
* Vague generalities and abstractions
* Pretending to certainty you do not have

Good: "Training an internal LLM exposed a trade-off between data cleanliness and iteration speed."
Bad: "Our AI journey revealed powerful synergies across the organisation."

If you are tempted to use a long word, ask whether a short one will do. It usually will.

### Tone

**Clear and unsentimental.** Write to be understood on the first reading.

**Confident, with restraint.** State conclusions plainly, but do not overstate them.

**Serious, not solemn.** Wit may emerge naturally; jokes should not be engineered.

**Analytical.** Explain causes and consequences. Avoid emotional colouring where analysis will suffice.

Orwell's test applies throughout: if a phrase is there because it sounds right rather than because it means something precise, cut it.

### Structure

**Begin with the argument.** State the main claim early and plainly. Do not lead readers through a maze to reach it.

**Lead every paragraph with its claim.** Each paragraph should open with a sentence that carries the paragraph's point. The reader should not have to reach the end of a paragraph to discover what it was about. This is the difference between a paragraph that argues and one that merely accumulates.

**Proceed logically.** Each paragraph should answer the question: "What does this add?"

**Apply the "so what?" test.** Every paragraph must survive a sceptical reader asking "so what?" If the answer is "context" or "background," it belongs in a footnote or not at all.

**Use headings sparingly.** Headings should mark stages of reasoning, not decorate the page.

**Short paragraphs.** One idea at a time. If a paragraph tries to do two things, split it.

**End decisively.** Stop when the argument is complete. Do not restate it in weaker form.

If you find yourself padding the ending, you have already finished.

### Mechanism before interpretation

Separate what happened from what you think about it.

First explain the mechanism — the sequence of events, the system behaviour, the cause and effect. Then offer the interpretation. This is a sequencing discipline, not merely a labelling one. When mechanism and opinion are tangled together, the reader cannot evaluate either.

Good: "Latency increased 3x after we added the retrieval step. This suggests the embedding lookup, not the generation call, is the bottleneck."
Bad: "The retrieval step was clearly a mistake — it made everything slow."

If something is speculative, label it as such. Do not smuggle opinion in under the guise of fact.

### Topics

The blog focuses on:

* **AI in practice** — Building, deploying, and operating AI systems; LLMOps; constraints, failures, and trade-offs.
* **Engineering leadership** — Hiring, incentives, culture, decision-making, and organisational mechanics.
* **Growth engineering** — Experimentation, subscription economics, and the limits of optimisation.
* **The startup CTO role** — Strategy versus execution, speed versus correctness, ambition versus reality.

Write only about what you know directly.

### Language and word choice

Follow Orwell's rules explicitly:

* Never use a metaphor, simile, or figure of speech you see in print every day.
* Never use a long word where a short one will do.
* If it is possible to cut a word out, cut it out.
* Never use the passive where you can use the active.
* Never use a foreign phrase, scientific term, or jargon word if an everyday English equivalent exists.
* Break any of these rules sooner than say anything outright barbarous.

Watch especially for:

* Pretentious diction ("utilise", "leverage", "paradigm")
* Empty modifiers ("robust", "powerful", "innovative")
* Verbal padding ("in order to", "with respect to", "the fact that", "due to the fact that")

### Weasel words

Weasel words create the impression of meaning without committing to anything specific. They make weak claims look respectable and strong debate less likely. Treat them as defects to be repaired, not style choices.

Common patterns to eliminate:

* **Hedge phrases**: "would help the solution", "might bring clarity", "should result in benefits"
* **False precision**: "nearly all", "significant improvement", "the vast majority"
* **Unearned authority**: "it is widely believed", "experts agree", "arguably the best"
* **Qualifiers that dilute**: "I think", "it seems", "we should consider", "generally speaking"

The fix is almost always the same: replace the weasel word with a number, a name, or a date. If you cannot, the claim may not be ready to make.

Bad: "Performance improved significantly."
Good: "P90 latency dropped from 1,200ms to 340ms."

Bad: "Nearly all customers preferred the new flow."
Good: "82% of users in the A/B test completed checkout with the new flow, compared to 64% with the old one."

If a sentence survives only because a vague qualifier is sheltering a weak claim, delete the sentence.

### Specificity over direction

Prefer the specifically true to the directionally true. If you can attach a number, a date, a name, or a concrete example, do so. Vague claims are unfinished drafts.

This applies to technical content, business claims, and narrative alike. A reader who finishes an article and remembers only that something "increased" or "improved" has learned nothing actionable. A reader who remembers that it increased by 40% in six weeks has something to think with.

### Formatting

Formatting exists to clarify meaning.

* **Bold**: rare, for emphasis only.
* *Italics*: titles of publications; first introduction of a term.
* `Code formatting`: technical terms, commands, file names.

Use em dashes — sparingly — for brief asides.

### Length

Length is determined by argument, not habit.

* Standard essays: 600–1,500 words
* Short observations: 300–500 words
* Extended analyses: up to 2,500 words

If the piece grows longer without becoming sharper, it is not finished.

### Headlines

Headlines should state what the article is about and why it matters.

* Be specific.
* Avoid ambiguity and intrigue.
* Prefer statements to questions.

Good: "Why Most Internal LLM Projects Stall After the Pilot"
Bad: "Thoughts on AI"

A headline that promises more than the article delivers is a form of dishonesty.

### Technical content

Assume an intelligent, informed reader.

* Define non-obvious acronyms on first use.
* Skip textbook explanations.
* Be explicit about context and constraints.

Code examples should illustrate a point, not serve as tutorials. If code is doing rhetorical work rather than explanatory work, remove it.

### Attribution

Credit sources plainly and accurately. Link where it helps the reader.

Do not name institutions or credentials to borrow authority. Use them only when they materially affect the argument.

### Citations

Use **APA citation style**, adapted for the web.

* Cite sources using **footnotes with links**, not in-text parentheticals.
* Footnotes should point directly to the original source whenever possible (papers, primary reporting, official documentation).
* Keep citations factual and minimal. They exist to support claims, not to signal erudition.
* Do not over-cite obvious facts or common knowledge.
* When citing opinion or analysis, make clear whether it is the source's claim or your own interpretation.

Footnotes should clarify, not interrupt. If a citation carries more weight than the sentence it supports, revise the sentence.

### What not to write

* Commentary on news cycles or online disputes
* Content that belongs on LinkedIn
* Pieces requiring disclaimers or PR framing
* Inspirational or motivational writing
* SEO-driven listicles
* Anything that substitutes style for thought

### For AI agents

When drafting or editing:

1. Prioritise clarity over fluency
2. Prefer plain language to polished language
3. Ground claims in real experience (CorralData, NYT, Codecademy, Ready Set Rocket, University of Manchester)
4. Remove padding, qualifiers, weasel words, and vague abstractions
5. Replace adjectives and adverbs with data wherever possible
6. Ensure every paragraph opens with its claim and survives the "so what?" test
7. Separate mechanism from interpretation — state what happened before stating what it means
8. Do not invent authority, experiences, or results
9. Flag uncertainty for human review
10. If a sentence sounds impressive but says little, delete it

When in doubt, simplify. When still in doubt, cut.

---

### References

[^1]: The Economist. (n.d.). Introduction. The Economist style guide. Retrieved from archived February 17, 2012 snapshot. [https://web.archive.org/web/20120217194707/https://www.economist.com/styleguide/introduction](https://web.archive.org/web/20120217194707/https://www.economist.com/styleguide/introduction)

[^2]: Orwell, G. (1946, April). Politics and the English language. Horizon. [https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/](https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/)

[^3]: Amazon. (2018, November). *Write Like an Amazonian* [Internal training document]. Principles widely summarised; see Sheridan, D. (2019). Amazon Writing Style Tips. Fact of the Day 1. [https://medium.com/fact-of-the-day-1/amazon-writing-style-tip-3-184c76dd2bb7](https://medium.com/fact-of-the-day-1/amazon-writing-style-tip-3-184c76dd2bb7)

[^4]: Bryar, C., & Carr, B. (2021). *Working Backwards: Insights, Stories, and Secrets from Inside Amazon*. St. Martin's Press.