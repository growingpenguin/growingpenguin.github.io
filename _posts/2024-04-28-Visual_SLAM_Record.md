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
![Visual_SLAM_with_Isaac_Sim6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c780381a-6936-4699-9a3d-b6b96c9ac24b) <br/>
(3)Record the topics that are being subscribed  <br/>
```
ros2 bag record -o slam1 /clicked_point /clock /cmd_vel /front_3d_lidar/point_cloud /front_stereo_camera/imu/data /front_stereo_camera/left_rgb/camerainfo /front_stereo_camera/left_rgb/image_raw /front_stereo_camera/right_rgb/camerainfo /front_stereo_camera/right_rgb/image_raw /goal_pose /initialpose /left_stereo_camera/imu/data /odom /parameter_events /rear_stereo_camera/imu/data /right_stereo_camera/imu/data /rosout /tf /tf_static /visual_slam/tracking/odometry /visual_slam/tracking/slam_path /visual_slam/tracking/vo_path /visual_slam/vis/gravity /visual_slam/vis/gravity_array /visual_slam/vis/landmarks_cloud /visual_slam/vis/loop_closure_cloud /visual_slam/vis/observations_cloud /visual_slam/vis/pose_graph_edges /visual_slam/vis/pose_graph_edges2 /visual_slam/vis/pose_graph_edges2_array /visual_slam/vis/pose_graph_edges_array /visual_slam/vis/pose_graph_nodes /visual_slam/vis/velocity
```
```
ros2 bag record -o slam2 /clicked_point /clock /cmd_vel /front_3d_lidar/point_cloud /front_stereo_camera/imu/data /front_stereo_camera/left_rgb/camerainfo /front_stereo_camera/left_rgb/image_raw /front_stereo_camera/right_rgb/camerainfo /front_stereo_camera/right_rgb/image_raw /goal_pose /initialpose /left_stereo_camera/imu/data /odom /parameter_events /rear_stereo_camera/imu/data /right_stereo_camera/imu/data /rosout /tf /tf_static /visual_slam/tracking/odometry /visual_slam/tracking/slam_path /visual_slam/tracking/vo_path /visual_slam/vis/gravity /visual_slam/vis/gravity_array /visual_slam/vis/landmarks_cloud /visual_slam/vis/loop_closure_cloud /visual_slam/vis/observations_cloud /visual_slam/vis/pose_graph_edges /visual_slam/vis/pose_graph_edges2 /visual_slam/vis/pose_graph_edges2_array /visual_slam/vis/pose_graph_edges_array /visual_slam/vis/pose_graph_nodes /visual_slam/vis/velocity
```
![Visual_SLAM_with_Isaac_Sim7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/67c8ad32-351b-416a-a56c-e33e1c834416) <br/>
(4)Display information about a ROS 2 bag file <br/>
```
ros2 bag info slam1 
```
![Visual_SLAM_with_Isaac_Sim8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/73cc42c3-63c3-41a7-bc1e-9bbbef262fcb) <br/>
```
ros2 bag info slam2
```
![Visual_SLAM_with_Isaac_Sim15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c39df698-703f-4fa2-8f53-7eecca9b6496)
(5)Play the recorded Ros2 bag file 
```
ros2 bag play slam1 
```
![Visual_SLAM_with_Isaac_Sim10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bf9920c1-1d89-4787-b159-d7d0883a7c56) <br/>
(6)Check by echoing the message 
```
ros2 bag echo /visual_slam/tracking/odometry
```
![Visual_SLAM_with_Isaac_Sim9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a9a97373-f71a-46d3-8a24-79b63a578cdf) <br/>
![Visual_SLAM_with_Isaac_Sim16](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/daa04942-4865-4cf9-9b09-e4c5fb912122) <br/>
