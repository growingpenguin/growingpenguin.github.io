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

## Introduction to the Tasking Framework
-The main entry script for OmniIsaacGymEnvs is rlgames_train.py, which can be found [here](https://github.com/NVIDIA-Omniverse/OmniIsaacGymEnvs/blob/main/omniisaacgymenvs/scripts/rlgames_train.py) <br/>
-This script parses input parameters using the Hydra Framework, which is a framework used to handle configuration parameters <br/>
Note <br/>
hyperparameters: Parameters, which are are configuration variables, whose values are set before the learning process begins <br/>


All tasks in OIGE define config files in .yaml files, which are then parsed using Hydra <br/>

The script is also responsible for initializing our Environment object. In Isaac Sim, we define a VecEnvBase class in the omni.isaac.gym extension as an interface for connecting RL libraries with the simulation in Isaac Sim and our task. In OIGE, we extend the VecEnvBase class for the rlgames RL library, which is a vectorized GPU-based RL library we use for training in OIGE. This new environment object, VecEnvRLGames, is responsible for passing actions from the RL library to our task, stepping simulation, and retrieving observations, rewards, and resets buffers for the RL library.

When launching a task in OIGE, we use the following command:
