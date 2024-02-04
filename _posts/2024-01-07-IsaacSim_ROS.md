---
layout: post
title:  "Assignment: 2nd Week - IsaacSim ROS"
---

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
