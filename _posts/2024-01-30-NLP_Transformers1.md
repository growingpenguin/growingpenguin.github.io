---
layout: post
title:  "NLP With Transformers - Transformers Introduction"
---
# Transformers Introduction
## Encoder-Decoder Framework
Before the advent of Transformer models, **Recurrent Neural Networks(RNNs)** were the leading performers in natural language processing (NLP) <br/> 
![Transformers_NLP1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/23a92bb6-b122-4b32-b04c-22a04b4a7db6) <br/>
Figure: RNN unfolded along the time axis <br/>
-The Encoder-Decoder architecture is particularly effective for sequential data modeling such as in text processing <br/>
In this setup, the network Receives an input > Processes it >  Re-inputs a part of its output back into itself, creating a feedback loop <br/>
This mechanism allows RNNs to use a portion of the previously generated output in the subsequent step <br/>
-Additionally, RNNs transfer state information from one step to the next <br/>
This process helps in keeping track of the information from previous steps, which is crucial for making accurate predictions in sequential data tasks <br/>
-"Recurrent Neural Networks(RNNs) have been instrumental in advancing the field of machine translation <br/>
Involves mapping one language to another <br/>
![Transformers_NLP2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5103013c-b9a8-42b4-aaee-449d2a51400b) <br/>
Figure: Illustrates an Encoder-Decoder structure, which is comprised of a pair of Recurrent Neural Networks (RNNs) <br/>
(Note that in actual applications, this structure typically involves many more recurrent layers than are depicted in this figure) <br/>
-Process is typically carried out using an Encoder-Decoder or Sequence-to-Sequence architecture <br/>
(Especially when the Input and Output lengths are variable) <br/>
Encoder: <br/>
Responsible for encoding the input sequence into a numerical representation which is captured in the final hidden state <br/>
Decoder: <br/>
Takes this final hidden state and generates the output sequence <br/>
This collaborative functioning of the Encoder and Decoder allows for effective translation between languages in ML models <br/>






 
Reference: <br/>
https://seungseop.tistory.com/21 <br/>












