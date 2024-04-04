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
nvblox1 <br/>
![Nvblox2-40](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/66d71a44-417c-43e1-98c2-3793f18976d7) <br/>
nvblox2 <br/>
![Nvblox2-43](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4e47ed45-3a0c-494f-80ce-8fb19f1a770b) <br/>
nvblox3 <br/>
```
ros2 bag info nvblox3
```
![Nvblox2-50](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/117bd462-4dce-43fc-9d1e-d42fb4c10e62) <br/>
(6)Play the recorded Ros2 bag file <br/>
nvblox1 <br/>
![Nvblox2-41](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/79455206-6da2-4035-860b-3a3f0075e0c1) <br/>
nvblox2 <br/>
![Nvblox2-46](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1660e5a5-dffc-467b-be90-322b90352fa0) <br/>
nvblox3 <br/>
```
ros2 bag play nvblox3
```
![Nvblox2-53](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ad3f49d2-c6d8-4c41-ad58-34c845fbc3bf) <br/>
(7)Check by echoing the message <br/>
nvblox1 <br/>
![Nvblox2-44](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2c7b7e32-f679-4208-a5b0-6a0a5bc44bc9) <br/>
nvblox2 <br/>
![Nvblox2-45](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f8148ba3-df91-4fad-8d59-65adfbb959a9) <br/>
nvblox3 <br/>
```
ros2 topic echo /bond
```
![Nvblox2-51](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9452efc5-f510-4a91-a77f-60b0126b707d) <br/>
![Nvblox2-52](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f528090b-809e-457a-86c3-a5ac45a8e635) <br/>
Rosbag Data Files: 
Nvblox1: https://drive.google.com/drive/folders/1nUen8gcKWVbZOp92moKA_A-Y1Cqvbxzt?usp=sharing <br/>
Nvblox2: https://drive.google.com/drive/folders/1m7kGxxKQ_zyDKCj4C6x-W4Fal-SlocVm?usp=sharing <br/>
Nvblox3: https://drive.google.com/drive/folders/1Kq51JWFLzy_WMcmDXdB8ZNe0DUN7DArK?usp=sharing <br/>

