
# Quickstart for Visual SLAM with Isaac Sim
## Overview
This tutorial walks you through a graph to estimate 3D pose of the camera with Visual SLAM using images from Isaac Sim <br/>
(1)Set up your development environment by following the instructions here <br/>
=> Already Done <br/>
(2)Clone isaac_ros_common and this repository under ${ISAAC_ROS_WS}/src <br/>
```
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common.git
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam.git
```
(3)[Terminal 1] Launch the Docker container <br/>
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh ${ISAAC_ROS_WS}
```
(4)[Terminal 1] Install this package’s dependencies <br/>
```
sudo apt-get install -y ros-humble-isaac-ros-visual-slam
```
Run the following launch files in the current terminal (Terminal 1): <br/>
```
ros2 launch isaac_ros_visual_slam isaac_ros_visual_slam.launch.py
```
(5)[Terminal 2] Attach another terminal to the running container for RViz2 <br/>
Attach another terminal to the running container for RViz2 <br/>
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh ${ISAAC_ROS_WS}
```
From this second terminal, run RViz2 to display the output <br/>
```
rviz2 -d src/isaac_ros_visual_slam/isaac_ros_visual_slam/rviz/default.cfg.rviz
```
If you are SSHing in from a remote machine, the RViz2 window should be forwarded to your remote machine <br/>
(6)[Terminal 3] Attach the 3rd terminal to start the rosbag <br/>
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh ${ISAAC_ROS_WS}
```
Run the rosbag file to start the demo <br/>
```
ros2 bag play src/isaac_ros_visual_slam/isaac_ros_visual_slam/test/test_cases/rosbags/small_pol_test/
```
![IsaacSimVisualSLAM_QuickStart1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3020a7c3-d60c-4c3f-8267-51f07713655e) <br/>

Reference: https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_visual_slam/isaac_ros_visual_slam/index.html#quickstart <br/>
