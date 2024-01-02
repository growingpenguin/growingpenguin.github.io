---
layout: post
title:  "Assignment: 1st Week - Follow Isaac_ROS_Nvblox Repository"
---
# Isaac ROS Nvblox
Nvblox ROS 2 integration for local 3D scene reconstruction and mapping <br/>
Integration for Local 3D Scene Reconstruction and Mapping: <br/>
Nvblox is being used in conjunction with ROS 2 to perform the task reconstructing and mapping local 3D scenes. <br/>
Integrated system can take sensor data (like images or laser scans) from an environment and use it to build a three-dimensional model of that area. This is a crucial task in robotics for understanding and navigating the surrounding space. <br/>

## Features
**-Contains ROS 2 packages for 3D reconstruction and cost maps for navigation**  <br/>
3D reconstruction: Building three-dimensional models of the environment using sensor data. <br/>
cost maps for navigation: Creating maps that help robots determine the best paths to take while avoiding obstacles. <br/>
**-"isaac_ros_nvblox" processes depth and pose to reconstruct a 3D scene in real-time and outputs a 2D costmap for Nav2** <br/>
Processes depth and pose: <br/> 
Use information about how far objects are(depth) and the position/orientation(pose) of the robot or camera to understand the environment. <br/>
Reconstruct a 3D scene in real-time: <br/>
Quickly creates a 3D model of the surroundings as the robot moves<br/>
Outputs a 2D costmap for Nav2: <br/> 
Produces a 2D map that shows where obstacles are, which is used for navigation(Nav2 is a part of ROS 2 for robot navigation). <br/>
**-The costmap is used in planning during navigation as a vision-based solution to avoid obstacles** <br/>
The 2D map (costmap) is essential for the robot's planning process. It helps the robot see and avoid obstacles, ensuring safe and efficient movement. <br/>
**-isaac_ros_nvblox is designed to work with depth-cameras and/or 3D LiDAR. The package uses GPU acceleration to compute a 3D reconstruction and 2D costmaps using nvblox, the underlying framework-independent C++ library**. <br/>
GPU acceleration: Uses the processing power of a Graphics Processing Unit (GPU) to speed up calculations. <br/>
nvblox: A core library written in C++ that doesn't depend on any specific framework, used for making these calculations. <br/>
<br/>
## How NvBlox Operates
![Nvblox1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6ed28fab-86ca-487b-b11d-b743e78144f7)
Graph that uses isaac_ros_nvblox <br/>
**(1)Takes Depth image, Color image, and Pose as Input** <br/>
Depth Image: <br/>
Type of image where each pixel value represents the distance from the camera to the object in the scene.  <br/> 
Often used in 3D modeling and robotics because they provide crucial information about the physical layout of the environment. <br/>
Color Image: <br/>
Standard photographic image that captures the visual appearance of the scene in color. It helps in identifying objects and their features based on their colors and textures. <br/>
Pose: <br/>
Position and orientation of the camera(or the robot carrying the camera) in the environment. <br/>
Includes data like where the camera is located, which direction it's facing, and its tilt or angle. <br/> 
This information is vital for understanding how the camera is situated relative to the objects it's capturing in its images. <br/>
**(2)Computes a 3D scene reconstruction on the GPU**  <br/>
-VSLAM:Pose is computed using visual_slam, or some other pose estimation node <br/>
**(3)Plugin** <br/>
Cost map plugin <br/>
:Reconstruction is sliced into an output cost map which is provided through a cost map plugin into Nav2 <br/>
Footnote <br/>
Reconstruction is sliced into an output cost map: <br/>
After NvBlox completes the 3D reconstruction of the environment (using depth, color images, and pose), this reconstructed model is then processed to create a "cost map." A cost map is a special type of map used in robotics. It represents the environment in a way that helps a robot determine where it can and cannot, or should and should not, go. The term "sliced" here means that the 3D model is converted into a format suitable for navigation, usually a 2D map. <br/>
Provided through a cost map plugin into Nav2: <br/>
This cost map is then made available to Nav2 (the navigation system in ROS 2) through a specific software component, known as a "plugin." A plugin is like an add-on that provides extra features or functionality. In this case, the cost map plugin allows Nav2 to access and use the cost map for navigation purposes. <br/>
Mesh Visualization plugin <br/>
:An optional colorized 3D reconstruction is delivered into rviz using the mesh visualization plugin <br/>
Colorized 3D Reconstruction:  <br/>
This is essentially a 3D model of the environment that includes color information, making it visually detailed and realistic. <br/>
Delivered into rviz:  <br/>
Rviz is a visualization tool used in ROS (Robot Operating System) to visualize different types of data from robots, like sensor data, robot model, etc. <br/>
Using the mesh visualization plugin:  <br/>
The 3D model is integrated into rviz using another plugin, specifically designed for this purpose. This plugin is called a "mesh visualization plugin," and it allows users to see the 3D colorized reconstruction directly within the rviz environment. <br/>
**(4)Nvblox streams mesh updates to RViz to update the reconstruction in real-time as it is built.** <br/>
Optional colorized 3D reconstruction is delivered into rviz using the mesh visualization plugin: <br/>
Alongside the creation of a cost map for navigation, NvBlox also has the capability to generate a visual representation of the 3D reconstruction. <br/>

## Quick Start
**(1)Complete the Developer Environment Setup** <br/>
Development flow currently supported by Isaac ROS is to build on your target platform. <br/>
Setup ROS 2 Humble in your host machine with the Isaac ROS Buildfarm <br/>
Setup dependencies with rosdep OR you can use the Isaac ROS Dev Docker-based development environment through run_dev.sh. <br/>
(Recommend that you set up your developer environment with Isaac ROS Dev Docker) <br/>
Footnote <br/>
ROS 2 Humble: Version of the Robot Operating System 2 (ROS 2), a popular software framework used in robotics <br/>
Host Machine: Own computer, where you do your development work <br/>
Isaac ROS Buildfarm: Specific setup or tool provided by Isaac ROS to help you install and configure ROS 2 Humble on your computer. <br/>
Setup dependencies with rosdep: "rosdep" is a tool in ROS that helps you install software dependencies. Dependencies are additional software packages that Isaac ROS needs to function properly. <br/>
Docker-based development environment:  <br/>
Docker is a tool that allows you to create isolated environments, called containers, where you can run software without affecting the rest of your system. This sentence suggests that Isaac ROS provides a Docker container where you can develop your robotics software. <br/>
run_dev.sh:  <br/>
Script(a set of automated commands) that you can run to set up or start this Docker-based development environment. By running this script, you'd be able to work in a controlled, consistent environment that's specifically configured for Isaac ROS development <br/>
(1)-1 Install nvidia-container-toolkit and Docker & Configure nvidia-container-toolkit for Docker <br/>
On x86_64 platforms: <br/>
### Install nvidia-container-toolkit <br/>
**Installation** <br/>
Installing with apt <br/>
(1)Configure production repository <br/>
![Nvblox6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bad5b41a-ebde-4ec7-8439-d12683533783) <br/>
Adding the NVIDIA container toolkit repository securely to the system's package manager. After these commands are executed, the system will be able to install and update the NVIDIA container toolkit using apt commands like sudo apt update and sudo apt install nvidia-container-toolkit <br/>
Download NVIDIA GPG key for NVIDIA container repository -> Add NVIDIA GPG Key -> Download NVIDIA Container Toolkit Repository List -> Modify and Add the Repository -> Save the Repository List <br/>
Optionally, configure the repository to use experimental packages: <br/>
![Nvblox7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/53913f01-4dc8-46b6-a36b-5ea4f1352d7f) <br/>
Uncomment lines in the nvidia-container-toolkit.list file that contain the word "experimental". In the context of software repositories, uncommenting a line would activate the repository specified on that line, allowing you to install packages from it.<br/>
(2)Update the packages list from the repository <br/>
![Nvblox8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9018d193-acd2-4ee8-a0a3-e387d0fd06f7) <br/>
Update the list of available packages and their versions, but it does not install or upgrade any packages. <br/>
(3)Install the NVIDIA Container Toolkit packages <br/>
![Nvblox9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/74c61d0f-8b4a-48e4-a98a-b0118c804fd0) <br/>
**Configuration** <br/>
Prerequisites <br/>
You installed a supported container engine (Docker, Containerd, CRI-O, Podman) <br/>
You installed the NVIDIA Container Toolkit. <br/>
Docker <br/>
(1)Uninstall old versions <br/>
Uninstall all conflicting packages <br/>
![Nvblox10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/94ca9a00-1aea-4d23-a5b0-f1a37f94950c) <br/>
You installed the NVIDIA Container Toolkit. <br/>
(2)Uninstall Docker <br/>
![Nvblox11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b043f74c-8ec6-49e2-a9fc-de8acdc3b074) <br/>
Uninstall the Docker Engine, CLI, containerd, and Docker Compose packages: <br/>
![Nvblox12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/769c0bbf-2dfc-476f-b5b6-ed99987ac29a) <br/>
Images, containers, volumes, or custom configuration files on your host aren't automatically removed. Delete all images, containers, and volumes. <br/>
(3)Install using the apt repository <br/>
(3)-1 Set up Docker's apt repository <br/>
![Nvblox13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0525fa58-7a2a-4c14-93ab-9c9a3aa28267) <br/>
![Nvblox14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5672992b-b217-4b2d-8c66-c34cb5d6e0cb) <br/>
![Nvblox15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/273c3a41-d38a-4bdb-aa66-7070076b20ba) <br/>
![Nvblox16](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c88aadbb-4468-415e-b1f4-657a774ab38c) <br/>
![Nvblox17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d4a7f4d8-b029-432b-92b4-25ba6b9ae8b1) <br/>
Add Docker's official GPG key <br/>
![Nvblox18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a3c71171-f279-4693-b9c9-6aa9940bd7da) <br/>
![Nvblox19](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1e0f65e1-3ca8-47ef-9462-6d1594775888) <br/>
Add the repository to Apt sources <br/>
(3)-2 Install the Docker packages <br/>
![Nvblox20](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c3af00ea-77d8-43c6-8431-a5f8577eaeaf) <br/>
(3)-3 Verify that the Docker Engine installation is successful by running the hello-world image. <br/>
![Nvblox21](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c5aff969-b8af-4894-b1fd-f1b7e2ff9caf) <br/>
Reference: https://docs.docker.com/engine/install/ubuntu/ <br/>
containerd <br/>
![Nvblox22](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4de6ee4b-d3d9-457f-9618-1da5e86af6c1)  <br/>
![Nvblox23](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9e4a34b9-1357-4846-9e37-0ffc62ba9bda)  <br/>
Download the latest version of containerd from GitHub and extract the files to the /usr/local/ directory <br/>
![Nvblox24](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cc32f3b6-d33d-40db-a414-9f4e61b5e61c) <br/>
![Nvblox25](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/96009c65-774b-4060-8550-9fce37365817) <br/>
Then, download the systemd service file and set it up so that you can manage the service via systemd. <br/>
![Nvblox26](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/05696568-04f7-46cd-a092-ec43050a9a04) <br/>
Finally, start the containerd service using the below command. <br/>
![Nvblox27](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/66acffc2-66b1-4448-8c12-c0647a5e6e61) <br/>
Then, check the status of the containerd service. <br/>
![Nvblox28](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/242d3f1f-94a5-4bee-8c2b-e1e9a62b4333) <br/>
Conflicting packages right now <br/>
![Nvblox28](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/242d3f1f-94a5-4bee-8c2b-e1e9a62b4333) <br/>
![Nvblox29](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c87f04b0-fd43-4283-b990-696f29a0f95d) <br/>
Remove the configuration files associated with the uninstalled containerd package. <br/>
Reference: <br/>
https://www.itzgeek.com/how-tos/linux/ubuntu-how-tos/install-containerd-on-ubuntu-22-04.html <br/>
cri-o <br/>
(1)Update System <br/>
![Nvblox30](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/091c0c82-90bb-4755-80d0-f724a8e0555c) <br/>
(2)Add CRI-O Kubic repository <br/>
![Nvblox32](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ba1cd41f-2e3a-4dae-989e-a32f688818e2) <br/>
Add the Kubic repository which host binary packages for Debian based systems. <br/>
(3)Install CRI-O on Ubuntu 20.04 <br/>
![Nvblox33](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1394e859-a0b6-428d-a5b8-567099872f22) <br/>
![Nvblox34](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5c23f8a0-bb40-415f-8d90-24af6fb6a717) <br/>
Update the package list and then install CRI-O <br/>
![Nvblox35](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6d1a3205-5db6-49c8-82f0-95ed03573606) <br/>
Enable the CRI-O service so that it starts when Ubuntu does <br/>
![Nvblox36](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c9c55e81-1b90-46b5-86d1-280940ea3a6b) <br/>
Start the CRI-O service <br/>
![Nvblox37](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1b1737e1-7cb1-4b08-89ae-2528fce0f285)
Service status checked <br/>
Reference: <br/>
https://computingforgeeks.com/install-cri-o-container-runtime-on-ubuntu-linux/ <br/>
podman <br/>
(1)Update the package index on your system <br/>
![Nvblox38](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9aff62ae-c8e0-44b7-924d-a9a1db097997) <br/>
(2)Install the Podman dependencies <br/>
![Nvblox39](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/09491630-4209-4a0f-abd6-44814b6b2435) <br/>
(3)Add the libcontainers repository <br/>
![Nvblox40](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/fbbe417d-ee03-4d91-beb0-04258aebb049) <br/>
(4) <br/>
![Nvblox41](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/42ff8d49-75ed-4457-a401-06e38af8d88a) <br/>
(5)Install Podman <br/>
![Nvblox42](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ea75d750-6ebb-4ccb-8062-97ab4413df01) <br/>
(6)Verify that Podman is installed correctly <br/>
![Nvblox43](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cc4fc984-fc28-4302-b389-3cacc17b7e2e) <br/>
Reference: <br/>
https://rameshponnusamy.medium.com/install-podman-in-ubuntu-20-04-442649400b3f <br/>
<br/>
**Configuring Docker** <br/>
(1)Configure the container runtime by using the nvidia-ctk command <br/>
![Nvblox44](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0fec93dc-f258-477d-b671-21c589300090) <br/>




Reference: <br/>
https://computingforgeeks.com/install-cri-o-container-runtime-on-ubuntu-linux/ <br/>



Questions? <br/>
Graph에서 U-NET의 역할은 무엇? <br/>

Reference: <br/>
https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_nvblox?tab=readme-ov-file <br/>
https://nvidia-isaac-ros.github.io/getting_started/dev_env_setup.html <br/>
