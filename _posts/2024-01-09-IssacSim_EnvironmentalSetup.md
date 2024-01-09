---
layout: post
title:  "Assignment: 3rd Week - Isaac Sim Environmental Setup"
---

# Introductory 
## [Isaac Sim Environmental Setup](https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_intro_environment_setup.html#isaac-sim-app-tutorial-intro-environment-setup) 
Omniverse Isaac Sim is built on NVIDIA Omniverse using tools provided in Omniverse Kit. <br/>
Omniverse Kit comes with a default UI that allows the user to edit a USD stage with ease.  <br/>
Tutorial Introduction <br/>
Setting up an environment <br/>
Adding and editing simple objects and their properties on a USD stage <br/>
Rigging rigid bodies with joints and articulations <br/>
Adding cameras and sensors <br/>
=> Have the basic skill to navigate Omniverse Isaac Sim, become familiar with frequently used terms, and be able to build an environment and set up your robots via the graphical interface. <br/>

### Learning Objectives 
How to build a physics-enabled virtual world using the tools provided in the Omniverse Isaac Sim GUI <br/>
(1)Setup global stage properties <br/>
(2)Setup global physics properties <br/>
(3)Add ground plane <br/>
(4)Add lighting <br/>

### Getting Started 
Prerequisites <br/>
Isaac Sim Interface tutorial <br/>
File > New: <br/>
Start with the clean stage provided at the opening of Omniverse Isaac Sim <br/> 
Has a default World Xform, and a defaultLight. Both can be found on the stage tree on the left under the Stage tag <br/> 

### Setting up Stage Properties
Check if the current stage property setup matches the conventions that you are expecting <br/> 
Edit > Preferences: Open up the Preference panel. Browse the many types of setting inside Omniverse Kit grouped into categories in the column on the left of the panel <br/> 
![Omniverse_IssacSim111](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/04cf3e99-df9d-4ba1-9a65-d1469bb5be53) <br/> 
Stage: Examine properties <br/>  
![Omniverse_IssacSim112](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/89210704-99c8-46b2-97c9-ec31190a5fcb) <br/>  
Axis that determines Up: Default in Omniverse Isaac Sim is Z. If asset is created in a program with a different up-axis, it will cause your assets to be imported rotated <br/>
Stage units: Have in centimeters, but the default is now meters <br/>
Default rotation order: X > Y > Z <br/>

### Creating the Physics Scene
Start by adding a Physics Scene to provide the general physics simulation properties to the world, (ex. gravity and physics time steps) <br/> 
Go to the Menu Bar <br/>
Click Create > Physics > Physics Scene <br/>
![Omniverse_IssacSim113](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/301d2cde-e8de-4b00-9525-aed0267eeb67) <br/> 
PhysicsScene should be added to the stage tree  <br/>
![Omniverse_IssacSim114](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6ccf250c-b635-4ab7-b962-0afae85e5ac2) <br/>
PhysicsScene properties  <br/>
Gravity is set to point at the -Z direction with a magnitude of 9.8(default unit of length is meters) <br/> 
Unless simulating hundreds of rigid bodies and robots, it is more efficient to use a CPU solver instead of GPU <br/> 
Disable GPU dynamics and use MBP Broadphase inside the Physics Scene’s Property tab <br/> 
![Omniverse_IssacSim115](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/abe11f74-2755-4e9f-b0ee-aadb8b6d8e5d) <br/> 

### Adding a Ground Plane
Add a ground plane to the virtual environment <br/> 
The ground plane will prevent any physics-enabled objects from falling below it <br/> 
Go to the top Menu Bar  <br/> 
Click Create > Physics > Ground Plane <br/> 
![Omniverse_IssacSim116](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/de28356f-9395-43e9-95fb-8280b7ba6ca6) <br/>
-Ground plane’s collision property extends indefinitely even though the plane is only visible up to 25 meters in each direction. Turning on the grid makes the ground plane easier to see <br/>

### Lighting
New Stage is pre-populated with a defaultLight — otherwise you wouldn’t see anything <br/> 
Exercise: Create an additional spotlight as an exercise <br/> 
(1)Add a ground plane so we can see the reflection of the light <br/> 
Create > Physics > Ground Plane. <br/> 
(2)Create Sphere Light <br/>
Go to Create > Light > Sphere Light <br/>
(3)Move it up and turn it face down by moving it 7 units up and void the rotation in X and Y axis <br/>
![Omniverse_IssacSim117](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cd3ea8a8-aaef-4c80-85e8-96ef9ac5d450) <br/>
Translate: z - 700.0 <br/>
Orient: x - 0.0, y - 0.0 <br/>
(4)Change in Main <br/>
Inside the Property Tab <br/>
Simply click on the color bar and pick a color of your choice(Change its color in Main > Color) <br/>
![Omniverse_IssacSim118](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b8b04b4e-82aa-4dd4-9b6a-0abd43a9cf27) <br/>
Main > Intensity to 1e6; <br/> 
![Omniverse_IssacSim119](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/43633ae9-f00c-4bc6-9f7f-b2db67334875) <br/> 
Main > Radius to 0.05 <br/>
![Omniverse_IssacSim120](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/42e36c6a-5aaf-4c1a-956a-1df6829f58d7) <br/>
Limit the scope of the spot <br/>
Shaping->cone > Angle to 45 degrees <br/>
Soften the edge of the spotlight <br/>
Shaping-> cone > Softness to 0.05 <br/>
![Omniverse_IssacSim121](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/626b5afa-61e4-4509-b4e9-1b98542d9a0b) <br/>
Property tab > Set Main->Intensity to 300(To make the spotlight easier) <br/>
![Omniverse_IssacSim122](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6b6fdf74-9079-4275-b59e-5dd606725097) <br/>

### Summary
Begins the series of steps to create a virtual world suitable for physics simulation and testing Omniverse Isaac Sim  <br/>
Adding a ground plane, lighting, and physics scene <br/>

Reference: <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_intro_environment_setup.html#isaac-sim-app-tutorial-intro-environment-setup  <br/>


