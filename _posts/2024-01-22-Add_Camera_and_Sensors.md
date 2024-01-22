---
layout: post
title:  "Assignment: 4th Week - Add Camera and Sensors"
---

# Introductory 
## [Add Camera and Sensors](https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_gui_camera_sensors.html#isaac-sim-app-tutorial-gui-camera-sensors)
Omniverse Isaac Sim provides a variety of sensors that can be used to sense the environment and robot’s state <br/>
Cover the simple example of attaching a camera sensor to our mock robot, a process that can be generalized to other sensors <br/> 
(Details regarding the camera and other types of sensors can be found in our Advance Tutorials and Sensor Extensions under Manuals) <br/>
### Learning Objectives
Add cameras <br/>
Attach cameras to geometries <br/>
### Getting Started
Prerequisites <br/>
Introductory Tutorials, Previous tutorial in the GUI Tutorials, as well as the introduction to camera frames and axes <br/>
### [Sensor Axes Representation (LiDAR, Cameras)](https://docs.omniverse.nvidia.com/isaacsim/latest/concepts/cameras/index.html#isaac-sim-cameras) <br/>
Cameras in Isaac Sim are subject to three different types of axes definition, depending on the context of use <br/>
Introduce the three conventions and how it’s used in different contexts <br/>
**World axes** <br/>
World axes uses the +X forward, +Z up convention <br/>
The origin of the world prim is always represented in the World axes <br/>
Camera prim, represented in the world axes, is shown in the figure below <br/>
![Add_Camera_And_Sensors1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ee4c2d9c-84a8-483c-b5b3-3eb5ee3ff0a3) <br/>
**USD Axes** <br/>
USD convention is used in the computer graphics community <br/>
The USD axes uses the +Y up, -Z forward convention <br/>
Property panel displays the poses of objects in the USD stage in an Isaac Sim application <br/>
Poses of all objects in the stage are displayed in the world axes, with the exception of camera prims, which is displayed in the +Y up, -Z forward convention <br/>
=> The convention is referred to as USD Axes in the context of camera prims. Camera prim, represented in the USD axes convention, is shown in the figure below <br/>
![Add_Camera_And_Sensors2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/da7d6c39-0625-4afa-a563-6ddd54ad71a2) <br/>
**ROS Axes** <br/>
ROS axes uses the -Y up, +Z forward convention <br/>
=>Any camera data including transforms published to ROS(ROS Cameras) or ROS2(ROS2 Cameras) will be represented in this convention <br/>
The camera prim, represented in the ROS axes convention, is shown in the figure below <br/>
![Add_Camera_And_Sensors3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0e0cdd18-711f-416a-bfd4-c36e85f2c378) <br/>


### Adding Camera
(1)Create camera and identify it in the stage <br/>
Go to the Menu Bar and select Create > Camera <br/>
A camera will appear on the stage tree, and a grey wireframe representing the camera’s view will appear on the stage <br/>
![Add_Camera_And_Sensors4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/acac08cc-509c-4a2d-bb0a-668e7ea6e54a) <br/>
You can move and rotate the camera’s transform just like any other objects on the stage <br/>
![Add_Camera_And_Sensors5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a561a966-273d-4489-9ebe-5d66eca95c5e) <br/>

### Camera Inspector Extension
Once cameras are added in the scene, Camera Inspector Extension can be used to manage our cameras <br/>
Camera Inspector Extension:  <br/>
Allows us to easily create multiple viewports for each camera, check camera coverage, as well as get/set camera poses in the desired frames <br/>
(1)Launching Extension <br/>
Open the Camera Inspector extension <br/>
Go to the Menu Bar and select Isaac Utils > Workflows > Camera Inspector <br/>
=> Should be able to see our camera selected already in the dropdown <br/>
Be sure to click the Refresh button to ensure that the extension finds this new camera When a new camera is added <br/>
![Add_Camera_And_Sensors6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cec51a4f-5e2b-4e13-aeda-49133ed65868) <br/>
(2)Camera State Textbox <br/>
Provides a convenient way to copy the position and orientation of your camera directly into code <br/>
Click the copy icon on the right of the textbox to copy to your clipboard <br/>
![Add_Camera_And_Sensors7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f70c4615-35db-48c2-b232-34af70705d00) <br/>
(3)Creating Viewport <br/>
A new viewport for our camera can be created with our camera selected <br/>
(3)-1 Click on the ‘Create Viewport’ button to the right of the camera dropdown menu (This creates a new viewport and assigns the current selected Camera to it by default) <br/>
![Add_Camera_And_Sensors9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/aa77c877-0fd7-47c0-95ae-e439cf2c0954) <br/>
Different cameras to different viewports can be assigned using the two dropdown menus and buttons in the extension <br/>
(3)-2 Going to viewport, the resolution using the menu can also be changed in the top left <br/>
Omniverse Kit only supports square pixels. Meaning that when changing the resolution, resolution aspect ratio must be the same as the aperture ratio <br/>
![Add_Camera_And_Sensors10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/41519878-a458-4761-ac73-e8511c76f084) <br/>
(4)Camera Status Panel <br/>
![Add_Camera_And_Sensors11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0b72e151-1da0-4741-9a76-39010b2e2baf) <br/>
camera status panel: the camera and viewport dropdown menus <br/>
-Panel displays the location and orientation of the camera in both the local coordinate system and also the world coordinate system <br/>
Default: Displays the coordinates in the World Axis <br/>
However, using the Camera Axes dropdown, this can be changed to be in the USD Axis or the ROS Axis <br/>
-Camera status panel will update automatically if the camera is moved in the stage using the gizmo. If the location or orientation of the camera is updated in the property panel camera status panel will be also updated.<br/>

### Attach Camera to Robot
(1)Rename the newly added camera to car_camera so we can keep track of it <br/>
![Add_Camera_And_Sensors12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1e3658d1-05c7-4b31-b544-50ce4a686560) <br/>
(2)-1 Would be easier to place the camera if we could see both the desired camera input stream, as well as where it is relative to the robot from an outside camera <br/>
![Add_Camera_And_Sensors13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b76c83e1-a824-41af-9b36-956c54ac6ecd) <br/>
(2)-2 Open up a second viewport window by going to the Menu Bar and click Window > Viewport > Viewport 2 <br/>
![Add_Camera_And_Sensors14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f968d9c7-fc08-4de2-9428-fc7f381b093b) <br/>
New viewport appears; dock it wherever you’d like <br/>
(3)Keep one of the viewport in Perspective camera view, and change the other one to car_camera view <br/>
![Add_Camera_And_Sensors15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/33457c96-ded0-4227-80d9-4d40f800273d) <br/>
Find the Cameras menu on the top edge of the viewport, and switch to Camera > car_camera <br/>
![Add_Camera_And_Sensors16](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0bc77978-be92-48c5-ab83-c979b7e98534) <br/>
Have both the view of the onboard camera, as well as an overview of the scene <br/>
(4)Attach the camera to the robot’s body by dragging the prim under body <br/>
Now the camera will move together with the body. (May need to switch the camera view for the viewport again) <br/>
=> Already Done <br/>
(5)Point the camera slightly down and make it face forward so we can see the car as well as the ground <br/>
![Add_Camera_And_Sensors17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/85e0e97e-a732-4693-b9c1-537320c62fba) <br/>
Set the camera  <br/>
transform translation: x=-0.6,y=0,z=2.2 <br/>
orientation: x=0,y=-80,z=-90 <br/>
scale: x=1,y=1,z=1 <br/>
![Add_Camera_And_Sensors18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f263085f-f182-4d13-ba79-ba205eed84d4) <br/>
Should see the viewport showing the onboard camera view: <br/>
Splitting the window between the robot’s body and the ground and the relative position and orientation of the camera to the robot in the Perspective camera viewport <br/>
(6)Press Play <br/>
https://drive.google.com/file/d/1LtE9GTCewsYqNO7Nrryp_VD_Ra_91bnW/view?usp=sharing <br/>
The camera onboard the robot should now move with the robot <br/>
(Similar strategy is used to apply other onboard sensors) <br/>

Reference: <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_gui_camera_sensors.html#isaac-sim-app-tutorial-gui-camera-sensors <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/concepts/cameras/index.html#isaac-sim-cameras <br/>
