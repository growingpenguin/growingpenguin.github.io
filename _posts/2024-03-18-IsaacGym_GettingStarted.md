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
![IsaacGymOverview3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/02ae47de-8111-4bc4-87a9-413e77c96686) <br/>
=> The following error may appear during the initial installation. This error is harmless and can be ignored <br/>
(2)-5 List of current environments in OmniIsaacGymEnvs: <br/>
![IsaacGymOverview4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6e416f45-1fec-4c44-bc0b-f203dd261c59) <br/>
What I intend to test <br/>
=> Anymal & AnymalTerrain <br/>

## Running Examples
Example scripts should be launched from OmniIsaacGymEnvs/omniisaacgymenvs <br/>
### Launching Training Examples
Train your first policy <br/>
```
cd ~/OmniIsaacGymEnvs/omniisaacgymenvs
ls -l
PYTHON_PATH scripts/rlgames_train.py task=Cartpole
```
![IsaacGymOverview5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3782e67c-a027-412f-ae85-6d4f54605a60) <br/>
We will see an Isaac Sim window pop up <br/>
Once Isaac Sim initialization completes (which may take a few minutes if launching for the first time), the Cartpole scene will be constructed and simulation will start running automatically <br/>
![IsaacGymOverview6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/099f0fc8-dba6-453f-9a81-393a938f2887) <br/>
The process will terminate once training finishes <br/>
![IsaacGymOverview7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dcf26e30-fafe-4f1f-8ca2-57cc63a88c87) <br/>
![IsaacGymOverview8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2ff57e0d-a2d3-4a6a-ab38-cf4d093ac442) <br/>
![IsaacGymOverview9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c67b91e6-5168-4203-a2e7-5fc8bbb583b3) <br/>
![IsaacGymOverview10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/db5463f7-5c3a-4e16-8720-2ebc46c0ca52) <br/>
![IsaacGymOverview11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7023e011-f7d4-4c5f-861d-1f4874693ecb) <br/>




Reference: <br/>
https://github.com/NVIDIA-Omniverse/OmniIsaacGymEnvs/blob/main/docs/examples/rl_examples.md#anymal-anymalpy <br/>





