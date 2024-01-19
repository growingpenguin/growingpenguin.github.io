![image](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c39d5a61-301a-40a8-b696-efee84dfcc2b)---
layout: post
title:  "Assignment: 3rd Week - Test Isaac_ROS_Freespace Segmentation Repository"
---
# Test Isaac_ROS_Freespace Segmentation Repository
Examples <br/>
Tutorial with RealSense, Tutorial with Zed, Tutorial with Isaac Sim <br/>

## [Tutorial with RealSense](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/bi3d_freespace_segmentation/tutorial_realsense.html) 

## [Tutorial With Zed](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/bi3d_freespace_segmentation/tutorial_zed.html)

## [Tutorial With Isaac Sim](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/bi3d_freespace_segmentation/tutorial_isaac_sim.html)
(1)Complete steps 1-7 listed in the quickstart here <br/>
=> Already Done <br/>
(2)Install and launch Isaac Sim following the steps in the Isaac ROS Isaac Sim Setup Guide <br/>
(2)-1 Install Isaac Sim, choosing the appropriate working environment <br/>
=> Already Done <br/>
(2)-2 Follow the [Running Native ROS](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html) instructions to ensure that ROS 2 and the required packages are installed to successfully enable the ROS 2 Bridge in Omniverse Isaac Sim <br/>
Ubuntu 20.04 Foxy <br/>
=> Already Done <br/>
(3)Launch Isaac Sim App Selector window <br/>
![FreespaceSegmentation2-1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0aa5850d-8ce2-42cc-927f-ac0b1634ea22) <br/>
(4)Follow the steps outlined in another [documentation](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html#running-native-ros)
If you have a system level ROS 2 install <br/>
Click Open in Terminal button <br/>
Open a terminal window and then follow the steps outlined [here](https://nvidia-isaac-ros.github.io/getting_started/isaac_sim/index.html) <br/>
ROS2 Setup <br/>
Source Ros2 <br/>
![FreespaceSegmentation2-3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/af60dabe-41df-4197-b8e7-3761903d5cb9) <br/>
![FreespaceSegmentation2-4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/93ddc339-f46b-4ccf-b33f-f7683f47b7dc) <br/>
Ensure your ROS2 install is sourced before proceeding <br/>
(4)-1 Enabling the ROS2 Bridge Extension <br/>
ROS2 <br/>
Not using a Isaac Sim ROS2 Workspace -> Follow another [documentation](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html#running-native-ros) <br/>
![FreespaceSegmentation2-5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e58d622d-4a64-4bfa-8f79-e01763e76fa4) <br/>
Create a file named fastdds.xml under ~/.ros/ <br/>
[fastddsxml.txt](https://github.com/growingpenguin/growingpenguin.github.io/files/13973052/fastddsxml.txt)
Paste the above snippet link into the file <br/>
Export xml file <br/>
(Optional) Run export ROS_DOMAIN_ID=(id_number) before launching Isaac Sim <br/>
Source your ROS 2 installation and workspace before launching Isaac Sim <br/>
![FreespaceSegmentation2-7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/804d9ccb-24f5-4f78-aedf-5e2ad4940c17) <br/>
![FreespaceSegmentation2-6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/57a8ca77-b4a5-4ebc-9487-5907ffe97bd6) <br/>
Run export FASTRTPS_DEFAULT_PROFILES_FILE=~/.ros/fastdds.xml in the terminals that will use ROS2 functions, as well as setting it under “Extra Args” when launching Isaac Sim from the Nucleus Launcher <br/>
=> Save it in .bashrc <br/>
To enable ROS2 bridge extensions <br/>
![FreespaceSegmentation2-9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a30e1977-b288-48f8-96b4-ca1effc91b91) <br/>
Go to the extension manager menu Window->Extensions and search for ROS2 bridge  <br/>
Warning:Only one of the ROS Bridge extensions can be enabled at any given time, so if switching between the two bridges, disable one before enabling the other <br/>












(4)-5 Launch Isaac Sim <br/>
![FreespaceSegmentation2-8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/24818f16-b4d5-4707-89a4-313e823f0e88)

(4)-6 Open Isaac ROS Sample scene as shown below <br/>
Isaac Examples > ROS > Isaac ROS > Samples Scene <br/>

Result: <br/>
Successful <br/>
![FreespaceSegmentation36](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ca883302-1626-42e3-b672-528a43bb07b8)

Reference: <br/>
https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/bi3d_freespace_segmentation/tutorial_isaac_sim.html <br/>
https://nvidia-isaac-ros.github.io/getting_started/isaac_sim/index.html <br/>



