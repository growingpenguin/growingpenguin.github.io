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
What is Issac Sim? <br/>
Robotics and AI simulator which can be used for burning cycle of developments off(significantly reduce the time and effort) your robotics test and develpment and design on it to make development faster and easier <br/>
Use Cases <br/>
Roboticist or Engineer that you already have a robot in front of you and you have a task in mind or a new algorithm that you want to test you have a manipulator you want to do a new pick and place, or you have a mobile base that you want to go to points a or b, or you want to do this experiments on the simulator before doing on the actual robot to iterate faster or actually avoid any breaking stuff either the robot or anything that is close to it. Hobbyist who want to buy a small robot for itself and play around with it, maybe a cool kid who want to design a new robot and want to see how it works in a simulation before you actually design it and brining to live <br/>
Why is Issac Sim a better tool compared to other robotic simulation in the use case? <br/>
(1) Issac Sim has all the right ingredients <br/>
-Built on top of omniverse which gives us the photo-realistic visuals and realistic physics <br/>
=>Help it look like real and act like real <br/>
-Built with two key elements in mind, Connectivity and AI <br/>
Step1:How do I bring my robot in? <br/>
Brought many toolsets here. For example, if we have a cat or URDF file, we try to make this seamingless to bring it in and don't lose information and bring as much as information possible while importing your robot model <br/>
Step2:Want my robot to have my sensors <br/>
Issac Sim comes with a suite of sensors including camera, ultra-sound, and lidar for sensor and this is going to grow as we move toward the end of the year <br/>
Step3:I have my robot and I want to put my robot in a scene I want to test my robot in. <br/> 
-ex. Warehouse <br/>
-There are different ways of bringing your scenes to Issac Sim. <br/>
One way is, you are an artist and you can design it from scratch here. Other, is if you already have scenes from previous work or you just saw something in a market place, you can just from all the connectors omniverse has, and you can bring those scenes from Issac Sim <br/>
-Having the connectivity in mind while designing Issac Sim is going to be easy for you to bring your scene or bring your robot into Issac Sim
<br/>
Step4:Settings! Once you have your scene and your robots all in, you will come up with a lot of parameters to set before doing your test 
-UI person: UIs are provided and it is easy to figure out. Documentations are provided which are pretty intuitive <br/> 
-Roboticist that don't like UI: All about writing python and doing everything with python, this is the right language to targert Issac Sim. Anything can be done without looking at UI. <br/>
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
 
Reference <br/>
https://developer.nvidia.com/isaac-sim <br/>
https://control.com/news/fraunhofer-research-uses-nvidia-technology-for-ai-robotic-simulation/ <br/>
https://www.youtube.com/watch?app=desktop&v=vpHR0qiH-GY&list=PL3jK4xNnlCVf1SzxjCm7ZxDBNl9QYyV8X&index=7
