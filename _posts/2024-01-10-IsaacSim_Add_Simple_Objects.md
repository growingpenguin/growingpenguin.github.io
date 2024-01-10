---
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
![Omniverse_IssacSim137](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f855733a-86ed-41c4-bb97-75483f90b378) <br/> 
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
(1)Test by playing Play <br/>
![Omniverse_IssacSim133](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/df372208-2281-4e0f-9d55-70ec72b41b09) <br/> 
(2)Select the Cube and both Cylinders on the stage tree by clicking while holding down the Ctrl + Shift key to select each object, or just Shift if they are consecutively listed on the tree <br/>
![Omniverse_IssacSim134](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e68c9f52-48af-401c-9375-0feb0f5d2677) <br/> 
(3)Add physics <br/>
In the Property tab > Click on the + Add button <br/>
![Omniverse_IssacSim135](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a74228b9-eedb-4446-a596-49a259a9750b) <br/>
Select Physics > Rigid Body with Colliders Preset  <br/>
(4)Press Play, and all three objects should now fall to the ground <br/>
![Omniverse_IssacSim138](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f15d3a19-9952-4fae-9803-e239f657bacd) <br/>
Rigid Body with Colliders Preset”: Automatically add both Rigid Body API and Collision API to the objects <br/>
These two APIs can be applied separately <br/>
Can have objects that have mass and are affected by gravity but have no collision properties, so you can pass right through them <br/>
Can have objects you can run into but hang in the air and are not affected by gravity <br/>
Check which APIs the selected object has <br/>
![Omniverse_IssacSim139](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dd3954f7-407d-4544-973a-befe3ceddb45) <br/>
Go to its Property tab > Scroll down to find sections labeled Rigid Body and Collider <br/>
![Omniverse_IssacSim140](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4c17c4dd-bacb-4b7e-bded-abe8bf6e4f1d) <br/>
Add the APIs separately (Under the same + Add button) <br/>
![Omniverse_IssacSim141](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7202b1c2-65cd-4761-aca1-b14ecb0efae8) <br/>
Remove APIs (Click on the X to delete the section) <br/>

### Examine Collision Meshes
Need to visually examine the collision meshes for the objects <br/>
See the outlines of the collision meshes  <br/>
![Omniverse_IssacSim142](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/73c5dd78-3b23-4339-ab02-f94c62578434) <br/>
Find the eye icon on top of the viewport > Click Show By Type > Physics > Colliders > All <br/> 
![Omniverse_IssacSim143](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6fbf2873-da08-4a51-bd6a-d5708ca8a612) <br/> 
Purple outlines should show up surrounding any objects that have collision APIs applied <br/> 
Objects: cuboid, the cylinders, and the ground plane <br/>

### Adding Contact and Friction Parameters
Modify frictional properties
(1)First create a different physics material and then assign it to the desired object <br/>
![Omniverse_IssacSim144](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ee107057-63b0-4dec-8afa-3fb540e79264) <br/>
Go to the Menu Bar <br/>
Click Create > Physics > Physics Material <br/>
Select Rigid Body Material in the popup box <br/>
![Omniverse_IssacSim145](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2bddb23a-2cb9-4fe1-a5b6-e9038b31ef37) <br/>
->New PhysicsMaterial will appear on the stage tree  <br/>

### Material Properties
Objects may reflect the color of the spotlight we’ve added earlier, but it doesn’t actually have any colors assigned <br/> 
Confirm it by turning off the spotlight <br/>
Change the color of the object <br/>
(1)Create a different material and then assign it to the objects, just like with the physics materials <br/> 
Create two, one for the body of the car and one for the wheels <br/>
![Omniverse_IssacSim146](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c062dba7-2aa1-45c9-8da4-2e6a4086b824) <br/>
Click Create > Materials > OmniPBR twice <br/>
(2)Rename materials <br/>
![Omniverse_IssacSim147](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f565a18f-110f-4257-8942-06f2e58504c4) <br/>
Right-click on the newly added materials on the stage tree > Rename them to body and wheel <br/>
Assign the corresponding rigid bodies to the newly created materials <br/>
![Omniverse_IssacSim148](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/eb31007f-b5bd-4b25-aa52-de2a605c171b) <br/>
Go to the Materials on selected models item in its Property tab > Select the matching material from the dropdown box <br/>
![Omniverse_IssacSim149](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3ae81a82-603a-4122-8337-c519580214a5) <br/>
cube <br/>
![Omniverse_IssacSim152](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/18fdc5c0-ea69-4dc1-b2cc-602a50b554da) <br/>
cylinder & cylinder01 <br/>
![Omniverse_IssacSim153](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/757949a4-880f-490f-a378-504ecb754ea8) <br/>
Change the property of the new materials <br/>
Select one of them on the stage tree <br/>
body <br/>
![Omniverse_IssacSim150](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bc5d81d1-ff85-4246-9d84-93589c7d0f83) <br/>
wheel <br/>
![Omniverse_IssacSim151](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ba0f7dcb-d9ce-4843-b6b4-e9c1205d193d) <br/>
Change its base color in Material and Shader/Albedo and play with its reflectivity roughness and whatever else you find interesting <br/>
You should see the color of the corresponding parts on the car change accordingly <br/>

### Summary
Explained how to add and manipulate object properties in the GUI <br/>
Topics Covered <br/>
(1)Adding primitive shapes onto the Stage <br/>
(2)Editing material properties, physics properties, and collision properties <br/>

Reference: <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_intro_simple_objects.html#isaac-sim-app-tutorial-intro-simple-objects <br/>


    

