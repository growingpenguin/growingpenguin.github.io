---
layout: post
title:  "Record Isaac ROS Nvblox Repository"
---
# Record Static Reconstruction 
## Ros2 bag
(1)Launch Ros2 Common container <br/>
![Nvblox_Record1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/783ae412-9010-495d-b255-b0fe8267a9f9) <br/>
(2)See Topics <br/>
![Nvblox_Record2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c5e00bc1-a8a9-4748-98c5-d5a7480767a0) <br/>
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
| `~combined_map_slice`      | `nvblox_msgs/DistanceMapSlice` | A 2D slice of the combined static and human/dynamic ESDF (minimal distance of both), to be consumed by `nvblox_nav2` package for interfacing with Nav2. Set `esdf_update_rate_hz` to control its update rate. |
 <br/>
ros2 bag record -o nvblox1 /mesh /mesh_marker /static_esdf_pointcloud /static_map_slice /static_occupancy /map_slice_bounds /back_projected_depth /dynamic_occupancy /dynamic_esdf_pointcloud /dynamic_map_slice /dynamic_points /dynamic_depth_frame_overlay /freespace /combined_esdf_pointcloud /combined_map_slice <br/>

Reference: <br/>
https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_nvblox/isaac_ros_nvblox/api/topics_and_services.html <br/>
