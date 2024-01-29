---
layout: post
title:  "Assignment: 5th Week - Follow Isaac_ROS_Depth_Segmentation Repository"
---
# Isaac ROS Depth Segmentation
## Overview
Isaac ROS Depth Segmentation <br/>
Isaac ROS Depth Segmentation provides NVIDIA hardware-accelerated packages for depth segmentation <br/>
-The isaac_ros_bi3d package uses the optimized Bi3D DNN model to perform stereo-depth estimation via binary classification, which is used for depth segmentation <br/>
-Depth segmentation can be used to determine whether an obstacle is within a proximity field and to avoid collisions with obstacles during navigation <br/>
![Compression10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5f3fed4d-12b2-4157-9eb9-e982b4645e4b) <br/>
-Bi3D is used in a graph of nodes to provide depth segmentation from a time-synchronized input left and right stereo image pair <br/>
-Images to Bi3D need to be rectified and resized to the appropriate input resolution. The aspect ratio of the image needs to be maintained; <br/>
hence, a crop and resize may be required to maintain the input aspect ratio <br/>
-The graph for DNN encode, to DNN inference, to DNN decode is part of the Bi3D node <br/>
Inference is performed using TensorRT, as the Bi3D DNN model is designed to use optimizations supported by TensorRT <br/>
-Compared to other stereo disparity functions, depth segmentation provides a prediction of whether an obstacle is within a proximity field, as opposed to continuous depth <br/>
while simultaneously predicting freespace from the ground plane, which other functions typically do not provide <br/>
-Also unlike other stereo disparity functions in Isaac ROS, depth segmentation runs on NVIDIA DLA(deep learning accelerator) <br/>
which is separate and independent from the GPU 
-For more information on disparity, refer to this page <br/>
## Quickstarts
**Isaac ROS Depth Segmentation** <br/>
(1)Set up your development environment by following the instructions here <br/>
=> Already Done <br/>
(2)Clone isaac_ros_common and this repository under ${ISAAC_ROS_WS}/src <br/>
![Depth_Segmentation1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e58c0f52-1a87-47ce-8e32-9aebe0e1be8b) <br/>
(3)Pull down a rosbag of sample data <br/>
![Depth_Segmentation2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bce2fed0-3472-4f91-bbbd-f5b7bc9c6ef9) <br/>
(4)Launch the Docker container using the run_dev.sh script <br/>
![Depth_Segmentation3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2e78cd48-ce48-4b7c-858d-c005fcadd297) <br/>
(5)Install this package’s dependencies <br/>
![Depth_Segmentation4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2c7c187a-0783-4c07-9e3c-028fe7223834) <br/>
(6)Download model files for Bi3D (refer to the Model Preparation section for more information): <br/>
![Depth_Segmentation5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c689b472-d9b5-4632-858b-855e72fd3f3f) <br/>
(7)Convert the .onnx model files to TensorRT engine plan files (refer to the Model Preparation section for more information) <br/>
![Depth_Segmentation6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f029b7d1-1f93-43c9-ac92-6ae2bfbdbb46) <br/>
(8)Run the launch file to spin up a demo of this package: <br/>
![Depth_Segmentation7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/589130db-881c-4632-9bdd-004d4f5e1821) <br/>
(9)Open a second terminal inside the Docker container: <br/>
![Depth_Segmentation8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/451c6407-91f4-496b-8f68-9c3a9c1f0303) <br/>
(10)Play the rosbag file to simulate image streams from the cameras: <br/>
![Depth_Segmentation9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/397dcb8f-382c-4f95-9c7b-5170ca6918e1) <br/>
(11)Open two new terminals inside the Docker container for visualization: <br/>
![Depth_Segmentation10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b55d18fc-78ce-47ad-b720-c0bce531954d) <br/>











## Isaac ROS NITROS Acceleration
Package is powered by NVIDIA Isaac Transport for ROS (NITROS) <br/>
Which leverages type adaptation and negotiation to optimize message formats and dramatically accelerate communication between participating nodes <br/>
## Packages
isaac_ros_bi3d <br/>
## Supported Platforms
Package is designed and tested to be compatible with ROS 2 Humble running on Jetson or an x86_64 system with an NVIDIA GPU <br/>
## Docker
Strongly recommend leveraging the Isaac ROS Dev Docker images by following these steps <br/>
This will streamline your development environment setup with the correct versions of dependencies on both Jetson and x86_64 platforms <br/>
