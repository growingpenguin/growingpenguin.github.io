---
layout: post
title:  "Import Turtlebot"
---

# URDF Import: Turtlebot
## Objective
Import a Turtlebot3 into Isaac Sim using the URDF imporer <br/>
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
Ref: https://docs.omniverse.nvidia.com/nucleus/latest/workstation/installation.html <br/>
## Importing TurtleBot URDF
(1)Download and build the Turtlebot3 description package <br/>
Build it inside the ROS workspace <br/>
=> isaac_ros-dev <br/>
(1)-1 Navigate to the Ros2 Workspace <br/>
```
cd ${ISAAC_ROS_WS}/src
```
Ref: https://nvidia-isaac-ros.github.io/getting_started/dev_env_setup.html <br/>
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
```
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
(3)Set up the simple room environment <br/>
![ImportTurtlebot7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8744d980-1f79-4ccf-8c77-35a03ff35278) <br/>
On a new stage, drag the simple_room.usd onto the stage, and place it at the origin by zero out all the Translate components in the Transform Property <br/>
You many need to zoom in a bit to see the table inside the room <br/>
=> Click on the table > Pressed F <br/>
(4)Open the URDF importer <br/>
![ImportTurtlebot8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a62736ce-1652-4956-8697-bc2feacb4adf) <br/>
![ImportTurtlebot9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0bf143fc-5f26-41b6-bd0a-4b70cdc9f70f) <br/>
Isaac Utils > Workflows > URDF Importer <br/>
(5)Change the import options <br/>
![ImportTurtlebot10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/280b5df3-55da-492a-9445-ec490b2946a3) <br/>
In the prompt window, inside Import Option section <br/>
uncheck clear stage to preserve the existing environment<br/>
uncheck Fix Base Link since this is a mobile robot <br/>
Change Joint Drive Type to Velocity so that wheels can be properly driven later <br/>
(6)Import additional materials <br/>
(6)-1 Import ball <br/>
![ImportTurtlebot12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/48e63f2d-0e6a-4292-8cad-0d39c99e2386) <br/>
Inside Import section, first locate the URDF file you wish to import in the Input File <br/>
(The Import button will only enable after you’ve selected the file) <br/>
![ImportTurtlebot13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/09e5d942-7fac-4135-8095-577bd5fdaa2b) <br/>
![ImportTurtlebot15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/71fdcdc1-68b6-4e45-a9fa-9fe157b434af) <br/>
Click on Folder > objects > ball.urdf > Select URDF> Press IMPORT <br/>
(6)-2 Import turtlebot3_burger <br/>
```
#Input file Path
~/workspaces/isaac_ros-dev/src/turtlebot3/turtlebot3_description/urdf/turtlebot3_burger.urdf
#Output file Path
/home/rosexpert1/Desktop/IsaacSim_usd/
```
![ImportTurtlebot18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e3ba194a-776d-461d-9267-4240bfcdfc18) <br/>
![ImportTurtlebot19](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/607672cd-db32-44e2-b7d6-e51c19576f33) <br/>
URDF to usd <br/>
(7)Convert the urdf to usd <br/>
![ImportTurtlebot20](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/be9110f6-5466-4021-81cb-b468ffcc16f8) <br/>
Once the asset is imported into Omniverse Kit, a copy of the .usd version of the asset will be automatically saved <br/>
Specify the folder you wish to save the asset in Output Directory if it’s different than the folder that the .urdf file is located in <br/>
A folder name matching the .urdf file will be created in the specified directory, and the .usd file will be inside the newly created folder <br/>
turtlebot3_burger.usd Generated <br/>
(8)Selct the World Prim <br/>
![ImportTurtlebot21](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/90b724ef-5018-4a1b-aaef-f6af3b346bb7) <br/>
Make sure to unselect everything on the stage by click on an empty space inside the Stage tab, or select /World on the tree <br/>
Otherwise you might be importing the Turtlebot as a child of a random object on the tree <br/>
(9)Click Import <br/>
![ImportTurtlebot22](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bde4dbb2-7a96-4379-8c3b-a6f008029fee) <br/>
![ImportTurtlebot23](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/50274e42-c0c9-4bb0-a2b7-f4c4addd3505) <br/>
Import turtlebot3_burger.usd <br/>
(10)Place turtlebot3 to the floor <br/>
![ImportTurtlebot24](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e942ab19-7a30-47dd-87b4-d72619f80962) <br/>
When the Turtlebot is first imported, it will be on the table. Place it just above the floor of the room using the gizmo <br/>
(11)Press Play <br/>
Press Play and you should see the Turtlebot fall onto the floor <br/>
Video File: https://drive.google.com/file/d/1zyehw_vfdD2VoedMwoavM9YNJf8PXhyJ/view?usp=sharing <br/> 

## Tune the Robot
The URDF importer automatically imports material, physical, and joint properties whenever it is available and have matching categories in Omniverse Isaac Sim <br/> 
(However, in cases there are no available or matching categories, or if the units are different between the two systems, what gets automatically filled in may not be accurate and changes the robot’s behavior) <br/> 
Steps for tuning some of the common paramters <br/> 
(1)Frictional Properties <br/>
If your robot’s wheels are slipping, try changing the friction coefficients of the wheels and potentially the ground as well following steps 2.4.2 in [Add Simple Objects](https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_intro_simple_objects.html#isaac-sim-app-tutorial-intro-simple-objects) <br/> 
Adding Contact and Friction Parameters <br/>
Intend to modify frictional properties <br/>
(1)-1 Create a different physics material and then assign it to the desired object <br/>
![ImportTurtlebot25](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/66b4e625-20c4-4f85-9f8e-8284a723bef0) <br/>
Go to the Menu Bar and click Create > Physics > Physics Material, select Rigid Body Material in the popup box <br/>
![ImportTurtlebot26](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/52a2baf4-8cf2-49a1-aa40-337650a7be36) <br/>
A new PhysicsMaterial will appear on the stage tree. Parameters such as friction coefficients and restitution can be tuned in its property tab <br/>
![ImportTurtlebot27](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b291150f-32eb-4009-a740-d9f06be8da1a) <br/>

(2)Physical Properties <br/>
If no explicit mass or inertial properties are given, the physics engine will estimate them from the geometry mesh <br/>
To update the mass and inertial properties, find the prim that contains the rigid body for the given link (You can verify this by finding “Physics > Rigid Body” under its property tab) <br/>
If it already has a “Mass” category under its Physics property tab, modify them accordingly <br/>
(If there isn’t already a “Mass” category, you can add it by clicking on the +Add button on top of the Propery tab, and select “Physics > Mass”) <br/>

(3)Joint Properties <br/>
If your robot is oscillating at the joint or moving too slow, take a look at the stiffness and damping parameters for the joints <br/>
High stiffness makes the joints snap faster and harder to the desire target, and higher damping smoothes but also slows down the joint’s movement to target <br/>
-Pure position drives: Set relatively high stiffness and low damping <br/>
-Velocity drives: Stiffness must be set to zero with a non-zero damping <br/>
-[Gain Tuner](https://docs.omniverse.nvidia.com/isaacsim/latest/features/robots_simulation/ext_omni_isaac_gain_tuner.html#isaac-gain-tuner) and [Articulation Inspector](https://docs.omniverse.nvidia.com/isaacsim/latest/features/robots_simulation/ext_omni_isaac_articulation_inspector.html#isaac-articulation-inspector): Two tools provided to help with inspect the joints and tune the stiffness and damping parameters <br/>




Reference:  <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/ros_tutorials/tutorial_ros_turtlebot.html#tune-the-robot <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/introductory_tutorials/tutorial_intro_interface.html#isaac-sim-app-tutorial-intro-interface <br/>
