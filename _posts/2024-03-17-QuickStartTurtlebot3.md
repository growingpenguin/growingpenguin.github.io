---
layout: post
title:  "Quick Start Turtlebot3"
---

## PC Setup
Foxy <br/>
### Download and Install Ubuntu on PC
```
lsb_release -a
```
![Turtlebot3QuickStart1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d91f1b0b-6f13-4eb5-b19a-5df2f7a8e7af) <br/>
=> Already Installed <br/>
Installation Confirmed <br/>

### Install ROS on Remote PC
```
sudo apt update
sudo apt upgrade
wget https://raw.githubusercontent.com/ROBOTIS-GIT/robotis_tools/master/install_ros_noetic.sh
chmod 755 ./install_ros_noetic.sh 
bash ./install_ros_noetic.sh
```
![Turtlebot3QuickStart2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4b163a5f-92a9-4dba-9ee7-e1332f2551b6) <br/>
=> Successfully Installed <br/>

### Install Dependent ROS Packages
```
sudo apt-get install ros-noetic-joy ros-noetic-teleop-twist-joy \
  ros-noetic-teleop-twist-keyboard ros-noetic-laser-proc \
  ros-noetic-rgbd-launch ros-noetic-rosserial-arduino \
  ros-noetic-rosserial-python ros-noetic-rosserial-client \
  ros-noetic-rosserial-msgs ros-noetic-amcl ros-noetic-map-server \
  ros-noetic-move-base ros-noetic-urdf ros-noetic-xacro \
  ros-noetic-compressed-image-transport ros-noetic-rqt* ros-noetic-rviz \
  ros-noetic-gmapping ros-noetic-navigation ros-noetic-interactive-markers
```
### Install TurtleBot3 Packages
```
sudo apt install ros-noetic-dynamixel-sdk
sudo apt install ros-noetic-turtlebot3-msgs
sudo apt install ros-noetic-turtlebot3
```
=> Try sudo apt-get update when it fails <br/>

Reference: <br/>
https://emanual.robotis.com/docs/en/platform/turtlebot3/quick-start/ <br/>
