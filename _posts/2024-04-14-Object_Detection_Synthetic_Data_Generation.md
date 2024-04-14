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
