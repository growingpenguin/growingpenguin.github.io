---
layout: post
title:  "Assignment: 5th Week - Follow Isaac_ROS_Common Repository"
---
# Isaac ROS Common
## Overview
Isaac ROS Common <br/>
The Isaac ROS Common repository contains a number of scripts and Dockerfiles to help streamline development and testing with the Isaac ROS suite <br/>
-Docker images: <br/>
Provide pre-compiled binaries for ROS 2 Humble on Ubuntu 20.04 Focal <br/>
-Docker containers allow you to quickly set up a sensitive set of frameworks and dependencies to ensure a smooth experience with Isaac ROS packages <br/>
On x86_64 platforms <br/>
The Dockerfiles for this platform are based on the version 22.03 image from Deep Learning Frameworks Containers <br/>
-Use of Docker images enables CI|CD systems to scale with DevOps work and run automated testing in cloud native platforms on Kubernetes <br/>
-See the Troubleshooting section for solutions to known issues <br/>
## Isaac ROS Docker Development Environment
run_dev.sh sets up a development environment containing ROS 2 and key versions of NVIDIA frameworks prepared for both x86_64 and Jetson <br/>
-This script prepares a Docker image with a supported configuration for the host machine and delivers you into a bash prompt running inside the container <br/>
From here, you are ready to execute ROS 2 build/run commands with your host workspace files, which are mounted into the container and available to edit both on the host and in the container <br/>
If you run this script again while it is running, it will attach a new shell to the same container <br/>
-The /workspaces/isaac_ros-dev directory in the container is mapped from ~/workspaces/isaac_ros-dev on the host machine if it exists(By default) <br/>
Otherwise, it is mapped using the current working directory where the script was invoked <br/>
The host directory can be set that the container maps to explicitly by running the script with the desired path as the first argument <br/>
> scripts/run_dev.sh <path to workspace> <br/>
### Configuring run_dev.sh
run_dev.sh: <br/>
Prepares a base Docker image and mounts your target workspace into the running container <br/>
-The Docker image is assembled by parsing a period-delimited image key into matching Dockerfiles and building each one in sequence <br/>
For example, an image key of first.second.third could match {Dockerfile.first, Dockerfile.second, Dockerfile.third} <br/>
Where run_dev.sh will build the image for Dockerfile.first, then use that image as the base image while building Dockerfile.second, and so on <br/>
The file matching looks for the largest subsequence, so first.second.third could also match {Dockerfile.first.second, Dockerfile.third} depending on which files exist in the search paths <br/>
Using this pattern, you can add your own layers on top of the base images provided in Isaac ROS to set up your environment your way, such as installing additional packages to use <br/>
-If you write a file with the name .isaac_ros_common-config in the same directory as the run_dev.sh, you can configure the development environment <br/>
(The following keys can be configured in .isaac_ros_common-config) <br/>
| Key | Type | Description | Examples |
|----------|----------|----------|----------|
| CONFIG_IMAGE_KEY | String | Image key with period-delimited components | ros2_humble.realsense, humble |
| CONFIG_DOCKER_SEARCH_DIRS | Base array of strings | List of directories to search for Dockerfiles when matching | ($HOME/ros_ws/docker $HOME/docker) |


### Example Directory Structure <br/>
>workspaces/isaac_ros-dev
>   workspaces/isaac_ros-dev/ros_ws
>       workspaces/isaac_ros-dev/ros_ws/src
>       workspaces/isaac_ros-dev/ros_ws/src/isaac_ros_common
>       workspaces/isaac_ros-dev/ros_ws/src/isaac_ros_common/scripts
>       workspaces/isaac_ros-dev/ros_ws/src/isaac_ros_common/scripts/.isaac_ros_common-config
>
>       workspaces/isaac_ros-dev/ros_ws/docker
>       workspaces/isaac_ros-dev/ros_ws/docker/Dockerfile.mine
>       workspaces/isaac_ros-dev/ros_ws/docker/myfile.txt
where Dockerfile.mine can be your own custom image layers of the form using its host directory for the Docker build context: <br/>
>ARG BASE_IMAGE
>FROM ${BASE_IMAGE}
>
>... steps ...
>
>COPY myfile.txt /myfile.txt
>
>... more steps ...
<br/>
You could extend the base image launched as a container by run_dev.sh as follows <br/>
workspaces/isaac_ros-dev/ros_ws/src/isaac_ros_common/scripts/.isaac_ros_common-config <br/>
>CONFIG_IMAGE_KEY="ros2_humble.mine"
>CONFIG_DOCKER_SEARCH_DIRS=(workspaces/isaac_ros-dev/ros_ws/docker)
Configures the image key to match with mine included and specifies where to look first for the Dockerfiles before the default <br/>
### Supported Platforms <br/>
Package is designed and tested to be compatible with ROS 2 Humble running on Jetson or an x86_64 system with an NVIDIA GPU <br/>
### Docker
Strongly recommend leveraging the Isaac ROS Dev Docker images by following these [document](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_common/index.html) to simplify development <br/>
=> Already Done <br/>
-Will streamline your development environment setup with the correct versions of dependencies on both Jetson and x86_64 platforms <br/>
### Customize your Dev Environment
Reference this [guide](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_common/index.html#isaac-ros-docker-development-environment) <br/>

Reference <br/>
https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_common/index.html <br/>
https://nvidia-isaac-ros.github.io/getting_started/dev_env_setup.html <br/>
https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_common/index.html#isaac-ros-docker-development-environment <br/>




