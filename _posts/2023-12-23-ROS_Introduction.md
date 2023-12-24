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

### Overall Framework of "What is ROS2?" 
This content is a consolidated summary and organized notes from the YouTube video available at https://www.youtube.com/watch?v=7TVWlADXwRw.<br/>


Reference: <br/>
https://cafe.naver.com/openrt/23889 <br/>
https://cafe.naver.com/openrt/23965 <br/>
https://www.dds-foundation.org/what-is-dds-3/ <br/>
https://www.youtube.com/watch?v=7TVWlADXwRw <br/>
