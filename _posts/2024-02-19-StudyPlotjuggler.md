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

### UI tricks
Reference: https://slides.com/davidefaconti/introduction-to-plotjuggler <br/>
## Data Sources
Reference: https://slides.com/davidefaconti/plotjuggler-data <br/>
## Custom Plots, filters, and transformations
Reference: https://slides.com/davidefaconti/plotjuggler-transforms <br/>



