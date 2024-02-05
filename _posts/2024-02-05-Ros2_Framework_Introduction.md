---
layout: post
title:  "What is Ros2?"
---

# What is Ros2?
## Ros History
Ros was created back in 2007, as a means to create a collaborative open source robotics framework for software developers <br/>
-Industries which began to adopt robotic systems grew tremendously <br/>
ex. Manufacturing, Mobile outdoor robotics, Drone swarms, and Self-driving cars <br/>
-Ros2 was created as a new and improved version which could scale in the newly founded applications <br/>
## What does Ros2 offer? 
Example: Simple Mobile Robot <br/><
2)Motors <br/>
Each motor controlling both wheels on each side of the robot <br/>
3)Camera <br/>
A vertically mounted camera which has a motorized base so that the camera can turn <br/>
4)Sensors <br/>
Sensors on board that gives us information about robot's position <br/>
GPS sensor and IMU sensor gives the robot's orientation and acceleration data <br/>
### Ros2 feature
**Data Distributed Service(DDS)** <br/>
Communication pipeline which can interface with all of our code <br/>
**Nodes** <br/>
Executed code files which utilize Ros functionality <br/>
-Two python scripts utilize the Ros2 DDS to send information between them <br/>
-DDS also allows for security configurations so that you can secure the data you send between the nodes <br/>
### How nodes communicate with each other
1)Publisher Subscriber Method <br/>
-Arrow: Data flow direction for the Ros DDS communications <br/>
-camer.py: Wants to make available images for Ros DDS communications <br/>
Publishes images to anyone who wants to listen in or subscribe to this particular data <br/>
-**Topic**: Individual communication pipelines <br/>
ex. /_front_camera <br/>
-**Message**: The information node publishes <br/>
ex. Message type is an image <br/>
-The architecture is very scalable, so one publisher can send messages to multiple Subscribers <br/>
2)Service <br/>
-survey.py: survey node <br/>
ex. Service client that sends a request to turn the robot camera 45 degrees <br/>
-camer_mover.py: camera mover node <br/>
Request is received by the camer mover node which is a service server, which after completing the request, will send back a response <br/>
ex. Response is an image the camera took after turning the camera to the desired angle <br/>
3)Actions <br/>
-way_point_nav.py: Node which wants to command our robot to travel to a certain latitude longtitude coordinate to take a picture <br/>
-contoller.py: Action server will process the goal, and send progress updates to the client <br/>
**feedback**: progress updates <br/>
-Action server sends back feedback until the goal is reached <br/>
ex. Send back data on how far away is from the goal  <br/>


Reference: <br/>
https://www.youtube.com/watch?v=7TVWlADXwRw&t=37s <br/>
