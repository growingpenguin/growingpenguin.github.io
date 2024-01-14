---
layout: post
title:  "Assignment: 2nd Week - Follow Isaac_ROS_Freespace Segmentation Repository"
---
# Isaac ROS Freespace Segmentation
Isaac ROS Freespace Segmentation: <br/>
ROS2 package to produce occupancy grids for navigation <br/>
-By processing a freespace segmentation mask with the pose of the robot relative to the ground, Bi3D Freespace produces an occupancy grid for Nav2, which is used to avoid obstacles during navigation.  <br/>
-This package is GPU accelerated to provide real-time, low latency results in a robotics application. Bi3D Freespace provides an additional occupancy grid source for mobile robots (ground based). <br/>
-isaac_ros_bi3d is used in a graph of nodes to provide a freespace segmentation mask as one output from a time-synchronized input left and right stereo image pair <br/>
-The freespace mask is used by isaac_ros_bi3d_freespace with TF pose of the camera relative to the ground to compute planar freespace into an occupancy grid as input to Nav2  <br/>
-There are multiple methods to predict the occupancy grid as an input to navigation <br/> 
None of these methods are perfect; each has limitations on the accuracy of its estimate from the sensor providing measured observations.  <br/>
Each sensor has a unique field of view, range to provide its measured view of the world, and corresponding areas it does not measure.  <br/>
-Bi3D Freespace provides a diverse approach to identifying obstacles from freespace.  <br/>
Stereo camera input used for this function is diverse relative to lidar, and has a better vertical field of view than most lidar units, allowing for perception of low lying obstacles that lidar can miss.  <br/>
Bi3D Freespace provides a robust, vision-based complement to lidar occupancy scanning.  <br/>

## Isaac ROS NITROS Acceleration
This package is powered by NVIDIA Isaac Transport for ROS (NITROS), which leverages type adaptation and negotiation to optimize message formats and dramatically accelerate communication between participating nodes.  <br/>

## QuickStart
(1)Set up your development environment <br/>
Already Done <br/>
(2)Clone isaac_ros_common and this repository under ${ISAAC_ROS_WS}/src  <br/>
![FreespaceSegmentation9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/61bc70eb-c569-4da9-b5f0-0126d05c5d7b) <br/>
Already Done <br/>
Clone isaac_ros_depth_segmentation repository (Thanks NVIDA) <br/>
![FreespaceSegmentation22](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2aa54d86-73df-4571-bd46-adf0762bfacc) <br/>

(3)Pull down a rosbag of sample data  <br/>
Error: <br/>
![FreespaceSegmentation2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dc3cdef3-f657-4720-970f-e2c3919951c7) <br/>
Solution: <br/>
![FreespaceSegmentation3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3faf8ef4-8903-40a5-85a9-3a7ecc24da0c) <br/>
isaac_ros_depth_segmentation file doesn't exist. This is the reason for the error <br/>
![FreespaceSegmentation4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/259bbd19-6adc-4df5-a27e-5f2dd0b50ac4) <br/>
=>Realized I had the wrong file name, so I went back to step2 and cloned an additional repository called isaac_ros_depth_segmentation <br/> 
Correct version: <br/>
![FreespaceSegmentation24](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b50aed8c-d392-4ff4-a321-4b28ec57f3d6) <br/>


(4)Launch the Docker container using the run_dev.sh script <br/>
Error: <br/>
![FreespaceSegmentation11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b817c811-4220-4c4f-89da-8ad3e69fd0b5) <br/>
Solution: <br/>
https://github.com/git-lfs/git-lfs/issues/3964 <br/>
Similar Issues: <br/>
https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_map_localization/issues/19 => Not so helping.. <br/>
https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common/issues/104 => Someone with the same error who posted on 2023-11-30, asked whether solved the problem <br/>
https://forums.developer.nvidia.com/t/isaac-ros-freespace-segmentation-launch-error-in-docker-container/277741 => MY question posted on the NVIDIA Forum <br/>
(5)Install this package’s dependencies <br/>
![FreespaceSegmentation12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3947acde-1be4-48ad-8233-8c0d6039d8d6) <br/>
(6)Download model files for Bi3D (refer to the Model Preparation section for more information) <br/>
![FreespaceSegmentation13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a561cb71-5e6b-4e11-8f95-894fbcb4ef1d) <br/>
(7)Convert the .onnx model files to TensorRT engine plan files (refer to the Model Preparation section for more information) <br/>
If using x86_64: <br/>
![FreespaceSegmentation14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/33ec845d-1edb-4993-95e7-2a5d9a2403a4) <br/>
![FreespaceSegmentation15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ba5e1446-0d77-4f86-a9ac-dbc838a7392d) <br/>
(8)Run the launch file to spin up a demo of this package <br/>
![FreespaceSegmentation16](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3a7feca4-4b47-4d3d-b54a-03d800a3b889) <br/>
Error: <br/>
![FreespaceSegmentation17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f76d7187-7a24-4e0d-ad6f-3b59931b7d11) <br/>
Solution: (Searching for it) <br/>
https://forums.developer.nvidia.com/t/isaac-ros-freespace-segmentation-quickstart-demo-launch-file-error/278116 <br/>
(9)Open a second terminal inside the Docker container <br/>
![FreespaceSegmentation20](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/beee0269-c6af-432e-8fb1-a7e59d76bd8b) <br/>
(10)Visualize the occupancy grid in RViz <br/>
![FreespaceSegmentation18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bddbec4e-ad94-4789-ac9b-8d52d011fc47) <br/>
In the left pane, change Fixed Frame to base_link <br/>
![FreespaceSegmentation19](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ba7443ce-2844-4d96-a9f2-3cd9321104b2) <br/>
In the left pane, click the Add button, then select By topic followed by Map to add the occupancy grid <br/>
Click Add > Select By Topic > Map <br/>
![FreespaceSegmentation21](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/da782996-9906-4071-a643-aa0c92cbd7aa)


![FreespaceSegmentation27](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e6a42de7-a25d-4eec-b029-53338362b3e4)


Reference: <br/>
https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_freespace_segmentation/isaac_ros_bi3d_freespace/index.html#quickstart <br/>



