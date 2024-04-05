---
layout: post
title:  "Record Isaac ROS Turtlebot3 Images"
---
# Record Isaac ROS Turtlebot3 Images
## Record Without Any Objects
### Ros2 bag
(1)Launch Ros2 Common container <br/>
```
cd ${ISAAC_ROS_WS}/src
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh ${ISAAC_ROS_WS}
```
(2)See Topics <br/>
```
ros2 topic list
```
![Ros2Cameras24](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0dbb0c1a-2d1f-407b-b686-66e8da7daa09) <br/>

(3)Record the topics that are being subscribed  <br/>
Command: <br/>
```
ros2 bag record -o turtlemes2 /cmd_vel /parameter_events /rgb /rosout
```
(4)Display information about a ROS 2 bag file <br/>
turtlemes2 <br/>
```
ros2 bag info turtlemes2
```
![Ros2Cameras25](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/32f8f609-fa74-4ba1-98b4-fc4e7777a278) <br/>
(6)Play the recorded Ros2 bag file <br/>
turtlemes2 <br/>
```
ros2 bag play turtlemes2
```
![Ros2Cameras27](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3c2bd0fe-0289-4e16-b37a-d006f63662c0) <br/>

(7)Check by echoing the message <br/>
turtlemes2 <br/>
```
ros2 topic echo /cmd_vel
```
![Ros2Cameras26](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/214a7685-909e-46f1-9be4-26e29cd51add) <br/>
```
ros2 topic echo /rgb
```
![Ros2Cameras28](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/96b61c34-7b53-4409-9507-236fcea857df) <br/>

Ros2bag Data Files: 
turtlemes2: https://drive.google.com/drive/folders/1nUen8gcKWVbZOp92moKA_A-Y1Cqvbxzt?usp=sharing <br/>

## Record With the object Cone
(1)Add the object Cone <br/>
Create > Shape > Cone <br/>
(2) Transform Configuration <br/>
Cone Transform Configuration <br/>
![Turtlebot3_Record2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1308ebff-2b71-4e4c-83aa-ba90e47528e2) <br/>
Turtlebot3 Burger Configuration <br/>
![Turtlebot3_Record1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/46143988-1743-4d67-9816-6a37f7802a0b) <br/>
turtle_Camera Position Configuration <br/>
(Modified the translate Z axis to 0.3) <br/>
![Turtlebot3_Record3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/239d0448-c7b9-4a3d-bb59-a5677920a83e) <br/>
(3)Launch Ros2 Common container in both terminals <br/>
```
cd ${ISAAC_ROS_WS}/src
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh ${ISAAC_ROS_WS}
```
(4)See Topics <br/>
Terminal1: <br/>
```
ros2 topic list
```
![Turtlebot3_Record4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8ad66011-c55e-4c88-bf0a-1410b0a1c095) <br/>
(5)Drive the robot forward <br/>
Let’s drive it forward with the command: <br/>
Terminal2: <br/>
```
ros2 topic pub /cmd_vel geometry_msgs/Twist '{linear:  {x: 0.2, y: 0.0, z: 0.0}, angular: {x: 0.0,y: 0.0,z: 0.0}}'
```
(6)Record the topics that are being subscribed <br/>
Terminal1: <br/>
```
ros2 bag record -o turtlemescone1 /cmd_vel /parameter_events /rgb /rosout
```
![Turtlebot3_Record5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/00f6acbf-f534-49fe-aae2-fa9c4efcf019) <br/>
(6)Display information about a ROS 2 bag file <br/>
turtlemescone1 <br/>
Terminal1: <br/>
```
ros2 bag info turtlemescone1
```
![Turtlebot3_Record6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d2393c25-d904-4a11-a118-cfc57df6a032) <br/>

(7)Play the recorded Ros2 bag file <br/>
turtlemescone1 <br/>
Terminal1: <br/>
```
ros2 bag play turtlemescone1
```
![Turtlebot3_Record9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f31611bd-79be-4301-9806-ba2831ddec42) <br/>

(8)Check by echoing the message <br/>
turtlemes2 <br/>
Terminal3: <br/>
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh ${ISAAC_ROS_WS}
ros2 topic echo /cmd_vel
```
![Turtlebot3_Record7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8ed09760-631e-4131-8e56-a06fb9f366e1) <br/>

```
ros2 topic echo /rgb
```
![Turtlebot3_Record8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5920eb05-c62c-46b1-be1b-4761bb5fe26c) <br/>

Ros2bag Data Files: 
turtlemescone1: https://drive.google.com/drive/folders/1nUen8gcKWVbZOp92moKA_A-Y1Cqvbxzt?usp=sharing <br/>


## Record With the object Cube
(1)Add the object Cone <br/>
Create > Shape > Cone <br/>
(2) Transform Configuration <br/>
Cube Transform Configuration <br/>
![Turtlebot3_Record17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f3cb5772-9fda-4dd9-930b-aa2541bf360a) <br/>
Turtlebot3 Burger Configuration <br/>
![Turtlebot3_Record12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/607b236a-92ab-4495-a632-277e18d7ca46) <br/>
turtle_Camera Position Configuration <br/>
![Turtlebot3_Record10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2e3223a6-8777-48d6-bc3d-bad29c27bd0c) <br/>
(3)Launch Ros2 Common container <br/>
```
cd ${ISAAC_ROS_WS}/src
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh ${ISAAC_ROS_WS}
```
(4)See Topics <br/>
```
ros2 topic list
```
![Turtlebot3_Record18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6b0484be-5619-44d2-9b9d-e173e3921a1c) <br/>
(5)Drive the robot forward <br/>
Let’s drive it forward with the command: <br/>
Terminal2: <br/>
```
ros2 topic pub /cmd_vel geometry_msgs/Twist '{linear:  {x: 0.2, y: 0.0, z: 0.0}, angular: {x: 0.0,y: 0.0,z: 0.0}}'
```
(6)Record the topics that are being subscribed <br/>
Terminal1: <br/>
Command: <br/>
```
ros2 bag record -o turtlemescube1 /cmd_vel /parameter_events /rgb /rosout
```
![Turtlebot3_Record19](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/405b415b-daef-4772-8917-cf39dd909fb4) <br/>
(7)Display information about a ROS 2 bag file <br/>
Terminal1: <br/>
turtlemescube1 <br/>
```
ros2 bag info turtlemescube1
```
![Turtlebot3_Record20](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/781abdce-cbd7-4a4f-890f-8d84a872f24e) <br/>
(8)Play the recorded Ros2 bag file <br/>
turtlemescube1 <br/>
Terminal1: <br/>
```
ros2 bag play turtlemescube1
```
(9)Check by echoing the message <br/>
turtlemescube1 <br/>
Terminal3: <br/>
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh ${ISAAC_ROS_WS}
ros2 topic echo /cmd_vel
```
![Turtlebot3_Record21](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f128f57b-6349-4498-ba7e-7833bf951e04) <br/>
```
ros2 topic echo /rgb
```
![Turtlebot3_Record22](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/083e749a-198f-4344-8487-edf81ddd4fc3) <br/>
Ros2bag Data Files: 
turtlemescube1: https://drive.google.com/drive/folders/1nUen8gcKWVbZOp92moKA_A-Y1Cqvbxzt?usp=sharing <br/>

## Record With the object Cylinder
(1)Add the object Cylinder <br/>
Create > Shape > Cylinder <br/>
(2) Transform Configuration <br/>
Cylinder Transform Configuration <br/>
![Turtlebot3_Record23](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c589cbbd-4e11-4f8b-b308-274e9ca703c6) <br/>
Turtlebot3 Burger Configuration <br/>
![Turtlebot3_Record24](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cf47708e-aacd-486d-8271-2b481ba0e471) <br/>
turtle_Camera Position Configuration <br/>
![Turtlebot3_Record25](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c2647b30-d567-4f32-aa8a-2883cc283637) <br/>
(3)Launch Ros2 Common container <br/>
```
cd ${ISAAC_ROS_WS}/src
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh ${ISAAC_ROS_WS}
```
(4)See Topics <br/>
```
ros2 topic list
```
![Turtlebot3_Record26](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/56e8f8f3-63d9-4d52-a773-d5bf42bb8f82) <br/>
(5)Drive the robot forward <br/>
Let’s drive it forward with the command: <br/>
Terminal2: <br/>
```
ros2 topic pub /cmd_vel geometry_msgs/Twist '{linear:  {x: 0.2, y: 0.0, z: 0.0}, angular: {x: 0.0,y: 0.0,z: 0.0}}'
```
(6)Record the topics that are being subscribed <br/>
Terminal1: <br/>
Command: <br/>
```
ros2 bag record -o turtlemescylinder1 /cmd_vel /parameter_events /rgb /rosout
```
![Turtlebot3_Record27](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9115d54b-a0e3-4962-b37c-2be976cf6ba6) <br/>
(7)Display information about a ROS 2 bag file <br/>
Terminal1: <br/>
turtlemescylinder1 <br/>
```
ros2 bag info turtlemescylinder1
```
![Turtlebot3_Record28](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/44cba35f-5cff-47a8-a85a-3c438f961000) <br/>
(8)Play the recorded Ros2 bag file <br/>
turtlemescylinder1 <br/>
Terminal1: <br/>
```
ros2 bag play turtlemescylinder1
```
(9)Check by echoing the message <br/>
turtlemescylinder1 <br/>
Terminal3: <br/>
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh ${ISAAC_ROS_WS}
ros2 topic echo /cmd_vel
```
![Turtlebot3_Record29](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/39e8bef1-4684-44ff-9ca4-68d6ab7b1ffb) <br/>
```
ros2 topic echo /rgb
```
![Turtlebot3_Record30](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6f6c76b2-78e4-4987-bea1-884400e040e6)
878314b9) <br/>
