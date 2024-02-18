---
layout: post
title:  "Display Nvblox Rosbag"
---

# Display Nvblox Rosbag
While there are numerous open-source tools available for managing ROS bags, many of these tools lack support for ROS 2. Given that my ROS 2 bag data is in the .db3 format, I encountered limitations with these other tools. As a result, I decided to explore the use of [Bag Database](https://github.com/swri-robotics/bag-database) for my needs <br/>

## Step 1: Install Docker Desktop on Windows
Link: <br/>
https://docs.docker.com/desktop/install/windows-install/ <br/>
![Rosbag_Visualize1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ddf82509-5cf4-43ac-a2cc-eac885c60d12) <br/>
(1)Download Docker Desktop for Windows: <br/>
Click on Docker Desktop for Windows <br/>
(2)Install Docker Desktop: <br/>
![Rosbag_Visualize2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9b7eb461-5bc3-4759-b494-cb68ef259830) <br/>
Double click and run the Docker Desktop Installer.exe <br/>
![Rosbag_Visualize3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/88af4700-fa24-4f0c-a720-db9add99843d) <br/>
Installed <br/>
(3) Start Docker Desktop <br/>
![Rosbag_Visualize4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/dd6efaa5-6b69-4834-a289-fa98b916b33e) <br/>
검색 > Type in Docker Desktop > Click Accept on Docker Subscription Service Agreement > Sign up > Proceed survey <br/>
## Step 2: Configure Docker Desktop for File Sharing
To use Docker volumes with local directories, you need to ensure Docker Desktop has access to your drives <br/>
![Rosbag_Visualize5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ed5e958d-3ab3-4e89-9766-584ff3112b6e) <br/>
Settings > Resources > Click on browse to browse Disk Image <br/>
Share Drive:  <br/>
![Rosbag_Visualize6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a33b886f-b3c2-462c-a84f-4cecc5127b50) <br/>
Ensure the drive where your ROS bag files are stored (D:\) is checked to allow Docker containers to access it <br/>
Click on Apply & restart <br/>
## Step 3: Prepare Required Directories
Ensuring your specified path (D:\MobilityServiceLab\rosbag\bags) exists and contains your ROS bag files <br/>
![Rosbag_Visualize7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c69810e4-6524-402e-ba51-f6e27ad65a80) <br/>

## Step 4: Create Docker file 
(1)Create a New Text Document for Docker Compose: <br/>
-Navigate to the directory where you want to create the Docker Compose file <br/>
-Right-click in the folder, select 'New' > 'Text Document', and name the file docker-compose.yml <br/>
(2)Open the Docker Compose File in a Code Editor: <br/>
-Launch the code editor you prefer to use. (Example: Visual Studio Code) <br/>
-Open the newly created docker-compose.yml file in Visual Studio Code <br/>
(3)Prepare the Docker Compose Content:
Copy the Docker Compose content from the [source](https://gist.githubusercontent.com/cuongld2/c7f14474b301f8db7e213ccf829bba89/raw/2c41391312e363d7c1dae0b0838c0a554effd865/gistfile1.txt) <br/>
Reference: https://towardsdatascience.com/bag-file-management-using-bag-database-44d774d54df3 <br/>
(4) Copy and Paste the Content > Save the Docker Compose File <br/>

## Step 5: Adjust the Docker Compose File for Windows
The Docker Compose file you provided should work as-is, provided Docker Desktop is correctly configured to access your drive <br/>
Make sure the path to your bags is correctly specified in the volumes section. 
```
volumes:
    bags:
        driver: local
        driver_opts:
            type: 'none'
            o: 'bind'
            device: 'D:\MobilityServiceLab\rosbag\bags'  # Replace this with the path to your bags
    docker_cache:
    postgres:
    ldap:
    slapd:
    indexes:
    scripts:
        driver_opts:
            type: 'tmpfs'
            device: 'tmpfs'
```
## Step 6: Adjust the Docker Compose File for Windows
Open Command Prompt and Navigate to the folder where your Docker Compose file is saved <br/>
```
D:
cd <Folder Location> 
```
Search > cmd > Navigate to the location of the folder <br/>
Run Docker Compose: <br/>
Execute the following command to start up your services defined in the Docker Compose file <br/>
```
docker-compose up -d
```
![Rosbag_Visualize8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d25068e7-d12a-4ca7-aeb3-fde09f56f3d1) <br/>
![Rosbag_Visualize9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ed16b1ea-d3a0-4842-8a6b-111530f7e8dd) <br/>

## Step 6: Verify the Setup
Check that your services are running correctly <br/>
```
docker ps
```
![Rosbag_Visualize10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7568a0b2-34ee-4914-8d98-066ed1a11d90) <br/>
List running containers <br/>
## Step 7: Accessing Your Services
Bag Database Web Interface:  <br/>
Accessible at http://localhost:8080 <br/>
Open this address in a web browser to interact with the bag database UI <br/>
Postgres Database: <br/>
Accessible on port 5432 <br/>
(Do not directly need to access this unless performing specific database operations) <br/>

Reference: https://towardsdatascience.com/bag-file-management-using-bag-database-44d774d54df3 <br/>
