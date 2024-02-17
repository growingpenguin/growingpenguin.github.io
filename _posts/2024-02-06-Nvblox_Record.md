---
layout: post
title:  "Record Isaac ROS Nvblox Repository"
---
# Record Isaac ROS Nvblox Repository
## Record Static Reconstruction 
### Ros2 bag
(1)Launch Ros2 Common container <br/>
![Nvblox_Record1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/783ae412-9010-495d-b255-b0fe8267a9f9) <br/>
(2)See Topics <br/>
```
ros2 topic list
```
![Nvblox_Record2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c5e00bc1-a8a9-4748-98c5-d5a7480767a0) <br/>
(3)Examine rqt_graph <br/>
![Nvblox2-38](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f7f0274b-2002-4703-8ce6-604edda64328) <br/>
(4)Record the topics subscribing only for the Nvblox Repository <br/>
Command: <br/>
```
ros2 bag record -o nvblox1 /mesh /mesh_marker /static_esdf_pointcloud /static_map_slice /static_occupancy /map_slice_bounds /back_projected_depth /dynamic_occupancy /dynamic_esdf_pointcloud /dynamic_map_slice /dynamic_points /dynamic_depth_frame_overlay /freespace /combined_esdf_pointcloud /combined_map_slice
```
Command2: <br/>
```
ros2 bag record -o nvblox1 /front/stereo_camera/left/rgb /front/stereo_camera/left/camera_info /tf /transform /nvblox_node /nvblox_human_node /planner_server /bt_navigator /behavior_server /smoother_server /velocity_smoother /waypoint_follower /global_costmap/global_costmap /bond
```
![Nvblox2-39](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1014b730-e5d1-4107-8357-8fcd2b2ab7cc) <br/>
Command3: <br/>
```
ros2 bag record -o nvblox3 \
/global_costmap/costmap_raw \
/global_costmap/costmap \
/behavior_server/transition_event \
/global_costmap/costmap_updates \
/bt_navigator/transition_event \
/global_costmap/global_costmap/transition_event \
/plan_smoothed \
/planner_server/transition_event \
/global_costmap/published_footprint \
/plan \
/front/stereo_camera/left/rgb \
/front/stereo_camera/left/camera_info \
/tf \
/transform \
/nvblox_node \
/nvblox_human_node \
/planner_server \
/bt_navigator \
/behavior_server \
/smoother_server \
/velocity_smoother \
/waypoint_follower \
/global_costmap/global_costmap \
/bond
```
![Nvblox2-49](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/07be9e1c-fc71-40d4-b0b5-d3420062618b) <br/>

(5)Display information about a ROS 2 bag file <br/>
nvblox1 <br/>
![Nvblox2-40](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/66d71a44-417c-43e1-98c2-3793f18976d7) <br/>
nvblox2 <br/>
![Nvblox2-43](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4e47ed45-3a0c-494f-80ce-8fb19f1a770b) <br/>
nvblox3 <br/>
```
ros2 bag info nvblox3
```
![Nvblox2-50](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/117bd462-4dce-43fc-9d1e-d42fb4c10e62) <br/>
(6)Play the recorded Ros2 bag file <br/>
nvblox1 <br/>
![Nvblox2-41](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/79455206-6da2-4035-860b-3a3f0075e0c1) <br/>
nvblox2 <br/>
![Nvblox2-46](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1660e5a5-dffc-467b-be90-322b90352fa0) <br/>
nvblox3 <br/>
```
ros2 bag play nvblox3
```
![Nvblox2-53](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ad3f49d2-c6d8-4c41-ad58-34c845fbc3bf) <br/>
(7)Check by echoing the message <br/>
nvblox1 <br/>
![Nvblox2-44](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2c7b7e32-f679-4208-a5b0-6a0a5bc44bc9) <br/>
nvblox2 <br/>
![Nvblox2-45](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f8148ba3-df91-4fad-8d59-65adfbb959a9) <br/>
nvblox3 <br/>
```
ros2 topic echo /bond
```
![Nvblox2-51](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9452efc5-f510-4a91-a77f-60b0126b707d) <br/>
![Nvblox2-52](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f528090b-809e-457a-86c3-a5ac45a8e635) <br/>
Rosbag Data Files: 
Nvblox1: https://drive.google.com/drive/folders/1nUen8gcKWVbZOp92moKA_A-Y1Cqvbxzt?usp=sharing <br/>
Nvblox2: https://drive.google.com/drive/folders/1m7kGxxKQ_zyDKCj4C6x-W4Fal-SlocVm?usp=sharing <br/>
Nvblox3: https://drive.google.com/drive/folders/1Kq51JWFLzy_WMcmDXdB8ZNe0DUN7DArK?usp=sharing <br/>

## Record human Reconstruction 
### Running with Demonstration Path
(1)Launch Ros2 Common container <br/>
![Nvblox2-29](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e5b91e43-a4d9-4ecb-9c19-48afaf4ce0bc) <br/>
(2)See Topics <br/>
```
ros2 topic list
```
![Nvblox2-28](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cefe576e-16c7-4398-a1de-88191b4b3c84) <br/>
(3)Examine rqt_graph <br/>
```
rqt_graph
```
![Nvblox2-58](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f96d79a5-2137-430a-bef5-91ab3d91e8be) <br/>
Select Nodes/Topics(Active) <br/>
![Nvblox2-65](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/95f00a4d-0641-4855-8c8b-7b618d051b08) <br/>
(4)Record the topics subscribing only for the Nvblox Repository <br/>
```
ros2 bag record -o humannvblox1 \
/behavior_server/transition_event \
/behavior_tree_log \
/bond \
/bt_navigator/transition_event \
/clicked_point \
/clock \
/cmd_vel \
/cmd_vel_nav \
/controller_server/transition_event \
/cost_cloud \
/diagnostics \
/evaluation \
/front/stereo_camera/left/camera_info \
/front/stereo_camera/left/depth \
/front/stereo_camera/left/rgb \
/front/stereo_camera/left/semantic \
/front/stereo_camera/left/semantic_labels \
/front/stereo_camera/right/camera_info \
/front/stereo_camera/right/depth \
/global_costmap/costmap \
/global_costmap/costmap_raw \
/global_costmap/costmap_updates \
/global_costmap/footprint \
/global_costmap/global_costmap/transition_event \
/global_costmap/published_footprint \
/goal_pose \
/initialpose \
/local_costmap/costmap \
/local_costmap/costmap_raw \
/local_costmap/costmap_updates \
/local_costmap/footprint \
/local_costmap/local_costmap/transition_event \
/local_costmap/published_footprint \
/local_plan \
/marker \
/nvblox_human_node/dynamic_map_slice \
/nvblox_node/back_projected_depth \
/nvblox_node/combined_esdf_pointcloud \
/nvblox_node/combined_map_slice \
/nvblox_node/dynamic_depth_frame_overlay \
/nvblox_node/dynamic_esdf_pointcloud \
/nvblox_node/dynamic_map_slice \
/nvblox_node/dynamic_occupancy \
/nvblox_node/dynamic_points \
/nvblox_node/freespace \
/nvblox_node/map_slice_bounds \
/nvblox_node/mesh \
/nvblox_node/mesh_marker \
/nvblox_node/static_esdf_pointcloud \
/nvblox_node/static_map_slice \
/nvblox_node/static_occupancy \
/odom \
/parameter_events \
/plan \
/plan_smoothed \
/planner_server/transition_event \
/pose \
/received_global_plan \
/rosout \
/smoother_server/transition_event \
/speed_limit \
/tf \
/tf_static \
/transform \
/transformed_global_plan \
/velocity_smoother/transition_event \
/waypoint_follower/transition_event

```
![Nvblox2-66](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/56e77654-d627-4600-87a1-072cedbcf333) <br/>

(5)Display information about a ROS 2 bag file <br/>
```
ros2 bag info humannvblox1
```
![Nvblox2-67](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a6935828-7f56-4181-a691-7f870f30a62e) <br/>
(6)Play the recorded Ros2 bag file <br/>
```
ros2 bag play humannvblox1
```
![Nvblox2-69](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c92585da-3052-494c-b8bc-efcf8c3fcbe8) <br/>
(7)Check by echoing the message <br/>
humannvblox1 <br/>
```
ros2 topic echo /local_plan
```
![Nvblox2-68](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c417fcf8-6a81-49fc-9751-884ba63ea1ac) <br/>
Rosbag Data Files: <br/>
humannvblox1: https://drive.google.com/drive/folders/1EJ8uigjMSpYegkjQlVWa-0z0LPxhgBML?usp=sharing <br/>

### Running with Custom Human Paths
(1)Use the randomization options of the above script. To do so: <br/>
![Nvblox2-31](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7c6d50c9-c502-46a9-8c31-dd191ca18cfa) <br/>
This launches the scene headless (without visualization) and generates a new human_cmd_file.txt in <path_to_folder> <br/>
By default, it generates 5 waypoints per human, but it is possible to change this with the option --num_waypoints=<number_of_waypoints>  <br/>
You can then upload the script file to replace the default one, or use the same command as step  <br/>

## Record Dynamic Reconstruction
(1)Launch Ros2 Common container <br/>
![Nvblox2-56](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1f97b6f0-8064-4c2b-b5b8-2e3e7f0a9a62) <br/>
(2)See Topics <br/>
```
ros2 topic list
```
![Nvblox2-64](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c42cb429-820c-4c03-a3f4-f4f313140183) <br/>
(3)Examine rqt_graph <br/>
```
rqt_graph
```
![Nvblox2-58](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f96d79a5-2137-430a-bef5-91ab3d91e8be) <br/>
Select Nodes/Topics(Active) <br/>
![Nvblox2-59](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8671e822-95da-44fc-ad6b-5da80cd29b79) <br/>
(4)Record the topics subscribing only for the Nvblox Repository <br/>
Command1: <br/>
```
ros2 bag record -o dynamicnvblox1 \
/behavior_server/transition_event \
/behavior_tree_log \
/bond \
/bt_navigator/transition_event \
/clicked_point \
/clock \
/cmd_vel \
/cmd_vel_nav \
/controller_server/transition_event \
/cost_cloud \
/diagnostics \
/evaluation \
/front/stereo_camera/left/camera_info \
/front/stereo_camera/left/depth \
/front/stereo_camera/left/rgb \
/front/stereo_camera/left/semantic \
/front/stereo_camera/left/semantic_labels \
/front/stereo_camera/right/camera_info \
/front/stereo_camera/right/depth \
/front/stereo_camera/right/rgb \
/front/stereo_camera/right/semantic \
/front/stereo_camera/right/semantic_labels \
/global_costmap/costmap \
/global_costmap/costmap_raw \
/global_costmap/costmap_updates \
/global_costmap/footprint \
/global_costmap/global_costmap/transition_event \
/global_costmap/published_footprint \
/goal_pose \
/initialpose \
/local_costmap/costmap \
/local_costmap/costmap_raw \
/local_costmap/costmap_updates \
/local_costmap/footprint \
/local_costmap/local_costmap/transition_event \
/local_costmap/published_footprint \
/local_plan \
/marker \
/nvblox_human_node/dynamic_map_slice \
/nvblox_node/combined_esdf_pointcloud \
/nvblox_node/dynamic_occupancy \
/nvblox_node/mesh \
/nvblox_node/static_map_slice \
/odom \
/parameter_events \
/plan \
/plan_smoothed \
/planner_server/transition_event \
/received_global_plan \
/rosout \
/smoother_server/transition_event \
/speed_limit \
/tf \
/tf_static \
/transformed_global_plan \
/velocity_smoother/transition_event \
/waypoint_follower/transition_event
```
Command2: <br/>
```
ros2 bag record -o dynamicnvblox2 \
/behavior_server/transition_event \
/behavior_tree_log \
/bond \
/bt_navigator/transition_event \
/clicked_point \
/clock \
/cmd_vel \
/cmd_vel_nav \
/controller_server/transition_event \
/cost_cloud \
/diagnostics \
/evaluation \
/front/stereo_camera/left/camera_info \
/front/stereo_camera/left/depth \
/front/stereo_camera/left/rgb \
/front/stereo_camera/left/semantic \
/front/stereo_camera/left/semantic_labels \
/front/stereo_camera/right/camera_info \
/front/stereo_camera/right/depth \
/front/stereo_camera/right/rgb \
/front/stereo_camera/right/semantic \
/front/stereo_camera/right/semantic_labels \
/global_costmap/costmap \
/global_costmap/costmap_raw \
/global_costmap/costmap_updates \
/global_costmap/footprint \
/global_costmap/global_costmap/transition_event \
/global_costmap/published_footprint \
/goal_pose \
/initialpose \
/local_costmap/costmap \
/local_costmap/costmap_raw \
/local_costmap/costmap_updates \
/local_costmap/footprint \
/local_costmap/local_costmap/transition_event \
/local_costmap/published_footprint \
/local_plan \
/marker \
/nvblox_human_node/dynamic_map_slice \
/nvblox_node/combined_esdf_pointcloud \
/nvblox_node/dynamic_occupancy \
/nvblox_node/mesh \
/nvblox_node/static_map_slice \
/odom \
/parameter_events \
/plan \
/plan_smoothed \
/planner_server/transition_event \
/received_global_plan \
/rosout \
/smoother_server/transition_event \
/speed_limit \
/tf \
/tf_static \
/transformed_global_plan \
/velocity_smoother/transition_event \
/waypoint_follower/transition_event
```
![Nvblox2-70](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/29ad40aa-921d-4135-b79e-da51144219a0) <br/>
(5)Display information about a ROS 2 bag file <br/>
dynamicnvblox1 <br/>
```
ros2 bag info dynamicnvblox1
```
![Nvblox2-72](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1d01f8c5-6e9c-4744-a276-ed0791ea997f) <br/>
dynamicnvblox2 <br/>
```
ros2 bag info dynamicnvblox2
```
![Nvblox2-71](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ac5bce80-7391-4422-be44-509f2d39ee55) <br/>
(6)Play the recorded Ros2 bag file <br/>
dynamicnvblox1 <br/>
```
ros2 bag play dynamicnvblox1
```
![Nvblox2-73](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b083d24b-fda2-43e1-95d1-ed8e0ee83e63) <br/>
dynamicnvblox2 <br/>
```
ros2 bag play dynamicnvblox2
```
![Nvblox2-75](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e13d7673-1c89-4fce-9117-45e2638ae97b) <br/>
(7)Check by echoing the message <br/>
Run Container <br/>
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```
dynamicnvblox1 <br/>
```
ros2 topic echo /front/stereo_camera/right/semantic
```
![Nvblox2-74](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/76b1ce83-97aa-4e6e-80ec-d8cb27e39df3) <br/>
dynamicnvblox2 <br/>
```
ros2 topic echo /front/stereo_camera/right/semantic
```
![Nvblox2-76](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/de1b80c4-3202-46d3-b422-8b03d7b8f1a6) <br/>

Rosbag Data Files: <br/>
humannvblox1: https://drive.google.com/drive/folders/1EJ8uigjMSpYegkjQlVWa-0z0LPxhgBML?usp=sharing <br/>





**ROS Topics Subscribed** <br/>
| ROS Topic                 | Interface                           | Description |
|---------------------------|-------------------------------------|-------------|
| `pointcloud`              | `sensor_msgs/PointCloud2`           | Input 3D LIDAR pointcloud. Make sure to set the lidar intrinsic parameters if using this input, as it uses those to convert the pointcloud into a depth image. |
| `color/image`             | `sensor_msgs/Image`                 | Optional input color image to be integrated. Must be paired with a `camera_info` message below. Only used to color the mesh. |
| `color/camera_info`       | `sensor_msgs/CameraInfo`            | Optional topic along with the color image above. Contains intrinsics of the color camera. |
| `depth/image`             | `sensor_msgs/Image`                 | The input depth image to be integrated. Must be paired with a `camera_info` message below. Supports both floating-point (depth in meters) and `uint16` (depth in millimeters, OpenNI format). |
| `depth/camera_info`       | `sensor_msgs/CameraInfo`            | Required topic along with the depth image. Contains intrinsic calibration parameters of the depth camera. |
| `transform`               | `geometry_msgs/TransformStamped`    | Odometry as stamped transform messages. Not required if `use_tf_transforms` is set to true. |
| `pose`                    | `geometry_msgs/PoseStamped`         | Odometry as stamped pose messages. Not required if `use_tf_transforms` is set to true. |

**ROS Topics Published** <br/>
| ROS Topic                  | Interface                      | Description |
|----------------------------|--------------------------------|-------------|
| `~mesh`                    | `nvblox_msgs/Mesh`             | A visualization topic showing the mesh produced from the TSDF in a form that can be seen in RViz using `nvblox_rviz_plugin`. Set `mesh_update_rate_hz` to control its update rate. |
| `~mesh_marker`             | `visualization_msgs/Marker`    | A visualization topic showing the mesh using a marker message. |
| `~static_esdf_pointcloud`  | `sensor_msgs/PointCloud2`      | A pointcloud of the static 2D ESDF (Euclidean Signed Distance Field), with intensity as the metric distance to the nearest obstacle. Set `esdf_update_rate_hz` to control its update rate. |
| `~static_map_slice`        | `nvblox_msgs/DistanceMapSlice` | A 2D slice of the static ESDF, to be consumed by `nvblox_nav2` package for interfacing with Nav2. Set `esdf_update_rate_hz` to control its update rate. |
| `~static_occupancy`        | `sensor_msgs/PointCloud2`      | A pointcloud of the static occupancy map (only voxels with occupation `probability > 0.5`). Set `static_occupancy_publication_rate_hz` to control its publication rate. |
| `~map_slice_bounds`        | `visualization_msgs/Marker`    | A visualization topic showing the mesh slice bounds that can be set with the parameters `esdf_2d_min_height` and `esdf_2d_min_height`. |
| `~back_projected_depth`    | `sensor_msgs/PointCloud2`      | A pointcloud of the back projected latest depth image in the global frame. |
| `~dynamic_occupancy`       | `sensor_msgs/PointCloud2`      | A pointcloud of the human/dynamic occupancy map (only voxels with occupation `probability > 0.5`). |
| `~dynamic_esdf_pointcloud` | `sensor_msgs/PointCloud2`      | A pointcloud of the human/dynamic 2D ESDF (Euclidean Signed Distance Field), with intensity as the metric distance to the nearest human. Set `esdf_update_rate_hz` to control its update rate. |
| `~dynamic_map_slice`       | `nvblox_msgs/DistanceMapSlice` | A 2D slice of the human/dynamic ESDF, to be consumed by `nvblox_nav2` package for interfacing with Nav2. Set `esdf_update_rate_hz` to control its update rate. |
| `~dynamic_points`          | `sensor_msgs/PointCloud2`      | Pointcloud visualizing the back-projected pixels of the latest human/dynamic masked depth frame (without temporal fusion). |
| `/dynamic_depth_frame_overlay` | `sensor_msgs/Image`        | Debug image showing the dynamic/human mask overlaid on the depth image. Note: The overlay is showing the mask before postprocessing. |
| `~freespace`               | `sensor_msgs/PointCloud2`      | Pointcloud visualizing all non high confidence freespace voxels inside a 5x5x1 m box around the depth camera. |
| `~combined_esdf_pointcloud`| `sensor_msgs/PointCloud2`      | A pointcloud of the combined static and human/dynamic 2D ESDF (minimal distance of both), with intensity as the metric distance to the nearest obstacle or human. Set `esdf_update_rate_hz` to control its update rate. |
| `~combined_map_slice`      | `nvblox_msgs/DistanceMapSlice` | A 2D slice of the combined static and human/dynamic ESDF (minimal distance of both), to be consumed by `nvblox_nav2` package for interfacing with Nav2. Set `esdf_update_rate_hz` to control its update rate. |  <br/>

Resources <br/>
https://drive.google.com/drive/folders/1104cJ0gekPOrVGCAGhBKhpn_0PnAoshn?usp=sharing <br/>

Reference: <br/>
https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_nvblox/isaac_ros_nvblox/api/topics_and_services.html <br/>
https://www.youtube.com/watch?v=a-O1qM9_S7k <br/>
