---
layout: post
title:  "Record Isaac ROS Turtlebot3 Images"
---
# Record Isaac ROS Turtlebot3 Images
## Record Without Any Objects
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
### Move Forward
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

Ros2bag Data Files: <br/>
turtlemescone1: https://drive.google.com/drive/folders/1nUen8gcKWVbZOp92moKA_A-Y1Cqvbxzt?usp=sharing <br/>

### Move Using Teleop Keyboard
(1)Add the object Cone <br/>



(2)Same as above <br/>
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
(5)Drive the robot using teleopkeyboard <br/>
Let’s drive the robot anyway we want with the command: <br/>
Terminal2: <br/>
```
sudo apt-get install ros-humble-teleop-twist-keyboard
ros2 run teleop_twist_keyboard teleop_twist_keyboard
```
(6)Record the topics that are being subscribed <br/>
Terminal1: <br/>
```
ros2 bag record -o turtlemescone2 /cmd_vel /parameter_events /rgb /rosout
```
(7)Display information about a ROS 2 bag file <br/>
turtlemescone1 <br/>
Terminal1: <br/>
```
ros2 bag info turtlemescone2
```
(8)Play the recorded Ros2 bag file <br/>
turtlemescone1 <br/>
Terminal1: <br/>
```
ros2 bag play turtlemescone2
```



## Record With the object Cube
### Move Forward
(1)Add the object Cube <br/>
Create > Shape > Cube <br/>
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

### Move Using Teleop Keyboard
(1)Add the object Cube <br/>
(2)Same as above <br/>
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
(5)Drive the robot using teleopkeyboard <br/>
Let’s drive the robot anyway we want with the command: <br/>
Terminal2: <br/>
```
sudo apt-get install ros-humble-teleop-twist-keyboard
ros2 run teleop_twist_keyboard teleop_twist_keyboard
```
(6)Record the topics that are being subscribed <br/>
Terminal1: <br/>
```
ros2 bag record -o turtlemescube2 /cmd_vel /parameter_events /rgb /rosout
```
(7)Display information about a ROS 2 bag file <br/>
turtlemescone1 <br/>
Terminal1: <br/>
```
ros2 bag info turtlemescube2
```
(8)Play the recorded Ros2 bag file <br/>
turtlemescone1 <br/>
Terminal1: <br/>
```
ros2 bag play turtlemescube2
```

## Record With the object Cylinder
### Move Forward
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
Ros2bag Data Files: <br/>
turtlemescylinder1: https://drive.google.com/drive/folders/1nUen8gcKWVbZOp92moKA_A-Y1Cqvbxzt?usp=sharing <br/>
### Move Using Teleop Keyboard
(1)Add the object Cylinder <br/>
(2)Same as above <br/>
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
(5)Drive the robot using teleopkeyboard <br/>
Let’s drive the robot anyway we want with the command: <br/>
Terminal2: <br/>
```
sudo apt-get install ros-humble-teleop-twist-keyboard
ros2 run teleop_twist_keyboard teleop_twist_keyboard
```
(6)Record the topics that are being subscribed <br/>
Terminal1: <br/>
```
ros2 bag record -o turtlemescube2 /cmd_vel /parameter_events /rgb /rosout
```
(7)Display information about a ROS 2 bag file <br/>
turtlemescone1 <br/>
Terminal1: <br/>
```
ros2 bag info turtlemescube2
```
(8)Play the recorded Ros2 bag file <br/>
turtlemescone1 <br/>
Terminal1: <br/>
```
ros2 bag play turtlemescube2
```


## Record With the object Sphere
### Move Forward
(1)Add the object Sphere <br/>
Create > Shape > Sphere <br/>
(2) Transform Configuration <br/>
Sphere Transform Configuration <br/>
![Turtlebot3_Record32](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cc1f3b02-59b0-4c9f-b922-ba8103e4eb33) <br/>
Turtlebot3 Burger Configuration <br/>
![Turtlebot3_Record33](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f354c176-ba64-499b-85c0-16515467fced) <br/>
turtle_Camera Position Configuration <br/>
![Turtlebot3_Record34](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f9814489-fe6d-46ad-a317-90cd1fb5dc0f) <br/>
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
![Turtlebot3_Record35](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2583396b-54f6-49bc-b468-d6d644b6af9c) <br/>
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
ros2 bag record -o turtlemessphere1 /cmd_vel /parameter_events /rgb /rosout
```
![Turtlebot3_Record40](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e43d6e1a-3497-4900-9df4-0abf42b6f94b) <br/>
(7)Display information about a ROS 2 bag file <br/>
Terminal1: <br/>
turtlemessphere1 <br/>
```
ros2 bag info turtlemessphere1
```
![Turtlebot3_Record36](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6a54584e-aeee-4443-b367-dd90fb4d70fb) <br/>
(8)Play the recorded Ros2 bag file <br/>
turtlemessphere1 <br/>
Terminal1: <br/>
```
ros2 bag play turtlemessphere1
```
![Turtlebot3_Record39](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f7751ef9-5dd1-4d21-b0e8-02bc3473368d) <br/>
(9)Check by echoing the message <br/>
turtlemessphere1 <br/>
Terminal3: <br/>
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh ${ISAAC_ROS_WS}
ros2 topic echo /cmd_vel
```
![Turtlebot3_Record37](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/948fad38-2688-4fc7-a3e9-c3c191363422) <br/>
```
ros2 topic echo /rgb
```
![Turtlebot3_Record38](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4c02057b-98a1-4401-a3bc-15b19fa36455) <br/>

Ros2bag Data Files: <br/>
turtlemescone1: https://drive.google.com/drive/folders/1nUen8gcKWVbZOp92moKA_A-Y1Cqvbxzt?usp=sharing <br/>

### Move Using Teleop Keyboard
### Move Forward
(1)Add the object Cylinder <br/>
(2)Same as above <br/>
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
(5)Drive the robot using teleopkeyboard <br/>
Let’s drive the robot anyway we want with the command: <br/>
Terminal2: <br/>
```
sudo apt-get install ros-humble-teleop-twist-keyboard
ros2 run teleop_twist_keyboard teleop_twist_keyboard
```
(6)Record the topics that are being subscribed <br/>
Terminal1: <br/>
```
ros2 bag record -o turtlemescube2 /cmd_vel /parameter_events /rgb /rosout
```
(7)Display information about a ROS 2 bag file <br/>
turtlemescone1 <br/>
Terminal1: <br/>
```
ros2 bag info turtlemescube2
```
(8)Play the recorded Ros2 bag file <br/>
turtlemescone1 <br/>
Terminal1: <br/>
```
ros2 bag play turtlemescube2
```


## Record With the object Capsule
### Move Forward
(1)Add the object Capsule <br/>
Create > Shape > Capsule <br/>
(2) Transform Configuration <br/>
Capsule Transform Configuration <br/>
![Turtlebot3_Record41](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/83ecb2e4-adf4-4b39-b055-f793884d3a72) <br/>
Turtlebot3 Burger Configuration <br/>
![Turtlebot3_Record42](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dadaf451-e25e-4fb1-9f0e-83e5ca763174) <br/>
turtle_Camera Position Configuration <br/>
![Turtlebot3_Record43](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/fb576919-239a-4600-9239-d6905b54023e) <br/>
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
![Turtlebot3_Record45](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/89dc4ff6-90ec-47dc-bce4-d584f3d22f1c) <br/>
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
ros2 bag record -o turtlemescapsule1 /cmd_vel /parameter_events /rgb /rosout
```
![Turtlebot3_Record44](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/27882050-ee72-40d2-b0de-9568ff6d94c0) <br/>
(7)Display information about a ROS 2 bag file <br/>
Terminal1: <br/>
turtlemescapsule1 <br/>
```
ros2 bag info turtlemescapsule1
```
![Turtlebot3_Record46](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6251a149-a434-4457-88d7-43757f2aa554) <br/>
(8)Play the recorded Ros2 bag file <br/>
turtlemescapsule1 <br/>
Terminal1: <br/>
```
ros2 bag play turtlemescapsule1
```
![Turtlebot3_Record49](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8cd70ee8-eec1-4b16-8c96-73289e74cad7) <br/>

(9)Check by echoing the message <br/>
turtlemescapsule1 <br/>
Terminal3: <br/>
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh ${ISAAC_ROS_WS}
ros2 topic echo /cmd_vel
```
![Turtlebot3_Record47](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/03556753-4335-4aee-ae1d-2f76e5471586) <br/>
```
ros2 topic echo /rgb
```
![Turtlebot3_Record48](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/39a6b202-3684-4056-9baa-fe57f75085df) <br/>
Ros2bag Data Files: <br/>
turtlemescapsule1: https://drive.google.com/drive/folders/1nUen8gcKWVbZOp92moKA_A-Y1Cqvbxzt?usp=sharing <br/>

### Move Using Teleop Keyboard
(1)Add the object Capsule <br/>
(2)Transform Configuration <br/>
Capsule Transform Configuration <br/>
Capsule <br/>
![Turtlebot3_Record50](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/34a4cb71-ca28-4b27-ade9-b37e84acab3a) <br/>
Capsule_01 <br/>
![Turtlebot3_Record51](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/08f9cb68-2367-4a1c-ad84-be96086e08b1) <br/>
Capsule_02 <br/>
![Turtlebot3_Record52](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/13dc9b92-5aa8-4247-8831-df610220b067) <br/>
Capsule_03 <br/>
![Turtlebot3_Record53](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e2e17c36-773f-4047-837a-e4482caf320f) <br/>
Capsule_04 <br/>
![Turtlebot3_Record54](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b930a281-d96f-4a9b-afb4-18e1b3e3c048) <br/>
Capsule_05 <br/>
![Turtlebot3_Record55](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/aa237318-f6e2-46ae-bf8c-c39a8ffd275c) <br/>
Capsule_06 <br/>
![Turtlebot3_Record59](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/912dd4ea-246a-43fc-b2e5-283735b14e2e) <br/>
Capsule_07 <br/>
![Turtlebot3_Record57](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e194c3e3-e9f7-4190-84c6-50f4bf87bb27) <br/>
Capsule_08 <br/>
![Turtlebot3_Record58](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/090d5492-1e02-4357-b131-970d6693c14a) <br/>
![Turtlebot3_Record60](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4178224d-8f7a-4314-9e33-d4c8602991cd) <br/>
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
![Turtlebot3_Record61](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5511cbf6-4e5f-48bb-9782-0b253565f76c) <br/>
(5)Drive the robot using teleopkeyboard <br/>
Let’s drive the robot anyway we want with the command: <br/>
Terminal2: <br/>
```
sudo apt-get install ros-humble-teleop-twist-keyboard
ros2 run teleop_twist_keyboard teleop_twist_keyboard
```
![Turtlebot3_Record62](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1ccbc723-5062-4c8d-8299-b7f007ab74d1) <br/>
![Turtlebot3_Record64](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a7e2524c-7515-4853-b9cd-c4bfbe327a51) <br/>
 

(6)Record the topics that are being subscribed <br/>
turtlemescapsule2 <br/>
Terminal1: <br/>
```
ros2 bag record -o turtlemescapsule2 /cmd_vel /parameter_events /rgb /rosout
```
![Turtlebot3_Record63](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0d968a60-0a51-4d7d-b89d-c14cbb1e884b) <br/>
![Turtlebot3_Record68](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7c0f96b6-3b45-472b-91a4-6074353d1031) <br/>
turtlemescapsule3 <br/>

(7)Display information about a ROS 2 bag file <br/>
turtlemescone1 <br/>
Terminal1: <br/>
```
ros2 bag info turtlemescapsule2
```
![Turtlebot3_Record65](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/529eab36-4b7f-4a71-92e1-be344d8cd76f) <br/>
(8)Play the recorded Ros2 bag file <br/>
turtlemescapsule2 <br/>
Terminal1: <br/>
```
ros2 bag play turtlemescapsule2
```
![Turtlebot3_Record67](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7447c6f7-c728-47ae-a782-3a91a2ecd642) <br/>
(9)Check by echoing the message <br/>
turtlemescapsule2 <br/>
Terminal3: <br/>
```
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh ${ISAAC_ROS_WS}
ros2 topic echo /rgb
```
![Turtlebot3_Record66](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0a82b431-258a-4341-a45a-89e0a8c06722) <br/>
ros2 bags: https://drive.google.com/drive/folders/18WyccbhulqKnjPW6mPtuT0crya-w3QMN?usp=sharing <br/>


