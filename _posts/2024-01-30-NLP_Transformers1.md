---
layout: post
title:  "NLP With Transformers - Transformers Introduction"
---
# Transformers Introduction
## Encoder-Decoder Framework
![Transformers_NLP1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/23a92bb6-b122-4b32-b04c-22a04b4a7db6)
Before the advent of Transformer models, **Recurrent Neural Networks(RNNs)** were the leading performers in natural language processing (NLP) <br/> 
-The Encoder-Decoder architecture is particularly effective for sequential data modeling such as in text processing <br/>
In this setup, the network receives an input > processes it >  re-inputs a part of its output back into itself, creating a feedback loop <br/>
This mechanism allows RNNs to use a portion of the previously generated output in the subsequent step <br/>
-Additionally, RNNs transfer state information from one step to the next <br/>
This process helps in keeping track of the information from previous steps, which is crucial for making accurate predictions in sequential data tasks <br/>








