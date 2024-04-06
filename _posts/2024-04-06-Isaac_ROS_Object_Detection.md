---
layout: post
title:  "Isaac ROS Object Detection"
---
# Isaac ROS Object Detection
## isaac_ros_detectnet
(1)Set up your development environment by following the instructions here <br/>
=> Already Done <br/>
(2)Clone isaac_ros_common and this repository under ${ISAAC_ROS_WS}/src.  <br/>
```
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common.git
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_object_detection.git
```
(3)Pull down a ROS Bag of sample data <br/>
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_object_detection/isaac_ros_detectnet && \
  git lfs pull -X "" -I "resources/rosbags"
```
(4)Launch the Docker container using the run_dev.sh script:
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```
![Isaac_ROS_Object_Detection1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7ca340ad-7685-421c-a062-cb454051b919) <br/>
(5)Install this package’s dependencies <br/>
```
sudo apt-get install -y ros-humble-isaac-ros-detectnet ros-humble-isaac-ros-triton ros-humble-isaac-ros-dnn-image-encoder
```
![Isaac_ROS_Object_Detection2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/34e5211b-5765-4949-826e-3b347b56b86f) <br/>
(6)Run the quickstart setup script which will download the PeopleNet Model from NVIDIA GPU Cloud(NGC)
```
cd /workspaces/isaac_ros-dev/src/isaac_ros_object_detection/isaac_ros_detectnet && \
  ./scripts/setup_model.sh --height 632 --width 1200 --config-file resources/quickstart_config.pbtxt
```
![Isaac_ROS_Object_Detection4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7cc6147c-6b43-47d8-b8a6-a857e1e2ef23) <br/>
![Isaac_ROS_Object_Detection3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/16dce940-e4e5-4960-b8c6-4524e1eaa9db) <br/>
Reference: <br/>
https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_object_detection/index.html#quickstarts <br/>
