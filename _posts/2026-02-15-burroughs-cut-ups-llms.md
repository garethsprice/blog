---
layout: post
title: "When You Cut Into the Model the Future Leaks Out"
description: "Burroughs cut text apart to break language's statistical grip. LLMs predict the next token to restore it. Prompt in, consensus out is the control machine perfected. The creative move is to stop accepting the most probable output and start using it as a supercollider for ideas."
created_date: 2026-02-15
updated_date: 2026-02-15
---
In October 1959, in a cheap Parisian hotel room, the painter Brion Gysin sliced through a stack of old newspapers with a Stanley knife. He'd been cutting cardboard and had used the papers to protect his table. The blade went through to the newsprint beneath, and the severed sentences, rearranged at random, produced something startling — fragments of headlines and advertisements colliding into new, uncanny combinations.[^1] Gysin showed the results to William S. Burroughs — the novelist, heroin addict, and Beat Generation figurehead who was staying down the hall.[^2] Within months, Burroughs had turned the accident into a systematic literary method and a theory of liberation.

The technique was simple: take a page, cut it into sections, rearrange them, type out the result.[^3] The theory was not. Burroughs argued that language is a virus — a control mechanism that conditions thought through its statistical patterns.[^4] We think in grooves worn by syntax, by cliché, by the rhythms of advertising and political speech. The predictable patterns of language are the bars of the cage. Cut-ups were his counter-weapon: physically disrupting text to shatter those patterns, increase the disorder, and break the control.[^5] "_Cut into the present,_" he wrote, "_and the future leaks out._"[^6]

Claude Shannon — the mathematician who founded information theory and, with it, the digital age — would have recognized the operation, if not the mysticism. In 1948, Shannon established that English prose is roughly 75% redundant — filled with predictable patterns that allow a reader to guess what comes next.[^7] He proved this by having subjects predict the next letter in a passage of English; they succeeded far more often than chance would allow, because so much of language is already determined by what came before. To make the point vivid, he generated random approximations to English using Markov chains — first purely random letters, then letters weighted by frequency, then by pairs and triplets, each level more recognizably "English" despite no one intending any meaning at all.[^8] By the fourth or fifth order, the output reads like plausible prose. Shannon was mapping the statistical structure that Burroughs wanted to destroy.

Large language models are Shannon's heirs, not Burroughs'. An LLM ingests text by tokenizing it — cutting it into fragments, building a statistical model of which fragments follow which. In that mechanical sense, tokenization resembles a cut-up. But the resemblance ends there. The entire purpose of an LLM is to predict the most probable next token — to restore and enforce the statistical regularities of language. Where Burroughs increased entropy, LLMs minimize it. Where he disrupted the predictable, they optimize for it. The cut-up was designed to break the control machine. The language model *is* the control machine, refined to extraordinary precision.[^9]

This isn't a flaw — it's what they're built to do. But it clarifies their limitations. A model trained on the statistical mean of human language will produce the statistical mean: the most likely completion, the expected phrase, the consensus answer. For drafting emails or summarizing documents, that's exactly right. But the mean is not where creative or strategic value lives. Alpha comes from the tails — from the unexpected combination, the non-obvious connection, the output that surprises even its creator.

Burroughs understood this in terms that predate the vocabulary but describe the phenomenon precisely. His cut-ups forced language off its statistical rails. The juxtapositions were often nonsensical, but some percentage surfaced associations and ideas that deliberate composition couldn't reach. He claimed, with characteristic grandiosity, that cut-ups were prophetic.[^6] The claim is mystical, but the mechanism is real: break the expected sequence and you occasionally find signal that conventional pattern-matching misses.

The practitioners who inherited the method bear this out. David Bowie built custom software in 1995 — the Verbasizer, running on an Apple PowerBook — that randomized sentence fragments across weighted columns.[^10] Thom Yorke pulled words from a hat to write Radiohead's *Kid A*.[^11] Neither used these tools to produce finished work. They used them to generate material their deliberate thinking couldn't reach, then applied taste and judgment to shape the results. Generation pushed toward the tails. Curation pulled the best of it back into coherence.

That distinction matters for how we work with LLMs. The default mode — prompting a model and accepting its most probable output — is the opposite of a cut-up. It's asking the control machine for consensus. The more interesting mode involves using model outputs as *material* to be disrupted and recombined — raising the temperature, colliding outputs from different prompts, deliberately seeking the unexpected. The creative work is the intervention that breaks the tendency toward the mean and the judgment that recognizes when something valuable falls out.

Burroughs and Gysin called their collaborative book *The Third Mind*. The title referred to their conviction that when two minds work through a shared process, the result is not a blend of two perspectives but a genuinely new intelligence — a third thing that neither could have produced or predicted alone.[^12] The book itself performed the thesis: a collage of cut-up text, transcribed conversations, photographs, and Gysin's calligraphy, assembled over a decade and published in 1978. They coined the concept in 1965, and it describes the emerging field of human-AI collaboration at its best: not accepting the machine's most probable output, but cutting into it, forcing it somewhere neither human nor model would have gone alone, and watching what leaks out.

---

{% include syngraphic-disclaimer.html %}

*For an in-depth exploration of the cut-up technique's lineage—from Virgilian centos and Tzara's hat to Shannon's Markov chains, Cage's I Ching, and the evolution toward modern tokenization—see the companion article: [Scissors, Language, and Control: Burroughs' Cut-Up Technique in Context]({% post_url 2026-02-15-burroughs-cut-ups-research %}).*

---

### References

[^1]: Gysin, B. (n.d.). Cut ups. *Brion Gysin Official Website*. Retrieved from https://www.briongysin.com/cut-ups/

[^2]: William S. Burroughs. (n.d.). In *Wikipedia*. Retrieved from https://en.wikipedia.org/wiki/William_S._Burroughs

[^3]: Burroughs, W. S. (1961). The cut up method of Brion Gysin. Retrieved from University of Pennsylvania: https://www.writing.upenn.edu/~afilreis/88v/burroughs-cutup.html

[^4]: Calling all reactive agents: Cutting up Burroughs. (n.d.). *Enculturation*. Retrieved from https://enculturation.net/calling_all_reactive_agents

[^5]: Burroughs, W. S. (n.d.). William S Burroughs cut up method. *Language Is a Virus*. Retrieved from https://www.languageisavirus.com/creative-writing-techniques/william-s-burroughs-cut-ups.php

[^6]: William S Burroughs – Cut-Ups. (2014, March). *The Allen Ginsberg Project*. Retrieved from https://allenginsberg.org/2014/03/william-s-burroughs-cut-ups/

[^7]: Shannon, C. E. (1951). Prediction and entropy of printed English. *Bell System Technical Journal*. Retrieved from https://www.princeton.edu/~wbialek/rome/refs/shannon_51.pdf

[^8]: Claude E. Shannon and information theory. (2018, July 29). *Literary Theory and Criticism*. Retrieved from https://literariness.org/2018/07/29/claude-e-shannon-and-information-theory/

[^9]: Kelly, R. (n.d.). AI-in-the-loop: Cut-ups, large language models, and the… *Medium*. Retrieved from https://medium.com/@rkelly_63826/ai-in-the-loop-6f66d5d77faa

[^10]: Roberts, T. (2013, March). Ty Roberts: From working with David Bowie to co-founding Gracenote. *Hypebot*. Retrieved from https://www.hypebot.com/hypebot/2013/03/ty-roberts-on-the-trail-from-working-with-david-bowie-to-co-founding-gracenote.html

[^11]: Kid A. (n.d.). *Citizen Insane*. Retrieved from https://citizeninsane.eu/music/kida/kida.html

[^12]: Gysin, B. (n.d.). Cut ups. *Brion Gysin Official Website*. Retrieved from https://www.briongysin.com/cut-ups/