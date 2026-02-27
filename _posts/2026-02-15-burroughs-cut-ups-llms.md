---
layout: post
title: "When You Cut Into the Model the Future Leaks Out"
description: "LLMs predict the next token to restore the statistical patterns of language. Burroughs cut text apart to destroy them. Prompt in, consensus out is the control machine perfected. The creative move is to stop accepting the most probable output and start using it as raw material."
created_date: 2026-02-15
updated_date: 2026-02-15
---
Large language models are the most precise control machines ever built for language. They ingest text, model its statistical patterns, and predict the most probable next token. The output is consensus: the expected phrase, the median answer, the centre of the distribution. William S. Burroughs spent decades arguing that the predictable patterns of language are themselves a mechanism of control, and that the only counter-move is to break them. He was describing the problem that LLMs have now perfected.

The method Burroughs used to break those patterns arrived by accident. In October 1959, the painter Brion Gysin sliced through a stack of newspapers with a Stanley knife in a Parisian hotel room — he'd been cutting cardboard and used the papers to protect his table.[^1] The severed sentences, rearranged at random, produced collisions of headline and advertisement. Gysin showed the results to Burroughs, who was staying down the hall.[^2] Within months, Burroughs had turned the accident into a systematic method: take a page, cut it into sections, rearrange them, type out the result.[^3]

The theory behind it was more ambitious than the technique. Burroughs argued that language is a virus — a control system that conditions thought through statistical regularity.[^4] We think in grooves worn by syntax, cliché, and the rhythms of advertising and political speech. Cut-ups were his counter-weapon: physically disrupting text to shatter those patterns and force language off its rails.[^5] "_Cut into the present,_" he wrote, "_and the future leaks out._"[^6]

### Half of English writes itself

Claude Shannon had already mapped the territory Burroughs wanted to destroy. In 1951, Shannon demonstrated that English prose is roughly 50% redundant — filled with patterns predictable enough that subjects could guess the next letter in a passage far more often than chance would allow.[^7] To make the point concrete, he generated random approximations to English using Markov chains: first purely random letters, then letters weighted by frequency, then by pairs and triplets. By the fourth or fifth order, the output reads like plausible prose — recognizably English despite no one intending any meaning.[^8]

### The consensus machine

LLMs are Shannon's heirs, not Burroughs'. They ingest text by tokenizing it — cutting it into fragments and building a statistical model of which fragments follow which. In that mechanical sense, tokenization resembles a cut-up. But the resemblance ends there. The entire purpose of an LLM is to predict the most probable next token: to restore and enforce the statistical regularities of language. Where Burroughs increased entropy, LLMs minimize it.

That makes them the control machine Burroughs diagnosed. This is not a flaw — it is what they are built to do. But it defines their boundary. A model trained on the statistical mean of human language will produce the statistical mean. For drafting emails or summarizing documents, that is the right output. For creative or strategic work, it is the wrong place to look.

When researchers at Columbia and Salesforce tested LLM-generated fiction against professional short stories from *The New Yorker* using expert creative writing evaluators, the models passed creativity tests at 3–10x lower rates than the human-written stories — but scored highest on fluency and coherence, and lowest on originality.[^9] The models produced polished, coherent, predictable prose. Evaluators noted the structural tics that follow from optimizing for the most probable sequence — topic sentences at the top of every paragraph, summary sentences at the bottom, ornamental language where surprise should be.

Burroughs' cut-ups addressed this problem with brute force. The juxtapositions were mostly nonsensical. But by breaking the expected sequence, they occasionally surfaced associations that intentional composition could not reach. He claimed the method was prophetic.[^6] The claim is mystical. But break what the reader expects and you sometimes find signal that deliberate thinking misses.

### Generation is the easy part

In 1995, David Bowie built custom software — the Verbasizer, running on an Apple PowerBook — that randomized sentence fragments across weighted columns.[^10] Thom Yorke pulled words from a hat to write Radiohead's *Kid A*.[^11] Neither used randomization to produce finished work. They used it to generate material their deliberate thinking could not reach, then applied taste and judgment to shape what fell out. Generation, then curation.

The distinction between generation and curation matters for how we use LLMs. The default mode — prompting a model and accepting its most probable output — is the opposite of a cut-up. It asks the control machine for consensus. The mode that produces creative value involves using model outputs as material to be disrupted and recombined: raising the temperature, colliding outputs from different prompts, forcing the model into territory it would not visit on its own. The creative work is the intervention that breaks the tendency toward the mean. The judgment is recognizing signal in the result — a connection, a framing, a combination the human would not have composed and the model would not have predicted.

The best description I have found for human-AI collaboration done well is one that predates it by decades. Burroughs and Gysin called their collaborative book *The Third Mind* — their claim that when two minds work through a shared disruptive process, the result is not a blend of two perspectives but something neither could have produced alone.[^12] Not accepting the machine's most probable output, but cutting into it, forcing it somewhere neither human nor model would go alone, and seeing what leaks out.

---

{% include assisted-authorship-disclaimer.html %}

*For an in-depth exploration of the cut-up technique's lineage — from Virgilian centos and Tzara's hat to Shannon's Markov chains, Cage's I Ching, and the evolution toward modern tokenization — see the companion article: [Scissors, Language, and Control: Burroughs' Cut-Up Technique in Context]({% post_url 2026-02-15-burroughs-cut-ups-research %}).*

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

[^9]: Chakrabarty, T., Laban, P., Agarwal, D., Muresan, S., & Wu, C.-S. (2024). Art or artifice? Large language models and the false promise of creativity. *Proceedings of the ACM CHI Conference on Human Factors in Computing Systems*. https://arxiv.org/abs/2309.14556

[^10]: Roberts, T. (2013, March). Ty Roberts: From working with David Bowie to co-founding Gracenote. *Hypebot*. Retrieved from https://www.hypebot.com/hypebot/2013/03/ty-roberts-on-the-trail-from-working-with-david-bowie-to-co-founding-gracenote.html

[^11]: Kid A. (n.d.). *Citizen Insane*. Retrieved from https://citizeninsane.eu/music/kida/kida.html

[^12]: Gysin, B. (n.d.). Cut ups. *Brion Gysin Official Website*. Retrieved from https://www.briongysin.com/cut-ups/