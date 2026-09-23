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
- A copy editor does not do developmental editing. Structural problems — argument order, missing counterargument, wrong example — are flagged with a query, never fixed.

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
- **Heavy.** Everything in medium, plus cut: remove redundant paragraphs and stacked precedents to the house rules, and rewrite sentences for clarity and rhythm. Still no structural changes — those remain queries.

The pipeline default is **medium**. Use **heavy** when the draft is more than 15% over its word target or stage 05 flagged stacked precedents.

## Passes

Never edit on the first read. Work in passes, each with one concern.

0. **Read-through.** Read the whole piece without changing anything. Note the thesis, the reader, the running example, anything that looks structurally wrong, and recurring patterns (a spelling, a tic). Start the post's style sheet.
1. **Structure (flag only).** Does each section deliver what its heading promises? Is anything out of order, missing or duplicated? Queries only.
2. **Trim** (heavy only). Cut to the house rules on precedents and length. Record what went and why.
3. **Language — clarity and coherence.** Sentence by sentence: grammar, usage, ambiguity, dangling modifiers, AI-prose tells, weasel words, nominalisations, undefined terms, first-mention identification.
4. **Mechanics — consistency.** Against the house style sheet and the post's style sheet: spelling, hyphenation, capitalisation, numbers, dates, abbreviations, punctuation, quotation marks, italics, heading case, lists.
5. **Correctness — facts, quotations, citations.** See below. Run as an independent check where possible.
6. **Correlate the parts.** Title and standfirst match the body. Every footnote marker has a note and every note has a marker; numbering and order are right after cuts. Every link resolves to what it claims. Headings match their sections. Internal references ("above", "the three tiers") still point at something.
7. **Clean-up read.** Read the edited text end to end as the reader will see it. Check for introduced errors, broken sentences at edit boundaries, and rhythm damaged by cuts.

## Checking content

A copy editor flags; a fact-checker verifies. In this pipeline the research file is the source record, so the check is against it:

- Every quotation matches the research file word for word, including punctuation and capitalisation inside the quote. Silent changes to a quotation are never allowed; use brackets or ellipses only as house style allows.
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
- Quote the passage, say what the problem is for the reader, and propose a fix the author can accept with one word. "Q4: 'The drone may carry on' — 'carry on' could mean continue flying or continue the attack. Suggest 'finish the attack'. OK?"
- Neutral, courteous, brief. No rhetorical questions ("Do you really mean…?"), no lectures on rules.
- Don't query what the level of edit lets you fix — fix it and log it. Don't query taste.
- Mark each query **must answer** (meaning, fact, legal, structure) or **FYI** (explaining a change the author might not expect).
- Group repeated issues into one global query ("Q9: changed 'defense' to 'defence' throughout (house style) — 4 instances").

## Author review and clean-up

After the author answers, run the stage in clean-up mode: apply each answer, delete every query anchor, confirm no `[REVIEW]` or `[SOURCE NEEDED]` marker is left, update the style sheet, and re-run pass 6 and pass 7 on the changed passages.
