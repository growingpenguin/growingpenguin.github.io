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
![Isaac_ROS_Object_Detection7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e2c99417-e188-4bde-b8de-d7f411c7ba71) <br/>
(3)Run the setup script to download the PeopleNet Model from NVIDIA GPU Cloud(NGC) and convert it to a .etlt file <br/>

(4)Launch the pre-composed pipeline launch file: <br/>
cd /workspaces/isaac_ros-dev && \
  ros2 launch isaac_ros_detectnet isaac_ros_detectnet_isaac_sim.launch.py

(5)Install and launch Isaac Sim following the steps in the Isaac ROS Isaac Sim Setup Guide
![Isaac_ROS_Object_Detection6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5febbbeb-babf-440a-a118-a0fdd6189440)







(2)Choose one of the DetectNet model that is listed here <br/>
TAO Pretrained DetectNet V2 <br/>
(3)Create a config file <br/>
Use resources/quickstart_config.pbtxt as a template <br/>
The datatype can be found in the overview tab of the model page <br/>
The input/dims should be the size of the raw input images. It can be different for the same model. The output/dims dimensions can be calculated as round(input_dims/max_batch_size). Place this config file in the isaac_ros_detectnet/resources directory. You can find more information about the config file here


Reference: https://nvidia-isaac-ros.github.io/concepts/object_detection/detectnet/tutorial_custom_model.html <br/>
