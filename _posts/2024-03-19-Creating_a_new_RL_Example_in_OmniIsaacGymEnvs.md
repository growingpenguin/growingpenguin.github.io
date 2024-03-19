---
layout: post
title:  "Creating a new RL Example in OmniIsaacGymEnvs"
---

# Creating a new RL Example in OmniIsaacGymEnvs
A collection of reinforcement learning environments are provided at OmniIsaacGymEnvs, which can be used as examples and baselines to build new RL environments with Isaac Sim <br/>
Details of the tasking framework for running a RL environment <br/>

## Learning Objectives
(1)Introduce the tasking framework <br/>
(2)Implement a Cartpole task <br/>
(3)Register the task to the OIGE framework <br/>
(4)Understand config files for the task <br/>
(5)Run the Cartpole task <br/>


## Getting Started
-Default Python Environment <br/>
Learn about Isaac Sim’s python environment and locate the python executable in Isaac Sim <br/>
```
./python.sh path/to/script.py
```
Run the following from the Isaac Sim root folder to start a Python script in this environment <br/>
```
./python.sh -m pip install name_of_package_here
```
Install additional packages via pip <br/>
Note <br/>
Can open a terminal directly at the Isaac Sim root folder from the Isaac Sim App Selector <br/>
Ref: https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_python.html#isaac-sim-install-python-default <br/>
