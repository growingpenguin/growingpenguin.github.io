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

## 2 Neural Machine Translation
Neural Machine Translation System: Neural network that directly models the conditional probability $p(y|x)$ of translating a source sentence $x1,..., xn$ to a target sentence $y1,..., ym$ <br/>
Two Components of basic form of NFT <br/>
(a) Encoder: Computes a representation s for each source sentence <br/>
-The encoder processes the source sentence and generates a context-rich vector representation <br/>
-This representation is meant to capture the entire meaning of the source sentence, containing all the necessary information to generate the target sentence <br/>
(b) Decoder: Generates one target word at a time and hence decomposes the conditional probability  <br/>
-The decoder takes the sentence representation s and starts generating the target sentence one word at a time <br/>
-The probability of the entire target sentence $p(y∣x)$ is the product of the probabilities of each word given all the previous words and the source sentence <br/>
![AttentionBasedNMT4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9307128f-3405-4512-8e7b-565f9c4bdd73) <br/>
-Each $p(y_j | y_<j, s)$ represents the probability of the j-th word given the sentence representations and all the previous words <br/> 
-The decomposition makes the computation tractable since you can now generate each word sequentially and multiply the probabilities (or sum the logarithms of the probabilities for numerical stability) <br/> 
Mathematically, for a target sentence y with words y<sub>1</sub>, y<sub>2</sub>, ..., y<sub>m</sub> the joint probability can be expressed as: <br/>
![AttentionBasedNMT6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0f2035ca-a70b-4e83-9f02-b06f0c812d66) <br/>
-Using the logarithm in the probability equation has several advantages in computational term <br/>
Numerical Stability: <br/>
Probabilities can be very small numbers, and multiplying many such small probabilities (as one would do to compute the joint probability of a sequence of words) can lead to numerical underflow, where the numbers become too small for the computer to represent accurately <br/>
Additive Property: Logarithms turn products into sums, which is computationally more convenient. In machine learning algorithms, especially those that involve optimization, it's easier to work with sums than with products because sums tend to have nicer analytical properties. Gradients of sums, for instance, are easier to compute than gradients of products <br/>
-Most of the recent NMT works has a natural choice to model such a decomposition in the decoder is to use recurrent neural network (RNN) architecture <br/>
They, however, differ in terms of which RNN architectures are used for the decoder and how the encodercomputes the source sentence representation s <br/>
**Decoder's operation in an NMT system** <br/>
1. Calculate Current Hidden State h<sub>j</sub> <br/>
Use the function f, which could be an RNN, GRU, or LSTM unit, to compute the current hidden state h<sub>j</sub> by considering the source sentence representation s and the previous hidden state h<sub>j-1</sub> <br/>
​Calculate the Conditional Probability of the 
2. Calculate the Conditional Probability of the j-th word <br/>
(2)-1 Transformation Function g <br/>
Apply the transformation function g to the hidden state h<sub>j</sub>. This function produces a vector of raw scores (also known as logits), one for each word in the target language vocabulary <br/>
(2)-2 Softmax Function <br/>
Put the vector of scores through the softmax function to convert them into a probability distribution <br/>
The softmax function ensures that the scores are non-negative and sum up to 1, making them proper probabilities <br/>
(2)-3 Choose the next word <br/>
Select the word with the highest probability as the next word in the translation. This selection is based on the probability distribution produced by the softmax function <br/>
Example: <br/>
Each of these steps is performed for every new word until the end of the target sentence is reached, which is typically indicated by a special end-of-sentence token <br/>
The iterative nature of this process allows the decoder to consider each new word in the context of the words that have come before it, ensuring that the translation is coherent and contextually appropriate <br/>
-Example Walkthrough: <br/>
System is currently translating the English sentence "The house is blue" into Spanish <br/>
Condition: <br/>
It has already generated the first part of the translation: "La casa" <br/>
Now, the system is about to generate the next word in the sequence, which should be the translation of "is" <br/>
1. Calculate Current Hidden State h<sub>j</sub> <br/>
The RNN hidden state h<sub>j</sub> for the current step (let's say it's step 3, corresponding to the word "is") is computed based on the previous hidden state h<sub>j-1</sub> (from step 2, which would have been after generating "casa") and the source sentence representation s. Let's denote this abstractly as h<sub>3</sub> = f(h<sub>2</sub>, s) <br/>
This hidden state is a vector that contains information about the current context of the translation process <br/>
2. Calculate the Conditional Probability of the j-th word <br/>
(2)-1 Transformation Function g <br/>
The function g takes the hidden state h<sub>3</sub> and produces a vocabulary-sized vector of raw scores <br/>
For a simple example, let's say our vocabulary only includes four possible words for the next word in the translation: ["es", "está", "era", "fue"] <br/>
The function g outputs a score for each of these words <br/>
Let's say g(h<sub>3</sub>) gives us the vector [2.1, 0.8, -1.0, -0.5] <br/>
(2)-2 Softmax Function <br/>
The softmax function is applied to the scores to convert them into a probability distribution <br/>
Each score is exponentiated and then divided by the sum of the exponentiated scores for all words in the vocabulary, making all probabilities sum to 1 <br/>
Applying softmax to [2.1, 0.8, -1.0, -0.5] might give us something like [0.7, 0.2, 0.05, 0.05], which sums to 1 <br/>
(2)-3 Choose the next word <br/>
-The probabilities correspond to the translation options for "is": ["es", "está", "era", "fue"] <br/>
Given the context "La casa", the system uses the highest probability to select the next word <br/>
-Since "es" has the highest probability (0.7), the system would choose "es" as the next word in the translation <br/>
So now our Spanish translation reads "La casa es", and the system has correctly translated "The house is" up to this point <br/>
The system continues this process, generating one word at a time until the full translation is completed <br/>
**What f did we use?** <br/>
Stacked LSTM architecture following LSTM Unit Defined in (Zaremba et al., 2015) <br/>
-Stacked LSTM: <br/>
A neural network architecture where multiple layers of LSTMs are stacked on top of each other <br/>
The output of one layer of LSTM units is fed as input to the next layer <br/>
Stacking LSTMs helps the model to learn more complex representations and can improve its ability to handle the intricacies of language translation <br/>
-LSTM Unit Defined in (Zaremba et al., 2015): <br/>
The LSTM (Long Short-Term Memory) units are a special kind of RNN (Recurrent Neural Network) cell that are designed to capture long-range dependencies and avoid problems like vanishing or exploding gradients <br/>
The reference to Zaremba et al., 2015 suggests that a specific formulation or variant of the LSTM cell from that research is being used, which may include certain optimizations or configurations that were found to be effective <br/>
-Well-known regularization technique dropout, doesn't work well for RNN and LSTMs. So the paper introduces a simple regularization technique for RNN with LSTM units, which substantially reduces overfitting <br/>
Dropout: Dropout is a common method for preventing overfitting in neural networks <br/>
Overfitting occurs when a model learns patterns specific to the training data so well that it performs poorly on unseen data <br/>
Dropout works by randomly "dropping out" (i.e., setting to zero) a number of output features of the network during training, which helps to prevent co-adaptation of features and forces the network to develop a more robust representation <br/>
Problem: Conventional dropout was not effective for RNNs because the recurrent nature of these networks could amplify the noise introduced by dropout, leading to detrimental effects on the learning process <br/>
(The paper references prior work by Bayer et al. (2013), who explored "marginalized dropout" as proposed by Wang & Manning (2013). Marginalized dropout is a variation of dropout that aims to reduce the variance of the noise introduced by standard dropout) <br/>
Conventional dropout is like randomly turning off some lights in a building to save energy. This works fine in a building where each room has its own switch (like in standard neural networks). However, in an RNN, the rooms (neurons) are connected in a loop, like a string of Christmas lights. If you randomly turn off lights (neurons) in this loop (dropout), the next set of lights doesn't know whether it should be on or off because it depends on the previous lights in the sequence. This can create a sort of flickering effect (noise amplification) in the whole loop, making it difficult for the RNN to maintain a stable pattern of which lights should be on (which neurons should activate to predict the next part of the sequence) <br/>
**Training objective for a neural machine translation (NMT) system** <br/>
Utilizes a stacked LSTM architecture <br/>
![AttentionBasedNMT7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b060b6c9-6598-48fa-8d4f-7b748d1c3b67) <br/>
-J<sub>t</sub>: Objective function, often referred to as the loss function that the training process aims to minimize <br/>
In machine learning, especially in supervised learning, the objective function quantifies the error or the cost associated with the predictions of the model <br/>
The subscript t could denote a dependency on the parameters at a particular training time or iteration <br/>
-&Sigma: The summation symbol, indicating that we're summing over a set of terms <br/>
Ref: https://arxiv.org/abs/1409.2329 <br/>
-(x, y) &isin; D: Each (x, y) is a pair of sentences from parallel training corpus D <br/>
x is a sentence in the source language, and y is its corresponding translation in the target language <br/>
The parallel training corpus D consists of many such pairs, and the model learns to translate by learning from these examples <br/>
-`$-\log p(y|x)$`: <br/>
This term is the negative logarithm of the probability that the model assigns to the correct translation y, given the source sentence x.
The logarithm is used for numerical stability and to turn the multiplication of probabilities into a sum, as mentioned earlier <br/>
The negative sign indicates that we are looking to minimize this quantity—since the logarithm of a number between 0 and 1 is negative, minimizing the negative log probability is equivalent to maximizing the probability itself <br/>

## 3. Attention-Based Models
Two types of attention mechanisms used in neural machine translation (NMT) models: global and local attention  <br/>
Both types are used to enhance the translation process by focusing on different parts of the input sentence when translating each word in the output sentence  <br/>
-**Global Attention**:  <br/>
All Source Positions: In global attention models, when generating each target word, the model considers the entire input sentence  <br/>
It pays "attention" to all of the words in the source sentence, but not equally  <br/>
It assigns different weights to each source word to determine their relevance to the word currently being predicted in the target language  <br/>
-**Local Attention**:  <br/>
A Few Source Positions: Local attention models, on the other hand, focus on only a subset of the source positions at a time  <br/>
This means when translating a particular word, the model only looks at a small window of words around a particular point in the source sentence that it deems most relevant for the current target word  <br/>
-**Common Decoding Steps**: <br/>
Both types of attention mechanisms operate in the context of a sequence-to-sequence model with an encoder-decoder architecture, often using stacked LSTMs <br/>
At each time step t during the decoding phase: <br/>
(1)Input Hidden State(h<sub>t</sub>) <br/>
Both models first take the hidden state h<sub>t</sub> from the top layer of a stacked LSTM decoder <br/>
(2)Context Vector(c<sub>t</sub>) <br/>
They then use this hidden state to derive a context vector c<sub>t</sub>, which is a dynamic representation of the input sentence capturing the information relevant to predicting the current target word  <br/>
(3)Prediction of Current Target Word(y<sub>t</sub>) <br/>
Despite their differences in deriving c<sub>t</sub>, both global and local models use it in a similar manner afterward to help predict the current target word y<sub>t</sub>  <br/>
This typically involves combining c<sub>t</sub> with h<sub>t</sub> and other relevant information in a feedforward neural network to produce the probability distribution over the possible target words <br/>
The attention mechanism allows the model to dynamically focus on different parts of the input sentence, which is particularly useful for dealing with long input sequences and aligning parts of the input with the relevant parts of the output <br/>
-**How to compute the attentional hidden state(h̃<sub>t</sub>) in a neural machine translation system using an attention mechanism** <br/>
![AttentionBasedNMT11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f133cf7f-a465-4cd3-8a47-a4abaab7f57f) <br/>
h̃<sub>t</sub>: <br/>
The attentional hidden state at time step t <br/>
It is a new representation that combines information from both the target hidden state and the source-side context vector <br/>
It serves as a refined summary that the model will use to predict the next word in the target sequence <br/>
tanh: <br/>
The hyperbolic tangent function, a type of activation function that squashes the input values to be within the range of -1 and 1 <br/>
It helps to introduce non-linearity into the model, which is necessary for learning complex patterns <br/>
W<sub>c</sub>: <br/>
A weight matrix that is learned during training <br/>
It is used to transform the concatenated vectors into the attentional hidden state <br/>
The dimensions of W<sub>c</sub>​ would be set such that the multiplication with the concatenated vector results in a vector of the desired size for h̃<sub>t</sub> <br/>
\[ [c_t; h_t] \]: <br/>
The concatenation of the context vector(c<sub>t</sub>) and the target hidden state(h<sub>t</sub>) <br/>
The context vector(c<sub>t</sub>) contains information about which parts of the input sentence are most relevant at this particular time step <br/>
while h<sub>t</sub> contains information processed by the decoder up to the current time step <br/>
By concatenating them, the model brings together all the relevant information needed to focus on the correct parts of the input and make an accurate prediction for the next word <br/>
Equation (5) is showing how the model combines the current state of the decoder with the focused information from the input sentence (as provided by the attention mechanism) to form a vector that has all the information needed to predict the next word in the target sequence <br/>
This attentional hidden state becomes an integral part of the model's decision-making for each subsequent word it generates in the translation process <br/>
![AttentionBasedNMT10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3a9df992-efc3-4995-94cf-1a83491ee521) <br/>
Attentional vector h̃<sub>t</sub> is then fed through the softmax layer to produce the predictive distribution <br/>
### Global Attention
Consider all hidden states of the encoder when deriving the context vector(c<sub>t</sub>) <br/>
-Alignment Vector(a<sub>t</sub>(s)) <br/>
For each word in the target sequence at time step t, the model computes an alignment vector which is a distribution over the source positions <br/>
The size of this vector equals the number of time steps in the source sentence <br/>
This vector essentially 'aligns' each target word with all of the source words, assigning a weight to each source word representing its importance in generating the current target word <br/>
h<sub>t</sub>: the current target hidden state <br/>
h̅<sub>s</sub>: A particular hidden state from the source sentence <br/>
The function align is defined as a softmax over a scoring function exp(score(h<sub>t</sub>, h̅<sub>s</sub>)) <br/>
Scoring Function: The scoring function calculates a score that measures how well the inputs at positions t in the target and s in the source align with each other <br/>
There are different ways to define this scoring function; it could be a dot product or a neural network, for instance <br/>
![AttentionBasedNMT12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4570d9cd-ff12-44e2-8243-f1104a71449e) <br/>


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
