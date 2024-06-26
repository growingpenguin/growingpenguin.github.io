---
layout: post
title:  "1. Build ROS Environment"
---
## 1. What is ROS2?
ROS2(Robot OS):  <br/>
Open-source software development kit for robot applications(로봇 응용 프로그램) <br/>
-Purpose of ROS 2: To provide a standard software platform for developers across the robotics industry, from research and prototyping to deployment and production. <br/>
-Built on the success of ROS 1, which has been used in numerous robot applications worldwide, and over a decade of experience since its inception in 2007. <br/>
-ROS 2, while sharing the same basic concepts as ROS 1, is a completely new and rewritten software platform. It is not compatible with ROS1 and represents a new version of the ROS system.  <br/>
-ROS 2 is a next-generation version of ROS, developed separately from ROS 1. ROS 1 is still available and can be used if needed. It's also possible to use both versions together, as they can communicate with each other through ros1_bridge, allowing for message communication between ROS 1 and ROS 2  <br/>
 <br/>
## 2.Ros Features <br/>
(1)**Platform**: ROS 2부터는 3대 운영체제인 Linux, Windows, macOS를 모두 지원 <br/>
(2)**Real-time**: ROS 2 supports Real-time functionality. However, this support is based on certain conditions, such as using selected hardware(선별된 HW), employing a Real-time os, utilizing communication protocols(통신 프로토콜) like DDS's RTPS(Real-time Publish-Subscribe Protocol), and assuming the use of very well-written real-time code." <br/>
(3)**Security**:<br/>
TCP-based Communication using DDS: <br/>
ROS2 uses a system called DDS(Data Distribution Service) for communication. DDS(Data Distribution Service) is a framework used in the industry for managing data flow in networks, particularly in complex systems like robotics. It's based on TCP(Transmission Control Protocol), a standard way computers send data to each other over a network. By using DDS, ROS2 can handle data exchange more efficiently and reliably, which is crucial for robotic systems.<br/>
DDS-Security for Enhanced Security: <br/> 
Along with DDS, ROS2 also integrates something called DDS-Security. This is a set of security specifications designed to protect the data being shared in a DDS network. By incorporating DDS-Security, ROS2 addresses potential security risks right from the communication level, ensuring that data exchange in robotic systems is secure. <br/> 
Development of SROS2 for Additional Security: <br/> 
The ROS community has developed a tool called SROS2 (Secure Robot Operating System 2). This tool provides additional security features and supports for ROS2. It's particularly helpful for robotics developers who might not be very familiar with security programming. SROS2 offers a toolkit that makes it easier for them to implement security measures in their robotic systems. <br/> 
(4)**Communication**: <br/>
In ROS1, a self-developed communication library like TCPROS was used. In contrast, ROS2 uses DDS(Data Distribution Service), a communication middleware that supports the RTPS (Real Time Publish Subscribe) protocol for real-time publish and subscribe. <br/>
(5)**Middleware interface**: <br/>
The previously mentioned DDS is offered by various companies in the form of Communication Middleware. In ROS 2, users can choose and use these vendors' middleware according to their intended use, supported in the form of ROS Middleware (RMW). This allows ROS2 users to easily switch and use different vendors' middleware without having to worry about slight differences in their APIs. RMW provides an abstracted interface for the APIs to support various DDS implementations. <br/>
Communication Middleware?:  <br/>
Communication middleware like DDS is a software layer that helps different components of a system (like a robot's sensors, actuators, and control systems) to  communicate with each other. Think of it as a translator or a facilitator that ensures different parts of the system can exchange information effectively.  <br/>
(6)**Node manager(Discovery)** <br/>
In ROS1, the essential program to run is roscore, which upon execution starts the ROS Master, ROS Parameter Server, and rosout logging node. In ROS 1, a name service had to be run from the master to establish connections between nodes, and if this ROS Master was disconnected or failed, it led to the paralysis of the entire system. In ROS 2, roscore has been eliminated, and these three programs now operate independently. <br/>
ROS Master: <br/>
Directory service. Helps different parts of the ROS system (called 'nodes') find and communicate with each other. <br/>
ROS Parameter Server:  <br/>
Stores parameters that nodes can use, like configuration settings.
rosout Logging Node:  <br/>
System for logging messages from different nodes. <br/>
(7)**Languages** <br/>
As for ROS2's programming language, it is about to support different programming languages. C++, Python is the main force language.  <br/>
(8)Build system <br/>
ROS2 uses a new built system ament. ament is an upgraded version of catkin. It is also possible for Python package administration that CMake doesn't uses <br/>
(9)**Build tools** <br/>
As for ROS 1, different tools like catkin_make, catkin_make_isolated, and catkin_tools was supported. In ROS 2, alpha, beta, and Ardent release, ament_tools was used as a building tool and now it is recommending colcon as well. <br/> 
(10)**Build options** <br/>
The best used build options used were `Multiple workspace`, `No non-isolated build`, and `No devel space`. <br/>
(11)**Version control system** <br/>
ROS has numerous code set, so it has different parties, and repositories. <br/>
(12)**Client library** <br/>
Writing programming based on ROS(Robot Operating System) means dealing with the user code area(user land) within the ROS structure. Underneath this user code area lies the ROS Client Library(ROS 클라이언트 라이브러리), and this client library utilizes the middleware interface(미들웨어) as previously described. <br/>
(13)**Life cycle** <br/>
In robot development, understanding the current state of a robot and controlling the transition to different states has been a major research topic in robotics for decades. Recognizing the current state and managing transitions is an essential part of performing multitasking. Reflecting these needs, ROS 2 has included in its client library the ability to monitor and control the states of each node within a package, known as lifecycle management. This allows for more effective control of the ROS system's state. Utilizing this feature, one can monitor and transition the state of nodes, something that was not possible in ROS 1. It also allows for restarting or replacing nodes based on their state.<br/>
(14)**Multiple nodes** <br/>
In ROS2, nodelets are not used and are instead included in RCL(ROS Client Library). They are referred to as 'components,' and in ROS2, these components allow multiple nodes to be executed within the same executable file. Using this approach, the granularity(세분화) of node executable files can be further refined. Additionally, it enables the use of intra-process communication(프로세스 내 통신) features, allowing for the elimination of communication overhead in ROS 2. This makes it possible to write more efficient ROS 2 applications." <br/>
(15)**Threading model** <br/>
In ROS 2, a more refined execution model (executor) is available for use in both C++ and Python, and custom executors can also be easily implemented using the provided RCL (ROS Client Library) API. <br/>
(16)**Messages(topic, service, action)** <br/>
In ROS 2, a single data structure is also defined as a message. It's possible to use predefined or user-defined messages, and similar to package names, messages can be uniquely identified by their name and the specified type. Moreover, ROS 2 uses the IDL (Interface Description Language) defined by OMG (Object Management Group) to make message definition and serialization easier and more comprehensive.  <br/>
(17)**Command Line Interface(CLI)** <br/>
It is very similar to the original ROS 1, so there are no significant differences in usage once you get accustomed to a few name changes and learn how to use some of the options. <br/>
(18)**roslaunch** <br/>
The execution system in ROS typically has run and launch.  <br/>
-run is for executing a single program, while launch performs the execution of user-defined programs. <br/>
-One of the advantages in ROS 2 is the ability to use various file types. In addition to the XML format, Python has been newly adopted in ROS 2. This allows for the use of conditional statements and Python modules, enabling more complex logic and functionality. <br/>
(19)**Graph API** <br/>
In ROS2, not only at the start of a node but also during execution, it is possible to remap the unique names of each node, topic, and message. There is also an intention to represent these results immediately in a graphical form. However, as of now, this is only a development concept and has not yet been implemented. It is hoped to be implemented soon. <br/>
(20)**Embedded Systems** <br/>
Real-time capabilities pose significant constraints when addressed at the higher software level. Instead, it is considered more appropriate to handle real-time requirements within Embedded Systems. <br/>
-In ROS 2, support is provided for traditional serial communication, Bluetooth, and Wi-Fi communication. Alternatively, developers can directly program ROS on embedded boards, using a Real-Time Operating System(RTOS) or opting for eXtremely Resource Constrained Environments (DDS-XRCE) instead of the conventional DDS. This approach allows the execution of nodes implemented in hardware firmware(하드웨어 펌웨어). <br/>

## 3. ROS 2 and DDS (Data Distribution Service)
### 3-1.ROS Message Communication <br/>
In ROS (Robot Operating System), programs are written in units of **nodes**, which are defined as the smallest executable processors for maximizing program reusability. Think of a **node** as a single executable program. A **package** is a collection of one or more nodes or information necessary for node execution, and a group of packages is referred to as a **metapackage**, which is separately categorized. <br/>
-The actual executable program, the **node**, is crucial in ROS. Since ROS divides programs into the smallest executable units, each **node** is its own separate program.  <br/>
-For a ROS system with numerous interconnected nodes, it's essential to design these nodes to exchange input and output data with each other.  <br/>
-The data exchanged between nodes in ROS is referred to as a **message**, and this process is called **message communication**. <br/>
-**Messages** correspond to data and can be in variable forms like integer, floating point, boolean, string, etc. They can also include simple data structures like messages within messages, and arrays of messages. <br/>
-The method of communication using **messages** is categorized into topics, services, actions, and parameters. <br/>
![ROS2 Packages Installation32](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/89eac378-49e7-49f6-ab93-f3310f6a2a8a) <br/>
Footnote <br/>
Processor? <br/>
A processor, also known as a central processing unit (CPU), is a key component of a computer that performs most of the processing tasks within the system. It acts as the "brain" of the computer, executing instructions from a computer program by performing basic arithmetic, logic, control, and input/output (I/O) operations.<br/>
-The processor interprets and carries out instructions stored in the computer's memory, manipulating data to produce the desired output. It plays a critical role in determining a computer's overall performance, and its speed is often measured in GHz(gigahertz), indicating the number of cycles it can execute per second..<br/>

### 3-2.ROS 2 and DDS 
-In ROS (Robot Operating System), the method of communication using **messages** is categorized into topics, services, actions, and parameters. While each method of **message communication** serves different purposes and is used differently, they all apply the concepts of **publishing**(sending out information) and **subscribing**(receiving information). <br/>
-This concept of **publishing**(sending out information) and **subscribing**(receiving information) data remains a very important concept in both ROS 1 and ROS 2, but the communication libraries used for this technology differ between the two versions. In ROS 1, custom-developed communication libraries like TCPROS were used. On the other hand, ROS 2 employs a standardized communication method by the Object Management Group (OMG), namely DDS (Data Distribution Service). Specifically, ROS 2 uses DDSI-RTPS (Real Time Publish Subscribe), a real-time publish-subscribe protocol of DDS. <br/>
-During the early development of ROS 2, there were proposals to improve the existing TCPROS or use **middleware-like approaches** with ZeroMQ, Protocol Buffers, and Zeroconf. However, the importance of adopting a standardized method for the industrial market was emphasized. Instead of creating a proprietary solution as in ROS 1, it was decided to use DDS, which was already establishing an industry standard and an ecosystem. The adoption of DDS significantly changed the layout of ROS, as illustrated in Figure 2. <br/>
Figure 2: Structural Evolution in ROS with the Adoption of DDS <br/>
![ROS2 Packages Installation33](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f3ee39ce-2383-4492-b6f1-a3175f72db84) <br/>

-With the introduction of DDS(Data Distribution Service) in ROS 2, it became possible to handle message definition and serialization(직렬화) more easily and comprehensively. This is due to the use of IDL(Interface Description Language), which has been used since the days of OMG's CORBA. Additionally, by adopting the DDSI-RTPS(Real Time Publish Subscribe) communication protocol, which includes the concepts of DCPS(Data-Centric Publish-Subscribe) and DLRL(Data Local Reconstruction Layer), ROS 2 ensures real-time data transmission and becomes suitable for use in embedded systems. <br/>
-The use of DDS supports dynamic discovery of nodes, which means that unlike ROS 1, where ROS Master managed the information of each node, various DDS programs can communicate without the need for a ROS Master. Furthermore, DDS allows for detailed adjustment of data communication between nodes through QoS (Quality of Service) settings. This means that you can configure communication to prevent data loss like TCP or prioritize communication speed like UDP. <br/>
The adoption of DDS, particularly DDS-Security, has also brought significant benefits in terms of security for industrial use. With these various features of DDS, ROS 2 not only enhances publish-subscribe style message delivery from ROS 1 but also strengthens real-time data transmission, response to unstable networks, and security. <br/>
The adoption of DDS is one of the most significant changes in the transition from ROS 1 to ROS 2. As illustrated in Figure 3, it reduces the development and usage burden of **communication middleware** for developers and users, allowing them to devote more time to more critical aspects of their work. For more detailed information about DDS, refer to the resources and related articles mentioned in the text.  <br/>
Figure 3: Ease of the Programmer or User's DDS use <br/>
![ROS2 Packages Installation34](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6a491333-581b-434b-aa49-749dc426dac8) <br/>


### 3-3.What is DDS? 
DDS: Stands for Data Distribution Service, a trademark established by OMG (Object Management Group) as a standard term. Essentially, it's just a term, but its actual substance is middleware for data communication. <br/>
-Understanding the essential concepts required for ROS programming should suffice. <br/>
​-The Data Distribution Service(DDS) is a middleware protocol and API standard for data-centric(데이터를 중심으로 연결성을 갖는) connectivity from the Object Management Group® (OMG®). It integrates the components of a system together, providing low-latency data connectivity, extreme reliability, and a scalable architecture that business and mission-critical Internet of Things (IoT) applications need. <br/>
-In essence, DDS represents the concept of a Data Distribution System. In practical terms, it comprises middleware APIs that satisfy DDS specifications (such as DDSI-RTPS). This middleware corresponds to the host layers (layers 4 to 7) in the ISO 7-layer model. In ROS 2, as mentioned earlier and illustrated in Figure 3, this middleware acts as a software layer between the operating system and user applications. Through this, it enables the various components of the system to communicate more easily and share data. <br/>
Figure 4: DDS as middleware <br/>
![ROS2 Packages Installation35](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/171c1830-d86f-4025-af80-26346b19dc76) <br/>
<br/>
Footnote <br/>
Middleware: <br/>
Software layer that lies between the operating system and applications. It enables the various components of a system to more easily communicate and share data. It simplifies the development of distributed systems by letting software developers focus on the specific purpose of their applications rather than the mechanics of passing information between applications and systems. <br/>
## 4. Feature of DDS 
There are ten major advantages by using DDS(Data Distribution Service) as middleware in ROS 2. <br/>

### 4-1.Industry Standards
DDS, established by the non-profit organization Object Management Group(OMG: 객체 관리 그룹) in 1989 to standardize technologies for distributed objects, has solidified its position as an industry standard. OMG has previously led ISO-approved standards for UML, SysML, CORBA, and others. The standardization efforts for DDS, initiated in 2001, have progressed well, and today, it serves as the foundation for industry standards in systems like OpenFMB, Adaptive AUTOSAR, MD PnP, GVA, NGVA, and ROS 2. <br/>
-While TCPROS in ROS 1 had the distinctive characteristic of being its own middleware, the adoption of DDS in ROS 2 has broadened its applicability, aligning with industrial standards. This transition positions the Robot Operating System (ROS) as a solid foundation for expansion into diverse fields such as IoT, automotive(자동차), defense(국방), aerospace(항공), and space exploration(우주 분야). <br/>

### 4-2.OS Independent
DDS supports a variety of os, including Linux, Windows, macOS, Android, VxWorks, etc. Therefore, users do not need to change the os they are currently using. This makes DDS very suitable for ROS 2, which is based on the concept of supporting multiple operating systems."  <br/>

### 4-3.Language Independent
Since DDS (Data Distribution Service) is middleware, at the user code level, which can be seen as a higher level, there is no need to change the programming language that was previously used to utilize DDS. This feature is fully leveraged in ROS 2, where DDS has been designed as RMW (ROS Middleware), as shown in Figure 6. Different RMWs have been developed for each vendor. On top of this, to support user code, a ROS Client Library (ROS Client Library) has been developed that supports various languages like rclcpp, rclc, rclpy, rcljava, rclobjc, rclada, rclgo, rclnodejs, and others, thereby providing support for multiple programming languages.  <br/>
Figure 6: ROS's RMW, RCL, User Application <br/>
![ROS2 Packages Installation36](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1de70f2e-8d0b-44ba-8367-e53f2747867e) <br/>
Footnote <br/>
-DDS as Middleware:  <br/>
DDS, or Data Distribution Service, is a type of software that helps different parts of a system, like a robot, to communicate with each other. Being middleware means it works in the background, connecting various components without interfering with the main programming that developers do.
-No Need to Change Programming Language: <br/>
One key advantage of DDS is that it doesn't require developers to change the programming language they are already using. Since DDS operates at a level above the user's code (like a helpful assistant working behind the scenes), developers can continue using whatever programming language they are comfortable with.
-Integration in ROS 2:  <br/>
In ROS 2 (Robot Operating System version 2), DDS is used as RMW (ROS Middleware). This means it's specifically tailored to help different parts of a ROS-based system communicate seamlessly.  <br/>
-Different RMWs for Different Vendors:  <br/>
Since different companies (vendors) might have slightly different requirements or systems, different versions of RMW have been developed to cater to these variations. <br/>
-ROS Client Library for Various Languages:  <br/>
On top of DDS and RMW, ROS 2 also provides a ROS Client Library. This library supports multiple programming languages like C++, Python, Java, Objective-C, Ada, Go, Node.js, etc. The purpose of this library is to make it easier for developers to write their code in the language they prefer while still being able to use all the functionalities of ROS 2. <br/>

### 4-4.Transport on UDP/IP
Typically employs a reliable multicast(신뢰성 있는 멀티캐스트) over UDP, allowing systems to efficiently leverage the advantages of modern networking infrastructure. This shift to UDP-based multicast is a significant departure from TCPROS in ROS 1, which was TCP-based. Like broadcast, UDP multicast enables simultaneous data transmission to multiple destinations, but specifically within a defined domain group rather than an unspecified destination.(In ROS 2, the domain is set using the ROS_DOMAIN_ID environment variable) <br/>
-With the introduction of this multicast approach, ROS 2 enables subscription and publication for topics in the DDS Global Space, referred to as the global space(전역 공간). UDP, being a best-effort protocol, has its pros and cons compared to the reliable TCP, but these are addressed and complemented through Quality of Service (QoS), which will be explained later.


### 4-5.Data Centricity
While there are various middleware options, one commonly heard phrase, especially when using DDS, is **Data Centric**(데이터 중심적). The DDS specification(사양) introduces the concept of DCPS(Data-Centric Publish-Subscribe), aiming to efficiently deliver appropriate information to the suitable recipients through a publication(발간) and subscription(구독) method. From a user's perspective using DDS middleware, functionalities related to understanding the type of data, its format, how to send it, and how to securely transmit it are integrated into the DDS middleware. <br/>
Figure7: Visualization of Data Centricity <br/>
![ROS2 Packages Installation37](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0c235586-af3c-4ef3-ad97-d7417253c5d4)

### 4-6.Dynamic Discovery
:DDS(Data Distribution Service) provides dynamic discovery. Meaning that applications can use DDS's dynamic discovery to know which topics are in a specified domain area and which nodes are publishing and subscribing to these topics.  <br/>
-This feature eliminates the need to pre-enter IP addresses and ports of the nodes exchanging data in ROS programming, or to configure them separately. It also makes it unnecessary to consider the differences in system architecture, allowing for easy operation across all operating systems or hardware platforms. <br/>
-In ROS 1, the ROS Master provided name specification and registration services for the nodes of the ROS system, and information that allowed each node to find and connect to the messages they were publishing or subscribing to. In other words, it played a very important role in managing the information of independently running nodes and providing this information to the nodes that needed to connect to each other.  <br/>
-Problem:If this ROS Master was disconnected or failed, it could paralyze the entire system.  <br/>
-Solution: In ROS 2, with the elimination of the ROS Master and the use of DDS's dynamic discovery feature, nodes are treated as Participants in DDS. Using the dynamic discovery feature, nodes can be directly searched and connected through the DDS middleware."  <br/>

### 4-7.Scalable Architecture
:The DDS (Data Distribution Service) architecture by OMG (Object Management Group) is designed to be scalable, extending from small devices like IoT devices to mega-systems in infrastructure, defense, aviation, and space industries. <br/>
-However, it is not complicated to use. The Participant type of node in DDS is provided in an extensible format and is designed to absorb much of the complexity in a single standard communication layer, thereby simplifying the development of distributed systems and enhancing convenience. <br/>
-Particularly in systems like ROS, where hundreds or thousands of nodes are divided into the smallest executable units, this aspect is seen as a strength. It is a very suitable feature for ROS systems that need to manage not just a single robot but multiple robots, integrate with surrounding infrastructure, various IT technologies, databases, and expand to cloud connections." <br/>

### 4-8.Interoperability(상호 운용성)
:In ROS 2, DDS (Data Distribution Service), which is used as the communication middleware, supports interoperability. 
-If a vendor's product complies with the standard specification of DDS, it is possible to switch from a product of company A to that of company B, or to mix products from both companies and still have their DDS products communicate with each other.  <br/>
-Currently, there are 10 DDS vendors, out of which 5 support ROS 2. These include ADLink, Eclipse Foundation, Eprosima, Gurum Network, and RTI. The DDS products from these vendors are ADLINK's OpenSplice, Eclipse Foundation's Cyclone DDS, Eprosima's Fast DDS, Gurum Network's Gurum DDS, and RTI's Connext DDS. Among these, Fast DDS and Cyclone DDS are oriented towards open source and can be freely used. For higher performance, commercial products like OpenSplice, Connext DDS, and Gurum DDS can be utilized. It is worth noting that Gurum Network is the only company from South Korea in this list and has successfully commercialized DDS as a purely domestic technology.  <br/>

### 4-9.Quality of Service (QoS)
:In ROS 2, with the introduction of DDS (Data Distribution Service), users can now directly set data transmission and reception settings according to their needs. One such setting is QoS (Quality of Service), which allows users to configure DDS communication options between nodes. QoS can be used like a parameter when declaring and using publishers and subscribers.  <br/>
-There are 22 configurable QoS items in DDS specifications, and in ROS 2, the reliability(신뢰성) feature is commonly used. This feature prioritizes data integrity to prevent loss (similar to TCP) or prioritizes communication speed (like UDP) in a 'best effort'(최우선시하여 사용) manner.   <br/>
-Other features    <br/>
History function : Stores a certain amount of data depending on the communication status(정해진 사이즈); <br/>
Durability function : Determines whether to use or discard data created before the subscriber is created; <br/>
Deadline function : Triggers an event function if data is not sent or received within a set period; <br/> 
Lifespan function : Considers data received within a certain period as valid and discards the rest; <br/>
Liveliness function : Checks the life or death of nodes or topics within a set period.  <br/>
-Through these various QoS settings, DDS allows users to control all aspects of data exchange(데이터를 주고받는), such as timeliness(적시성), traffic priority(트래픽 우선순위), stability(안정성), and resource usage(리소스 사용). This becomes especially useful in specific situations, such as when exchanging data at very high speeds or in dynamic, challenging, and unpredictable communication environments. Different options in data transmission and reception can help achieve goals or overcome obstacles in these scenarios.  <br/>
-This part related to QoS is very important in actual coding, as it involves various aspects like reliability, History, Durability, Deadline, Lifespan, Liveliness, etc. Hence, it will be further elaborated and practiced in future tutorials." <br/>

### 4-10.Security
:One of the major shortcomings in ROS 1, the security aspect, has been addressed in ROS 2 development through the adoption of DDS. <br/>
-The DDS specification includes DDS-Security, a security specification applied to ROS, resolving security issues from the communication layer. Furthermore, the ROS community has developed a tool called SROS 2 (Secure Robot Operating System 2), providing security support in RCL and distributing a toolkit for security aimed at robotics developers unfamiliar with security-related programming. <br/>

## 5.Instructions for ROS2
### 5.1 Running Basic Publisher and Subscriber Nodes <br/>
When following run commands are executed in two separate terminal windows, the listener node acts as a subscriber and the talker node acts as a publisher running respectively. The fact that these two nodes are running means they are already using the specified DDS, i.e., RMW (ROS middleware). <br/>
By executing rqt_graph, you can confirm the running publisher and subscriber nodes as shown in Figure 9, and you can verify that topics are being exchanged between the two nodes. <br/>
Execution of nodes within ROS, a framework for writing robot software, and mentions a visualization tool(rqt_graph) that helps to confirm the communication between these nodes. <br/>
Terminal1: Publisher <br/>
![NvidiaOmniverse3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1ef41435-b81a-46a6-a6c2-6c37901904d3) <br/>
Terminal2: Subscriber <br/>
![NvidiaOmniverse4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cfc7075f-009c-46f0-9ff7-8b86910fc237) <br/>
Terminal3: <br/>
![NvidiaOmniverse5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f3aa1a2b-c7e1-4175-a632-a6bd02e1415c) <br/>

-Right after executing the listener node, it waits until the talker node starts running. Once the talker node begins and starts sending messages, the received [Hello World: n] is displayed. <br/>
-For reference, to terminate each node in the terminal, you can press Ctrl + C to exit.​ <br/>
### 5.2 How to Change RMW <br/>
In the example 5.1 above, no specific settings for RMW (ROS Middleware) were made.​ <br/>
So rmw_fastrtps_cpp, the default RMW of ROS 2 Foxy, was used. If you want to change and use a different RMW, you can select one from the ROS 2 supported RMWs and declare it as an environment variable RMW_IMPLEMENTATION, then execute the node. <br/>
Example: Instead of the default RMW, we will try running each node using rmw_cyclonedds_cpp. If executed as below and everything works fine, it means the RMW has been successfully changed. <br/>
(Note that Fast RTPS was renamed to Fast DDS from version 2.0. However, be aware that the current version still uses the name Fast RTPS. It is expected to be changed in the future.) <br/>
ROS2 Supported RMW: rmw_connext_cpp, rmw_cyclonedds_cpp, rmw_fastrtps_cpp, rmw_gurumdds_cpp, rmw_opensplice_cpp <br/>
Footnote: <br/>
RMW :"ROS Middleware", a crucial component in ROS 2's architecture, serving as the abstraction layer that connects the ROS applications with the underlying communication middleware <br/>
Abstraction Layer: RMW provides an interface between the higher-level ROS functionalities and the lower-level data transmission services.  This abstraction allows ROS 2 to be flexible in terms of the communication middleware it uses. <br/>
Middleware Compatibility: Different middleware technologies can be used for data transmission in ROS 2. These include DDS (Data Distribution Service) implementations like Fast RTPS, CycloneDDS, and others. RMW acts as a bridge between ROS 2 and these middleware implementations.<br/>
Interchangeability: One of the key features of RMW is that it allows for the interchangeability of middleware. This means that developers can switch between different middleware implementations without having to make significant changes to their ROS 2 applications. This switch is made possible by setting the RMW_IMPLEMENTATION environment variable to the desired middleware implementation. <br/>
Facilitates Communication: RMW handles the details of the data communication, such as message passing, service calls, and action communication, abstracting these complexities away from the developers. <br/>
RMW in ROS 2 is a critical layer that enables the system to use various communication middleware options flexibly and interchangeably, thereby enhancing the system's adaptability and efficiency in data communication. <br/>
![NvidiaOmniverse6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/57503c55-4082-4457-bd70-ca31eeccd664)  <br/>
![NvidiaOmniverse7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ac0f230f-ec75-400c-ba2f-edd3bda9e930)  <br/>
### 5.3 RMW Interoperability Test(상호 운용성 테스트)
:If you want to test the "4.8 Interoperability of DDS" as described above by changing the RMW, you can choose one of the RMWs that support ROS 2 and declare it as the RMW_IMPLEMENTATION environment variable differently for each node. <br/> 
Ex. We will test the open-source "rmw_cyclonedds_cpp" and "rmw_fastrtps_cpp" which are freely available. As shown below, it can be confirmed that communication was successful without any issues, even though the listener node and talker node used different RMWs. <br/>
rmw_cyclonedds_cpp <br/>
![ROS2 Packages Installation38](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/88caacd0-a15c-4f62-8e2d-e364d3de50f5) <br/>
rmw_fastrtps_cpp <br/>
![ROS2 Packages Installation39](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/65cd8d8b-71f6-4b35-90b7-6c9be33c3a96) <br/>
### 5.4 Method of Changing the Domain(도메인 변경 방법)
In ROS 2, since communication occurs via UDP multicast as described in 4.4 UDP-based Transmission Method, all nodes in the same network are connected unless a separate configuration is made. <br/>
-Ex. Problem: If you use the same network in the same laboratory, you will be able to access the data of other researchers' nodes. <br/>
Solution: To prevent this, you can use a different network or change the name space. The simplest method is to change the DDS domain. In ROS's RMW, this is referred to as ROS_DOMAIN_ID, and it is set as an environment variable.  <br/>
Let's try running each node on each terminal as follows. Only the talker and listener nodes that have the same ROS_DOMAIN_ID set will be connected and able to communicate with each other. Note that ROS_DOMAIN_ID can have different default values for each RMW, and although it may vary by RMW, it generally can use an integer from 0 to 232.  <br/>
![ROS2 Packages Installation40](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/412b03ef-7ca8-4f92-a585-36b466d46a72) <br/>
![ROS2 Packages Installation41](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1ffb0639-76dc-4a06-91be-cfa82c6a5498) <br/>
![ROS2 Packages Installation42](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5c9b5abb-57aa-44b5-b942-79551dd53237) <br/>

### 5.5 QoS Test(QoS 테스트)
In the previous description 4.9 Quality of Service(QoS), it was explained that "reliability(신뢰성) functions are typically used, which prioritize reliability by preventing data loss like TCP(reliable) or prioritize communication speed like UDP(best effort)." In this example, let's test this feature with a simple test, though not programming. <br/>
In this test, a Linux network traffic control utility called tc(traffic control) was used to create arbitrary data loss (10%) and test the reliability.<br/>
5.5.1 When Reliability is Set to RELIABLE <br/>
The listener node in the demo_nodes_cpp package is set to the default reliability setting of RELIABLE. <br/>
Therefore, even if there is data loss, it retransmits the lost data after each acknowledgment like TCP. <br/>
And as in the example below, there is no data loss. However, you can notice that the terminal window pauses momentarily at the point of loss. <br/> This pause occurs because the lost data is being retransmitted sequentially and then the acknowledgment process is repeated.  <br/>
![ROS2 Packages Installation44](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b60acdcd-c04a-4cf6-b0f3-d38ceb317d70) <br/>
![ROS2 Packages Installation43](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1af2b264-2ea7-4f0a-9a75-b3c7df190742) <br/>
5.5.2 When Reliability is Set to BEST_EFFORT <br/>
This time, we will use the listener_best_effort node from the demo_nodes_cpp package. This node is set to BEST_EFFORT instead of RELIABLE for its Reliability setting.  <br/>
Therefore, as in the following example, although the talker node sends data completely from 1 to 15, the receiving listener_best_effort node displays the data with "2" and "9" missing due to data loss. This is a different result compared to the RELIABLE setting. If the data can tolerate some loss and speed is prioritized over reliability, then setting Reliability to BEST_EFFORT would be appropriate. You will also notice that there is no retransmission, which was the cause of the interruptions in the previous scenario.<br/>
![ROS2 Packages Installation45](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/72b58cb8-6594-4ace-8862-f28147dc5ea2) <br/>
![ROS2 Packages Installation46](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1fbef522-191f-470d-929b-73e95da6e6d9) <br/>
Once all tests are completed, be sure to release the data loss command set to tc through the command below.  <br/>
![ROS2 Packages Installation48](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/335d4dbe-91e3-4374-9269-00f3572cddc8) <br/>

## 6.Package Installation & Node Implementation
### 6-1 What you can learn & Development Environment 
Explore the installation of ROS packages, node execution, and practice running CLI and rqt tools using the turtlesim package in tutorials. <br/>
It's a good idea to synchronize development environments with each other to conduct tutorial-like classes. <br/>
### 6-2 Turtlesim Package Installation
![ROS Introduction1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e725d140-fde2-404b-9f5a-f7b41e44c1d2) <br/>
![ROS Introduction2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cc83d618-d20c-44b6-9332-987f9e9944cf) <br/>

### 6-3 What is Turtlesim?
Turtlesim: Created as a ROS package to provide tutorials for users who are new to ROS, as the source code repository for this package  <br/>
-Was named "ros_tutorials" and it falls under it. Being an educational package for ROS, it allows users to learn the basics of packages, nodes, topics, services, actions, and parameters, and also provides hands-on experience with CLI tools and rqt tools <br/>
-This package has been continuously updated since 2009 and has undergone various changes. It has been specialized as an icon in distribution images across both ROS 1 and 2, continuing to be available up to the current ROS 2 Foxy <br/>
-The name "turtlesim" for this package includes the word "turtle." <br/>
The turtle icon that appears when you run the turtlesim_node node of the turtlesim package, the word "turtle" is also used <br/>

### 6-4 Turtlesim Package and Node 
-In ROS(Robot Operating System), programs are written at the node level, defined as the smallest executable unit to maximize program reusability. You can think of a node as an individual executable program. <br/>
-Package: One or more nodes, along with information required for node execution, are grouped together <br/>
-Metapackage: Collections of packages and are separated as such <br/>
![ROS Introduction3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dbc17f32-f52d-4a44-9cfa-512a3c7b1937) <br/>
Find out which packages are available in your development environment, you can use the following ROS 2 Command Line Interface (CLI) tools.  <br/>
Specifically, running the pkg command in your terminal will list hundreds of packages, including those that are already installed and any packages you have personally created  <br/>
If you have installed turtlesim, it should be included in this list as well  <br/>
![ROS Introduction4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dcc50b9c-38e1-4133-a84d-c29802e2ddca) <br/>
What nodes are included in the turtlesim package. <br/>
By using the following command in the terminal: ros2 pkg executables <package_name>, you can check the multiple nodes included in the turtlesim package. <br/>
There are a total of 4 nodes: draw_square, mimic, turtle_teleop_key, and turtlesim_node. <br/>
Brief description of the role of each node: <br/>
**draw_square**: A node that moves the turtle in a square pattern. <br/>
**mimic**: A node that allows the user to run multiple instances of the turtlesim_node with identical movements on specified topics <br/>
**turtle_teleop_key**: A node that publishes speed values to move the turtlesim_node <br/>
**turtlesim_node**: A simple 2D simulator node that receives speed values from turtle_teleop_key via topics and moves accordingly  <br/>
 
### 6-5 Running Nodes in the Turtlesim Package
Use the run command of ROS 2's Command Line Interface(CLI) to run the most commonly used nodes, turtlesim_node and turtle_teleop_key, among the four nodes <br/>
(1)When you execute the turtlesim_node, you will see a single turtle in a blue window. <br/>
(2)Afterward, if you run the turtle_teleop_key node in another terminal, you will be able to control the turtle in the turtlesim_node window using arrow keys. <br/>
There are more functionalities, which we will delve into in more detail in tutorials covering topics, services, actions, and parameters. <br/>
![ROS Introduction5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/09525491-9b89-4897-834e-524f92f63672) <br/>
![ROS Introduction6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d1b54588-0aa2-4206-a916-dba0bb5b766b) <br/>
Run the turtle_sim node <br/>
![ROS Introduction7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5e6a1847-bd33-4b3c-99e3-b10e6f7c8d54) <br/>
![ROS Introduction8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2bb9e262-daf5-45da-a046-5513a71f906b) <br/>
Run the turtle_teleop_key node <br/>

### 6-6 Querying Nodes, Topics, Services, and Actions
Interaction between the two nodes isn't simply about transmitting keyboard values for movement <br/>
Instead, it involves sending and receiving linear velocity and angular velocity corresponding to the keys pressed on the keyboard in the form of Twist messages from the geometry_msgs package  <br/> 
Be aware! Some users may find they can't move the turtle after running the turtle_teleop_key node. This is because the terminal window where it's running needs to be active to accept arrow key inputs <br/>
Now, let's find out what nodes are currently running, what topics exist, and what services and actions are available.  <br/>
To do this, you can execute the following commands in the terminal: node list, topic list, service list, and action list. 
Results when turtlesim_node and turtle_teleop_key are running <br/>
node list: what nodes are currently running <br/>
![ROS Introduction9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cb36f938-c112-4035-99ba-45f82c179b21) <br/>
topic list: what topics exist <br/>
![ROS Introduction10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4eab5c13-08f5-4070-8d9c-4d99f161608d) <br/>
service list: what services are available <br/>
![ROS Introduction11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1e680d30-3080-4f79-8150-f972f3a3c917) <br/>
action list: what actions are available <br/>
![ROS Introduction12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/05796437-05d6-4d47-b4a8-72e8c02aeb86) <br/>

### 6-7 Viewing the Node and Topic Graph with rqt_graph
Try using a ROS2 GUI tool instead of the ROS2 CLI tool  <br/>
With this tool, you can visually inspect all the nodes, topics, and actions in your current development environment in a graph view.  <br/>
The circles you see in Figure 9 represent nodes, rectangles represent topics or actions, and arrows indicate the direction of message flow.  <br/>
Note that services are not shown here because they are used momentarily when needed, and actions are displayed since they are an application of the Pub-Sub communication method similar to topics. <br/>
![ROS Introduction13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9ff56b22-a14f-4035-b6da-f773eabb1ae0)  <br/>
When you run rqt_graph in the terminal, it will display each node, topic, and action  <br/>

## 8. ROS 2 Topics (topic)
### 8-1. Topic (topic)
Topic: Can be understood as asynchronous(비동기식), unidirectional(단방향) message transmission and reception <br/>
![ROS Introduction14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5e2ea4ed-bd49-4a7e-9f81-aae8cdd14f6c) <br/>
Figure 1: ‘Node A - Node B’ <br/>
Communication between a Publisher, which publishes messages in the form of msg messages, and a Subscriber, which subscribes to these messages <br/>
Primarily 1:1 communication <br/>
![ROS Introduction15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a585ae52-623a-48b3-84f7-8acbb24fe1f1) <br/>
Figure 2: ‘Node A - Node B’, ‘Node A - Node C’ <br/>
Possible to have 1:N communication where one topic (e.g., Topic C) is used for both sending and receiving.  <br/>
-Depending on the configuration, N:1 and N:N communications are also feasible, making it the most widely used method of communication in ROS messaging  <br/>
-It’s not only possible to publish one or more topics, but one can also perform the role of a Subscriber, subscribing to a topic (e.g., Topic D), while simultaneously functioning as a Publisher (e.g. ‘Node A’) <br/>
-One can configure to self-subscribe to the topic they publish <br/>
-Topic function can be used in various ways depending on the purpose, and its flexibility has led to its widespread use <br/>
-In ROS programming, over 70% of communication is done through topics, making it the most fundamental and widely used method. Its basic characteristics include asynchronicity and continuity, making it primarily used for transmitting sensor values and constantly exchanging information <br/>
### 8-2. Checking the Topic List (ros2 topic list)
Learn about topics one by one <br/>
Use the familiar turtlesim_node (node name: turtlesim) from the turtlesim package <br/>
![ROS Introduction16](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/26512ee0-074a-40ca-afe2-064d91b5a78c) <br/>
Run turtlesim_node, you can see the turtlesim <br/>
![ROS Introduction17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b2949ee9-bd59-4420-8d17-ab9ff3da47f9) <br/>
Use the ros2 node info command explained in the last tutorial to check the topic information of the turtlesim_node  <br/>
(node name: turtlesim, hereafter referred to as turtlesim) <br/>
-turtlesim node is subscribing to a message of type geometry_msgs/msg/Twist named cmd_vel, and it's publishing a message of type turtlesim/msg/Color named color_sensor, as well as a message of type turtlesim/msg/Pose <br/>
![ROS Introduction18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7b25864a-313c-46ba-9079-dba001e33d6b) <br/>
ros2 topic list -t: Check the messages more simply <br/> 
-Previous command provided information about the turtlesim node only <br/>
-ros2 topic list -t command allows you to see the topic information of all nodes currently running in your development environment <br/>
-Only the turtlesim node is running, only the messages published and subscribed by the turtlesim node are displayed. The -t option is an additional feature that displays the type of each message <br/>
![ROS Introduction19](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5ecbe7cc-5b14-4707-8722-36628a9f9e4e) <br/>
Currently, since only the turtlesim node is running, there is no situation of topics being exchanged. By executing rqt_graph as shown below, you can confirm in Figure 4: There is no activity of topics being exchanged <br/>
![ROS Introduction20](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3d1eb921-e408-454c-8dda-de2976b18506) <br/>
Additionally run the turtle_teleop_key (node name: teleop_turtle, hereafter referred to as teleop_turtle) <br/>
After running it, if you click the Refresh ROS graph button at the top left of the rqt_graph screen you had open, it will update to the latest state <br/>
![ROS Introduction24](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0d9a3705-448e-460d-b684-26f4f2c14898) <br/>
Figure: teleop_turtle node is publishing the cmd_vel topic, which turtlesim is subscribing to <br/>
![ROS Introduction25](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/98c1ac8a-9b29-455a-a22f-3b24882b9e18) <br/>
Color_sensor and pose topics, which were mentioned earlier, are not displayed here. <br/>
The turtlesim node is publishing these two topics. However, similar to how the cmd_vel topic was not active before executing the teleop_turtle, these topics are not shown because there are no nodes currently subscribing to them.  <br/>
Figure 7: Uncheck Dead sinks and Leaf topics in the rqt_graph screen to display them all.  You can see all topics regardless of whether they have publishing or subscribing nodes <br/>

### 8-3.Checking Topic Information (ros2 topic info)
![ROS Introduction26](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0e45fc46-7157-4e08-a8eb-3fb82c618493) <br/>
In addition to using rqt_graph to check the pub/sub status of a topic, you can also use the ROS 2 CLI tool to check the type of topic messages and information about their publication and subscription. (this command is not frequently used) <br/>

### 8-4.Checking Topic Content (ros2 topic echo)
![ROS Introduction27](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e029f499-067a-4ede-a964-581447d19e31) <br/>
ros2 topic echo : Display the message content of a specific topic in real-time <br/>
By executing the following command and specifying the topic as /turtle1/cmd_vel, you can check the values of this topic.  <br/>
-Note that you must issue commands by pressing the directional keys (←↑ ↓→) in the terminal window where the teleop_turtle node, which publishes the /turtle1/cmd_vel topic, is running, in order to see the topic values.  <br/>
-From the results below, we can see that the /turtle1/cmd_vel topic has linear values of x, y, z, and angular values of x, y, z. It consists of a total of 6 values, and we can confirm that the current linear.x value is 1.0 m/s. <br/>
As a note, all messages use SI units like meter, second, degree, kg, etc., as a standard. We will cover this in more detail in another tutorial.  <br/>

### 8-5.Checking Topic Bandwidth (ros2 topic bw)
![ROS Introduction28](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5b18a86f-47aa-48d5-aed7-27686fa77c72) <br/>
Check the bandwidth of the messages, meaning the size of the topic messages being sent and received  <br/>
-To check the size, you can use ros2 topic bw as shown below to find out the bandwidth per second of the specified topic messages being transmitted  <br/>
-If the teleop_turtle node continuously sends messages, you can see that the /turtle1/cmd_vel topic is used at an average bandwidth of 1.74KB/s <br/>
This can vary depending on the type and frequency of the messages used <br/>
 <br/>
### 8-6.Checking Topic Frequency (ros2 topic hz)
![ROS Introduction29](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f869786c-4e5f-4487-87f3-a1effa9d5409) <br/>
ros2 topic hz command: To check the transmission frequency(전송 주기) of a topic <br/>
-If the teleop_turtle node continuously publishes the /turtle1/cmd_vel topic, the average frequency will be around 33.2 Hz <br/>
This means the topic is being published every 0.03 seconds. The frequency can vary depending on how often the teleop_turtle node publishes the /turtle1/cmd_vel topic <br/>

### 8-7.Checking Topic Latency(지연 시간) (ros2 topic delay)
$ ros2 topic delay /TOPIC_NAME <br/>
average delay: xxx.xxx <br/>
min: xxx.xxxs max: xxx.xxxs std dev: xxx.xxxs window: 10 <br/>
 <br/>
Topics inevitably experience latency due to passing through RMW(ROS Middleware) and network equipment.  <br/>
While users can implement their own code to check this delay, if the message uses a header stamp message,   <br/>
one can use the ros2 topic delay command to calculate the delay by finding the difference between the time the message was published and the time it was subscribed. <br/>

### 8-8.Publishing a Topic (ros2 topic pub)
The publication of a topic (publish) is typically built into a ROS program. We will cover this in ROS programming sessions. <br/>
Here, let's test publishing a topic simply using the ros2 topic pub command. <br/>
The usage of this command is as follows: you just need to specify the topic name, topic message type, and the message content in the ros2 topic pub command. <br/>
ros2 topic pub <topic_name> <msg_type> "<args>" <br/>
To elaborate, you can write it as below. Breaking down the command, the --once option is used to perform only a single publication. <br/>
The topic name used is /turtle1/cmd_vel, and the topic message type is geometry_msgs/msg/Twist. As for the message content, a translational speed of linear.x value 2.0 m/s and a rotational speed of angular.z value 1.8 rad/s are entered.<br/>










### Overall Framework of "What is ROS2?" 
This content is a consolidated summary and organized notes from the YouTube video available at https://www.youtube.com/watch?v=7TVWlADXwRw.<br/>




Reference: <br/>
https://cafe.naver.com/openrt/23889 <br/>
https://cafe.naver.com/openrt/23965 <br/>
https://www.dds-foundation.org/what-is-dds-3/ <br/>
https://www.youtube.com/watch?v=7TVWlADXwRw <br/>
