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

### Install ROS 2 on Remote PC
```
sudo apt update
sudo apt upgrade
wget https://raw.githubusercontent.com/ROBOTIS-GIT/robotis_tools/master/install_ros_noetic.sh
chmod 755 ./install_ros_noetic.sh 
bash ./install_ros_noetic.sh
```
![Turtlebot3QuickStart2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4b163a5f-92a9-4dba-9ee7-e1332f2551b6) <br/>
=> Successfully Installed <br/>

### Install Dependent ROS 2 Packages
Open the terminal with Ctrl+Alt+T from Remote PC <br/>
**Install Gazebo11**  <br/>
```
sudo apt-get install ros-foxy-gazebo-*
```
**Install Cartographer** <br/>
```
sudo apt install ros-foxy-cartographer
sudo apt install ros-foxy-cartographer-ros
```
**Install Navigation2** <br/>
```
sudo apt install ros-foxy-navigation2
sudo apt install ros-foxy-nav2-bringup
```
**Install TurtleBot3 Packages** <br/>
Install TurtleBot3 via Debian Packages <br/>
```
source ~/.bashrc
sudo apt install ros-foxy-dynamixel-sdk
sudo apt install ros-foxy-turtlebot3-msgs
sudo apt install ros-foxy-turtlebot3
```
**Environment Configuration** <br/>
Set the ROS environment for PC <br/>
```
echo 'export ROS_DOMAIN_ID=30 #TURTLEBOT3' >> ~/.bashrc
source ~/.bashrc
```

Reference: <br/>
https://emanual.robotis.com/docs/en/platform/turtlebot3/quick-start/ <br/>
