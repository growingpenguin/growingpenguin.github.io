---
layout: post
title: AWS Autoscaling 
---

# AWS AutoScaling # 

## 1.Elastic Load Balancing
**Step1: Problem Analysis**<br/>
Elastic Load Balancing <br/>
: Distributes incoming application requests or network traffic across multiple targets in a single availability zone or multiple availability zone <br/>
Ex. <br/>
Person1            Person2            Person3 <br/>
   \                 |                  / <br/>
    \                |                 / <br/>
     >               >                <  <br/>
            Elastic Load Balancer <br/>
            /        |       \   <br/>
           /         |         \ <br/>
          /          |           \ <br/>
         <           >            > <br/>
    EC2 Instance    Container    AWS Lambda <br/>

Types of Load Balancer <br/>
|    Application Load Balancer   |   Network Load Balancer    |   Classic Load Balancer  |
|-----------------|----------------|--------------|
|  Load balancing of HTPP or HTTPs requests    |  Load balancing of TCP or UDP or TLS requests   | Load balancing of HTTP, HTTPS, TCP, and SSL requests  |  
|  Routes traffic to targets based on contentd of requests  |  Routes traffic to targets based on IP Protocol data | Load Balancing across multiple instances |


