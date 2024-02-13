---
layout: post
title:  "Assignment: 2nd Week - Test Isaac_ROS_Nvblox Repository"
---
# Test Isaac_ROS_Nvblox Repository
Launch File <br/>
isaac_sim_example.launch.py, isaac_sim_humans_example.launch.py, isaac_sim_dynamics_example.launch.py, realsense_example.launch.py <br/>
realsense_humans_example.launch.py, realsense_dynamics_example.launch.py, record_realsense.launch.py, zed_example.launch.py <br/>

## [Static Reconstruction in Isaac Sim](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_isaac_sim.html) 
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
Install Isaac Sim, choosing the appropriate working environment: <br/>
=> Native, already done <br/>
(3)Start the simulation by running the following command in the terminal <br/>
![Nvblox2-3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b9006c41-4da0-44bd-899c-8687635e28f4) <br/>
(4)In another terminal, launch the Docker container using the run_dev.sh script <br/>
![Nvblox2-4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9497aa9f-d719-41c6-b810-4dc848101063) <br/>
(5)Inside the container, build and source the workspace: <br/>
Error: <br/>
2024-01-08 12:24:23 [18,263ms] [Warning] [omni.isaac.dynamic_control.plugin] Failed to find articulation at '/World/Carter_ROS/chassis_link' <br/>
2024-01-08 12:24:23 [18,263ms] [Error] [omni.isaac.dynamic_control.plugin] DcGetArticulationRootBody: Invalid or expired articulation handle <br/>
2024-01-08 12:24:23 [18,263ms] [Warning] [omni.physx.tensors.plugin] Failed to find articulation at '/World/Carter_ROS/chassis_link' <br/>
2024-01-08 12:24:23 [18,263ms] [Error] [omni.physx.tensors.plugin] Pattern '/World/Carter_ROS/chassis_link' did not match any articulations <br/>
2024-01-08 12:24:24 [18,474ms] [Warning] [omni.graph.core.plugin] /World/Carter_ROS/ActionGraph/articulation_controller: [/World/Carter_ROS/ActionGraph] OmniGraph Warning: 'NoneType' object has no attribute 'is_homogeneous' <br/>
                   (from compute() at line 112 in /home/rosexpert1/.local/share/ov/pkg/isaac_sim-2023.1.1/exts/omni.isaac.core_nodes/omni/isaac/core_nodes/ogn/python/nodes/OgnIsaacArticulationController.py) <br/>
2024-01-08 12:24:24 [18,475ms] [Error] [omni.graph.core.plugin] /World/Carter_ROS/ActionGraph/isaac_compute_odometry_node: [/World/Carter_ROS/ActionGraph] prim is not a valid rigid body or articulation root <br/>
2024-01-08 12:24:24 [18,480ms] [Error] [omni.graph.core.plugin] /World/Carter_ROS/ActionGraph/isaac_read_lidar_point_cloud_node: [/World/Carter_ROS/ActionGraph] Prim is not a Lidar Prim <br/>
2024-01-08 12:24:24 [18,812ms] [Warning] [omni.isaac.dynamic_control.plugin] Failed to find articulation at '/World/Carter_ROS/chassis_link' <br/>
2024-01-08 12:24:24 [18,812ms] [Error] [omni.isaac.dynamic_control.plugin] DcGetArticulationRootBody: Invalid or expired articulation handle <br/>
2024-01-08 12:24:24 [18,812ms] [Warning] [omni.physx.tensors.plugin] Failed to find articulation at '/World/Carter_ROS/chassis_link' <br/>
2024-01-08 12:24:24 [18,812ms] [Error] [omni.physx.tensors.plugin] Pattern '/World/Carter_ROS/chassis_link' did not match any articulations <br/>
2024-01-08 12:24:24 [18,813ms] [Error] [omni.isaac.dynamic_control.plugin] DcGetRigidBodyPose: Invalid or expired body handle <br/>
2024-01-08 12:24:24 [18,813ms] [Error] [omni.isaac.dynamic_control.plugin] DcGetRigidBodyLocalLinearVelocity: Invalid or expired body handle <br/>
2024-01-08 12:24:24 [18,813ms] [Error] [omni.isaac.dynamic_control.plugin] DcGetRigidBodyAngularVelocity: Invalid or expired body handle <br/>
terminate called without an active exception <br/>
Fatal Python error: Aborted <br/>
Solution: (Searching for it) <br/>
https://forums.developer.nvidia.com/t/static-reconstruction-in-isaac-sim-tutorial-error/279656 <br/>
![Nvblox2-23](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/66752d17-4d74-4763-870a-acbf47ac8685) <br/>
=> NVIDA's Error! Now Fixed <br/>
Correct Version: <br/>
![Nvblox2-5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0cf8565e-1f9e-4914-a3e0-f2d0e2782ae7) <br/>
![Nvblox2-6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cf7ab937-64d7-4f19-8129-0d4374200c76) <br/>
(6)Launch the pre-composed graph launch file <br/>
![Nvblox2-9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d1117977-4701-4b9c-b4a9-9da9472bbdb0) <br/>
(7)Click on the 2D Goal Pose button. You should see the mesh, costmap, and the robot moving towards the goal location, as shown at the top of this page <br/>
Successful Result: <br/>
Omniverse Screen <br/>
![Nvblox2-8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/602fb54c-eb0f-4ffb-b23e-fd5e257fdc86) <br/>
Isaac Sim Screen <br/>
![Nvblox2-7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/78242330-095a-498c-aee3-1d06e30f3fef) <br/>
Video <br/>
https://drive.google.com/file/d/12f0ArTzN-RE0IBAUIa_-tmfKkwzLIYPS/view?usp=sharing <br/>
Reference <br/>
https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_isaac_sim.html <br/>


## [Human Reconstruction in Isaac Sim](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_human_reconstruction_isaac_sim.html)
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

### Tutorial Walkthrough
Use Isaac Sim for human reconstruction in nvblox. nvblox uses the ground truth semantic segmentation coming from the simulation as input to detect humans <br/>
This demonstration relies on the extensions omni.anim.people and omni.anim.navigation to make humans navigate in the environment while the robot is moving <br/>
**Running the Demonstration Scene** <br/>
Before continuing this example, you must have successfully completed the [Static Reconstruction](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_realsense.html) in Isaac Sim <br/>
=> Successfully Completed <br/>
(1)Open the Isaac Sim terminal and export the necessary environment variables as explained in steps 2-3 of the Isaac Sim Setup Guide <br/>
(1)-1 Follow the Running Native ROS instructions to ensure that ROS 2 and the required packages are installed to successfully enable the ROS 2 Bridge in Omniverse Isaac Sim <br/>
=> Completed <br/>
(1)-2 Follow the instructions to launch Isaac Sim App Selector window <br/>
=> Completed <br/>
(2)Start the simulation by running the following command in the terminal <br/>
![Nvblox2-15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7d649c44-9e5f-49b8-99d9-94384a4722af) <br/>
(3)In another terminal, run the ROS Docker container using the run_dev.sh script: <br/>
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```
![Nvblox2-16](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a5c02b09-f9ee-4008-ad34-4e12afd43d03) <br/>
(4)Inside the container, build and source the workspace: <br/>
```
cd /workspaces/isaac_ros-dev && \
  colcon build --symlink-install && \
  source install/setup.bash
```
![Nvblox2-17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d5318937-810c-4539-9a87-dd0ef78572b8) <br/>
Error: <br/>
![Nvblox2-18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/20c7ce8b-40d3-4d30-a78e-0f151cb00c40) <br/>
Fixed Version: <br/>
![Nvblox2-24](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/36829350-aff1-46c5-a1f4-2513371d1585) <br/>
(5)Launch nvblox configured for human mapping: <br/>
```
ros2 launch nvblox_examples_bringup isaac_sim_humans_example.launch.py
```
![Nvblox2-19](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/48020731-967f-4386-b724-e943dafcde31) <br/>
Error: <br/>
![Nvblox2-20](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f080edd4-ef65-4a37-b7a3-b4a34aead23d) <br/>
Fixed Version: <br/>
![Nvblox2-25](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/931962d3-308f-4186-9fa9-d61faebb1728) <br/>
Solution for steps (4) & (5): (Searching for it...) <br/>
https://forums.developer.nvidia.com/t/encountering-file-and-package-location-issues-with-human-reconstruction-running-the-demonstration-scene-in-isaac-sim/281057 <br/>
![Nvblox2-22](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/25c90b09-0e26-4976-8822-0da5f22da036) <br/>
Deleted the Ros Benchmark Repository <br/>
Fixed Result: <br/>
Omniverse Screen <br/>
![Nvblox2-21](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7e4dec79-6fe8-4c83-b355-b15508ad58f6) <br/>
Terminal <br/>
![Nvblox2-26](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5b64cc87-8565-45af-9fcb-54f48aa42c04) <br/>
Rviz <br/>
![Nvblox2-27](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/24a40de9-c54d-4365-b040-52031c8d36b9) <br/>
Error Again: <br/>
Solution: (Searching for it...) <br/>
https://forums.developer.nvidia.com/t/encountering-file-and-package-location-issues-with-human-reconstruction-running-the-demonstration-scene-in-isaac-sim/281057 <br/>
![Nvblox2-61](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d760d467-df17-4f15-9437-9e50e8aa9d96) <br/>
Correct version for step (5): <br/>
```
ros2 launch nvblox_examples_bringup isaac_sim_dynamics_example.launch.py run_vslam:=True global_frame:=odom
```
Successful Result: <br/>
Omniverse Screen: <br/>
![Nvblox2-63](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1c6a8814-453b-4490-a012-ca9a335af255) <br/>
Rviz: <br/>
![Nvblox2-62](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/be56cc1d-fd09-4bde-b654-6017e08f5df4) <br/>
Video: <br/>
https://drive.google.com/file/d/13DloUuPTPgX6bbWMfTPeUD22Avtsx4Vb/view?usp=sharing <br/>

**Running with Custom Human Paths** <br/>
To have non-default paths taken by the humans, you can <br/>
Change the default human animation file directly on the server <br/>
Use the randomization options of the above script. To do so: <br/>



Reference <br/>
https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_human_reconstruction_isaac_sim.html <br/>


## [Dynamic Reconstruction in Isaac Sim](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_dynamic_reconstruction_isaac_sim.html)
Example to run with Isaac Sim including general dynamic reconstruction  <br/>
This tutorial demonstrates how to perform general dynamic reconstruction in nvblox with Isaac Sim. <br/>
-For more about general dynamic reconstruction in nvblox see Technical Details. <br/>
Dynamic Reconstruction  <br/>
-Human reconstruction pipeline employs a Deep Neural Network(DNN) to generate a mask image for separating human detections into a dynamic occupancy layer   <br/>
-General dynamic reconstruction pipeline maintains a (high-confidence) freespace layer dedicated to detecting dynamic objects <br/>
-Whenever an object enters freespace, it is identified as dynamic and then integrated into the dynamic occupancy layer, similar to the human reconstruction pipeline described above. <br/>
This enables the pipeline to separately reconstruct humans (or other specific objects that the DNN was trained for) and all moving objects regardless of their class or category <br/>
![Nvblox2-2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/315edd09-99f1-40c9-90ef-652e7d2b961b) <br/>
### Tutorial Walkthrough
Before continuing this example, you must have successfully completed the [Static Reconstruction](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_realsense.html) in Isaac Sim <br/>
=> Successfully Completed <br/>
(1)Open the Isaac Sim terminal and export the necessary environment variables as explained in steps 2-3 of the Isaac Sim Setup Guide <br/>
(1)-1 Follow the Running Native ROS instructions to ensure that ROS 2 and the required packages are installed to successfully enable the ROS 2 Bridge in Omniverse Isaac Sim <br/>
=> Completed <br/>
(1)-2 Follow the instructions to launch Isaac Sim App Selector window <br/>
=> Completed <br/>
(2)Start the simulation by running the following command in the terminal <br/>
(3)In another terminal, run the ROS Docker container using the run_dev.sh script: <br/>
![Nvblox2-10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/acb6da70-9867-496f-8a88-e79832acdd88) <br/>
(4)Inside the container, install isaac_ros_visual_slam <br/>
![Nvblox2-11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b1e742ac-5d56-44ad-9d2e-33e851df3a17) <br/>
(5)Inside the container, build and source the workspace: (New Step) <br/>
```
cd /workspaces/isaac_ros-dev && \
>   colcon build --symlink-install && \
>   source install/setup.bash
```
![Nvblox2-33](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d9d029a9-4e3e-41ef-ba95-de0bda54731d) <br/>
(6)Launch the pre-composed graph launch file: <br/>
```
ros2 launch nvblox_examples_bringup isaac_sim_dynamics_example.launch.py run_vslam:=True global_frame:=odom_vslam
```
Error: <br/>
Solution: (Searching for it...) <br/>
https://forums.developer.nvidia.com/t/difficulty-locating-the-nvblox-examples-bringup-package-for-dynamic-reconstruction-in-isaac-sim/281052 <br/>
![Nvblox2-48](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2eee36ee-fefe-47f6-bd7e-a9a08edf0475) <br/>
=> Delete Benchmark Package and source the workspace <br/>
Correct Version: <br/>
![Nvblox2-34](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/95866008-04cb-4420-84dd-84c87a0e66a9) <br/>
After fixing Error: <br/>
Omniverse Screen <br/>
![Nvblox2-12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/99c6837c-5bab-4000-a16f-d9369b0106f9) <br/>
Terminal <br/>
![Nvblox2-36](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/228c4e8c-7a01-4bd5-b339-a9524dcdc494) <br/>
Rviz <br/>
![Nvblox2-35](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2d6312c0-4674-494d-bc7c-2ed45e249e6f) <br/>
![Nvblox2-37](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/19e43433-c2cb-4960-9d68-2075031411fa) <br/>
Error Again: <br/>
Solution: (Searching for it...) <br/>
https://forums.developer.nvidia.com/t/difficulty-locating-the-nvblox-examples-bringup-package-for-dynamic-reconstruction-in-isaac-sim/281052 <br/>
=> Nvidia's bug <br/>
![Nvblox2-47](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9a016fb3-c026-4300-97f1-6d911eae5be3) <br/>
Correct Version: <br/>
```
ros2 launch nvblox_examples_bringup isaac_sim_dynamics_example.launch.py run_vslam:=True global_frame:=odom
```
Successful Result: <br/>
Omniverse Screen <br/>
![Nvblox2-12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/99c6837c-5bab-4000-a16f-d9369b0106f9) <br/>
Rviz <br/>
![Nvblox2-55](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bc28e62e-26e6-4e4d-a954-70ea8b29421e) <br/>
Video: <br/>
https://drive.google.com/file/d/1knmg5Dn-jy_7c966EfzqtrJq1FkuvsPY/view?usp=sharing <br/>

Reference <br/>
https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/tutorials/tutorial_dynamic_reconstruction_isaac_sim.html <br/>


Nvblox ROS 2 integration for local 3D scene reconstruction and mapping <br/>
Integration for Local 3D Scene Reconstruction and Mapping: <br/>
Nvblox is being used in conjunction with ROS 2 to perform the task reconstructing and mapping local 3D scenes. <br/>
Integrated system can take sensor data (like images or laser scans) from an environment and use it to build a three-dimensional model of that area. This is a crucial task in robotics for understanding and navigating the surrounding space. <br/>
