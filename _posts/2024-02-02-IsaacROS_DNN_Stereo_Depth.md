---
layout: post
title:  "Assignment: 5th Week - Follow Isaac ROS DNN Stereo Depth Repository"
---
# Isaac ROS Stereo Depth
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
For ESS: <br/>
![Stereo_Depth6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5c89d6df-ce98-428e-a158-aeab34d89a68) <br/>
![Stereo_Depth7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/54cb593f-bf7b-4064-b81c-94c4aa3a5ca3) <br/>
For Light ESS: <br/>
![Stereo_Depth8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9eef8eae-0f0a-4bdd-bd95-6fd8b1b393de) <br/>
![Stereo_Depth9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f5555f1d-56f1-40a5-9e57-f1804382082f) <br/>
(7)Convert the encrypted model (.etlt) to a TensorRT engine plan: <br/>
![Stereo_Depth10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/175f6fd0-06a4-49a0-afb9-34bacccde09e) <br/>
For ESS: <br/>
Error: <br/>
![Stereo_Depth11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5d541dd5-ab64-434c-8469-0cced035bd02) <br/>
[WARNING] onnx2trt_utils.cpp:377: Your ONNX model has been generated with INT64 weights, while TensorRT does not natively support INT64. Attempting to cast down to INT32.  <br/>
[INFO] Detected input dimensions from the model: (1, 3, 576, 960)  <br/>
[INFO] Detected input dimensions from the model: (1, 3, 576, 960)  <br/>
[INFO] Model has no dynamic shape. <br/>
[INFO] [MemUsageChange] Init cuBLAS/cuBLASLt: CPU +854, GPU +368, now: CPU 1731, GPU 4051 (MiB) <br/>
[INFO] [MemUsageChange] Init cuDNN: CPU +125, GPU +60, now: CPU 1856, GPU 4111 (MiB) <br/>
[INFO] Local timing cache in use. Profiling results in this builder pass will not be stored. <br/>
[WARNING] Skipping tactic 0x0000000000000000 due to Myelin error: autotuning: CUDA error 3 allocating 0-byte buffer:  <br/>
[WARNING] Skipping tactic 0x0000000000000000 due to Myelin error: autotuning: CUDA error 3 allocating 0-byte buffer:  <br/>
[WARNING] Skipping tactic 0x0000000000000000 due to Myelin error: autotuning: CUDA error 3 allocating 0-byte buffer:  <br/>
[ERROR] 10: [optimizer.cpp::computeCosts::3712] Error Code 10: Internal Error (Could not find any implementation for node {ForeignNode[853...Softmax_136]}.) <br/>
[ERROR] Unable to create engine <br/>
Segmentation fault (core dumped) <br/>
For Light ESS: <br/>
![Stereo_Depth12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/56836821-a2a2-4983-a4af-a17dd76e6c8b) <br/>\
Error: <br/>

Solution: (Searching for it...) <br/>
[WARNING] onnx2trt_utils.cpp:377: Your ONNX model has been generated with INT64 weights, while TensorRT does not natively support INT64. Attempting to cast down to INT32 <br/>
[INFO] Detected input dimensions from the model: (1, 3, 288, 480) <br/>
[INFO] Detected input dimensions from the model: (1, 3, 288, 480) <br/>
[INFO] Model has no dynamic shape. <br/>
[INFO] [MemUsageChange] Init cuBLAS/cuBLASLt: CPU +854, GPU +348, now: CPU 1729, GPU 4043 (MiB) <br/>
[INFO] [MemUsageChange] Init cuDNN: CPU +126, GPU +60, now: CPU 1855, GPU 4103 (MiB) <br/>
[INFO] Local timing cache in use. Profiling results in this builder pass will not be stored. <br/>
[INFO] Some tactics do not have sufficient workspace memory to run. Increasing workspace size will enable more tactics, please check verbose output for requested sizes. <br/>
[WARNING] Skipping tactic 0x0000000000000000 due to Myelin error: autotuning: CUDA error 3 allocating 0-byte buffer:  <br/>
[WARNING] Skipping tactic 0x0000000000000000 due to Myelin error: autotuning: CUDA error 3 allocating 0-byte buffer:  <br/>
[WARNING] Skipping tactic 0x0000000000000000 due to Myelin error: autotuning: CUDA error 3 allocating 0-byte buffer:  <br/>
[ERROR] 4: [optimizer.cpp::computeCosts::3710] Error Code 4: Internal Error (Could not find any implementation for node {ForeignNode[853...Softmax_136]} due to insufficient workspace. See verbose log for requested sizes.) <br/>
[ERROR] Unable to create engine <br/>
Segmentation fault (core dumped) <br/>
![Stereo_Depth13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/463269b1-17b7-4e3f-a4f7-33baf5072205) <br/>












