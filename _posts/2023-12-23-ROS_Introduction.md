---
layout: post
title:  "1. Build ROS Environment"
---
## 1. What is ROS2?
ROS2(Robot OS):  <br/>
로봇 응용 프로그램을 위한 오픈소스 소프트웨어 개발 키트 <br/>
-ROS 2의 목적: <br/>
로봇 산업 전반의 개발자에게 연구 및 프로토 타이핑에서 배포 및 생산에 이르는 표준 소프트웨어 플랫폼을 제공. <br/>
-오늘날 전 세계 수많은 로봇 응용 프로그램에서 사용되는 ROS 1의 성공과 2007년 이후 10년이 넘는 기간동안 쌓은 노하우를 기반으로 함. <br/>
-ROS 2는 ROS 1과 기본 개념은 같지만 완전히 새롭게 처음부터 새로 짠 소프트웨어 플랫폼으로 ROS1과 호환되지 않는 새로운 ROS 시스템 <br/>
-ROS 2는 ROS의 차세대 기능을 도입한 버전으로 ROS 1에서 분리하여 개발. ROS 1 역시 필요하다면 이용 가능. ros1_bridge를 통해 ROS 1과 ROS 2 사이에서 서로 메시지 통신하여 두 버전 모두를 함께 사용하는 것도 가능<br/>
## 2.Ros Features <br/>
(1)Platform:ROS 2부터는 3대 운영체제인 Linux, Windows, macOS를 모두 지원 <br/>
(2)Real-time:ROS 2는 Real-time을 지원. 단, 선별된 HW 사용, Real-time os 사용, DDS의 RTPS(Real-time Publish-Subscribe Protocol)와 같은 통신 프로토콜을 사용, 매우 잘 짜여진 리얼타임 코드 사용을 전제로 실시간성을 지원. <br/>
(3)Security:<br/>
**TCP-based Communication using DDS**: <br/>
ROS2 uses a system called DDS(Data Distribution Service) for communication. DDS(Data Distribution Service) is a framework used in the industry for managing data flow in networks, particularly in complex systems like robotics. It's based on TCP(Transmission Control Protocol), a standard way computers send data to each other over a network. By using DDS, ROS2 can handle data exchange more efficiently and reliably, which is crucial for robotic systems.<br/>
**DDS-Security for Enhanced Security**: <br/> 
Along with DDS, ROS2 also integrates something called DDS-Security. This is a set of security specifications designed to protect the data being shared in a DDS network. By incorporating DDS-Security, ROS2 addresses potential security risks right from the communication level, ensuring that data exchange in robotic systems is secure. <br/>
**Development of SROS2 for Additional Security**: <br/>  
The ROS community has developed a tool called SROS2 (Secure Robot Operating System 2). This tool provides additional security features and supports for ROS2. It's particularly helpful for robotics developers who might not be very familiar with security programming. SROS2 offers a toolkit that makes it easier for them to implement security measures in their robotic systems. <br/> 
(4)Communication: <br/>
ROS 1에서는 자체 개발한 TCPROS와 같은 통신 라이브러리를 사용. 반면, ROS 2은 리얼타임 퍼블리시와 서브스크라이브 프로토콜인 RTPS(Real Time Publish Subscribe, [20])를 지원하는 통신 미들웨어 DDS를 사용하고있다. <br/>
(5)Middleware interface: <br/>
앞서 설명한 DDS는 다양한 기업에서 Communication Middleware 형태로 제공하고 있다. ROS 2에서는 이러한 벤더들의 미들웨어를 유저가 원하는 사용 목적에 맞게 선택하여 사용할 수 있도록 ROS Middleware(RMW)형태로 지원. 이는 각 벤더들의 미들웨어마다 API가 약간씩 달라도 ROS 2 유저들은 이를 생각하지 않고 통일된 코드로 쉽게 바꿔서 사용할 수 있도록 것으로, RMW는 여러 DDS 구현을 지원하기 위하여 API의 추상화 인터페이스로 지원. <br/>
Communication Middleware?:  <br/>
Communication middleware like DDS is a software layer that helps different components of a system (like a robot's sensors, actuators, and control systems) to  communicate with each other. Think of it as a translator or a facilitator that ensures different parts of the system can exchange information effectively.  <br/>
(6)Node manager (Discovery) <br/>
ROS 1에서의 필수 실행 프로그램은 roscore로 이를 실행시키면 ROS Master, ROS Parameter Server, rosout logging node가 실행됨. ROS 1에서는 노드 사이의 연결을 위해 네임 서비스를 마스터에서 실행했었어야 했고, 이 ROS Master가 연결이 끓기거나 죽는 경우 모든 시스템이 마비되는 단점이 있었다. ROS 2에서는 roscore가 없어지고 3가지 프로그램이 각각 독립 수행으로 바뀌었다. <br/>
ROS Master: <br/>
Directory service. Helps different parts of the ROS system (called 'nodes') find and communicate with each other. <br/>
ROS Parameter Server:  <br/>
Stores parameters that nodes can use, like configuration settings.
rosout Logging Node:  <br/>
System for logging messages from different nodes. <br/>
(7)Languages <br/>
As for ROS2's programming language, it is about to support different programming languages. C++, Python is the main force language.  <br/>
(8)Build system <br/>
ROS 2 uses a new built system ament. ament is an upgraded version of catkin. It is also possible for Python package administration that CMake doesn't uses <br/>
(9)Build tools <br/>
As for ROS 1, different tools like catkin_make, catkin_make_isolated, and catkin_tools was supported. In ROS 2, alpha, beta, and Ardent release, ament_tools was used as a building tool and now it is recommending colcon as well. <br/> 
(10)Build options <br/>
The best used build options used were `Multiple workspace`, `No non-isolated build`, and `No devel space`. <br/>
(11)Version control system <br/>
ROS has numerous code set, so it has different parties, and repositories. <br/>
(12)Client library <br/>
ROS 기반의 프로그래밍을 작성한다는 것은 ROS 구조에서 유저 코드 영역(user land)을 다룬다는 것으로 그 밑에는 ROS 클라이언트 라이브러리 (ROS Client Library)이 있고, 이 클라이언트 라이브러리는 앞서 설명한 미들웨어(middleware interface)를 사용. <br/>
(13)Life cycle <br/>
로봇 개발에 있어서 로봇의 현재 상태를 파악하고 현재 상태에서 다른 상태로 변경되는 상태천이 제어는 수십년간 로봇공학에서도 주요 연구 주제로 다루었던 중요한 부분 중에 하나이다. 현재의 상태 파악과 천이는 멀티 태스크 수행에서 빠질 수 없는 중요한 부분이다. ROS 2에서는 이러한 니즈를 반영하여 패키지의 각 노드들의 현재 상태를 모니터링하고 상태를 제어 가능한 lifecycle을 클라이언트 라이브러리에 포함시켰으며 이를 통해 ROS 시스템 상태를 보다 효과적으로 제어 할 수 있게 되었다. 이를 이용하게 되면 기존 ROS 1에서는 할 수 없었던 노드의 상태를 모니터링하고 상태를 천이시키거나 노드를 상태에 따라 재시작하거나 교체할 수도 있게 된다. <br/>
(14)Multiple nodes <br/>
ROS 2에서 nodelet이 사용되지는 않고 RCL에 포함됨. 이름은 컴포넌트(components)라고 부르며 ROS 2에서는 이 컴포넌트(component)를 사용하여 동일한 실행 파일에서 복수의 노드를 수행할 수 있게 되었다. 이를 사용하게 되면 노드의 실행 파일 수준은 더 세분화 시킬 수 있으며 프로세스 내 통신(intra-process communication)기능을 이용하여 ROS 2의 통신 overhead를 제거 할 수 있어서 더 효율적인 ROS 2 응용 프로그램을 작성 가능하다. <br/>
(15)Threading model <br/>
ROS 2에서는 더 세분화 된 실행 모델(executor)을 C++과 Python에서 사용할 수 있으며 사용자가 정의한 실행기도 제공되는 RCL API를 이용하여 쉽게 구현할 수 있다. <br/>
(16)Messages (topic, service, action) <br/>
ROS 2에서도 단일 데이터 구조를 메시지라고 정의하며 정해진 또는 사용자가 정의한 메시지를 사용할 수 있으며, 각 패키지 이름과 마찬가지로 이름과 각 지정된 형식으로 메시지를 고유하게 식별할 수 있다. 여기에 ROS 2에서는 OMG(Object Management Group)에서 정의된 IDL(Interface Description Language)을 사용하여 메시지 정의 및 직렬화를 더 쉽게, 더 포괄적으로 다룰 수 있게 되었다. <br/>
(17)Command Line Interface(CLI) <br/>
기존 ROS 1과 매우 비슷해서 약간의 이름 변경과 일부 옵션 사용법만 익힌다면 사용시 큰 차이는 없음. <br/> 
(18)roslaunch <br/>
ROS의 실행 시스템은 대표적으로 `run`과 `launch`가 있음. `run`은 단일 프로그램 실행, `launch`는 사용자 지정 프로그램 실행을 수행.
ROS 2에서는 다양한 파일 사용을 사용할 수 있음이 장점이다. ROS 2에서는 `XML` 형식 이외에도 `Python`이 새롭게 채용되어 조건문 및 Python 모듈을 추가로 사용하여 보다 복잡한 논리와 기능을 사용할 수 있게 되었다.  <br/>
(19)Graph API <br/>
ROS 2에서는 노드 시작할 때뿐만 아니라 실행 도중에 다시 각 노드와 토픽, 메시지 등이 고유의 이름을 간의 매핑도 가능하며, 그 결과를 바로 그래프로 표현할 수 있게하려 하고 있다. 단, 현 시점에서는 개발 컨셉만이 나왔고 아직 구현되지는 않았다. 개인적으로 하루빨리 구현되었으면 싶은 기능 중에 하나이다.  <br/>
(20)Embedded Systems <br/>
실시간성이라는 것은 상위 소프트웨어에서 다루기에는 제약이 많다. 오히려 Embedded Systems 안에서 해결하는게 더 적합하다고 보고 있다. <br/>
ROS 2에서는 기존 시리얼 통신, 블루투스 및 와이파이 통신을 지원하거나 RTOS (Real-Time Operating System)를 사용하고 기존 DDS 대신 eXtremely Resource Constrained Environments (DDS-XRCE)를 사용 하는 등 임베디드 보드에서 직접 ROS 프로그래밍을 하여 하드웨어 펌웨어로 구현된 노드를 실행할 수도 있다. <br/> 

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
-In essence, DDS represents the concept of a Data Distribution System. In practical terms, it comprises middleware APIs that satisfy DDS specifications (such as DDSI-RTPS). This middleware corresponds to the host layers (layers 4 to 7) in the ISO 7-layer model. In ROS 2, as mentioned earlier and illustrated in Figure 4, this middleware acts as a software layer between the operating system and user applications. Through this, it enables the various components of the system to communicate more easily and share data. <br/>
Figure 4: DDS as middleware <br/>
![ROS2 Packages Installation35](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/171c1830-d86f-4025-af80-26346b19dc76) <br/>
<br/>

Footnote <br/>
Middleware: <br/>
Software layer that lies between the operating system and applications. It enables the various components of a system to more easily communicate and share data. It simplifies the development of distributed systems by letting software developers focus on the specific purpose of their applications rather than the mechanics of passing information between applications and systems. <br/>



"In essence, DDS represents the concept of a Data Distribution System. In practical terms, it comprises middleware APIs that satisfy DDS specifications (such as DDSI-RTPS). This middleware corresponds to the host layers (layers 4 to 7) in the ISO 7-layer model. In ROS 2, as mentioned earlier and illustrated in Figure 3, this middleware acts as a software layer between the operating system and user applications. Through this, it enables the various components of the system to communicate more easily and share data."















The Data Distribution Service (DDS™) is a middleware protocol and API standard for data-centric connectivity from the Object Management Group® (OMG®). It integrates the components of a system together, providing low-latency data connectivity, extreme reliability, and a scalable architecture that business and mission-critical Internet of Things (IoT) applications need.

​



즉, DDS는 데이터 분산 시스템이라는 개념을 나타내는 단어이고 실제로는 데이터를 중심으로 연결성을 갖는 미들웨어의 프로토콜(DDSI-RTPS, [30])과 같은 DDS 사양[31]을 만족하는 미들웨어 API가 그 실체이다. 이 미들웨어는 그림 4와 같이 ISO 7 계층 레이어[32]에서 호스트 계층(Host layers)에 해당되는 4~7 계층에 해당되고 ROS 2에서는 위에서 언급한 그림 3과 같이 운영 체제와 사용자 애플리케이션 사이에 있는 소프트웨어 계층으로 이를 통해 시스템의 다양한 구성 요소를 보다 쉽게 통신하고 데이터를 공유할 수 있게 된다.



Reference: <br/>
https://cafe.naver.com/openrt/23889 <br/>
https://cafe.naver.com/openrt/23965 <br/>
https://www.dds-foundation.org/what-is-dds-3/ <br/>
