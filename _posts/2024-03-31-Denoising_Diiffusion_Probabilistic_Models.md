---
layout: post
title:  "Denoising Diffusion Probabilistic Models"
---

# Denoising Diffusion Probabilistic Models
## Pre-study 
**Diffusion Probabilistic Models**: <br/>
A type of generative model used in machine learning <br/>
Generative models are designed to generate new data samples that resemble a given dataset <br/>
-Diffusion models learn to create new images by starting from random noise and then step-by-step removing that noise (denoising) to reveal a clear picture <br/>
They learn how to do this by looking at lots of examples during their training phase <br/>
By understanding the reverse process of going from a detailed picture back to noise, they essentially learn the "recipe" for creating similar pictures from scratch <br/>
So, after their training, when you give them random noise, they can apply what they've learned to synthesize new images that look like the ones they were trained on but are entirely new creations <br/>
This ability makes diffusion models quite powerful for generating high-quality and diverse images <br/>
-Objective of Diffusion Models: <br/>
The ultimate goal of diffusion models is indeed to create new images that resemble the type of images they were trained on <br/>
-Process <br/>
Training Phase:  <br/>
(1)Starting with Clear Images:  <br/>
The model begins with clear, target images from the dataset. These images serve as the targets or examples that the model will learn to generate <br/>
(2)Forward Process: Adding Noise  <br/>
The model doesn't learn to create images directly from scratch <br/>
Instead, it learns a forward process where it adds noise to these clear images in several steps, making them increasingly resemble random noise  <br/>
Crucial because it teaches the model about the structure and details of the images at every level of degradation, essential for the reverse process <br/>
(3) Reverse Process: Remove noise <br/>
Starting from a state of random noise, the model uses the knowledge gained during the forward process to progressively remove noise <br/>
This reverse process synthesizes new images by essentially 'cleaning up' the noise, adding back the details and structure until it forms a coherent image that resembles the types of images seen during training <br/>
Summary: <br/>
Learning to generate by first learning to destroy (in a controlled manner) and then reversing that destruction <br/> 
This learning process is what enables diffusion models to produce new images that are both diverse and visually similar to their training datasets <br/>

## Abstract
**What this paper is about** <br/>
High quality image synthesis results using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics <br/>






