---
layout: post
title:  "Serverless Lambda"
---

# Create Lambda Funtions using Serverless Framework
## Ubuntu20.04 VM Configuration 
**Miniconda** <br/>
(1)Access to Miniconda documentation <br/>
https://docs.anaconda.com/free/miniconda/index.html <br/>
(2)Installed Python3.9 Miniconda Installer, Linux 64bit os <br/>
![ServerlessLambda1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ec25c7c8-6612-4691-beaf-52589616130c) <br/>
---
bash Miniconda3-py39_24.1.2-0-Linux-x86_64.sh
---
![ServerlessLambda2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/736f14c5-f770-4976-98b8-86dade4135f2) <br/>
**Install Visual Studio Code** <br/>
![ServerlessLambda4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/790d4192-e8fe-445d-8a16-965dfa5ccfbb) <br/>
Ubuntu Software > Search for Visual Studio Code > Click on 설치 <br/>
![ServerlessLambda5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6012d3f6-061c-41ab-bfeb-2093af6f72c1) <br/>
Install Extensions > Python <br/>
**Install pip3** <br/>
---
sudo apt update
sudo apt install python3-pip
pip3 --version
sudo pip3 install --upgrade pip
sudo pip3 install testresources
---
Reference: https://www.webhi.com/how-to/how-to-install-pip3-in-ubuntu/ <br/>
**Docker Installation** <br/>
Version: Ubuntu Focal 20.04 (LTS) <br/>
(1)Uninstall all conflicting packages <br/>
---
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
---
If you have installed the containerd or runc previously, uninstall them to avoid conflicts with the versions bundled with Docker Engine <br/>
Install using the apt repository <br/>
(2)Set up Docker's apt repository <br/>
---
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
---
(3)Install the Docker packages <br/>
---
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
---
To install the latest version, run the command <br/>
(4)Verify that the Docker Engine installation is successful by running the hello-world image <br/>
---
sudo docker run hello-world
---
![ServerlessLambda6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ac6e9ce7-d0dc-4194-aa6e-8ae16adb8d7c) <br/>
Reference: <br/>
https://docs.docker.com/engine/install/ubuntu/ <br/>



























