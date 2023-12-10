![image](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/30f5088a-5ac5-4613-a82b-f8820b75ebb7)---
layout: post
title:  "1. Build ROS Environment"
---
## 1. Development Environment & Base OS installation
Check My Ubuntu Version <br/>
![Ubuntu Version](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/67d321d7-3ff1-4c79-8d8d-8f4f01ba5d4e) <br/>
Ubuntu 20.04 LTS [6]를 사용해도 ROS 2 사용에는 문제없다고 해서 진행함. <br/>

## 2. Install Robot OS
ROS 2 Foxy Fitzroy Installation: Use Debian Package <br/>
### Set Locale
![locale](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b7179963-cf29-420e-9b28-190eb8b38f82) <br/>
Make sure whether having a locale supporting UTF-8. Having a minimal environment(ex.POSIX) can cause problems.<br/>
![locale Installation1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/94a7d43e-54f0-4750-a6fc-09b11b922051) <br/>
Update Locale on the system setting them to use 'US.UTF-8' Locale for encoding => consistent language and encoding settings <br/>
Test with the following settings (Different UTF-8 supported locale is also fine)<br/>
![locale installation2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/82f7e2ca-7971-402e-b219-978ae8571b5b) <br/>
Verify Settings<br/>
### Set up Sources 
![setup sources1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bd7ebf7b-101e-4a8c-990a-1f9a82d24d3b)  <br/>
Ensure Ubuntu Universe repository is enabled <br/>
![SetupSources2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/15ffa660-2b58-4a78-88b6-b3913eaeb1b2)  <br/>
![Setup Sources3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c975dd5d-12e7-4045-86a9-11d6d132bc52) <br/>
Install curl package with '-y' flag, uses curl package to download the ROS key from specified url and save as ros-archive-keyring.gpg in directory /usr/share/keyrings <br/>
Key is used for verifying the authenticity of ROS packages during the installation <br/>
![Setup Sources3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5f51639c-8b4a-4903-b915-366ffd6bf940)
Add repository to sources list <br/>
### Install Ros2 Packages 
![Ros2 Packages Installation1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0ad90f65-a038-45fb-bed4-9c0b45eefb23) <br/>
Update apt repository caches in the setted repositories  <br/>
![ROS2 Packages Installation2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7d8ef6dc-9864-46b7-a2ef-1dc03a43dfe6) <br/>
Ensure my system is up to date <br/>
![ROS2 Packages Installation3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/70bb89cd-de34-447a-a504-453c35835723) <br/>
Desktop Install: ROS, RViz, demos, tutorials <br/>
![ROS2 Packages Installation4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/054ac8c9-91bc-4305-948a-8a2d2be763f9)
ROS-Base Install (Bare Bones): Communication libraries, message packages, command line tools. No GUI tools.
![ROS2 Packages Installation5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/70bb89cd-de34-447a-a504-453c35835723) <br/>
Development tools: Compilers and other tools to build ROS packages <br/>



### Environment Setup

Set up your environment by sourcing the following file.<br/>

