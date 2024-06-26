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
<br/>
Types of Load Balancer <br/>
|    Application Load Balancer   |   Network Load Balancer    |   Classic Load Balancer  |
|-----------------|----------------|--------------|
|  Load balancing of HTPP or HTTPs requests    |  Load balancing of TCP or UDP or TLS requests   | Load balancing of HTTP, HTTPS, TCP, and SSL requests  |  
|  Routes traffic to targets based on contentd of requests  |  Routes traffic to targets based on IP Protocol data | Load Balancing across multiple instances |
|  Operates at the Application Layer(OSI Model Layer7)  |  Operates at the Transport Layer(OSI Model Layer4) | Operates at both the Application Layer and Transport Layer |
<br/>
How Elastic Balancing Works <br/>
-Application Load Balancer and Network Load Balancer: <br/>
Register targets to target groups and routes the traffic to target groups <br/>
-Classic Load Balancer: <br/>
Register instances with load balancer <br/>
<br/>
Elastic Load Balancing Use cases<br/>
-High availability and fault-tolerant applications<br/>
-Containerized Applications <br/>
-Elasticity and scalability <br/>
-Virtual Private Cloud <br/>
-Hybrid Environments <br/>
-Invoke functions over HTTP <br/>
<br/>
## 2.Amazon CloudWatch <br/>
Why cloudwatch is needed? <br/>
To use AWS efficiently, you need insight in your AWS applications. <br/>
-How do you know when to launch more Amazon EC2 instances? <br/>
-Is your application's performance or availability being effected by a lack of sufficient capacity? <br/>
-How much of your infrastructure is actually being used? 
<br/>
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
<br/>
## 3.Amazon EC2 Auto Scaling  
Why is scaling important <br/>
If setting the capacity based on when having the most traffic, it generates unused capacity, leading to waste of EC2 resources. <br/> 
When setting capacity on average traffic income, it generates over capacity <br/>
Amazon EC2 Auto Scaling <br/>
-Helps you maintain application availability <br/>
-Enables you to automatically add or remove EC2 instances according to conditions that you conditions that you define <br/>
-Detects impaired EC2 instances and unhealthy applications, and replace instances without your intervention <br/>
-Provide several scaling options - manual, scheduled, dynamic, or on-Demand, and predictive <br/>
<br/>
Auto Scaling Groups <br/>
: Collection of EC2 instances that are treated as logical grouping for the purposes of automatic scaling and management <br/>
<br/>
Scale out vs. Scale in <br/>
Scale out: Launch instances due to increase in traffic <br/> 
Scale in: Terminate instances due to decrease in traffic <br/>
<br/>
How Amazon EC2 Auto Scaling work? <br/>
**What?** <br/>
Launch Configuration <br/>
AMI <br/>
Instance Type <br/>
IAM Role <br/>
Security Groups <br/>
EBS Volumes <br/>
**Where?** <br/>
VPC and Subnets <br/>
Load Balancer <br/>
**When?** <br/>
Maintain Current number<br/>
Health Checks <br/>
Manual Scaling<br/>
Min, max, desired capacity <br/>
Scheduled scaling<br/>
scheduled actions <br/>
Dynamic Scaling <br/>
scaling policies <br/>
Predictive Scaling <br/>
AWS auto scaling <br/>
<br/>
AWS auto scaling <br/>
-Monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at lowest cost <br/>
-Provides simple, powerful user interface that enables you to build scaling plan for resources <br/>
