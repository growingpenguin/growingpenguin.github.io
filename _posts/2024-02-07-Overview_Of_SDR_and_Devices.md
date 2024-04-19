---
layout: post
title:  "Overview Of SDR and Devices"
---

# Overview Of SDR and Devices
## Introduction to SDR
**Software-Defined** Radio (SDR): 소프트웨어로 정의된 라디오 <br/>
Represents a significant shift in the way radio systems are conceptualized and implemented. <br/>
Traditionally, radio components and functionalities were primarily defined and managed through hardware. <br/>
This traditional approach posed limitations, especially regarding flexibility and the ability to adapt to new standards or frequencies <br/>
-SDR changes this paradigm by transitioning the definition and control of radio functions from hardware to software.<br/>
This shift began gaining prominence in the late 2000s, marking a new era in radio technology <br/>
### Evolution of Radio Technologies  
**Hardware Radio** **Software-Defined Radio** **Software Radio** <br/>
(1)Hardware Radio <br/>
:All componenets of the radio are made of hardware <br/>
-Traditional Approach: In the past, radio systems were predominantly hardware-based <br/>
This meant that the tuning and modulation of frequencies were physically managed by adjusting the hardware components <br/>
-Limitations: Such a system was inherently rigid <br/>
Adjusting to new frequencies or modulation techniques was challenging and often required substantial physical modifications to the radio system <br/>
(2)Software Radio <br/>
:All components of the radio are made of software <br/>
-Initial Concept: The idea of software radio emerged as a solution to the rigidity of hardware radio <br/>
It proposed the use of software for managing radio functions, such as tuning to different frequencies <br/>
-Challenges: However, early attempts at software radio faced difficulties, particularly in achieving the wide coverage and flexibility envisioned <br/>
Tuning across a broad range of frequencies efficiently and effectively through software alone proved challenging <br/>
(3)Software-Defined Radio (SDR) <br/>
-Balanced Approach: SDR represents a matured version of the software radio concept <br/>
It effectively bridges the gap between hardware and software in radio systems <br/>
-Advantages: SDR allows for much greater flexibility than traditional hardware radios <br/>
Adjustments to frequency, modulation, and even the radio's fundamental behaviors can be made through software updates without the need for physical alterations <br/>
-Milestone Device: <br/>
The USRP1(Universal Software Radio Peripheral 1) is often cited as a pioneering device in the SDR domain, illustrating the practical realization of SDR concepts <br/>
Software-Defined Radio has revolutionized the radio technology landscape by providing unprecedented flexibility and adaptability <br/>
Through SDR, what was once a rigid and hardware-bound field has become dynamic and software-driven, opening up new possibilities for innovation and application in various domains, including telecommunications, military communications, and amateur radio <br/>

### What is Software-Defined Vehicle?
-A vehicle that can control, operate, and update parts or the entirety through software <br/>
Vehicle can be controlled or updated partially or wholly through its software, highlighting the flexibility and adaptability of its functions. This is particularly relevant with the rise of electric and autonomous vehicles, where software plays a pivotal role in vehicle operation and updates can introduce new features or improvements without needing to change the vehicle's hardware <br/>
![SDR_Tutorial1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/181f87dc-c16b-46c6-90be-36956ad544c7) <br/>
-Cloud: The cloud symbol cloud computing services. <br/>
Vehicles can connect to the cloud to send and receive data. This data might include software updates, traffic information, maps for navigation, and user preferences <br/>
-Vehicle: Physical vehicle itself <br/>
Software-Defined Vehicle Platform: Central concept of the diagram. <br/>
Suggests that the vehicle's platform is defined by software, meaning that much of the vehicle's functionality can be controlled or modified through software. This makes the vehicle highly adaptable and upgradeable, similar to how one might update the operating system or apps on a smartphone <br/>
ECU/Network:  <br/>
ECU stands for Electronic Control Unit, which is like the vehicle's computer, controlling various functions <br/> 
Network implies the vehicle's internal communication network, which allows ECUs and other components to communicate with each other <br/>
Infotainment: <br/>
Vehicle's entertainment and information system, which might include navigation, media playback, and connectivity to external devices <br/>
Sensor/Actuator:  <br/>
Sensors gather data from the vehicle and its environment, such as speed, temperature, or proximity to other objects <br/>
Actuators are mechanisms that act upon this data, enabling physical actions like opening valves, moving parts, etc <br/>
Battery/Motor: The vehicle's power source and propulsion system, which in electric vehicles are the battery and electric motor <br/>
-The concept of a Software-Defined Vehicle (SDV) emerges as part of a broader trend toward software-defined systems, including storage, cloud, and network solutions <br/>
-This trend signifies a shift from traditional, hardware-centric designs to more flexible, software-driven architectures <br/>
The foundation of this movement can be traced back to the development of Software-Defined Radio (SDR), which revolutionized radio technology by transitioning control and functionality from hardware to software <br/>

### Software-Defined Series
**Software-Defined Data Center** <br/>
A data center that can control, operate, and update parts or the entirety through software <br/>
![SDR_Tutorial2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/94b7fd55-5e07-485b-955c-7c3f328249dc) <br/>
Software-Defined Data Center: <br/>
Data center where all infrastructure is virtualized and delivered "as-a-service" <br/>
This allows for the entire infrastructure to be controlled and operated through software, providing a more flexible, automated, and manageable environment <br/>
Automation: <br/> 
Capability of the data center to manage and operate the systems automatically without human intervention, based on defined policies and rules <br/> 
Orchestration: <br/>
Automated arrangement, coordination, and management of complex computer systems, middleware, and services <br/>
Management: <br/>
Overarching governance, administration, and control of the data center's resources and services <br/>
Three pillars of the SDDC: <br/>
Compute Virtualization:  <br/>
The virtualization of servers, where multiple virtual machines (VMs) run on a single physical server's hardware, managed by a hypervisor <br/>
Storage Virtualization:  <br/>
Pooling of physical storage from multiple network storage devices into what appears to be a single storage device that is managed from a central console <br/>
Network Virtualization: <br/>
Process of combining hardware and software network resources and network functionality into a single, software-based administrative entity, a virtual network <br/>
**Software-Defined Network** <br/>
A network that can control, operate, and update parts or the entirety through software <br/>
![SDR_Tutorial3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/95e2c5d9-e300-484c-89ae-28d66af347a1) <br/>
SDN: An approach to networking that uses software-based controllers or application programming interfaces(APIs) to direct traffic on the network and communicate with the underlying hardware infrastructure <br/>
-It separates the network's control(or management) plane from the data(or forwarding) plane <br/>
Applications: Software programs that use the network to communicate. They interact with the SDN controller to request network resources or services <br/>
Control Plane: Contains the SDN Controller, which is the central part of an SDN network. It maintains a comprehensive view of the network and makes decisions about where to send packets based on this view. The control plane is responsible for managing the network policies and traffic flow <br/>
SDN Controller: "Brain" of the SDN network. It provides the central point of control, using protocols like OpenFlow, to manage the flow control to the networking devices, like switches and routers <br/>
SDN Datapath: Flow tables that are installed on switches. These tables tell the switches how to handle different types of network packets <br/>
Data Plane: This layer is made up of the switches that perform the actual forwarding of packets based on the flow tables that have been set up by the control plane <br/>
Switches: In the context of SDN, these are the physical or virtual devices that forward packets across the network. In an SDN environment, these switches are programmable and can dynamically adjust and route traffic based on the SDN controller's instructions <br/>
Pool of Application Servers: Servers that host applications and services. In an SDN architecture, the network can be programmed to optimize the delivery of data to and from these servers <br/>
**Software-Defined Everything** <br/>
-Software-defined Vehicle <br/>
-Software-defined Storage <br/>
-Software-defined Cloud <br/>
-Software-defined Network <br/>

### Software-Defined Radio
-Radio that control and update via software <br/>
SDR is a type of radio communication system where components that have traditionally been implemented in hardware (e.g., mixers, filters, amplifiers, modulators/demodulators, detectors) are instead implemented by means of software on a personal computer or embedded system <br/>
-Necessary for conceptual learning and practical operation experience <br/>
To effectively utilize SDR, it's important to understand the underlying concepts that enable software to define and control the radio's functions. Additionally, hands-on experience with actual operation is essential. This experience helps in comprehending how software can manage various aspects of radio operation, such as signal processing, modulation, and frequency management <br/>
![SDR_Tutorial4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3c9857e9-693b-4f90-9ea6-eb3f08bc2a48) <br/>
A schematic of the USRP (Universal Software Radio Peripheral)/SBX (SBX is a specific model of USRP that operates at a certain frequency range), which is a common piece of hardware used for SDR <br/>
-Signal processing path within an SDR system, specifically using a USRP(Universal Software Radio Peripheral) device <br/>
Starts with a Gain control, then passes through an Anti-aliasing filter with a 100 MHz cutoff frequency before reaching the Analog-to-Digital Converter (ADC), which converts the analog signal into a digital signal represented by x[n] <br/>


### Software-Defined Vehicle (SDV) and Related Technologies
**Evolution from SDR to SDV** <br/>
-Origin with Software-Defined Radio: <br/>
The journey began with SDR, which enabled radios to be dynamically programmed for different frequencies, protocols, and functions via software <br/>
This flexibility marked a significant departure from the static, hardware-defined radios of the past <br/>
-Expansion with USRP2 N210: <br/>
The USRP2 N210 device exemplifies the extension of software-defined principles beyond radio <br/>
It utilized ports and interfaces for applications, laying the groundwork for the software definition of various vehicle systems <br/>
**The Software-Defined Vehicle Approach** <br/>
Comprehensive Software Control: <br/>
In an SDV, critical components and functionalities, such as gain adjustments, anti-aliasing filters, and analog-to-digital converters (ADC), are managed through software<br/>
This approach allows for on-the-fly updates and adjustments, enhancing the vehicle's adaptability and performance <br/>
Key Areas of Software Focus: <br/>
Framing and Scheduling: Software determines how data is organized and when tasks are executed, optimizing the vehicle's operations and responses to real-time conditions.
Radiation: The management of electromagnetic emissions, crucial for communications and sensor functions, is also software-controlled, allowing for greater precision and adaptability.
Benefits of Software-Defined Vehicles
The transition to SDVs brings several advantages, including:
Enhanced Flexibility and Updateability: Vehicles can receive software updates to introduce new features or improve existing ones without the need for physical modifications.
Customization and Scalability: Software allows for the customization of vehicle functionalities to meet diverse user needs and preferences, as well as the easy scaling of solutions across different models and platforms.
Improved Performance and Efficiency: By optimizing software algorithms and processes, SDVs can achieve better fuel efficiency, lower emissions, and improved overall performance.







### Software Defined Vehicle <br/>
-Software-Defined Vehicle, Storage, Cloud, Network 등장<br/>
-Software-Defined Radio가 시초 <br/>
-USRP2 N210은 port를 써서 interface 써서 응용 시작해서 확장해 왔음 <br/>
솦
thv mxmdnpdj qnqns ghrdms wjscpfmf zjsxmfhf dnsdud 업데이트할 수 있는 라딩 <br/>
Gain -> Anit-aliasing Filter -> ADC -> x[n] <br/>
Framing, Schediling, Radiation 부분을 software로 만들겠다 <br/>
### 발표자의 Credential 
Spectrum challenge 참여 <br/>
Research aims at efficient spectrum use <br/>
httpsL//engineering.purdue.edu/discovery/2014_1.research-aims <br/>

## Basic Concept of Radio
Point-to-Point Communication <br/>
A direct communication link where information travels from one point (the transmitter) to another point (the receiver) <br/>
![SDR_Tutorial5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a4c7b68d-34ec-43ad-b80b-40b91060affb) <br/>
-There is a channel connecting the transmitter to the receiver through which information is sent <br/>
-The medium or space through which the signal travels acts as a channel <br/>
-Signal processing steps that occur within a transmitter <br/>
Transformation of a digital data stream into an analog signal that can be transmitted over a communication channel, such as in radio communications <br/>
![SDR_Tutorial6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/fefaa928-4c93-407c-8a00-5b1b889fe73c) <br/>
(1)Symbol Mapping <br/>
Binary data stream (represented by b[n], where n represents the discrete time index) is converted into symbols <br/>
For example, in a binary system, '0' and '1' might be the symbols, or in more complex systems like QAM (Quadrature Amplitude Modulation), multiple bits could be represented by a single symbol <br/>
(2)Upsampling <br/>
The symbol rate is increased by inserting zeros between the original samples, which will later be smoothed out <br/>
This step prepares the signal for pulse shaping <br/>
(3)Pulse Shaping <br/>
The upsampled signal is filtered to shape the pulses in a way that minimizes intersymbol interference (ISI), which occurs when signals overlap and cause distortion <br/>
A common filter used for this purpose is the raised cosine filter <br/>
(4)Modulation <br/>
The shaped pulse is then modulated onto a carrier wave for transmission <br/>
The multiplication with $\( \cos(2\pi f_c t) \)$ indicates that the data is being modulated with a cosine function of a certain frequency $f_c$ <br/>
This moves the signal to a higher frequency band suitable for the transmission medium <br/>
For radio transmission, this is necessary to transmit the signal over the airwaves <br/>
![SDR_Tutorial7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ee5b48a4-f643-4ea8-b207-bfde4af0de31) <br/>
Example: <br/>
Raw digital signal: [0, 1, 0, 0, 1] <br/>
=>Symbol Mapping: [-1, +1, -1, -1, +1] <br/>
Each bit in the sequence is mapped to a symbol. In the simplest form, binary phase-shift keying (BPSK) could be used where '0' might be mapped to -1 and '1' to +1 <br/>
=>Upsampling: [-1, 0, 0, 0, +1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, +1, 0, 0, 0] <br/>
The symbol-mapped sequence is upsampled to increase the number of samples per symbol, which is necessary for the next steps <br/>
For example, if we upsample by a factor of 4, we insert 3 zeros between each symbol <br/>
=>Pulse Shaping:
=>Modulation (simplified): <br/>
데이터 0 1 01 => Analog => Signal 형태로 shaping 후 전송 <br/>
무선통신에 noise가 껴서 filter 껴서 필터링, sample 데이터 복구의 일련의 과정 <br/>

b[n] -> b'[n] <br/>
-모든 모둘들이 Hard Coding 혹은 Static하게 지정되어 있음 <br/>
하드웨어라면 수정 자체가 불가능 & 하드웨어 상의 조정만 가능 <br/>
cos(2파이): 주파수 조정 <br/>

### Hardware Radio에서부터 <br/>
라디오 돌리는 거를 통한 tuning <br/>
예전에는 analog 자체를 조절 <br/>
SDR는 안테난나 tuner AL, FL, 와이파이 수신기가 됐다가 변환 가능 (다른 거랑 비교) <br/>
군 쪽 수신자만 아는 형태로 송수신 다변환하려고 함 <br/>
### SDR 개념 
Application -> TCP/IP -> MAC (Framing, Link MGmt, SCheduling) -> Physical(FEC< Multiplexer < Modem -> Digital Tuner -> ADC -> Tuner/Filter/AMP <br/>
-RTL SDR 대표적 <br/>
Software tuning 가능하다고 알려짐 <br/>
$25  <br/>
AM, FM만 가능 <br/>
Hackrf1 
$150, $160 <br/>
-Software Defined Radio Platform <br/>
다양한 거 존재
Software 최대화, HW 최소화 <br/>
-기존 하드웨어 라디오 경우 시스템 구조내부 수정이 난해함 <br/>
통신 시스템 관련된 다양한 실험을 하기 어려움 <br/>

-안테나 <br/>
AM용도 <br/>
다이어그램 형태로 띄워서 운용 <br/>
주파수 뭐로 틀까요? 107.7 <br/>
신호를 볼 수 있음 <br/>
Graph = GNU 
python 사용시 line by line <br/>
Companion, block 단위 구현 <br/>
=> 간단히 GNU Companion, 파이썬 code level <br/>
Python module들은 만드는 블록은 대체로 C++, 파이썬 <br/>

SDR Open source Ubuntu 돌릴 수 있음 <br/>

## 중간 Summary 
-Wifi, LTE, ...HW로 핵심엔진, 위에 Processor, 위에 OS, 하나의 통신 장치
Wfif는 wifi만, Bluetooth만 되거 <br/>
Software defined radio 어떨 때는 WIfi, LTE, 트랜스포머가 되는 장치로 구현 가능, 이유는 H/W가 최소하됨 <br/>
Analog -> DIgital , Digital -> Analog 왔다가는 필수 HW로 최소
나머지 신호 처리 , Software로 지웠다가 썼다가 통신 장치가 변할 수 있게 해줌
하나의 장치로 원하는 대로 필요할 때마다 사용 가능, 작게, 원할 때마다 바꿈. 
Smartphone에 LTE, 5G, 너무 비쌈 <br/>
그런데 하나인데 원하는대로 바꾸는 거 가능. 그러면서 가격이 1/10, 1/20 <br/>

## 실습 
짙은 부분이 signal 있는 것 
Fequency Display, Waterfall display, time domian display, constellation display 가능 <br/>
FM, AM 가능 <br/>
안테나따라 신호 크기 달라짐 <br/>
End <br/>
Audio Sink <br/>
Replay file source 등 다양한 블록 존재 <br/>
Example: <br/>
fft찾겠다 -> find block -> block appears -> Connnect it <br/>

보안 학생들 
물리계층 보안 
RF ADC FFD  정보 이용해 보안 목적 실험 가능 <br/>
공격자 RF <br/>

## SDR 개념
-이상적인 SDR 경우 (Ideal SDR) <br/>
Connect Antenna to an ADC/DAC <br/>
Sampling frequency limitation in RF 
Dynamic range limitation <br/>
Hardware filter low signal, there is
-실질적인 SDR의 경우 (Practical SDR) <Br/>
0TUnable RD front end implemented in software <br/>
All digital signal processing in software <br/>
5G, mm wave 28G Hz 실험... Giga pont 어마어마하게 늘림 <br/>
10Gbps 만 가능? 
다양한 거 cover 위해 SDR <br/>
4G 5G SRS software 전용 platform 존재 <br/>
변조 다양하게 할 수 있는 ursp 위주로 실습 

## SDR 구조 및 기본 구동 
Digital 신호 처리를 SDR platrform 진행 
Pulse shaping/ 
PC -> HW(Pulse Shaping Up/Down Conversion) ->HW (DAC/ADC RF Front-End (HW)) <br/>
PC 대신 다른 거 가능. 



### Tips
AI 기반 통신 가능
USRP radio 바꿔보면서 채널 상태 정보 수정 가능
wifi가지고 sensing, 환경을 인지...
채널 상태 수집, 사람 서있고, 수신 가능 <br/>

### USRP
Universal Software Radio Peripheral <br/>
Ettus Re

Silver box:FM 전용 <br/>
URSP1 -> USRP2/ USRP N210 -> USRP X Series <br/>

### SDR 디바이스
-디바이스 종류 <br/>
wikipedia <br/>
list of software-defined radios <br/>
LimeSDR 잘 팔림 <br/>

### RTL-SDR 
RTL2832U 칩 기반의 초저가 전용 SDR <br/>
저가용 SDR하드웨어 <br/>
HackRFOne 알리 express <br/>

### SDR 사용 방법
-Hardware Driver Installation <br/>
-USRP?RTL-SDR/HackRF have their own version of driver <br/>
Example: UHD(https://github.com

Driver 파라미터 가지고 조정 <br/>
GNUradio <br/>
-Two methods for the operation <br/>
Method1: gnuradio-companion (GRC) <br/>
Similar to Simulink or Labview <br/>
왠만하면 module만들어서 Python 연결하는게 젤 best <br/>
-귀찮을 때 송신만 해서 보고 싶음 <br/>
Block 단위로 만들어서 transmitter 끌어다와서 함 <br/>
Module1 -> Module2(C++)  -> 
Open source software for SDR <br/>
### SDR별 사양 <br/>
-USRP <br/>
ADC Rate
단독으로 써러 wifi 힘듬 <br/>
대체로 25MHZ 씀
-RTL-SDR <br/>
ADC rate, Max Bnadwidth는 알고 쓰자 
ex. HackRF one 가지고 40MHZ 가지고 쓰기 힘듦 <br/>
-HackRF One(2020년 이전 버전 기준) <br/>

USRP190 
동일 제품에서도 어떤 interface 쓰느냐, 등등의 interface 차원의 고려 필요 <br/>
### 실습
OFDM Transmitter 블락 형태 <br/>
estimation, modulation, 어떤 방식으로 쓰이고, <br/>
GRC에서 돌리면 fm_reciever_test.grc
돌리면 python code가 나옴


Ubuntu20.04 LTS GNU vesrion <br/>

### 마무리 
이일구 교수님 <br/>
-Hardware, 고성능, 빠른 처리 가능 <br/>
-Software로 만들면 실제로 성능이 안 좋아짐 <br/>
높은 주파수, bit 수가 늘어나도 느려짐 <br/>
Parallel하게 처리 <br/>
Software, 성능 열하 <br/>
ADC  중요 component 16bit, 8bit <br/>
Software 시도시 bit 수 늘리기 어려워서 해상도 낮추고, software 안정성, 품질 보장하기 힘듦 <br/>
미래에는 chip하나로 Software 가능 <br/>
IOT:저가의 저전력의, 장치 만들기 가능? 안 됨 <br/>
SOfware firmware 업데이트하도록하는게 미래의 SDR <br/>
FOTA: Connected car 주차시 LTE로 firmware 업데이트 <br/>
SDR 동작 가능 특징 업데이트 가능한 세상이 찾아올 예정 <br/>
SDR
