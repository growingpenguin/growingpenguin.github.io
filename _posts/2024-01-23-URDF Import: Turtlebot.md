---
layout: post
title:  "Assignment: 4th Week - URDF Import: Turtlebot"
---

# ROS Tutorials (Linux Only) 
## [URDF Import: Turtlebot](https://docs.omniverse.nvidia.com/isaacsim/latest/ros_tutorials/tutorial_ros_turtlebot.html) 
**Learning Objectives** <br/>
Import a Turtlebot3 into Isaac Sim using the URDF importer <br/>
**Getting Started** <br/>
Prerequisites <br/>
Completed ROS & ROS2 installation so that ROS is available <br/>
ROS extension is enabled <br/>
Necessary environment variables are set <br/>
**Importing TurtleBot URDF** <br/>
-Download and build the Turtlebot3 description package if you haven’t done so already <br/>
Option1: Can be built inside the ROS workspace <br/>
Option2: Can also use your own ROS workspace <br/>
If choosing to use your own workspace, make sure to source that workspace before launching Omniverse Isaac Sim <br/>
(So that the path to it is part of ROS_PACKAGE_PATH) <br/>
=>Already sourced in .bashrc <br/>
(1)Clone the turtlebot3 github repository <br/>
git clone -b foxy-devel https://github.com/ROBOTIS-GIT/turtlebot3.git turtlebot3 <br/>
(2)Navigate to the urdf folder turtlebot3/turtlebot3_description/urdf/ <br/>
code <br/>
Either the .urdf file, or the .xacro file for turtlebot3_burger(Depending on the distro version) can be found <br/>
(3)Convert .xacro file to .urdf file <br/> 
rosrun xacro xacro -o <output_name>.urdf <input_file>.urdf.xacro <br/>
(Make sure the path to those ROS packages are also inside the ROS_PACKAGE_PATH before launching the simulator) <br/>
Purpose of the Tutorial <br/>
:Only need to build the turtlebot3_description package (Feel free to bypass other packages in the repository) <br/>
Process <br/>
(1)Import Environment <br/>
(1)-1 Use an Isaac environment for this tutorial <br/> 
picture <br/>
Open the environment by going to the Content tab below the viewport <br/>
picture <br/>
Find Isaac/Environments/Simple_Room/simple_room.usd <br/>
(1)-2 Import the robot into any environment of your choosing (Not wanting to use the provided environment) <br/>
picture <br/>
Navigate to Create -> Physics <br/>
Add GroundPlane and a PhysicsScene to your environment <br/>
picture <br/>
Navigate to Create -> Light <br/>
Add some lighting by playing with the various types of lighting <br/>
(2)Add simple_room.usd <br/>
picture <br/>
Drag the simple_room.usd onto a new stage <br/>
Place it at the origin in the Transform Property (Zero out all the Translate components) <br/> 
(3)Open the URDF importer <br/>
picture <br/>
Isaac Utils > Workflows > URDF Importer <br/>
(4)Configure Option <br/>
picture <br/>
Uncheck clear stage: Preserve the existing environment <br/>
picture <br/>
In the prompt window, inside Import Option section <br/>
uncheck clear stage to preserve the existing environment <br/>
picture <br/>
uncheck Fix Base Link since this is a mobile robot <br/>
picture <br/>
Change Joint Drive Type to Velocity: wheels can be properly driven later <br/>
(Need to zoom in a bit to see the table inside the room) <br/>
(5)Locate and import URDF file <br/> 
picture <br/>
Inside Import section <br/>
Locate the URDF file you wish to import in the Input File <br/>
(Import button will only enable after you’ve selected the file) <br/>
(6)Save asset <br/>
picture <br/>
Once the asset is imported into Omniverse Kit <br/>
Copy of the .usd version of the asset will be automatically saved <br/>
Specify the folder you wish to save the asset in Output Directory if it’s different than the folder that the .urdf file is located in <br/>
Folder name matching the .urdf file will be created in the specified directory, and the .usd file will be inside the newly created folder <br/>
(7)Caution on import <br/>
Make sure to unselect everything on the stage (Click on an empty space inside the Stage tab, or select /World on the tree) <br/>
Why? <br/>
Otherwise you might be importing the Turtlebot as a child of a random object on the tree <br/>
(8)Import <br/>
picture <br/>
Click Import <br/>
(9)Play with Turtlebot <br/>
picture <br/>
When first imported, Turtlebot will be on the table <br/>
picture <br/>
Using the gizmo place it just above the floor of the room <br/>
(10)Play <br/>
Press Play <br/>
Should see the Turtlebot fall onto the floor <br/>
**Tune the Robot** <br/>
URDF importer: <br/>
Imports material, physical, and joint properties automatically <br/>
(Whenever it is available and have matching categories in Omniverse Isaac Sim) <br/>
In cases there are no available or matching categories, or if the units are different between the two systems <br/>
Problem: <br/>
What gets automatically filled in may not be accurate and changes the robot’s behavior <br/>
Steps for tuning some of the common parameters: <br/>
Frictional Properties <br/>
If robot’s wheels are slipping <br/>
Try changing the friction coefficients of the wheels and potentially the ground as well <br/>
Follow steps in 3.4.2 [Add Simple Objects] <br/>(https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_intro_simple_objects.html#isaac-sim-app-tutorial-intro-simple-objects) <br/>
Physical Properties <br/>
-If no explicit mass or inertial properties are given: <br/>
The physics engine will estimate them from the geometry mesh <br/>
-Verify this by finding “Physics > Rigid Body” under its property tab: <br/>
Find the prim that contains the rigid body for the given link to update the mass and inertial properties <br/>
Option1: If already having a “Mass” category under its Physics property tab <br/>
Modify them accordingly <br/>
Option2: If a “Mass” category doesn't exist already <br/>
Add it by clicking on the +Add button on top of the Propery tab <br/> 
Select “Physics > Mass” <br/>
Joint Properties <br/>
Robot is oscillating at the joint or moving too slow <br/>
Take a look at the stiffness and damping parameters for the joints <br/>
High stiffness: <br/>
Makes the joints snap faster and harder to the desire target <br/>
Higher damping:  <br/>
Smoothes but also slows down the joint’s movement to target <br/>
Pure position drives <br/>
Set relatively high stiffness and low damping <br/>
Velocity drives <br/>
Stiffness must be set to zero with a non-zero damping <br/>
Two tools are provided to help with inspect the joints and tune the stiffness and damping parameters <br/>
Gain Tuner and Articulation Inspector <br/>
Perspective tutorials for details on how to use them <br/>
**Summary** <br/>
Tutorial covered the following topics: <br/>
URDF import <br/>
Tuning the robot parameters <br/>

Reference <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/ros_tutorials/tutorial_ros_turtlebot.html <br/>
