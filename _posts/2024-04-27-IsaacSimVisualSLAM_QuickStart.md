
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
![IsaacSimVisualSLAM_QuickStart4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a0df300f-bd14-4c48-a9e6-a86d9469ec11) <br/>
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
![IsaacSimVisualSLAM_QuickStart3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/209d655c-8a4f-4e8e-8a57-f652031c4a6b) <br/>
![IsaacSimVisualSLAM_QuickStart5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bf1633c5-0abe-49f0-91bc-27c2ef6a5e2b) <br/>
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
![IsaacSimVisualSLAM_QuickStart2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4b63f4fa-4d30-43c7-9480-696cdd6f971a) <br/>
![IsaacSimVisualSLAM_QuickStart1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3020a7c3-d60c-4c3f-8267-51f07713655e) <br/>

**Coordinate Frames** <br/>
This section describes the coordinate frames that are involved in the VisualSlamNode <br/>
The frames discussed below are oriented as follows: <br/>
![IsaacSimVisualSLAM_QuickStart6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8ae6f265-998f-484e-ad68-94717087477e) <br/>
(1)input_base_frame: <br/>
The name of the frame used to calculate transformation between base link and left camera <br/>
The default value is empty (‘’), which means the value of base_frame_ will be used <br/>
If input_base_frame_ and base_frame_ are both empty, the left camera is assumed to be in the robot’s center <br/>
(2)input_left_camera_frame: <br/>
The frame associated with left eye of the stereo camera <br/>
Note that this is not the same as the optical frame <br/>
The default value is empty (‘’), which means the left camera is in the robot’s center and left_pose_right will be calculated from the CameraInfo message <br/>
(3)input_right_camera_frame: <br/>
The frame associated with the right eye of the stereo camera <br/>
Note that this is not the same as the optical frame <br/>
The default value is empty (‘’), which means left and right cameras have identity rotation and are horizontally aligned, so left_pose_right will be calculated from CameraInfo <br/>
(4)input_imu_frame: <br/>
The frame associated with the IMU sensor (if available) <br/>
It is used to calculate left_pose_imu <br/>

Reference: https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_visual_slam/isaac_ros_visual_slam/index.html#quickstart <br/>
