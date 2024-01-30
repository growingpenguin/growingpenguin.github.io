---
layout: post
title:  "Omnigraph"
---
# GUI
## Omnigraph
OmniGraph: <br/>
Omniverse’s visual programming framework <br/>
-Provides a graph framework that can easily connect functions from multiple systems inside Omniverse <br/>
-Is also a compute framework that allows for highly customized nodes so that users can integrate their own functionality into Omniverse and automatically harness the efficient computation backend <br/>
-Inside Omniverse Isaac Sim, OmniGraph is the main engine behind the Replicators, ROS and ROS2 bridges, access to many sensors, controllers, external input/output devices, UI, and much more <br/>
-Fast introduction into the world of visual programming via OmniGraph <br/>
### Learning Objectives
Details build an action graph to control a robot in Omniverse Isaac Sim, specifically, the Jetbot <br/>
Goal: Give you a fast introduction to using Action Graphs in Omniverse Isaac Sim <br/>
### Getting Started
Prerequisites: <br/>
Review Isaac Sim Interface prior to beginning this tutorial <br/>
Check out Assemble a Simple Robot for details on how you setup your own robot <br/>
### Setting up the stage
1) On a new stage, start by right clicking and selecting create > Physics > Ground Plane <br/>
![Nvidia_Omnigraph1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6548bfaa-5089-494c-9a0a-fca6f991495d) <br/>
2) Next, use the content browser to navigate to Isaac/Robots/JetBot and click and drag jetbot.usd onto the stage <br/>
Position the jetbot just above the ground plane. When completed, the jetbot should be under /World/jetbot in the context tree and the stage should look similar to this <br/>
