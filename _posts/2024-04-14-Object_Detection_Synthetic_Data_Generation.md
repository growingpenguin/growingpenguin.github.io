---
layout: post
title:  "Object Detection Synthetic Data Generation"
---
# Object Detection Synthetic Data Generation
omni.replicator.object is a no-code-change-required extension that generates synthetic data for model training, that can be used on a range of tasks from retail object detection to robotics <br/>
It takes a description file in YAML that describes a mutable scene, or a hierarchy of such stacked description files as input, and outputs a description file along with graphics content including RGB, 2D/3D bounding boxes, segmentation masks, etc <br/>
../_images/overview.png <br/>
![Object_Detection_Synthetic_Data_Generation1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/eadf007f-b5d8-4818-9f69-dbee7ccee9d7) <br/>

## Run Instructions
The extension can be run from the UI, or isaac-sim container <br/>
### Run from the UI
In Omniverse Kit or Isaac Sim, enable omni.replicator.object from Windows -> Extensions -> THIRD PARTY <br/>
A window will pop up <br/>
![Object_Detection_Synthetic_Data_Generation3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/39e399f8-11f9-473b-b712-8dd1ba1183dd) <br/>
![Object_Detection_Synthetic_Data_Generation4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1b860ad6-c96f-4fe3-8788-eccd523856da) <br/>
Clicking on the folder icon or the Visual Studio Code icon below, <br/>
![Object_Detection_Synthetic_Data_Generation5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/eb4c23e8-3866-4455-b173-10435148d8ba) <br/>
The root folder of the extension will be open <br/>
![Object_Detection_Synthetic_Data_Generation6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d1a90b2d-c536-4080-8168-7333b70bf6dc) <br/>
Under source/extensions/omni.replicator.object/omni/replicator/object/configs there are many description files in YAML format <br/>
![Object_Detection_Synthetic_Data_Generation7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/51e8bf54-b562-40d1-900b-f36e8d6e9ce7) <br/>
![Object_Detection_Synthetic_Data_Generation8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e2ffd80e-e2bd-47fc-bef4-58da45414612) <br/>
It’s recommended to start with demo_kaleidoscope.yaml <br/>
To do so, go to global.yaml and update output_path to any local folder to store the simulation output <br/>
![Object_Detection_Synthetic_Data_Generation9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/66403fd6-40c4-44eb-8f26-e38991a90d37) <br/>
![Object_Detection_Synthetic_Data_Generation11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/37f3c06a-42d9-4714-a2ee-683cdf5c4fed) <br/>
Next, put demo_kaleidoscope in the Description File textbox, and hit Simulate to start simulation; <br/>
alternatively, you can also put the absolute path .../source/extensions/omni.replicator.object/omni/replicator/object/configs/demo_kaleidoscope.yaml, with ... being the local path <br/>
Results will be stored in output_path <br/>
![Object_Detection_Synthetic_Data_Generation12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/fb6a310e-f044-4372-915e-1dc3f4e03e75) <br/>
![Object_Detection_Synthetic_Data_Generation13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ec61e05d-5b41-4865-9224-f4f6ed49c5ad) <br/>
![Object_Detection_Synthetic_Data_Generation14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e8ddedf9-19c6-4eb0-bfba-4eaeb92d0e5c) <br/>
Errors in loading the environment, so I applied the simple_room.usd instead <br/>

## Concepts
### The description file
The description file is a YAML file that has a key omni.replicator.object, and the value corresponding to that key is the description <br/>
-The description consists of key-value pairs <br/>
-Each key-value pair is a Mutable, a Harmonizer, or a Setting <br/>
-The description generates frames as the user demands <br/>
Each frame, the scene is randomized, and graphics content is captured and output to disk <br/>
-Settings describe how the scene is configured and how data is output <br/>
For example, you can set the number of frames to output, whether or not to output 2D bounding boxes, or set the gravity and friction of physics simulation <br/>
-The description composes the scene populated with objects that are called mutables <br/>
Mutables randomize every frame <br/>
-Sometimes we want to constrain how they randomize <br/>
For example, to know how other mutables are randomizing and randomize correspondingly <br/>
To do so, we can define harmonizers <br/>
### Simulation Workflow
Every time a simulation is launched, the description is parsed, and then the scene along with the mutables and harmonizers are initialized <br/>
Every frame it goes through the following stages <br/>
**Free randomize** <br/>
Mutable attributes that doesn’t depend on harmonizer <br/>
Randomizes freely <br/>
**Harmonize** <br/>
The harmonizers randomize, and collect information from free randomized mutable attributes <br/>
The collected information are called pitches <br/>
Just like real harmonizers, the pitches are collected and propagated back to all relevant mutables <br/>
**Harmonized randomize** <br/>
Using the return information from the harmonizer, the harmonized mutable attributes randomizes <br/>
**Physics resolution** <br/>
Physics is resolved so that objects move away from each other if they overlap, or drop onto a surface if gravity is turned on <br/>
For more details, refer to Physics simulation explained <br/>
**Capture** <br/>
Graphics content is captured <br/>
**Logging** <br/>
The state of the scene in this frame is recorded into a description file, such that later on it can be restored or inspected <br/>

### Scene restoration
In the output content, you can use the output description file of a specific frame to generate the exact same graphics content as when this frame was generated, once again <br/>
Or you can slightly modify it to have something different but everything else the same <br/>
In this way we support multiple-sampling for pretrained models <br/>

## Convention in this documentation
Type in the tables indicate the expected data type. <br/>
Where a type is expected, a macro string can be used in place to be later on evaluated for that specific type <br/>
For example, if we expect int in a value, we can either give an int or something like $[index]. See Macro for details <br/>
Within a mutable, aside from these 2 options, you can also specify a Mutable attribute to evaluate to this type <br/>
And numeric means literal or evaluated float or int <br/>

## Catalog 


Reference: https://docs.omniverse.nvidia.com/isaacsim/latest/replicator_tutorials/tutorial_replicator_object.html <br/>

