---
layout: post
title:  "Assignment: 3rd Week - Assemble a Simple Robot"
---

# Introductory 
## [Assemble a Simple Robot](https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_gui_simple_robot.html#isaac-sim-app-tutorial-gui-simple-robot)

Omniverse Isaac Sim’s GUI interface features are the same ones used in NVIDIA Omniverse™ USD Composer, an application dedicated to world-building <br/>
Focus on the GUI functions that are most relevant to robotic uses <br/>
Omniverse Composer shows more sophisticated general world creation <br/>
Rig a simple “robot” with three links and two revolute joints to introduce the basic concepts of joints and articulations <br/>
(1)Take the objects that were added to the stage in Add Simple Objects <br/>
(2)Turn them into a mock mobile robot with rectangular body and two cylindrical wheels <br/>
The step is not needed for robots that are imported from Importing your Onshape Document or URDF Importer <br/>
These are important concepts to understand for tuning your robots and assembling objects with articulations  <br/>

### Learning Objectives
How to rig a two-wheel mobile robot <br/>
Organize stage tree hierarchy <br/>
Add joints between two rigid bodies <br/>
Add joint drives and joint properties <br/>
Add articulations <br/>

### Getting Started
Prerequisites <br/>
Please complete all Introductory Tutorials => All Done <br/>

### Add Joints
(1)Load mock robot <br/>
Load the asset provided in Isaac/Samples/Rigging/MockRobot/mock_robot_no_joints.usd: (Do not load it as a reference since you will need to make permanent modifications to the file) <br/>
![Assemble_A_Simple_Robot1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0091c86d-c36b-4c34-9fba-836e2cab9149)  <br/>
Isaac Assets(Beta) > Samples > Rigging > MOCKROBOT > mock_robot_no_joints <br/>
(1)Add a joint between two bodies <br/>
(1)-1 Click on the parent body and then the child body <br/>
![Assemble_A_Simple_Robot2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ba88e8b9-650d-4017-b289-ba1dc36ce8ba) <br/>
Select body, while holding Ctrl + Shift, Select wheel_left  <br/>
(1)-2 With both bodies highlighted, right-click and then select Create > Physics > Joints > Revolute Joint <br/>
![Assemble_A_Simple_Robot3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3576e157-e3df-4b85-baab-6919d73e15ca) <br/>
A RevoluteJoint will appear under wheel_left on the stage tree <br/>
(1)-3 Rename it to wheel_joint_left <br/>
![Assemble_A_Simple_Robot4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8336f163-fb81-4d09-808d-4742e76ae804) <br/>
Double check in the Property tab that body0 is /mock_robot/body (the cube), and body1 is /mock_robot/wheel_left (the cylinder) <br/>
(1)-4 Change the Axis of the joint to Y <br/>
![Assemble_A_Simple_Robot5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/89f9c18e-7b24-424d-afc6-609ea8a1c339) <br/>
(1)-5 Change Local Rotation <br/>
If you look closely, the joint’s two local frames are misaligned <br/> 
https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_gui_simple_robot.html <br/> 
Go to Local Rotation 0 and make x = 0 degrees <br/>
Go to Local Rotation 1 and make x = -90 degrees <br/>
Example here only shows an orientation misalignment, you may see translational misalignment depending on your robot <br/>

    Repeat steps 1-4 for the right wheel joint.



