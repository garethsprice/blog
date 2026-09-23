# Editing Practice — how a professional copy editor works

Procedure for stage 07. Drawn from Amy Einsohn and Marilyn Schwartz, *The Copyeditor's Handbook* (4th ed., University of California Press, 2019), and Arthur Plotnik, *The Elements of Editing* (Macmillan, 1982). Paraphrased unless in quotation marks. The house rules themselves live in `copy-edit-rules.md` and `../../../_config/house-style-sheet.md`.

## The goal: the four Cs, in service of communication

Einsohn frames the copy editor's job as four Cs — **clarity, coherence, consistency, correctness** — all serving the "Cardinal C": **communication** with the reader.

| C | The question on every sentence |
|---|---|
| Clarity | Can the named reader understand this on first reading, with one interpretation only? |
| Coherence | Does it follow from what came before, and is every term defined before it is needed? |
| Consistency | Is every spelling, name, number, term, format and citation handled the same way throughout — and the same way as the house style sheet? |
| Correctness | Is it right: grammar, usage, spelling, facts that can be checked, quotations, citations, bias-free language? |

When the Cs conflict, communication decides.

## Do no harm

- Every change must be justifiable as one of: **error** (grammar, usage, spelling, fact), **house style** (style guide or style sheet), or **clarity** (a named reader would stumble). Log which, for every change. "I prefer it" is not a category.
- Respect the author's preference where it is acceptable (Einsohn). A usage that is correct but not the one you would choose stays.
- Preserve the author's voice. Tighten; don't rewrite into your own style.
- Never introduce an error. Re-read every sentence you changed, in context, after changing it. Most copy-editing errors are introduced errors.
- A copy editor does not do developmental editing. Structural problems — argument order, missing counterargument, wrong example, wrong content type — are flagged with a query, never fixed. The one exception is heavy cutting, which may remove or merge sections under the rules below.

## Temperament (Plotnik)

Plotnik separates the *bad compulsiveness* of fussing over minor rules from the *good compulsiveness* of following through. Apply it:

- **Proportion.** Spend effort where the reader gains. Don't manufacture changes to show work; a clean paragraph gets no edits.
- **Follow-through.** Every query stays open until the author answers it and the answer is applied. Every flagged fact is resolved or marked in the text.
- **The author–editor relationship.** The author owns the piece and has the final say. Queries are how you persuade; they are never sarcastic, cryptic or condescending.
- **Legal and ethical exposure** is an editor's job to spot, not the author's to remember: statements about identifiable people and organisations, use of others' words, privacy.

## Level of edit

Agree the level before starting; it is set in the stage input. Einsohn's three levels, adapted:

- **Light.** Correct indisputable errors of grammar, spelling, usage and house style; make the piece consistent. Einsohn: "correct all indisputable errors in grammar, syntax, and usage, but ignore any locution that is not an outright error"; point out egregiously wordy or convoluted paragraphs, but do not revise them.
- **Medium (default).** Everything in light, plus fix all errors of grammar, syntax and usage; revise wordy, unclear or jargon-laden sentences; apply the AI-prose rules; query anything unclear in substance.
- **Heavy.** Everything in medium, plus an aggressive, message-preserving cut (see **Heavy cutting** below). Remove or merge sections whose point survives elsewhere. Rewrite sentences for clarity and rhythm. Reframing the piece — a new opening, a new running example, a change of content type, reordering the argument — is still out of scope and goes to a query.

The pipeline default is **medium**. Use **heavy** when the draft is above the bottom third of the length range for its content type, when stage 05 flagged stacked precedents, or when the author asks.

## Heavy cutting

The model is the author's own edit of an AI-drafted post: 2,227 words to 1,378 (−38%) and 27 footnotes to 9, with nothing a reader needed lost. A heavy edit should cut that hard. Sydney Smith's advice in the parent style guide applies literally: run the pen through a large share of the words and see what vigour it gives.

**Target.** Land in the bottom third of the length range for the content type (practical guide 1,000–1,500 → 1,000–1,170; standard essay 600–1,500 → 600–900). Whatever the starting length, cut at least 30% of body words. Stop short of the target only where the skeleton, after compression (step 1b), would break, and say so in the notes.

Footnote counts are an outcome of the cuts, not a target. The model edit's 9 footnotes followed from keeping one precedent per point; don't cut a citation to hit a number.

**1. Write the message skeleton before cutting anything.** From the read-through, write down:
- the thesis in one sentence;
- one line per section: the claim, or the thing the reader should do;
- the counterargument and how the piece answers it;
- the running example, if there is one;
- the closing action or insight.

The skeleton is the invariant. Anything not in it can go. Nothing in it can.

**1b. Compress the skeleton.** A draft built from a long list — nine mechanisms, four failure modes — produces a skeleton too long to fit the target. Before cutting prose, merge skeleton lines that lead the reader to the same action or the same lesson: rehearsing before granting authority and reviewing after each run are one recommendation ("earn authority on the record"); two failure modes with the same fix are one. A merged line keeps the claims of both; it loses only the second heading and the second set of supporting prose. Never drop a skeleton line outright, and never merge the thesis, the counterargument or the closing with anything. List each merge in the notes. Aim for no more than five or six body lines.

**2. Cut down this ladder, cheapest loss first.** Take each rung across the whole piece before moving to the next.
1. Precedents that teach a lesson another precedent already teaches. Keep the strongest one per point — the most specific, best sourced and closest to the reader's case.
2. Second and third examples of a point already made.
3. Background paragraphs that fail "so what?" for the named reader.
4. Sentences that restate the one before, preview what comes next, or sum up what was just said.
5. Detail inside a kept precedent that the point does not need. Keep the one detail that makes the point: Nelson's signal memorandum stays, the dinners aboard *Victory* and the letter to Emma Hamilton go.
6. Quotations whose wording does not matter. Paraphrase them in fewer words, or cut them.
7. Sections whose point is already carried elsewhere, or whose skeleton lines were merged in step 1b. Fold the surviving sentences into the neighbouring section. A two-paragraph debate can become one sentence of objection and one of answer; a failure mode with its own precedent can become one line in a list of risks.
8. Hedges and qualifiers that are not load-bearing — never a source caveat (see below).

**3. Never cut:**
- anything in the skeleton;
- the engagement with the strongest counterargument (it can shrink, but not vanish);
- caveats about the strength of a source ("the reporting rests on six anonymous officers");
- the running example, and the closing action;
- a definition a later sentence depends on.

**4. Second pass: the deletion test.** With the target nearly met, try deleting each remaining paragraph in turn. If the skeleton still holds without it, delete it, or reduce it to the one sentence that carries weight.

**5. Verify the message survived.**
- Rebuild the reverse outline from the edited text — one line per paragraph — and check every skeleton line against it. Restore the minimum needed for any line that has gone.
- Spawn a fresh subagent with only the edited text and ask it the stage 05 cold-reader questions: what is this arguing (or what should I do), and what could I do differently tomorrow? If its answer does not match the skeleton's thesis and closing, the cut went too far. Restore until it matches.
- Put the skeleton, the before and after counts, and the cold-reader answers at the top of the notes, so the author can see at a glance that the message held.

## Passes

Never edit on the first read. Work in passes, each with one concern.

0. **Read-through.** Read the whole piece without changing anything. Note the thesis, the reader, the running example, anything that looks structurally wrong, and recurring patterns (a spelling, a tic). Start the post's style sheet.
1. **Structure (flag only).** Does each section deliver what its heading promises? Is anything out of order, missing or duplicated? Queries only.
2. **Trim** (heavy only). Follow **Heavy cutting**: skeleton, ladder, deletion test, verification. Record everything cut and which rung it came from.
3. **Language — clarity and coherence.** Sentence by sentence: grammar, usage, ambiguity, dangling modifiers, AI-prose tells, weasel words, nominalisations, undefined terms, first-mention identification.
4. **Mechanics — consistency.** Against the house style sheet and the post's style sheet: spelling, hyphenation, capitalisation, numbers, dates, abbreviations, punctuation, quotation marks, italics, heading case, lists.
5. **Correctness — facts, quotations, citations.** See below. Run as an independent check where possible.
6. **Correlate the parts.** Title and standfirst match the body. Every footnote marker has a note and every note has a marker; numbering and order are right after cuts. Every link resolves to what it claims. Headings match their sections. Internal references ("above", "the three tiers") still point at something.
7. **Clean-up read.** Read the edited text end to end as the reader will see it. Check for introduced errors, broken sentences at edit boundaries, and rhythm damaged by cuts.

## Checking content

A copy editor flags; a fact-checker verifies. In this pipeline the research file is the source record, so the check is against it.

**Scope of the correctness check.** Check what could mislead a reader: quotations, numbers, dates, names, who said or did what, and whether each source supports the sentence it is attached to. Bibliographic formatting — publisher, initials, subtitles, access dates — is a separate, lower-priority job: fix what the research file supports, and group the rest into one FYI query. Never treat a missing publisher as a factual error.

- Every quotation matches the research file word for word, including punctuation and capitalisation inside the quote. Silent changes to a quotation are never allowed; use brackets or ellipses only as house style allows.
- **Quotation or paraphrase, never a mix.** Replacing a quotation with a paraphrase is allowed (and encouraged where the wording doesn't matter): remove the quotation marks, keep the attribution and the citation, and keep the meaning exact. Changing words while keeping the quotation marks is never allowed.
- Every number, date and name matches the research file. Numbers that should add up do. Dates are consistent with each other (a person cannot act after their death; "twelve days before" is twelve days).
- Every citation is complete and consistent in format, and supports the sentence it is attached to.
- Anything not in the research file, or that contradicts it, gets `[SOURCE NEEDED]` or a query. Do not fix it from memory.
- Internal consistency beats external knowledge: if the draft says 2014 in one place and 2015 in another, query it even if you "know" the answer.

## Bias-free and legal flags

Query, don't fix:

- Language that stereotypes or excludes, or gendered defaults for unnamed people.
- A factual claim about an identifiable person or organisation that is negative and rests on a weak, anonymous or single source (defamation risk).
- Quotations long enough that they may exceed fair use, and any image without a stated right to use it.
- Private information about individuals.

## The style sheet

Einsohn's core consistency tool. Keep one per post (`[slug]-style-sheet.md`), recording every decision made while editing:

- Spellings and word forms chosen (including proper nouns and their first-mention descriptions)
- Hyphenation and compounds
- Capitalisation
- Numbers, dates, units, percentages
- Abbreviations and when they are spelled out
- Italics and quotation conventions
- Terms of art and how each is defined on first use

Check the draft against the house sheet first. A decision the house sheet does not cover goes on the post sheet and is proposed for the house sheet in the notes.

## Queries

Queries are the copy editor's main way of talking to the author. Einsohn stresses getting the timing, length and tone right: too many, too cryptic or sarcastic, and the author stops trusting the edit.

- One issue per query, numbered (Q1, Q2 …), anchored in the text with `<!-- Q1 -->` right after the passage.
- **Anchor placement.** Anchors go at the end of a body paragraph or list item, never inside the YAML front matter, on a heading line, inside a code block or table, or inside quotation marks. For a heading, the title or the standfirst, anchor at the end of the first body paragraph after it and say in the query which element it refers to.
- Quote the passage, say what the problem is for the reader, and propose a fix the author can accept with one word. "Q4: 'The drone may carry on' — 'carry on' could mean continue flying or continue the attack. Suggest 'finish the attack'. OK?"
- Neutral, courteous, brief. No rhetorical questions ("Do you really mean…?"), no lectures on rules.
- Don't query what the level of edit lets you fix — fix it and log it. Don't query taste.
- Mark each query **must answer** (meaning, fact, legal, structure) or **FYI** (explaining a change the author might not expect).
- Group repeated issues into one global query ("Q9: changed 'defense' to 'defence' throughout (house style) — 4 instances").
- **Keep the count down.** Aim for no more than about 12 queries, and fewer must-answers. Group sourcing gaps into one query per section, listing each gap. If more than eight claims lack support in the research file, the problem is upstream: say so at the top of the notes and recommend returning to stage 03 before the author answers anything.
- Don't raise a query for an OPEN entry in the house style sheet. Apply its default silently.

## Author review and clean-up

After the author answers, run the stage in clean-up mode: apply each answer, delete every query anchor, confirm no `[REVIEW]` or `[SOURCE NEEDED]` marker is left, update the style sheet, and re-run pass 6 and pass 7 on the changed passages.
