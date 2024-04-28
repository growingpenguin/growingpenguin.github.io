# Record Visual SLAM
## Overview
This tutorial walks you through a graph to estimate 3D pose of the camera with Visual SLAM using images from Isaac Sim <br/>
(1)Launch Ros2 Common container <br/>
```
cd ${ISAAC_ROS_WS}/src
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh ${ISAAC_ROS_WS}
```
(2)See Topics <br/>
```
ros2 topic list
```
(3)Record the topics that are being subscribed  <br/>
```
ros2 bag record -o slam1 /cmd_vel /parameter_events /rgb /rosout
```
(4)Display information about a ROS 2 bag file <br/>
```
ros2 bag info slam1 
```
(5)Play the recorded Ros2 bag file 
```
ros2 bag play slam1 
```
(6)Check by echoing the message 
```
ros2 bag echo /visual_slam/tracking/odometry
```
