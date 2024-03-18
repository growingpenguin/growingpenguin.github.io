---
layout: post
title:  "Import Turtlebot"
---

# Isaac Gym: Overview & Getting Started
## Learning Objectives
Set up our reinforcement learning example repository: OmniIsaacGymEnvs <br/>
1.Install OmniIsaacGymEnvs for Isaac Sim <br/>
2.Run inferencing and training examples in OmniIsaacGymEnvs <br/>
3.Install OmniIsaacGymEnvs in Docker <br/>
4.Run OmniIsaacGymEnvs examples with LiveStream <br/>
## Getting started
[Default Python Environment](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_python.html#isaac-sim-install-python-default) <br/>
Learn about Isaac Sim’s python environment and locate the python executable in Isaac Sim <br/>
Isaac Sim provides a built-in Python 3.10 environment that packages can use, similar to a system-level Python install <br/>
Recommended to use this Python environment when running the Python scripts <br/>
```
./python.sh path/to/script.py
```
Run the following from the Isaac Sim root folder to start a Python script in this environment <br/>
[Workstation Installation](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_workstation.html#isaac-sim-app-install-workstation) <br/>
=> Already Done <br/>

## Installing Examples Repository
(1)First clone the repository <br/>
```
git clone https://github.com/NVIDIA-Omniverse/OmniIsaacGymEnvs.git
```
(2)Install the examples as a python module in Isaac Sim <br/>
(2)-1 Locate the Isaac Sim python executable, which by default should be python.sh on Linux or python.bat on Windows, located at the root of the Isaac Sim directory <br/>
```
cd ~/.local/share/ov/pkg/isaac_sim-*/
ls -l python.sh
pwd
```
![IsaacGymOverview1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/28fdbe4a-3a21-4591-96cc-dcfa96a5db0d) <br/>
(2)-2 Refer to the Isaac Sim python executable path as PYTHON_PATH 
```
alias PYTHON_PATH=~/.local/share/ov/pkg/isaac_sim-*/python.sh
```
(2)-3 Add it to .bashrc <br/>
```
nano ~/.bashrc
alias PYTHON_PATH='~/.local/share/ov/pkg/isaac_sim-*/python.sh'
```
![IsaacGymOverview2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9b7ba217-e891-48e5-958c-8df417c6efab) <br/>

(2)-4 Install OmniIsaacGymEnvs to PYTHON_PATH by running the following from the root of OmniIsaacGymEnvs <br/>
```
cd OmniIsaacGymEnvs/
PYTHON_PATH -m pip install -e .
```



We will refer to this path as PYTHON_PATH <br/>
```
For Linux: alias PYTHON_PATH=~/.local/share/ov/pkg/isaac_sim-*/python.sh
```
