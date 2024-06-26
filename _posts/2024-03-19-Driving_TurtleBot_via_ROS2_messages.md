---
layout: post
title:  "Driving TurtleBot via ROS2 messages"
---

# Driving TurtleBot via ROS messages
## Objective
ROS bridge comes with a few popular rostopics that are packaged for ease of use <br/>
More details are in the [ROS & ROS2 Bridge](https://docs.omniverse.nvidia.com/isaacsim/latest/features/external_communication/ext_omni_isaac_ros_bridge.html#isaac-sim-ros-bridge) <br/>
Here we will focus on the procedures in using them <br/>

## Learning Objectives
Example: Enable a Turtlebot3 to drive around and subscribe to a twist message through the ROS network <br/>
-Add controllers to Turtlebot3 <br/>
-Introduce the ROS bridge and ROS OmniGraph (OG) nodes <br/>
-Setup the robot to be driven by a ROS2 Twist message <br/>

## Getting Started
**Important** <br/>
Make sure to source your ROS 2 installation from the terminal before running Isaac Sim. If sourcing ROS 2 is a part of your bashrc then Isaac Sim can be run directly <br/>
![Driving_TurtleBot_via_ROS2_messages1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2329fe05-efcf-4a7b-93e3-e982195a5ae8) <br/>
**Prerequisite** <br/>
Having a rigged Turtlebot, or completed URDF Import: Turtlebot <br/>
=> Already Done <br/>
Completed ROS & ROS 2 Installation so that the necessary environment variables are set and sourced before launching Omniverse Isaac Sim, and ROS2 extension is enabled <br/>
=> Already Done <br/>

## Main Concepts
### Driving the Robot
First want to add the appropriate controllers <br/>
In the case of Turtlebot3, a wheeled-robot with two wheels, the nodes needed are Differential Controller and Articulation Controller <br/>
Differential Controller node: Convert vehicle speed to wheel speed <br/>
Artciulation Controller node: Send the commands to the joint drives <br/>
Detailed instructions on how to connect these nodes can be found in OmniGraph for a similar robot (NVIDIA Jetbot) <br/>
**Setting up the Stage** <br/>
=> Already Done <br/>

**Omnigraph Tutorial** <br/>
(1)Select Window -> Visual Scripting -> Action Graph from the dropdown menu at the top of the editor <br/>
Graph Editor will appear in the same pane as the Content browser <br/>
![Driving_TurtleBot_via_ROS2_messages2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7adf27ba-35e5-48ae-abc2-03984f67fa09) <br/>
(2)Click New Action Graph to open an empty graph <br/>
![Driving_TurtleBot_via_ROS2_messages3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/aede3de3-e4ba-40d0-b7a8-b3539d3b125b) <br/>
![Driving_TurtleBot_via_ROS2_messages4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ad9b3269-71e6-4704-92a2-4ad878560fe3) <br/>
(3)Type controller in the search bar of the graph editor, and drag an Articulation Controller and a Differential Controller onto the graph <br/>
![Driving_TurtleBot_via_ROS2_messages5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9d1bbd52-2b15-480b-9f5b-b86965511212) <br/>
![Driving_TurtleBot_via_ROS2_messages6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7ceaf649-c949-4f52-acb3-0a886816cc8d) <br/>
(4)Articulation Controller Function & Use Controller <br/>
Articulation Controller: <br/>
Applies driver commands (in the form of force, position, or velocity) to the specified joints of any prim with an articulation root <br/>
Tell the controller which robot it’s going to control <br/>
![Driving_TurtleBot_via_ROS2_messages7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6f96abf9-2b1d-4da7-9d1a-233769178e7e) <br/>
Select the Articulation Controller node in the graph > Open up the property pane <br/>
![Driving_TurtleBot_via_ROS2_messages8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/191eb5ff-6ea6-4806-9e14-e8e4eea2f771) <br/>
![Driving_TurtleBot_via_ROS2_messages9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/277bba7a-ec90-40b5-842d-d0680c80504b) <br/>
Uncheck usePath and then click Add Targets near the top of the pane for input:targetPrim > Select turtlebot3_burger in the pop up window <br/>
(5)Differential Controller Function & Use Controller <br/>
Differential Controller: <br/>
Computes drive commands for a two wheeled robot given some target linear and angular velocity <br/>
Like the Articulation Controller, it also needs to be configured <br/>
![Driving_TurtleBot_via_ROS2_messages10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dd47023b-416d-4323-a8af-2091a72e07c0) <br/>
Select the Differential Controller node in the graph and then in the properties pane, set the wheelDistance to 0.1125, the wheelRadius to 0.03, and maxAngularSpeed to 0.2 <br/>
(6)Select joints articulate <br/>
The Articulation Controller also needs to know which joints to articulate <br/>
Expects this information in the form of a list of tokens or index values <br/>
Each joint in a robot has a name and the turtlebot3_burger has exactly two joints that are needed to articulate, because they are the revolute joints associated with the wheels that make the robot move <br/>
![Driving_TurtleBot_via_ROS2_messages11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/642d1c3d-c18c-4c97-b0ad-f7eb8774ec75) <br/>
Verify this by examining the jetbot in the stage context tree. Within /World/turtlebot3_burger/base_link are two revolute physics joints named wheel_left_joint and wheel_right_joint <br/>
(7)Add two Constant Token nodes <br/>
![Driving_TurtleBot_via_ROS2_messages12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/98477be2-0216-4942-b882-5709b82f96d5) <br/>
![Driving_TurtleBot_via_ROS2_messages13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4ad19ccd-857c-4bf3-b2c0-9bbb6ff9ac62) <br/>
Type token into the search bar of the graph editor and add two Constant Token nodes to the graph <br/>
![Driving_TurtleBot_via_ROS2_messages14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/57a1ff79-dd54-4b36-a355-106feca2db96) <br/>
![Driving_TurtleBot_via_ROS2_messages15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f20af7d8-8321-4398-ace3-181fad592f4b) <br/>
Select one, and set it’s value to wheel_left_joint in the properties pane. Repeat this for the other constant token node, but set the value to wheel_right_joint <br/>
![Driving_TurtleBot_via_ROS2_messages16](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d16594a8-2563-4123-a9f9-99874c901bca) <br/>
![Driving_TurtleBot_via_ROS2_messages17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d2ce5232-b527-4a94-95cc-86939c2a9e10) <br/>
Type make array into the search bar of the graph editor and add a Make Array node to the graph <br/>
![Driving_TurtleBot_via_ROS2_messages18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3df4317d-6694-4f03-8fab-29eb5e4ce3d8) <br/>
Select the Make Array node and click on the + icon in the inputs section of the property pane menu to add a second input <br/>
![Driving_TurtleBot_via_ROS2_messages19](https://github.com/grow <bingpenguin/growingpenguin.github.io/assets/110277903/055f4b21-143d-4481-9107-d9bbcf473189) <br/>
Set the arraySize to 2 as well, and then set the input type to token[] from the dropdown menu in the same pane <br/>
![Driving_TurtleBot_via_ROS2_messages20](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/401d4e7b-aded-4a12-96b5-78b98574643c) <br/>
Finally, connect the constant token nodes to A and B of the Make Array node, and then the output of that node to the Joint Names input of the Articulation Controller node
(7)Event Node <br/>
The last node is the event node <br/>
![Driving_TurtleBot_via_ROS2_messages21](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8194e856-12e0-48b9-ad37-27e079f9684a) <br/>
![Driving_TurtleBot_via_ROS2_messages22](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3fc215df-fefc-4ce2-b9a6-7b706f00bead) <br/>
Search for playback in the search bar of the graph editor and add an On Playback Tick node to the graph <br/>
This node will emit an execution event for every frame, but only while the simulation is playing <br/>
![Driving_TurtleBot_via_ROS2_messages23](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/54f48486-d294-495f-a05d-511884d84726) <br/>
Connect the Tick output of the On Playback Tick node to the Exec In input of both controller nodes <br/>
![Driving_TurtleBot_via_ROS2_messages24](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7686a9bc-83b4-4db7-b1ab-3fcb1d881cc3) <br/>
Connect the Velocity Command output of the differential controller to the Velocity Command input of the articulation controller. When completed, the graph should look similar to this <br/>
Completed <br/>
![Driving_TurtleBot_via_ROS2_messages24](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7686a9bc-83b4-4db7-b1ab-3fcb1d881cc3) <br/>
(8)Play <br/>
Press the play button and select the Differential Controller Node in the graph <br/>
Click and drag on either the angular or linear velocity values in the properties pane to change it’s value (or just click and type in the desired value) <br/>


## Putting it Together
**Building the graph** <br/>
(1)Open Visual Scripting: <br/>
Window > Visual Scripting > Action Graph <br/>
An Action Graph window will appear on the bottom, you can dock it wherever that’s convenient <br/>
(2)Click on the New Action Graph Icon in middle of the Action Graph Window <br/>
(3)Inside the Action Graph window, there is a panel on the left hand side with all the OmniGraph Nodes (or OG nodes) <br/>
All ROS2 related OG nodes are listed under Isaac Ros2. You can also search for nodes by name <br/>
To place node into the graph, simply drag it from the node list into the graph window. If all the ROS related nodes are labeled Ros1 not Ros2, it means you have ROS bridge enabled and not ROS2 <br/>
Go to Windows > Extensions to disable ROS bridge and enabled ROS2 bridge <br/>
(4)Build a graph that matches the one below <br/>
![Driving_TurtleBot_via_ROS2_messages25](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/70144abb-a984-4855-acb4-ceb4c9cce1ad) <br/>
Error:
```
2024-03-20 10:44:29 [2,687,913ms] [Warning] [omni.isaac.dynamic_control.plugin] Failed to find articulation at '/World/turtlebot3_burger'
2024-03-20 10:44:29 [2,687,913ms] [Error] [omni.isaac.dynamic_control.plugin] DcGetArticulationRootBody: Invalid or expired articulation handle
2024-03-20 10:44:29 [2,687,913ms] [Warning] [omni.physx.tensors.plugin] Failed to find articulation at '/World/turtlebot3_burger'
2024-03-20 10:44:29 [2,687,913ms] [Error] [omni.physx.tensors.plugin] Pattern '/World/turtlebot3_burger' did not match any articulations
```
Looking for solutions <br/>
https://forums.developer.nvidia.com/t/errors-following-turtlebot-ros-messages-tutorial-seeking-solutions/287152 <br/>
Solution: <br/>
Changed the target prim to turtlebot3_burger to base_footprint <br/>
Made sure the Articulation is enabled and Self Collisions Enabled is unchecked <br/>

Files: <br/>
https://drive.google.com/file/d/1Y7THmT2JAQXQJPnKsUVfTFfKUMOAgRbu/view?usp=sharing <br/>

## Verifying ROS connections
(1)Press Play to start ticking the graph and the physics simulation <br/>
(2)In a separate ROS-sourced terminal, check that the associated rostopics exist with ros2 topic list <br/>
```
cd ${ISAAC_ROS_WS}/src
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
>   ./scripts/run_dev.sh ${ISAAC_ROS_WS}
```
![Driving_TurtleBot_via_ROS2_messages29](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a72ed645-a7ad-4733-83a7-d050f24cdb58) <br/>
Launch the Docker container using the run_dev.sh script <br/>
```
ros2 topic list
```
![Driving_TurtleBot_via_ROS2_messages30](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ac8e8aa3-a107-406a-ba71-d063905ad4db) <br/>
/cmd_vel should be listed in addition to /rosout and /parameter_events <br/>
(3)Now that a differential base topic is setup, a twist message can be published to /cmd_vel topic to control the robot. Let’s drive it forward with the command: <br/>
```
ros2 topic pub /cmd_vel geometry_msgs/Twist '{linear:  {x: 0.2, y: 0.0, z: 0.0}, angular: {x: 0.0,y: 0.0,z: 0.0}}'
```
![Driving_TurtleBot_via_ROS2_messages31](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2dcf8358-5415-4d3b-a802-3dedb8b51458) <br/>
**Recorded the messages** <br/>
Record the cmd_vel topic <br/>
```
ros2 bag record -o turtlemes1 /cmd_vel
```
![Driving_TurtleBot_via_ROS2_messages32](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f1f183c0-bd71-4bd9-8ce3-4777bd891171) <br/>
```
ros2 bag info turtlemes1
```
![Driving_TurtleBot_via_ROS2_messages33](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/08979fb3-41ed-471e-ae9f-32bf98d5dcdc) <br/>
```
ros2 bag play turtlemes1
```
![Driving_TurtleBot_via_ROS2_messages36](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cde18357-feb2-4906-91c7-28867d7d30d5)

```
ros2 topic echo /cmd_vel
```
![Driving_TurtleBot_via_ROS2_messages34](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e639bbe7-82d0-4f14-8f48-4548249d083a) <br/>
(4)To make it easier for us to move the Turtlebot around, install the teleop_twist_keyboard by running the following command: <br/>
```
#sudo apt-get install ros-$ROS_DISTRO-teleop-twist-keyboard
sudo apt-get install ros-humble-teleop-twist-keyboard
```
(5)Enable driving using the keyboard by running: <br/>
```
ros2 run teleop_twist_keyboard teleop_twist_keyboard
```
![Driving_TurtleBot_via_ROS2_messages38](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0c02c2af-9dbe-40a9-806b-2234b3dbba40) <br/>
Press u <br/>
The robot's rotation is determined by the operation of its left wheel <br/>
https://drive.google.com/file/d/1mwYZYNEXNR78N1aG7tpMPVh5un0y5ZwQ/view?usp=sharing <br/>
Press i <br/>
The robot moves forward in a straight line forward <br/>
https://drive.google.com/file/d/1-NrVl6NHmIm-o1Tb8Wg2VrB-6dsZUhzU/view?usp=sharing <br/>
Press o <br/>
The robot's rotation is determined by the operation of its right wheel <br/>
https://drive.google.com/file/d/19rTTIyPp4cjbbjCbbAI4aHNwmDuuox2m/view?usp=sharing <br/>
Press j <br/>
The robot advances by rotating its right wheel forward and its left wheel backward <br/>
https://drive.google.com/file/d/1KDD_cz72DUGiFyX0RWL6CBxko19Rs2ha/view?usp=sharing <br/>
Press k: <br/> 
The robot stops <br/>
![Driving_TurtleBot_via_ROS2_messages39](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5534589c-881e-4167-a325-03567ba64f24) <br/>
Press l: <br/>
The robot advances by rotating its right wheel backward and its left wheel forward <br/>
https://drive.google.com/file/d/1KjldLRkOp-HibtflhtqBiG0J7Wdf7qhL/view?usp=sharing <br/>
Press m: <br/>
The robot advances by rotating both wheels backward <br/>
https://drive.google.com/file/d/1rS9d7ghp8n86t6GQm4xuRs2Zaw2EJKEm/view?usp=sharing <br/>
Press ,: <br/>
The robot moves forward in a straight line backward <br/>
https://drive.google.com/file/d/10vn9PA-tTplpFWx8_jUQafpAnu9U0SPC/view?usp=sharing <br/>
Press  .: <br/>
The robot advances by rotating both wheels forward <br/>
Overall Process <br/>
https://drive.google.com/file/d/1Y_aVK0UkcXx1ehwCajKPudiyxQedBDgI/view?usp=sharing <br/>
Press i -> Press , <br/>
Press q by increasing maximum speed <br/>







Reference:  <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/ros2_tutorials/tutorial_ros2_drive_turtlebot.html <br/>

