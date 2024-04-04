---
layout: post
title:  "ROS2 Cameras"
---

# ROS2 Cameras
## Learning Objectives
-Add additional cameras to the scene and onto the robot <br/>
-Add camera publishers <br/>
-Send ground truth synthetic perception data through rostopics <br/>

## Getting Started
**Prerequisite** <br/>
-Completed ROS & ROS 2 Installation: installed ROS2, enabled the ROS2 extension, built the provided Isaac Sim ROS2 workspace, and set up the necessary environment variables <br/>
=> Already Done <br/>
-It is also helpful to have some basic understanding of ROS topics and how publisher and subscriber works <br/>
=> Already Done <br/>
-Completed tutorial on OmniGraph and Add Camera and Sensors <br/>
=> Already Done <br/>
-Completed URDF Import: Turtlebot so that there is a Turtlebot ready on stage <br/>
=> Already Done <br/>

## Camera Publisher
### Setting Up Cameras
The default camera displayed in the Viewport is the Perspective camera <br/>
You can verify that by the Camera button on the top left hand corner inside the Viewport display <br/>
Click on the Camera button and you will see there are a few other preset camera positions: Top, Front, and Right side views <br/>
-Perspective <br/>
![Ros2Cameras1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/abb70040-7e5d-4238-a66e-4e68f29c0f22) <br/>
-Top <br/>
![Ros2Cameras2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/728e4b7e-9a15-4247-9464-3dfc50a7ae19) <br/>
-Front <br/>
![Ros2Cameras3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/06296341-2684-463e-87d1-e600f60439ed) <br/>
-Right <br/>
![Ros2Cameras4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/39d50612-529b-4b7f-969f-d69140c59465) <br/>
For the purpose of this tutorial, let’s add two stationary cameras, naming them Camera_1 and Camera_2, viewing the room from two different perspectives <br/>
![Ros2Cameras11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bc95192e-3d00-4ec6-8c89-a5852b01b362) <br/>
Left: Camera_1 <br/>
Right: Camera_2 <br/>
Camera_1 Configuration: <br/>
![Ros2Cameras12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5cd4e16c-a463-48d1-8aaf-06e088f6777b) <br/>
Camera_2 Configuration: <br/>
![Ros2Cameras13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bd3c4586-20fe-4b67-bc4c-bfd3105ee062) <br/>


### Add Camera and Sensors
**Adding Camera** <br/>
![Ros2Cameras5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/003c0c9c-9f15-4d27-adaa-8c03ee6cb32c) <br/>
To add a camera, go to the Menu Bar and select Create > Camera <br/>
A camera will appear on the stage tree, and a grey wireframe representing the camera’s view will appear on the stage <br/>
**Camera Inspector Extension** <br/>
Once our cameras are added in the scene, we can use the Camera Inspector Extension to manage our cameras <br/>
The Camera Inspector Extension allows us to easily create multiple viewports for each camera, check camera coverage, as well as get/set camera poses in the desired frames <br/>
-Launching Extension <br/>
To open the Camera Inspector extension, go to the Menu Bar and select Isaac Utils > Workflows > Camera Inspector <br/>
See our camera selected already in the dropdown<br/>
When we add a new camera, be sure to click the Refresh button to ensure that the extension finds this new camera <br/>
-Camera State Textbox <br/>
![Ros2Cameras6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/207bc329-68c4-4ff4-af2c-80d2ca2bd5ba) <br/>
The Camera State textbox near the top of the extension provides a convenient way to copy the position and orientation of your camera directly into code <br/>
Simply click the copy icon on the right of the textbox to copy to your clipboard <br/>
**Creating Viewport** <br/>
![Ros2Cameras7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6fa5feb7-e8f2-4e97-986e-3cbe48877860) <br/>
With our camera selected, we can create a new viewport for our camera <br/>
To do so, click on the ‘Create Viewport’ button to the right of the camera dropdown menu <br/>
By default, this creates a new viewport and assigns the current selected Camera to it <br/>
We can assign different cameras to different viewports using the two dropdown menus and buttons in the extension: <br/>
Example: <br/>
Viewport1 <br/>
![Ros2Cameras8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5a320427-7acc-4377-b14b-60fc5ed2351f) <br/>
Viewport2 <br/>
![Ros2Cameras9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c2ec473f-8256-4a2c-b964-e246746742eb) <br/>
**Add Camera to Turtlebot3 Robot** <br/>
![Ros2Cameras17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/13614508-7606-42fd-ac5a-0879a31cefe8) <br/>
Create > Camera <br/>
Rename turtle_Camera <br/>
![Ros2Cameras18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2ec88932-9fa4-41db-b510-96f9eafae93f) <br/>
Move the turtle_Camera under the base_link frame <br/>
![Ros2Cameras19](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ccd6d917-9789-4872-9ecb-191a6d96b880) <br/>
Adjust the Camer's Transform <br/>
![Ros2Cameras20](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/77da17cc-0526-4a84-880d-63a88651fbf6) <br/>


### Building the Graph for a RGB publisher
(1)Open Visual Scripting: Window > Visual Scripting > Action Graph <br/>
(2)Click on the New Action Graph Icon in middle of the Action Graph Window, or Edit Action Graph if you want to append the camera publisher to an existing action graph <br/>
![Ros2Cameras10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/583391b5-4aa4-4c13-a430-d4009e48545a) <br/>
(3)Build an Action Graph with the nodes and connection of the following image, and parameters using the table below <br/>
![Ros2Cameras14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f057e189-d5d0-4d1a-b7a2-5a57f2408928) <br/>
Turn on the Ros2 Bridge Extension <br/>
Parameters: <br/>
-Isaac Create Render Product <br/>
![Ros2Cameras15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/78f0a2f3-9d3c-41ea-93e6-c7530091e88c) <br/>
cameraPrim: /World/Camera_1 <br/>
enabled: True <br/>
-ROS2 Camera Helper <br/>
![Ros2Cameras16](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2d1bd1a8-e666-47ef-9120-ff6e969eb53d) <br/>
**Graph Explained** <br/>
-Isaac Create Render Product: <br/>
Creating a render product prim which acquires the rendered data from the given camera prim and outputs the path to the render product prim <br/>
Rendering can be enabled/disabled on command by checking/unchecking the enabled field <br/>
-ROS2 Camera Helper: <br/>
Indicating which type of data to publish, and which rostopic to publish it on <br/>
Camera Helper Node <br/>
The Camera Helper Node is abstracting a complex postprocessing network from the users <br/>
Once you press Play with a Camera Helper Node connected, you may see that in the list of Action Graphs when you click on the icon on the upper left corner of the Action Graph window, a new one appears: /Render/PostProcessing/SDGPipeline <br/>
This graph is automatically created by the Camera Helper Node <br/>
The pipeline retrieves relevant data from the renderer, process it, and send them to the corresponding ROS publisher <br/>
This graph is only created in the session you are running. It will not be saved as part of your asset and will not appear in the Stage tree <br/>






Reference: <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/ros2_tutorials/tutorial_ros2_camera.html <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_gui_camera_sensors.html#isaac-sim-app-tutorial-gui-camera-sensors <br/>
