---
layout: post
title:  "Assignment: 4th Week - Driving TurtleBot via ROS messages"
---

# Introductory 
## [Driving TurtleBot via ROS messages](https://docs.omniverse.nvidia.com/isaacsim/latest/ros_tutorials/tutorial_ros_drive_turtlebot.html)
ROS bridge comes with a few popular ros topics that are packaged for ease of use <br/>
(More details are in the ROS & ROS2 Bridge) <br/>
Focus on the procedures in using them <br/>
-Steps to connect Omniverse Isaac Sim to ROS can be done in? <br/>
Entirely in the UI <br/>
Scripting inside the extension workflow <br/>
Scripting inside the standalone Python workflow <br/>
(Refer to Isaac Sim Workflows for details of different workflows) <br/>
Demonstrate the UI method using existing Omnigraph nodes <br/>
### Learning Objectives
(1)Enable a Turtlebot3 to drive around and subscribe to a twist message through the ROS network <br/>
(2)Learn to Add controllers to Turtlebot3 <br/>
(3)Introduce the ROS bridge and ROS OmniGraph (OG) nodes <br/>
(4)Setup the robot to be driven by a ROS Twist message <br/>
### Getting Started
Prerequisites <br/>
Have a rigged Turtlebot, or completed URDF Import: Turtlebot <br/>
ROS bridge enabled <br/>
roscore is running <br/>
### Main Concepts
**Driving the Robot** <br/>
Review <br/>
At the end of URDF Import: <br/>
Turtlebot(the robot) <br/>
Has drivable joints  <br/>
When given a target position or velocity, can move the joints to match the targets <br/>

However, in most cases, you want to be controlling the vehicle speed and not the individual wheel speed. Therefore we first want to add the appropriate controllers. In the case of Turtlebot3, a wheeled-robot with two wheels, the nodes needed are Differential Controller and Articulation Controller. The Differential Controller node convert vehicle speed to wheel speed, and Artciulation Controller node send the commands to the joint drives.

Detailed instructions on how to connect these nodes can be found in OmniGraph for a similar robot (NVIDIA Jetbot), so we won’t go into details here.

