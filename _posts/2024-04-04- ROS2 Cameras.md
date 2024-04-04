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
![Ros2Cameras6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/207bc329-68c4-4ff4-af2c-80d2ca2bd5ba) <br/>






Reference: <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/ros2_tutorials/tutorial_ros2_camera.html <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_gui_camera_sensors.html#isaac-sim-app-tutorial-gui-camera-sensors <br/>
