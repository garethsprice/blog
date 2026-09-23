# Jekyll Template — Res·Cog

## Frontmatter Format
```yaml
---
layout: post
title: "Title in Sentence Case with Quotation Marks"
description: "1-2 sentence standfirst describing the claim, not the topic"
created_date: YYYY-MM-DD
updated_date: YYYY-MM-DD
---
```

**Notes:**
- `layout: post` always (author defaults to "Gareth Price" via _config.yml)
- `title` is always quoted, sentence case
- `description` is the standfirst — two sentences; format depends on content type (below)
- `created_date` and `updated_date` are separate fields
- No categories or tags (not currently used)
- Author is inherited from site defaults — do not set per-post

## Filename
`YYYY-MM-DD-slug-words-separated-by-hyphens.md`

Example: `2026-03-15-metadata-quality-bottleneck.md`

## Standfirst Rules (from head-matter.md)

**Essays and arguments:**
- Sentence 1: Status shift — what has changed, concrete, slightly ahead of conventional wisdom
- Sentence 2: Gap and consequence — what's missing/broken, ending on human/institutional cost
- Escalate across the two sentences
- End on consequence, not description

**Practical guides / frameworks:**
- Sentence 1: The reader's decision or task, in their terms
- Sentence 2: Where the advice comes from and what it covers
- Example: "Decide what an overnight agent may do while you're asleep and which decisions must wait until morning. Military delegation offers lessons about setting limits and resisting needless approval."

**Both:**
- Plain over clever — no antithesis couplets
- No wind-up ("In an era of...", "As we enter...")
- Must pass the "already underway" test

## Body Conventions
- Markdown: kramdown processor
- Headings: H2 (`##`) for main sections, H3 (`###`) for subsections
- No H1 in body — title comes from frontmatter
- Footnotes: `[^1]` inline, `[^1]: Citation text` at bottom
- Citation format: APA with links
- Em dashes: ` — ` (spaced, kramdown will typographically render)
- Excerpt separator: `<!--more-->` after first paragraph if needed
- Images: `/assets/img/[filename]` (minimal — blog is text-focused)
- Bold: rare, for emphasis only
- Italics: titles of publications, first introduction of a term
- Code: technical terms, commands, filenames

## Destination
Copy output to `../../_posts/` in the parent blog repo for publication.
