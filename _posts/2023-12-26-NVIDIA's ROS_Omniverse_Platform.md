---
layout: post
title:  "Assignment: 1st Week - Exploring NVIDIA's ROS Omniverse Platform"
---
In this post, we delve into the functionality and operational aspects of NVIDIA's ROS Omnibus Platform.  <br/>
Join me as we explore and analyze its features and capabilities. <br/>
## 1. NVIDIA Omniverse 
### What is NVIDIA Omniverse? 
Extensible platform for virtual collaboration and real-time, physically accurate simulation. Creators, designers, researchers, and engineers can connect tools, assets, and projects to collaborate in a shared virtual space. Developers and software providers can also build and sell Omniverse Extensions, Apps, Connectors, and Microservices on the Omniverse platform to expand its functionality.<br/>
Footnote <br/>
Virtual Collaboration Space: <br/> 
Digital workspace where people working in creative fields, research, engineering, or design can come together. <br/>
They can share and work on projects, tools, and digital assets in this virtual environment, almost as if they were together in the same physical space. <br/>
Real-Time, Physically Accurate Simulation:  <br/>
The platform can simulate real-world physics in real-time.  <br/>
This means it can mimic how things happen in the real world, like how objects move or interact, and it does this as it happens, without delay. <br/>
Extensibility: <br/>
The platform is designed to be expandable. This means it can be customized and enhanced with additional features. <br/>
Opportunities for Developers:  <br/>
For those who develop software, there's an opportunity to create and sell their own add-ons for the Omniverse platform. 
These can be things like new features (Extensions), specialized applications (Apps), tools that help different software work together (Connectors), or even small, focused programs that perform specific tasks (Microservices). <br/>
<br/>
### Omniverse Platform Components 
Five core components of Omniverse Platform: <br/>
**Omniverse Nucleus** <br/>
The Central DB and Collaboration engine of Omniverse. With Nucleus, users share and modify representations of virtual worlds. <br/>
Omniverse의 중앙 DB와 협업 엔진. Nucleus를 사용하여 사용자들은 가상 세계를 공유하고 수정할 수 있다 <br/>
Footnote <br/>
Central Database: <br/>
Very much like a storage space. It's where all the data and digital representations of virtual worlds are stored. <br/>
This can include 3D models, environments, and other types of virtual assets. <br/>
Collaboration Engine: <br/>
Nucleus allows multiple users to access and work on these virtual worlds together.  <br/>
It's like a shared workspace where people can join, see what others are doing, and make their own changes. <br/>
Sharing and Modifying Virtual Worlds:  <br/>
Users can upload their virtual creations to Nucleus, and others can access and modify them.  <br/>
This collaboration can happen in real-time, meaning that changes made by one person can be immediately seen and further modified by others <br/>
**Omniverse Connect** <br/>
The libraries that connect popular content creation tools to Omniverse. <br/> 
Omniverse에 인기 있는 콘텐츠 제작 도구를 연결하는 라이브러리들 <br/>
With Connectors, users continue to work in their favorite software applications, such as SketchUp, Maya, and Unreal Engine, while benefitting from other Omniverse tooling. <br/>
**Omniverse Kit** <br/>
The toolkit for building native Omniverse Apps, Extensions, and Microservices. <br/>
Omniverse 앱, 확장 프로그램 및 마이크로서비스를 구축하기 위한 툴킷 <br/>
**Omniverse RTX Renderer** <br/>
An advanced, multi-GPU renderer based on NVIDIA RTX™ that powers both real-time ray tracing and referenced path tracing. <br/>
"NVIDIA RTX™를 기반으로 한 고급 멀티-GPU 렌더러로, 실시간 레이 트레이싱과 참조 경로 트레이싱 모두를 지원." <br/>
Advanced, Multi-GPU Renderer:  <br/>
Renderer is like a sophisticated artist that can create or recreate scenes on a computer. <br/>
Creating recreating scenes? <br/>
Creating a scene on a computer involves digitally constructing an environment or setting. <br/>
This can be anything from a simple room to a complex outdoor landscape. <br/>
Recreating a scene means taking an existing environment (like a real-world location) and making a digital version of it that looks as close to the original as possible. <br/>
This particular renderer is advanced, meaning it uses the latest technology.  <br/>
It's also 'multi-GPU', which means it can use the power of multiple graphics cards simultaneously. <br/>
This helps in making the rendering process (creating the final image) faster and more efficient. <br/>
Based on NVIDIA RTX™: <br/>
NVIDIA RTX™ is a technology that's known for making graphics look incredibly realistic, especially with lighting and shadows.  <br/>
The Omniverse RTX Renderer uses this technology, which is why it can produce such high-quality, lifelike images. <br/>
Real-Time Ray Tracing and Referenced Path Tracing: <br/>
These are techniques used to calculate how light interacts with objects in a scene.  <br/>
'Ray tracing': Way to simulate light and shadows that look very realistic. It calculates the path of light as it interacts with objects.  <br/>
'Referenced path tracing' : Similar concept but typically used for creating even more detailed and accurate images, though it usually takes more time.  <br/>
The Omniverse RTX Renderer can do both, and it does them in 'real-time', which means it calculates these effects incredibly quickly, almost instantly as you work on the scene. <br/>
**Omniverse Simulation** <br/>
A powerful suite of tools and SDKs that simulate a physically accurate world. <br/>
물리적으로 정확한 세계를 시뮬레이션하는 강력한 도구 및 SDK 모음 <br/>
Refers to a collection of advanced tools and software development kits(SDKs) that are used to create very realistic simulations of the physical world on a computer.  <br/>
Additional components of Omniverse Platform: <br/>
**Omniverse Launcher** <br/>
The native client for downloading, installing, and updating Omniverse Apps, Extensions, and Connectors.  <br/>
Omniverse 앱, 확장 프로그램, 및 커넥터를 다운로드, 설치, 업데이트하기 위한 네이티브 클라이언트  <br/>
Launcher is provided in both NVIDIA Omniverse™ for Individuals and NVIDIA Omniverse™ Enterprise. <br/>
Footnote <br/>
native client : A software application that is specifically designed to operate within a certain os or environment. Likely a dedicated application that facilitates the downloading, installation, and updating of Omniverse Apps, Extensions, and Connectors. <br/>
**Omniverse Extensions** <br/>
The plugins that define the capabilities of Omniverse Kit-based Apps. <br/>
Omniverse Kit 기반 앱의 기능을 정의하는 플러그인 <br/>
Developers use Extensions to create, modify, and extend the tools and workflows they need to be productive. <br/>
Footnote <br/>
Plugins That Define Capabilities: <br/>
Think of Omniverse Extensions as extra pieces you can add to a basic software application to give it more functions or features. <br/> 
Just like you might add a new app to your phone to do something extra, these extensions add new capabilities to the Omniverse Kit applications. <br/>
Create, Modify, and Extend Tools and Workflows:  <br/>
Extensions allow developers to tailor the software to their specific needs. <br/>
They can create new tools or modify existing ones, and adjust the way they work (the workflow) to be more efficient or to do special tasks. <br/>

## 2. Omniverse Structure <br/>
NVIDIA Omniverse: NVIDIA’s open graphic platform for real-time interchange, collaboration and shared virtual worlds.  <br/>
Omniverse aims for universal interoperability across different applications and vendors.  <br/>
It provides efficient real-time scene updates and is based on open standards and protocols.  <br/>
Omniverse is designed to act as a hub, so that newly connected capabilities can be exposed as desired to any connected clients and client applications. <br/>
**Nucleus** <br/>
Core Services: <br/>
The fundamental services that Nucleus provides, like data storage and management. It acts as the central hub for all the data and collaboration in the Omniverse ecosystem. <br/>
Cloud: <br/> 
Refers to the ability of Nucleus to store data and provide services through the internet, allowing users to access and collaborate from anywhere. <br/>
On-Prem: <br/>
Short for "on-premises". This means that the Nucleus services and data storage can also be set up and run on local servers at a user's location, rather than in the cloud. <br/>
**Connect** <br/>
Connect SDK: <br/> 
Software Development Kit for Omniverse Connect, which allows developers to create plugins and integrations for various software tools to connect them with the Omniverse platform. <br/>
Plugins: <br/>
These are the actual tools or extensions created using the Connect SDK that integrate other software applications into the Omniverse ecosystem. <br/>
**Kit** <br/>
Viewer: <br/>
A tool within Omniverse Kit that allows users to view and interact with 3D content. <br/>
Editor: <br/>
This refers to the editing capabilities within Omniverse Kit, where users can modify and create 3D scenes and environments. <br/>
Framework:  <br/>
The underlying structure or set of tools that Omniverse Kit provides for building and customizing applications. <br/>
**RTX Renderer** <br/>
Real-time: <br/> 
This indicates that the rendering process (creating final images from 3D models) happens almost instantly, allowing for immediate viewing and interaction.
Scalable: <br/>
The renderer can efficiently handle both small and large, complex projects. <br/>
Accurate: <br/>
Ensures high fidelity and realism in the rendering, closely mimicking real-world physics and lighting. <br/>
MDL: <br/>
Stands for Material Definition Language, a method for defining materials in a way that accurately represents how they interact with light<br/>
**Simulation** <br/>
PhysX: <br/>
A physics engine that simulates real-world physical behaviors in the digital environment, like gravity, collisions, and fluid dynamics. <br/>
AI:  <br/>
Artificial Intelligence capabilities in the simulation, allowing for intelligent behaviors and decision-making in virtual entities. <br/>
Animation: <br/>
The process of creating motion for characters and objects within the simulation environment. <br/>
Behavior:  <br/>
Refers to the simulation of complex actions and reactions of entities within the environment, often governed by AI or predefined rules. <br/>
### End Users <br/>
When encountering the Omniverse as an End User, one can simplify the conceptual organization to Platform, Apps and Connectors. Experiences are assembled as collections to create packages that resolve into coherent industry specific workflows.<br/>
Footnote <br/>
Platform:  <br/>
This is the core of the Omniverse system. It includes the foundational technologies and services that everything else builds on. The Platform would involve things like the Nucleus for data management and collaboration, and the RTX Renderer for realistic graphics. <br/>
Apps:  <br/>
Specialized software applications within the Omniverse ecosystem. Each app is designed for a specific task or set of tasks, like creating 3D models, animating characters, or simulating physical phenomena. Examples might include design tools, visualization apps, or simulation software. <br/>
Connectors: <br/> 
Connectors are essentially bridges that link the Omniverse platform to other software tools. They allow you to integrate the Omniverse with different software applications, so you can use all your favorite tools together seamlessly. For example, a connector might let you import a 3D model from a popular design software right into an Omniverse app.  <br/>
-You can combine different apps and connectors in a package that's tailored to specific industry needs or workflows.   <br/>
Ex. In the architecture industry, a package might include apps for designing buildings, connectors to import models from architectural software, and tools to simulate lighting and materials realistically. This approach allows the Omniverse to be very versatile and adaptable to different professional fields.  <br/>
In order to facilitate the need for a variety of content, Omniverse has an ever expanding list of connectors which plug-in to deliver content directly from source DCC tools. <br/> 
![NvidiaOmniverse1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f2b17101-dd19-4c09-9e8a-578e6eb2ab45)  <br/>
Connectors (Left Sphere): <br/>
This globe-like structure represents the "Connectors" which are the bridges between various third-party applications (like Maya, 3DS Max, Revit, SketchUp, Substance, Unity, Unreal Engine 4, Grasshopper, Rhino, Houdini) and the Omniverse platform. These connectors allow users to import, export, and synchronize their work between these different software tools and Omniverse, facilitating a seamless workflow.<br/>
Omniverse Nucleus (Center Core): <br/>
The core in the middle symbolizes the Omniverse Nucleus, which is the heart of the collaboration and data management within the Omniverse platform. It functions like a centralized server where all the data is stored and managed, allowing for real-time collaboration and updates across different applications and devices. <br/>
Omniverse Platform (Right Segment): <br/> 
The segment on the right lists various Omniverse Apps, which are specialized applications designed for different tasks within the Omniverse platform. These apps include VIEW, CREATE, CODE, MACHINIMA, ISAAC, FARM, XR, and AUDIO2FACE, each serving specific functions such as viewing 3D scenes, content creation, coding, animation, simulation, rendering, extended reality, and audio-driven animation respectively. <br/>
The image overall conveys how the NVIDIA Omniverse connects different software tools (via Connectors) to a centralized system (Nucleus), which then integrates with various dedicated applications (Omniverse Apps) for a range of tasks, all within the Omniverse Platform. This represents a unified and collaborative environment for real-time simulation and content creation across multiple industries.<br/>
![NvidiaOmniverse2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2081675b-cee4-43fe-a4c9-07051b4e8d44) <br/>
Illustrate the architecture or flow of operations within the NVIDIA Omniverse ecosystem.<br/>
Connectors: These are plugins or interfaces that allow external applications and tools to connect and communicate with the Omniverse platform. They serve as the entry points for data and assets to be brought into the Omniverse ecosystem from other software environments. <br/>
**Omniverse**: Core of the platform. <br/>
Microservices: Small, independent processes that perform specific tasks. In the context of Omniverse, they might handle particular aspects of the simulation, rendering, or data management. <br/>
Renderer StreamSDK Web RTC: Streaming capabilities of the Omniverse's rendering engine, which can deliver real-time graphics over the internet. "StreamSDK", a software development kit related to this streaming capability, and "Web RTC"(Web Real-Time Communication) a technology that enables real-time communication directly in web browsers. <br/>
-Kit: Omniverse Kit, a toolkit for developers to build and customize applications within the Omniverse platform.  <br/>
-Nucleus: Central collaboration and data exchange hub of the Omniverse platform. It manages and stores the data assets and allows for real-time updates and collaboration across different software tools and users.  <br/>
Destination: Output or the end-use scenarios for the assets or experiences created within Omniverse. <br/>
-AR/VR: Augmented Reality/Virtual Reality, indicating that the content can be used for immersive experiences.   <br/>
-Browser: This suggests that content can be deployed and viewed through web browsers. <br/>
-Streaming Client: This implies that there is a capability to stream content to remote clients, which could be software or hardware devices, enabling users to view and interact with Omniverse content without needing to have the full platform on their local machines. <br/>
Flow of data and interaction, starting from external tools connecting through **Connectors**, processing and management happening within **Omniverse**, and then the final output being delivered to various **destinations** for use or display. This image encapsulates how the Omniverse platform functions as a collaborative environment for real-time simulation and content creation, with the ability to distribute the results across different mediums and devices. <br/>
### Kit Stack
NVIDIA Omniverse™ Kit : Stack of assemblies, apps, extensions, microservices, core extensions and of course Kit itself. <br/>


Representation of the NVIDIA Omniverse™ Kit for developers, showing how different components are organized within the Kit's architecture, referred to as the "Kit Stack." <br/>
Kit: At the base of the stack, "Kit" refers to the core software development framework or environment of the Omniverse platform. Foundational layer that everything else is built upon. <br/>
Core Extensions: Moving up the stack, these are fundamental add-ons or plugins that extend the capabilities of the Omniverse Kit. They might include basic tools for creating and manipulating 3D content, like mesh editing or texture application, and support for Universal Scene Description (USD), NVIDIA PhysX for physics simulations, RTX for rendering, and Python (PY) scripting.  <br/>
Extensions: These are the additional plugins or modules that developers can use or create to add specific functionality to Omniverse applications. They are built on top of the core extensions and can be highly specialized. <br/>
Assemblies: Collections of extensions that work together to perform more complex functions or to streamline workflows for specific tasks.  <br/>
Microservices: Independent, small-scale services that perform specific tasks and can communicate with each other. They can be used to add or enhance functionality within the Omniverse ecosystem. <br/>
Apps: On the top of the stack, Full-fledged applications built using the Omniverse Kit, core extensions, and additional extensions. These applications can be tailored to various use cases or industry needs. <br/>
Image underscores the modular nature of the Omniverse Kit, where you can start with a robust foundation and build up with additional layers of functionality to create complex applications tailored to specific requirements. Each layer adds more tools and features, offering developers the flexibility to develop a wide range of 3D simulation and visualization applications within the Omniverse ecosystem. <br/>
Reference <br/>
https://docs.omniverse.nvidia.com/platform/latest/index.html   <br/>
https://docs.omniverse.nvidia.com/platform/latest/structure.html  <br/>
