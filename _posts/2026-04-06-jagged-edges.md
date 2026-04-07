---
layout: post
title: "Jagged Edges: Compressing Documents Against the Reader's Prior"
description: "Frontier models have already absorbed most of what any document contains, so summarisers spend most of their tokens on what the reader already has. Compressing against a model's prior knowledge instead yields short, dense extracts that can be mixed across documents and compared atom-by-atom."
created_date: 2026-04-06
updated_date: 2026-04-06
---

Large language models have centralised the bulk of well-circulated human knowledge. What a frontier model already knows — textbook definitions, standard procedures, canonical historical facts, mainstream frameworks — is no longer scarce. It is ambient. It is free.

What remains valuable are the **jagged edges** of a document: the information it carries that the model does *not* already know. The proprietary numbers. The internal jargon. The org-specific procedure that diverges from the textbook on step 4. The named principle a particular author coined. The footnoted exception. The local convention. These are the parts of a text that do not fit the model's pretraining distribution, and therefore the parts that justify the document's continued existence as a separate artifact.

This paper describes a method for isolating those jagged edges from a source document and rendering them as a compact reference suitable for an LLM's context window or a retrieval index. The closest published precursor, Zero-RAG (Luo et al., 2025), applies the same core intuition at coarser granularity and is discussed below; this specific synthesis — explicit subtraction against the model's prior, multi-class novelty classification, and a human-readable structured artifact — appears to be novel.

> *Audience note.* A few terms used without gloss: **RAG** (retrieval-augmented generation — fetching relevant passages from an index and pasting them into the prompt at query time); **frontier model** (the current generation of largest, most capable LLMs); **cloze deletion** (a fill-in-the-blank test where a span is masked and the reader must predict it); **pretraining distribution** (the corpus a model was trained on, which shapes what it already knows).

---

## Motivation

A traditional summariser compresses a document by length. It produces a shorter version that retains the main points. For an LLM consumer, this is the wrong objective function. The main points of most documents are precisely the parts the LLM already knows. A 10-page summary of a SQL textbook wastes tokens — the model can already write SQL. A 10-page summary of an internal data warehouse's quirks, naming conventions, and the three queries that always time out at 3am is priceless.

The right objective is non-redundant with the model's prior, not shorter. Compress against the LLM, not against length.

This reframes document processing as a *differential* operation: produce `Document − ModelPrior`, not `Compress(Document)`. The residual is what this paper calls the document's jagged edges. Zero-RAG (Luo et al., 2025) has already shown that filtering by model mastery works at scale;[^3] what follows extends the same filter with finer granularity (atoms rather than passages), richer structure (a multi-class taxonomy rather than binary prune-or-keep), and full source auditability.

---

## Definitions

- **Common knowledge**: information present, in substantively equivalent form, in a frontier LLM's pretraining. Recoverable by direct prompting without the source document.
- **Jagged edges**: the novel knowledge in a document — information not recoverable by prompting the model alone. May be novel because it is proprietary, recent, idiosyncratically framed, locally specific, or simply absent from the public web.
- **Contextual bridge**: common-knowledge content retained because a novel atom is otherwise uninterpretable without it. The minimum scaffolding that makes the jagged edges legible.
- **Knowledge atom**: an extracted unit of novel knowledge — a single fact, procedure, or concept — small enough to deduplicate and recombine.

---

## Pipeline

The method is a four-stage pipeline. Each stage is an LLM-driven agent with a typed output schema, so downstream stages reason over structured artifacts rather than free text.

### Stage 1 — Ingest and chunk

The ingestor parses the source document (PDF, EPUB, Markdown) to clean text and splits it into semantically coherent chunks that respect section boundaries. Each chunk carries a `section_path` so later stages can reconstruct provenance and locate contextual bridges precisely. This stage is mechanical; nothing is filtered yet.

### Stage 2 — Classification (the novelty filter)

A classifier sorts every chunk into one of six categories:

1. `NOVEL_FACTUAL` — proprietary numbers, dates, names, metrics
2. `NOVEL_PROCEDURAL` — internal workflows, step sequences, decision rules
3. `NOVEL_CONCEPTUAL` — proprietary frameworks, jargon, named principles
4. `CONTEXTUAL_BRIDGE` — common knowledge kept to make a nearby novel atom interpretable
5. `COMMON_KNOWLEDGE` — content the LLM already knows, droppable
6. `REDUNDANT` — duplicated elsewhere in the same document

The classifier asks the model to introspect on its own prior: *"Would I have known this without being shown it?"* The classification is conservative — when in doubt, a chunk is kept as novel — because false positives only waste tokens, while false negatives destroy information. A separate novelty score (0.0–1.0) lets downstream stages rank chunks rather than apply a hard threshold.

The classifier is parameterised by a **skill** — a YAML profile that adapts the criteria to a document genre. A wisdom book (*The Richest Man in Babylon*) and an engineering spec require different notions of novelty. For technical and business documents, common knowledge is suppressed aggressively. For prose and wisdom books, the *framing itself is the value* — a familiar truth recast as a named principle (*The Seven Cures*) is novel even though the underlying advice is not. Skill files override the classifier's default heuristics with genre-specific guidance. Jagged edges are not a property of a document alone but of the document genre relative to the model's prior: a wisdom book's jagged edges live in its rhetoric; a financial report's live in its numbers.

The current implementation ships five skill profiles, each a small YAML file declaring match patterns, novelty heuristics, extraction targets, and output sections:

- **`academic-paper`** — research papers, arXiv preprints, journal articles. Prioritises methodology, findings, named contributions, and citations.
- **`business-report`** — earnings reports, annual reports, internal corporate documents. Prioritises metrics, KPIs, dates, named stakeholders, strategic decisions.
- **`technical-docs`** — READMEs, API docs, specifications, runbooks. Prioritises procedures, configurations, error conditions, and exact identifiers.
- **`prose-wisdom`** — self-help, philosophy, narrative non-fiction. Prioritises named principles and framings even when the underlying advice is common, and explicitly instructs the classifier *not* to drop familiar wisdom that has been distinctively packaged.
- **`generic`** — fallback profile with balanced settings, used when no specialised skill matches.

A document is routed to a profile by filename and content pattern matching at intake. New genres (legal contracts, clinical guidelines, oral histories) are added by writing one more YAML file — the pipeline code does not change. The skill set is therefore the method's primary extension point: a small library of *priors about which jagged edges matter*, separate from the priors the LLM itself supplies.

### Stage 3 — Atomic extraction

Chunks classified as novel pass to type-specific extractors that produce structured atoms:

- `FactAtom` — a single fact as a complete sentence, plus structured entities (`{metric: ARR, value: $3MM, period: Q3 2024}`), source reference, confidence.
- `ProcedureAtom` — a named procedure with ordered steps, prerequisites, decision points, outcomes.
- `ConceptAtom` — a term, a definition, typed relationships to other concepts, examples.

Atomisation enables **deduplication** across chunks via semantic fingerprints — the same fact stated in three places collapses to one atom — and **recombination**, since atoms can be regrouped by topic, concept, or procedure regardless of where they appeared in the source, freeing the output from the source's narrative order. Every atom carries a `SourceReference` so the final artifact remains auditable back to the original page and section.

### Stage 4 — Synthesis

The synthesiser assembles deduplicated atoms into a compact reference document with sections shaped by the skill profile (*Quick Reference*, *Mental Models*, *Actionable Steps*, *Entity Registry*, *Glossary*). The output targets two consumers:

- **A human skimmer** who already knows the genre and wants only the unfamiliar parts.
- **A frontier-model reader** that will load this artifact as system-prompt context or retrieve from it via RAG, and which already has the common knowledge baked in.

Synthesis is also where contextual bridges are stitched in — the minimum common-knowledge scaffolding needed to let the novel atoms stand on their own.

---

## Why this works

The method exploits an asymmetry that did not exist five years ago: the consumer of the artifact is itself a model that has read most of the world. Traditional information retrieval and summarisation assume the reader is a blank slate. They optimise for self-contained completeness. But a self-contained summary delivered to a frontier-model reader is mostly a tax — every token spent restating what the model already knows is a token not spent on what only the source could provide.

What makes the inversion newly tractable is a quantitative shift in three places at once. Frontier models now cover enough of the public textbook corpus that restating it is wasted tokens — though, as the limitations section notes, exactly *how* much is the central empirical question this paper still owes evidence on. Context windows have expanded from a few thousand tokens to a million, making *"just paste the document"* superficially viable but exposing long-context degradation effects[^5] that degrade under naive scaling. And inference costs have fallen far enough that ingestion-time pre-processing is plausibly cheaper per query than the tokens it saves at every subsequent call, though the crossover point depends on reuse rate and has not been measured here.

Inverting the objective — keep the surprising, drop the predictable — should make the output densely informative per token of context window. Three downstream effects follow, each a hypothesis the benchmark in *Limitations* is designed to test:

- **Context windows are finite.** A 4kB extract can be injected into every prompt; a 400kB textbook cannot.
- **Retrieval precision should improve.** A vector index over atoms (rather than raw chunks) should return hits that are individually meaningful and individually novel.
- **Hallucination should reduce.** When the model is given only what it could not have produced itself, the boundary between "from the document" and "from my prior" sharpens, and citations become more reliable.

---

## A worked example: *The Richest Man in Babylon*

Here is the method run end-to-end on George Clason's *The Richest Man in Babylon* (1926), using the `prose-wisdom` skill profile.

**Compression.** The cleaned source is **42,301 words** (≈56,000 tokens at standard BPE). The final jagged-edge extract is **2,539 words** (≈3,400 tokens) — a 16.7× reduction. The extract fits comfortably inside any modern system prompt; the source does not. The pipeline processed 36 chunks, of which roughly a third were classified `COMMON_KNOWLEDGE` or `REDUNDANT` (publisher front-matter, scene-setting, repeated narrative beats) and dropped before extraction.

A dropped chunk illustrates the filter at work. Chunk `92cd1678` — the copyright page and table of contents — was classified `COMMON_KNOWLEDGE` with confidence 1.0 and novelty 0.0. The classifier's reasoning: *"standard publication information... boilerplate publishing information that any LLM would recognize as standard book front matter."* A length-based summariser would also drop this, but for the wrong reason (it isn't a main point) rather than the right one (the model already has it).

A kept chunk shows where the skill profile earns its keep. Chunk `490e927e` — the passage introducing Arkad's *Seven Cures for a Lean Purse* — was classified `NOVEL_CONCEPTUAL` (with `NOVEL_PROCEDURAL` secondary) at confidence 0.9. The underlying advice (*save 10% of what you earn*, *control your expenses*) is itself common knowledge — any frontier model can produce it cold. What is novel, and what the `prose-wisdom` profile is calibrated to catch, is the **named, numbered framing**: *The Seven Cures*, each cure as a specific rule with archaic phrasing (*Start thy purse to fattening*). The framing is the jagged edge even when the content is not.

**An extracted atom.** The corresponding `ConceptAtom`, abbreviated:

```json
{
  "atom_type": "CONCEPT",
  "atom_id": "concept_beb55f1d",
  "term": "Personal Financial Prosperity",
  "definition": "Individual economic well-being... achieved through
                 personal financial success and accomplishments resulting
                 from one's own efforts and abilities.",
  "relationships": [
    {"related_to": "National Prosperity", "relationship": "part_of"},
    {"related_to": "Proper Preparation",  "relationship": "depends_on"},
    {"related_to": "Financial Understanding", "relationship": "depends_on"}
  ],
  "synonyms": ["financial success", "economic well-being"],
  "examples": ["growing bank accounts", "greater financial successes"],
  "source": {
    "chunk_id": "chunk_38ad7b19",
    "section_path": ["THE RICHEST MAN IN BABYLON", "Foreword"]
  },
  "confidence": 0.95
}
```

Every atom is **traceable**: the `source` field lets a downstream consumer jump back to the original chunk and verify, an auditability property fine-tuning cannot offer. Every atom is also **recombinable**: *Personal Financial Prosperity* was extracted from the foreword, but in the synthesised output it sits alongside related concepts pulled from chapters 4 and 7, regrouped by topic rather than source order.

This is, intentionally, the method's least flattering test case. Wisdom literature is mostly common content in distinctive packaging, so the compression ratio is modest by design and the skill profile has to work hard to preserve the framing. A technical document — an internal runbook, a financial filing, a research paper post-cutoff — should produce higher ratios, because the share of off-manifold content is higher to begin with. `[UNVERIFIED: specific ratios on technical corpora await the benchmark described under Limitations.]`

---

## The manifold intuition

The model's pretraining forms a smooth surface — a manifold of everything it has seen often enough to interpolate. Much of any given page of any given document lies on or very near this surface; reading those passages adds nothing. Occasionally a sentence sits *off* the manifold: a number that was never published, a procedure that contradicts the textbook, a coined term, a private constraint. These are the jagged edges.

This method traces that off-manifold outline and discards everything on the smooth interior. The output is not a smaller version of the document. It is a **shape**: the silhouette of the document's deviation from collective knowledge.

As models absorb more of the public corpus, the smooth interior grows and the off-manifold portion becomes a smaller fraction of any given document — and a *more valuable* fraction, because it is the only fraction that justifies the document's existence as a distinct source. Distillation against the model's prior is therefore not a one-time optimisation but a continuously useful operation whose ratio of value to volume rises over time.

**Stop summarising documents. Start subtracting the model from them.**

---

## Comparison to adjacent techniques

**Summarisation** compresses by length and preserves narrative. Jagged-edge extraction compresses by novelty and discards narrative. **RAG chunking** indexes raw passages. Jagged-edge extraction indexes deduplicated atoms whose novelty has already been established. **Knowledge-graph extraction** focuses on entities and relations regardless of novelty. Jagged-edge extraction is novelty-first; structure is a means, not an end. **Fine-tuning on the document** bakes content into weights but provides no auditability and no genre-aware filtering. Jagged-edge extraction produces a portable, inspectable artifact.

The closest cousin in framing is **information-theoretic compression against a language model**. Delétang et al. show that a frozen LLM used as the probability model for arithmetic coding achieves state-of-the-art lossless compression on text, image, and audio.[^1] That work and this one share a premise — the model's prior is the right thing to compress against — but operate at different layers: arithmetic coding minimises *bits* and produces an opaque binary; jagged-edge extraction minimises *tokens the reader-model would have predicted anyway* and produces a human-readable, auditable artifact.

Prompt-compression work like LLMLingua is superficially adjacent but targets a different quantity.[^2] LLMLingua prunes tokens the proxy model finds predictable *in context* — low local perplexity. Local perplexity and factual novelty are not the same thing. A token can be predictable given its surrounding words while conveying a fact the consumer model has never seen; a token can be locally surprising while stating something the model knows perfectly well. This method filters on the second axis, not the first.

The closest published precursor is **Zero-RAG** (Luo et al., 2025), which argues that growing LLM parametric knowledge creates significant redundancy between RAG corpora and the models consuming them.[^3] Zero-RAG introduces a *Mastery-Score* measuring how well an LLM has absorbed each passage in a retrieval index, then prunes high-mastery passages entirely — reporting 30% corpus reduction and 22% retrieval acceleration on Wikipedia-backed QA with no loss in downstream accuracy. The core intuition — filter by model mastery — is the same as this paper's, and Zero-RAG deserves credit for implementing it at scale first. The differences are scope and shape: Zero-RAG works at **passage level** with a **binary** prune-or-keep decision against a **retrieval index**, optimised for query-time efficiency. Jagged-edge extraction works at **atom level** with a **multi-class taxonomy** (novel factual / procedural / conceptual / contextual bridge / common / redundant) to produce a **compact human-readable artifact** for prompt injection or system-prompt context. The two approaches are complementary rather than competing — Zero-RAG establishes that the core filter works at corpus scale; this method pushes the same filter to finer granularity and richer output structure.

---

## Implications beyond ML

If the value of a document to a model-reader lives in its jagged edges, several things follow that have nothing to do with engineering.

**For writers.** The parts of a draft a model could have generated from the title alone are the parts no one will read. Originality stops being an aesthetic preference and becomes the load-bearing function of the text. Restating consensus is now free; the writer's job collapses toward the surprising claim, the specific number, the framing no one else has used.

**For documentation and knowledge management.** I'd wager most internal wikis are largely recapitulated common knowledge wrapped around a smaller core of genuinely local content. Their value-per-page is dominated by the local fraction, but maintenance cost is spread evenly across the whole. A documentation practice that maintained only the jagged edges obsessively and let the rest rot would lose little, on the theory that the rot is now harmless — a model can regenerate it on demand.

**For the economics of content.** Publishing models priced per page or per word implicitly assume all content is fungible. As model priors absorb more of the public corpus, the *price* of a piece of writing should track its jagged edges, not its length. Trade newsletters, niche substacks, and primary-source reporting survive precisely because their value is irreducibly local; generic SEO content, whose jagged-edge fraction is near zero, is collapsing on the same logic. This method is a procedure for measuring the property publishers are starting to price on instinct.

**For organisational memory.** An institution's competitive advantage, through this lens, is the union of its jagged edges — the things its documents say that no other organisation's documents say. Naming and preserving that union is a different exercise from *writing things down*, and most knowledge-management practice is still doing the latter.

---

## Limitations and open questions

**The "summaries are fine, actually" counter.** The strongest objection to this project is that at 200k- and 1M-token context windows, the token-cost argument weakens: you can paste the whole document and let the model ignore what it already knows. Worse, traditional summaries preserve **narrative coherence** — the connective tissue between facts — and it is plausible that coherent context helps reasoning in ways a deduplicated bag of atoms does not, though we know of no direct test. Long-context degradation effects like Liu et al.'s *Lost in the Middle* cut the other way: pasting a whole document is no guarantee the model will actually use the parts that matter.[^5] Jagged-edge extraction trades flow for density, and the trade is not obviously correct in every regime. The method earns its keep most clearly when (a) the artifact is reused across many prompts, amortising extraction cost; (b) the source corpus is larger than any single context window; or (c) the consumer is a retrieval index rather than a single prompt. Outside those regimes, just paste the document.

**The classifier's prior is the model's prior.** Whether a chunk is novel is judged by the same family of model that will eventually consume the artifact. This is a feature — the filter is calibrated to its consumer — but also a risk: idiosyncrasies of the judging model leak into what is preserved.

**Skill profiles are hand-authored.** Detecting genre and selecting the right novelty criteria automatically remains an open problem.

**Recency.** A document about events after the model's training cutoff is *all* jagged edge. The method still works but the filter does little useful work; cheaper heuristics may suffice.

**Self-report is not knowledge probing.** The classifier currently asks the model *"would you have known this?"* — a metacognitive question models handle unreliably. A more defensible probe is **elicitation**: convert each candidate fact into a cloze deletion, quiz question, or fill-in-the-blank with the source masked, and ask a clean instance of the model to answer cold. Cloze-based knowledge probing has an established foundation — Petroni et al. introduced the LAMA benchmark in 2019 precisely to test what factual knowledge pretrained models hold, using fill-in-the-blank statements derived from subject-relation-object triples.[^4] Applying the same apparatus as a *filter* over candidate atoms is the natural next step. If the model answers correctly without the document, the fact is on the smooth interior and can be dropped. If it fails, hedges, or hallucinates, the fact is a genuine jagged edge. The trick generalises to procedures (mask a step, ask the model to predict it) and concepts (ask for a definition of the term and compare). This converts novelty classification from subjective judgment to a measurable behavioural test against the model's prior, and is the most promising direction for a more rigorous version of the method.

**Evaluation.** A natural metric is *answer quality on document-specific questions, per token of context provided*. Building a benchmark of (document, question, gold-answer) triples that strictly require the source — and measuring whether the extract preserves answerability at a fraction of the tokens — is the obvious next step, and the experiment that would convert the three "should" claims in *Why this works* into measured ones.

---

### References

[^1]: Delétang, G., Ruoss, A., Duquenne, P.-A., Catt, E., Genewein, T., Mattern, C., Grau-Moya, J., Wenliang, L. K., Aitchison, M., Orseau, L., Hutter, M., & Veness, J. (2023). Language modeling is compression. *arXiv preprint* arXiv:2309.10668. Published at ICLR 2024. [https://arxiv.org/abs/2309.10668](https://arxiv.org/abs/2309.10668)

[^2]: Jiang, H., Wu, Q., Lin, C.-Y., Yang, Y., & Qiu, L. (2023). LLMLingua: Compressing prompts for accelerated inference of large language models. *Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP)*. [https://arxiv.org/abs/2310.05736](https://arxiv.org/abs/2310.05736)

[^3]: Luo, Q., et al. (2025). Zero-RAG: Towards retrieval-augmented generation with zero redundant knowledge. *arXiv preprint* arXiv:2511.00505. [https://arxiv.org/abs/2511.00505](https://arxiv.org/abs/2511.00505)

[^4]: Petroni, F., Rocktäschel, T., Riedel, S., Lewis, P., Bakhtin, A., Wu, Y., & Miller, A. (2019). Language models as knowledge bases? *Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP)*, 2463–2473. [https://aclanthology.org/D19-1250/](https://aclanthology.org/D19-1250/)

[^5]: Liu, N. F., Lin, K., Hewitt, J., Paranjape, A., Bevilacqua, M., Petroni, F., & Liang, P. (2023). Lost in the middle: How language models use long contexts. *arXiv preprint* arXiv:2307.03172. Published in *Transactions of the Association for Computational Linguistics*, 12, 157–173 (2024). [https://arxiv.org/abs/2307.03172](https://arxiv.org/abs/2307.03172)