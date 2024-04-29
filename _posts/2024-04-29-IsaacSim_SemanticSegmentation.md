---
layout: post
title:  "IsaacSim Semantic Segmentation"
---
# IsaacSim Semantic Segmentation
## Synthetic Data Pipeline Part1: Semantic Information
![IsaacSim_Semantic_Segmentation1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4ea72cee-f791-40ee-a7c8-d5f8ffd3e811) <br/>
Select Sensors <br/>
![IsaacSim_Semantic_Segmentation2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c1ab489c-c7eb-4e1a-b7e2-6dd46622dffe) <br/>
Choose SemanticSegmentation in RenderVar <br/>
![IsaacSim_Semantic_Segmentation4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/303cb292-03b4-4e01-a120-a7ebf27e08f2) <br/>
Click on Semantic Data Recorder <br/>
![IsaacSim_Semantic_Segmentation5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8be1717e-5906-4f87-8d57-2ca53e5729e1) <br/>
Choose the _03_cracker_box mesh <br/>
![IsaacSim_Semantic_Segmentation6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8e2e7592-bde2-4d59-a139-2a32f6a7333f) <br/>
Configure New Semantic Type as class and New Semantic data as box <br/>
Click on Add Entry On All Selected Prims <br/>
Do the same thing for the other cracker_box2 <br/>
![IsaacSim_Semantic_Segmentation7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f0f685e9-d044-4433-a6f0-f5c43049d690) <br/>
The crackerboxes which appeared black now appear in shades of hot pink <br/>
![IsaacSim_Semantic_Segmentation8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/69e1c4d3-1508-4acb-bf26-063da23beda5) <br/>
Choose the _05_tomato_soup_can mesh <br/>
Configure New Semantic Type as class and New Semantic data as can <br/>
Click on Add Entry On All Selected Prims <br/>
Do the same thing for the other _05_tomato_soup_can <br/>
![IsaacSim_Semantic_Segmentation9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9b4f66a6-a622-4d19-b47d-08bb4f7b4ce7) <br/>
The soup cans which appeared black now appear in shades of deep blue and the cracker boxes which appeared to be in shades of hot pink now appears to appear in shades of bright red <br/>

## Synthetic Data Recorder
A GUI-based extension in Isaac Sim to record synthetic data using Replicator <br/>
### Learning Objectives <br/>
This tutorial introduces the Synthetic Data Recorder for Isaac Sim, a GUIextension for recording synthetic data with the possibility of using custom Replicator writers to record the data in any custom format <br/>
**Getting Started** <br/>
![IsaacSim_Semantic_Segmentation10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f2260612-12ea-4b0f-b5c0-c5b23bd81244) <br/>
Replicator > Synthetic Data Recorder <br/>
### Basic Usage
The recorder is split into two main parts: <br/>
the Writer frame - containing sensor, data, and output parameters; and the Control frame - containing the recording functionalities such as start, stop, pause, and parameters such as the number of frames to execute <br/>
![IsaacSim_Semantic_Segmentation11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/807573b0-26c8-40be-ae11-a8c34985c856) <br/>
**Writer Parameters** <br/>
The Render Products frame creates a list of render product entries using the Add New Render Product button <br/>
By default a new entry is added to the list using the active viewport camera as its camera path (see left figure) <br/>
If however cameras are selected in the stage viewer, these are added to the render products list (see right figure) <br/>
The render products list can contain the same camera path multiple times, however each time with a different resolution <br/>
All the entry values (camera path or resolution) can also be manually edited in the input fields <br/>
![IsaacSim_Semantic_Segmentation12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/45958eb3-85eb-48d1-bc0c-8b1a21c5e018) <br/>
Click Add New Render Product Entry to add turtle_Camera <br/>
![IsaacSim_Semantic_Segmentation13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/eb85611c-c674-4d13-be03-73cf23b11c01) <br/>
![IsaacSim_Semantic_Segmentation14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7416588f-29fe-407a-a609-3f3b3c5a9796) <br/>
The Parameters frame gives the possibility to choose between the default built-in Replicator writer (BasicWriter) or to choose a custom writer <br/>
The default writer parameters (mostly annotators) can be selected from the checkbox list <br/>
As custom writers have unknown parameters, these can be provided by the user in form of a json file containing all the required parameters <br/>
The path to the json file can be added in the Parameters Path input field <br/>
![IsaacSim_Semantic_Segmentation15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/08421352-1bd3-4b7e-8adb-cbe0f580de2e) <br/>
Click to check Semantic_Segmentation <br/>
![IsaacSim_Semantic_Segmentation16](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bd87fa5d-b9ff-4af5-929b-32c552b48494) <br/>
The Output frame (left figure) contains the working directory path where the data will be saved together with the folder name used for the current recording <br/>
The output folder name will be incremented in case of conflict <br/>
The recorder can also write to S3 buckets by checking Use S3 and providing the required fields and having the AWS credentials set up <br/>
![IsaacSim_Semantic_Segmentation17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6a8b6245-ab03-4dac-8971-626a62af3441) <br/>
The Config frame (right figure) can load and save the GUI writer state as a json config file. By default the extension loads the previously used configuration state <br/>
**Control** <br/>
![IsaacSim_Semantic_Segmentation18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a6e9f8cf-f00e-490c-9611-0355ab77d48a) <br/>
The Control frame contains the recording functionalities such as Start/Stop and Pause/Resume, and parameters such as the number of frames to record, or the number of subframes to render for each recorded frame <br/>
The Start button will create a writer given the selected parameters and start the recording <br/>
The Stop button will stop the recording and clear the writer <br/>
The Pause button will pause the recording without clearing the writer, and the Resume button will resume the recording <br/>
The Number of frames input field will set the number of frames to record, after which the recorder will be stopped and the writer cleared <br/>
If the value is set to 0, the recording will run indefinitely until the Stop button is pressed <br/>
The RTSubframes field will set the number of additional subframes to render for each per frame <br/>
This can be used if randomized materials are not loaded in time or if temporal rendering artifacts (such as ghosting) are present due to objects being teleported <br/>
The Control Timeline checkbox will start/stop/pause/resume the timeline together with the recorder, after each recording the timeline is moved to timestamp 0 <br/>

Reference: https://docs.omniverse.nvidia.com/isaacsim/latest/replicator_tutorials/tutorial_replicator_recorder.html <br/>
