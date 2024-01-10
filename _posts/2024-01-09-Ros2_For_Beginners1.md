---
layout: post
title:  "Ros2 For Beginners - Ros2 Installation & Environment Setup"
---
# Which Ros2 Distribution to use?
EOL: End Of Life. After the date, the distribution is not supported anymore <br/>
LTS Version: Long Term Support, supported for 5 years <br/>
-Recommended to use the latest LTS version, provided that it's been released at least for a few months <br/>
-It is stable and contains all the core packages and stacks needed <br/>
=>ROS2 Humble Distribution <br/>
Supported Platforms <br/>
Ubuntu 22.04 (Jammy): amd64 and arm64 <br/>
-Each ros2 distribution is linked to a specific ubuntu distribution <br/>
-When upgraded to a new ros2 distribution, you might need to upgrade to a new os distribution <br/>

# Install Ubuntu 22.04 on a VM 
How to install a vm with Ubuntu 22.04 on Windows <br/>
(1)Download an ISO file for ubuntu <br/> 
![Ros2_For_Beginners1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a687d014-6f6a-4c0b-b99a-e4c794a8e3a8) <br/>
Go to ubuntu.com > Search for Downloads > Just download Ubuntu Desktop > Find Ubuntu 22.04 LTS > Click on Download button <br/>
(2)Install Virtual Box <br/>
Go to virtualbox.org > Choose current platform > Choose Windows hosts > Run exe and install like any other software > Click next every time <br/>
(3)Create a virtual machine on virtual box <br/>
(3)-1 Click on 새로 만들기(N) <br/>
![Ros2_For_Beginners2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b9c907b9-eabb-463f-a43e-dc7f94f0eeba) <br/>
(3)-2 Name it Ubuntu 22.04, Choose Type Linux, and Version Ubuntu (64-bit) <br/>
![Ros2_For_Beginners3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ce439b28-dd33-4904-8607-cb5aeab65d9b) <br/>
(3)-3 Choose how much RAM you want to allocate for your vm <br/>
![Ros2_For_Beginners4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/696ab7cb-4697-446f-a243-965b4fe68a3a) <br/>
Computer has 16GB of RAM. So putting about 6GB for vm, which is quite good <br/>
(3)-4 Virtual Hard Disk <br/>
-Disk Size: Size of the hard disk <br/>
-Minimum 25GB~30GB, Maximum 70GB <br/>
![Ros2_For_Beginners5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e89b61b1-0fd8-4e29-9a79-1c48f7aadeb3) <br/>
(3)-5 Summary <br/>
![Ros2_For_Beginners6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d42cc7d8-4ec3-4a60-be00-a52348b57eb5) <br/>
(3)-6 Empty Virtual Machine installed <br/>
![Ros2_For_Beginners7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f97812dd-06c5-4bb1-9f75-a5f4dc1a2a1d) <br/>
Don't have any iso or ubuntu installed on it <br/>
(3)-7 Configure 2 CPUs <br/>
![Ros2_For_Beginners8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e795be19-e474-4133-9df2-1d77bd12a2e5) <br/>
Click on 설정(S) > Go to System > Go on Processor > <br/>
Have 4 good CPUs, use 2 CPUs <br/>
=>Virtual Machine correctly configured <br/>
(3)-8 Check downloaded Ubuntu ISO <br/>
![Ros2_For_Beginners9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8179ff06-8de8-4d4a-82cf-2f50b0fd1f96) <br/>
(3)-9 Check downloaded Ubuntu ISO <br/>
Select created Ubuntu virtual machine > Go to 설정 > Go to 저장소 컨트롤: IDE is 비어 있음 <br/>
![Ros2_For_Beginners10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/be193bdb-ba7b-43b4-bd80-75c4071fceae) <br/>
(3)-10 Choose disk file <br/>
Click on Disk Icon here > Select 디스크 파일 선택 ... <br/>
(3)-11 Disk file chosen <br/>
![Ros2_For_Beginners11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e0508a44-2b83-403a-89ce-7a5d5e55772f) <br/>
(3)-12 Launch the VM <br/>
Click the 시작(T) button <br/>
![Ros2_For_Beginners12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/af2a90ef-47a1-4989-9e47-8e22af079105) <br/>
(3)-13 Set Installation <br/>
![Ros2_For_Beginners13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4c84c9de-cb93-4800-b762-ff34853c0d0d) <br/>
(3)-14 Arrive Installation Setup of Ubuntu <br/>
![Ros2_For_Beginners14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4ef68a75-58e9-4b4b-8df4-a5ca1f998750) <br/>
Now ubuntu iso is on vm <br/>
Choose you language > Click Install Ubuntu <br/>
(3)-15 Choose keyboard layout <br/>
![Ros2_For_Beginners15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a92f3fb1-bfef-4922-a8c5-d10ccb7faf8b) <br/>
Normal QWERTY board, that's English use <br/>
(3)-16 Choose Updates or other softwares configuration <br/>
![Ros2_For_Beginners16](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/44ad74a5-0130-40b1-ae0a-84fba7487591) <br/>
(3)-17 Choose Installation type configuration <br/>
![Ros2_For_Beginners17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/59c3c7e7-d507-48ad-ba58-744f6b8070dd) <br/>
Choose Erase disk and install Ubuntu > Click on install now <br/>
-No need to be afraid of erase disk thing. The created virtual disk is the only thing being erased. It is irrelevant with deleting the os installed in your computer <br/>
(3)-18 Recap on what is being installed <br/>
![Ros2_For_Beginners18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f59d5b90-4261-48d4-abab-9c7ed895d244) <br/>
Click on Continue <br/>
(3)-19 Choose timezone <br/>
![Ros2_For_Beginners19](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bd62a536-6dab-402d-81b8-a4a4df8f98c1) <br/>
(3)-20 Choose username <br/>
![Ros2_For_Beginners20](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/81e38fe3-3655-4f45-b1dc-88e0b7ac8aef) <br/>
Type in username, host name, and password <br/>
Choose level of security for vm <br/>
(3)-21 Download stuff and install <br/>
![Ros2_For_Beginners21](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/46d353c6-4b2d-4019-a022-64d63dcd9f5d) <br/>
(3)-22 Restart  <br/>
![Ros2_For_Beginners22](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ad045e1c-bd92-46c9-9d81-c3392225c327)
Restart > Click on Enter <br/>
(3)-23 Inital Pop up  <br/>
Click next or skip <br/>
(3)-24 Update the software <br/>
Commands that will update your software frequently <br/>
![Ros2_For_Beginners23](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dd0f42af-7d71-46b6-a760-445a894d9f6b)<br/>
![Ros2_For_Beginners24](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/68e8836e-8e6c-4daf-b953-e6f400c63b85)<br/>
Launch terminal > Enter sudo apt update <br/>
sudo apt update: Download new sources and check what packages you need to install here <br/>
-Even if ubuntu is installed, not everything will be updated <br/>
179 packages can be upgraded: My system is really not up to date <br/>
![Ros2_For_Beginners25](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/61468e64-86f1-4fa1-b221-6ffa57316695)<br/>
![Ros2_For_Beginners26](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/764ecf0f-bcf8-4e61-9988-b13ad26425f4)<br/>
Launch terminal > Enter sudo apt upgrade: Need to download stuff and install stuff  <br/>
Put Y + Enter <br/>
![Ros2_For_Beginners27](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/75ce4cec-6ca8-449d-a450-deeeab683a6b)<br/>
sudo apt auto remove:  <br/> 
Remove packages that you don't need anymore (Have stuff we don't need) <br/>
![Ros2_For_Beginners28](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d7b57d8a-ddc8-4f48-954d-49437c3b94a3)<br/>
Launch terminal > Enter sudo apt update <br/>
Update the sources <br/>
![Ros2_For_Beginners29](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8c68a3eb-3a66-4ab5-8630-065c61520969)<br/>
![Ros2_For_Beginners30](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0d2f4331-c874-43a0-9d86-6193f4415b21)<br/>
Install a few packages <br/>
Enter Y <br/>
=> Downloaded all new softwares <br/>
![Ros2_For_Beginners32](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1c8ea76c-3945-4bb9-b568-6c8be35df7eb)<br/>
Go to 장치 > Click on 게스트 확장 CD 삽입 <br/>
![Ros2_For_Beginners33](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/71e94ac3-d1c9-4dba-86bd-1d78d0cc01bf)<br/>
CD appears <br/>
![Ros2_For_Beginners34](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ba04c5cb-7339-4080-983b-b7e165b36e32)<br/>
Click on CD > Open File manager  <br/>
![Ros2_For_Beginners35](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9dd92186-098b-4640-85d5-809db0e867b0)<br/>
![Ros2_For_Beginners36](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2e9ab365-3bc7-46bd-ab2f-ef7a14cb45c2)
Right click on this > Click on Open in terminal: Make you directly go where the cd has been mounted recently <br/>
![Ros2_For_Beginners38](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ea9f73ff-04ae-4ef8-9f73-a6dae712c664<br/>
See files and everything you have  <br/>
Need to run VBoxLinuxAdditions.run <br/>
![Ros2_For_Beginners39](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c3055da0-0fd3-4f39-a202-623b0d431dc5)<br/>
![Ros2_For_Beginners40](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e193ed47-010a-498a-888a-0955b8edb75c)<br/>
Install additional modules  <br/>
Modules not replaced unless system is restarted <br/>
![Ros2_For_Beginners41](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5d9aabe4-559e-4425-a650-c7eb2639f8fa)<br/>
파일 > 닫기 > 시스템 전원 끄기(P) <br/>
![Ros2_For_Beginners12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/af2a90ef-47a1-4989-9e47-8e22af079105)<br/>
Click the 시작(T) button <br/>
=> If it doesn't work, try multiple times <br/>

# Programming Tools 
Terminator: Improved terminal where screen can be splitted and can have multiple terminals <br/>
-Can split into any wanted layout <br/>
![Ros2_For_Beginners42](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2348c81a-1946-4afe-adca-e76dc16015aa)<br/>
-Ctrl+Shift+O: Split terminals horizontally <br/>
-Ctrl+Shift+E: Splite terminals vertically <br/>
Visual Studio Code: Main IDE <br/>
Install in ubuntu software <br/>
Installed Extensions <br/>
![Ros2_For_Beginners45](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cb99ead7-be21-48e7-b0fa-f49ca826433a)  <br/>
CMake: Edit cmake files. Cmake language support when writing files <br/>
Install python3 pip: <br/>
![Ros2_For_Beginners46](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4067fa8d-e126-468e-af61-2564c9c92e4c)<br/>
-Press Ctrl+Shift+I: When editing python file, use auto-formatting <br/>
gedit:<br/>
![Ros2_For_Beginners47](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/53284dce-9daf-481e-b1c9-3381e8602307)<br/>
The most basic text editor, need to install a very simple document <br/>

# Install ROS2 Humble on Ubuntu 22.04
(1)Set locale <br/>
![Ros2_For_Beginners48](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/222844ae-4a14-4aac-b56a-3636a5f0e57f)<br/>
Check whether we are in the right location(UTF-8) <br/>
![Ros2_For_Beginners49](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1146f8a5-eb28-4e8f-90ac-c95ca6e88038)<br/>
Just in case <br/>
(2)Setup Sources <br/>
![Ros2_For_Beginners50](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/30f8d049-6328-42e2-9692-ad3638184c8f)<br/>
Ensure Ubuntu repository is enabled <br/>
![Ros2_For_Beginners51](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/daa9a516-91de-4c50-ab88-dc51f82c5df7)<br/>
Add the ros2 GPG key with apt <br/>
![Ros2_For_Beginners52](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c982a228-7c40-4eb8-9000-a734887fbaa0)<br/>
Add repository to sources list <br/>

# Install Ros2 
![Ros2_For_Beginners53](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d2a32263-1f1c-456c-8fa8-a3e84e224f68)<br/>
Update your apt repository caches after setting up the repositories <br/>



Reference: <br/>
Udemy ROS2 For Beginners (ROS Foxy, Humble - 2023) <br/>
