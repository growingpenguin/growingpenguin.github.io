---
layout: post
title:  "Assignment: 5th Week - Follow Isaac ROS DNN Stereo Depth Repository"
---
# Isaac ROS DNN Inference
## Overview
Isaac ROS DNN Stereo Depth <br/>
:GPU-accelerated package for DNN-based stereo disparity <br/>
-Stereo disparity is calculated from a time-synchronized image pair sourced from a stereo camera and is used to produce a depth image or a point cloud for a scene <br/>
-The isaac_ros_ess package uses the ESS DNN model to perform stereo depth estimation via continuous disparity prediction <br/>
-Given a pair of stereo input images, the package generates a disparity map of the left input image <br/>
![Stereo_Depth1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6b1e84e4-cfb4-4641-a926-082a0e78716b) <br/>
-ESS is used in a graph of nodes to provide a disparity prediction from an input left and right stereo image pair <br/>
-Images to ESS need to be rectified and resized to the appropriate input resolution <br/>
The aspect ratio of the image is recommended to be maintained, so the image may need to be cropped and resized to maintain the input aspect ratio <br/>
-The graph for DNN encode, DNN inference, and DNN decode is included in the ESS node <br/>
Inference is performed using TensorRT, as the ESS DNN model is designed with optimizations supported by TensorRT <br/>
ESS node is agnostic to the model dimension and disparity output has the same dimension as the ESS model <br/>

Footnote: <br/>
Stereo disparity: <br/>
Difference in coordinates of similar features within two stereo images <br/>
When capturing a scene from slightly different viewpoints(similar to how human eyes work), the same object will appear at different positions in the two images <br/>
This difference in position is what we call disparity <br/>
-In the context of computer vision and depth sensing, stereo disparity is a crucial concept used to infer depth information from two-dimensional images <br/>
-By analyzing the disparity between a pair of stereo images, algorithms can calculate the distance of objects from the camera, creating a depth map of the scene <br/>
The fundamental principle behind this process is triangulation, where the geometry of the camera setup and the disparity values are used to compute the depth for each point of interest <br/>
-Disparity is typically measured in pixels and can vary inversely with the object's distance from the camera; closer objects will have a larger disparity, while objects farther away will have smaller disparity <br/>
This information is foundational for numerous applications, including 3D reconstruction, autonomous vehicle navigation, and augmented reality, among others <br/>

## QuickStarts
### Isaac ROS ESS <br/>
(1)Set up your development environment by following the instructions here <br/>
=> Already Done <br/>
(2)Clone isaac_ros_common and this repository under ${ISAAC_ROS_WS}/src <br/>
![Stereo_Depth2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/eb41f373-97e8-4d17-b9f7-22fdced46502) <br/>
(3)Pull down a ROS Bag of sample data: <br/>
![Stereo_Depth3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/074b7b9f-ff15-4ee8-997a-b95db6f16a7f) <br/>
(4)Launch the Docker container using the run_dev.sh script: <br/>
![Stereo_Depth4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0b06da13-6edd-4a21-b8bc-138cd62cfad7) <br/>
(5)Install this package’s dependencies <br/>
![Stereo_Depth5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0cbfb793-bb27-4b72-9bcf-a332f082c0eb) <br/>
(6)Download the pre-trained ESS model from the ESS model page: <br/>



