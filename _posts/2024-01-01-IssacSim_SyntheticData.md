---
layout: post
title:  "Assignment: 1st Week - Nvidia IssacSim Synthetic Data Generation"
---

# Nvidia IssacSim Synthetic Data Generation
For Synthetic data generation, Omniverse has the extension called replicator, and basically provides a means to collect data for learning. It can randomize objects in the scene, and use various annotaters to collect various data and provides writers how to write this data to either disk or the cloud <br/>
Core componenets is the sementic schema editor, so it is important to annotate things in your scene so you basically label them with their classes this also shows up in the forum that users don't get data and that happens because the scene is not annotated. <br/>
## Semantic Schema Editor 
Selecting an annotater we want to see => Insert segmentation which requires the scene to be enabled (ex. Instance Segmentation) <br/>
-> We can see aov in action. For every frame, you would have a different color <br/>
If the scene is not labeled <br/>
Create a cube, show sementic segmentation, you do not get anything and then if we would not enable them, it appears! <br/>

## Visualizer
Click button Sensors -> Can choose various annotaters what you want to visualize <br/>
-Can visualize color, depth(Distance to camera or focal point or image plane) <br/>
-Whenever you get data from an annotator and you don't know what shape or type it is, look over the documentation and it will provide all the information <br/>
-Annotator Documentation: Go over all annotators and it provides extra data and demos and what to expect the output data to look like <br/>
https://docs.omniverse.nvidia.com/extensions/latest/ext_replicator/annotators_details.html <br/>
-Annotator example <br/>
Ldr Color (Get channels, and what type of data will come out) <br/>

## Annotator Registry
Replicator uses omnigraph to generate this. Many users did not really understand the workflow how this happens, so basically replicator replicator has the python script and and these scripts generate the graph which will then collect the data  

## Isaac Replicator 
Builds on top of the replicator extension and has various example tutorials which makes more sense on the simulation part and also various UIs like helper functions or extensions built on top of replicator to annotate the data, it is important to have your scene labeled. UI helps automatically either frames, and then click add and it will label them given some rules or quickly annotate whole scenes given the prem names. <br/>
-Gives an example how you can traverse your stage and apply various roles on your scene to label it. <br/>

## The Synthetic Data Recorder 
Recorder uses a writer from Replicator, it wraps it as an extension and then in UI you can select various cameras the ovs you want to output, the number of frames, and it will generate images in the folder you want to do so. So this is a useful tool for quickly debugging on how the data looks like or testing how it will look like as an end product <br/>

