---
layout: post
title: "Introducing TTNW: the Test for Thoughtful Non-Fiction Writing"
description: "A Quantified Evaluation Framework for Essays, Op-Eds, and Business/Tech Writing."
created_date: 2026-02-27
updated_date: 2026-02-27
---

*Version 1.1 — February 2026*

---

## Background

No established instrument exists for the quantified evaluation of non-fiction writing quality. Automated Essay Scoring (AES) systems focus on student assessment — grammar, organization, thesis strength — rather than the craft and intellectual rigor that distinguish publishable non-fiction. Creative writing benchmarks (WritingBench, EQ-Bench Creative Writing v3) target fiction. Writing rubrics in educational settings are designed for grading, not for the diagnostic evaluation of professional prose.

The TTNW fills this gap. It provides a structured, repeatable method for scoring essays, op-eds, blog posts, and business or technical thought leadership — any non-fiction prose intended for publication and written to persuade, inform, or analyze.

### Methodological lineage

The TTNW draws on the dimensional framework of Torrance's Tests of Creative Thinking (Torrance, 1966) as adapted for creative writing evaluation by Chakrabarty, Laban, Agarwal, Muresan & Wu (2024), who developed the Torrance Test of Creative Writing (TTCW) — a 14-test binary instrument for evaluating creativity in fiction, validated through expert rater agreement studies. The TTNW retains three design principles from that work:

1. **Dimensional organization.** Tests are grouped under Torrance's four dimensions — Fluency, Flexibility, Originality, and Elaboration — though the constructs measured under each dimension have been redefined for non-fiction.
2. **Anchored continuous scoring.** Each test is scored on a 0.0–1.0 scale with three defined anchor points (0.0 Clear Fail, 0.5 Partial, 1.0 Clear Pass). This departs from the TTCW's binary scoring in order to support iterative revision tracking — the TTNW's primary use case. See Scoring for details.
3. **Additive, artifact-centric evaluation.** The total score (0.0–14.0) is applied to the finished piece, not the writing process.

All 14 individual tests are original to the TTNW. None replicate tests from the TTCT or TTCW. The dimensional balance (5-3-2-4) reflects the finding, developed through iterative scoring of published non-fiction across genres, that non-fiction quality depends more heavily on argument architecture (Fluency) and evidentiary substance (Elaboration) than on originality of form.

---

## Design Principles

**1. General, not prescriptive.** The TTNW evaluates non-fiction across genres and editorial voices — an *Economist* news analysis, an *Atlantic* longread, a Stratechery post, an HBR research article, a company blog, an op-ed. It does not encode the preferences of any particular style guide. A piece can score highly regardless of whether it uses British or American conventions, first person or third, short paragraphs or long.

**2. Artifact-centric.** Evaluation targets the finished piece as a reader encounters it. The writer's process, intentions, and reputation are irrelevant. This enables self-assessment, peer review, and LLM-assisted scoring from the same instrument.

**3. Anchored continuous scoring.** Each test is scored 0.0–1.0 to one decimal place, with anchor points at 0.0, 0.5, and 1.0. The scorer must provide 1–3 sentences justifying the score. This balances the need for revision-tracking granularity against the risk of false precision.

**4. Additive.** No single test is a prerequisite. A tightly focused technical post may deliberately sacrifice contextual richness for analytical depth. A reported feature may score low on originality of thesis but high on evidence integration and source integrity. The total score measures breadth of quality; the dimensional breakdown diagnoses where a piece is strong and where it needs work.

**5. Revision-oriented.** The framework is designed for iterative improvement, not just evaluation. Tests are organized into revision tiers that encode dependencies. Each test includes a revision prompt — a specific exercise for improving a weak score. A subset of tests can be applied at outline stage as a pre-draft gate to catch foundation problems before full drafting.

---

## Pre-Draft Gate

Four tests can be meaningfully applied to an outline or thesis statement before a full draft is written. Applying these early catches the most expensive failures — the ones that require starting over rather than revising.

| Test | Pre-Draft Question |
|------|--------------------|
| **F1 · Thesis Architecture** | Can you state the thesis in a single sentence that is specific enough to be disagreed with? Does every planned section serve it? |
| **O1 · Originality of Thesis** | Has this argument been made before? If the reader has followed the topic, will they encounter a new idea or a recombination of existing takes? |
| **Fx1 · Intellectual Honesty** | Can you name a specific person or institution that would disagree with your thesis? Can you state their strongest argument? |
| **E3 · Analytical Depth** | Do you have a "why" or "how" insight — a mechanism, a second-order effect, a non-obvious connection? Or are you planning to describe at the surface level? |

**Scoring the gate.** Apply each test on the same 0.0–1.0 scale. If any of the four scores below 0.5, the outline has a foundation problem. Revise the outline before drafting. This is not a formal threshold — it is a heuristic. But drafting a 2,000-word piece on a 0.2 thesis is the most expensive mistake a writer can make.

---

## The 14 Tests

### FLUENCY (5 tests)
*How effectively the writing moves a reader from premise to conclusion — the clarity, momentum, and architecture of the argument.*

---

**F1 · Thesis Architecture** · Revision Tier 1

Does the piece advance a clear, specific, arguable thesis — and does the structure of the piece serve that thesis throughout?

A strong non-fiction piece is an argument, not a collection of observations. The thesis should be specific enough to be disagreed with. "AI will transform healthcare" fails this test. "The bottleneck in healthcare AI isn't the model, it's the schema" passes. Every section of the piece should serve, complicate, or advance the central claim. If a paragraph could be removed without weakening the argument, the architecture has a gap.

| Score | Anchor |
|-------|--------|
| 0.0 | No discernible thesis, or the piece drifts between unrelated topics. |
| 0.5 | A thesis is present but too broad to be arguable, or 1–2 sections are orphaned from it. |
| 1.0 | Clear, specific, arguable thesis. Every section serves it. No orphaned material. |

**When this test scores low, ask:** Write your thesis in a single sentence. Now check: does every section of the piece advance, complicate, or qualify that sentence? Cut or restructure anything that doesn't. If you can't write the sentence, the piece doesn't have a thesis yet.

---

**F2 · Prose Momentum** · Revision Tier 4

Does the writing sustain forward motion — varying sentence rhythm, managing transitions through logic rather than filler, and maintaining a pace appropriate to the material?

Good non-fiction prose has a kinetic quality. Sentences vary in length and structure. Paragraphs connect through logical progression rather than mechanical transition phrases. The pace matches the material: technical explanations slow down with care, narrative sections accelerate, and the piece never stalls in repetition or circles back without adding new information.

| Score | Anchor |
|-------|--------|
| 0.0 | Monotonous rhythm, frequent filler transitions, or passages that repeat without adding information. |
| 0.5 | Generally moves forward but stalls in places, or relies on mechanical transitions in some sections. |
| 1.0 | Each sentence earns the next. Rhythm varies. Transitions arise from logic, not connective filler. |

**When this test scores low, ask:** Read the piece aloud. Where does your voice go flat? Those are your stalls. Now search for these phrases: "This brings us to," "It is worth noting," "Furthermore," "Additionally," "Moreover." Each one is a transition that can probably be cut, letting the next sentence land on its own.

---

**F3 · Mechanism Before Interpretation** · Revision Tier 2

Does the piece separate what happened from what the writer thinks about it — presenting evidence, process, or causation before offering judgment or interpretation?

When mechanism and opinion are tangled together, the reader cannot evaluate either. A strong piece first establishes the observable reality — the sequence of events, the system behavior, the data — and then offers the interpretation. The reader should always be able to distinguish the writer's evidence from the writer's inference. Where something is speculative, it should be marked as such rather than smuggled in as fact.

| Score | Anchor |
|-------|--------|
| 0.0 | Opinion is presented as observation throughout. The reader cannot distinguish evidence from inference. |
| 0.5 | Some separation, but interpretation is tangled with mechanism in key passages. Speculation is not always flagged. |
| 1.0 | Evidence and interpretation are clearly separated. The reader always knows which is which. Speculation is flagged. |

**When this test scores low, ask:** Highlight every sentence that states a judgment, opinion, or interpretation in one color. Highlight every sentence that states an observable fact, event, or mechanism in another. Now check: does evidence appear *before* each judgment? If a judgment has no preceding evidence, either add the evidence or flag the claim as speculation.

---

**F4 · Evidence Integration** · Revision Tier 3

Are data, examples, anecdotes, and citations woven into the argument naturally — supporting claims at the point of need rather than dumped in blocks?

Non-fiction lives or dies on evidence, but deployment matters as much as selection. A strong piece introduces evidence at the moment the reader needs convincing, in the amount needed to persuade, and in a form that serves the prose rather than interrupting it. Statistics should be contextualized, not just stated. Anecdotes should be specific, not hypothetical. Citations should feel like natural extensions of the argument rather than academic throat-clearing or decorative credentialing.

| Score | Anchor |
|-------|--------|
| 0.0 | Evidence is absent, dumped in blocks, or disconnected from the claims it's supposed to support. |
| 0.5 | Evidence is present and generally relevant but unevenly deployed — over-documented in some places, absent in others. |
| 1.0 | Evidence appears when needed, in the right dosage. The reader never wonders "why is this here?" or "where's the proof?" |

**When this test scores low, ask:** For each major claim, identify the evidence that supports it. Is the evidence in the same paragraph, or does the reader have to travel to find it? For each block of evidence, identify the claim it supports. If you can't, the evidence may be decorative. Move evidence to point of need. Cut evidence that supports no claim.

---

**F5 · Closing & Resolution** · Revision Tier 4

Does the piece end with impact — resolving or reframing the central argument in a way that feels earned, without restating what has already been said?

Strong endings in non-fiction do not summarize. They recontextualize, elevate, or complicate. The best endings echo the opening, introduce a forward-looking implication, or land on a concrete image or moment that crystallizes the abstract argument. The worst endings restate the thesis in weaker form, introduce entirely new arguments in the final paragraph, append a generic call to action, or trail off into vague optimism. When the argument is complete, stop.

| Score | Anchor |
|-------|--------|
| 0.0 | The ending restates the thesis in weaker form, introduces unearned conclusions, or trails off. |
| 0.5 | The ending is adequate but doesn't add anything — it closes the piece without elevating it. |
| 1.0 | The ending adds a new frame, implication, or resonance. Or it simply stops at exactly the right moment. |

**When this test scores low, ask:** Delete your final paragraph. Does the piece now end better? If yes, your previous ending was a restatement. Now look at your opening: can the ending echo, invert, or extend it? If you can't find an ending that adds something, the piece may simply be finished one paragraph before where you stopped.

---

### FLEXIBILITY (3 tests)
*The writer's intellectual range — the ability to hold multiple perspectives, adopt the reader's position, and shift between registers.*

---

**Fx1 · Intellectual Honesty & Counterargument** · Revision Tier 2

Does the piece engage seriously with the strongest version of opposing viewpoints — and does this engagement strengthen rather than weaken the central argument?

The hallmark of a flexible non-fiction mind is the ability to steelman the opposition. A piece that acknowledges only weak counterarguments (strawmanning) or that ignores opposition entirely signals intellectual rigidity. A strong piece identifies the most compelling objection to its thesis, takes it seriously, and either refutes it with evidence, incorporates it as a qualification, or uses it to sharpen the argument. Critically, the counterargument must be attributable to a real, identifiable position — not a manufactured consensus ("Everyone assumes...") constructed as a foil.

| Score | Anchor |
|-------|--------|
| 0.0 | No counterargument is engaged, or opposition is strawmanned or manufactured. |
| 0.5 | A counterargument is acknowledged but not the strongest one, or the engagement is superficial. |
| 1.0 | The strongest counterargument is engaged fairly, and the piece is stronger for having done so. The opposing view is attributable. |

**When this test scores low, ask:** Name a specific person or institution that would disagree with your thesis. State their strongest argument in terms they would endorse. Now write a paragraph engaging with that argument — refuting it with evidence, incorporating it as a qualification, or using it to sharpen your claim. If you can't name the person, your thesis may not be engaging with a real debate.

---

**Fx2 · Register Fluidity** · Revision Tier 4

Can the piece move between technical depth and accessible explanation — adjusting complexity for the reader without either dumbing down or showing off?

Most non-fiction addresses readers with varying levels of domain expertise. A flexible piece can dive into technical specifics when precision matters and then surface to explain implications in plain language. It calibrates jargon: technical terms are used when they add precision, defined when they might confuse, and avoided when they add nothing. The piece respects its audience's intelligence while not assuming specialized knowledge it hasn't provided.

| Score | Anchor |
|-------|--------|
| 0.0 | Pitched at a single register throughout — either impenetrably technical or uniformly simplified. |
| 0.5 | Some register variation, but jargon is inconsistently handled or the piece defaults to one level for most of its length. |
| 1.0 | A domain expert and an informed generalist could both read the piece productively. Technical depth and accessibility coexist. |

**When this test scores low, ask:** Identify your most technical passage and your most general passage. Is there only one register? Now pick your most important technical claim and try explaining it to a smart friend outside your field. Can you do it in two sentences without losing the precision? If so, both versions belong in the piece — the precise version for experts, the plain version for everyone else.

---

**Fx3 · Stands-Alone Self-Sufficiency** · Revision Tier 3

Does the piece work completely on its own — without the author present to explain, without assumed shared context, and without benefit of the doubt?

Published non-fiction must survive contact with a stranger. Every argument, every reference, every piece of assumed knowledge must be on the page. A piece that relies on the reader having seen a previous post, having attended the same conference, or sharing the author's professional context is not finished. The test is adversarial: if a skeptical reader with no prior relationship to the author encountered this piece cold, would every claim land?

| Score | Anchor |
|-------|--------|
| 0.0 | Relies heavily on assumed shared context, insider references, or the reader's goodwill to fill argumentative gaps. |
| 0.5 | Mostly self-contained but 1–2 references or claims assume context that a cold reader wouldn't have. |
| 1.0 | A cold, skeptical reader with no prior context could follow the argument, evaluate the evidence, and understand every reference. |

**When this test scores low, ask:** Imagine your most skeptical reader — someone who doesn't know you, doesn't work in your field, and will not give you the benefit of the doubt. Read the piece as that person. Where do you hit a reference you can't evaluate, a claim that rests on unstated context, or a leap that only works if you already agree? Those are your gaps. Fill them or cut the claims that depend on them.

---

### ORIGINALITY (2 tests)
*The freshness of the writer's thinking — whether the piece offers a genuinely new argument and avoids the prefabricated language and thought patterns that signal a writer on autopilot.*

---

**O1 · Originality of Thesis** · Revision Tier 1

Does the piece advance an argument that the reader is unlikely to have encountered before — or reframe a familiar topic in a way that produces genuine new insight?

This is the highest-value test. An original thesis doesn't mean a contrarian one — it means one that reflects genuine thinking rather than recombination of existing takes. The piece should make the reader think "I hadn't considered it that way" rather than "I've read this argument before." Originality can come from a novel claim, from unexpected evidence for a familiar claim, from a new framework that reorganizes existing knowledge, or from applying an idea from one domain to another.

| Score | Anchor |
|-------|--------|
| 0.0 | The argument could be predicted from the headline, restates consensus, or is contrarian without support. |
| 0.5 | The argument is familiar but supported by new evidence, or a familiar framing is applied in a modestly new context. |
| 1.0 | The reader encounters at least one idea or framing they haven't seen before, and it is genuinely thought-through. |

**When this test scores low, ask:** Search for your thesis online. How many pieces make substantially the same argument? If the answer is "many," you are restating consensus. Now ask: what do I know from direct experience that those writers don't? What have I seen that contradicts the standard take? The original thesis is usually hiding behind the one you started with — it's the thing you believe that you haven't yet been willing to say plainly.

---

**O2 · Freedom from Cliché & Received Wisdom** · Revision Tier 4

Is the piece free of tired phrases, buzzwords, and default framings that signal the writer is reaching for available language rather than generating it from thought?

Non-fiction clichés operate at two levels. At the language level: "at the end of the day," "move the needle," "north star," "double-edged sword," "paradigm shift," "unlock value," "low-hanging fruit," "at scale," "the elephant in the room." At the thought level: "technology is just a tool," "the answer is somewhere in the middle," "we need to have a conversation about X," unearned historical parallels, and false equivalences presented as balance. A piece free of cliché demonstrates that the writer is generating language from the specific demands of the specific argument, not assembling pre-fabricated units.

| Score | Anchor |
|-------|--------|
| 0.0 | The piece is built from stock phrases and conventional framings. Passages could be swapped into an unrelated piece on a similar topic. |
| 0.5 | Mostly original language, but 2–3 stock phrases or default framings remain that substitute for precision. |
| 1.0 | The language feels native to this specific argument. The writer's phrasing could not have been predicted from the subject matter alone. |

**When this test scores low, ask:** Search the piece for these phrases and their variants: "at the end of the day," "move the needle," "unlock," "leverage," "paradigm shift," "double-edged sword," "north star," "at scale," "the elephant in the room," "it's not about X, it's about Y." Delete every one you find. Now read each sentence that contained one: can you say the same thing more precisely in your own words? If you can, the cliché was hiding imprecise thinking. If you can't, the thought itself may not be ready.

---

### ELABORATION (4 tests)
*The depth of the writing — specificity of examples, integrity of sources, rigor of analysis, and richness of context.*

---

**E1 · Concrete Specificity** · Revision Tier 3

Does the piece use specific names, numbers, dates, places, and examples — rather than vague gestures toward unnamed entities, unspecified data, or hypothetical scenarios?

Specificity is the non-fiction writer's primary tool of persuasion. "A major tech company" is weaker than "Salesforce." "Significant revenue growth" is weaker than "38% year-over-year ARR growth." "Imagine a healthcare provider who..." is weaker than "When Mount Sinai's radiology department deployed..." Every vague reference is a missed opportunity to build credibility. Before any claim is included, it should contain a specific referent: a number, a name, a date, or a concrete example. If it cannot, the claim may not be ready to make.

| Score | Anchor |
|-------|--------|
| 0.0 | The piece relies on unnamed entities, hypothetical scenarios, and vague statistics. |
| 0.5 | Some specific referents are present, but key claims lack them. Vague and specific passages coexist. |
| 1.0 | The piece is grounded in specifics: named entities, real numbers, actual examples. The reader trusts the writer has done the work. |

**When this test scores low, ask:** Highlight every claim that lacks a specific referent — a number, a name, a date, or a concrete example. For each one, can you add the specific? If yes, add it. If no, the claim may not be ready to make. Pay particular attention to sentences that begin with "Many companies," "Most teams," "Studies show," or "Imagine." These are the most common specificity failures in professional non-fiction.

---

**E2 · Source Integrity** · Revision Tier 3

Are the piece's factual claims traceable to real, verifiable sources — and are uncertain or unverified claims marked as such?

This test is distinct from specificity. A piece can be full of precise-sounding numbers and named sources that are fabricated, misattributed, or unverifiable. Source integrity means every cited claim can be traced to a specific, named source that actually says what the writer claims it says. This is especially critical in an era of AI-assisted drafting, where models generate confident, well-formatted citations that do not exist. A precise-sounding falsehood is worse than a vague truth. Where a claim cannot be verified, intellectual honesty demands that the uncertainty be visible rather than papered over.

| Score | Anchor |
|-------|--------|
| 0.0 | Claims are attributed to sources that don't support them, citations are unverifiable, or confident assertions mask uncertainty. |
| 0.5 | Most claims are traceable, but 1–2 citations are unverifiable or a claim is presented with more confidence than the evidence warrants. |
| 1.0 | Every factual claim is traceable to a real source. Uncertainty is acknowledged. No citation is decorative or unverifiable. |

**When this test scores low, ask:** For every citation and attributed claim in the piece, open the original source. Does it say what you claim it says? Is the source real? If you used AI assistance for any part of the draft, treat every citation as suspect until verified. For unverified claims, add an explicit hedge ("according to," "if confirmed") or flag for verification before publication. If a source cannot be located, cut the claim — no matter how well it serves the argument.

---

**E3 · Analytical Depth** · Revision Tier 2

Does the piece go beyond surface-level observation to explain *why* something is true, *how* a mechanism works, or *what* the non-obvious implications are?

Surface-level non-fiction describes what happened. Deep non-fiction explains why it happened, what it means, and what it implies for things the reader hasn't yet considered. Analytical depth means the writer has thought at least one level deeper than the reader expects. If the topic is "AI in healthcare," surface-level is describing use cases; depth is explaining why certain use cases succeed while others fail, and connecting that to a broader principle about where AI creates value.

| Score | Anchor |
|-------|--------|
| 0.0 | The piece stays at "what" throughout — describing phenomena without explaining them. |
| 0.5 | Some analysis is present but doesn't go deeper than an informed reader would expect. |
| 1.0 | At least one passage goes a level deeper than expected — revealing a mechanism, a second-order effect, or a non-obvious connection. |

**When this test scores low, ask:** For each major claim, ask "why?" and "so what?" If your piece says "X happened," ask why it happened. If it says "X matters," ask what the non-obvious implication is. Write one additional paragraph that answers the "why" or "so what" that your piece currently leaves to the reader. That paragraph is usually where the real insight lives — and it's the paragraph most writers skip because it requires the hardest thinking.

---

**E4 · Contextual Richness** · Revision Tier 3

Does the piece situate its argument within a broader landscape — historical precedent, industry dynamics, intellectual tradition, or societal implications — in a way that amplifies rather than dilutes the central claim?

The best non-fiction writing makes the reader feel that the specific argument exists within a larger world of meaning. A piece about a technology decision is richer if it connects to the history of similar decisions. A piece about a market shift is more compelling if it acknowledges the structural forces that make the shift inevitable or contingent. Context is not background — it is the intellectual environment that gives the argument its significance. The test is whether context amplifies the argument or merely pads the word count.

| Score | Anchor |
|-------|--------|
| 0.0 | The piece exists in a vacuum — as if the topic has no history, broader implications, or connection to larger forces. |
| 0.5 | Some context is provided but it's generic or disconnected from the specific argument. |
| 1.0 | Context amplifies the argument. The reader understands not just what the writer is arguing but why it matters in a larger frame. |

**When this test scores low, ask:** What happened before? Has anyone faced this problem or made this argument previously? What are the structural forces — economic, technological, political, cultural — that make your argument timely or significant? Write one paragraph connecting your specific claim to one broader context. If that paragraph makes the argument feel more significant, it belongs. If it feels like padding, cut it and accept that the piece operates at a narrower scope.

---

## Revision Tiers

When multiple tests score low, revise in tier order. Fixing a higher-tier problem will often change the score of lower-tier tests — improving your thesis (Tier 1) restructures the piece and may fix evidence integration (Tier 3) as a side effect. Polishing prose (Tier 4) before fixing analytical depth (Tier 2) is wasted work.

### Tier 1 — Foundation
*Fix these first. If these fail, the piece has a structural problem that invalidates other scores.*

| Test | Why it's foundational |
|------|----------------------|
| **F1 · Thesis Architecture** | Everything else hangs on the thesis. A piece with no clear argument can't be evaluated for evidence, depth, or honesty. |
| **O1 · Originality of Thesis** | If the argument isn't worth making, improving the prose is wasted effort. |

### Tier 2 — Structure
*Fix these second. They shape the intellectual architecture of the piece.*

| Test | Why it's structural |
|------|---------------------|
| **F3 · Mechanism Before Interpretation** | Determines what counts as evidence versus opinion throughout the piece. |
| **Fx1 · Intellectual Honesty** | Determines whether the argument engages with reality or only with itself. |
| **E3 · Analytical Depth** | Determines whether the piece has something to say beyond the surface claim. |

### Tier 3 — Substance
*Fix these third. They fill the structure with the right material.*

| Test | Why it's substance |
|------|---------------------|
| **F4 · Evidence Integration** | Places evidence where it's needed, in the right amount. |
| **E1 · Concrete Specificity** | Replaces vague claims with verifiable, credible ones. |
| **E2 · Source Integrity** | Ensures the specifics are real. |
| **E4 · Contextual Richness** | Situates the argument in a broader frame. |
| **Fx3 · Stands-Alone Self-Sufficiency** | Ensures every claim works for a cold reader. |

### Tier 4 — Surface
*Fix these last. They are craft and polish — they only matter once the foundation, structure, and substance are right.*

| Test | Why it's surface |
|------|------------------|
| **F2 · Prose Momentum** | Rhythm and pacing can only be finalized once the structure is stable. |
| **F5 · Closing & Resolution** | The ending depends on everything that precedes it. |
| **Fx2 · Register Fluidity** | Tonal calibration is a final-draft concern. |
| **O2 · Freedom from Cliché** | Language polish is the last pass. |

---

## Scoring

### Scale

Each test is scored on a continuous 0.0–1.0 scale to one decimal place.

| Score | Meaning |
|-------|---------|
| 0.0 | Clear fail — the criterion is absent or violated. |
| 0.5 | Partial — the piece attempts this but doesn't fully achieve it. |
| 1.0 | Clear pass — the criterion is met without reservation. |

Scores between anchor points (0.3, 0.7, etc.) are permitted when the scorer has a strong intuition. The anchors are reference points, not the only valid scores.

### Aggregate Interpretation

| Score | Rating | Description |
|-------|--------|-------------|
| 11.0–14.0 | Publication-grade | Professional-level craft across all dimensions. Ready for a major outlet. |
| 8.0–10.9 | Strong draft | Solid argument and execution with 1–3 dimensions that could be elevated through targeted revision. |
| 5.0–7.9 | Promising but unfinished | Clear strengths but meaningful weaknesses. Likely needs structural revision, not just polish. |
| 2.5–4.9 | Early draft | Significant gaps in argument, evidence, or craft. The idea may be worth pursuing but the execution needs fundamental rethinking. |
| 0.0–2.4 | Needs complete rework | Lacks a clear thesis, supporting evidence, or basic prose competence. |

### Dimensional Diagnosis

- **Low Fluency (below 2.5 of 5.0):** Structural problems — unclear thesis, poor pacing, tangled interpretation, weak ending. Focus revision on Tier 1 and Tier 2 tests before addressing substance or surface.
- **Low Flexibility (below 1.5 of 3.0):** Intellectual narrowness — one-sided argument, single register, or dependence on assumed context. Revision should broaden the frame and adopt the reader's perspective.
- **Low Originality (below 1.0 of 2.0):** The thinking is stale — predictable argument, clichéd language. The writer needs to go deeper into what they actually think versus what's conventionally said.
- **Low Elaboration (below 2.0 of 4.0):** The piece is thin — unverified claims, vague examples, shallow analysis, or no broader context. Revision should add substance: do more research, verify sources, think harder about implications.

---

## Administration

### Self-Assessment
1. Complete the piece. Let it sit for at least 24 hours.
2. Re-read in full, then score all 14 tests sequentially.
3. For each test, record the score (0.0–1.0) and write 1–3 sentences of justification.
4. Review dimensional totals to identify weak dimensions.
5. Review tier assignments to determine revision order.
6. Revise and re-score. Track the delta.

### Peer Review
1. Provide the reviewer with this framework and the piece.
2. The reviewer reads the piece in full before scoring.
3. The reviewer scores all 14 tests with score and rationale.
4. Compare self-assessment to peer assessment to identify blind spots. Pay particular attention to Originality (writers tend to over-score) and Flexibility (writers tend to under-score).

### LLM-Assisted Assessment
1. Provide the LLM with this framework and the piece to be evaluated.
2. For each test, instruct the LLM to: (a) identify relevant passages in the piece, (b) reason about whether the criteria are met, (c) provide a score (0.0–1.0) with rationale.
3. **Caveat:** Research on LLM evaluation of writing quality (Chakrabarty et al., 2024) has found that LLM assessments do not correlate well with expert human judgment, particularly on Originality and Analytical Depth. Use LLM scoring for structured first-pass feedback, not as a definitive evaluation.

### Cross-Piece Tracking
To identify persistent strengths and weaknesses, maintain a scoring log across pieces:

| Date | Piece | F1 | F2 | F3 | F4 | F5 | Fx1 | Fx2 | Fx3 | O1 | O2 | E1 | E2 | E3 | E4 | Total |
|------|-------|----|----|----|----|----|-----|-----|-----|----|----|----|----|----|----|----|-------|

After 5–10 pieces, patterns emerge. Tests that consistently score below 0.5 are your personal revision priorities — the areas to check before submitting any draft, regardless of what the rest of the score sheet says.

---

## Known Limitations

- **False precision.** A 0.0–1.0 scale with one decimal place provides 11 possible scores per test. Whether a scorer can reliably distinguish a 0.5 from a 0.6 is uncertain. The anchored scale mitigates this but does not eliminate it. When uncertain between adjacent scores, round toward the anchor.
- **Character of failure.** The framework does not distinguish between failure from thinness (a piece that lacks substance but isn't dishonest) and failure from bad faith (a piece that deploys evidence selectively to support a predetermined conclusion). Both score similarly. The dimensional breakdown and written rationales partially address this, but the aggregate score does not.
- **Genre sensitivity.** The TTNW evaluates all non-fiction against the same 14 tests. A 900-word news brief faces the same Contextual Richness test as a 5,000-word longread. Scorers should note genre constraints in their rationales, but the framework itself does not adjust for length or format.
- **Scorer bias.** Any evaluation framework is susceptible to the scorer's priors. Self-assessment is particularly vulnerable — writers tend to over-score their own Originality and under-score their own Flexibility. Peer review and inter-rater comparison mitigate this.
- **Originality is context-dependent.** Whether a thesis is original depends on what the scorer has read. A thesis that feels fresh to one scorer may be a well-known argument to another. This is an inherent limitation of any originality measure. Scorer rationales should note the comparison set.

---

## Quick Reference

| # | Dim. | Test | Tier | Core Question |
|---|------|------|------|---------------|
| F1 | Fluency | Thesis Architecture | 1 | Clear, specific, arguable thesis that structures everything? |
| F2 | Fluency | Prose Momentum | 4 | Forward motion, varied rhythm, no filler transitions? |
| F3 | Fluency | Mechanism Before Interpretation | 2 | Observation separated from inference? |
| F4 | Fluency | Evidence Integration | 3 | Data and examples woven in at point of need? |
| F5 | Fluency | Closing & Resolution | 4 | Ending that adds rather than summarizes? |
| Fx1 | Flexibility | Intellectual Honesty | 2 | Strongest counterarguments engaged seriously? |
| Fx2 | Flexibility | Register Fluidity | 4 | Moves between technical depth and accessibility? |
| Fx3 | Flexibility | Stands-Alone Self-Sufficiency | 3 | Works completely without the author in the room? |
| O1 | Originality | Originality of Thesis | 1 | Genuinely new argument or framing? |
| O2 | Originality | Freedom from Cliché | 4 | Free of stock phrases and default framings? |
| E1 | Elaboration | Concrete Specificity | 3 | Named entities, real numbers, actual examples? |
| E2 | Elaboration | Source Integrity | 3 | Every citation real, traceable, and verified? |
| E3 | Elaboration | Analytical Depth | 2 | Goes beyond "what" to "why" and "so what"? |
| E4 | Elaboration | Contextual Richness | 3 | Situated in a broader landscape that amplifies? |

---

## Score Sheet Template

**Piece:** [Title]
**Scorer:** [Name]
**Date:** [Date]
**Draft:** [1st / 2nd / etc.]

| # | Test | Tier | Score | Rationale |
|---|------|------|-------|-----------|
| F1 | Thesis Architecture | 1 | /1.0 | |
| F2 | Prose Momentum | 4 | /1.0 | |
| F3 | Mechanism Before Interpretation | 2 | /1.0 | |
| F4 | Evidence Integration | 3 | /1.0 | |
| F5 | Closing & Resolution | 4 | /1.0 | |
| Fx1 | Intellectual Honesty | 2 | /1.0 | |
| Fx2 | Register Fluidity | 4 | /1.0 | |
| Fx3 | Stands-Alone Self-Sufficiency | 3 | /1.0 | |
| O1 | Originality of Thesis | 1 | /1.0 | |
| O2 | Freedom from Cliché | 4 | /1.0 | |
| E1 | Concrete Specificity | 3 | /1.0 | |
| E2 | Source Integrity | 3 | /1.0 | |
| E3 | Analytical Depth | 2 | /1.0 | |
| E4 | Contextual Richness | 3 | /1.0 | |

**Total:** _ /14.0
**Fluency:** _ /5.0 · **Flexibility:** _ /3.0 · **Originality:** _ /2.0 · **Elaboration:** _ /4.0

**Highest-tier failures (revise first):**

**Priority revisions:**

**Delta from previous draft:** [if applicable]

---

## References

Chakrabarty, T., Laban, P., Agarwal, D., Muresan, S., & Wu, C.-S. (2024). Art or artifice? Large language models and the false promise of creativity. *Proceedings of the ACM CHI Conference on Human Factors in Computing Systems.* https://arxiv.org/abs/2309.14556

Torrance, E. P. (1966). *Torrance Tests of Creative Thinking.* Personnel Press.

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | February 2026 | Initial release. 14 binary tests across four dimensions. |
| 1.1 | February 2026 | Scoring changed from binary Pass/Fail to anchored continuous 0.0–1.0 scale. Added revision tiers (1–4) encoding dependency order for iterative improvement. Added revision prompts for each test. Added pre-draft gate (F1, O1, Fx1, E3). Added cross-piece tracking log. Added Known Limitations section. Added changelog. |

---

*The TTNW is an open framework designed for evaluating non-fiction prose intended for publication. It was developed through iterative scoring of published work across genres — news analysis, opinion, research articles, blog posts, and platform-native content — and refined through comparison of scores against editorial judgment.*

*Suggested citation: TTNW: Test for Thoughtful Non-Fiction Writing, v1.1 (2026). https://[URL]*
