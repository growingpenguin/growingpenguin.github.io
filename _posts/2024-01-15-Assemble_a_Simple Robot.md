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
(2)Add a joint between two bodies <br/>
(2)-1 Click on the parent body and then the child body <br/>
![Assemble_A_Simple_Robot2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ba88e8b9-650d-4017-b289-ba1dc36ce8ba) <br/>
Select body, while holding Ctrl + Shift, Select wheel_left  <br/>
(2)-2 With both bodies highlighted, right-click and then select Create > Physics > Joints > Revolute Joint <br/>
![Assemble_A_Simple_Robot3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3576e157-e3df-4b85-baab-6919d73e15ca) <br/>
RevoluteJoint will appear under wheel_left on the stage tree <br/>
(2)-3 Rename it to wheel_joint_left <br/>
![Assemble_A_Simple_Robot4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8336f163-fb81-4d09-808d-4742e76ae804) <br/>
(2)-4 Double check in the Property tab that body0 is /mock_robot/body (the cube), and body1 is /mock_robot/wheel_left (the cylinder) <br/>
![Assemble_A_Simple_Robot5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/28b038ce-74d5-406c-8718-b2581391cefd) <br/>
(2)-5 Change the Axis of the joint to Y <br/>
![Assemble_A_Simple_Robot6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/13d052ba-910d-46d4-a29a-46ef8ccb281d) <br/>
(2)-6 Change Local Rotation <br/>
If you look closely, the joint’s two local frames are misaligned <br/> 
Go to Local Rotation 0 and make x = 0 degrees <br/>
Go to Local Rotation 1 and make x = -90 degrees <br/>
(Besides orientation misalignment, Translational misalignment could be shown depending on your robot) <br/>
![Assemble_A_Simple_Robot7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e5e1b645-20a6-4f20-837d-70ff0424b456) <br/>
(2)-7 Repeat steps 1-4 for the right wheel joint <br/>
![Assemble_A_Simple_Robot8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b4a26d1d-43f2-4801-9c94-768c99e46ff8) <br/>
Add revolute joint and rename it to wheel_joint_right <br/>
![Assemble_A_Simple_Robot9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e0892c21-bb19-4293-b6e4-dff92ff97644) <br/>
Double check in the Property tab that body0 is /mock_robot/body(the cube), and body1 is /mock_robot/wheel_right(the cylinder) <br/>
![Assemble_A_Simple_Robot10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5a297c3f-b22a-4a9f-83c5-ac61f6d6232a) <br/>
(2)-8 Press Play <br/> 
Before the joints were added, the three rigid bodies fell to the ground separately <br/> 
Now that there are joints attached, the bodies will fall as if they are connected <br/>
https://drive.google.com/file/d/121tsHuF9xnBlMWz9Nc5gF4up1HwqWSqf/view?usp=sharing <br/>
Drag the robot around by holding down the Shift key and clicking and dragging on any part of the robot in the viewport <br/> 
They move together like they are connected via revolute joints <br/> 
### Add Joint Drive 
Adding the joint is only adding the mechanical connection <br/>  
Add a joint drive API to be able to control and drive the joints <br/> 
![Assemble_A_Simple_Robot11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/02f2885a-640b-4da0-949f-d7612d9dcd7e) <br/> 
Select both joints and click the + Add button in the Property tab, and select Physics > Angular Drive to add drive to both joints simultaneously <br/> 
**Position Control**:  <br/> 
For position controlled joints, set a high stiffness and relatively low or zero damping <br/> 
-When controlling a joint based on its position <br/>
joint will resist changes to its position strongly <br/>
Keep the damping low or even at zero<br/>
Damping is like a kind of resistance that slows down movement, so keeping it low means the joint can move more freely
**Velocity Control**: <br/> 
For velocity controller joints, set a high damping and zero stiffness. <br/> 
When controlling a joint based on its speed (velocity), the opposite should be done <br/> 
Set the damping high, which means the joint will have a lot of resistance to speed changes, making it move more smoothly <br/> 
Set the stiffness to zero, as you don't need the joint to resist changes in its position, just control its speed <br/> 
(1) Velocity control <br/>
For joints on a wheel, it makes more sense to be velocity controlled <br/> 
Set both wheels’ Damping to 1e4(high damping) and Target Velocity to 200 <br/> 
If working with joints with limited range, those can be set in the Property tab, under the Raw USD Properties > Lower (Upper) Limit <br/> 
![Assemble_A_Simple_Robot12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0571c551-cfc7-4c5a-a145-fe1c82898fe1) <br/> 
(2) Play <br/>
Press Play to see our mock mobile robot drive off <br/> 
https://drive.google.com/file/d/1ieWpsPcj4B25fXVbJVDo7oBWMBb-DBOJ/view?usp=drive_link <br/>

### Add Articulation
Directly driving the joints can move the robot, it is not the most computationally efficient way <br/> 
Making things into articulations can achieve higher simulation fidelity, fewer joint errors, and can handle larger mass ratios between the jointed bodies <br/> 
You can read more regarding the physics simulation behind it in Physics Core: Articulation <br/> 
To turn a series of connected rigid bodies and joints into articulation, we need to set an articulation root to anchor the articulation tree. According to instructions on defining articulation trees in Physics Core: Articulation:
    For a fixed-base articulation, add the Articulation Root Component either to: 1) the fixed joint that connects the articulation base to the world, or 2) an ancestor of the fixed joint in the USD hierarchy. The second option allows creating multiple articulations from a single root component added to the scene: Each descendant fixed joint will be defining an articulation base link. For a floating-base articulation, add the Articulation Root Component either to: 1) the root rigid-body link or 2) an ancestor of the root link in the USD hierarchy. <br/> 
In our case, we will add the articulation root to the robot body. Select body on the tree, open + Add in the Property tab, and add Physics > Articulation Root  <br/> 


Reference: <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_gui_simple_robot.html <br/> 

