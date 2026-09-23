# Copy-Edit Rules — line-level extract of `../style-guide/index.md`

The parent style guide is authoritative. This file compresses the sections a copy editor applies sentence by sentence. Precedence: parent style guide > house style sheet > this file > post style sheet.

## AI-prose tells — fix on sight (medium and heavy)

- Journalese and pivots: "Let's take a closer look", "Here's the thing", "What's striking is", "When it comes to", "At its core", "This is where X comes in". Delete; the paragraph almost always works without it.
- False contrast: "not just X — it's Y", "This isn't about X. It's about Y", "No X. No Y. Just Z." State the real contrast once or cut.
- Aphoristic couplets and zingers: "X carries over. Y does not.", "A filters. B never signs.", "No X, no Y.", a closing line built to be quoted. Rewrite as one plain sentence.
- Closing image: allowed only if it follows the closing action **and** claims no more than the evidence supports. "If that number is rising, the agent has not become less trustworthy; you have found a telegraph" fails: it asserts a diagnosis the piece hasn't shown. A quotable closer is rewritten even when an action precedes it.
- Rule of three where the third item is filler. Cut to two.
- *serves as / stands as / represents* → *is*.
- Staccato runs: three or more short declaratives in a row. Join with a participle, colon or semicolon.
- Coined labels ("action class", "autonomy ratchet"). Replace with a description.
- Bold-label bullets ("**Clarity:** …") in argument prose; mid-paragraph bold.

## Weasel words — fix or query

- Hedges and dilutions ("might help", "it seems", "generally speaking") unless the hedge is load-bearing.
- False precision and unprovable scope ("the vast majority", "most teams", "almost nobody") — needs a number or source, else query.
- Unearned authority ("experts agree", "it is widely believed"), straw consensus ("Everyone assumes…").
- Inflated significance ("a testament to", "pivotal", "paves the way", "underscores").
- Formulaic endings ("Ultimately", "Moving forward", "The future lies in").
- Vogue words: see `_config/banned-words.md` (zero tolerance) and the parent guide's vogue list (question each).

## Language

- Orwell: short word over long; cut words that can go ("in order to" → "to"); active over passive; everyday word over jargon.
- Nominalisations → verbs. Negatives → positives. Cut *very*, *currently*, *the fact that*.
- No mixed metaphors. No false possessives ("CorralData's healthcare market"). Compare like with like.
- Usage: *which* informs, *that* defines; *beg the question* = assume the conclusion; *due to* follows a noun; *effectively* = with effect.
- Technical terms precisely (*exponential*, *inflection point*, *quantum leap*). Say which AI: *LLM*, *RAG*, *fine-tuning*; models don't *think* or *decide*.

## Identification and terms

- Identify every person, company or organisation on first mention, in apposition, with the indefinite article: "Barclays, a British bank".
- Spell out abbreviations on first use unless better known abbreviated (API, SQL, LLM, AWS, GPU). Don't define an abbreviation used once.
- Define a term of art the first time it is needed, in plain words; italicise it on that first use only.

## Numbers

- One to ten in words; 11 and above in figures. Figures always with units (*9ms*), percentages (*4%*), and in sets that cross ten.
- Never start a sentence with a figure.
- Decimals for precise figures, fractions for rough ones; don't mix in one passage. Prefer rounding.
- Percentage change vs percentage-point change; give base rates.

## Quotations and citations

- Quote only when the exact wording matters; otherwise paraphrase. Name the speaker before the quote.
- Never alter words inside a quotation. Omissions take an ellipsis; insertions take square brackets.
- Every historical example or quotation is followed by a sentence applying it to the reader's case. Missing bridge → query.
- One precedent per point. Extra precedents teaching the same lesson → cut (heavy) or query (light/medium).
- Footnotes: APA with links, `[^key]` markers, note text at the end. Opinion sources are marked as opinion.
- State evidence only as strongly as the source allows. Anonymous, disputed or partisan sources are named as such in the text.

## Formatting and headings

- Bold rare. Italics for publication titles and a term's first introduction. `Code` for commands, file names, identifiers.
- Em dashes spaced ( — ), sparingly.
- Headings: sentence case, eight words or fewer, carry a claim or name the section's question; no counts, no compound claims.
- Title per `../style-guide/head-matter.md`; standfirst in the format for the content type, plain, no antithesis couplet. Title and standfirst are display copy: bringing them to house format is a house-style change, not a reframe.

## Never touch

Code blocks, commands, config values, file paths, identifiers, error strings, URLs, and the words inside quotation marks. Edit the prose around them. A quotation may be swapped for an exact-meaning paraphrase (marks removed, attribution kept); it may never be edited while staying a quotation.
