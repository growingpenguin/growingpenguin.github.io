---
layout: post
title:  "Isaac ROS Object Detection"
---
# Isaac Sim Hello World
NVIDIA Omniverse™ Kit, the toolkit that Omniverse Isaac Sim uses to build its applications, provides a Python interpreter for scripting <br/>
This means every single GUI command, as well as many additional functions are available as Python APIs <br/>
However, the learning curve for interfacing with Omniverse Kit using Pixar’s USD Python API is steep and steps are frequently tedious <br/>
Therefore we’ve provided a set of APIs that are designed to be used in robotics applications, APIs that abstract away the complexity of USD APIs and merge multiple steps into one for frequently performed tasks <br/>
In this tutorial, we will present the concepts of Core APIs and how to use them <br/>
We will start with adding a cube to an empty stage, and we’ll build upon it to create a scene with multiple robots executing mulitple tasks simultaneously, as seen below <br/>

## Learning Objectives
This tutorial series introduces the Core API <br/>
After this tutorial, you will learn <br/>
Creating a World and Scene as defined by the Core API <br/>
How to add a rigid body to the Stage and simulate it using python in Omniverse Isaac Sim <br/>
The difference between running python in an Extension Workflow vs a Standalone Workflow, and in Jupyter Notebook <br/>

## Getting Started
Prerequisites <br/>
Intermediate knowledge in Python and asynchronous programming is required for this tutorial <br/>
Please download and install Visual Studio Code prior to beginning this tutorial <br/>
Please review Isaac Sim Interface and Isaac Sim Workflows prior to beginning this tutorial <br/>
![IsaacSim_HelloWorld1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/256dc5eb-4272-410f-876e-3c8b1db1f8b9) <br/>
Begin by opening the Hello World example. Go to the top Menu Bar and Click Isaac Examples > Hello World <br/>
![IsaacSim_HelloWorld3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/23c83b0b-39dc-425a-9f92-61289da918b7) <br/>
The window for the Hello World example extension should now be visible in the workspace <br/>
![IsaacSim_HelloWorld2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a4c461d0-deb8-404d-8e75-fddd4093204d) <br/>
Click the Open Source Code button to launch the source code for editing in Visual Studio Code <br/>
![IsaacSim_HelloWorld4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d74e3424-f0ce-4065-9377-40363f580010) <br/>
Click the Open Containing Folder button to open the directory containing the example files <br/>
This folder contains three files: hello_world.py, hello_world_extension.py, and __init__.py. <br/>
The hello_world.py script is where the logic of the application will be added, while the UI elements of the application will be added in hello_world_extension.py script and thus linked to the logic <br/>
(1)Click the LOAD button to load the World <br/>
![IsaacSim_HelloWorld5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/33a64801-14c2-4b24-9e3a-96e86d367057) <br/>
(2)click File > New From Stage Template > Empty to create a new stage, click Don’t Save when prompted to save the current stage <br/>
![IsaacSim_HelloWorld6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ccb1c1d9-6dee-47af-89b4-b385b2b4300c) <br/>
(3)Click the LOAD button to load the World again <br/>
![IsaacSim_HelloWorld7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/464ef33f-72bb-4518-9aea-512aa2001491) <br/>
(4)Open hello_world.py and press “Ctrl+S” to use the hot-reload feature. You will notice that the menu disappears from the workspace (because it was restarted) <br/>
![IsaacSim_HelloWorld8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e452648d-3492-429b-9063-628cfd765167) <br/>
![IsaacSim_HelloWorld9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5143ba64-cea7-4ea2-b2b2-a6d72d94839a) <br/>
(5)Open the example menu again and click the LOAD button <br/>
Begin adding to this example <br/>

## Code Overview
This example inherits from BaseSample, which is a boilerplate extension application that sets up the basics for every robotics extension application <br/>
The following are a few examples of the actions BaseSample performs <br/>
(1)Loading the world with its corresponding assets using a button <br/>
(2)Clearing the world when a new stage is created <br/>
(3)Resetting the world’s objects to their default states <br/>
(4)Handling hot reloading <br/>
World is the core class that enables you to interact with the simulator in an easy and modular way <br/>
It handles many time-related events such as adding callbacks, stepping physics, resetting the scene, adding tasks (this will be covered later in Adding a Manipulator Robot), etc <br/>
A world contains an instance of a Scene. The Scene class manages simulation assets of interest in the USD Stage <br/>
It provides an easy API to add, manipulate, inspect, and reset different USD assets in the stage <br/>

from omni.isaac.examples.base_sample import BaseSample #boiler plate of a robotics extension application


class HelloWorld(BaseSample):

    def __init__(self) -> None:

        super().__init__()

        return


    # This function is called to setup the assets in the scene for the first time

    # Class variables should not be assigned here, since this function is not called

    # after a hot-reload, its only called to load the world starting from an EMPTY stage

    def setup_scene(self):

        # A world is defined in the BaseSample, can be accessed everywhere EXCEPT __init__

        world = self.get_world()

        world.scene.add_default_ground_plane() # adds a default ground plane to the scene

        return

-HelloWorld class extends BaseSample to create a simple simulation scene with a ground plane <br/>
It demonstrates the basic structure of an application using Omni Isaac Sim for robotics simulation, focusing on the initial setup of the simulation environment <br/>


## isaac_ros_detectnet

Reference: <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/core_api_tutorials/tutorial_core_hello_world.html <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/introductory_tutorials/tutorial_intro_interface.html#isaac-sim-app-tutorial-intro-interface <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/introductory_tutorials/tutorial_intro_workflows.html#isaac-sim-app-tutorial-intro-workflows <br/>
