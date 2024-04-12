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
```
bash Miniconda3-py39_24.1.2-0-Linux-x86_64.sh
```
![ServerlessLambda2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/736f14c5-f770-4976-98b8-86dade4135f2) <br/>

**Install Visual Studio Code** <br/>
![ServerlessLambda4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/790d4192-e8fe-445d-8a16-965dfa5ccfbb) <br/>
Ubuntu Software > Search for Visual Studio Code > Click on 설치 <br/>
![ServerlessLambda5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6012d3f6-061c-41ab-bfeb-2093af6f72c1) <br/>
Install Extensions > Python <br/>
**Install pip3** <br/>
```
sudo apt update
sudo apt install python3-pip
pip3 --version
sudo pip3 install --upgrade pip
sudo pip3 install testresources
```
Reference: https://www.webhi.com/how-to/how-to-install-pip3-in-ubuntu/ <br/>
**Docker Installation** <br/>
Version: Ubuntu Focal 20.04 (LTS) <br/>
(1)Uninstall all conflicting packages <br/>
```
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
```
If you have installed the containerd or runc previously, uninstall them to avoid conflicts with the versions bundled with Docker Engine <br/>
Install using the apt repository <br/>
(2)Set up Docker's apt repository <br/>
```
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
```
(3)Install the Docker packages <br/>
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
To install the latest version, run the command <br/>
(4)Verify that the Docker Engine installation is successful by running the hello-world image <br/>
```
sudo docker run hello-world
```
![ServerlessLambda6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ac6e9ce7-d0dc-4194-aa6e-8ae16adb8d7c) <br/>
Reference: <br/>
https://docs.docker.com/engine/install/ubuntu/ <br/>

**Installing Serverless Framework** <br/>
Nodejs Installation failed persistently, so I tried an alternative route <br/>
(1)Install the lastest version <br/>
```
curl -o- -L https://slss.io/install | bash
```
(2)Upgrade <br/>
```
serverless upgrade

# You can also restrict the upgrade to the latest v2 version:
curl -o- -L https://slss.io/install | VERSION=2.72.2 bash
```
Upgrade Serverless Framework to the latest version <br/>
(3)Installation Completed <br/>
![ServerlessLambda7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5e01b48f-6443-42ef-b23f-b2e7110947aa) <br/>
Reference: <br/>
https://www.serverless.com/framework/docs-install-standalone <br/>

**Virtual Environment** <br/>
(1)Create Virtual Environment <br/>
```
conda create -n sloshinga-dev python=3.9
```
![ServerlessLambda10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/13e2b8fb-14a5-457e-8e0a-0ed5892f1044) <br/>
(2)Activate Virtual Environment <br/>
```
conda activate sloshinga-dev
```
![ServerlessLambda11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0d3df189-d851-4ad9-a8f8-efaa7f277e08) <br/>
(3)Install packages needed for lambda handler function <br/>
```
conda install <pkgs>
```
![ServerlessLambda12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/65f7b165-7c1c-4520-9364-1fc1ef18f01c) <br/>
(4)Deactivate Virtual Environment <br/>
```
conda deactivate
```
**AWS Credentials** <br/>
```
sudo sls config credentials --provider aws --key <Access Key> --secret <Secret Key>
```
![ServerlessLambda20](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/89f8fa77-995e-403a-a3c9-e73f5604833c) <br/>

**Deploy Serverless** <br/>
Had the pre-made lambda file as zip <br/>
(1)Install the library zip <br/>
```
sudo apt update
sudo apt install unzip
```
(2)Install node.js & npm <br/>
Activate virtual env <br/>
```
conda activate sloshinga-dev
```
![ServerlessLambda11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0d3df189-d851-4ad9-a8f8-efaa7f277e08) <br/>
```
sudo apt install nodejs
```
![ServerlessLambda15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/40fd3754-da00-431b-bd91-3909f4593aac) <br/>
The Serverless Framework is a Node.js application <br/>
Node.js provides the runtime environment that executes the JavaScript code of the Serverless Framework <br/>
Without Node.js installed, you can't run any Node.js applications, including the Serverless Framework <br/>
```
node -v
npm -v
```
![ServerlessLambda19](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/53e9269c-4650-43c1-90b3-7d9005e306b2) <br/>
Check whether nodejs and npm packages are successfully installed by checking their versions <br/>


(3)Extract the zip file inside the directory sloshing-service <br/>
```
mkdir sloshinga-service
cd sloshinga-service/
ls -l
unzip sloshing-predictiona.zip
```
![ServerlessLambda16](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4bb18f9f-71aa-482f-b7d9-7292b6eb82e3) <br/>

(4)Confirm whether the Lambda Handler function works in a local environment <br/>
```
code
```
Open visual studio code and open the sloshing-predictiona folder <br/>
![ServerlessLambda18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/be2de888-ceb1-4ae8-b145-d77bd3fd68fb) <br/>
Open handler.py code > Select the virtual env terminal <br/>
![ServerlessLambda17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/40df4d34-5ff2-4f5d-9c38-2e66ebd2d78f) <br/>
Run the code => Successful <br/>
(5)Install/Update Serverless <br/>
```
sudo npm install -g serverless
```
![ServerlessLambda21](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d76910c9-d391-438e-a807-7c0b5bc95894) <br/>
(6)Deploy the whole folder <br/>
```
sudo serverless deploy
```
![ServerlessLambda22](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a32a69c8-623b-4f11-8ab2-cd0503439578) <br/>
(7)When Lmabda is executed using the enpoint API <br/>
```
https://<endpoint>
```
![ServerlessLambda23](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c9765b80-3b65-4767-93b2-ca1c4f1c2f05) <br/>
For this reason, the additional lambda, implemented previously, was needed <br/>
Another lambda function, which passes the parameters, takes care of this problem <br/>
Reference: https://blog.zer01ne.dev/entry/AWS-%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%9C-%EC%84%9C%EB%B2%84%EB%A6%AC%EC%8A%A4-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90-%EC%A0%81%EC%9A%A9%EA%B8%B0%EC%82%BD%EC%A7%88%EA%B8%B0-4-serverless-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC <br/>



