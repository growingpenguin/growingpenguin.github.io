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

(3)Record the topics subscribing only for the Nvblox Repository <br/>
Command: <br/>
```
ros2 bag record -o turtlemes2 /cmd_vel /parameter_events /rgb /rosout
```
(4)Display information about a ROS 2 bag file <br/>
nvblox3 <br/>
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

Rosbag Data Files: 
turtlemes2: https://drive.google.com/drive/folders/1nUen8gcKWVbZOp92moKA_A-Y1Cqvbxzt?usp=sharing <br/>

## Record With the object Cone
(1)Add the object Cone <br/>
Create > Shape > Cone <br/>
(2) Transform Configuration <br/>
Cone Transform Configuration <br/>
![Ros2Cameras29](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6a1d601d-62c8-4337-92cc-007be1d55b5e) <br/>



