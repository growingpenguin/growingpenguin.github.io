![image](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/93eec8ff-f650-4959-8573-a289510c10e1)![image](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/55b41f6a-f2bd-498d-9128-037bce855cb8)![image](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8130a7eb-3e2a-42a4-bdbe-22fe42e7a87f)![image](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f4a58f3a-711a-4b93-8a70-061d52cf8a63)---
layout: post
title:  "Assignment: 3rd Week - Test Isaac_ROS_Freespace Segmentation Repository"
---
# Test Isaac_ROS_Freespace Segmentation Repository
Examples <br/>
Tutorial with RealSense, Tutorial with Zed, Tutorial with Isaac Sim <br/>

## [Tutorial with RealSense](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/bi3d_freespace_segmentation/tutorial_realsense.html) 

## [Tutorial With Zed](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/bi3d_freespace_segmentation/tutorial_zed.html)

## [Tutorial With Isaac Sim](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/bi3d_freespace_segmentation/tutorial_isaac_sim.html)
(1)Complete steps 1-7 listed in the [quickstart post](https://github.com/growingpenguin/growingpenguin.github.io/blob/master/_posts/2024-01-02-IsaacROS_freespace_segmentation.md) <br/>
=> Already Done <br/>
(2)Install and launch Isaac Sim following the steps in the Isaac ROS [Isaac Sim Setup Guide documentation](https://nvidia-isaac-ros.github.io/getting_started/isaac_sim/index.html) <br/>
(2)-1 Install Isaac Sim, choosing the appropriate working environment <br/>
=> Already Done <br/>
(2)-2 Follow the [Running Native ROS](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html) instructions to ensure that ROS 2 and the required packages are installed to successfully enable the ROS 2 Bridge in Omniverse Isaac Sim <br/>
Ubuntu 20.04 Humble <br/>
->Install humble from source <br/>
ROS 2 Humble Ubuntu 20.04 <br/>
**System requirements** <br/>
Tier 3: Ubuntu Linux - Focal (20.04) 64-bit <br/>
**System setup** <br/>
Set locale <br/>
Make sure you have a locale which supports UTF-8 <br/>
![FreespaceSegmentation43](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cddfb160-f523-46cd-9e9c-9e658492ad86) <br/>
![FreespaceSegmentation44](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8af30661-64b9-4364-ad22-087a12be28d4) <br/>
![FreespaceSegmentation45](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d508807a-f4db-4790-86e5-184efcc03beb) <br/>
![FreespaceSegmentation46](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/83513a88-f741-4260-a5a3-b0741ec239af) <br/>
**Add the ROS 2 apt repository** <br/>
Need to add the ROS 2 apt repository to your system <br/>
Ensure that the Ubuntu Universe repository is enabled <br/>
![FreespaceSegmentation47](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c60ac2f1-8a51-4dc0-a0be-fb9e11c159e9) <br/>
Now add the ROS 2 GPG key with apt <br/>
![FreespaceSegmentation48](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4d4425b3-51f3-4f3f-8723-c187b4369aab) <br/>
![FreespaceSegmentation49](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7948e96f-18b2-4011-b157-dde9b2df6d0b) <br/>
Add the repository to your sources list <br/>
![FreespaceSegmentation50](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c79da89e-a0ca-464c-852a-af0f8dc02d4a) <br/>
**Install development tools and ROS tools** <br/>
Install common packages <br/>
![FreespaceSegmentation51](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/064ee5ed-e68e-4f76-b1e7-47ab0573a775) <br/>
Install packages according to your Ubuntu version <br/>
![FreespaceSegmentation52](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2205fb7d-4743-493a-a55f-542608f6913b) <br/>
**Get ROS 2 code** <br/>
![FreespaceSegmentation53](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dc5da957-2f28-420c-8e95-189e2e8e9ac0) <br/>
**Install dependencies using rosdep** <br/>
ROS 2 packages are built on frequently updated Ubuntu systems. It is always recommended that you ensure your system is up to date before installing new packages <br/>
![FreespaceSegmentation54](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4066fce4-62d8-4c3a-b658-b866c90d1cb2) <br/>
![FreespaceSegmentation55](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/be92124b-a493-4912-96d6-44b06eb59c2d) <br/>
![FreespaceSegmentation56](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/68828fd7-6a57-476a-8ba8-e06b61d32402) <br/>
**Build the code in the workspace** <br/>
If you have already installed ROS 2 another way (either via Debians or the binary distribution) <br/>
Make sure that you run the below commands in a fresh environment that does not have those other installations sourced <br/>
Also ensure that you do not have source /opt/ros/${ROS_DISTRO}/setup.bash in your .bashrc <br/>
=> Confirmed <br/>
Make sure that ROS 2 is not sourced with the command printenv | grep -i ROS. The output should be empty <br/>
![FreespaceSegmentation57](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/599dae3a-0f73-43e1-8fb3-f9c2d140a136) <br/>
![FreespaceSegmentation58](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/415485a8-0591-4ea3-9eaa-5197b689be7a) <br/>
**Environment setup** <br/>
Source the setup script <br/>
Set up your environment by sourcing the following file <br/>
![FreespaceSegmentation59](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5954ae2c-8b48-482e-91ac-72b7d33ccdc2) <br/>
Save it in bashrc <br/>
![FreespaceSegmentation60](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/fb104dbc-dd8d-4922-93a1-08c683303db8) <br/>
![FreespaceSegmentation61](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a2b591ed-c39a-4c6d-9cc2-5be6d90998ef) <br/>

**Try some examples** <br/>
Source the setup file and then run a C++ talker: <br/>

Source the setup file and then run a Python listener: <br/>























=> Already Done <br/>
(2)-3 Launch Isaac Sim App Selector window <br/>
![FreespaceSegmentation2-1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0aa5850d-8ce2-42cc-927f-ac0b1634ea22) <br/>
(2)-4 Follow the steps outlined in another [documentation](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html#running-native-ros)
If you have a system level ROS 2 install <br/>
Click Open in Terminal button <br/>
Open a terminal window and then follow the steps outlined [here](https://nvidia-isaac-ros.github.io/getting_started/isaac_sim/index.html) <br/>
ROS2 Setup <br/>
Source Ros2 <br/>
![FreespaceSegmentation2-3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/af60dabe-41df-4197-b8e7-3761903d5cb9) <br/>
![FreespaceSegmentation2-4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/93ddc339-f46b-4ccf-b33f-f7683f47b7dc) <br/>
Ensure your ROS2 install is sourced before proceeding <br/>
Enabling the ROS2 Bridge Extension <br/>
ROS2 <br/>
Not using a Isaac Sim ROS2 Workspace -> Follow another [documentation](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html#running-native-ros) <br/>
![FreespaceSegmentation2-5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e58d622d-4a64-4bfa-8f79-e01763e76fa4) <br/>
Create a file named fastdds.xml under "~/.ros/" <br/>
[fastddsxml.txt](https://github.com/growingpenguin/growingpenguin.github.io/files/13973052/fastddsxml.txt) <br/>
Paste the above snippet link into the file <br/>
![FreespaceSegmentation2-7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/804d9ccb-24f5-4f78-aedf-5e2ad4940c17) <br/>
![FreespaceSegmentation2-6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/57a8ca77-b4a5-4ebc-9487-5907ffe97bd6) <br/>
Run export FASTRTPS_DEFAULT_PROFILES_FILE="~/.ros/fastdds.xml" in the terminals that will use ROS2 functions, as well as setting it under “Extra Args” when launching Isaac Sim from the Nucleus Launcher <br/>
=> Save it in .bashrc <br/>
![FreespaceSegmentation2-9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a30e1977-b288-48f8-96b4-ca1effc91b91) <br/>
To enable ROS2 bridge extensions <br/>
Go to the extension manager menu Window->Extensions and search for ROS2 bridge  <br/>
Warning:Only one of the ROS Bridge extensions can be enabled at any given time, so if switching between the two bridges, disable one before enabling the other <br/>
(2)-5 Launch Isaac Sim <br/>
![FreespaceSegmentation2-8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/24818f16-b4d5-4707-89a4-313e823f0e88) <br/>
(2)-6 Open Isaac ROS Sample scene as shown below <br/>
Isaac Examples > ROS > Isaac ROS > Samples Scene <br/>
(2)-7 Result: <br/>
Successful <br/>
![FreespaceSegmentation36](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ca883302-1626-42e3-b672-528a43bb07b8) <br/>
(3)Disable the clock reset when simulation is stopped <br/>
![FreespaceSegmentation37](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/abddffdb-2e7d-46bb-9889-481a76734fd9) <br/>
Go to the Stage tab and select /World/ROS_Clock/isaac_read_simulation_time, then untick the Reset On Stop checkbox <br/>
(4)Press Play to start publishing data from Isaac Sim <br/>
![FreespaceSegmentation38](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8c018160-e8c2-4c18-8a5f-8da386ed47de) <br/>
(5)Open a second terminal and attach to the container <br/>
![FreespaceSegmentation39](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/58f84b77-fcb8-468d-9f49-5341cf0fa1d5) <br/>
(6)In the second terminal, start the isaac_ros_bi3d node using the launch files <br/>
![FreespaceSegmentation40](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/31e2d94a-687b-4970-bcee-f91bc4576073) <br/>
Problem: Rviz nothing displayed <br/>
![FreespaceSegmentation41](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cad96efa-dfae-4ad9-8869-271d91fe099e) <br/>
Solution: (Searching for it...) <br/>
https://forums.developer.nvidia.com/t/tutorial-for-freespace-segmentation-with-isaac-sim-rviz-nothing-displayed/279466 <br/>
(7)Optionally, you can run the visualizer script to visualize the disparity image <br/>

286.1 Turn off this advice by setting config variable advice.detachedHead to false
286.1 
286.1 HEAD is now at 2df716c Rebase from 'upstream' (no changes)
------
ubuntu_20_foxy_minimal.dockerfile:82
--------------------
  81 |     
  82 | >>> RUN mkdir -p ${ROS_ROOT}/src && \
  83 | >>>     cd ${ROS_ROOT} && \
  84 | >>>     rosinstall_generator --deps --rosdistro ${ROS_DISTRO} rosidl_runtime_c rcutils rcl rmw tf2_msgs geometry_msgs nav_msgs std_msgs rosgraph_msgs sensor_msgs vision_msgs rclpy ros2topic ros2pkg ros2doctor ros2run ros2node ros_environment > ros2.${ROS_DISTRO}.${ROS_PKG}.rosinstall && \
  85 | >>>     cat ros2.${ROS_DISTRO}.${ROS_PKG}.rosinstall && \
  86 | >>>     vcs import src < ros2.${ROS_DISTRO}.${ROS_PKG}.rosinstall
  87 |     
--------------------
ERROR: failed to solve: process "/bin/sh -c mkdir -p ${ROS_ROOT}/src &&     cd ${ROS_ROOT} &&     rosinstall_generator --deps --rosdistro ${ROS_DISTRO} rosidl_runtime_c rcutils rcl rmw tf2_msgs geometry_msgs nav_msgs std_msgs rosgraph_msgs sensor_msgs vision_msgs rclpy ros2topic ros2pkg ros2doctor ros2run ros2node ros_environment > ros2.${ROS_DISTRO}.${ROS_PKG}.rosinstall &&     cat ros2.${ROS_DISTRO}.${ROS_PKG}.rosinstall &&     vcs import src < ros2.${ROS_DISTRO}.${ROS_PKG}.rosinstall" did not complete successfully: exit code: 1






Reference: <br/>
https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/bi3d_freespace_segmentation/tutorial_isaac_sim.html <br/>
https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_freespace_segmentation/isaac_ros_bi3d_freespace/index.html#quickstart <br/>
https://nvidia-isaac-ros.github.io/getting_started/isaac_sim/index.html <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html#running-native-ros <br/>


