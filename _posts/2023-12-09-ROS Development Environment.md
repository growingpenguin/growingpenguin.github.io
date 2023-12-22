---
layout: post
title:  "1. Build ROS Environment"
---
## 1. Development Environment & Base OS installation
Check My Ubuntu Version <br/>
![Ubuntu Version](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/67d321d7-3ff1-4c79-8d8d-8f4f01ba5d4e) <br/>
Ubuntu 20.04 LTS [6]를 사용해도 ROS 2 사용에는 문제없다고 해서 진행함. <br/>

## 2. Robot OS Installation
ROS 2 Foxy Fitzroy Installation: Use Debian Package <br/>
### Set Locale
![locale](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b7179963-cf29-420e-9b28-190eb8b38f82) <br/>
Make sure whether having a locale supporting UTF-8. Having a minimal environment(ex.POSIX) can cause problems.<br/>
![locale Installation1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/94a7d43e-54f0-4750-a6fc-09b11b922051) <br/>
Update Locale on the system setting them to use 'US.UTF-8' Locale for encoding => consistent language and encoding settings <br/>
Test with the following settings (Different UTF-8 supported locale is also fine)<br/>
![locale installation2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/82f7e2ca-7971-402e-b219-978ae8571b5b) <br/>
Verify Settings<br/>
### Set up Sources 
![setup sources1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bd7ebf7b-101e-4a8c-990a-1f9a82d24d3b)  <br/>
Ensure Ubuntu Universe repository is enabled <br/>
![SetupSources2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/15ffa660-2b58-4a78-88b6-b3913eaeb1b2)  <br/>
![Setup Sources3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c975dd5d-12e7-4045-86a9-11d6d132bc52) <br/>
Install curl package with '-y' flag, uses curl package to download the ROS key from specified url and save as ros-archive-keyring.gpg in directory /usr/share/keyrings <br/>
Key is used for verifying the authenticity of ROS packages during the installation <br/>
![Setup Sources3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5f51639c-8b4a-4903-b915-366ffd6bf940)
Add repository to sources list <br/>
### Install Ros2 Packages 
![Ros2 Packages Installation1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0ad90f65-a038-45fb-bed4-9c0b45eefb23) <br/>
Update apt repository caches in the setted repositories  <br/>
![ROS2 Packages Installation2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7d8ef6dc-9864-46b7-a2ef-1dc03a43dfe6) <br/>
Ensure my system is up to date <br/>
![ROS2 Packages Installation3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/70bb89cd-de34-447a-a504-453c35835723) <br/>
Desktop Install: ROS, RViz, demos, tutorials <br/>
![ROS2 Packages Installation4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/054ac8c9-91bc-4305-948a-8a2d2be763f9)
ROS-Base Install (Bare Bones): Communication libraries, message packages, command line tools. No GUI tools.
![ROS2 Packages Installation5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/70bb89cd-de34-447a-a504-453c35835723) <br/>
Development tools: Compilers and other tools to build ROS packages <br/>
![ROS2 Packages Installation7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cec3576a-9d53-4f15-b837-3f1975d21f30)<br/>
ROS2 Package installation in cafe <br/>

### Environment Setup
![ROS2 Packages Installation6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b45398d6-9d2e-4fdf-a965-9edd8804288e) <br/>
Set up your environment by sourcing the following file.<br/>
![ROS2 Packages Installation8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a7699b95-a257-4f1f-892c-6332cec1f74a) <br/>
Verify both the C++ and Python APIs are working properly <br/>
Terminal1: Source the setup file and then run a C++ talker <br/>
Talker : Saying that it’s Publishing messages <br/>
![ROS2 Packages Installation9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9321bda2-32b3-4564-801e-7ec467cad214) <br/>
Terminal2: Source the setup file and then run a Python listener <br/>
Listener : Saying I heard those messages. <br/>

## 3. Development Tool installation
ROS 2를 이용한 로봇 프로그래밍에 필수인 소프트웨어 모음 추가 다운로드 <br/>
![ROS2 Packages Installation12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2db17a79-0b88-4768-9040-38780c511600)  <br/>
![ROS2 Packages Installation13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/21ff147c-275f-4e33-a143-58a38c39c66a)  <br/>

## 4. ROS2 Build Test 
![ROS2 Packages Installation14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dd5530f5-7e0f-4826-b67c-977af8dfdb89)  <br/>
 'robot_ws' 이라는 이름으로 워크스페이스 폴더를 생성한 후 빌드 <br/>
 환경 셋팅을 하고 ROS 2 설치가 잘 되어 빌드에 문제가 없는지 알아보는 과정 <br/>
 ![ROS2 Packages Installation15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/57c28c33-f13f-464b-802c-0a8401c6fc9a) <br/>
워크스페이스 폴더의 하위 폴더로 src 이외에도 build, install, log 폴더가 생성됨 <br/>

## 5. Set Run Commands 
`2. Robot OS Installation`의 Environment Setup에서 `ROS 2` 설치 이후 `source /opt/ros/foxy/setup.bash` 를 설정 한 후, talker 노드 및 listener 노드를 실행하였음<br/>
그런데 `source /opt/ros/foxy/setup.bash` 와 같은 환경 설정을 매번 불러오기란 매우 귀찮을 수 있음 <br/>
=> ROS 2 개발 및 사용의 편리성을 위해 Run commands(rc)를 모아두는 bashrc 파일에 많이 사용되는 alias, source, export 을 설정함 <br/>
bashrc 파일의 기존 내용은 그대로 두고 맨 아래에 하기 설정들 추가 <br/>
![ROS2 Packages Installation16](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d78cbd13-b9e6-4822-a26d-2c20eecd15a0) <br/>
[bashrc_첨부.txt](https://github.com/growingpenguin/growingpenguin.github.io/files/13739504/bashrc_.txt)
-nano ~/.bashrc: <br/>
Opening the .bashrc file in the nano text editor, allowing you to view and edit its contents<br/>
-Ctrl+x 누르면 저장하고 꺼지고 다시 cmd로 돌아옴. 저장 잘 됐는지 확인하고 싶으면 nano ~/.bashrc 다시 cmd에 치면 됨 <br/>
Save & Exit using nano command <br/>
Ctrl+o: To save the file and continue editing it. <br/>
Ctrl+x: To save the changes and exit editing. <br/>
<br/>
## 6. Integrated Development Environment (IDE) Installation
VSCode Recommended in a ROS2 Development Environment. <br/>
Another IDE recommended IDE that support ROS is QtCreator. QtCreator is best to use as a sub when writing UI for RQt's Plugin Installation of ROS 2 <br/>
### 6.1 Visual Studio Code
ROS 2 개발 환경 구축을 위한 IDE 설정 및 사용법 (VSCode의 설치, 실행, 확장 기능 설치, 개발 환경 설정) <br/>
-IntelliSense 설정, 사용 방법 <br/>
-디버깅 설정 및 사용법 <br/> 
VSCode 환경에서의 디버깅 툴은 C++은 GDB, Python은 debugpy 사용 <br/>
-ROS 커뮤니티에서 VSCode 개발 환경을 위한 확장들과 VSCode를 이용한 다양한 사용 방법들을 공개한다고 한다 => 시간 날 때 찾아보기  <br/>
<br/>
1)Installation <br/>
Blog Guideline <br/>
Follow the link below and install '.deb' debian installation file <br/>
https://code.visualstudio.com/Download <br/>
My Development Environment <br/>
Visual Studio Code already installed <br/>
Installation Process: <br/>
![ROS2 Packages Installation18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bf26d7f6-7b35-49e9-a9cb-1c945811f6a9) <br/>
Open the Ubuntu Software app. => In the search bar of the Visual Studio Code section, type "visual studio code." => Select the search result. => Click "Install." <br/>
2)Implementation <br/>
![ROS2 Packages Installation19](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e0fe02a9-afd8-42b1-a433-29c3b49eecf7) <br/>
Enter code in cmd => Visual Studio Code opens <br/>
3)Extensions Installation <br/>
-Extensions (`Ctrl + Shift + x`)으로 이동 <br/>
-아래의 C/C++/Python/ROS/File Format/유용한 Extensions 추가 <br/>
C/C++/Python Extensions (VS Code Extensions for C++ and Python) <br/>


Name |Code Name|Description|
|---|:---|:---:|
|C/C++|[ms-vscode.cpptools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)|C/C ++ IntelliSense, Debugging support, and Code search|
|CMake|[twxs.cmake](https://marketplace.visualstudio.com/items?itemName=twxs.cmake)|Support for the CMake language|
|CMake Tools|[ms-vscode.cmake-tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools)|CMake language support  & Additional tools and features to make working with CMake projects more convenient|
|Python|[ms-python.python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)|Linging, Debugging, Intellisense, Code Formatting, Refactoring, Unit Testing|

[IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) : Term for various code editing features including: code completion, parameter info, quick info, and member lists <br/>
[Debugging support](https://code.visualstudio.com/docs/editor/debugging) : Visual Studio Code's built-in debugger helps accelerate your Edit, Compile, and Debug loop. <br/> 
[CMake Language](https://medium.com/@yjo/cmake%EA%B0%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-9a0091adafb) : Build system generator and configuration tool. CMake provides a platform-independent way to specify how a software project should be built and helps generate native build files (e.g., makefiles or project files for IDEs) for various operating systems and build environments.<br/>

File Format Extensions (VS Code Extensions for XML, YAML, Markdown) <br/>


Name |Code Name|Description|
|---|:---|:---:|
|XML Tools|[dotjoshjohnson.xml](https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml)|Support XML, XQuery, XPath|
|YAML|[redhat.vscode-yaml](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)|Support YAML|
|Markdown All in One|[ms-vscode.cmake-tools](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)|Support Markdown|


XML: Markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable <br/>
XQuery : Query language designed for querying and manipulating XML data <br/> 
XPath : Language used for navigating XML documents and selecting nodes from the document's structure <br/>
YAML: Human-readable data serialization format. Often used for configuration files and data exchange between languages with different data structures. YAML stands out for its simplicity and readability, making it easy for both humans and machines to understand.<br/>
Markdown: Lightweight markup language that allows you to write plain text using a format that is easy to read and write, while also providing a simple way to add formatting and structure <br/>

ROS Extensions (VS Code Extensions for ROS, URDF, Colcon) <br/>


Name |Code Name|Description|
|---|:---|:---:|
|ROS|[ms-iot.vscode-ros](https://marketplace.visualstudio.com/items?itemName=ms-iot.vscode-ros)|Support for ROS Development|
|URDF|[smilerobotics.urdf](https://marketplace.visualstudio.com/items?itemName=smilerobotics.urdf)|Support for URDF/xacro|
|Colcon Tasks|[deitry.colcon-helper](https://marketplace.visualstudio.com/items?itemName=deitry.colcon-helper)|VSCode Task for Colcon Query|


ROS: Open-source middleware framework designed to develop software for robots <br/>
URDF : XML-based file format used in ROS to describe the structure of a robot <br/> 
Colcon : Command-line tool used in ROS for building and managing ROS packages <br/> 
<br/> 
Useful Extensions (VS Code Extensions for Etc) <br/>


Name |Code Name|Description|
|---|:---|:---:|
|Highlight Trailing White Spaces|[ybaumes.highlight-trailing-white-spaces](https://marketplace.visualstudio.com/items?itemName=ybaumes.highlight-trailing-white-spaces)|Emphasis on spaces used without meaning|
|EOF Mark|[msfukui.eof-mark](https://marketplace.visualstudio.com/items?itemName=msfukui.eof-mark)|Add [EOF] character to files ending without [EOF]|
|Better Comments|[aaron-bond.better-comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)|Strengthening comments for keywords such as alert, informational, TODO, etc.|
​


<br/>
*Etc. Recommended Extensions <br/>
-[ms-azuretools.vscode-docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)  <br/>
-[ms-vscode-remote.remote-ssh](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) <br/>
-[ms-vscode-remote.remote-ssh-edit](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh-edit) <br/>
-[ms-vscode-remote.remote-containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) <br/>
-[ms-python.vscode-pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) <br/>
-[ms-toolsai.jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter) <br/>
-[dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) <br/>
-[uctakeoff.vscode-counter](https://marketplace.visualstudio.com/items?itemName=uctakeoff.vscode-counter) <br/>
-[vscode-icons-team.vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) <br/>
<br/>
4)Set Workspace <br/>
-"File" > "Add Folder to Workspace..." menu selection <br/>
-Select folder "robot_ws" <br/>
​![ROS2 Packages Installation20](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9c868a1e-262c-4944-962a-10607e1f2bb1) <br/>
5)Set VS Code Development Environment <br/>
The following steps (6-9) guide you through setting up the VS Code development environment. While configuring, you may use the settings.json, c_cpp_properties.json, tasks.json, and launch.json files. If these files don't exist, create them in the specified locations below.<br/>
Please note that in Linux, folders and files with a '.' as a prefix are considered hidden.<br/>
~/.config/Code/User/settings.json <br/>
~/robot_ws/.vscode/c_cpp_properties.json <br/>
~/robot_ws/.vscode/tasks.json <br/>
~/robot_ws/.vscode/launch.json <br/>

6)Set User settings <br/>
'settings.json': VSCode의 사용자별 글로벌 환경 설정을 지정하는 파일<br/>
이 파일에 기술된 설정들은 모든 작업 공간(workspace)에서 적용 <br/>
Ex.미니맵 사용, 세로 제한 줄 표시, 탭 사이즈 등 <br/>
![ROS2 Packages Installation21](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/561b27fd-e998-4688-9bfa-e0f8c0dae445) <br/>
나는 settings.json file이 없음을 확인.. <br/>
<br/>
![ROS2 Packages Installation23](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/34bbd971-26c3-4978-ae5f-03cab44f95c8)
​새로 settings.json file을 nano editor를 사용해서 만듦 <br/>
![ROS2 Packages Installation22](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/275ed86e-673b-4def-97bd-91b17957ffd1) <br/>
[settings.json_code.txt](https://github.com/growingpenguin/growingpenguin.github.io/files/13749266/settings.json_code.txt) <br/>
Copy and paste the file above => Ctrl+x to save and edit<br/>
-Specialized User Settings<br/>
-In the settings.json file located at (~/.config/Code/User/), configure as above:<br/>
-ROS Related Settings <br/>
'ms-iot.vscode-ros'의 '"ros.distro": "foxy"'와 같이 ROS 버전 지정<br/>
'deitry.colcon-helper'의 '"colcon.provideTasks": true'와 같이 colcon이 지원되는 Task를 사용한다는 의미로 지정 <br/>
"files.associations"을 통해 확장자로 알 수 없는 *.repos, *.world, *.xacro 와 같이 ROS에서만 사용되는 파일명을 파일 형식이 무엇인지 명시해주는 설정 <br/>
<br/>
7)Set C/C++ properties <br/>
C/C++ Related Settings. <br/>
[c_cpp_properties.json_code.txt](https://github.com/growingpenguin/growingpenguin.github.io/files/13749451/c_cpp_properties.json_code.txt) <br/>
Copy and paste the file above => Ctrl+x to save and edit <br/>
-Configure settings related to C/C++. <br/>
-Specify the os of the current designated workspace (~/robot_ws), define the path for the include folder, determine the standard C/C++ rules to be used, set the compilation path, and establish the IntelliSense mode. <br/>


Reference: <br/>
https://docs.ros.org/en/foxy/Installation/Ubuntu-Install-Debians.html <br/>
https://cafe.naver.com/openrt/25288 <br/>
https://linuxhandbook.com/nano-save-exit/ <br/>
https://medium.com/@yjo/cmake%EA%B0%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-9a0091adafb <br/>
