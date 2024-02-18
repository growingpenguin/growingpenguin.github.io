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
## Step 4: Adjust the Docker Compose File for Windows
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
Reference: https://towardsdatascience.com/bag-file-management-using-bag-database-44d774d54df3 <br/>
