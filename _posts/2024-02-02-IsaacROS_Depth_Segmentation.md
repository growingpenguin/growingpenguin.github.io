---
layout: post
title:  "Assignment: 5th Week - Follow Isaac ROS DNN Inference Repository"
---
# Isaac ROS DNN Inference
## Overview
Isaac ROS DNN Inference: <br/>
ROS 2 packages for performing DNN inference, providing AI-based perception for robotics applications <br/>
DNN inference uses a pre-trained DNN model to ingest an input Tensor and output a prediction to an output Tensor <br/>
![DNN_Inference1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bc3e70f8-f5b0-4bc2-8478-747382b63c26) <br/>
Typical graph of nodes for DNN inference on image data <br/>
-The input image is resized to match the input resolution of the DNN <br/>
The image resolution may be reduced to improve DNN inference performance ,which typically scales directly with the number of pixels in the image <br/>
-DNN inference requires input Tensors, so a DNN encoder node is used to convert from an input image to Tensors, including any data pre-processing that is required for the DNN model <br/>
-DNN inference is performed <br/>
-The DNN decoder node is used to convert the output Tensors to results that can be used by the application <br/>
-TensorRT and Triton are two separate ROS nodes to perform DNN inference <br/>
TensorRT node: <br/>
Uses TensorRT to provide high-performance deep learning inference <br/>
Optimizes the DNN model for inference on the target hardware, including Jetson and discrete GPUs <br/>
Supports specific operations that are commonly used by DNN models <br/>
Triton node: <br/>
For newer or bespoke DNN models, TensorRT may not support inference on the model <br/>
Triton node uses the Triton Inference Server, which provides a compatible frontend supporting a combination of different inference backends <br/>
(e.g. ONNX Runtime, TensorRT Engine Plan, TensorFlow, PyTorch) <br/>
In-house benchmark results measure little difference between using TensorRT directly or configuring Triton to use TensorRT as a backend <br/>
-Some DNN models may require custom DNN encoders to convert the input data to the Tensor format needed for the model, and custom DNN decoders to convert from output Tensors into results that can be used in the application <br/>
Leverage the DNN encoder and DNN decoder node(s) for image bounding box detection and image segmentation, or your own custom node(s) <br/>
<br/>
Reference: <br/>
https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_dnn_inference/index.html <br/>

## QuickStarts
### Isaac ROS TensorRT
(1)Follow steps 1-6 of the Quickstart with Triton <br/>
(1)-1 Set up your development environment by following the instructions here <br/>
=> Already Done <br/>
(1)-2 Clone isaac_ros_common, isaac_ros_image_segmentation, and this repository under ${ISAAC_ROS_WS}/src <br/>
![DNN_Inference2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/118fa17a-39f4-4727-81e2-3896697f95d2) <br/>
(1)-3 Launch the Docker container using the run_dev.sh script <br/>
![DNN_Inference3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/09549420-c4be-4fa6-8461-7a63f08479cc) <br/>
(1)-4 Install this package’s dependencies, along with an additional package used for this quickstart <br/>
![DNN_Inference4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b8ff23b6-6c27-445e-a04e-1c92817d694b) <br/>
(1)-5 This example uses PeopleSemSegNet ShuffleSeg. Download the ETLT file and the int8 inference mode cache file: <br/>
![DNN_Inference5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d100fe12-ca15-4e1a-966f-4507ccaee575) <br/>
![DNN_Inference6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/34a2d8ca-241e-421f-8cd7-9bc67aceb797) <br/>
(1)-6 Convert the ETLT file to a TensorRT plan file: <br/>
inference mode cache file: <br/>
![DNN_Inference7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d874227f-79c6-440f-881d-1f26438fbf27) <br/>
![DNN_Inference8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c8e93dfd-07ed-4ba0-b7a1-ba60aea62af8) <br/>







### Isaac ROS Triton


Reference: <br/>
https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_dnn_inference/isaac_ros_tensor_rt/index.html#quickstart <br/>
https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_dnn_inference/isaac_ros_triton/index.html <br/>
