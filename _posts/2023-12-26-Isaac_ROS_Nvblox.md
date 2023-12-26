---
layout: post
title:  "Assignment: 1st Week - Follow Isaac_ROS_Nvblox Repository"
---
# Isaac ROS Nvblox
Nvblox ROS 2 integration for local 3D scene reconstruction and mapping <br/>
Integration for Local 3D Scene Reconstruction and Mapping: <br/>
Nvblox is being used in conjunction with ROS 2 to perform the task reconstructing and mapping local 3D scenes. <br/>
Integrated system can take sensor data (like images or laser scans) from an environment and use it to build a three-dimensional model of that area. This is a crucial task in robotics for understanding and navigating the surrounding space. <br/>

## Features
**-Contains ROS 2 packages for 3D reconstruction and cost maps for navigation**  <br/>
3D reconstruction: Building three-dimensional models of the environment using sensor data. <br/>
cost maps for navigation: Creating maps that help robots determine the best paths to take while avoiding obstacles. <br/>
**-"isaac_ros_nvblox" processes depth and pose to reconstruct a 3D scene in real-time and outputs a 2D costmap for Nav2** <br/>
Processes depth and pose: <br/> 
Use information about how far objects are(depth) and the position/orientation(pose) of the robot or camera to understand the environment. <br/>
Reconstruct a 3D scene in real-time: <br/>
Quickly creates a 3D model of the surroundings as the robot moves<br/>
Outputs a 2D costmap for Nav2: <br/> 
Produces a 2D map that shows where obstacles are, which is used for navigation(Nav2 is a part of ROS 2 for robot navigation). <br/>
**-The costmap is used in planning during navigation as a vision-based solution to avoid obstacles** <br/>
The 2D map (costmap) is essential for the robot's planning process. It helps the robot see and avoid obstacles, ensuring safe and efficient movement. <br/>
**-isaac_ros_nvblox is designed to work with depth-cameras and/or 3D LiDAR. The package uses GPU acceleration to compute a 3D reconstruction and 2D costmaps using nvblox, the underlying framework-independent C++ library**. <br/>
GPU acceleration: Uses the processing power of a Graphics Processing Unit (GPU) to speed up calculations. <br/>
nvblox: A core library written in C++ that doesn't depend on any specific framework, used for making these calculations. <br/>
<br/>
## How NvBlox Operates
![Nvblox1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6ed28fab-86ca-487b-b11d-b743e78144f7)
Graph that uses isaac_ros_nvblox <br/>
(1)Takes Depth image, Color image, and Pose as Input <br/>
(2)Computes a 3D scene reconstruction on the GPU  <br/>
-VSLAM:Pose is computed using visual_slam, or some other pose estimation node <br/>
(3)The reconstruction is sliced into an output cost map which is provided through a cost map plugin into Nav2 <br/>


Above is a typical graph that uses isaac_ros_nvblox. Nvblox takes a depth image, a color image, and a pose as input, with which it computes a 3D scene reconstruction on the GPU. In this graph the pose is computed using visual_slam, or some other pose estimation node. The reconstruction is sliced into an output cost map which is provided through a cost map plugin into Nav2. An optional colorized 3D reconstruction is delivered into rviz using the mesh visualization plugin. Nvblox streams mesh updates to RViz to update the reconstruction in real-time as it is built.

Reference: <br/>
https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_nvblox?tab=readme-ov-file <br/>
