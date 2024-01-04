![image](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1fdc854b-7593-4878-b8e3-9f0640e5c0ae)---
layout: post
title:  "Assignment: 2nd Week - Follow Isaac_Sim"
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
(2)Jupyter Notebook Setup <br/>
Jupyter Notebooks that use Isaac Sim can be executed as follows <br/>
(3)Visual Studio Code Support** <br/>
The Isaac Sim package provides a .vscode workspace with a pre-configured environment  <br/>
Launch configurations for running in standalone Python mode, or the interactive GUI <br/>
An environment for Python auto-complete <br/>
You can open this workspace by opening the main Isaac Sim package folder in Visual Studio Code (VSCode)  <br/>
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
https://docs.ros.org/en/humble/Installation/Alternatives/Ubuntu-Development-Setup.html <br/>
(1)-1 System Requirements <br/>
Tier 3: Ubuntu Linux - Focal (20.04) 64-bit <br/>
(1)-2 System setup <br/>
Set locale <br/>
![Omniverse_IssacSim30](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/43fd5581-dfbe-4948-80df-6eae825c932b) <br/>
![Omniverse_IssacSim31](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f591b669-af5b-473e-8586-f875f9f81df7) <br/>
Make sure you have a locale which supports UTF-8 <br/>
If you are in a minimal environment (such as a docker container), the locale may be something minimal like POSIX <br/>
We test with the following settings. However, it should be fine if you’re using a different UTF-8 supported locale <br/>
Add the ROS 2 apt repository <br/>
![Omniverse_IssacSim32](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a841d865-c7ca-4591-b27e-396d0d60eabf) <br/>
Ensure that the Ubuntu Universe repository is enabled <br/>
![Omniverse_IssacSim33](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/fee2e304-9688-42cf-8b7a-22e879eb1870) <br/>
![Omniverse_IssacSim34](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6f0916cc-1264-4fd6-a955-18401bcf5afb) <br/>
Add the ROS 2 GPG key with apt <br/>
![Omniverse_IssacSim35](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dcc0ddbb-0d9b-48ff-a911-d0af593df5af) <br/>
Add the repository to your sources list. <br/>
Install development tools and ROS tools <br/>
![Omniverse_IssacSim36](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/890389f4-c54c-4f41-815f-cd45580ab443) <br/>
Install common packages <br/>
![Omniverse_IssacSim37](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4722532e-2772-4acd-9650-47a4de8f8faf) <br/>
Install packages according to your Ubuntu version <br/>
Get ROS 2 code <br/>
![Omniverse_IssacSim38](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e47f3ee7-bb32-4060-9e92-b2a8a7757977) <br/>
Create a workspace and clone all repos <br/>
![Omniverse_IssacSim39](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/89156777-3377-4d15-b45d-b2af5a21f131) <br/>
Install dependencies using rosdep <br/>
![Omniverse_IssacSim40](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/88750614-cb14-4269-a27b-23906acac109) <br/>
![Omniverse_IssacSim41](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/91dff0b4-1f7f-44d7-b8fa-b08e3eb6b61c) <br/>
Build the code in the workspace <br/>





Reference: <br/>
https://velog.io/@raise_wise/2.-Omniverse-Isaac-Install <br/>


https://docs.omniverse.nvidia.com/launcher/latest/insta lling_launcher.html <br/>

https://docs.omniverse.nvidia.com/install-guide/latest/workstation-install.html <br/>












