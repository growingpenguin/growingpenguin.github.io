---
layout: post
title:  "Assignment: 5th Week - Follow Isaac_ROS_Compression Repository"
---
# Isaac ROS Compression
## Overview
Isaac ROS Compression <br/>
![Compression1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1d2cdc1b-e29c-404e-89ee-62be1ece9936) <br/>
Isaac ROS Compression provides H.264 image encoder and decoder that leverages the specialized hardware in NVIDIA GPUs and the Jetson platform <br/>
isaac_ros_h264_encoder package: <br/>
Can compress an image into H.264 data using the NVENC <br/>
isaac_ros_h264_decoder package <br/>
Can decode the H.264 data into original images using the NVDEC <br/>
-Image compression reduces the data footprint of images when written to storage or transmitted between computers <br/>
A 1080p camera at 30fps produces 177MB/s of data <br/>
-Image compression reduces this by approximately 10 times to 17MB/s of data, reducing the throughput needed to send this to another computer or write out to storage <br/>
A one minute 1080p camera recording is reduced from ~10GB to ~1GB <br/>
This compression is provided by dedicated hardware acceleration (NvEnc) separate from other hardware engines such as the GPU <br/>
-Common use case for image compression during the development of robots <br/>
(1)Capture camera images to storage <br/>
(2)This captured data is processed offline from the robot to produce training datasets for AI models, test datasets for perception functions, and test data for open-loop re-simulation of software in development with real data <br/>
(3)The compression parameters are tuned to minimize visual quality reduction from lossy compression for AI model and perception function development <br/>
(4)Compression reduces the amount of data written to storage, the time required to offload the recording, and footprint of the data at rest in a data lake <br/>
-Compression can be used with event data recorders to capture camera images to storage when an event of interest occurs, often due to failures on the robot <br/>
This provides visual information to assist in the debugging of the event or to improve perception and robot functions <br/>
-H.264 is an efficient and popular compression algorithm with broad support across many platforms <br/>
Output of the isaac_ros_h264_encoder package can then be decoded with hardware acceleration using the isaac_ros_h264_decoder on Jetson and x86_64 systems <br/>
Or by third-party H.264 decoder packages on non-NVIDIA platforms <br/>
-Package is powered by NVIDIA Isaac Transport for ROS(NITROS) <br/>
Which leverages type adaptation and negotiation to optimize message formats and dramatically accelerate communication between participating nodes <br/>
### Note 
ROS2 relies on image_transport_plugins for CPU based compression <br/>
Recommend using isaac_ros_h264_encoder as part of the graph of nodes when capturing to a rosbag for performance benefits of NITROS <br/>
ROS2 type adaptation used by NITROS is not supported by image_transport_plugins, resulting in more CPU load, and less encode performance <br/>
### Packages
isaac_ros_h264_decoder <br/>
isaac_ros_h264_encoder <br/>
### Supported Platforms
Compatible with ROS 2 Humble running on Jetson or an x86_64 system with an NVIDIA GPU <br/>
### Docker
To simplify development <br/>
Strongly recommend leveraging the Isaac ROS Dev Docker images by following these steps <br/>
This will streamline your development environment setup with the correct versions of dependencies on x86_64 platforms <br/>
Customize your Dev Environment <br/>
Reference this [guide](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_common/index.html#isaac-ros-docker-development-environment) <br/>

### [isaac_ros_h264_decoder](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_compression/isaac_ros_h264_decoder/index.html#quickstart) QuickStart 
Shows an example of how to use the isaac_ros_h264_decoder with a pre-recorded rosbag, which contains compressed H.264 images generated from isaac_ros_h264_encoder with two Argus cameras as the input source <br/>
You will be able to visualize the decoded images after the last step <br/>
(1)Set up your development environment by following the instructions here <br/>
=> Already Done <br/>
(2)Clone isaac_ros_common and this repository under ${ISAAC_ROS_WS}/src <br/>
![Compression2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5fb27015-febb-465f-be81-52e1d7da35bd) <br/>
(3)Pull down a rosbag of sample data <br/>
![Compression3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0193302e-6b98-4dfd-822d-ffbc65bc3fd3) <br/>
(4)Launch the Docker container using the run_dev.sh script <br/>
![Compression4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/44295a61-6e5b-48d9-a99b-43f72a3a4e54) <br/>
(5)Install this package’s dependencies <br/>
![Compression5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1d693496-ed2f-464a-94f3-406c7f10d7dc) <br/>
(6)Run the following launch files to run the demo of this isaac_ros_h264_decoder <br/>
![Compression6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/aed86bad-7d29-4908-970c-2868b7859c56) <br/>
(7)Open a second terminal and attach to the container <br/>
![Compression7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/97b724d8-6f74-4609-bbb9-a3b108b73a90) <br/>
(8)Visualize and validate the output of the package <br/>
Left Image View <br/>
![Compression8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/76776b83-616c-4c42-a516-63d70304701b) <br/>
Right Image View <br/>
![Compression9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/165c5ac9-cec1-40d7-895c-233a6c0ad9b7) <br/>


### [isaac_ros_h264_encoder](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_compression/isaac_ros_h264_encoder/index.html#quickstart) QuickStart 
**Try More Examples** <br/>
Tutorial with RealSense <br/>
Tutorial with NITROS Graph <br/>



Reference <br/>
https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_compression/index.html <br/>
https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_common/index.html#isaac-ros-docker-development-environment <br/>
https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_compression/isaac_ros_h264_decoder/index.html#quickstart <br/>
