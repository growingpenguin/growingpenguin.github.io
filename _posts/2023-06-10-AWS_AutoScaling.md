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
To use AWS efficiently, you need insight in your AWS applications. <br/>
-How do you know when to launch more Amazon EC2 instances? <br/>
-Is your application's performance or availability being effected by a lack of sufficient capacity? <br/>
-How much of your infrastructure is actually being used? 

Amazon CloudWatch Functions <br/>
-**Monitors** <br/>
AWS Resources <br/>
-Applications that run on AWS
-**Collects and Tracks** <br/>
Standard Metrics <br/>
Custom Metrics <br/>
-**Alarms** <br/>
Send Notifications to an Amazon SNS topic <br/>
Performance on Amazon EC2 Auto Scaling or Amazon EC2 instances <br/>
-**Events** <br/>
Define rules to match changes in AWS environment and route these events to one or more target functions or streams for processing <br/>


## 3.Amazon EC2 Auto Scaling  
Why is scaling important <br/>
If setting the capacity based on when having the most traffic, it generates unusedcapacity, leading to waste of EC2 resources. <br/> 
When setting capacity on average traffic income, it generates over capacity <br/>
Amazon EC2 Auto Scaling <br/>
-Helps you maintain application availability <br/>
-Enables you to automatically add or remove EC2 instances according to conditions that you conditions that you define <br/>
-Detects impaired EC2 instances and unhealthy applications, and replace instances without your intervention <br/>
-Provide several scaling options - manual, scheduled, dynamic, or on-Demand, and predictive <br/>


