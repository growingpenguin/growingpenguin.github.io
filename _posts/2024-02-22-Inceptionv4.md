---
layout: post
title:  "Inception v4"
---
# Overview
### Inception 
While Res-Net is more about going deeper in the neural networks when stacking layers on top of each other withou adding much more complexity,<br/>
Inception-Net is more about going wider in each of the individual layers in our modules rather than going deeper in each of the individual networks in our models <br/>
**Inception V1 Module** <br/>
![Inception1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/11aa8c34-901e-4903-a23f-198f0f47d408) <br/>
(1) Previous Layer <br/>
Input from the previous layer to this inception module in version1 <br/>
(2) 1x1 convolutions, 3x3 convolutions, 5x5 convolutions, 3x3 maxpooling <br/>
Have different kind of transformations or operations for that specific layer <br/>
-ResNet or other traditional layers  <br/>
One operation for layer like a 3x3 convolution or 5x5 convolution or max pooling layer <br/>
=> Do one specific operation or transformation for that convolutional layer <br/>
(One operation per layer like a 3x3 convolution or 5x5 convolutions or max pooling layer) <br/>
Idea behind inception is we go wider per convolution layer in the network so we do all the operations 
(3)Filter Concatenation <br/>
Do the transformations for all the operations, concatenate all of the results from those and have filter concatenation in the module <br/>
Different kind of transformations concatenated will now be fed to the next inception module <br/>
The process is repeated <br/>
Why this structure? <br/>
We want to have operations in the layer <br/>
Don't know what is the best operation or transformation to do layer by layer <br/>
Can have multiple operations or transformations layer by layer  <br/>
to choose what is the best transformation or what extracts the most useful information in this layer here from neural network or images passed through the neural network <br/>
So we can get the most useful and most exact important information from each of the individual layers by having different kind of transformations concatenated, choosing the best one and repeating this over and over again <br/>


Reference: https://www.youtube.com/watch?v=STTrebkhnIk&t=662s
