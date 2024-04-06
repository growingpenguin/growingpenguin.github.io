---
layout: post
title:  "Tutorial for DNN Object Detection with Isaac Sim"
---
# Tutorial for DNN Object Detection with Isaac Sim
## Overview
This tutorial walks you through a pipeline for object(people) detection using DetectNet consuming images from Isaac Sim <br/>
## Tutorial Walkthrough

(1)Complete the quickstart here <br/>
=> Already Done <br/>
(2)Launch the Docker container using the run_dev.sh script: <br/>
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```
![Isaac_ROS_Object_Detection7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e2c99417-e188-4bde-b8de-d7f411c7ba71) <br/>
(3)Run the setup script to download the PeopleNet Model from NVIDIA GPU Cloud(NGC) and convert it to a .etlt file <br/>
```
cd /workspaces/isaac_ros-dev/src/isaac_ros_object_detection/isaac_ros_detectnet && \
  ./scripts/setup_model.sh --height 720 --width 1280 --config-file resources/isaac_sim_config.pbtxt
```
![Isaac_ROS_Object_Detection8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/fe31c49a-f2ef-459c-9cf5-2d9664ed5efe) <br/>
(4)Launch the pre-composed pipeline launch file: <br/>
```
cd /workspaces/isaac_ros-dev && \
  ros2 launch isaac_ros_detectnet isaac_ros_detectnet_isaac_sim.launch.py
```
![Isaac_ROS_Object_Detection9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c79b8aba-47fd-42f2-b73e-10323414dfbe) <br/>
![Isaac_ROS_Object_Detection10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/070124db-a128-44af-a9ab-f91f679d7050) <br/>
![Isaac_ROS_Object_Detection12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1ddbefcc-e0a0-4b18-acab-db0a887b5cd7) <br/>

(5)Install and launch Isaac Sim following the steps in the Isaac ROS Isaac Sim Setup Guide
![Isaac_ROS_Object_Detection6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5febbbeb-babf-440a-a118-a0fdd6189440) <br/>
![saac_ROS_Object_Detection11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1d3dfa9c-7334-4cfa-afcb-b46877c684d2) <br/>

(6)Press Play to start publishing data from the Isaac Sim <br/>
=> Memory Error <br/>
(7)You should see the image from Isaac Sim with the rectangles overlaid over detected people in the frame <br/>



Reference: <br/>
https://nvidia-isaac-ros.github.io/concepts/object_detection/detectnet/tutorial_isaac_sim.html <br/>
https://nvidia-isaac-ros.github.io/concepts/object_detection/detectnet/tutorial_custom_model.html <br/>
