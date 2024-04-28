# Tutorial for Visual SLAM with Isaac Sim
## Overview
This tutorial walks you through a graph to estimate 3D pose of the camera with Visual SLAM using images from Isaac Sim <br/>
(1)Complete the quickstart <br/>
=> Already Done <br/>
(2)Clone isaac_ros_common and this repository under ${ISAAC_ROS_WS}/src <br/>
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```
(3)Install and launch Isaac Sim following the steps in the Isaac ROS Isaac Sim Setup Guide <br/>
=> Already Done <br/>
(3)-1 Install Isaac Sim, choosing the appropriate working environment: <br/>
=>Native <br/>
(3)-2 Follow the Running Native ROS instructions to ensure that ROS 2 and the required packages are installed to successfully enable the ROS 2 Bridge in Omniverse Isaac Sim <br/>
=>Already Done <br/>
(3)-3 Follow the instructions to launch Isaac Sim App Selector window <br/>
=>Already Done <br/>
(3)-4 If you don’t have a system level ROS 2 install, follow the steps outlined here under ROS2 -> No system level install -> Humble <br/>
=>Already Done <br/>
(3)-5 Launch Isaac Sim <br/>
```
./isaac-sim.sh
```
(3)-6 Open Isaac ROS Sample scene as shown below <br/>
![Visual_SLAM_with_Isaac_Sim1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8073ff2c-9eb8-41b1-a78d-375fa735e6f6) <br/>
(3)-7 Continue with the next steps in your specific Isaac ROS package tutorial <br/>
(4)Press Play to start publishing data from the Isaac Sim <br/>
![Visual_SLAM_with_Isaac_Sim2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9792ef8b-1730-4581-8110-79f2748da30c) <br/>
(5)In a separate terminal, start isaac_ros_visual_slam using the launch files: <br/>
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_common &&   ./scripts/run_dev.sh ${ISAAC_ROS_WS}
sudo apt-get install -y ros-humble-isaac-ros-visual-slam
source /workspaces/isaac_ros-dev/install/setup.bash
ros2 launch isaac_ros_visual_slam isaac_ros_visual_slam_isaac_sim.launch.py
```
(6)In a separate terminal, send the signal to move the robot about as follows: <br/>
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_common &&   ./scripts/run_dev.sh ${ISAAC_ROS_WS}
ros2 topic pub --once /cmd_vel geometry_msgs/msg/Twist "{linear: {x: 0.2, y: 0.0, z: 0.0}, angular: {x: 0.0, y: 0.0, z: 0.2}}"
```
(7)n a separate terminal, spin up RViz with default configuration file to see the rich visualizations as the robot moves <br/>
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_common &&   ./scripts/run_dev.sh ${ISAAC_ROS_WS}
rviz2 -d src/isaac_ros_visual_slam/isaac_ros_visual_slam/rviz/isaac_sim.cfg.rviz
```
Change the frame id to odom <br/>
![Visual_SLAM_with_Isaac_Sim5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/94cb7fba-4f7d-4164-a088-d47a95d28b4c) <br/>
(8)To see the odometry messages, in a separate terminal echo the contents of the /visual_slam/tracking/odometry topic with the following command: <br/>
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_common &&   ./scripts/run_dev.sh ${ISAAC_ROS_WS}
ros2 topic echo /visual_slam/tracking/odometry
```
=> Nothing came out <br/>
### Saving and Using the Map
As soon as you start the visual SLAM node, it starts storing the landmarks and the pose graph <br/>
You can save them in a map and store the map onto a disk <br/>
Make a call to the SaveMap ROS 2 Action with the following command: <br/>
```
ros2 action send_goal /visual_slam/save_map isaac_ros_visual_slam_interfaces/action/SaveMap "{map_url: ${ISAAC_ROS_WS}/src/VisualSLAM}"
```
![Visual_SLAM_with_Isaac_Sim11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bb4977bd-101b-4307-a626-2b0fce7cbc1a) <br/>

Reference: <br/>
https://nvidia-isaac-ros.github.io/concepts/visual_slam/cuvslam/tutorial_isaac_sim.html <br/>
