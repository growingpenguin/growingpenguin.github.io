---
layout: post
title:  "Assignment: 3rd Week - Isaac Sim Working with USD"
---

# Introductory 
## [Isaac Sim Working with USD](https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_intro_usd.html#isaac-sim-app-tutorial-intro-usd)
### Learning Objectives
Save USD stages <br/>
Load and reference existing USD stages <br/>
Organize stage tree hierarchy <br/>

### Saving Options
**Save**: <br/>
Go to the Menu Bar <br/>
Click Files > Save or Files > Save As .. to save as a new file <br/>
**Save Flattened As**: <br/>
Saves the current USD file while merging all components to one mesh <br/>
**as .usda files**: <br/>
Option to save as .usda file instead of .usd file <br/>
.usda file: human-readable text file format for the given USD stage <br/>
**Collect Assets**: <br/> 
If many reference USD stages, materials and textures from other folders and servers were used in the current stage <br/> 
Collect Assets is mandatory to make sure all the external references that are used in your stage gets collected in one folder <br/>  
Process <br/>
Save the current USD locally > Find it in the Content tab > Right-click on it and select Collect Asset <br/>
![WorkingWithUSD2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cf8f4d3c-bf68-4daf-ab13-82cbbabb8f8c) <br/>

### Loading Options
-Open: Load a USD stage <br/>
Go to Menu Bar  <br/> 
Click Files > Open  <br/>
This opens the USD stage, and you can directly edit it  <br/>
-Add Reference: Adds a USD file as a reference <br/>
Click Files > Add Reference <br/> 
You will not be able to edit the referenced USD <br/>  
This can also be done by finding the file in the Content Tab and dragging it into the viewport <br/> 
**Set Stage for Reference** <br/>
Demonstrate adding a file as reference <br/>
Save the current stage with the simple cube and cylinders as a mock robot <br/> 
Process <br/>
(1)Rearrange the rigid bodies on stage into a hierarchial structure with meaningful names & Put all the rigid body parts to the robot under a single Prim <br/>
(1)-1 Right click inside the Stage tab, select Create > Xform. Rename the newly added Xform to mock_robot (Prim should appear under the World prim) <br/>
![WorkingWithUSD3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1d4320ff-3dea-4bd5-97ea-eba5e687bf40) <br/>
(1)-2 Move the Cube, both Cylinders, Physics Material, and Looks folder under mock_robot by drag and drop <br/>
![WorkingWithUSD5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cb25da2c-e5ed-443a-8b69-2436ccc66e00) <br/>
(1)-3 Rename the Cube and Cylinders to the body, wheel_left, and wheel_right <br/>
(1)-4 Save the stage as an USD file <br/>
(2)Open a new stage <br/>
(2)-1 Files > Add Reference or drag the file from Content on to the stage <br/>
![WorkingWithUSD8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/36bb1f4f-00fe-4eab-a65e-c8b2db407ad3) <br/>
Load the USD file as a reference <br/> 
Load the referenced USD under a Prim named the same as the USD filename <br/>
Loaded everything under the original World(defaultPrim), including PhysicsScene, defaultLight, and GroundPlane <br/>
-May not be great if you are loading multiple USD references, and they all have their own version of PhysicsScenes and defaultLights <br/>
-Cannot delete them on the new stage because they are loaded by reference <br/>
-Delete them in the original USD would make it difficult to work within those USD stages <br/>
(3)Both have the necessary environment set up in the USD stages but not export them when they are being referenced <br/>
(3)-1 Move non-referenced items out of the default Prim <br/> 
(3)-2 Unparenting <br/>
Select the robot’s parent prim on stage(in this case /mock_robot) <br/> 
Open the menu Edit while the prim is selected, and click on unparent <br/>
Instead of being under World, mock_robot is parallel to World <br/> 
Error: <br/>
![WorkingWithUSD9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f4fe862d-4706-4640-b2d8-9beae62989cc) <br/>
Solution: <br/> 
https://forums.developer.nvidia.com/t/encountering-an-issue-with-usd-tutorial-unparenting-error/278964  <br/>
Turns out I've kind of ignored this phrase: (Another OV user helped me out) <br/>
**You cannot delete them on the new stage because they are loaded by reference** <br/>
What is referenced cannot be edited, so it wasn't a surprise that unparenting was impossible <br/>
Opening up the file and unparenting mock_robot again solved the error <br/>
![WorkingWithUSD10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/63ab5fef-be75-4f79-a5fe-8a4160eb6dfa) <br/>
(3)-4 Right-click on the robot prim again on stage, and Set as a Default Prim <br/> 
![WorkingWithUSD11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/81539dea-c030-492f-9e0f-74bcce7f7677) <br/>
(3)-4 Save <br/>
![WorkingWithUSD12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/52733604-fd04-49ae-ab04-02f46509091b) <br/>
(3)-5 Open a new stage and load the same file again as a reference, only the robot will be imported <br/>
![WorkingWithUSD13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a99b05d1-d71e-4673-9dc0-3f09e2e753bb) <br/>

### Summary
Learned how to save and open USD files <br/> 

### Files 
https://drive.google.com/drive/folders/17bDD_rxmnjZbV-DFccysfuIIqC2uiSJD?usp=sharing <br/> 
