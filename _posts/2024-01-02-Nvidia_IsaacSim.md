---
layout: post
title:  "Assignment: 2nd Week - Follow Isaac_Sim Tutorial"
---
# What is Issac Sim?
NVIDIA Isaac Sim™ : <br/>
Extensible robotics simulator that gives you a faster, better way to design, test, and train AI-based robots. <br/>
It’s powered by Omniverse™ to deliver scalable, photorealistic, and physically accurate virtual environments for building high-fidelity simulations. <br/>
Footnote <br/>
Extensible Robotics Simulator: This means that Isaac Sim is not just a fixed software package; it can be expanded or customized with additional modules or functionalities. This extensibility is crucial for adapting the simulator to the specific needs of various robotics projects. <br/>
Faster and Better Design and Testing: With Isaac Sim, the process of creating and experimenting with robot designs is accelerated. You can quickly iterate through design prototypes and test scenarios, which would be time-consuming, costly, or impractical to perform in the real world. <br/>
AI-Based Robots Training: Isaac Sim provides an environment for training the artificial intelligence (AI) systems of robots. This is particularly important for developing and refining the algorithms that enable robots to perceive their environment, make decisions, and perform tasks autonomously. <br/>
Powered by Omniverse™: Omniverse is NVIDIA's platform for creating and operating virtual worlds, and Isaac Sim leverages this technology. This integration means that Isaac Sim can create highly detailed and realistic simulations. <br/>
Scalable, Photorealistic, and Physically Accurate Virtual Environments: The simulator can generate virtual environments that are not only visually realistic (photorealistic) but also adhere to the laws of physics (physically accurate). This aspect is crucial for ensuring that the simulations are as close to real-world conditions as possible. <br/>
Building High-Fidelity Simulations: High fidelity in simulations refers to the accuracy and detail with which these simulations replicate real-world conditions. Isaac Sim's ability to create such high-fidelity simulations is essential for effectively testing and training AI-based robots, ensuring that they can operate effectively in real-world scenarios. <br/>
-With Isaac Sim, developers and researchers around the world can train and optimize AI robots for a wide variety of tasks  <br/>
Ex. <br/>
(1)Fraunhofer, technological leader in logistics <br/>
Uses Issac Sim for the virtual development of Obelix, a highly dynamic indoor/outdoor autonomous mobile robot(AMR). <br/>
-After importing over 5400 parts from CAD and rigging with Omniverse PhysX, virtual robot moves as deftly in simulation as it does in the real world <br/>
-Accelerates virtual development but also enables scaling to larger scenarios <br/>
Footnote <br/>
Importing and Rigging Process <br/>
Importing Over 5400 Parts from CAD: Computer-Aided Design (CAD) software is used to design the parts of Obelix. These designs, numbering over 5400 individual components, are then imported into Isaac Sim. <br/>
Rigging with Omniverse PhysX: Once imported, these parts are rigged using Omniverse PhysX, which is a physics engine developed by NVIDIA. <br/>
Rigging involves setting up the virtual parts so they can move and interact realistically in the simulation, mimicking real-world physics. <br/>
Simulation Capabilities<br/>
Realistic Movement in Simulation: The virtual model of Obelix in Isaac Sim is able to move as adeptly as it would in the real world. This means the simulation accurately reflects the robot's physical capabilities and how it would navigate and operate in real-life scenarios.<br/>
Acceleration of Virtual Development: Using this simulation significantly speeds up the development process. Problems can be identified and solved virtually, which is faster and less costly than making changes to a physical prototype. <br/>
Scaling to Larger Scenarios: The simulation also allows for testing in various, potentially larger, scenarios than what might be feasible with a physical prototype. This scalability is crucial for ensuring that Obelix can operate effectively in a wide range of environments and conditions. <br/>
AMR Technologies: AMR stands for Autonomous Mobile Robots. These robots are designed to move around and perform tasks without direct human control. They are commonly used in various industries for tasks like transportation, inspection, and inventory management. <br/>
Advancements in AMR Technologies <br/>
Fast Moving AMRs: Fraunhofer is working on advancing AMR technologies to develop robots that move much faster than the current models available in the market. <br/>
Real-World Application Simulations: Before building these advanced AMRs, Fraunhofer uses simulations to mimic real-world conditions. These simulations help identify potential issues early in the development process, saving time and resources that would otherwise be spent on building and testing physical models.  <br/>
Use of Simulations <br/>
Cost-Effectiveness: By simulating various scenarios, they can foresee and address problems without the high costs associated with physical prototyping and testing.  <br/>
Real-World Testing: These simulations are not just theoretical but are designed to reflect actual conditions and challenges the AMRs would face in real environments. <br/>
Development of the O3dyn(Obelix) <br/>
O3dyn: This is a specific type of fast-moving AMR currently being developed.  <br/>
NVIDIA Jetson Edge AI and Robotics Platform: The O3dyn uses this platform as its control unit. The NVIDIA Jetson is a series of embedded computing boards designed for AI and robotics applications. It's powerful enough to process data from various sensors and control the robot effectively.  <br/>
Capabilities of the O3dyn: <br/>
Speed: It can move at speeds over 30 mph, which is significantly fast for an AMR.  <br/>
Maneuverability: Thanks to AI assistance, it can navigate tight spaces. This ability is crucial for AMRs that need to operate in crowded or complex environments.  <br/>
Control of Electronics and Sensors: The control unit manages all the electronic components and sensors necessary for the safe operation of the O3dyn, ensuring it can respond appropriately to its environment.  <br/>
(2)Festo, well known for industrial automation <br/>
-Uses Issac Sim to develop intelligent skills for collaborative robots(cobots) requiring acute awareness of their environments, human partners, and tasks <br/>
-Festo uses cortex, an Issac Sim tool that dramatically simplifies programming cobot skills <br/>
-For perception, Ai models used in this tasks were trained only using synthetic data generated by Issac replicator <br/>
Footnote <br/>
Festo: Known for its expertise in industrial automation, Festo is a leading company in the field of automation technology.
Development of Cobots <br/>
Collaborative Robots (Cobots): These are robots intended to physically interact with humans in a shared workspace. Unlike traditional industrial robots, cobots are designed to work alongside human workers, assisting them rather than replacing them. <br/>
Intelligent Skills Development: Festo uses Isaac Sim to develop advanced skills for these cobots. These skills include acute awareness of their environments, human partners, and the specific tasks they are assigned to perform. This awareness is crucial for ensuring safe and efficient interaction between humans and robots. <br/>
Festo's Use of Cortex <br/>
Cortex in Isaac Sim: Cortex is a tool within Isaac Sim. It significantly simplifies the programming of cobot skills. In other words, Cortex makes it easier for developers to equip cobots with the necessary capabilities for their intended functions.
Simplifying Programming: The complexity of programming cobots is reduced with Cortex, allowing for more efficient development and implementation of essential skills. <br/>
AI and Perception  <br/>
AI Models and Perception: For a cobot to interact safely and effectively with humans and its environment, it must have a sophisticated perception system. This system is powered by AI models.  <br/>
Training with Synthetic Data: Interestingly, the AI models used by Festo for these tasks were trained exclusively with synthetic data generated by Isaac Replicator. Isaac Replicator is another tool within the Isaac Sim ecosystem that allows for the creation of realistic, synthetic datasets.  <br/>
Benefits of Synthetic Data: Using synthetic data for training has several advantages. It allows for the creation of diverse and challenging scenarios which might be difficult or expensive to capture in the real world. It also ensures that the AI models can generalize well across various real-world situations. <br/>
(3)Anymal, robot dog developed by a leading robotics research group from Eth Zurich and Swiss-Mile <br/>
-Using end to end GPU accelerated by reinforcement learning, Anymal, whose wheels were replaced with its wheels, learned to walk over urban terrain within minutes, rather than weeks using Nvidia's Issac gym training tool <br/>
-Locomotion policy was verified in Issac Sim and deployed on real Anymal <br/>
-This is a compelling demonstration of simulator training for real-world-deployment <br/>
-From training perception and policies to hardware-in-loop, Issac Sim is the tool to build Ai-based robots that are born in simulation to  work (and play) in the real world <br/>
Footnote <br/>
Developed by ETH Zurich and Swiss-Mile: Anymal is a robotic dog developed by a leading robotics research group from ETH Zurich in collaboration with Swiss-Mile. ETH Zurich is renowned for its expertise in robotics and engineering.
Advanced Training Using GPU Acceleration and Reinforcement Learning <br/>
End-to-End GPU Acceleration: Anymal's training process involves end-to-end GPU (Graphics Processing Unit) acceleration. This means that every step of the training process, from data processing to learning algorithms, is accelerated using powerful GPU computing, making the process much faster and more efficient. <br/>
Use of NVIDIA's Isaac Gym Training Tool: Anymal was trained using Isaac Gym, a tool developed by NVIDIA for training AI in simulated environments. This tool is specialized for robotic applications, allowing for rapid training and testing of different behaviors. <br/>
Learning to Walk Over Urban Terrain <br/>
Wheels Replaced with Legs: An interesting aspect of Anymal's development is that it initially had wheels, which were later replaced with legs. This transition is significant in robotics as walking with legs is a much more complex and dynamic process than rolling on wheels. <br/>
Rapid Learning Process: Using the mentioned techniques and tools, Anymal learned to walk over urban terrain within minutes - a task that would traditionally take weeks. This accelerated learning process is a testament to the efficiency of GPU-accelerated reinforcement learning.  <br/>
Verification and Deployment  <br/>
Locomotion Policy Verification in Isaac Sim: After the initial training, Anymal's walking or locomotion policy was further verified in Isaac Sim. This simulation ensured that the learned behaviors were safe and effective.  <br/>
Deployment on Real Anymal: Once verified, the policy was deployed on the actual Anymal robot, enabling it to move and operate in the real world. <br/>
Implications for Real-World Deployment  <br/>
Demonstration of Simulator Training Efficacy: This development process showcases how training in a simulator can be effectively transferred to real-world applications, a crucial aspect of modern robotics.  <br/>
From Training to Real-World Application: Isaac Sim proves to be an invaluable tool in this context. It not only allows for training perception and decision-making policies but also facilitates hardware-in-the-loop simulations. This means the virtual training environment can incorporate and adapt to the physical characteristics of the actual robot hardware. <br/>

# Release Notes
https://docs.omniverse.nvidia.com/isaacsim/latest/release_notes.html <br/>

# Installation
## Issac Sim Requirements 
**System Requirements** <br/>
=>Fulfilled <br/>
**Issac Sim Driver Requirements** <br/>
=>Fulfilled <br/>

## Workstation Installation
**Workstation Setup** <br/>
(1) Download Omniverse Launcher <br/>
(1)-1 Download Omniverse Launcher <br/>
Link: https://www.nvidia.com/en-in/omniverse/download/  <br/>
Select Standard => Download Free <br/>
(1)-2 Search for the file omniverse-launcher-linux.AppImage in your pc file navigator(Usually Downloaded in the Downloads folder) <br/>
![Omniverse_IssacSim2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b0dc5a5f-060f-446d-986a-f1974f7bab71) <br/>
(1)-3 Right click mouse -> Select "properties" <br/>
Select Permissions tab -> Check on Allow executing file as as program -> Exit <br/>
![Omniverse_IssacSim3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7eb470ef-5f54-4f1a-b6d8-661d904fec2d) <br/>
(1)-4 First Run <br/>
Double click the AppImage  <br/>
![Omniverse_IssacSim4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a09969c1-2159-43c7-979d-0dac6f20ca27) <br/>
Omniverse-launcher pops out & Agree on license agreement <br/>
(1)-5 Path <br/>
Installation Path confirmation <br/>
![Omniverse_IssacSim5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/612c0ea8-3f41-4486-9df8-1b59f2db332a) <br/>
Check path for installation <br/>
(1)-6 Install cache <br/>
![Omniverse_IssacSim6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/48be3470-58a6-420c-a461-42c9ad471e1c) <br/>
<br/>
(2)Install Cache from the Omniverse Launcher <br/>
Downloaded previously <br/>
<br/>
(3)Install Nucleus from the Omniverse Launcher <br/>
(3)-1 Click on Nucleus Tab <br/>
![Omniverse_IssacSim7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ce6a4921-e7ac-46c1-9b34-a67e9a36ea9c) <br/>
(3)-2 Click on Create Local Server <br/>
![Omniverse_IssacSim8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/48dc43cc-1daf-463d-8837-cea76235ca28) <br/>
Set preferred data path and click Next <br/>
(3)-3 Create Administrator account <br/>
![Omniverse_IssacSim9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8ef53351-9c17-425e-bc8c-6a8fcc05d5d6) <br/>
(4)Install Visual Studio Code to view and debug source code <br/>
(4)-1 Search for Visual studio code in Ubuntu Software <br/>
![Omniverse_IssacSim10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d1016cc1-888f-431b-942e-74578c8f9210) <br/>
(4)-2 Click on Install <br/>
![Omniverse_IssacSim11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4a8d79cf-6b99-4f26-b0f5-fd6b8c7c9af6) <br/>

**Omniverse Launcher** <br/>
(1)Click on Exchange Tab and Issac Sim can be found in the apps corner <br/>
![Omniverse_IssacSim12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/707ed7a7-483b-4831-8c23-4ea0e6098811) <br/>
(2)Click on Install <br/>
![Omniverse_IssacSim13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/eae1cafc-a9e0-4c06-a6f0-9fbf1b9dece4) <br/>
(3)Click Library and select Isaac Sim to Launch <br/>
![Omniverse_IssacSim14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9968b1b9-fcc9-4ee8-bb36-3a425c66b630) <br/>

**Isaac Sim App Selector** <br/>
![Omniverse_IssacSim15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/94ab6f08-60f4-46a0-a684-b1421bc1dc0e) <br/>
-Mini-windowed app that helps run Isaac Sim in different modes <br/>
-Isaac Sim App Selector will run as default when launching Isaac Sim from the Omniverse Launcher <br/>
Click on Start! <br/>

**Isaac Sim First Run** <br/>
![Omniverse_IssacSim17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/00e095e2-ec0a-4680-b136-9da80d776c01) <br/>

## Container Installation
**Container Setup** <br/>
(1)Install NVIDIA Driver <br/>
=>Already Installed <br/>
(2)Install Docker <br/>
=>Docker 24.0.7 already Installed <br/>
(3)Install NVIDIA Container Toolkit <br/>
**Using Omniverse Streaming Client** <br/>
(1)Installation and Usage
![Omniverse_IssacSim27](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/22abf5ca-92dc-409f-9e13-713adc8f835c) <br/>
From the Omniverse Launcher, select Exchange from the top-level menu bar <br/>
![Omniverse_IssacSim28](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/77f34001-abdc-4a04-a4e8-24a46c5e20e9) <br/>
Click Omniverse Streaming Client from the left-hand Apps sidebar, click the Install button <br/>
![Omniverse_IssacSim29](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6c8ae2c5-9a08-490f-ad7b-6a94c50fa8d1) <br/>
Reference: <br/>
https://docs.omniverse.nvidia.com/streaming-client/latest/user-manual.html <br/>
(2)Configuration <br/>

**Python Environment Installation** <br/>
Possible to run Isaac Sim natively from Python rather than as a standalone executable. This provides more low-level control over how to initialize, setup, and manage an Omniverse application. <br/>
(1)Default Python Environment <br/>
Isaac Sim provides a built-in Python 3.10 environment that packages can use, similar to a system-level Python install. We recommend using this Python environment when running the Python scripts <br/>
Start a python script <br/>
> ./python.sh path/to/script.py <br/>
(2)Jupyter Notebook Setup <br/>
Jupyter Notebooks that use Isaac Sim can be executed as follows <br/>
>./jupyter_notebook.sh path/to/notebook.ipynb <br/>
(3)Visual Studio Code Support <br/>
The Isaac Sim package provides a .vscode workspace with a pre-configured environment  <br/>
Launch configurations for running in standalone Python mode, or the interactive GUI <br/>
An environment for Python auto-complete <br/>
You can open this workspace by opening the main Isaac Sim package folder in Visual Studio Code (VSCode)  <br/>
Open this workspace by opening the main Isaac Sim package folder in Visual Studio Code (VSCode)  <br/>
(3)Advanced: Running In Docker <br/>
Start the Docker container following the instructions in Container Deployment up to step 8. <br/>
Once the Isaac Sim container is running, you can run a Python script or Jupiter Notebook from the sections above. <br/>
(4)Advanced: Running with Anaconda <br/>
Create a new environment with the following command <br/>
If you have an existing conda environment, ensure that the packages in environment.yml are installed. Alternatively, you can delete and re-create your conda environment <br/>
Finally, you need to set up environment variables so that Isaac Sim python packages are located correctly. <br/>
You can then run samples as follows in the isaac-sim conda env <br/>

**ROS & ROS 2 Installation** <br/>
Omniverse Isaac Sim provides both a ROS and ROS 2 bridge for ROS system integration. The same set of common components are used to define the types of data being published/received by the simulator <br/>
Platform: Ubuntu 20.04 <br/>
Ros: Noetic <br/>
Ros2: Foxy <br/>
For the ROS bridge, Isaac Sim runs a custom roscpp build of ROS Noetic internally so that it works properly with the Omniverse framework and Python 3 <br/>
For the ROS 2 bridge, Isaac Sim is currently compatible with ROS 2 Foxy and ROS 2 Humble <br/>
Running Native ROS <br/>
-Method of ROS 2 installation determines which features of ROS 2 can be used. Isaac Sim comes with Python3.10, if you have installed ROS 2 with a different version of Python a fallback rclpy will be used which comes pre-packaged with Isaac Sim and compiled with Python3.10 <br/> 
-rclpy: Using ROS 2 functionality with Python in Isaac Sim <br/>
The ROS_DISTRO env variable is used to determine if ROS 2 is sourced and which distro to use, if this variable is not set an internal ROS 2 distro build will be used. Message definitions can be different between ROS 2 versions, due to this, we dynamically load the appropriate ROS 2 backend depending on which ROS Distro is sourced. <br/>
(1)Download ROS 2 following the instructions on the official website <br/>
https://docs.ros.org/en/foxy/Installation/Ubuntu-Install-Debians.html <br/>
(1)-1 Resources <br/>
ROS 2 Foxy (Ubuntu Focal): amd64, arm64 <br/>
(1)-2 System setup <br/>
Set locale <br/>
![Omniverse_IssacSim154](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6ac665a5-2b4b-41b4-93fe-1bed2746c350) <br/>
![Omniverse_IssacSim155](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/57f94b2d-2500-4d3e-802f-bd252bab51e7) <br/>
![Omniverse_IssacSim156](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dfa3275f-dea2-41f3-b3ef-c2ca4e957fc7) <br/>
![Omniverse_IssacSim157](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2c727222-ddb6-48af-9c0b-aaa3eaad5759) <br/>
Make sure you have a locale which supports UTF-8 <br/>
(1)-3 Setup Sources <br/>
![Omniverse_IssacSim158](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9c05532f-2047-4503-8405-f319b0a71ad0) <br/>
Ensure that the Ubuntu Universe repository is enabled <br/>
![Omniverse_IssacSim159](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d7a8dc5f-65a2-4292-bd8f-2c074e1e0a6d) <br/>
![Omniverse_IssacSim160](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8759421e-e86e-465f-ac5e-58b75b492541) <br/>
Add the ROS 2 GPG key with apt <br/>
![Omniverse_IssacSim161](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/08c4b75c-1650-45e4-8a7b-bc6821ef57c8) <br/>
Add the repository to your sources list. <br/>
(1)-4 Install ROS 2 packages <br/>
![Omniverse_IssacSim162](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9d224a64-867c-4949-8f74-d5556d1918db) <br/>
![Omniverse_IssacSim163](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/442eb707-bc78-4403-82b4-9a4a8a636471) <br/>
Update your apt repository caches after setting up the repositories <br/>
ROS 2 packages are built on frequently updated Ubuntu systems <br/> 
Ensure system is up to date before installing new packages <br/>
![Omniverse_IssacSim164](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0b33c5f1-9030-4470-8e50-af7dfbd761c4) <br/>
Desktop Install (Recommended): ROS, RViz, demos, tutorials <br/>
![Omniverse_IssacSim165](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d44032b6-1d5e-4146-9e5b-773f38ed30fa) <br/>
ROS-Base Install (Bare Bones): Communication libraries, message packages, command line tools. No GUI tools <br/>
![Omniverse_IssacSim166](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9ac9036d-a212-40a8-85bf-15ef098f24a2) <br/>
Development tools: Compilers and other tools to build ROS packages <br/>
(1)-5 Environment setup <br/>
Sourcing the setup script <br/>
![Omniverse_IssacSim169](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7e268b20-5206-43ac-af0a-da2b3a6f892e) <br/>
Set up your environment by sourcing the following file <br/>
Try Some examples <br/>
![Omniverse_IssacSim167](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/27cb55a4-9bff-4063-bb06-c5d5cfd4d7ba) <br/>
![Omniverse_IssacSim168](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8116b36e-ae7e-4187-bcaa-341a7f697505) <br/>
(1)-6 Avoid sourcing bash script every time <br/>
Problem: Annoying to always source a script every time we open terminal <br/>
Solution: Open home directory and so you can open the bashrc <br/> 
![Omniverse_IssacSim170](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2ab669c8-52d6-4bba-845e-574ac20d8e81) <br/>
![Omniverse_IssacSim171](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2d8f8332-a86c-401b-a4db-e87d32023a22) <br/>
(1)-7 Check whether it is scripted properly in ros2 script <br/>
![Omniverse_IssacSim172](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1a441ccc-1c2b-43ac-999b-72be82c0bfca) <br/>
Ros2 installation complete & Environment sourced properly <br/>
(2)Install vision_msgs_package <br/>
![Omniverse_IssacSim173](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/69f516d3-fb97-493f-b6aa-22e798f5609a) <br/>
(3)Ensure that the ROS environment is sourced in the terminal or in your ~/.bashrc file. You must perform this step each time before using any ROS commands and running Isaac Sim <br/>
=>Already Done <br/>

**Enabling the ROS Bridge Extension** <br/>
If you intend to use a ROS2 bridge, before launching Isaac Sim, you need to set the Fast DDS middleware on all terminals that will be passing ROS2 messages <br/>
If you are not using a Isaac Sim ROS2 Workspace, create a file named fastdds.xml under ~/.ros/, paste the following snippet link into the file <br/>
Create the fastdds.xml File <br/>
![Omniverse_IssacSim107](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/19081ca2-8ac3-4220-924b-48aa84d926ec) <br/>
Set the FASTRTPS_DEFAULT_PROFILES_FILE Environment Variable <br/>
![Omniverse_IssacSim108](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c10052bd-8b9e-4b63-93df-83d64c4c346b) <br/>
Set ROS_DOMAIN_ID (Optional) <br/>
![Omniverse_IssacSim109](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e6c3a759-938f-4792-817c-604f106c197b) <br/>
Source Your ROS 2 Installation and Workspace <br/>
![Omniverse_IssacSim110](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b4dba6ff-f31c-4945-91a0-d281f0d8b9df) <br/>
Launch Isaac Sim <br/>
![Nvblox2-3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b9006c41-4da0-44bd-899c-8687635e28f4) <br/>

Launch ROS 2 Nodes <br/>


**Setting Up Workspaces** <br/>
(1)Clone the Isaac Sim ROS Workspace Repository from https://github.com/NVIDIA-Omniverse/IsaacSim-ros_workspaces <br/>
(2)A few ROS packages are needed to go through the Isaac Sim ROS / ROS 2 tutorial series. To make it easy, entire ROS and ROS2 workspaces with the necessary packages are included.
=> Ubuntu > Foxy <br/>
(2)-1 To build the ros2 workspace, you may need to install additional packages <br/>
![Omniverse_IssacSim174](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2882968d-603f-46e5-a170-f48796ff360b) <br/>
For rosdep install command <br/>
![Omniverse_IssacSim175](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f39d81ed-a92a-4ab5-b547-da1644f9880a) <br/>
For colcon build command <br/>
(2)-2 Ensure your native ROS2 has been sourced if not already <br/>
![Omniverse_IssacSim176](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6f2d7a36-b002-4d12-ab34-b28c2421d27e) <br/>
(2)-3 Resolve any package dependencies from the root of the ROS2 workspace by running the following command <br/>
![Omniverse_IssacSim177](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/12483088-6d82-4440-a8cc-4a795625403c) <br/>
![Omniverse_IssacSim178](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/75085fea-cff0-4043-bb49-24077429ac0f) <br/>
![Omniverse_IssacSim179](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dabda610-0b62-4598-a69c-175e8a03b0ef) <br/>
(2)-4 Build the workspace <br/>
Error  <br/>
![Omniverse_IssacSim180](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/eaf388e4-18bb-44b5-845d-08ae49a8db9e) <br/>
Solution: (Searching for it...) <br/>
https://forums.developer.nvidia.com/t/troubleshooting-broken-ros-packages-in-isaac-sim-workspace-setup/278881 <br/>
=> Couldn't find a solution for building it from source <br/>   
Way to diverge the Error: <br/>
Use the IsaacSim ROS Workspace Repository (The one cloned in the Isaac Sim ROS Workspace Repository from https://github.com/NVIDIA-Omniverse/IsaacSim-ros_workspaces) <br/>
![Omniverse_IssacSim181](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1d83da7d-2147-4220-83e2-e3dbc3253010) <br/>
Under the root directory, new build, install, and log directories will be created <br/>   
(2)-5 Open a new terminal and source the workspace with the following commands <br/>
![Omniverse_IssacSim182](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/33f90a6b-9157-4e3e-9d41-9352618668e0) <br/>
Add a line in bashrc, that sources the IsaacSim ROS Workspace <br/>
![Omniverse_IssacSim183](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/413e55d6-f497-4a36-963a-47f42d5b5877) <br/> 
![Omniverse_IssacSim184](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cf31ac0d-18db-44cd-ade6-68ce04046b64) <br/> 
<br/>
**Building ROS 2 Workspaces with Python3.10** <br/>
If you want to use rclpy with Isaac Sim your ROS 2 workspace must be built with Python3.10 <br/>
Dockerfiles which builds minimal dependencies of ROS 2 with Python3.10 is provided<br/>
Ubuntu20 > Foxy <br/>
Minimal dockerfile will be used to build our workspace with Python3.10 <br/> 
(Ensure that docker is installed on your system) -> Installed <br/>
(1)Clone Isaac Sim ROS Workspace <br/>
=> Already Done <br/>
(2)Build dockerfile <br/>
![Omniverse_IssacSim185](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ed5d8611-de16-4cb3-a457-de7ad97f8f0c) <br/>
Minimal foxy_ws needed to run Isaac Sim is under build_ws/foxy/foxy_ws <br/>
Additional workspaces can also be created and built in this dockerfile <br/>
![Omniverse_IssacSim186](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/124a1f9d-fa8b-4e8b-bceb-34d4e4b8b8f7) <br/>
(3)Now source the ROS 2 workspace <br/>
Run Isaac Sim from the same terminal, the sourced workspace contains the minimal ROS 2 Foxy dependencies needed to enable the ROS 2 bridge <br/>





Reference: <br/>
https://velog.io/@raise_wise/2.-Omniverse-Isaac-Install <br/>
https://docs.omniverse.nvidia.com/launcher/latest/installing_launcher.html <br/>

https://docs.omniverse.nvidia.com/install-guide/latest/workstation-install.html <br/>












