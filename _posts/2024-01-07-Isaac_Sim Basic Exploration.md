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
-Data in each Property panel differs because World(defaultPrim), Cube, and defaultLight are all different data types in Omniverse Isaac Sim. <br/>
The World is an Xform, the defaultLight is a DistantLight, and the Cube is a Cube <br/>
<br/>
**Raw USD Properties**
Raw USD Properties sub-panel: Contains every active USD property for the selected object. <br/>
-Most important sub-panel in the Property panel <br/>
-Very useful reference when developing more advanced applications in Omniverse Isaac Sim <br/>
![Omniverse_IssacSim97](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0f535121-d11e-478f-b24a-b14a4d49837b) <br/>

**Customizing the Workspace** <br/>
Workspace in Omniverse Isaac Sim is very customizable  <br/>
Easy to resize, dock, undock, add, and remove panels in the user interface <br/>
Customize the user interface by adding another Viewport to the workspace <br/>
![Omniverse_IssacSim98](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9cf7b095-b806-4df0-98f5-cc20e4214383) <br/>
Go to the top Menu Bar  <br/>
Click Window > Viewport > Viewport 2 (Very bottom of the dropdown menu) <br/>
Be a new viewport called Viewport 2 floating in the workspace <br/>
-Follow the [Camera Inspector Extension](https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_gui_camera_sensors.html#isaac-sim-app-tutorial-camera-inspector-extension): Create additional viewoports. <br/>
Click and drag the top header of Viewport 2 to the activate the Docking widget. Drag and drop to the right of the original Viewport to place the viewports side-by-side. <br/>
Click and drag the left side of Viewport 2 to the left to make the viewports equal sizes. <br/>
![Omniverse_IssacSim99](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2e2cbd4d-18aa-43e8-ac34-a871a6adba80) <br/>
Button overlay area in Viewport 2 <br/>
Click the Perspective camera button in the top left and change the camera to a Top View <br/>
![Omniverse_IssacSim100](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/03838cb0-a299-40a0-8549-bca5755f1339) <br/>
Window > Viewport > Viewport 2 dropdown: Dynamically hide/reveal Viewport 2 <br/>
Click Viewport 2 to hide the new viewport, and click again to turn it back on <br/>
![Omniverse_IssacSim101](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b67b012c-17ab-41aa-ac42-e52da23bf94f) <br/>
Look at the other items in the Window dropdown. Items with check marks are already visible in the Workspace <br/>
Click a few items off -> See what happens in the workspace (e.g. Console, Stage, Property, Profiler) <br/>

**Running the Simulation** <br/>
Simulation must be running to use any simulation features in Omniverse Isaac Sim <br/>
Ex. joints, scripting, or collision meshes <br/>
(1)Press the Play button in the Toolbar to begin the simulation <br/>
(2)The Play button turns into a Pause button, which can be used to stop the simulation temporarily but allow it to continue from its current state <br/>
(3)While the simulation is running or paused, the Stop button is also visible below the Play/Pause button. <br/>
The Stop button ends the simulation and resets it, allowing it to be played again from its starting configuration. <br/>
Timeline <br/>
Timeline: Extension that allows developers to see and modify settings for a scrollable and customizable timeline.  <br/>
![Omniverse_IssacSim102](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4bb95c08-539a-4e91-8d4d-aee686d45586) <br/>
Timeline is disabled by default, to enable it, go to Window > Extensions, type in omni.anim.window.timeline in the search bar, and click on the toggle <br/>
At the bottom of the screen, the timeline widget will appear <br/>
![Omniverse_IssacSim103](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cbed94c0-eaf0-410e-84ec-cfc52526cf37) <br/>
Press the Play button > Timeline marker will begin to move, and will loop over the timeline <br/>
The simulation’s start/stop progress can also be viewed on the Timeline at the bottom of the default layout <br/>

**Summary** <br/>
Adding Content to the Scene > Navigating the Viewport > Navigating the Stage and Properties Panels > Adding, Docking, and Removing Window Panels > Starting/Stopping the Timeline and Simulation <br/>

**Next Steps** <br/>
Environment Setup  <br/>


## Isaac Sim Workflows
**Learning Objectives** <br/>
Summarizes the different workflows for developing in Omniverse Isaac Sim and ways to interface with it with your existing systems <br/>
Understand the uses and benefits of each workflow and the best way to include Omniverse Isaac Sim in application <br/>

**Getting Started** <br/>
Three main workflows when developing in Omniverse Isaac Sim: GUI, extensions, standalone Python <br/>
Summary of the key features and their recommended usages <br/>
GUI <br/>
Key features: Visual, intuitive, specialized tools for populating and simulating a virtual world <br/>
Recommended usage: World building, assemble robots, attach sensors, initialize ROS bridges <br/>
Extensions <br/>
Key features: Run asynchronously to allow interactions with the stage, hot reloading to reflect changes immediately, adaptive physics step for real-time simulation <br/>
Recommended usage: Building interactive GUIs, custom application modules, real-time sensitive applications <br/>
Standalone Python <br/>
Key features: Control over timing of physics and rendering steps, can be run in headless mode <br/>
Recommended usage: Large scale training for reinforcement learning, systematic world generation and modification <br/>
Footnote: <br/>
asynchronously: <br/>
Not existing or happening at the same time <br/>
adaptive physics: <br/>
Physics simulations within the software can dynamically adjust their update rate or time step based on the computational resources available <br/>
Footnote <br/>
physics: Mathematical and computational models used to simulate physical interactions and behaviors in a virtual environment <br/>
Physics engines are used in simulations to calculate and simulate these behaviors accurately <br/>
ex. gravity, collisions, object dynamics, forces, and other physical phenomena <br/>
Rendering: Process of generating 2D or 3D images from a 3D scene description <br/>
Involves taking the virtual objects and environments created in the simulation and converting them into visual images that can be displayed on a screen  <br/>
ex.shading, lighting, and texturing to create realistic or stylized visual representations of the virtual world <br/>
Headless Mode:<br/>
Running an application or software without a graphical user interface(GUI) or display output <br/>
Application performs its tasks or computations without rendering graphics or providing a visual interface to the user. <br/>
Headless mode is often used in server environments or for batch processing where graphical rendering is unnecessary or unwanted. <br/>

### GUI
Omniverse Isaac Sim’s GUI interface <br/>
-Features are the same ones used in Omniverse USD Composer, an application that is dedicated for world-building <br/>
-Create tools make it easy to assemble, illuminate, simulate, and render scenes large and small, therefore making it the ideal place to build your virtual worlds, assemble robots, examine physics <br/>
-To learn more about how to leverage the GUI for your robotics application, continue to our [GUI tutorial series](https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/index.html), assemble a Simple Robot <br/>

### Extensions
Core building block of Omniverse Kit based applications <br/> 
Individually built application modules. All the tools used in Omniverse Isaac Sim are built as extensions  <br/>
They can be used across different Omniverse applications by simply installing it in the Extensions Manager <br/>
-Main feature of this workflow is that the application runs asynchronously <br/>
Enables the extension applications to interact with the USD stage without blocking rendering and physics stepping <br/>
Allows for hot reloading, so you can change the application code while Omniverse Isaac Sim is running and then see the reflected changes in your application after saving the file, without shutting down or restarting Omniverse Isaac Sim <br/>
Most of the action in an extension is done via callbacks that are triggered with certain events, such as a physics or rendering step, stage events, ticks in time <br/>
<br/>
**Writing A Custom Python Extension** <br/>
Easiest way to get started using the Extension workflow is to use the Omniverse Isaac Sim Extension Template Generator to populate a simple UI-based extension on your local machine <br/> 
The available extension templates give a useful starting point for many Omniverse Isaac Sim applications and are structured to educate the user in building a custom UI tool that meets their needs <br/>
Process <br/>
(1)Create and enable a new extension using the Extension Template Generator <br/>
(2)Create a folder on your computer where you want Omniverse Isaac Sim to search for user extensions <br/>
(3)Navigate to Isaac Utils -> Generate Extension Templates in the toolbar <br/>
(4)Select the type of template that you want to start with, and fill in the required fields <br/>
(5)Navigate to Window -> Extensions in the toolbar to open the Extensions Manager <br/>
(6)Click the hamburger icon in the Extensions Manager, and then “Settings” in the sub-menu to add the path to the folder you created for your user extensions <br/>
(7)Find your extension in the Extensions Manager under “Third Party Extensions” and enable it. It will now appear in the toolbar <br/>
(8)An alternative way to enable extensions is to add command-line arguments when running Omniverse Isaac Sim from the terminal: isaac_sim.sh –ext-folder {path_to_user_ext_folder} –enable {ext_directory_name} <br/>
(9)Each extension template is meant to be self-explanatory. You can quickly get familiar with the template code by reading the README.md file in the provided Python module<br/>
Note: [Isaac Sim Extension Templates](https://docs.omniverse.nvidia.com/isaacsim/latest/advanced_tutorials/tutorial_extension_templates.html#isaac-sim-app-tutorial-extension-templates) <br/> 
**Writing A Custom Cpp Extension** <br/>
Write your own extension containing C++ code <br/>
Omniverse Kit provide an extension template as well as examples of its usage <br/>
Go to Kit C++ Extension Template for detailed instructions  <br/>

### Standalone Application
Omniverse Isaac Sim is launched via a python script, inside which the rendering and physics are stepped manually, to guarantee that stepping only happens after ascertain the completion of a set of commands  <br/>
**Running Your First Standalone Application** <br/>
(1) <br/>
(2) <br/>
(3) <br/>

**Using Jupyter to Develop a Standalone Application** <br/>
Omniverse Isaac Sim can be launched as headless in this workflow (i.e. without a visible and updating GUI). It can also be launched via a Jupyter notebook (Linux only). In the clip below, Jupyter notebook live syncs to the same USD so that changes are reflected in another Isaac Sim process launched through the terminal or the launcher.<br/>


