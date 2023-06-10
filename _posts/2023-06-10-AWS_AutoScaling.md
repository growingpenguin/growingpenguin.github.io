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
|  Operates at the Application Layer(OSI Model Layer7)  |  Operates at the Transport Layer(OSI Model Layer4) | Operates at both the Application Layer and Transport Layer |

How Elastic Balancing Works <br/>
-Application Load Balancer and Network Load Balancer: <br/>
Register targets to target groups and routes the traffic to target groups <br/>
-Classic Load Balancer: <br/>
Register instances with load balancer <br/>

Elastic Load Balancing Use cases<br/>
-High availability and fault-tolerant applications<br/>
-Containerized Applications <br/>
-Elasticity and scalability <br/>
-Virtual Private Cloud <br/>
-Hybrid Environments <br/>
-Invoke functions over HTTP <br/>

## 2.Amazon CloudWatch <br/>
Why cloudwatch is needed? <br/>
-How do you know when to launch more Amazon EC2 instances? <br/>
-Is your application's performance and availability being effected by a lack of sufficient capacity <br/>
-How much of your infrastructure is used? 

