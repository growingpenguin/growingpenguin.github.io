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



At the end of URDF Import: Turtlebot, the robot has drivable joints, and when given a target position or velocity, it can move the joints to match the targets <br/>
However, in most cases, you want to be controlling the vehicle speed and not the individual wheel speed <br/>
