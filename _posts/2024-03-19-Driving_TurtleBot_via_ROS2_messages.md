---
layout: post
title:  "Driving TurtleBot via ROS2 messages"
---

# Driving TurtleBot via ROS messages
## Objective
ROS bridge comes with a few popular rostopics that are packaged for ease of use <br/>
More details are in the [ROS & ROS2 Bridge](https://docs.omniverse.nvidia.com/isaacsim/latest/features/external_communication/ext_omni_isaac_ros_bridge.html#isaac-sim-ros-bridge) <br/>
Here we will focus on the procedures in using them <br/>

## Learning Objectives
Example: Enable a Turtlebot3 to drive around and subscribe to a twist message through the ROS network <br/>
-Add controllers to Turtlebot3 <br/>
-Introduce the ROS bridge and ROS OmniGraph (OG) nodes <br/>
-Setup the robot to be driven by a ROS2 Twist message <br/>

## Getting Started
**Important** <br/>
Make sure to source your ROS 2 installation from the terminal before running Isaac Sim. If sourcing ROS 2 is a part of your bashrc then Isaac Sim can be run directly <br/>
![Driving_TurtleBot_via_ROS2_messages1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2329fe05-efcf-4a7b-93e3-e982195a5ae8) <br/>
**Prerequisite** <br/>
Having a rigged Turtlebot, or completed URDF Import: Turtlebot <br/>
=> Already Done <br/>
Completed ROS & ROS 2 Installation so that the necessary environment variables are set and sourced before launching Omniverse Isaac Sim, and ROS2 extension is enabled <br/>
=> Already Done <br/>

## Main Concepts
### Driving the Robot
First want to add the appropriate controllers <br/>
In the case of Turtlebot3, a wheeled-robot with two wheels, the nodes needed are Differential Controller and Articulation Controller <br/>
Differential Controller node: Convert vehicle speed to wheel speed <br/>
Artciulation Controller node: Send the commands to the joint drives <br/>
Detailed instructions on how to connect these nodes can be found in OmniGraph for a similar robot (NVIDIA Jetbot) <br/>
**Setting up the Stage** <br/>
=> Already Done <br/>
**Building the graph** <br/>
(1)Select Window -> Visual Scripting -> Action Graph from the dropdown menu at the top of the editor <br/>
Graph Editor will appear in the same pane as the Content browser <br/>
![Driving_TurtleBot_via_ROS2_messages2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7adf27ba-35e5-48ae-abc2-03984f67fa09) <br/>
(2)Click New Action Graph to open an empty graph <br/>
![Driving_TurtleBot_via_ROS2_messages3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/aede3de3-e4ba-40d0-b7a8-b3539d3b125b) <br/>
![Driving_TurtleBot_via_ROS2_messages4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ad9b3269-71e6-4704-92a2-4ad878560fe3) <br/>
(3)Type controller in the search bar of the graph editor, and drag an Articulation Controller and a Differential Controller onto the graph <br/>
![Driving_TurtleBot_via_ROS2_messages5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9d1bbd52-2b15-480b-9f5b-b86965511212) <br/>
![Driving_TurtleBot_via_ROS2_messages6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7ceaf649-c949-4f52-acb3-0a886816cc8d) <br/>
(4)Articulation Controller Function & Use Controller <br/>
Articulation Controller: <br/>
Applies driver commands (in the form of force, position, or velocity) to the specified joints of any prim with an articulation root <br/>
Tell the controller which robot it’s going to control <br/>
![Driving_TurtleBot_via_ROS2_messages7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6f96abf9-2b1d-4da7-9d1a-233769178e7e) <br/>
Select the Articulation Controller node in the graph > Open up the property pane <br/>
![Driving_TurtleBot_via_ROS2_messages8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/191eb5ff-6ea6-4806-9e14-e8e4eea2f771) <br/>
![Driving_TurtleBot_via_ROS2_messages9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/277bba7a-ec90-40b5-842d-d0680c80504b) <br/>
Uncheck usePath and then click Add Targets near the top of the pane for input:targetPrim > Select turtlebot3_burger in the pop up window <br/>
(5)Differential Controller Function & Use Controller <br/>
Differential Controller: <br/>
Computes drive commands for a two wheeled robot given some target linear and angular velocity <br/>
Like the Articulation Controller, it also needs to be configured <br/>
![Driving_TurtleBot_via_ROS2_messages10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dd47023b-416d-4323-a8af-2091a72e07c0) <br/>
Select the Differential Controller node in the graph and then in the properties pane, set the wheelDistance to 0.1125, the wheelRadius to 0.03, and maxAngularSpeed to 0.2 <br/>
(6)Select joints articulate <br/>
The Articulation Controller also needs to know which joints to articulate <br/>
Expects this information in the form of a list of tokens or index values <br/>
Each joint in a robot has a name and the turtlebot3_burger has exactly two joints that are needed to articulate, because they are the revolute joints associated with the wheels that make the robot move <br/>
![Driving_TurtleBot_via_ROS2_messages11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/642d1c3d-c18c-4c97-b0ad-f7eb8774ec75) <br/>
Verify this by examining the jetbot in the stage context tree. Within /World/turtlebot3_burger/base_link are two revolute physics joints named wheel_left_joint and wheel_right_joint <br/>
(7)Add two Constant Token nodes <br/>
![Driving_TurtleBot_via_ROS2_messages12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/98477be2-0216-4942-b882-5709b82f96d5) <br/>
![Driving_TurtleBot_via_ROS2_messages13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4ad19ccd-857c-4bf3-b2c0-9bbb6ff9ac62) <br/>
Type token into the search bar of the graph editor and add two Constant Token nodes to the graph <br/>
![Driving_TurtleBot_via_ROS2_messages14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/57a1ff79-dd54-4b36-a355-106feca2db96) <br/>
![Driving_TurtleBot_via_ROS2_messages15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f20af7d8-8321-4398-ace3-181fad592f4b) <br/>
Select one, and set it’s value to wheel_left_joint in the properties pane. Repeat this for the other constant token node, but set the value to wheel_right_joint <br/>
![Driving_TurtleBot_via_ROS2_messages16](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d16594a8-2563-4123-a9f9-99874c901bca) <br/>
![Driving_TurtleBot_via_ROS2_messages17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d2ce5232-b527-4a94-95cc-86939c2a9e10) <br/>
Type make array into the search bar of the graph editor and add a Make Array node to the graph <br/>
![Driving_TurtleBot_via_ROS2_messages18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3df4317d-6694-4f03-8fab-29eb5e4ce3d8) <br/>
Select the Make Array node and click on the + icon in the inputs section of the property pane menu to add a second input <br/>
![Driving_TurtleBot_via_ROS2_messages19](https://github.com/grow <bingpenguin/growingpenguin.github.io/assets/110277903/055f4b21-143d-4481-9107-d9bbcf473189) <br/>
Set the arraySize to 2 as well, and then set the input type to token[] from the dropdown menu in the same pane <br/>
![Driving_TurtleBot_via_ROS2_messages20](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/401d4e7b-aded-4a12-96b5-78b98574643c) <br/>
Finally, connect the constant token nodes to A and B of the Make Array node, and then the output of that node to the Joint Names input of the Articulation Controller node
(7)Event Node <br/>
The last node is the event node <br/>
![Driving_TurtleBot_via_ROS2_messages21](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8194e856-12e0-48b9-ad37-27e079f9684a) <br/>
![Driving_TurtleBot_via_ROS2_messages22](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3fc215df-fefc-4ce2-b9a6-7b706f00bead) <br/>
Search for playback in the search bar of the graph editor and add an On Playback Tick node to the graph <br/>
This node will emit an execution event for every frame, but only while the simulation is playing <br/>
![Driving_TurtleBot_via_ROS2_messages23](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/54f48486-d294-495f-a05d-511884d84726) <br/>
Connect the Tick output of the On Playback Tick node to the Exec In input of both controller nodes <br/>
![Driving_TurtleBot_via_ROS2_messages24](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7686a9bc-83b4-4db7-b1ab-3fcb1d881cc3) <br/>
Connect the Velocity Command output of the differential controller to the Velocity Command input of the articulation controller. When completed, the graph should look similar to this <br/>
Completed <br/>
![Driving_TurtleBot_via_ROS2_messages24](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7686a9bc-83b4-4db7-b1ab-3fcb1d881cc3) <br/>
(8)Play <br/>
Press the play button and select the Differential Controller Node in the graph <br/>
Click and drag on either the angular or linear velocity values in the properties pane to change it’s value (or just click and type in the desired value) <br/>

Select one, and set it’s value to left_wheel_joint in the properties pane. Repeat this for the other constant token node, but set the value to right_wheel_joint. Type make array into the search bar of the graph editor and add a Make Array node to the graph. Select the Make Array node and click on the + icon in the inputs section of the property pane menu to add a second input. Set the arraySize to 2 as well, and then set the input type to token[] from the dropdown menu in the same pane. Finally, connect the constant token nodes to A and B of the Make Array node, and then the output of that node to the Joint Names input of the Articulation Controller node.





At the end of URDF Import: Turtlebot, the robot has drivable joints, and when given a target position or velocity, it can move the joints to match the targets <br/>
However, in most cases, you want to be controlling the vehicle speed and not the individual wheel speed <br/>
