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
1)On a new stage, start by right clicking and selecting Create > Physics > Ground Plane <br/>
![Nvidia_Omnigraph1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6548bfaa-5089-494c-9a0a-fca6f991495d) <br/>
2) Next, use the content browser to navigate to Isaac/Robots/JetBot and click and drag jetbot.usd onto the stage <br/>
Position the jetbot just above the ground plane. When completed, the jetbot should be under /World/jetbot in the context tree and the stage should look similar to this <br/>
![Nvidia_Omnigraph2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/56a3ed77-8be5-4213-a91b-4dda4251027b) <br/>
![Nvidia_Omnigraph3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e6f0ed1f-01c0-4e77-b074-097e2f398e60) <br/>
![Nvidia_Omnigraph18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d67f3151-b5fb-47b4-a7f6-a3d031ee7256) <br/>
Pressed F button <br/>
Depending on your default render settings, the camera of the jetbot may have a placeholder mesh (it looks like a gray Television camera) <br/>
To hide these meshes, click on the eyecon icon in the viewports, and then select Show By Type --> Cameras to hide the placeholder mesh <br/>
3)Building the graph <br/>
(3)-1 Select Window -> Visual Scripting -> Action Graph from the dropdown menu at the top of the editor <br/>
![Nvidia_Omnigraph4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/173a5a00-31f0-40a2-9fe1-fee2532edee0) <br/>
The Graph Editor will appear in the same pane as the Content browser <br/>
(3)-2 Click New Action Graph to open an empty graph <br/>
![Nvidia_Omnigraph5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/39a28aed-47b7-4c7e-b333-d24a3bea2d32) <br/>
(3)-3 Type controller in the search bar of the graph editor <br/>
![Nvidia_Omnigraph6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/fc62b0fc-b209-4d10-ac29-4e8d27451c11) <br/>
(3)-4 Drag an Articulation Controller and a Differential Controller onto the graph <br/>
![Nvidia_Omnigraph7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3927bd90-e747-41d0-9dfc-519ec470036f) <br/>
(3)-5 Articulation Controller: <br/>
Applies driver commands(In the form of force, position, or velocity) to the specified joints of any prim with an articulation root <br/>
To tell the controller which robot it’s going to control <br/>
First select the Articulation Controller node in the graph and open up the property pane. <br/>
![Nvidia_Omnigraph10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f4637240-b967-446b-8af5-cd5a04b703be) <br/>
Can either keep usePath checked and type in the path to the robot /World/jetbot in the robotPath <br/>
Can uncheck usePath and then click Add Targets near the top of the pane for input:targetPrim, and select jetbot in the pop up window <br/>
(3)-6 Differential Controller: <br/>
Computes drive commands for a two wheeled robot given some target linear and angular velocity like the Articulation Controller, it also needs to be configured <br/>
![Nvidia_Omnigraph9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6c030410-ca8b-4bd9-aa72-fcb9a01befc9) <br/>
Select the Differential Controller node in the graph, and then in the properties pane, set the wheelDistance to 0.1125, the wheelRadius to 0.03, and maxAngularSpeed to 0.2 <br/>
(3)-7 Identify joints for articulation <br/>
Articulation Controller has the needs to know which joints to articulate <br/>
-Expects this information in the form of a list of tokens or index values <br/>
![Nvidia_Omnigraph19](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5aebc282-106d-40f9-8754-18a032efd27f) <br/>
Each joint in a robot has a name and the jetbot has exactly two <br/>
Within /World/jetbot/chassis are two revolute physics joints named left_wheel_joint and right_wheel_joint <br/>
(3)-8 Add tokens <br/>
Type token into the search bar of the graph editor and add two Constant Token nodes to the graph  <br/>
![Nvidia_Omnigraph11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9278ab73-94a4-4926-bc60-2da7deddaa66) <br/>
![Nvidia_Omnigraph12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c6b8aca8-291f-43b3-af4c-fff23ba7f509) <br/>
(3)-9 Type in values <br/>
![Nvidia_Omnigraph13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/fe734950-2b6f-4470-89b2-6217b99ee9b8) <br/>
![Nvidia_Omnigraph14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/82a85e13-d77f-4ad4-8031-cdffd0ee101b) <br/>
Select one, and set it’s value to left_wheel_joint in the properties pane <br/>
Repeat this for the other constant token node, but set the value to right_wheel_joint <br/>
(3)-10 Make arrays <br/>
![Nvidia_Omnigraph15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c49c28ae-b442-48d1-b46a-afa090679a9e) <br/>
Type make array into the search bar of the graph editor and add a Make Array node to the graph <br/>
![Nvidia_Omnigraph20](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a6f75035-0f63-48ff-81ac-86f84c3b9588) <br/>
Drag and drop make array node <br/>
![Nvidia_Omnigraph21](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/db752568-4475-4fec-84a2-012382ca9545) <br/>
Select the Make Array node and click on the + icon in the inputs section of the property pane menu to add a second input <br/>
Set the arraySize to 2 as well, and then set the input type to token[] from the dropdown menu in the same pane <br/>
Finally, connect the constant token nodes to A and B of the Make Array node, and then the output of that node to the Joint Names input of the Articulation Controller node <br/>
The last node is the event node. Search for playback in the search bar of the graph editor and add an On Playback Tick node to the graph <br/>
This node will emit an execution event for every frame, but only while the simulation is playing <br/>
Connect the Tick output of the On Playback Tick node to the Exec In input of both controller nodes <br/>
Connect the Velocity Command output of the differential controller to the Velocity Command input of the articulation controller. When completed, the graph should look similar to this <br/>

Reference: <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_gui_omnigraph.html <br/>



