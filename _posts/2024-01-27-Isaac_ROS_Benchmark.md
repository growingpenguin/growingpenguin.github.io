---
layout: post
title:  "Assignment: 5th Week - Follow Isaac_ROS_Benchmark Repository"
---
# Isaac ROS Benchmark
## Overview
Isaac ROS Benchmark <br/>
-Builds upon the ros2_benchmark to provide configurations to benchmark Isaac ROS graphs <br/>
-Performance results that measure Isaac ROS for throughput, latency, and utilization enable robotics developers to make informed decisions when designing real-time robotics applications <br/>
Informed Decision-Making:  <br/>
By benchmarking Isaac ROS graphs, developers can gain insights into the system's behavior under different conditions and workloads <br/>
This information helps them make informed decisions when designing and optimizing real-time robotics applications <br/>
For example, it can help identify bottlenecks, resource constraints, or areas for improvement in the system <br/>
-The Isaac ROS performance results can be independently verified, as the method, configuration, and data input used for benchmarking are provided <br/>
Independent Verification: <br/>
Results obtained from the benchmarking process are designed to be independently verifiable <br/>
Means that the methods, configurations, and data inputs used for benchmarking are transparent and documented, allowing other developers or users to replicate the benchmarking process and verify the results <br/>
-The ros2_benchmark playback node plug-in, for type adaptation and negotiation, is provided for NITROS, which optimizes the performance of message transport costs through RCL with GPU accelerated graphs of nodes <br/>
Integration with NITROS: <br/>
Package includes a plugin for the "ros2_benchmark" playback node <br/>
Plugin is used for type adaptation and negotiation and is designed to optimize the performance of message transport costs through RCL (ROS 2's middleware) with GPU-accelerated graphs of nodes <br/> 
This integration aims to improve the efficiency of message communication within Isaac ROS graphs, potentially leveraging GPU acceleration for faster data processing <br/>
-[Datasets for benchmarking](https://github.com/NVIDIA-ISAAC-ROS/ros2_benchmark#datasets) are explicitly not downloaded by default <br/>
To pull down the standardized benchmark datasets, refer to the ros2_benchmark Dataset section <br/>
Footnote <br/>
benchmark: Measure and evaluate the performance of robotic systems built using Isaac ROS <br/>
throughput: How much data it can process per unit of time <br/>
latency: How quickly it responds to inputs <br/>
utilization: How effectively it utilizes system resources <br/>

## QuickStart
Follow the steps below to run a sample benchmark for measuring performance of an Isaac ROS AprilTag node with ros2_benchmark <br/>
This process can also be used to benchmark the other Isaac ROS nodes <br/>
-ros2_benchmark framework more generally supports benchmarking arbitrary graphs of ROS 2 nodes <br/>
(1)Set up your development environment by following the instructions here <br/>
(2)Clone isaac_ros_common and this repository under ${ISAAC_ROS_WS}/src <br/>
![Benchmark1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dfb9293e-4cfc-4ae6-b346-1fc3e6b44148) <br/>
(3)Pull down r2b Dataset 2023 by following the instructions here or fetch just the rosbag used in this Quickstart with the following command <br/>
![Benchmark2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/70f789df-78af-4419-bb01-f10bf6daf631) <br/>
![Benchmark3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9a2eb61e-36f6-4f8a-81d4-ac5b5dd27f94) <br/>
(4)Launch the Docker container using the run_dev.sh script <br/>
![Benchmark4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9e3b2860-3182-44ee-99a4-721d08b94575) <br/>
(5)Install this package’s dependencies <br/>
![Benchmark5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5f2c6f6f-7d77-4965-8852-5bee1e7e0686) <br/>
(6)Start the Isaac ROS AprilTag benchmark <br/>
![Benchmark6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7b9f15f0-ddc6-471c-b18c-217f83efe580) <br/>
(7)Once the benchmark is finished, the final performance measurements are displayed in the terminal <br/>
Additionally, the final results and benchmark metadata (e.g., system information, benchmark configurations) are also exported as a JSON file <br/>
![Benchmark7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0a466a5f-66aa-4f64-895e-89283f7686c5) <br/>

Reference: <br/>
https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_benchmark/index.html <br/>
https://github.com/NVIDIA-ISAAC-ROS/ros2_benchmark#datasets <br/>


