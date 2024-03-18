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
The process will terminate once training finishes <br/>
Result <br/>
In the path /home/rosexpert1/OmniIsaacGymEnvs/omniisaacgymenvs/runs/, a Cartpole file is generated and the model with the best rewards is stored every 25, 50, 75, and 100 epochs <br/> 
**Anymal** <br/>
Train your policy <br/>
```
cd ~/OmniIsaacGymEnvs/omniisaacgymenvs
PYTHON_PATH scripts/rlgames_train.py task=Anymal
```

![IsaacGymOverview13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ea1680b3-cf21-4eee-b9b0-3d4ec2ed0ca7) <br/>
![IsaacGymOverview14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1b9b67ac-6a90-4a9e-b732-89f3c5c1f5e9) <br/>
![IsaacGymOverview15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/570d5e42-4721-4c1d-8746-7bc8385d717d) <br/>
![IsaacGymOverview16](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7ec5f75c-575d-4627-91f6-ed66457165cd) <br/>
![IsaacGymOverview17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e3c5afd9-e9b0-4efd-8a23-09691a06d431) <br/>
![IsaacGymOverview18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/78bdc387-8f4c-423d-a10d-0979bdd6d86a) <br/>
![IsaacGymOverview19](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cb21ee72-75d5-47f3-9539-08cc012be0d7)
79bdd6d86a) <br/>
![IsaacGymOverview20](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d4d92b18-ec9b-4ef6-b8e8-8e74d9613212) <br/>
![IsaacGymOverview21](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2161bbcb-e90c-401e-a46b-f5df75a54eba) <br/>






### Running Inference
```
cd ~/OmniIsaacGymEnvs/omniisaacgymenvs
PYTHON_PATH scripts/rlgames_train.py task=Cartpole test=True checkpoint=omniverse://localhost/NVIDIA/Assets/Isaac/2023.1.1/Isaac/Samples/OmniIsaacGymEnvs/Checkpoints/cartpole.pth
```
Error <br/>
![IsaacGymOverview12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5a31083f-633b-4fda-8102-1be07659b99c) <br/>
Solution <br/>

## Installing Examples Repository in Isaac Sim Docker







Reference: <br/>
https://github.com/NVIDIA-Omniverse/OmniIsaacGymEnvs/blob/main/docs/examples/rl_examples.md#anymal-anymalpy <br/>





