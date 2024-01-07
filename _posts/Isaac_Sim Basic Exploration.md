---
layout: post
title:  "Assignment: 2nd Week - Isaac_Sim Basic Exploration"
---
# Introductory 
## Isaac Sim Interface
**Learning Objectives** <br/>
Introduces the most commonly used user-interface buttons, menus, and controls in Omniverse Isaac Sim. <br/>
After this tutorial, you should be more confident in navigating and discovering content in the Isaac Sim interface. <br/>
**Getting Started** <br/>
(1)Adding a cube to the scene <br/>
![Omniverse_IssacSim59](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/86b70380-00fe-453f-bd01-1003fade57ed) <br/>
Go to Menu bar  <br/>
Click Create > Shapes > Cube <br/>
Cube is in the center of the Viewport. The Cube is Selected (highlighted in orange), and the Move (W) command is enabled by default. <br/>
(2)Transforming the Cube
Hover over and then click the Move Gizmo to drag and move the Cube.<br/>
Press “E”: <br/>
![Omniverse_IssacSim60](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b00169e0-3b58-41e2-bd57-e9b07cb5d7a4) <br/>
Switch to the Rotate Gizmo, and then click and drag the gizmo to rotate the Cube.<br/>
Press “R”:  <br/>
![Omniverse_IssacSim61](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8da76e59-91bc-42a2-9549-530faffd5294) <br/>
Switch to the Scale. Click and drag the gizmo to rotate the Cube <br/>
Press “W”:  <br/>
![Omniverse_IssacSim62](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/817a50dd-48d5-4450-8098-e7561dfa2241) <br/>
Switch back to the Move Gizmo. <br/>
Press “W” again: <br/>
![Omniverse_IssacSim63](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b2908b55-ba03-4fb3-902d-ce7d9e871bbe) <br/>
Toggle Move with Local Coordinates. Click and drag the gizmo to move the Cube on its local axes. <br/>
Press “ESCAPE”: <br/>
![Omniverse_IssacSim64](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/90e91d09-65b9-441f-aba5-e27fd3d8446f) <br/>
Deselect the Cube <br/>
(3)Practice transforming the Cube through its Property panel <br/>
![Omniverse_IssacSim65](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9a5de227-1b14-468f-b789-7dd92cb44660) <br/>
Select the Cube to populate the Property panel <br/>
![Omniverse_IssacSim66](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/fbf49da1-48b3-4665-8019-1af97bd2b314) <br/>
In the Transform > Translate field, click and drag the X value left and right to move the Cube along the X-Axis <br/>
![Omniverse_IssacSim67](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/91e0429b-f1ee-4052-a200-3186d2128d91) <br/>
Double Click the Y value and type “1” to move the Cube to Y=1 <br/>
![Omniverse_IssacSim68](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e797e7da-ae17-400f-a271-98ceec68416f) <br/>
Click the blue square all the way to the right of the Z value to reset the Translate value to its default setting (0,0,0) <br/>
![Omniverse_IssacSim69](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/16c29429-05f3-4985-9217-36a6e5335f0b) <br/>
Reset the Rotate and Scale values to their default setting <br/>
![Omniverse_IssacSim70](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9ed1f8c4-d11a-447e-a8ef-d20e92958fe6) <br/>
Set the Cube Translate to {X: 0, Y: -2, Z: -0.5} and Rotate to {X: 0, Y: 22.5, Z: 0} by double-clicking on the corresponding X, Y, Z values and typing in the values. <br/>
**Toggling Local & World Coordinates** <br/>
![Omniverse_IssacSim71](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/289fa323-60ed-4aff-98d0-8d1992830281)
![Omniverse_IssacSim72](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d54693e7-61b0-414d-be4b-bbc53378081a) <br/>
Press “W” multiple times: <br/>
Toggle between Move Global and Move Local <br/>
![Omniverse_IssacSim73](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/643d2c6a-99cd-4cca-9d6e-c31174f05361)
![Omniverse_IssacSim74](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/209ebfed-ed9e-4b99-9520-c7409888d2d1) <br/>
Press “E” multiple times: <br/>
Toggle between Rotate Global and Rotate Local <br/>
![Omniverse_IssacSim75](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4564f5e1-ee50-472e-998a-c7235153c0ff) <br/>
Pressing and holding the Move/Rotate Icons in the Toolbar can also be used to select the coordinate system <br/>
![Omniverse_IssacSim76](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4249491a-c26c-412a-a1e9-cba4c3078dc0) <br/>
Each Toolbar Icon will turn Orange when the Local coordinate system is active <br/>
Footnote: <br/>
toggle: On/Off Switch <br/>

**Navigating the Viewport** <br/>
Bring another object into the scene by adding a Sphere <br/>
![Omniverse_IssacSim77](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f65e2118-72c3-444b-8d57-89c792f14233) <br/>
Go to the top Menu Bar and Click Create > Shapes > Sphere. There should now be a Cube and a Sphere in the Viewport, with the Sphere selected by default <br/>
![Omniverse_IssacSim78](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6833707b-9b50-464d-aa82-fb0d9ed8ce38) <br/>
Translate the Sphere to {X: 0, Y: 2, Z: 0} <br/>
![Omniverse_IssacSim79](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/332e4dc9-a33f-476f-9a84-4ce22c6d919e) <br/>
Press “F” to Center and Zoom the Viewport Camera on the selected Sphere <br/> 
![Omniverse_IssacSim80](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/86edbea2-d957-4abd-b699-fa6229008d1f) <br/> 
Press “LMB”(left mouse button)+“ALT” to Orbit around the Sphere <br/> 
“Scroll Wheel” or Press “RMB”(right mouse button)+“ALT”: Zoom in. <br/> 
Press the “MMB” (middle mouse button) to Pan  <br/> 
Footnote: <br/>
Pan: Specific type of camera movement or interaction commonly used in 3D graphics and computer-aided design (CAD) applications  <br/>
![Omniverse_IssacSim81](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/064e1bc8-ead9-43f2-8d54-6a7c604d70f0) <br/>
Press “ESCAPE” to Deselect the Sphere <br/>
![Omniverse_IssacSim82](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/122935ee-889d-4925-9c35-489f5056229e) <br/>
Press “F” when nothing is Selected to Zoom All <br/>

**Using the Stage and Properties Panels** <br/>
Objects can be directly selected in the Viewport or in the Stage—the Panel at the top right of the Workspace.  <br/>
Stage: Powerful tree-based widget for organizing and structuring all the content in an Omniverse Isaac Sim scene <br/>
![Omniverse_IssacSim83](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/67a730f5-7ffb-4dbc-afdc-5167649c5a66) <br/>
Go to the top Menu Bar <br/>
Click Create > Xform: There should now be an empty Xform prim in the Stage panel, nested under World <br/>
![Omniverse_IssacSim85](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5b1d81f5-457a-4a00-a1a0-14d81c562a28) <br/>
Select the Cube line item from the Stage, and drag and drop onto the Xform <br/>
![Omniverse_IssacSim86](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ef0e0eec-dda8-4dd2-93f4-b8993eaa652d) <br/>
Select the Sphere and drag and drop it onto the Xform as well <br/>
=>Nothing changes in the Viewport.But a Parent-Child relationship between the Xform, the Sphere, and the Cube has been created. <br/> 
![Omniverse_IssacSim87](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/86036410-2875-4e89-b978-ed6412ff24f8) <br/> 
Select the Xform <br/>
Press “W” to enable the Move Gizmo. Grab and move the Xform <br/>
-Moving the Xform: Moves both the Sphere and the Cube. <br/>
-Child objects inherit the transforms of their parents. Important concept for how Omniverse Isaac Sim constructs articulated objects, such as Robots <br/>
![Omniverse_IssacSim88](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9b3f23f0-e4ff-4891-81eb-15a7bd7d5d97) <br/>
Select just the Cube <br/>
![Omniverse_IssacSim89](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c8c64582-9d35-4171-be36-57e1321a19c8) <br/>
Move the Xform <br/>
![Omniverse_IssacSim90](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f23f87d9-5199-46e7-a3cf-f8f9733c3f5f) <br/>
Its Transform Properties in the Property panel are the same, no matter how you move the Xform <br/>
![Omniverse_IssacSim91](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dfe4d16a-f5f7-4ab4-8d62-13853b3e2eba) <br/>
An object’s Transform Properties are a local transform, relative to its Parent <br/>
![Omniverse_IssacSim92](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1d70d5ab-f96c-4b44-b739-a317ffacbc2f) <br/>
Unparent the Cube by selecting the Cube from the Stage, then dragging and dropping it onto the World line item <br/>
![Omniverse_IssacSim93](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/22338477-d3d3-4383-a0b2-e0f485e483d1) <br/>
Right-click on the Xform > Click Delete <br/>
=>Cube’s Transform Properties now reflect the world transform <br/>
=>Sphere is deleted as well because it is a child of the Xform <br/>
Property panel > Transform Properties: Panel has a lot of useful UI inputs for interfacing directly with geometric, material, visual, and USD properties <br/>
![Omniverse_IssacSim94](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1dd3b080-4273-4b0f-85eb-179b3b370402) <br/>
Select the Cube from the Stage <br/>
Scroll through its Property panel -> Click the header of each sub-panel will collapse or show it <br/>
![Omniverse_IssacSim95](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6edcb9d3-fed4-4909-9d65-911ce7d8ee12) <br/>
Select the defaultLight from the Stage <br/>
Scroll through its Property panel and note the different information it shows compared to the Cube. Select the World (defaultPrim) from the Stage and note how its Property panel differs. <br/>




# How to Import Your Robot Into Isaac Sim in NVIDIA Omniverse
## Isaac Sim importers <br/>
**URDF** <br/>
-Good URDFs are imported with physics <br/>
-Joints automatically added <br/>
(1)Use the URDF Importer <br/>
(1)-1 Using the URDF Importer Extension Window <br/>
![Omniverse_IssacSim57](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/83b520a6-e557-46e8-92fb-086f078a7c51) <br/>
Window > Extensions > URDF Importer <br/>
Enable the omni.importer.urdf extension in Omniverse Isaac Sim <br/>
![Omniverse_IssacSim58](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2c417689-4c2c-42dd-a0d7-0b9d53025e46) <br/>
Isaac Utils > Workflows > URDF Importer <br/>

Reference: https://docs.omniverse.nvidia.com/isaacsim/latest/advanced_tutorials/tutorial_advanced_import_urdf.html <br/>
(2)Specify your URDF files <br/>
Click button URDF <br/>
Click my computer > Double click bittle.urdf <br/>
(3)Specify other things <br/>
ex. Joint Drive Strength: Whether this robot should be fixed  <br/>
(4)Load Robot <br/>
Click Load Robot button <br/>
:It will parser and load the robots for you <br/>
(5)Try adding a ground plane <br/>
Navigate Create > Physics > Click Ground Plane <br/>
(6)Create a Dome light <br/>
Dome light provides a more natural looking lighting environment <br/>
Navigate Light > Click Dome Light <br/>
(7)Specify texture <br/>
Specify a 4K texture to the dome light  <br/>
Drag and drop lakeside_4k.hdr to Texture File <br/>
(8)Reduce intensity <br/>
Reduce intensity value so that it doesn't appear too hash  <br/>
(9)Move Robot <br/>
Physics are taken care of and that's it <br/>
(10)Control joint <br/>
Search joint for navigation tab > Click .joint file <br/>
(11)Specify target position <br/>
Drag and adjust the target position <br/>
Reference: https://docs.omniverse.nvidia.com/isaacsim/latest/features/environment_setup/ext_omni_isaac_urdf.html <br/>

**STEP** <br/>
-Need to set up the physics manually <br/>
(1)Search for robot <br/>
Use the [grabcad website](https://grabcad.com/library) and search for robot and download the step files <br/>
ex. PETOI Bittle <br/>
(2)Step importer <br/>
Navigate Window > URDF Importer <br/>
(3)Specify your URDF files <br/>
Click button URDF <br/>
Click my computer > Double click bittle_EO.STEP <br/>
(4)Load Robot <br/>
Load Meshes for you <br/>
These are just meshes, and they don't have physics created yet <br/>
(5)Try adding a ground plane <br/>
Navigate Create > Physics > Click Ground Plane <br/>
<br/>
**OnShape** <br/>
-Need to set up the physics manually <br/>


Reference <br/>
https://www.youtube.com/watch?v=pxPFr58gHmQ&list=PL3jK4xNnlCVf1SzxjCm7ZxDBNl9QYyV8X <br/>
