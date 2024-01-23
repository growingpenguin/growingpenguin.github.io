---
layout: post
title:  "Assignment: 4th Week - Driving TurtleBot via ROS messages"
---

# Driving TurtleBot via ROS messages
## [Driving TurtleBot via ROS messages](https://docs.omniverse.nvidia.com/isaacsim/latest/ros_tutorials/tutorial_ros_drive_turtlebot.html)
ROS bridge comes with a few popular ros topics that are packaged for ease of use <br/>
(More details are in the ROS & ROS2 Bridge) <br/>
Focus on the procedures in using them <br/>
-Steps to connect Omniverse Isaac Sim to ROS can be done in? <br/>
Entirely in the UI <br/>
Scripting inside the extension workflow <br/>
Scripting inside the standalone Python workflow <br/>
(Refer to Isaac Sim Workflows for details of different workflows) <br/>
Demonstrate the UI method using existing Omnigraph nodes <br/>
### Learning Objectives
(1)Enable a Turtlebot3 to drive around and subscribe to a twist message through the ROS network <br/>
(2)Learn to Add controllers to Turtlebot3 <br/>
(3)Introduce the ROS bridge and ROS OmniGraph (OG) nodes <br/>
(4)Setup the robot to be driven by a ROS Twist message <br/>
### Getting Started
Prerequisites <br/>
Have a rigged Turtlebot, or completed URDF Import: Turtlebot <br/>
ROS bridge enabled <br/>
roscore is running <br/>
### Main Concepts
**Driving the Robot** <br/>
Preview <br/>
At the end of URDF Import: <br/>
Turtlebot(the robot) <br/>
Has drivable joints  <br/>
When given a target position or velocity, can move the joints to match the targets <br/>
-Most cases want to be controlling the vehicle speed and not the individual wheel speed <br/>
First want to add the appropriate controllers <br/>
Ex. Turtlebot3, a wheeled-robot with two wheels <br/>
Nodes needed are Differential Controller and Articulation Controller <br/>
Differential Controller node: Convert vehicle speed to wheel speed <br/>
Artciulation Controller node: Send the commands to the joint drives <br/>
Detailed instructions on how to connect these nodes can be found in [OmniGraph](https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_gui_omnigraph.html#isaac-sim-app-tutorial-gui-omnigraph) for a similar robot (NVIDIA Jetbot) <br/>
**Connecting to ROS** <br/>
As part of our ROS bridge, certain nodes are provided <br/>
Nodes that are subscribers and publisher of specific messages <br/>
Utility nodes such as keeping track of simulation time <br/>
Helper Nodes, which are gateways to more complex Omnigraphs that we abstract away from users <br/>
Process to establish a ROS bridge for a specific topic <br/>
(1)Open an action graph <br/>
(2)Add the OG nodes relevant to the desired ros topics <br/>
(3)Modify any properties as needed <br/>
(4)Connect the data pipeline <br/>
ROS publisher nodes: <br/>
Where Omniverse Isaac Sim data gets packaged into ROS message and sent out to the ROS network <br/>
ROS subscriber nodes: <br/>
Where ROS messages are received and allocated to the corresponding Omniverse Isaac Sim parameters <br/>
To use them, we simply have to pipe in and out the necessary data, as directed by the properties of each node <br/>
Custom Message, Omnigraph: <br/>
If needed to publish or subscribe to messages beyond the ones we provided <br/>
Custom Python Nodes, or Omnigraph: Custom C++ Nodes for ways to integrate custom messages <br/>
### Putting it Together
**Building the Graph** <br/>
(1)Open Visual Scripting: <br/>
Window > Visual Scripting > Action Graph <br/>
<picture>  <br/>
Action Graph window will appear on the bottom (Can dock it wherever that’s convenient) <br/>
(2)Create action graph <br/>
<picture>  <br/>
Click on the New Action Graph Icon (In middle of the Action Graph Window) <br/>
(3)Check OmniGraph Nodes (or OG nodes) <br/>
Inside the Action Graph window, there is a panel on the left hand side with all the OmniGraph Nodes (or OG nodes) <br/>
ROS related OG nodes are listed under Isaac Ros (Can also search for nodes by name) <br/>
(4)Place nodes in the graph <br/>
<picture>  <br/>
Drag it from the node list into the graph window <br/>
(5)Practice building a graph <br/>
![Driving_TurtleBot_Via_Messages1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/eee3ed2f-b7c3-4323-b154-a7b5b5fa61d6) <br/>
Build a graph that matches the one above <br/>
<picture>  <br/>

-Note for the Make Array node, use the +/- buttons in the property tab to add additional inputs <br/>

### Graph Explained
**On Playback Tick Node**: <br/>
<picture> <br/>
Producing a tick when simulation is “Playing”. <br/>
Nodes that receives ticks from this node will execute their compute functions every simulation step.<br/>
**ROS Subscribe Twist Node**: <br/>
<picture> <br/>
Subscribing to a Twist message <br/>
-Specify the Rostopic’s name /cmd_vel in the topicName field in its Property Tab <br/>
-Often have a Exec Out field <br/>
Act similar to a tick and will send a signal when a message is received by the subscriber <br/>
ex. In this case, we want to only calculate the differential commands when a new twist message arrives <br/>
=> Differential Node’s Exec In is ticked by the output of the subscriber node and not by On Playback Tick <br/>
**Scale To/From Stage Unit Node**: <br/>
<picture> <br/>
Convert assets or inputs to stage unit <br/>
**Break 3-Vector Node**: <br/>
<picture> <br/>
Output of the Twist subscriber node is linear and angular velocities, both 3-dimensional vectors <br/>
But the input of the differential controller node only takes a forward velocity and rotation velocity in z-axis <br/>
Therefore we need to decompose the array and extract the corresponding elements before feeding them into the differential controller node <br/>
**Differential Controller Node**: <br/>
<picture> <br/>
Receives desired vehicle speed and calculates the wheel speed of the robot <br/>
Needs the wheel radius and distance between the wheels to make that calculation<picture> <br/>
-Can also receive optional speed limit parameters to cap off wheel speed<picture> <br/>
-Type in the property tab the wheel radius, the distance between the wheels, and the maximum linear speed for the vehicle as seen in table below to match the Turtlebot <br/>
![Driving_TurtleBot_Via_Messages2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/81b211ea-ebd8-4487-96f0-c5caa4c63328) <br/>
**Articulation Controller Node**: <br/>
<picture> <br/>
Node is assigned to a target robot, then takes in the names or the indices of the joints that needs to be moved, and move them by the commands given in either Position Commands, Velocity Commands, or Effort Commands <br/>
Note the Articulation Controller node is ticked by On Playback Tick <br/>
So that if no new Twist message arrives, it will continue to execute whatever command it had received before <br/>

Process to assign the Articulation Controller node’s target to be the Turtlebot <br/>
-In the property tab, unselect Use Path, and click on Target for the Prim to find Turtlebot prim in the popup box <br/>
<picture> <br/>
-Make sure the robot prim you select is also where the Articulation Root API is applied <br/>
Sometimes it is the robot’s parent prim. But often times for mobile robots, it is the chassis prim instead<br/>
-If you used the URDF importer following our previous tutorial, the Articulation Root API can be found on turtlebot3_burger/base_footprint. 
<picture> <br/>
More about Articulation API can be found in [Add Articulation](https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_gui_simple_robot.html#isaac-sim-app-tutorial-gui-simple-robot-articulation) <br/>
-To put the names of the wheel joints in an array format, type in the names of the wheel joints inside each of the Constant Token nodes, and feed the array of the names into the Make Array Node <br/>
<picture> <br/>
The names of the joints for the Turtlebot are wheel_left_joint and wheel_right_joint <br/>
(Why not put the names in Constant String node, it’s because OmniGraph does not have string-array data type, therefore if strings needed to be put in an array format to be used by a node, it needs to be token type instead) <br/>
**Verifying ROS connections** <br/>
(1)Press Play to start ticking the graph and the physics simulation <br/>
<picture> <br/>
(2)In a separate ROS-sourced terminal, check that the associated rostopics exist with rostopic list<br/>
rostopic list <br/>
/cmd_vel should be listed in addition to /rosout and /rosout_agg <br/>
(3)Now that a twist subscriber is setup, a twist message can be published to /cmd_vel topic to control the robot <br/>
rostopic pub /cmd_vel geometry_msgs/Twist '{linear:  {x: 0.2, y: 0.0, z: 0.0}, angular: {x: 0.0,y: 0.0,z: 0.0}}' <br/>
In a separate ROS-sourced terminal, send drive forward command <br/>
rosrun teleop_twist_keyboard teleop_twist_keyboard.py <br/>
Alternatively, you can also setup keyboard device interface inside OmniGraph. More of that can be found in OmniGraph: Input Devices <br/>
<br/>
Reference: <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/ros_tutorials/tutorial_ros_drive_turtlebot.html <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_gui_omnigraph.html#isaac-sim-app-tutorial-gui-omnigraph <br/>
