# Stage 00: Setup (one-time)

## Purpose
Configure the workspace's Layer 3 reference material by answering questions about voice, audience, and platform. Run once when the workspace is created. Run again if voice or platform changes.

## Inputs
- Layer 4 (working): `stages/00_setup/questionnaire.md`
- Layer 3 (reference): `../style-guide/index.md` (parent blog style guide — authoritative source)
- Layer 3 (reference): `../about.md` (author bio and background)

## Process
Walk through the questionnaire. Answers generate or update the following `_config/` files:

**voice.md** (<500 tokens) — Compressed author voice extract. Source: questionnaire answers + `../style-guide/` voice section + published posts.

**writing-rules.md** (<800 tokens) — Mechanical rules for sentence, paragraph, and post structure. Source: questionnaire answers + `../style-guide/` structure/editing sections.

**banned-words.md** (<300 tokens) — Kill list with replacements. Source: questionnaire answers + `../style-guide/` vogue words section.

## Outputs
- `setup/answers.md` — completed questionnaire
- Updates to `_config/voice.md`, `_config/writing-rules.md`, `_config/banned-words.md`

## Notes
The `_config/` files are compressed extracts for per-stage token budgets. The parent `../style-guide/index.md` is the authoritative source. When in doubt, read the parent.
