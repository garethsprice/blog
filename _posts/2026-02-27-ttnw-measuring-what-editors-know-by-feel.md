---
layout: post
title: "Measuring What Editors Know by Feel: A Scoring Framework for Non-Fiction Writing"
description: "Fiction has a validated scoring instrument. Non-fiction — the prose that runs companies and shapes policy — has nothing that measures whether an argument is original, the evidence is real, or the thinking goes deep enough. This article introduces one."
created_date: 2026-02-27
updated_date: 2026-02-27
---
Non-fiction writing has no equivalent of a unit test. Fiction has one — the Torrance Test of Creative Writing, a 14-test instrument developed by Chakrabarty et al. at Columbia and Salesforce, validated through expert rater agreement, and capable of producing a repeatable quality score.[^1] Essays, op-eds, blog posts, and business writing have nothing. The best available tools are academic essay rubrics designed to grade students, or LLM benchmarks that measure whether AI can follow formatting instructions. Neither measures what an experienced editor measures: whether the argument is original, the evidence is real, the thinking goes deep enough, and the prose earns the reader's continued attention.

The TTNW — Test for Thoughtful Non-Fiction Writing — is an attempt to build that instrument. It is a 14-test framework, scored on a continuous 0.0–1.0 scale per test, producing an aggregate quality score of 0.0–14.0. It is designed for iterative revision: each test includes a revision prompt, tests are organized into dependency tiers that dictate revision order, and the continuous scale tracks whether a targeted edit improved the dimension you aimed at. This article explains the framework, demonstrates it by scoring five published pieces across genres — and then uses it to score and revise itself.

## Measurement becomes urgent when editors disappear

For most of the history of professional writing, editors were the instrument. An editor at *The Economist* or *The Atlantic* enforces quality standards through line editing, structural feedback, and rejection. The writer improves because someone with more experience identifies what is weak and makes them fix it.

That feedback loop is thinning. Newsroom employment in the United States dropped 26% between 2008 and 2020.[^2] Content teams at startups and mid-market companies rarely have dedicated editors. Freelancers have none. Meanwhile, AI-assisted drafting has made it possible to produce fluent, well-structured prose without understanding the subject. Research from BetterUp Labs and Stanford found that 41% of workers have received what the researchers call "workslop" — AI-generated output that looks polished but lacks substance — costing nearly two hours of rework per incident.[^3] The volume of plausible-looking prose is rising. The editorial capacity to evaluate it is not.

Writers working without editors need a structured method to do what editors do: identify specific weaknesses, prioritize revisions, and track whether their writing is improving. A repeatable instrument makes that possible. Not a replacement for an editor's judgment — but a scaffold for the writer's own.

## What exists does not measure what matters

Automated Essay Scoring systems — the kind used by ETS for the GRE, or by platforms like Learnosity — evaluate grammar, organization, and thesis presence.[^4] They are designed to grade student work at scale. A piece that is grammatically correct, well-organized, and has a clear thesis can still be shallow, intellectually dishonest, and devoid of original thought. AES cannot detect any of those failures.

LLM benchmarks like WritingBench evaluate AI models across business and academic writing domains, but on generic 1–10 scales without diagnostically useful granularity.[^5] They answer "how good is this model at writing?" not "what specifically is wrong with this piece?"

The TTCW came closest. Chakrabarty et al. decomposed creative quality into 14 specific, observable properties — each yielding a binary pass/fail — and demonstrated that fiction quality *can* be quantified with measurable inter-rater agreement. Their instrument also revealed that LLM-generated fiction fails specific tests (structural variety, emotional complexity) even when surface quality is high. The decomposition principle — break quality into testable properties — transfers to non-fiction. The specific tests do not. Character development, narrative pacing, and world-building are irrelevant to an op-ed.

## Fourteen tests, four dimensions

The TTNW retains Torrance's dimensional structure and the TTCW's design philosophy while replacing all 14 individual tests with measures designed for non-fiction prose.

Fluency (5 tests) measures argument architecture: thesis clarity, prose momentum, separation of evidence from interpretation, evidence placement, and closing impact. Flexibility (3 tests) measures intellectual range: counterargument engagement, register variation, and self-sufficiency for a cold reader. Originality (2 tests) measures freshness: thesis novelty and freedom from stock language. Elaboration (4 tests) measures depth: concrete specificity, source integrity, analytical depth, and contextual richness.

The dimensional balance — 5-3-2-4 — emerged from scoring published work across genres. Non-fiction quality depends more on argument architecture and evidentiary substance than on originality of form. Most strong non-fiction uses conventional structures and distinguishes itself through rigorous thinking and real evidence.

Each test is scored 0.0–1.0 with three anchors: 0.0 (clear fail), 0.5 (partial), 1.0 (clear pass). The continuous scale departs from the TTCW's binary scoring because the TTNW is built for revision tracking. Binary scoring hides progress within a test until it crosses the pass threshold. A writer who improves Evidence Integration from 0.3 to 0.6 needs to see that movement.

## The strongest objection: scores reward formula, not quality

The obvious counterargument is that quantifying writing quality will produce prose that passes tests rather than prose that is genuinely good. If you know the rubric, you game the rubric. An essay that steelmans one counterargument, drops in three named sources, and ends with a reframing could score 12/14 while saying nothing worth reading.

The objection has real force. Standardized testing in education has demonstrated repeatedly that measurement distorts the thing it measures. Goodhart's Law applies: when a measure becomes a target, it ceases to be a good measure.

Three features of the TTNW resist this failure mode, though they cannot eliminate it.

The mandatory written rationale. Each score requires 1–3 sentences of justification. A scorer cannot award 0.8 on Originality of Thesis without articulating what specifically is new. This forces engagement with the text rather than checkbox completion.

The Originality dimension itself. A piece that mechanically includes a counterargument, three named sources, and a reframing will score well on Flexibility and Elaboration but will score low on Freedom from Cliché precisely because its moves are predictable from the framework. Framework-optimized prose is, by definition, formulaic — and the instrument penalizes formulaic writing.

The framework structures judgment; it does not replace it. The TTNW produces a number, but the number is only as good as the human applying it. Two scorers will disagree on whether a thesis is "genuinely original" because originality depends on what the scorer has read. This mirrors how editorial judgment actually works. The framework makes disagreements specific rather than vague.

## Calibration across five genres

The instrument needs to discriminate. A well-crafted *Economist* analysis should score higher than a LinkedIn post. But the scores also need to explain *why* — identifying the specific dimensions where quality diverges.

The highest-scoring piece was an *Economist* analysis of the Pentagon's confrontation with Anthropic over military AI: 13.2/14.0. It passed every dimension except Contextual Richness (0.5), where its tight topical focus left broader AI governance implications unaddressed. The framework correctly identified this as a genre constraint — appropriate for 900 words — rather than a craft failure. What made the piece score high was disciplined mechanism-before-interpretation structure, even-handed counterargument engagement that gave both sides real weight, and the analytical insight that the Pentagon's coercive threats actually revealed its *dependence* on Anthropic.

The most instructive mid-range score was an HBR research article on "workslop": 9.1/14.0. The research section was strong — 1,150 respondents, $186/month cost per incident, an original thesis distinguishing human-to-machine from human-to-human-via-machine offloading. Then the recommendations section collapsed. "Mindsets matter." "Recommit to collaboration." "Frame AI as a collaborative tool, not a shortcut." Freedom from Cliché: 0.2. Analytical Depth: 0.3. The framework pinpointed the structural flaw: a strong research piece with a generic prescriptive appendage. That pattern — rigorous finding, weak "what leaders should do" section — is common enough in business writing that identifying it precisely has diagnostic value beyond this single piece.

A *New York Times* analysis of Musk's "sustainable abundance" rhetoric scored 11.0/14.0. Clean sourcing, fair counterargument engagement through Alex Imas (demand collapse under concentrated capital ownership) and Bernie Sanders (governance of redistribution). The framework docked Prose Momentum — the alternating claim-then-rebuttal structure grows predictable — and Analytical Depth, because the piece reports the phenomenon without explaining the mechanism by which utopian rhetoric serves corporate strategy. Strong reporting, shallow analysis. The TTNW distinguishes between the two.

The low end revealed something the framework's known limitations section acknowledges but cannot resolve. A LinkedIn leadership post (1.8/14.0) and a Fox News opinion piece (1.5/14.0) scored in the same range but failed for opposite reasons. The LinkedIn post failed from thinness: no evidence, no sources, no depth, but no dishonesty. The Fox piece failed from selectivity: real evidence deployed to support a predetermined conclusion, counterarguments absent, speculation narrated as fact. The aggregate score cannot distinguish these failure modes. The dimensional rationales can — the Fox piece's Intellectual Honesty rationale noted manufactured consensus and strawmanned opposition, language absent from the LinkedIn assessment. A number alone is insufficient. The rationale is where the diagnostic value lives.

## This article, revised by its own instrument

A framework for iterative revision should demonstrate iterative revision. I scored this article at each draft stage and used the TTNW's tier system to determine revision order.

**Draft 1 scored 9.2/14.0.** Fluency was strongest (3.4/5.0) — clear thesis, evidence preceding interpretation. Elaboration was solid (2.9/4.0) — named pieces, specific scores, traceable sources. Two dimensions dragged.

Flexibility scored 1.7/3.0. The most urgent failure was Intellectual Honesty (0.4, Tier 2) — the piece acknowledged the framework's limitations but ducked the strongest counterargument: that quantifying writing is fundamentally reductive. The revision prompt for Fx1 asks: "Name a specific person or institution that would disagree with your thesis. State their strongest argument." I named Goodhart. I stated the argument: measurement distorts the thing it measures. Draft 2 added the section you read above.

Contextual Richness scored 0.5 (Tier 3) — the piece jumped to *how* the framework works without arguing *why* measurement matters now. The revision prompt for E4 asks: "What are the structural forces that make your argument timely?" The answer — editorial capacity declining, AI-generated content rising — became the "Measurement becomes urgent" section.

**Draft 2 scored 10.4/14.0.** Intellectual Honesty moved from 0.4 to 0.7. Contextual Richness moved from 0.5 to 0.7. Stands-Alone Self-Sufficiency moved from 0.6 to 0.8 as a side effect — the "why now" section gave cold readers a reason to care. Remaining failures were Tier 4: the closing was a caveat rather than a resolution (F5: 0.7), stock phrases persisted (O2: 0.6), and the calibration section read as a list rather than an argument (F2: 0.7).

**Draft 3** targeted those. The calibration section was reorganized around what each piece *reveals about the framework* — the Economist piece shows the instrument handles genre constraints, the HBR piece shows it catches structural flaws, the low-scoring pair shows where aggregate scores lose information. The closing was rewritten to land on the substantive point rather than a disclaimer.

| Dimension | Draft 1 | Draft 2 | Draft 3 |
|-----------|---------|---------|---------|
| Fluency (5.0) | 3.4 | 3.7 | 4.1 |
| Flexibility (3.0) | 1.7 | 2.3 | 2.4 |
| Originality (2.0) | 1.2 | 1.3 | 1.5 |
| Elaboration (4.0) | 2.9 | 3.1 | 3.3 |
| **Total (14.0)** | **9.2** | **10.4** | **11.3** |

Three drafts moved the piece from "strong draft" to the low end of "publication-grade." The largest gains came from Tier 2 revisions (adding the counterargument section: +0.3 on Fx1, +0.2 on E3 as a side effect) and Tier 3 revisions (adding context and grounding: +0.2 on E4, +0.2 on Fx3). Tier 4 polish produced smaller increments. This matches the framework's prediction: fixing foundation and structure moves the score more than fixing surface.

The honest residual: Originality scores 1.5/2.0. The framework itself is new, but this article remains a framework announcement — a genre with conventions I have not fully escaped. Freedom from Cliché scores 0.7. There are phrases in this piece I would cut on a fourth pass. A perfect score on one's own work, evaluated by one's own framework, would be more suspicious than a score that acknowledges its limits.

## What the framework cannot do

The TTNW cannot distinguish thinness from dishonesty in an aggregate score. It cannot adjust for genre — a brief faces the same tests as a longread. It cannot replace editorial judgment — it structures it. Its reliability under LLM-based scoring is unproven. And originality, its most valuable dimension, is the most scorer-dependent: whether a thesis is new depends on what the scorer has already read.

These are real constraints. They are also the constraints of any instrument that attempts to make tacit knowledge explicit. The best editors carry a mental model of quality that they apply instantly and holistically. The TTNW decomposes that model into 14 testable properties — not because decomposition is superior to holistic judgment, but because most writers do not have access to that judgment. They work alone, or with AI, or with colleagues who can say "this doesn't feel right" but not "the problem is that your interpretation precedes your evidence in paragraphs four through seven, and your strongest counterargument is unaddressed."

The framework says the second thing. That is what makes it useful.

The full framework — test descriptions, scoring anchors, revision prompts, tier assignments, score sheet template, and cross-piece tracking log — is available at [Introducing TTNW]({% post_url 2026-02-27-ttnw-test-for-thoughful-nonfiction-writing %}).

---

{% include assisted-authorship-disclaimer.html %}

### References

[^1]: Chakrabarty, T., Laban, P., Agarwal, D., Muresan, S., & Wu, C.-S. (2024). Art or artifice? Large language models and the false promise of creativity. *Proceedings of the ACM CHI Conference on Human Factors in Computing Systems*. [https://arxiv.org/abs/2309.14556](https://arxiv.org/abs/2309.14556)

[^2]: Pew Research Center. (2021, July 13). U.S. newsroom employment has fallen 26% since 2008. *Pew Research Center*. Total newsroom employment across five news-producing industries fell from approximately 114,000 in 2008 to 85,000 in 2020. [https://www.pewresearch.org/short-reads/2021/07/13/u-s-newsroom-employment-has-fallen-26-since-2008/](https://www.pewresearch.org/short-reads/2021/07/13/u-s-newsroom-employment-has-fallen-26-since-2008/)

[^3]: Niederhoffer, K., Kellerman, G. R., Lee, A., Liebscher, A., Rapuano, K., & Hancock, J. T. (2025, September 22). AI-generated "workslop" is destroying productivity. *Harvard Business Review*. [https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity)

[^4]: Attali, Y. & Burstein, J. (2006). Automated essay evaluation with e-rater®. *ETS Research Report Series*. See also: Learnosity. (2025). AI-assisted essay scoring and feedback. [https://learnosity.com/ai-assisted-scoring-feedback/](https://learnosity.com/ai-assisted-scoring-feedback/)

[^5]: Wu, Y., et al. (2025). WritingBench: A comprehensive benchmark for generative writing. *NeurIPS 2025 Datasets and Benchmarks Track*. [https://arxiv.org/abs/2503.05244](https://arxiv.org/abs/2503.05244)