---
layout: post
title:  "Import Turtlebot"
---

# URDF Import: Turtlebot
## Objective
Import a Turtlebot3 into Isaac Sim using the URDF importer <br/>
## Getting started
(1)Prerequisite <br/>
(1)-1 Completed ROS & ROS 2 Installation so that ROS is available, ROS extension is enabled, and necessary environment variables are set <br/>
Running Native os <br/>
Ros2 > No System Level Install > Humble <br/>
=> Already Done <br/>
Ref: https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html#isaac-sim-app-install-ros <br/>
(1)-2 Basic understanding ROS workspace.
=> Confirmed <br/>
(1)-3 Nucleus downloaded to access Isaac Environments <br/>
![ImportTurtlebot1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0584e24f-7f62-498c-9a20-0059e77fa6bb) <br/>
=> Already Done <br/>

## Importing TurtleBot URDF
(1)Download and build the Turtlebot3 description package <br/>
Build it inside the ROS workspace <br/>
=> isaac_ros-dev <br/>
(1)-1 Navigate to the Ros2 Workspace <br/>
```
cd ${ISAAC_ROS_WS}/src
```
(1)-2 Download Turtlebot3 description package <br/>
```
git clone -b humble-devel https://github.com/ROBOTIS-GIT/turtlebot3.git turtlebot3
```
distro: Humble <br/>
(1)-3 Navigate to the urdf folder turtlebot3/turtlebot3_description/urdf/ <br/> 
```
cd ~/workspaces/isaac_ros-dev/src/turtlebot3/turtlebot3_description/urdf
```
![ImportTurtlebot2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/56facf2c-a3ed-41e0-9185-2cb26af1702c) <br/> 
Found the .urdf file for turtlebot3_burger, no need to convert file to an urdf <br/>
(1)-4 If your URDF file contains calls to other ROS packages, such as when looking for mesh files of accessories, make sure the path to those ROS packages are also inside the ROS_PACKAGE_PATH before launching the simulator <br/>
Part of the urdf file that contains calls to other Ros packages <br/>
```
#xmlns:xacro="http://ros.org/wiki/xacro">
<!-- <xacro:include filename="$(find turtlebot3_description)/urdf/common_properties.urdf"/> -->
#base_link
<mesh filename="package://turtlebot3_description/meshes/bases/burger_base.stl" scale="0.001 0.001 0.001"/>
#wheel_left_link
<mesh filename="package://turtlebot3_description/meshes/wheels/left_tire.stl" scale="0.001 0.001 0.001"/>
#wheel_right_link
<mesh filename="package://turtlebot3_description/meshes/wheels/right_tire.stl" scale="0.001 0.001 0.001"/>
#base_scan
<mesh filename="package://turtlebot3_description/meshes/sensors/lds.stl" scale="0.001 0.001 0.001"/>
```
URDF snippet includes references to external mesh files located in the turtlebot3_description package <br/>
These files are used to visually represent parts of the TurtleBot3 Burger robot, including its base, wheels, and the LDS (Laser Distance Sensor) <br/>
The references are made using the package:// URI scheme, which ROS resolves by looking up the paths in the ROS_PACKAGE_PATH environment variable <br/>
```
nano ~/.bashrc
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/workspaces/isaac_ros-dev/src/turtlebot3/turtlebot3_description
![ImportTurtlebot3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c3458fbe-ca9b-4f17-bb67-478a72f4bc1a) <br/>
```
cd ~/workspaces/isaac_ros-dev
colcon build
```
![ImportTurtlebot4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7e0d10a9-4f5f-4bfd-a85d-f203bf5567e2) <br/>
Build the entire turtlebot3 package <br/>
Some package building showed errors <br/>
```
cd ~/workspaces/isaac_ros-dev
colcon build --packages-select turtlebot3_description
```
![ImportTurtlebot5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f0677586-9a19-42c9-9068-aaa0807b476e) <br/>
(For the purpose of this tutorial, you only need to build the turtlebot3_description package. Feel free to bypass other packages in the repository) <br/>
(2)Import robot to environment <br/>
![ImportTurtlebot6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6ba537d2-3f1e-4909-b38f-2cefc69b7ea4) <br/>
Use an Isaac environment for this tutorial(Can import the robot into any environment of your choosing) <br/>
Open the environment by going to the Content tab below the viewport, and find Isaac/Environments/Simple_Room/simple_room.usd <br/>
(If you do not want to use the provided environment, just make sure there is a GroundPlane and a PhysicsScene to your environment <br/>
 Both can be found in Create -> Physics. You may also need some lighting, play with the various types of lighting in Create -> Light to get the desired effect) <br/>
Ref: https://nvidia-isaac-ros.github.io/getting_started/dev_env_setup.html <br/>


Reference: https://docs.omniverse.nvidia.com/isaacsim/latest/advanced_tutorials/tutorial_advanced_import_urdf.html <br/>
