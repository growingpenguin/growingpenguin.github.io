

![image](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b4449b60-d721-47cc-91c2-c91767c3efc2)# Isaac ROS AprilTag
Isaac ROS AprilTag: <br/>
ROS 2 package for detection of AprilTags, a type of fiducial marker that provides a point of reference or measure <br/>
-AprilTag detections are GPU-accelerated for high performance <br/>
![AprilTag1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d19a21c3-4a5b-4f44-95e6-67ff220f3033) <br/>
Common graph of nodes connects from an input camera through rectify and resize to AprilTag <br/>
-Rectify: Warps the input camera image into a rectified, undistorted output image <br/>
This node may not be necessary if the camera driver provides rectified camera images <br/>
Resize: Often used to downscale higher resolution cameras into the desired resolution for AprilTags if needed <br/>
The input resolution to AprilTag is selected by the required detection distance for the application, as a minimum number of pixels are required to perform an AprilTag detection and classification <br/>
-Example <br/>
A 8mp input image of 3840×2160 may be much larger than necessary and a 4:1 downscale to 1920x1080 could make more efficient use of compute resources and satisfy the required detection distance of the application <br/>
Each of the green nodes in the above diagram is GPU accelerated, allowing for a high-performance compute graph from Argus Camera to ApriTag <br/>
For USB and Ethernet cameras, the graph is accelerated from Rectify through AprilTag <br/>
![AprilTag2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c862de18-3d3a-4afb-bf6a-0ac16b46871f) <br/>
Detections are provided in an output array for the number of AprilTag detections in the input image <br/>
Each entry in the array contains the ID (two-dimensional bar code) for the AprilTag, the four corners ((x0, y0), (x1, y1), (x2, y2), (x3, y3)) and center (x, y) of the input image, and the pose of the AprilTag <br/>
Footnote <br/>
What is April Tag? <br/>
Reference: https://ftc-docs.firstinspires.org/en/latest/apriltag/vision_portal/apriltag_intro/apriltag-intro.html <br/>

## QuickStart
(1)Set up your development environment <br/>
Already Done <br/>
(2)Clone isaac_ros_common and this repository under ${ISAAC_ROS_WS}/src. <br/>
![AprilTag3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d8bc1f3a-660a-48fa-811b-6c0ce6044de0) <br/>
(3)Pull down a ROS Bag of sample data <br/>
![AprilTag4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ea218fa9-fc65-4d2e-b136-a60108d9b447) <br/>
(4)Launch the Docker container using the run_dev.sh script <br/>
![AprilTag5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dec6c58b-5ee0-4a91-8b54-1b358274c9d9) <br/>
(5)Install this package’s dependencies <br/>
![AprilTag6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6ebdeb77-4e6f-4384-ac35-0d75e1ef50ee) <br/>
(6)Run the following launch files to spin up a demo of this package <br/>
![AprilTag7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a500e497-f48a-4a9d-94ec-5c059d4d7222) <br/>
(7)Open a second terminal inside the docker container <br/>
![AprilTag8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ac0d8cae-bd46-40f1-8d39-58f040afc7d5) <br/>
(8)Run the rosbag file to simulate an image stream <br/>
![AprilTag9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/60d8271a-ce00-46c6-b3a1-cfd7b238a85f) <br/>
(9)Open a third terminal inside the docker container <br/>
![AprilTag10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bcd02d4a-ebef-4f3a-94c0-087abb467b94) <br/>
(10)Observe the AprilTag detection output /tag_detections on a separate terminal with the command <br/>
![AprilTag11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b8432f4d-5487-4e3f-9928-bb21e30048b6) <br/>







Reference <br/>
https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_apriltag/index.html#quickstarts <br/>
https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_apriltag/isaac_ros_apriltag/index.html#quickstart <br/>

