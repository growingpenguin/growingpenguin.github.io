---
layout: post
title:  "1. Build ROS Environment"
---
## 1. Development Environment & Base OS installation
Check My Ubuntu Version <br/>
![Ubuntu Version](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/67d321d7-3ff1-4c79-8d8d-8f4f01ba5d4e)
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
Install curl package with '-y' flag, uses curl package to download the ROS key from specified url and save as ros-archive-keyring.gpg in directory /usr/share/keyrings <br/>
![Setup Sources3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c975dd5d-12e7-4045-86a9-11d6d132bc52) <br/>
Add repository to sources list <br/>
![Setup Sources3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5f51639c-8b4a-4903-b915-366ffd6bf940)

