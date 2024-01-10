![image](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a0219662-df82-4add-970d-e61aefb620ff)---
layout: post
title:  "Assignment: 3rd Week - Isaac Sim Add Simple Objects"
---

# Introductory 
## [Isaac Sim Add Simple Objects](https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_intro_simple_objects.html#isaac-sim-app-tutorial-intro-simple-objects) 
Showcase the basic GUI functions that add simple objects to the stage, as well as inspecting and modifying their physics and material properties <br/>
### Learning Objectives
This tutorial details how to add simple primary shapes to the scene and edits their properties <br/> 
Add and manipulate simple shapes <br/>
Enable physics properties in objects <br/>
Examine collision properties <br/>
Edit physics properties such as friction <br/>
Edit material properties such as color and reflectivity <br/>

### Getting Started
Prerequisites <br/>
Complete Isaac Sim Interface and Environment Setup Tutorial <br/>

### Adding Objects to the Scene
(1)Start by adding a Cube to the stage as the mobile robot’s body <br/>
![Omniverse_IssacSim123](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/da30fb16-42ad-48da-acb2-c4fccb3c193d) <br/>
Go to the Menu Bar <br/>
Click Create > Shapes > Cube <br/>
(2)Change the size of the cube <br/>
![Omniverse_IssacSim124](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6258aaf1-5bec-460d-af4e-bc38d6038a99) <br/>
Select the Cube on the Stage tree > Go to the Property tab > Find Geometry > Size <br/>
For now type in 1.0 <br/>
(3)Move it above the ground and change its shape by using the gizmos <br/>
![Omniverse_IssacSim125](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bbac4f87-70c9-460f-8d83-6b0ff358309d) <br/>
Keep the property tab open for the cube  <br/>
Movements by the gizmo are reflected in the object’s transform <br/>
![Omniverse_IssacSim126](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/caff0dfd-b6ae-47de-9679-0dfa34fc7dd9) <br/>
Change Shape <br/>
(4)Directly type into the property window to make your changes  <br/>
![Omniverse_IssacSim127](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/028443eb-0d5f-4128-9f8b-c28648802dff)  <br/>
Fix the translation (Transform > translate) of the cuboid at (0, 0, 1), and the scale (Transform > Scale) at (2, 1, 0.5) <br/>
(5)Add cylinder and adjust the values <br/>
![Omniverse_IssacSim128](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f4d2ef39-b64c-40f6-a491-a22344686514)  <br/> 
Add a cylinder to the stage <br/> 
Click Create > Mesh > Cylinder <br/>
Change its Geometry > Radius to 0.5, and Geometry > Height to 1.0 <br/>
![Omniverse_IssacSim130](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6ae1c1ed-32cc-48b7-a0e8-d5160717aa33)  <br/>
Place it at y = 1.5 and z = 1.0, and rotate it around the x-axis by 90 degrees <br/>
(6)Duplicate the cylinder we just made <br/>
![Omniverse_IssacSim131](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/15fef3f1-e006-414f-b7bc-0e00c2f73a8c) <br/>
Right click it on the stage tree and Duplicate <br/>
![Omniverse_IssacSim132](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/466e06f5-e27d-442c-87dd-e27e5b4f9bbb) <br/>
Move it to y = -1.5 while keeping all other parameters the same <br/>

### Adding Physics Properties
Objects added first are only visual objects, with no physics or collision properties attached to them <br/> 
Problem: Simulation is started by pressing Play and gravity is applied. But if started, objects do not move <br/> 
Why?: They are unaffected by physics <br/>
Solution: Turn them into rigid bodies with collision properties, as a robot should be <br/>
(1)
Select the Cube and both Cylinders on the stage tree by clicking while holding down the Ctrl + Shift key to select each object, or just Shift if they are consecutively listed on the tree <br/>
![Omniverse_IssacSim133](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/df372208-2281-4e0f-9d55-70ec72b41b09) <br/> 

![Omniverse_IssacSim134](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e68c9f52-48af-401c-9375-0feb0f5d2677) <br/> 

    
    In the Property tab, click on the + Add button, and select Physics > Rigid Body with Colliders Preset.

    Press Play, and all three objects should now fall to the ground.

