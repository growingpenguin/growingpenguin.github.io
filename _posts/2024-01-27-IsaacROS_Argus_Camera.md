---
layout: post
title:  "Assignment: 5th Week - Follow Isaac_ROS_AprilTag Repository"
---
# Isaac ROS Argus Camera
## Overview
Isaac ROS Argus Camera <br/>
ROS 2 package for sensor processing to output images <br/>
-Image sensors are connected on CSI and GMSL hardware interfaces to Jetson platforms <br/> 
-This package uses dedicated hardware engines to accelerate image processing <br/> 
-Output images are used in? <br/>
Graphs of nodes for AI and CV perception packages <br/>
Image compression for capture to disk by event recorders <br/>
Live-stream visuals for remote robot teleoperation <br/> 
Footnote <br/>
Accelerated Image Processing: <br/>
Package utilizes dedicated hardware engines to accelerate the processing of images from the connected sensors <br/>
This acceleration helps in efficiently handling the data from these sensors <br/>
Graphs of Nodes for AI and Computer Vision (CV) Perception Packages: <br/>
The primary use of the output images is within the ROS 2 ecosystem. <br/>
These images are often used as input data for various nodes or modules that perform AI(Artificial Intelligence) and CV(Computer Vision) tasks <br/>
Ex. These images can be processed by algorithms that identify objects, track motion, or perform any other perception-related tasks in the context of robotics and autonomous systems <br/>
The output images serve as visual input to these algorithms to make decisions and take actions <br/>
Image Compression for Capture to Disk by Event Recorders: <br/>
Another important use of the output images is for event recording <br/>
Images can be compressed and stored on disk by event recorders <br/>
This is valuable for later analysis, debugging, or reviewing the data generated by the systemc
It provides a way to capture and store visual information for post-processing or archival purposes <br/>
Live-Stream Visuals for Remote Robot Teleoperation: <br/>
Output images can also be used for live-streaming visual data <br/>
This is particularly useful for remote teleoperation of robots <br/>
By transmitting the images in real-time, operators or remote users can gain visual feedback from the robot's environment, allowing them to control the robot more effectively and make informed decisions <br/>
The "Isaac ROS Argus Camera" package processes images from sensors connected to Jetson platforms and provides these images as output <br/>
These images are utilized for AI and CV perception tasks, event recording, and live-streaming, making them a crucial part of the sensory data processing pipeline in robotic applications <br/>
-Isaac ROS Argus Camera provides with several sensor capture and processing features <br/>
Including AWB(auto-white-balance), AE(auto-exposure), and noise reduction <br/>
Leveraging hardware engines in Jetson, Argus provides multi-camera frame synchronization, with very high precision frame acquisition timestamping and jitter less than 100us <br/>

Example graph of nodes <br/>
![Argus_Camera1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f9d2408f-72b3-40be-a239-f721b7158467) <br/>
The Argus Camera module processes sensor image data from the camera for input to vision-based perception graphs, including DNN stereo disparity, AprilTag, VSLAM, and H.264 encode <br/>
Each of the nodes in green is GPU accelerated for a high-performance compute graph from Argus camera to vision-based perception functions <br/>
![Argus_Camera2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d26c3410-9a35-46b9-9738-d88f935799b9) <br/>
-Argus Camera uses dedicated hardware engines to access the full memory bandwidth in Jetson <br/>
Raw camera images are delivered via CSI or GMSL interfaces directly to the GPU accelerated memory <br/> 
The ISP hardware processes the raw image directly into a GPU accelerated output image topic <br/>
-Widely available USB and Ethernet plug-in cameras can be used for robotics applications, but there is performance cost for this convenience <br/>
The I/O interface (USB or Ethernet) places the image from the camera directly into CPU-accessible memory <br/>
The camera driver makes a copy from the I/O interface using the CPU to make the image available to other applications <br/>
The Camera driver wrapper node in ROS performs another memory copy with the CPU from the driver to publish the image in ROS <br/>
Before a USB or Ethernet image arrives as a published topic, two CPU memory copy actions have been performed for every pixel <br/>
In contrast, the Argus Camera module processes sensor data into output image topics in ROS without the CPU touching a single pixel in the image <br/>

## QuickStart
Skip (Working on Desktop) <br/>

Reference: <br/>
https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_argus_camera/index.html <br/>




