---
layout: post
title:  "Exploring the PlotJuggler Package"
---

# Exploring the PlotJuggler Package
## Implement PlotJuggler Package
### Step1: Access PlotJuggler Website & Github  
Link:  <br/>
https://github.com/facontidavide/PlotJuggler?tab=readme-ov-file <br/>

### Step2: Install Plot Juggler Package
Development Environment: <br/>
Set up on Ubuntu 22.03 OS, running in a virtual machine via VirtualBox <br/>
Integration is achieved using the ROS 2 Humble bridge <br/>
```
sudo apt install ros-humble-plotjuggler-ros
```
![Rosbag_Visualize19](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/73458a23-c2bc-47ce-a24c-0e69a564f9ab) <br/>
### Step3: Run Plot Juggler Package
```
ros2 run plotjuggler plotjuggler
```
![Rosbag_Visualize18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/86321cbe-ff2c-49a6-9309-a4873b63c545) <br/>
### Step4: Plot Juggler Executed 
![Rosbag_Visualize20](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b333c195-8297-4a18-8b21-a5c4196e207f) <br/>

## Learn the Basics 
### Visualize Data
**Create First Plot** <br/>
(1) Open the application with the option "-t" to create some dummy data <br/>
```
ros2 run plotjuggler plotjuggler -t
```
![PlotJuggler2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d0aff362-a978-4df2-a691-409c155cd8c3) <br/>
(2)A list of timeseries should be visible on the left panel (tree view_) <br/>
![PlotJuggler1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/382667c9-c9c5-4fb1-87be-bc34d87c28a1) <br/>
(3)To plot a series, drag and drop into the plot area using the Left Mouse <br/>
![PlotJuggler3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c80c32ca-b7f3-4dc0-a536-c9f30a3aee2c) <br/>
Plot _sin <br/>
![PlotJuggler4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7814ce4e-1cb3-4b68-8c03-2a8aaeafaad4) <br/>
Additionally plot _cos <br/>
![PlotJuggler4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7814ce4e-1cb3-4b68-8c03-2a8aaeafaad4) <br/>
Select, drag and drop Timeseries using left mouse <br/>
(4)Keep the CTRL key pressed to select multiple series <br/>
![PlotJuggler6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a379ba68-d0a6-4a5b-82dd-62d31d8ddd89) <br/>
Press CTRL key > Click on data_1 and data_2 >  <br/>
**Legend** <br/>
(1)Click on the name of one of the series in the legend to hide it <br/>
![PlotJuggler10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/13b4dbaa-29ac-4d5f-a661-93d86a7eed70) <br/>
Initially, click on the legend entry named "data_1" to hide this series from the plot <br/>
![PlotJuggler9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/00d6abcc-1838-4e45-9fe8-09c46d7508b2) <br/>
Click once more on "data_1" in the legend to make the series visible again in the plot <br/>
**Multiple plots and tabs** <br/>
(1) Split your view into multiple plots or create new tabs <br/>
![PlotJuggler5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/08fcedec-4b08-471e-b347-3c21278dfad0) <br/>
![PlotJuggler7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c200ce83-23f3-4a88-b1f0-a5a3375bfc63) <br/>
![PlotJuggler8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ce100f54-863e-4984-9168-48f11ec1bdf2) <br/>
(2) Rename a plot or a tab  double-clicking on its name <br/>
![PlotJuggler9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/00d6abcc-1838-4e45-9fe8-09c46d7508b2) <br/>
Double Click on ... > Enter name <br/>
### Arrange data in multiple plots and tabs
**Rearrange your plots** <br/>
(1)You can rearrange the plot areas dragging them (use the name area) <br/>
![PlotJuggler11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/78b48825-eba3-4df5-9518-da940a4d21d1) <br/>
(2)Temporarily zoom one of the plot areas "fullscreen" <br/>
![PlotJuggler12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/fefc452a-4dc7-44c8-a718-b8c29b03d0c0) <br/>
Click on Full Screen <br/>
### Zoom in multiple ways
**Zoom** <br/>
(1)Click with the Left Mouse to select an area to zoom in <br/>
(2)Using the Mouse Wheel you can zoom either the entire plot or a single axis <br/>
Example <br/>
![PlotJuggler15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4ca04f7c-36a9-442e-a50e-91fe7a134fbe) <br/>
Zoom in Trigono <br/>
![PlotJuggler16](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1b33d0f2-35ce-4185-a78d-62e14c2fd524) <br/>
Draw a box using right Mouse <br/>
Zoom out Trigono <br/>
![PlotJuggler17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/19b31726-c183-43db-a5ab-0597e8bdc9e6) <br/>
Right Click > Click button Zoom out <br/>
(3)Use the link button to zoom all the plots at once <br/>
Zoom out <br/>
![PlotJuggler13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f8cad11e-6436-4aae-a200-537b2477463b) <br/>
Zoom in <br/>
![PlotJuggler14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ec7ba00a-c376-4949-ac5f-cc7ea3388b98) <br/>

### Save your layout to reuse it later
**The vertical "time tracker"** <br/>
(1) Move the vertical tracker with the Shift Key + Left Mouse <br/>
![PlotJuggler18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2a3e29c0-6e9e-4f42-a68a-f62d755b9af2) <br/>
(2) Note as the values on the second column of the timeseries list are updated <br/>
![PlotJuggler19](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/711a420a-5cdb-4cad-8275-0c6119baee07) <br/>
(3) Alternatively, move the time slider at the bottom <br/>
![PlotJuggler21](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1d18ee70-e078-4a2c-89d2-12f48ca67dda) <br/>
**Combine two timeseries in a XY Plot** <br/>
(1)Select two timeseries keeping the CTRL Key pressed <br/>
![PlotJuggler22](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f4cde8bd-76d2-4f34-b0cf-be05d7cf8137) <br/>
(2)Drag and drop them using the Right Mouse, instead of the Left one <br/>
![PlotJuggler23](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a0dfea89-4e46-49f1-ae4b-1f17ecbb6362) <br/>
(3)Optionally, customize the order or/and the name of this new series <br/>
![PlotJuggler24](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7ee7f731-ded5-473f-96db-2845a109e5ee) <br/>
Click on swap > OK <br/>
![PlotJuggler25](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9333bc16-a308-4041-9aab-83f4f8b73043) <br/>
For the top plot, it is presented in its original order, without any alterations. For the bottom plot, the order has been swapped for clarity and comparison purposes <br/>
**Undo Redo** <br/>
(1)CTRL+Z keys: Undo <br/>
![PlotJuggler26](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f640e4c3-6701-44e9-a829-a647d2b7cd28) <br/>
(2)CTRL+Shift+Z keys: Redo <br/> 
![PlotJuggler27](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/604e8f21-4b15-4ab8-a538-a1f73bed4084) <br/> 
**Curves Editor (appearance)** <br/>
(1)Edit curves color, remove curves and show points <br/>
![PlotJuggler28](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/83559b46-38f5-46be-91c3-5b064c4931bb) <br/>
Right click tab > Click on Edit curves... <br/>
![PlotJuggler29](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b71af24f-1ddd-4e80-8a5a-caff8f90d149) <br/>
Click on trash can to delete a specific curve (data_10 curve deleted) <br/>
![PlotJuggler31](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d89d2be8-feb7-4cfe-8c69-d492b95ecf9a) <br/>
Adjusted the color to pink for data_1 and purple for data_3 <br/>
![PlotJuggler32](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/51b5e071-2939-49a8-99b5-df531cf52d8e) <br/>
Select line style (Chose Lines and Dots) <br/>
(2)The vertical limits can be useful to clamp the Y range(Preventing the spikes from excessively distorting the visualization or analysis of the data <br/>





) in the presence of "spikes" <br/>
![PlotJuggler33](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e996b61e-c983-40dc-84ac-5db05746f283) <br/>
Adjust Vertical limits (Max 3, Min -1)<br/>


### UI tricks

Reference: https://slides.com/davidefaconti/introduction-to-plotjuggler <br/>
## Data Sources
Reference: https://slides.com/davidefaconti/plotjuggler-data <br/>
## Custom Plots, filters, and transformations
Reference: https://slides.com/davidefaconti/plotjuggler-transforms <br/>



