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
(2)The vertical limits can be useful to clamp the Y range(Preventing the spikes from excessively distorting the visualization or analysis of the data) in the presence of "spikes" <br/>
![PlotJuggler33](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e996b61e-c983-40dc-84ac-5db05746f283) <br/>
Adjust Vertical limits (Max 3, Min -1) <br/>
![PlotJuggler34](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/058a8e55-a3c5-48ea-a836-bd219dda8317) <br/>
Click on Save Changes button <br/>
### Save your layout to reuse it later
**Save/Load the Layout** <br/>
(1)Save the Layout <br/>
Use "layout" files to save the current state of PlotJuggler <br/>
![PlotJuggler36](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b6d7e907-e54f-4906-b134-40f387839c78) <br/>
Click on ![PlotJuggler35](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/84b9a575-a83f-4291-833d-12a7ffa3d5bd) button  <br/>
![PlotJuggler38](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5f986281-cb63-42ff-94d6-76aea0444904) <br/>
Create a directory where you'd like to store the PlotJuggler files <br/>
![PlotJuggler39](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9a52785e-0e03-418d-b685-21dd3419892a) <br/>
Select the directory where you'd like to save the file > Open > Name the file (Named it samplecurve1) > CLick Save button <br/>
(2)Load the Layout <br/>
![PlotJuggler40](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ccbe0782-27d0-4727-b16d-da3f806ce67e) <br/>
Click on ![PlotJuggler39](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9a52785e-0e03-418d-b685-21dd3419892a)
button > Navigate to the directory where you'd like to save the file > Select the xml file > Click the Open button <br/>
Reference: https://slides.com/davidefaconti/introduction-to-plotjuggler <br/>
## Data Sources
**Data Sources** <br/>
(1)PlotJuggler can read data from file or live-streaming <br/>
![PlotJuggler41](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6bb9e9d5-df34-4b58-ac30-ae36278e92b4) <br/>
Click on ![PlotJuggler39](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9a52785e-0e03-418d-b685-21dd3419892a)
button > Navigate to the directory where you'd like to save the file > Select the xml file > Click the Open button <br/>
(2)All data sources are implemented through plugins <br/>
(3)You can add new plugins (yours or 3rd party) in the "Preferences" menu <br/>
![PlotJuggler42](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c3fd1ae5-d213-4491-a3dd-567baab29ecd) <br/>
App > Preferences > Plugins > + <br/>
### Load data from file
**Example: load a CSV file** <br/>
Will be asked to select the column with the time. Optionally, you can use the row number <br/>
(1)Each plugin has its own dialog and options <br/>
(2)For instance, try to load this CSV file <br/>
Download motor_data.csv file > Upload it to the preferred directory <br/>
![PlotJuggler43](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a93487f3-7737-4d35-93b4-3801514ee9e4) <br/>
Click on ![PlotJuggler39](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9a52785e-0e03-418d-b685-21dd3419892a) 
button in the Data box > Navigate to the directory where the motor_data.csv is stored > Select the csv file > Click the Open button <br/>
![PlotJuggler44](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2dc6743e-3430-4b24-b3ca-62597ea5bf93) <br/>
Select a column to be used as X axis > Select the preferred column from Columns (t) > Ok <br/>
![PlotJuggler45](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/13e08a9a-6841-4fc6-95b9-a0fc25c5762b) <br/>
Drag and drop Accel, Torque, and Velocity column using the Left Mouse <br/>
### Use streaming plugins
Reference: https://slides.com/davidefaconti/plotjuggler-data <br/>
**Streaming** <br/>
(1)PJ has several built-in streaming plugins (MQTT, UDP, Websockets) <br/>
(2)For testing purpose, start PJ with option "-t" and try the Dummy Streamer <br/>
```
ros2 run plotjuggler plotjuggler -t
```
(3)You can start, pause and stop the streamer. Change the buffer size if needed <br/>
![PlotJuggler46](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/eacde962-b21a-4b16-868a-1321f48309a9) <br/>
Change Streaming to Dummy Streamer <br/> 
![PlotJuggler47](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ed429e33-15fe-4c9e-9175-6baf29c8200a) <br/> 
Click on the start button > See the data_vect values change <br/>
![PlotJuggler48](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f961a487-8d7f-4f8b-b448-9320586a4da0) <br/>
Press Shift and click on the columns you want to visualize > Drag and drop using the Left Mouse <br/> 
![PlotJuggler49](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/506401a8-7523-4a89-8141-4acaaaf6fcb7) <br/> 
Increase Decrease buffer size > Streaming slows down <br/>
(4)Zoom and Time Tracker are active only when streaming is stopped or paused <br/>
![PlotJuggler50](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e4ef8aa1-e70d-445a-9775-1e1e80c3caf1) <br/>
Click on stop to stop streaming <br/>
**Streaming Format** <br/>

## Custom Plots, filters, and transformations
Reference: https://slides.com/davidefaconti/plotjuggler-transforms <br/>



