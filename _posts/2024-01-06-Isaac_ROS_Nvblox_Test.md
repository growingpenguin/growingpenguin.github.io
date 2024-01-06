---
layout: post
title:  "Assignment: 2nd Week - Test Isaac_ROS_Nvblox Repository"
---
# Test Isaac_ROS_Nvblox Repository
Launch File <br/>
isaac_sim_example.launch.py, isaac_sim_humans_example.launch.py, isaac_sim_dynamics_example.launch.py, realsense_example.launch.py <br/>
realsense_humans_example.launch.py, realsense_dynamics_example.launch.py, record_realsense.launch.py, zed_example.launch.py <br/>

## isaac_sim_example.launch.py
Example to run with Isaac Sim  <br/>
### Static Reconstruction in Isaac Sim
Generating a 3D reconstruction with nvblox using image and LiDAR data from Isaac Sim <br/>
The reconstruction is displayed as a 3D mesh in RVIZ.  <br/>
Nvblox also converts the reconstruction into a 2D costmap, which is fed into the Nav2 stack for path planning. <br/>
Footnote <br/>
3D mesh: Collection of vertices, edges, and faces that defines the shape of a three-dimensional object in computer graphics and 3D modeling <br/>
Vertices: Points in 3D space <br/>
Edges: Straight line segment connecting two vertices <br/>
Faces: Flat surfaces that make up the 3D shape. Formed by connecting three or more vertices <br/>
In most 3D meshes, faces are typically triangles or quadrilaterals <br/>
-When displaying a 3D reconstruction as a mesh in RViz (a common visualization tool in robotics), the mesh acts as a visual representation of the object or environment <br/> 
This can be particularly useful in robotics for understanding and analyzing the shape and features of physical spaces or objects that a robot might interact with <br/>
-2D Costmap: <br/>
costmap: grid that represents a robot's environment, where each cell in the grid corresponds to a specific area in the real world <br/>
Each cell in the costmap has a value or "cost" associated with it, indicating how desirable or undesirable it is for the robot to travel over that cell <br/> 
For example, areas with obstacles would have a high cost, making them less desirable paths, while free space would have a low cost. <br/>
The costmap can integrate data from various sensors (like LiDAR, cameras) to determine the cost values  <br/>
### Tutorial Walkthrough
(1)Complete the Nvblox Quickstart  <br/>
=> Already Done <br/>
(2)Install Isaac Sim, open the Isaac Sim terminal and export the necessary environment variables as explained in steps 1-3 of the Isaac Sim Setup Guide  <br/>
Install Isaac Sim, choosing the appropriate working environment:
=> Native, already done <br/>
Follow the Running Native ROS instructions to ensure that ROS 2 and the required packages are installed to successfully enable the ROS 2 Bridge in Omniverse Isaac Sim
Running Native ROS <br/>

Enabling the ROS Bridge Extension <br/>

Choosing ROS Bridge version in isaac-sim.sh <br/>

Setting Up Workspaces <br/>

ROS2 <br/>

Ubuntu Humble <br/>

Included ROS Packages <br/>

Building ROS 2 Workspaces with Python3.10 <br/>

Running ROS in Docker Containers <br/>

ROS Tutorials <br/>

Reference <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html  <br/>
(3) <br/>
Start the simulation by running the following command in the terminal <br/>




## isaac_sim_humans_example.launch.py
Example to run with Isaac Sim including human reconstruction  <br/>


Like a wireframe model made up of many small polygons (usually triangles or quadrilaterals) that together form the surface of the object.  <br/>
## isaac_sim_dynamics_example.launch.py
Example to run with Isaac Sim including general dynamic reconstruction  <br/>

## realsense_example.launch.py
Example to run with a RealSense camera  <br/>

## realsense_humans_example.launch.py
Example to run with a RealSense camera including human reconstruction  <br/>

## realsense_dynamics_example.launch.py
Example to run with a RealSense camera including general dynamic reconstruction <br/>

## record_realsense.launch.py
Record RealSense data to replay with the above examples  <br/>

## zed_example.launch.py
Example to run with a ZED camera <br/>


Nvblox ROS 2 integration for local 3D scene reconstruction and mapping <br/>
Integration for Local 3D Scene Reconstruction and Mapping: <br/>
Nvblox is being used in conjunction with ROS 2 to perform the task reconstructing and mapping local 3D scenes. <br/>
Integrated system can take sensor data (like images or laser scans) from an environment and use it to build a three-dimensional model of that area. This is a crucial task in robotics for understanding and navigating the surrounding space. <br/>
