---
layout: post
title:  "Advanced Effective Speech Week3"
---

# Effective Approaches to Attention-based Neural Machine Translatio
## Pre-study 
**Machine Translating(MT)**: Important sub-field of nlp that aims the translation of natural language sentences using computers <br/>
-From hand-crafted translation and linguistic knowledge, data-driven approaches to learn linguistic data from data(SMT) diverse approaches of machin translation existed <br/>
**Neural Machine Translation(NMT)**: A state-of-the-art machine translation approach that utilizes neural network techniques to predict the likelihood of a set of words in sequence  <br/>
-Translation Quality: <br/>
Due to NMT's ability to consider the entire context of a sentence, as opposed to translating piece by piece, it tends to produce translations that are more fluent and accurate—the translations sound more like a native speaker and typically are closer to the intended meaning of the original text <br/>
-Memory Efficiency: <br/>
NMT uses neural networks, which, despite their complexity, can be more memory-efficient than the large statistical models of SMT <br/>
This is because NMT learns a dense representation of language rather than storing and retrieving vast tables of phrases and translations <br/>
-End-to-End Training: <br/>
NMT systems are trained end-to-end, which means that all parts of the model are trained simultaneously to optimize translation performance. In contrast, SMT systems involve several distinct models (such as language models, alignment models, and translation models) that are trained separately and then brought together in a pipeline <br/>
-Model Simplicity: <br/>
Traditional SMT systems are composed of many different sub-components, each requiring separate tuning and optimization (like translation rules, reordering models, language models, etc.) <br/>
This can make the system quite complex and cumbersome to manage. NMT simplifies this by using a single, large neural network that learns to perform the translation task from start to finish without needing to explicitly program all the different sub-tasks involved in translation <br/>
-Contextual Understanding: <br/>
NMT models, especially those using attention mechanisms or transformer architectures, are better at capturing long-range dependencies within a sentence <br/>
This means they can better understand how words relate to each other in a sentence, leading to translations that consider the entire input sequence as a whole rather than in isolated parts <br/>
Ref: <br/>
https://www.sciencedirect.com/science/article/pii/S2666651020300024 <br/>
https://omniscien.com/faq/what-is-neural-machine-translation/ <br/>
**Encoder-Decoder Architecture** <br/>
-Example: The cat ate the mouse -> Le chat a mange la souris <br/>
-Seq to Seq architecture <br/>
Consume sequences and splits out sequences <br/>
-Two Stages <br/>
Encoder Stage: <br/>
Produce vector, or representation of the architecture <br/>
Where the system takes in all the information it needs and packs it into a neat package. It's like creating a summary or a blueprint of the information <br/>
Decoder stage: <br/>
Creates sequence <br/>
System takes that neat package and starts to build something with it, like a sequence of steps or instructions. It's like using a blueprint to construct a model or telling a story based on a summary <br/>
Encoder that summarizes everything into a compact form, and then the Decoder that uses that summary to create a new sequence or output <br/>
Ref: https://www.youtube.com/watch?v=zbdong_h-x4 <br/>
**Attention Mechanism** <br/>
-Traditional RNN Encoder Decoder <br/>
![AttentionBasedNMT2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/96931ec0-bf96-4522-a00d-788a86610c6f) <br/>
(1)Model takes one word at a time as input, updates the hidden state, and passes to the next time step <br/>
(2)Final hidden state is passed to the Decoder <br/>
(3)Decoder works with the final hidden state for processing and translates this to the target language <br/>
![AttentionBasedNMT3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/97e51208-960a-47f3-944a-55e2cb51d1ba) <br/>



-Example: <br/>
Translate English sentence to French sentence <br/>
![AttentionBasedNMT1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/665db174-6503-41dc-869d-73cd6db042fc) <br/>
Encoder-Decoder structure, popular for translating sentences is used <br/>
Problem: Words in the source language do not align with the words in the target language <br/>
In the sentence Black cat eat the mouse, the first English words is Black, while the translated word in France is chat, meaning cat <br/>
-Solution: Attention Mechanism to the Encoder-Decoder structure <br/>

Allows neural network to focus specific parts of an input sequence <br/>
Done by assigning weights to different parts of the input sequence <br/>
Most important parts, receiving the highest weights <br/>
## Abstract
Problem: <br/>
The attention mechanism itself, became widely popular, allowing the model to focus on the most relevant parts of the input text while generating the translation <br/>
However, the specific ways in which attention mechanisms can be integrated into the architecture of NMT systems are diverse and not yet fully explored <br/>
There's potential for innovative research to develop new models that incorporate attention in different ways, which could further improve translation performance <br/>
Solution(What is written in the paper) <br/>
Two types of attention mechanisms that can be used in Neural Machine Translation (NMT) systems <br/>
(1)Global Attention <br/>
Considers the entire input sentence at once when translating any part of it <br/>
No matter which word the system is currently translating, it has the whole original sentence to draw on for context <br/>
This is like having an overview of the entire landscape when taking a photograph; you can see everything from the start <br/>
(2)Local Attention <br/>
Focuses on just a part of the input sentence at a time <br/>
When the system translates a specific word, it only looks at a few nearby source words for guidance <br/>
This is akin to taking a close-up photo of a subject, where you only focus on a small area and blur out the rest <br/>
=> Both methods of MT work well <br/>
Proof: <br/>
Researchers tested their translation methods from English to German and from German to English and the results show high performance <br/>
Performance: <br/>
Local attention: Achieved a significant gain of 5.0 BLEUpoints over non-attentional systems that already incorporate known techniques such as dropout <br/>
Ensemble model: <br/>
Use different attention architectures <br/>
Yields a new state-of-the-art result in the WMT'15 English to German translation task with 25.9 BLEU points <br/>
An improvement of 1.0 BLEU points over the existing best system backed by NMT and an n-gram reranker <br/>
Footnote: <br/>
BLEU <br/>
Single numeric score that tells us how good it is compared to reference translation <br/>
Geometric mean of all four n-gram precisions <br/>
-Unigram Precision = Num word matches / Num words in generation <br/>
-Clip is used to clip the number of times to count a word, based on the reference translation based on the number of times it appears in the reference translation, to avoid overgenerating reasonable words <br/>
-To solve the word ordering problems, BLEU computes precision for several different n-grams and averages the result <br/>
Ref: https://www.youtube.com/watch?v=M05L1DhFqcw <br/>

## Introduction
**What makes NMT ** <br/>



## Conclusion
**What this Paper is about** <br/>
Propose two simple and effective attentional mechanisms for neural machine translation <br/>
(1)Global approach: Looks at all source positions  <br/>
(2)Local approach: One that only attends to a subset of source positions at a time  <br/>
**Proof** <br/>
Experiment: Effectiveness of our models in the WMTtranslation tasks between English and German in both directions <br/>
Local attention: Yields large gains of up to 5.0 BLEU over non-attentional  <br/>
Ensemble Model:  <br/> 
English to German translation direction, our model has established new state-of-the-art results for both WMT'14 and WMT'15, outperforming existing best systems <br/>
Surpassed the performance of the then-current best system by more than 1.0 BLEU which itself used Neural Machine Translation (NMT) enhanced with an n-gram reranker <br/>
**Conclusion of the paper** <br/>
Compared various alignment functions and provided insights on which functions are best for which attentional models <br/>
Attention-based NMT models are superior to nonattentional ones in many cases <br/>
Example: Translating names and handling long sentences <br/>


**Footnote** <br/>
alignment function (also known as a score function or compatibility function)  <br/>
Calculates how much focus should be placed on each part of the input data when predicting a part of the output  <br/>
