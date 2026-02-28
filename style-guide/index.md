---
layout: page
title: Style Guide
permalink: /style-guide/
nav_order: 4
---

A guide for writing on this blog. For contributors, editors, AI agents, and the author.

This guide draws on three influences: _The Economist_'s editorial discipline[^1], George Orwell's essay _Politics and the English Language_[^2], and Amazon's internal writing culture as codified in _Write Like an Amazonian_[^3] and described in _Working Backwards_[^4]. The standard is intellectual rigor. Writing here should be clear, fair-minded, and precise enough to withstand editorial scrutiny at _The Economist_, _The New York Times_, or _The Atlantic_.

### For AI agents

This section comes first because models weight instructions by position. Read this before drafting. Return to it after drafting.

**Hard rules (never violate):**

- Never fabricate a citation, source, or statistic. Never generate a citation from memory. Every footnote must be verified against the actual source before inclusion.
- Never publish a claim without a specific referent — a number, a name, a date, or a concrete example. If a claim lacks one, revise until it does or cut the claim.
- Never bury the thesis past the first paragraph.
- Never present interpretation as mechanism. State what happened before stating what it means.
- Never silently resolve uncertainty. Mark unverified claims with `[UNVERIFIED]`, uncertain judgments with `[REVIEW]`, and placeholder citations with `[SOURCE NEEDED]`. The human editor's job is to make judgment calls; the agent's job is to make those calls visible.
- Never produce a piece without engaging the strongest counterargument. If you cannot identify a real person or position that disagrees with the thesis, flag this for human review — the thesis may not be engaging with a real debate.

**Soft preferences (follow unless breaking the rule produces better writing):**

- Prefer plain language to polished language
- Prefer active voice
- Prefer short words, short sentences, short paragraphs
- Remove padding, qualifiers, weasel words, and vague abstractions
- Replace adjectives and adverbs with data wherever possible
- Avoid imperative openings (*Consider*, *Note that*, *Remember*, *Imagine*). If the sentence is strong enough to exist, it does not need a command to make the reader pay attention.
- Avoid AI-prose journalese: "Let's take a closer look," "The implications are far-reaching," "This raises an important question," "In an era of…," "At the end of the day," "The real question is not X but Y." These are the AI equivalent of a journalist's "Another week, another bomb." If you catch yourself producing one of these phrases, delete it and see if the paragraph still works. It almost always does.
- Place evidence at the point the reader needs convincing — not before the claim it supports, not in a separate section, not in a block dump. Statistics should be contextualised, not just stated. Anecdotes should be specific, not hypothetical.
- For each major claim, ask "why?" and "so what?" If the piece says "X happened," it should explain why. If it says "X matters," it should identify the non-obvious implication. The paragraph that answers "why" is usually where the real insight lives.

**After completing a draft, review every paragraph against this checklist:**

1. Does the first sentence carry the paragraph's claim?
2. Does every factual claim have a specific referent (number, name, date, example)?
3. Is every citation verified against the actual source? If not, is it flagged?
4. Is mechanism separated from interpretation?
5. Does the paragraph survive "so what?"
6. Can any sentence be cut without losing meaning?
7. Does the piece vary its paragraph structure, or does every paragraph follow the same claim-development-resolution pattern?
8. Are there any straw consensus moves, throat-clearing transitions, or unprovable scope claims?
9. Could any paragraph be removed without the reader noticing? If so, it is not doing work — cut it or make it load-bearing.
10. Is the strongest counterargument to the thesis engaged somewhere in the piece? Is it attributed to a real position?
11. Does the piece go at least one level deeper than surface description? Is there a "why" or "how" that the reader would not have arrived at alone?
12. Does the piece connect its specific argument to something larger — a historical precedent, a structural force, a broader principle? Does this connection amplify the argument or merely pad it?

**Pre-draft gate (apply at outline stage):** Before writing a full draft, test the outline against four questions. If any answer is weak, revise the outline before drafting — the most expensive mistake is drafting 2,000 words on a thesis that does not hold.[^5]

1. Can you state the thesis in a single sentence specific enough to be disagreed with? Does every planned section serve it?
2. Has this argument been made before? If you search for the thesis, how many pieces make substantially the same claim? What do you know from direct experience that those writers don't?
3. Can you name a specific person or institution that would disagree with your thesis? Can you state their strongest argument in terms they would endorse?
4. Do you have a "why" or "how" insight — a mechanism, a second-order effect, a non-obvious connection? Or are you planning to describe at the surface level?

**Grounding:** Draw claims from real experience (CorralData, NYT, Codecademy, Ready Set Rocket, University of Manchester). Do not invent authority, experiences, or results. Flag uncertainty for human review. If a sentence sounds impressive but says little, delete it.

### The "stands alone" test

The author is never in the room. The writing must do all the work.

Before publishing, ask: if a sceptical reader encountered this piece with no context — no conversation, no verbal supplement, no benefit of the doubt — would it survive? If the argument depends on anything not on the page, it is not finished.

Write as if an exacting editor will challenge every claim. If a sentence can be misunderstood, it will be. If it can be shortened, shorten it. If it conceals weak thinking, rewrite the thinking.

Every argument, every reference, every piece of assumed knowledge must be on the page. A piece that relies on the reader having seen a previous post, having attended the same conference, or sharing the author's professional context is not finished. The test is adversarial: if a sceptical reader with no prior relationship to the author encountered this piece cold, would every claim land?

### Voice and tone

Write with authority earned through experience, but without self-reference or display. Let judgment and evidence do the work.

Prefer the concrete to the abstract. Prefer the active voice to the passive. Prefer plain words to impressive ones.

Serious, not solemn. Wit may emerge naturally; jokes should not be engineered. Orwell's test applies throughout: if a phrase is there because it sounds right rather than because it means something precise, cut it.

Do not simply assert. When you express a judgment, support it with reasoning or evidence. Telling the reader what to think is not the same as persuading them. If your analysis is sound, you should not need to announce that you are right — the argument should show it.[^6]

Avoid self-congratulation, "thought leadership" rhetoric, hype, buzzwords, fashionable jargon, and pretending to certainty you do not have.

**Call things what they are.** Technical euphemisms obscure truth the same way political ones do. A *challenge* is usually a problem. A *learning* is usually a failure you survived. *Right-sizing* is firing people. *Sunsetting* is killing a product. If the plain word feels uncomfortable, that discomfort is information — either the thing itself is uncomfortable (in which case the reader deserves to know) or you are overstating (in which case revise the claim, not the word).[^7]

Good: "Training an internal LLM exposed a trade-off between data cleanliness and iteration speed."
Bad: "Our AI journey revealed powerful synergies across the organisation."

### Structure

**Begin with the argument.** State the main claim in the first paragraph. A narrative opening is permitted if the argument precedes it or is stated within that first paragraph. The test is whether a reader finishing the first paragraph knows what the piece is arguing. Scene-setting that delays the thesis is a maze, not an opening. The opening sentence should carry the seed of the entire piece — not just announce the topic, but compress the argument into a form that makes the reader want to see it developed. No gimmickry. No scene-setting. Plain words that provoke a thought.[^8]

**Lead every paragraph with its claim.** Each paragraph should open with a sentence that carries the paragraph's point. The reader should not have to reach the end of a paragraph to discover what it was about.

**Make every paragraph load-bearing.** The piece should be a sequence of paragraphs that follow logically, not a collection of observations sharing a topic. Ideally, removing any single paragraph should damage the argument. If a paragraph can be cut without the reader noticing, it was not doing work.[^9]

**Vary the pattern.** Not every paragraph should open with its claim — one in four or five can lead with evidence, detail, or narrative and let the point emerge. Not every paragraph should close with a resolution. Some should spill into the next, leaving the reader to carry the implication across the gap. If every paragraph is a closed loop — claim, development, summary — the writing will feel mechanical regardless of who or what produced it.[^10]

**Apply the "so what?" test.** Every paragraph must survive a sceptical reader asking "so what?" If the answer is "context" or "background," it belongs in a footnote or not at all.

**Use headings sparingly.** Headings should mark stages of reasoning, not decorate the page. A heading should carry a claim, not announce a topic. "The consensus machine" argues; "How LLMs work" labels. The reader who sees only the headings should be able to reconstruct the article's argument.

**Short paragraphs.** One idea at a time. If a paragraph tries to do two things, split it.

**End with impact.** Stop when the argument is complete. Do not restate it in weaker form. If you find yourself padding the ending, you have already finished. But "stop" does not mean "trail off." Strong endings in non-fiction do not summarise — they recontextualise, elevate, or complicate. The best endings echo the opening, introduce a forward-looking implication, or land on a concrete image that crystallises the argument. Delete your final paragraph and see if the piece ends better without it. If it does, your ending was a restatement. If it doesn't, look at your opening: can the ending echo, invert, or extend it?

### Originality

Write only what is worth writing. Before drafting, ask: has this argument been made before? If the thesis could be predicted from the headline — if a reader who follows the topic would say "I've read this" — the piece does not yet have a reason to exist.

Originality does not mean contrarianism. It means the writer has thought rather than assembled. An original thesis can come from a novel claim, from unexpected evidence for a familiar claim, from a new framework that reorganises existing knowledge, or from applying an idea from one domain to another.

The original thesis is usually hiding behind the safe one. It is the thing you believe from direct experience that you have not yet been willing to say plainly. Search for your thesis online. If many pieces make substantially the same argument, ask: what do I know from building, shipping, or operating that those writers don't? What have I seen that contradicts the standard take? Start there.

### Mechanism before interpretation

Separate what happened from what you think about it.

First explain the mechanism — the sequence of events, the system behaviour, the cause and effect. Then offer the interpretation. When mechanism and opinion are tangled together, the reader cannot evaluate either.

Good: "Latency increased 3x after we added the retrieval step. This suggests the embedding lookup, not the generation call, is the bottleneck."
Bad: "The retrieval step was clearly a mistake — it made everything slow."

If something is speculative, label it as such. Do not smuggle opinion in under the guise of fact.

### Intellectual honesty

Engage seriously with the strongest version of the opposing view. If a piece ignores the best counterargument or engages only with a weak one, it signals intellectual rigidity — and a careful reader will notice.

Identify the most compelling objection to your thesis. Take it seriously. Refute it with evidence, incorporate it as a qualification, or use it to sharpen the argument. The counterargument must be attributable to a real, identifiable position — not a manufactured consensus ("Everyone assumes…") constructed as a foil. If you cannot name a specific person or institution that holds the opposing view, the debate you are entering may not exist.

A piece that has absorbed and addressed its strongest objection is more persuasive than one that has avoided it. The reader's trust is earned by showing you have considered the reasons you might be wrong.

Good: "Spotify's Daniel Ek has argued that AI-generated content will reduce costs enough to offset the royalty problem. This understates the issue — cost reduction doesn't address the supply-side flood that devalues the catalogue."
Bad: "Some people think AI will solve the music industry's problems. They're wrong."

### Analytical depth

Surface-level non-fiction describes what happened. The writing here should explain *why* it happened, *what* it means, and *what* it implies for things the reader has not yet considered.

For each major claim, push one level deeper than the reader expects. If the topic is "AI in healthcare," surface-level is describing use cases. Depth is explaining why certain use cases succeed while others fail, and connecting that to a broader principle about where AI creates value. The "so what?" test applies at the paragraph level; analytical depth applies at the piece level. A piece that stays at "what" throughout — describing phenomena without explaining them — is not finished, no matter how well-crafted the prose.

The paragraph that answers "why" is usually the hardest to write and the easiest to skip. It is also usually where the real insight lives.

### Context

Situate the argument. The best non-fiction makes the reader feel that the specific claim exists within a larger world of meaning — a historical precedent, an industry dynamic, an intellectual tradition, a structural force.

Context is not background. Background says "here is what you need to know before I make my point." Context says "here is why this point matters beyond its immediate scope." The difference is that context amplifies the argument; background delays it. If a contextual paragraph makes the argument feel more significant, it belongs. If it feels like padding, cut it and accept that the piece operates at a narrower scope.

A piece about a technology decision is richer if it connects to the history of similar decisions. A piece about a market shift is more compelling if it acknowledges the structural forces that make the shift inevitable or contingent. But a piece that exists in a vacuum — as if the topic has no history or broader implications — leaves the reader to supply the significance on their own. That is work the writer should do.

### Evidence

Evidence wins arguments. But deployment matters as much as selection.

**Place evidence at point of need.** Introduce a fact, a number, or an example at the moment the reader needs convincing — not before the claim it supports and not in a separate "evidence" section. The reader should never wonder "why is this here?" or "where's the proof?"

**Dose appropriately.** A claim that needs one statistic to land does not need three. A claim that needs a detailed case study cannot be supported by a single number. Match the weight of evidence to the weight of the claim.

**Weave, don't dump.** Evidence blocks — paragraphs of data with no interpretive thread — stop the reader cold. Each piece of evidence should be introduced, presented, and connected to the argument within the same passage. If evidence and argument live in separate paragraphs, bring them together.

**Prefer the specific to the hypothetical.** "When Mount Sinai's radiology department deployed…" is stronger than "Imagine a healthcare provider who…" Named entities, real numbers, and actual examples build credibility. Hypothetical scenarios build nothing.

### Prose and momentum

Good prose has a kinetic quality. Sentences vary in length and structure. Paragraphs connect through logical progression rather than mechanical transition phrases. The pace matches the material — technical explanations slow down with care, narrative sections accelerate.

**Vary sentence rhythm.** A piece built entirely from medium-length declarative sentences will lull the reader regardless of how strong the argument is. Follow a long sentence with a short one. Let a complex construction land, then hit the reader with something blunt. Read the piece aloud: where your voice goes flat, the prose has stalled.

**Cut connective filler.** Search for: "This brings us to," "It is worth noting," "Furthermore," "Additionally," "Moreover," "That said," "In other words." Each one is a transition that can probably be cut, letting the next sentence land on its own. If two paragraphs need a transition phrase to connect them, the problem may be the paragraph order, not the absence of a bridge.

**Match pace to material.** Slow down for precision when a mechanism needs careful explanation. Speed up when the argument has momentum and the reader is ready to move. Never stall: if a passage repeats a point without adding new information, it has already made its case.

### Editing

Read the draft several times. On each pass, edit ruthlessly — cut, sharpen, compress. If a word adds nothing, remove it. If a sentence survives only because removing it feels wasteful, that is a reason to remove it.

"As a general rule, run your pen through every other word you have written; you have no idea what vigour it will give to your style" (Sydney Smith).

### Topics

The blog focuses on:

* **AI in practice** — Building, deploying, and operating AI systems; LLMOps; constraints, failures, and trade-offs.
* **Engineering leadership** — Hiring, incentives, culture, decision-making, and organisational mechanics.
* **Growth engineering** — Experimentation, subscription economics, and the limits of optimisation.
* **The startup CTO role** — Strategy versus execution, speed versus correctness, ambition versus reality.

Write only about what you know directly.

### Language and word choice

Follow Orwell's rules:

* Never use a metaphor, simile, or figure of speech you see in print every day.
* Never use a long word where a short one will do. ("utilise" → "use", "leverage" → no.)
* If it is possible to cut a word out, cut it out. ("in order to" → "to", "due to the fact that" → "because".)
* Never use the passive where you can use the active.
* Never use a foreign phrase, scientific term, or jargon word if an everyday English equivalent exists.
* Break any of these rules sooner than say anything outright barbarous.

**Watch for mixed metaphors.** A metaphor that is dead enough to use casually can still clash with another dead metaphor in the same sentence. "Cutting the budget deficit" is fine; "a package cutting the deficit while the government navigates uncharted waters" mixes tools with ships. If you use a metaphor, hold it for the sentence or drop it.[^11]

**Avoid the false possessive.** "CorralData's healthcare market" implies the market belongs to CorralData. Write: "the healthcare market" or "the market CorralData serves." The possessive does the job of *of*, not *in* or *for*.[^12]

**Compare like with like.** When comparing, ensure both sides are the same kind of thing. "Our latency is better than the competitor" compares a measurement to a company. Write: "Our P90 latency is lower than the competitor's." This error is easy to commit and hard to spot.[^13]

**Cut redundancies.** If a compound can be reduced without losing meaning, reduce it. *Cutbacks* → cuts. *Track record* → record. *The fact that* → that. *Currently* usually serves no purpose.[^14]

#### Usage to get right

* **beg the question** means to assume the conclusion in the premise, not to *raise* the question.
* **which** informs; **that** defines. "This is the system that failed" (defines which system). "This system, which failed last Tuesday, has been replaced" (adds information).
* **effectively** means *with effect*. If you mean *in practice* or *essentially*, say so.
* **due to** when used to mean *caused by* must follow a noun. Do not write "It was cancelled due to rain." Write "because of" or restructure.[^15]

### Weasel words and common tics

Common patterns to eliminate:

* **Hedge phrases**: "would help the solution", "might bring clarity", "should result in benefits"
* **False precision**: "nearly all", "significant improvement", "the vast majority"
* **Unearned authority**: "it is widely believed", "experts agree", "arguably the best"
* **Qualifiers that dilute**: "I think", "it seems", "generally speaking"
* **Straw consensus**: "Everyone assumes...", "What most teams miss...", "The conventional wisdom is..." followed by the writer's correction. If you cannot name who holds the position you are arguing against, the consensus may not exist. State your claim directly without manufacturing a mainstream view to push against.
* **Throat-clearing transitions**: "The evidence bears this out", "It is worth noting that", "This brings us to...", "Let's take a closer look." If the next sentence is strong enough to exist, it does not need an announcement. Cut the transition and let the sentence land.
* **Unprovable scope claims**: "Almost nobody", "most teams", "everyone in the industry." Treat scope claims as empirical claims. If you cannot support them with a number or a source, they are not rhetorical shading — they are unfinished claims. Either find the evidence or state the point without the scope.

The fix is almost always the same: replace the weasel word with a number, a name, or a date. If you cannot, the claim may not be ready to make.

Bad: "Performance improved significantly."
Good: "P90 latency dropped from 1,200ms to 340ms."

If a sentence survives only because a vague qualifier is sheltering a weak claim, delete the sentence.

#### Vogue words to question

These words are not banned, but if you reach for one, ask whether it is the most precise word available or whether you are using it because it sounds authoritative. Many are overrepresented in AI-generated prose.[^16]

* **iconic** — overused to the point of meaning nothing
* **innovative** — what exactly is new? Say what changed
* **impact** (as a verb) — prefer *affect*, *change*, *damage*, or be specific
* **facilitate** — usually *help* or *enable*
* **leverage** (as a verb) — never; use *use*, *exploit*, or explain the mechanism
* **meaningful** — meaningful to whom? Replace with the specific consequence
* **paradigm** — almost never necessary
* **proactive** — what action, specifically?
* **ecosystem** — unless you mean an actual biological ecosystem, rephrase
* **landscape** — ("the AI landscape") prefer a concrete description
* **space** — ("in the observability space") say *market*, *field*, or name the thing
* **stakeholder** — say who they are: *customers*, *investors*, *the team*
* **bandwidth** — (for human capacity) prefer *time* or *attention*
* **unlock** — ("unlock value") what specifically happened?
* **lean into** — prefer *pursue*, *accept*, or *emphasise*
* **north star** — state the goal directly
* **net-net** — say what you mean
* **holistic** — unless invoking the Smuts theory, find a precise word
* **key** (as an adjective) — usually *important* or *main*, or better: say why it matters

### Specificity over direction

Prefer the specifically true to the directionally true. If you can attach a number, a date, a name, or a concrete example, do so. Before including any claim, apply this test: does it contain a specific referent? If not, revise until it does or cut the claim.

### Numbers

Spell out one through ten. Use figures for 11 and above. Exceptions: always use figures with units of measurement (*4 metres*, *9ms*), percentages (*4%*), and in sets where some numbers exceed ten (*Deaths from this cause in the past three years were 14, 9, and 6*).

Never start a sentence with a figure — spell it out or restructure.

Use figures for decimals (*4.25*). Use fractions for rough figures (*about 3½%*) and decimals for precise ones (*10.6%*). Do not compare a fraction with a decimal in the same passage.

Prefer rounding. Beware of phoney precision — three decimal places rarely mean what they appear to mean.[^17]

### Source verification

Every cited claim must be traceable to a specific, named source before publication. If you cannot find the source, the claim is not ready to publish — no matter how plausible it sounds or how well it serves the argument. A precise-sounding falsehood is worse than a vague truth.

This applies with particular force to AI-assisted drafting, where models generate confident, well-formatted citations that do not exist. Verify every footnote against the actual source. If a source cannot be located, flag it explicitly for human review — do not substitute a plausible-sounding alternative.

### Formatting

Formatting exists to clarify meaning.

* **Bold**: rare, for emphasis only.
* *Italics*: titles of publications; first introduction of a term.
* `Code formatting`: technical terms, commands, file names.

Use em dashes — sparingly — for brief asides.

**Formatting for online reading.** Assume the reader will skim before they read. Headings, opening sentences of paragraphs, and any standfirst must carry the argument independently. If a skimmer who reads only these elements cannot reconstruct the thesis, the structure is not doing its job.

### Length

Length is determined by argument, not habit.

* Standard essays: 600–1,500 words
* Short observations: 300–500 words
* Extended analyses: up to 2,500 words

If the piece grows longer without becoming sharper, it is not finished.

### Headlines

Headlines should state what the article is about and why it matters. Be specific. Avoid ambiguity and intrigue. Prefer statements to questions.

Good: "Why Most Internal LLM Projects Stall After the Pilot"
Bad: "Thoughts on AI"

A headline that promises more than the article delivers is a form of dishonesty.

### Technical content

Assume an intelligent, informed reader. Skip textbook explanations. Be explicit about context and constraints.

**Move between registers.** Most pieces here address readers with varying levels of domain expertise. Dive into technical specifics when precision matters and then surface to explain implications in plain language. Use technical terms when they add precision, define them when they might confuse, and avoid them when they add nothing. The test: a domain expert and an informed generalist should both be able to read the piece productively. If the piece is pitched at a single register throughout — impenetrably technical or uniformly simplified — it is not reaching its full audience.

**Say which AI.** *AI* is a field, not a technology. Do not use it when you mean something more specific. If the system is a large language model, write *large language model* or *LLM*. If the technique is retrieval-augmented generation, write *RAG*. If the method is fine-tuning, write *fine-tuning*. The reader of this blog will know the difference, and imprecision signals that the writer does not. *Acme uses a large language model to draft customer replies* tells the reader what is happening. *Acme uses AI* could mean anything from a rules engine to a diffusion model. Prefer *AI system* or *AI model* to *AI* used alone as a noun. And do not write *the AI thinks* or *the AI decides* — a model generates outputs; it does not have volition.

Spell out abbreviations on first use unless they are more familiar in abbreviated form (API, SQL, LLM, AWS, GPU). Do not define an abbreviation you will not use again — it clutters the page for no return. After the first mention, prefer a plain-language reference ("the model," "the service") over repeating the abbreviation, to avoid spattering the page with capital letters.[^18]

**Identify entities on first mention.** When a person, company, or organisation appears for the first time, tell the reader what it is — briefly, in apposition, using the indefinite article. "Barclays, **a** British bank" not "Barclays, **the** British bank." The indefinite article avoids implying it is the only one of its kind. If the entity is well-known enough that any description sounds absurd, either drop it or add a distinguishing detail that earns its place: "Toyota, the world's biggest car company" tells the reader something even if they already know what Toyota is. The test is whether a reader outside your field would be able to place the entity without stopping to search. If in doubt, identify.[^19]

Code examples should illustrate a point, not serve as tutorials. If code is doing rhetorical work rather than explanatory work, remove it.

### Attribution and citations

Credit sources plainly and accurately. Link where it helps the reader.

Use **APA citation style**, adapted for the web. Cite sources using **footnotes with links**, not in-text parentheticals. Footnotes should point directly to the original source whenever possible. Keep citations factual and minimal. When citing opinion or analysis, make clear whether it is the source's claim or your own interpretation.

Do not name institutions or credentials to borrow authority. Footnotes should clarify, not interrupt. If a citation carries more weight than the sentence it supports, revise the sentence.

### What not to write

* Commentary on news cycles or online disputes
* Content that belongs on LinkedIn or serves as "thought leadership"
* Pieces requiring disclaimers or PR framing
* Inspirational, motivational, or SEO-driven writing
* Anything that substitutes style for thought

---

### References

[^1]: The Economist. (2018). *The Economist Style Guide* (12th ed.). Profile Books.

[^2]: Orwell, G. (1946, April). Politics and the English language. Horizon. [https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/](https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/)

[^3]: Amazon. (2018, November). *Write Like an Amazonian* [Internal training document]. Principles widely summarised; see Sheridan, D. (2019). Amazon Writing Style Tips. Fact of the Day 1. [https://medium.com/fact-of-the-day-1/amazon-writing-style-tip-3-184c76dd2bb7](https://medium.com/fact-of-the-day-1/amazon-writing-style-tip-3-184c76dd2bb7)

[^4]: Bryar, C., & Carr, B. (2021). *Working Backwards: Insights, Stories, and Secrets from Inside Amazon*. St. Martin's Press.

[^5]: The pre-draft gate is adapted from the TTNW (Test for Thoughtful Non-Fiction Writing, v1.1, 2026), which applies four of its 14 tests — Thesis Architecture, Originality of Thesis, Intellectual Honesty, and Analytical Depth — at outline stage to catch foundation problems before full drafting.

[^6]: Adapted from *The Economist Style Guide* (12th ed.), Introduction: "When you express opinions, do not simply make assertions. The aim is not just to tell readers what you think, but to persuade them."

[^7]: Adapted from *The Economist Style Guide* (12th ed.), "euphemisms": "Remember that euphemisms are the stock-in-trade of people trying to obscure the truth."

[^8]: Adapted from *The Economist Style Guide* (12th ed.), Introduction, citing the essays of Francis Bacon: "Each of these beginnings carries implicitly within it an entire essay."

[^9]: Adapted from *The Economist Style Guide* (12th ed.), Introduction: Articles "should not be mere bits of information stitched together. Each should be a coherent whole, a series of paragraphs that follow logically in order and, ideally, will suffer if even one sentence is cut out."

[^10]: Chakrabarty, T., Laban, P., Agarwal, D., Muresan, S., & Wu, C.-S. (2024). Art or artifice? Large language models and the false promise of creativity. *Proceedings of the ACM CHI Conference on Human Factors in Computing Systems*. Expert evaluators identified topic sentences at every paragraph opening, summary sentences at every closing, and ornamental language as structural tics of LLM-generated prose. [https://arxiv.org/abs/2309.14556](https://arxiv.org/abs/2309.14556)

[^11]: Adapted from *The Economist Style Guide* (12th ed.), "metaphors": "Dead or alive, take great care not to mix them."

[^12]: Adapted from *The Economist Style Guide* (12th ed.), "grammar and syntax," false possessive: "The Chrysler Building is *in* New York, not *of* it."

[^13]: Adapted from *The Economist Style Guide* (12th ed.), "grammar and syntax," comparisons: "Take care, too, when making comparisons, to compare like with like."

[^14]: Adapted from *The Economist Style Guide* (12th ed.), "unnecessary words."

[^15]: Adapted from *The Economist Style Guide* (12th ed.), entries for "beg the question," "which and that," "effectively," and "due to."

[^16]: Adapted from *The Economist Style Guide* (12th ed.), "horrible words": "Nothing betrays the lazy writer faster than fly-blown and horrible words used in the belief that they are snappy, trendy or cool."

[^17]: Adapted from *The Economist Style Guide* (12th ed.), "figures."

[^18]: Adapted from *The Economist Style Guide* (12th ed.), "abbreviations": "There is no need to give the initials of an organisation if it is not referred to again. This clutters both the page and the brain."

[^19]: Adapted from *The Economist Style Guide* (12th ed.), "grammar and syntax," a or the: "Strictly, Barclays is *a* British bank, not *the* British bank." Also "abbreviations": "If in doubt about its familiarity, explain what the organisation is or does."