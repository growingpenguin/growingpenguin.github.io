---
layout: post
title:  "Assignment: 1st Week - Nvidia IssacSim ROS"
---

# Nvidia Issac Sim 
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

## Introduction and Live Demo in Isaac Sim
### PM
**What is Issac Sim?** <br/>
Robotics and AI simulator which can be used for burning cycle of developments off(significantly reduce the time and effort) your robotics test and develpment and design on it to make development faster and easier <br/>
**Use Cases** <br/>
Roboticist or Engineer that you already have a robot in front of you and you have a task in mind or a new algorithm that you want to test you have a manipulator you want to do a new pick and place, or you have a mobile base that you want to go to points a or b, or you want to do this experiments on the simulator before doing on the actual robot to iterate faster or actually avoid any breaking stuff either the robot or anything that is close to it. Hobbyist who want to buy a small robot for itself and play around with it, maybe a cool kid who want to design a new robot and want to see how it works in a simulation before you actually design it and brining to live <br/>
**Why is Issac Sim a better tool compared to other robotic simulation in the use case?** <br/>
Issac Sim has all the right ingredients <br/>
-Built on top of omniverse which gives us the photo-realistic visuals and realistic physics <br/>
=>Help it look like real and act like real <br/>
-Built with two key elements in mind, Connectivity and AI <br/>
**Steps a user would follow to import and configure a robot in the Isaac Sim environment** <br/>
Step1:Importing the Robot (How do I bring my robot in?) <br/>
Importing a Robot Model: Bringing a digital model of a robot into Isaac Sim. <br/> 
Preservation of Information: The goal is to import the robot model without losing any vital information, ensuring that as many details as possible(like geometry, textures, kinematics) are retained during the import process. <br/>
Ex.If a CAD or URDF file is given, we try to bring this in seaminglessly <br/>
Footnote: <br/>
CAD(Computer-Aided Design) and URDF(Unified Robot Description Format) files: <br/>
Common formats for representing the structure and visual aspects of a robot <br/>
Step2:Step 2: Adding Sensors (Want my robot to have my sensors) <br/>
Sensor Suite: Isaac Sim provides a suite of virtual sensors that can be attached to the robot model within the simulation. These can include cameras, ultrasound sensors, and LIDAR, which are essential for the robot to interact with its environment. <br/>
Sensor Expansion: There's an indication that the range of available sensors in Isaac Sim is expected to grow, enhancing the simulator's capabilities. <br/>
Step3:Placing the Robot in a Scene(Want to put my robot in a scene I want to test my robot in) <br/> 
Testing Environments: The user wants to place the robot in a virtual scene (like a warehouse) to simulate and test its behavior. <br/>
ex. Warehouse <br/>
Importing Scenes: There are options for creating a scene from scratch within Isaac Sim or importing pre-existing scenes, possibly from a marketplace, using Omniverse Connectors. <br/>
Having the connectivity in mind while designing Issac Sim is going to be easy for you to bring your scene or bring your robot into Issac Sim
<br/>
Step4:Configuring Settings <br/>
Parameter Adjustment: Once the scene and robot are in place, numerous parameters need to be set for the simulation. This could involve physics settings, environmental conditions, sensor configurations, etc. <br/>
User Interface (UI) and Documentation: For users who prefer a graphical approach, Isaac Sim provides a user interface along with documentation to help them configure settings. <br/>
Python Scripting: For users who are more comfortable with coding, Isaac Sim supports Python scripts for setting up the simulation. Everything that can be done via the UI can also be accomplished through Python, appealing to roboticists who prefer a programmatic approach. <br/>
Step5: Once you have all the settings, now I can connect the brain part of the robot <br/>
-Brain part of the robot: Your SDK, that can by Python or ROS, and Issac SDK <br/>
-You can start control moving your robot, assigning tasks, testing algorithms <br/>
-We have thought through all the workflows that you might have in mind <br/>
Key Element for Issac Sim : AI part <br/>
-Robots of the next era, would need to understand their environment better, they need perception, they need to know what is going around them and that requires a lot of data. <br/>
-This data is not available like the real-data. Sometimes it is hard, expensive to get, and that is why it is getting pretty common these days to use synthetic data for training and either enhance what you have with the real data or just do it all through synthetic data <br/>
-Tools are given. Ground-Truth information, it could be semantic segmentation, bounding boxes 2D 3D rgb depth cameras.
-Along those tools, a lot of data is needed and a lot of scenes are needed to create a lot of data. Artist sit and creating all those scenes would be difficult, so start with a scene(warehouse, living room, retail store,etc..) randomize things just like things will randomize things the way that things will randomize in real life. If you go to a store, the boxes is not always the same, the box will be little bit here and there, the color, texture, the position, the time of the day, and the lighting might change. These are all the variations that we see every day in around us and that is why tool is given to create all this randomization in the scene which is still structured, and if implemented in the warehouse intially, even if randomized, it is still a warehouse. Things are in the right place but in a different way and this way you can create tons of or thousands of hundreds of thousands of scenes for data that you need for training   <br/>
-A lot of features and toolsets are given. Pick ones that fits or suits better to your application. Application examples are given, there are couple of manipulations picking places for, navigation examples, if you are a ross gro, ross examples are given, how to connect with it, and examples for small robots exist. We cover pretty much most of the tastes around robotics. <br/>  
Summary: Issac Sim aims to reduce the iteration time, development time, testing things in Issac Sim first, and then test your algorithms immediately on all of these algorithms. <br/>
How to download Issac Sim => https://developer.nvidia.com/isaac-sim <br/>
Multi-camera support for ROS: <br/>
Simulate stereo cameras, rgb, depth, lighters, and other types of sensors, and beam all this to ROS into Issac SDK  <br/>
All this sensor data being visualized to ARviz(Augmented Reality-enabled Visualization Platform for ROS Applications) <br/>
Generating Synthetic Data for Training perception models <br/>
Synthetic data is important to us with the benefit of RTX renderer, realistic architects renderer the materials and physics allow to simulate all the materials. We hope to simulate all of the realistic synthetic data to train robots and transfer those to real datas. 
Simulating Manipulation <br/>
There are different types of manipulators, UR10, simulate the suction cups as well, all the conveyer belt goes. Bin rolls down, robot picks up. Suction cup simulates when it will break if it is too heavy, so want to simulate things realistically, so when transferred to the real world, testing time can be reduced.  <br/>
Simulating Navigation <br/>
Support ROS navigation as well as Issac SDK navigation. This is carter2. <br/>
Importing Robots/Assets to Issac Sim <br/>
Rig all the individual parts. Previously had the URDF importer and URDF importer. CAD file is a new way to bring in robots <br/>
Issac Sim Launcher <br/>
News <br/>
Latest news about Omniverse, omniverse applications, benefits of synthetic data, how we can use omniverse to get synthetic data for simulating self-driving cars.  <br/>
Exchange <br/>
Find all the apps like Create, machinima, Audio2Face, and Issac Sim. <br/>
Learn <br/>
Video tutorials to teach how to use Nvidia Omniverse <br/>
Issac Sim <br/>
After installation
(1)Select Issac Sim => Click launch => Issac Sim Editor pops up<br/>
(2)Click in Open terminal => Type ./issac-sim.sh <br/>
Can run Reinforcement learning in headless mode, let it run and beam down and see what's going on or not <br/>
Rigging up robots? <br/>
Ex.Dotbot, robot's arm, demonstrate how we train in Issac Sim we compute and test it on the real robot  <br/>
Terms of breaking up the robot, robot is like a physics articulation(관절). Robot is a bunch of links that are connected with joints<br/>
In the right hand side stage window, we can see all the individual parts, base, shoulder, and go through the process of converting this part to rigid bodies and then joint them together so that they can move right <br/> 
Way to know what which partners already have the physics applied (Eye => Show By type => Physics Mesh => All ) <br/>
Process <br/>
(1) Convert them to rigid bodies <br/>
Select your part so it will highlight the mesh right and then go one level up in the x form. <br/>
X form: Container, it contain meshes, collision shapes, all of the materials <br/>
X form right click => Physics => Apply preset => Rigid body <br/>
Instantly turns into rigid body with a pink outline <br/>
=> When play is played, it falls, because it is not jointed to the main arm <br/>
(2) Create joints <br/>
Connect finger to the wrist <br/>
(Wrist -> Finger , Pivot is using the origins of the finger, so there is why we want the origin to be) <br/>
Right click => Create => Physics => joint => Revolute joint => New jaw is popped up <br/>
Revolute joint is a coplayer joint, and this is how that piece should move <br/>
=> When play is played, because they don't stay in place because they don't have any drive yet <br/>
(3)Have a Drive <br/>
Select the joint where the drive is <br/>
+Add -> Physics -> Angular Drive <br/>
What the drive does is to holds the drive there and create a motor so that it can move the joint, the stiffness of the drive tell you how fast you can move the piece <br/>
Damping is needed because in real robots, all those jaws aren't moved immediately, they don't just snap, so realistic movement of the damping is needed <br/>
=> When play is played, they stay in place, but we still miss the particular joint <br/>
(4)Take care of loops <br/>
Articulation lights the tree structure. <br/>
Loops like the particular case, special care is needed <br/>
Create a joint between the two. <br/>
(5)Create a spherical joint <br/>
Spherical joint is socket, while revolute joint is this coplanor so you know it is on one plane and if you simulate again because articulation doesn't like loop so if you simulate, it will not work <br/>
Things you can do is you can exclude this from the whole articulation so the job of the joint is to hold these two piece together which is another normal Physx joint. Click on exclude articulation and see where it go <br/>
(6)Drive the robot <br/>
Select your drive, the joint(Revolute joint) => Drag, and then it moves <br/>
=> Can use python to do the process <br/>
-Use python to control the robot, use AI when we are searching for joints, and dragging the target positions <br/>
-Can go in Issac Sim, and you can tune the joint limits, just to match how the real robot should move. <br/>
(7)Environment <br/>
-In terms of environments, it is dark, dome light can be added <br/>
-Create -> light -> dome light -> specify texture <br/>
-Scale down the ground plane <br/>
-widgets can be change or selected from the left hand side, can scale things up and down <br/>
-Drag .hdr (dome file) -> Texture file, so you can see the environment here already and then distant light can be turned off, tune all of intensity off the dome light -> Working on outside outdoor <br/>
-Two different modes for rendering. Fbs is quite high. Path trace mode is more realistic in terms of rendering, taking up more resources. Tiny bit slower, but greater at posing your scenes <br/>
-Press F10, save out the screen for you, show and hide different types of physic joints. Provide you another way to work with different environments. Capture robot camera sensors with realistic environments like room environment or any other outdoor environment with natural lighting so it will help you transfer learning to the real robot <br/> 
Cache <br/>
Omniverse app that caches material compilations so the first run takes a bit longer time, but subsequent, because everything is cached, bigger scenes can be opened quicker <br/>
Control -> Manipulation -> Dotbot picking 
Issac Sim tips & Useful links <br/>
Document tip things that you could look out for, how to get the best quality in terms of rendering, in terms of simulations for your robot, simulations for the robot's needs <br/>
Nvidia Flex <br/>
Integrating technologies for either soft bodies or multibodies or fluids directly from Issac Sim. Nvidia Flow can simulate fires from omniverse <br/> 

Q&A <br/>
**Can you set up a robot's joint with a URDF file like in ROS?** <br/>
A:Yes, we do have a URDF importer so you can set up robot using the assets for each joint in each solid part of the robot and model that URDF. Cat files can be used for import for example from a STEP file, drawback from the STEP file itself is setting up the joints manually afterwards and the next step is importing this on shape so you would model the robot on shape or import your STEP file on shape so you would model your robot on shape or import your STEP file on shape and then use geometry from the robot from the joints which would make it more accurate as well. And then on one shape we can model entirely with the full joint description directly from the cat file.<br/>
**Is robots on top of robots possible?** <br/>
A:Carter base, moving base with two wheels that was shown before and a frank arm on top of that, basically a robot with another robot dependent on it. Simulation of multiple instances of the same robot is also possible. <br/>
Key points of simulation is that we can test on these combinations. What if we put a dotbot on top of the jet racer, you can see how the physics interacts where and when things might top over top falls over. We did the same thing with mounting the frame cat over a carter, so these can all be tested and see how things work before moving on to the real robots as well <br/>
Another example is setting the anchor weights so that it doesn't fall over when the arm extends this is one problem when prank arm on top of the wheel base try to reach with the robot, it will basically change the center of mass and make it drop, will fall, so we would put some anchor weights on the other side, so that it can compensate and allow for a wider range of movement. This is one example when simulation helped to prevent this issue happen in the real world <br/>
Another example is the real dog bot, there are four sunction cups over here and it depends on how fast it swings, the robot might fall and this is a great way to test your robot <br/>
**You seem to be talking a lot about moving from sim to real, like is it also, do we also take into consideration the fact that how can we take real values and integrated simulation and see how that works** <br/>
A:Measure before the dotbot, individual parts can be measured, you can go in here, and you type in the real values, the same way with URDF files, you have URDF files and you have mass and other type of numbers, if you have the numbers, Issac Sim allows you to input those in test, and test how well in matches reality. It can go both way and that is the beauty of the digital twin. <br/>
**Robot twins and Factory twins** <br/>
A:Both sim to real and real to sim. It works both ways and it is nice how we can fit in all these values in Issac Sim and Omniverse and try them out. We try to make Issac Sim useful to developers  <br/>
**Where would be the best place for folks to chat on the omniverse sim team, would be on the omniverse sims forums?** <br/>
A:https://forums.developer.nvidia.com/c/omniverse/simulation/69 <br/>

45분 47초 <br/>
Reference <br/>
https://developer.nvidia.com/isaac-sim <br/>
https://control.com/news/fraunhofer-research-uses-nvidia-technology-for-ai-robotic-simulation/ <br/>
https://www.youtube.com/watch?app=desktop&v=vpHR0qiH-GY&list=PL3jK4xNnlCVf1SzxjCm7ZxDBNl9QYyV8X&index=7
