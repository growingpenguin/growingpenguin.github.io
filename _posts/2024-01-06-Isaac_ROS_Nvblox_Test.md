---
layout: post
title:  "Assignment: 2nd Week - Test Isaac_ROS_Nvblox Repository"
---
# Test Isaac_ROS_Nvblox Repository
Launch File <br/>
isaac_sim_example.launch.py, isaac_sim_humans_example.launch.py, isaac_sim_dynamics_example.launch.py, realsense_example.launch.py <br/>
realsense_humans_example.launch.py, realsense_dynamics_example.launch.py, record_realsense.launch.py, zed_example.launch.py <br/>

## [isaac_sim_example.launch.py](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_isaac_sim.html) 
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

Error: <br/>
2024-01-08 12:24:23 [18,263ms] [Warning] [omni.isaac.dynamic_control.plugin] Failed to find articulation at '/World/Carter_ROS/chassis_link'
2024-01-08 12:24:23 [18,263ms] [Error] [omni.isaac.dynamic_control.plugin] DcGetArticulationRootBody: Invalid or expired articulation handle
2024-01-08 12:24:23 [18,263ms] [Warning] [omni.physx.tensors.plugin] Failed to find articulation at '/World/Carter_ROS/chassis_link'
2024-01-08 12:24:23 [18,263ms] [Error] [omni.physx.tensors.plugin] Pattern '/World/Carter_ROS/chassis_link' did not match any articulations

2024-01-08 12:24:24 [18,474ms] [Warning] [omni.graph.core.plugin] /World/Carter_ROS/ActionGraph/articulation_controller: [/World/Carter_ROS/ActionGraph] OmniGraph Warning: 'NoneType' object has no attribute 'is_homogeneous'
                   (from compute() at line 112 in /home/rosexpert1/.local/share/ov/pkg/isaac_sim-2023.1.1/exts/omni.isaac.core_nodes/omni/isaac/core_nodes/ogn/python/nodes/OgnIsaacArticulationController.py)
2024-01-08 12:24:24 [18,475ms] [Error] [omni.graph.core.plugin] /World/Carter_ROS/ActionGraph/isaac_compute_odometry_node: [/World/Carter_ROS/ActionGraph] prim is not a valid rigid body or articulation root
2024-01-08 12:24:24 [18,480ms] [Error] [omni.graph.core.plugin] /World/Carter_ROS/ActionGraph/isaac_read_lidar_point_cloud_node: [/World/Carter_ROS/ActionGraph] Prim is not a Lidar Prim
2024-01-08 12:24:24 [18,812ms] [Warning] [omni.isaac.dynamic_control.plugin] Failed to find articulation at '/World/Carter_ROS/chassis_link'
2024-01-08 12:24:24 [18,812ms] [Error] [omni.isaac.dynamic_control.plugin] DcGetArticulationRootBody: Invalid or expired articulation handle
2024-01-08 12:24:24 [18,812ms] [Warning] [omni.physx.tensors.plugin] Failed to find articulation at '/World/Carter_ROS/chassis_link'
2024-01-08 12:24:24 [18,812ms] [Error] [omni.physx.tensors.plugin] Pattern '/World/Carter_ROS/chassis_link' did not match any articulations

2024-01-08 12:24:24 [18,813ms] [Error] [omni.isaac.dynamic_control.plugin] DcGetRigidBodyPose: Invalid or expired body handle
2024-01-08 12:24:24 [18,813ms] [Error] [omni.isaac.dynamic_control.plugin] DcGetRigidBodyLocalLinearVelocity: Invalid or expired body handle
2024-01-08 12:24:24 [18,813ms] [Error] [omni.isaac.dynamic_control.plugin] DcGetRigidBodyAngularVelocity: Invalid or expired body handle
terminate called without an active exception
Fatal Python error: Aborted
<br/>
Solution: (Searching for it) <br/>



### Tutorial Walkthrough
(1)Complete the Nvblox Quickstart  <br/>
=> Already Done <br/>
(2)Install Isaac Sim, open the Isaac Sim terminal and export the necessary environment variables as explained in steps 1-3 of the Isaac Sim Setup Guide  <br/>
Install Isaac Sim, choosing the appropriate working environment: <br/>
=> Native, already done <br/>
Follow the [Running Native ROS](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html) instructions to ensure that ROS 2 and the required packages are installed to successfully enable the ROS 2 Bridge in Omniverse Isaac Sim <br/>
ROS2 <br/>
Ubuntu 20.04 <br/>
On Ubuntu 20.04 you will need to install humble from source <br/>
Ubuntu(source) Humble <br/>
Set locale <br/>



Ensure vision_msgs_package is built from the ros2 branch. The ROS 2 Bridge in Isaac Sim depends on this package, make sure the workspace containing this package is sourced before running Isaac Sim from the same terminal  <br/>
Reference <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html  <br/>
(3)Start the simulation by running the following command in the terminal <br/>
![Nvblox2-3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b9006c41-4da0-44bd-899c-8687635e28f4) <br/>
(4)In another terminal, launch the Docker container using the run_dev.sh script <br/>




Reference <br/>
https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_isaac_sim.html <br/>


## [isaac_sim_humans_example.launch.py](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_human_reconstruction_isaac_sim.html)
Example to run with Isaac Sim including human reconstruction  <br/>
### Human Reconstruction in Isaac Sim
Demonstrates how to perform human reconstruction in nvblox with Isaac Sim <br/>
The detected humans are then visible in a separate dynamic costmap that can be used for navigation with Nav2.  <br/>
If you want to know more about human reconstruction works, see Technical Details. <br/>
Technical Details <br/>
Human Reconstruction <br/>
Additional options for mapping scenes containing people exist. <br/> 
-Humans are separated from the TSDF reconstruction into a separate layer containing an occupancy grid representing reconstructed humans <br/>
-Human segmentation is applied to each processed color frame with Isaac ROS Image Segmentation  <br/>
-The depth masker module uses the segmentation mask from the color image to separate the depth-map into human and non-human parts.  <br/>
-While the non-human labeled part of the depth frame is still forwarded to TSDF mapping, the human labeled part is processed to an occupancy grid map. <br/>
-To relax the assumption that occupancy grid maps only capture static objects, an occupancy decay step must be applied. At a fixed frequency, all voxel occupancy probabilities are decayed towards 0.5 over time. This means that the state of the map (occupied or free) becomes less certain after it has fallen out of the field of view, until it becomes unknown (0.5 occupancy probability) <br/>
![Nvblox2-1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c4066b20-fa9a-446a-a5b7-87e1666de032) <br/>

(1)Before continuing this example, you must have successfully completed the [Static Reconstruction](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_realsense.html) in Isaac Sim <br/>



Reference <br/>
https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_human_reconstruction_isaac_sim.html <br/>





## [isaac_sim_dynamics_example.launch.py](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_dynamic_reconstruction_isaac_sim.html)
Example to run with Isaac Sim including general dynamic reconstruction  <br/>
This tutorial demonstrates how to perform general dynamic reconstruction in nvblox with Isaac Sim. <br/>
-For more about general dynamic reconstruction in nvblox see Technical Details. <br/>
Dynamic Reconstruction  <br/>
-Human reconstruction pipeline employs a Deep Neural Network(DNN) to generate a mask image for separating human detections into a dynamic occupancy layer   <br/>
-General dynamic reconstruction pipeline maintains a (high-confidence) freespace layer dedicated to detecting dynamic objects <br/>
-Whenever an object enters freespace, it is identified as dynamic and then integrated into the dynamic occupancy layer, similar to the human reconstruction pipeline described above. <br/>
This enables the pipeline to separately reconstruct humans (or other specific objects that the DNN was trained for) and all moving objects regardless of their class or category <br/>
![Nvblox2-2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/315edd09-99f1-40c9-90ef-652e7d2b961b) <br/>

## [realsense_example.launch.py](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_realsense.html)
Example to run with a RealSense camera  <br/>
This tutorial demonstrates how to perform depth-camera based reconstruction using a RealSense camera, Isaac ROS Visual SLAM and Isaac ROS Nvblox. <br/>
RealSense Camera Firmware  <br/>
Example is tested and compatible with RealSense camera firmware version 5.13.0.50 <br/>
(1)Host System Setup <br/>
The ROS2 message delivery might be unreliable under high load without some small modifications to the QoS profile(especially on weaker machines) <br/>
Before running this example <br/>

Set the parameter temporarily, until reboot <br/>

Run to set the parameter permanently <br/>

See DDS tuning for more information <br/>

(2)Installing the Dependencies <br/>
Complete steps 1 and 2 described in the Nvblox Quickstart Guide to set up your development environment and clone the required repositories <br/>
Complete the Developer Environment Setup <br/>
=>Completed <br/>
Clone isaac_ros_common and this repository under ${ISAAC_ROS_WS}/src. <br/>
(2)Installing the Dependencies <br/>
Complete steps 1 and 2 described in the Nvblox Quickstart Guide to set up your development environment and clone the required repositories. <br/>

Stop Git tracking the COLCON_IGNORE file in the realsense_splitter package and remove it <br/>
(Note: The COLCON_IGNORE file was added to remove the dependency to realsense-ros for users that don’t want to run the RealSense examples) <br/>

Complete the Isaac ROS RealSense Setup to set up librealsense outside of the isaac_ros_common Docker, clone realsense_ros, and to configure the container for use with RealSense. <br/>

Launch the Docker container using the run_dev.sh script <br/>

Inside the container, install package-specific dependencies using rosdep  <br/>

Build and source the workspace  <br/>

(3)Example with RealSense Live Data <br/>
Complete the sections above <br/>
Connect the RealSense device to your machine using a USB 3 cable/port. <br/>
Run the ROS Docker container using the run_dev.sh script. <br/>
Source the workspace. <br/>
Verify that the RealSense camera is connected by running realsense-viewer <br/>
If successful, run the launch file to spin up the exampler <br/>

## [realsense_humans_example.launch.py](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_human_reconstruction_realsense.html)
Example to run with a RealSense camera including human reconstruction  <br/>

## [realsense_dynamics_example.launch.py](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_dynamic_reconstruction_realsense.html)
Example to run with a RealSense camera including general dynamic reconstruction <br/>

## [record_realsense.launch.py](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_realsense_record.html)
Record RealSense data to replay with the above examples  <br/>

## [zed_example.launch.py](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_realsense_record.html)
Example to run with a ZED camera <br/>


Nvblox ROS 2 integration for local 3D scene reconstruction and mapping <br/>
Integration for Local 3D Scene Reconstruction and Mapping: <br/>
Nvblox is being used in conjunction with ROS 2 to perform the task reconstructing and mapping local 3D scenes. <br/>
Integrated system can take sensor data (like images or laser scans) from an environment and use it to build a three-dimensional model of that area. This is a crucial task in robotics for understanding and navigating the surrounding space. <br/>
