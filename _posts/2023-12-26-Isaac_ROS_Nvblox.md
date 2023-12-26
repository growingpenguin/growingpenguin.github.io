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
**(1)Takes Depth image, Color image, and Pose as Input** <br/>
Depth Image: <br/>
Type of image where each pixel value represents the distance from the camera to the object in the scene.  <br/> 
Often used in 3D modeling and robotics because they provide crucial information about the physical layout of the environment. <br/>
Color Image: <br/>
Standard photographic image that captures the visual appearance of the scene in color. It helps in identifying objects and their features based on their colors and textures. <br/>
Pose: <br/>
Position and orientation of the camera(or the robot carrying the camera) in the environment. <br/>
Includes data like where the camera is located, which direction it's facing, and its tilt or angle. <br/> 
This information is vital for understanding how the camera is situated relative to the objects it's capturing in its images. <br/>
**(2)Computes a 3D scene reconstruction on the GPU**  <br/>
-VSLAM:Pose is computed using visual_slam, or some other pose estimation node <br/>
**(3)Plugin** <br/>
Cost map plugin <br/>
:Reconstruction is sliced into an output cost map which is provided through a cost map plugin into Nav2 <br/>
Footnote <br/>
Reconstruction is sliced into an output cost map: <br/>
After NvBlox completes the 3D reconstruction of the environment (using depth, color images, and pose), this reconstructed model is then processed to create a "cost map." A cost map is a special type of map used in robotics. It represents the environment in a way that helps a robot determine where it can and cannot, or should and should not, go. The term "sliced" here means that the 3D model is converted into a format suitable for navigation, usually a 2D map. <br/>
Provided through a cost map plugin into Nav2: <br/>
This cost map is then made available to Nav2 (the navigation system in ROS 2) through a specific software component, known as a "plugin." A plugin is like an add-on that provides extra features or functionality. In this case, the cost map plugin allows Nav2 to access and use the cost map for navigation purposes. <br/>
Mesh Visualization plugin <br/>
:An optional colorized 3D reconstruction is delivered into rviz using the mesh visualization plugin <br/>
Colorized 3D Reconstruction:  <br/>
This is essentially a 3D model of the environment that includes color information, making it visually detailed and realistic. <br/>
Delivered into rviz:  <br/>
Rviz is a visualization tool used in ROS (Robot Operating System) to visualize different types of data from robots, like sensor data, robot model, etc. <br/>
Using the mesh visualization plugin:  <br/>
The 3D model is integrated into rviz using another plugin, specifically designed for this purpose. This plugin is called a "mesh visualization plugin," and it allows users to see the 3D colorized reconstruction directly within the rviz environment. <br/>
**(4)Nvblox streams mesh updates to RViz to update the reconstruction in real-time as it is built.** <br/>
Optional colorized 3D reconstruction is delivered into rviz using the mesh visualization plugin: <br/>
Alongside the creation of a cost map for navigation, NvBlox also has the capability to generate a visual representation of the 3D reconstruction. <br/>

## Quick Start
(1)Complete the Developer Environment Setup <br/>
Development flow currently supported by Isaac ROS is to build on your target platform. <br/>
Setup ROS 2 Humble in your host machine with the Isaac ROS Buildfarm <br/>
Setup dependencies with rosdep OR you can use the Isaac ROS Dev Docker-based development environment through run_dev.sh. <br/>
Footnote <br/>
ROS 2 Humble: Version of the Robot Operating System 2 (ROS 2), a popular software framework used in robotics <br/>
Host Machine: Own computer, where you do your development work <br/>
Isaac ROS Buildfarm: Specific setup or tool provided by Isaac ROS to help you install and configure ROS 2 Humble on your computer. <br/>
Setup dependencies with rosdep: "rosdep" is a tool in ROS that helps you install software dependencies. Dependencies are additional software packages that Isaac ROS needs to function properly. <br/>
<br/>
Questions? <br/>
Graph에서 U-NET의 역할은 무엇? <br/>

Reference: <br/>
https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_nvblox?tab=readme-ov-file <br/>
https://nvidia-isaac-ros.github.io/getting_started/dev_env_setup.html <br/>
