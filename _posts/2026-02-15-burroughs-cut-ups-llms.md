---
layout: post
title: "When You Cut Into the Model the Future Leaks Out"
description: "LLMs predict the next token to restore the statistical patterns of language. Burroughs cut text apart to destroy them. The creative use of language models is not to accept their most probable output but to treat it as material — something to collide, disrupt, and curate."
created_date: 2026-02-15
updated_date: 2026-02-15
---
Large language models are the most precise mechanism ever built for reproducing the statistical center of language. They ingest text, model its patterns, and predict the most probable next token. The output is consensus: the expected phrase, the median answer, the center of the distribution. William S. Burroughs spent decades arguing that the predictable patterns of language are themselves a mechanism of control, and that the only counter-move is to break them. He was describing the problem that LLMs have now perfected — but he was also demonstrating what you do about it. The creative use of a language model is not prompting it and accepting what comes back. It is treating the output as raw material to be cut apart, collided with something it did not expect, and reassembled through human judgment. The model generates. The human disrupts and curates. The value is in the intervention, not the prediction.

The method Burroughs used to break those patterns arrived by accident. In October 1959, the painter Brion Gysin sliced through a stack of newspapers with a Stanley knife in a Parisian hotel room — he had been cutting cardboard and used the papers to protect his table.[^1] The severed sentences, rearranged at random, produced collisions of headline and advertisement. Gysin showed the results to Burroughs, who was staying down the hall.[^2] Within months, Burroughs had turned the accident into a systematic method: take a page, cut it into sections, rearrange them, type out the result.[^3]

The theory behind the technique was more ambitious than the technique itself. Burroughs argued that language is a virus — a control system that conditions thought through statistical regularity.[^4] We think in grooves worn by syntax, cliché, and the rhythms of advertising and political speech. Cut-ups were his countermeasure: physically disrupting text to shatter those grooves and force language into territory that deliberate composition would not visit.[^5] "_Cut into the present,_" he wrote, "_and the future leaks out._"[^6]

### Half of English writes itself

Claude Shannon had already mapped the territory Burroughs wanted to destroy. In 1951, Shannon demonstrated that English prose is roughly 50% redundant — filled with patterns predictable enough that subjects could guess the next letter in a passage far more often than chance would allow.[^7] To make the point concrete, he generated random approximations to English using Markov chains: first purely random letters, then letters weighted by frequency, then by pairs and triplets. By the fourth or fifth order, the output reads like plausible prose — recognizably English despite no one intending any meaning.[^8]

Shannon's result quantified what Burroughs perceived intuitively: language is grooved. Half the work of producing the next word has already been done by the words that precede it. Shannon treated this redundancy as an engineering property — useful for error correction, compressible for efficient transmission. Burroughs treated the same property as a trap. Both were right. The question is what you want to do with language once you recognize how much of it is running on autopilot.

### The consensus machine

LLMs are Shannon's heirs, not Burroughs'. They ingest text by tokenizing it — segmenting words and subwords into fragments, then building a statistical model of which fragments follow which. In that mechanical sense, tokenization resembles a cut-up: text is sliced into pieces. But the resemblance ends there. Where Burroughs rearranged the fragments to increase randomness, LLMs use them to calculate the probability of what comes next. The entire purpose of the system is to restore and enforce the statistical regularities of language. Where Burroughs increased entropy, LLMs minimize it.

That makes them, in Burroughs' terms, the most powerful control machine for language ever constructed. This is not a flaw — it is what they are built to do. But it defines their boundary. A model trained on the statistical mean of human language will produce the statistical mean. For drafting emails or summarizing documents, that is the correct output. For creative or strategic work — anywhere the value lies in departing from what is expected — it is the wrong place to stop.

When researchers at Columbia and Salesforce tested LLM-generated fiction against professional short stories from *The New Yorker* using expert creative writing evaluators, the models passed creativity tests at 3–10x lower rates than the human-written stories — while scoring highest on fluency and coherence, and lowest on originality.[^9] The evaluators' qualitative notes are as revealing as the numbers: they flagged structural tics that follow directly from optimizing for the most probable sequence. Topic sentences at the top of every paragraph. Summary sentences at the bottom. Ornamental language where surprise should be. The models produced text that reads well and says nothing unexpected — which is exactly what you would predict from a system trained to minimize prediction error.

### The sampling objection

The obvious counter to this framing is that practitioners already know how to move LLMs off the statistical center. Temperature sampling introduces randomness into token selection. Top-p (nucleus) sampling truncates the probability distribution to avoid the lowest-quality tail while still sampling broadly. Researchers fine-tune models on creative corpora. Prompt engineers use elaborate instructions — personas, constraints, style directives — to shift the distribution of outputs away from the generic. These are real techniques, and they work. A skilled practitioner can coax genuinely surprising text from a language model without anything resembling a cut-up.

But notice what all of these techniques share: they are interventions that disrupt the model's default behavior. Temperature sampling literally adds noise to the prediction. Top-p sampling reshapes the probability distribution. Fine-tuning rewrites the model's priors. Prompt engineering forces the model to condition on instructions that shift its output away from the statistical center of its training data. Every technique that produces creative value from an LLM works by pushing the system away from its most probable output — not by accepting it. The dispute is not whether disruption is necessary but what form it should take.

### Why disruption produces signal

Burroughs' cut-ups worked by brute force. Most juxtapositions were nonsensical. But by breaking the expected sequence, they occasionally surfaced associations that intentional composition could not reach. Burroughs claimed the method was prophetic.[^6] The claim is mystical. The mechanism behind it is not.

Creative cognition research since the 1960s — beginning with Sarnoff Mednick's associative theory — has converged on a consistent finding: novel ideas tend to emerge from distant associations, connections between concepts that do not normally co-occur.[^13] Deliberate thinking follows well-worn associative paths. It is efficient, but it stays close to what is already known. Randomization — whether through cut-ups, constrained writing exercises, or lateral thinking prompts — forces juxtapositions that deliberate thought would not produce. Most of these juxtapositions are garbage. But a small fraction contain connections that are both novel and meaningful, and that the thinker would not have reached through directed effort.

This is why the brute force works, and why it requires human judgment. The random process generates candidates. The human recognizes which candidates contain signal — a connection, a framing, a combination that is surprising but apt. The generation is mechanical. The curation is creative. Neither works without the other. Random generation without judgment produces noise. Judgment without random generation stays within the grooves of what the thinker already knows.

LLMs add a dimension that Burroughs' newspaper fragments could not: the generated material is already linguistically coherent. A high-temperature LLM output may be unexpected, but it is grammatical. It parses. It has the surface texture of sense, which makes it far easier for a human to evaluate than fragments of newspaper reassembled at random. The tradeoff is that this coherence comes from the same statistical regularities that produce consensus — the model's outputs are always pulled toward the center, even when sampled broadly. The creative work is in finding the right amount of disruption: enough deviation to produce material the thinker would not have composed, not so much that the output collapses into noise.

### Generation, then curation

In 1995, David Bowie built custom software — the Verbasizer, running on an Apple PowerBook — that randomized sentence fragments across weighted columns.[^10] Thom Yorke pulled words from a hat to write Radiohead's *Kid A*.[^11] Neither used randomization to produce finished work. They used it to generate material that their deliberate thinking could not reach, then applied taste and judgment to shape what emerged. The distinction between generation and curation is the key to every productive use of randomness in creative work — and it is exactly the distinction that the default mode of LLM usage collapses.

Prompting a model and accepting its most probable output is the opposite of a cut-up. It asks the consensus machine for consensus. The mode that produces creative value involves treating model outputs as material to be collided and recombined: raising the temperature, running the same prompt against different system instructions, mashing outputs from different models, or forcing the model into territory it would not visit on its own and then recognizing what is worth keeping. The creative work is the intervention that breaks the tendency toward the mean. The judgment is distinguishing the signal — a connection, a framing, a combination the human would not have composed and the model would not have predicted.

### The third mind

The best description I have found for this kind of human-AI collaboration predates it by decades. Burroughs and Gysin called their collaborative book *The Third Mind* — their claim that when two minds work through a shared disruptive process, the result is not a blend of two perspectives but something neither could have produced alone.[^12] The phrase captures what works in practice: not prompting the machine and accepting its prediction, but cutting into its output, forcing it somewhere neither human nor model would go alone, and recognizing what leaks out.

---

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

[^13]: Mednick, S. (1962). The associative basis of the creative process. *Psychological Review*, 69(3), 220–232. https://doi.org/10.1037/h0048850