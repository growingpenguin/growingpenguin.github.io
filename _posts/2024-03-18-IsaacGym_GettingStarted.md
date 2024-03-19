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
We will see an Isaac Sim window pop up <br/>
Once Isaac Sim initialization completes (which may take a few minutes if launching for the first time), the Anymal scene will be constructed and simulation will start running automatically <br/>
![IsaacGymOverview14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1b9b67ac-6a90-4a9e-b732-89f3c5c1f5e9) <br/>
Terminal <br/>
![IsaacGymOverview13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ea1680b3-cf21-4eee-b9b0-3d4ec2ed0ca7) <br/>
![IsaacGymOverview15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/570d5e42-4721-4c1d-8746-7bc8385d717d) <br/>
![IsaacGymOverview16](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7ec5f75c-575d-4627-91f6-ed66457165cd) <br/>
![IsaacGymOverview17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e3c5afd9-e9b0-4efd-8a23-09691a06d431) <br/>
![IsaacGymOverview18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/78bdc387-8f4c-423d-a10d-0979bdd6d86a) <br/>
50 Epochs <br/>
![IsaacGymOverview19](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cb21ee72-75d5-47f3-9539-08cc012be0d7)
79bdd6d86a) <br/>
100 Epochs <br/>
![IsaacGymOverview20](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d4d92b18-ec9b-4ef6-b8e8-8e74d9613212) <br/>
150 Epochs <br/>
![IsaacGymOverview21](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2161bbcb-e90c-401e-a46b-f5df75a54eba) <br/>
200 Epochs <br/>
![IsaacGymOverview22](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1718f17d-2bc4-448d-a3f3-5a6d597b8f3c) <br/>
Checkpoint <br/>
![IsaacGymOverview23](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/92322921-60bd-4d11-93d6-8311cec66040) <br/>
250 Epochs & Checkpoint <br/>
![IsaacGymOverview24](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/36e30478-f5e2-4bb2-a680-3bc8be47d351) <br/>
300 Epochs <br/>
![IsaacGymOverview25](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0f4a757a-68e1-4204-8e1e-5188922a4021) <br/>
350 Epochs <br/>
![IsaacGymOverview26](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f3cd62a2-308c-40f8-bb44-9e967e41f6e5) <br/>
400 Epochs <br/>
![IsaacGymOverview27](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2f4d2f0c-b2d1-429c-9f98-cd6f824c58f6) <br/>
450 Epochs <br/>
![IsaacGymOverview28](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7b411693-6abc-4fa6-b55a-fa00064f5a8e) <br/>
500 Epochs <br/>
![IsaacGymOverview29](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/843deb54-a792-4206-ae3c-50e7e01fcab0) <br/>
550 Epochs <br/>
![IsaacGymOverview30](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/97ac67a0-9822-41bc-9449-1089c6cdb0b8) <br/>
600 Epochs <br/>
![IsaacGymOverview31](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7ca54827-2516-45e6-9591-1ef820406708) <br/>
650 Epochs <br/>
![IsaacGymOverview32](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/576c2909-acbf-4a66-900b-18cb98f9dd5e) <br/>
700 Epochs <br/>
![IsaacGymOverview33](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4ab296ff-15eb-4880-b00e-afb68b697221) <br/>
750 Epochs <br/>
![IsaacGymOverview34](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f201db9b-0b88-4fa7-a0dd-0ffb1dd0f03d) <br/>
800 Epochs <br/>
![IsaacGymOverview35](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/318a6b87-9b01-4b7c-a2aa-7d42507e53a6) <br/>
850 Epochs <br/>
![IsaacGymOverview36](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0112aaf2-8c29-465d-8e7a-8cb2938595d8) <br/>
900 Epochs <br/>
![IsaacGymOverview37](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f0698e40-c102-43ef-b3a9-6dcc0a2389e9) <br/>
950 Epochs <br/>
![IsaacGymOverview38](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6f8cde1a-9788-42a0-ad10-63a487e6cd3b) <br/>
1000 Epochs <br/>
![IsaacGymOverview39](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b09502dd-9fdc-40f4-a503-1a21e4744161) <br/>
Training Completed <br/>
![IsaacGymOverview40](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/10603e6f-6290-4862-b09d-66c4ee7aba18) <br/>
Result <br/>
![IsaacGymOverview41](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b74142cc-0db1-474f-9d84-7b4ad43d9386) <br/>
=> New Anymal file generated in the runs folder <br/>
![IsaacGymOverview42](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d3aa3942-a253-4237-a2b3-7f86b5551624) <br/>
=> Models generated per epochs is identified <br/>
**Anymal Terrain** <br/>
We will see an Isaac Sim window pop up <br/>
Once Isaac Sim initialization completes (which may take a few minutes if launching for the first time), the Anymal scene will be constructed and simulation will start running automatically <br/> 
![IsaacGymOverview43](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/96e8a657-362f-4220-9543-53c3deebc8ea) <br/>
Terminal <br/>
![IsaacGymOverview44](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dedc15de-a04e-461a-aa64-02a7de4f03d4) <br/>
![IsaacGymOverview45](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d3af70cb-f817-46e6-9b48-780caadc0463) <br/>
![IsaacGymOverview46](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2e91b4f6-4c01-467c-b163-16e0617641ba) <br/>
![IsaacGymOverview47](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e0315fb8-67e7-4bf7-b0ee-7953c32df947) <br/>
50 Epochs <br/>
![IsaacGymOverview48](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6352fe80-9589-4412-b127-b5addce37520) <br/>
100 Epochs <br/>
![IsaacGymOverview49](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0167cbf4-8cd7-4baa-82d6-d226a078fefe) <br/>
Saving Checkpoint <br/>
![IsaacGymOverview50](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4eb02f9f-0eb1-44b3-918b-16d50acb97a6) <br/>
150 Epochs <br/>
![IsaacGymOverview51](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3ed98c67-62f8-493f-9882-4588d881a2fc) <br/>






### Running Inference
```
cd ~/OmniIsaacGymEnvs/omniisaacgymenvs
PYTHON_PATH scripts/rlgames_train.py task=Cartpole test=True checkpoint=omniverse://localhost/NVIDIA/Assets/Isaac/2023.1.1/Isaac/Samples/OmniIsaacGymEnvs/Checkpoints/cartpole.pth
```
Error <br/>
![IsaacGymOverview12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5a31083f-633b-4fda-8102-1be07659b99c) <br/>
Solution(Searching for it...) <br/>
https://forums.developer.nvidia.com/t/assistance-required-error-with-inferencing-using-pre-trained-checkpoints-in-isaac-gym/286386 <br/>



Reference: <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/isaac_gym_tutorials/tutorial_gym_isaac_gym.html <br/>
https://github.com/NVIDIA-Omniverse/OmniIsaacGymEnvs/blob/main/docs/examples/rl_examples.md#anymal-anymalpy <br/>





