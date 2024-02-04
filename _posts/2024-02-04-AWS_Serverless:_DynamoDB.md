---
layout: post
title:  "AWS Serverless: DynamoDB"
---

# AWS Serverless: DynamoDB
## DynamoDB - Section Introduction
DynamoDB: NoSQL Serverless database <br/>
-Database is managed by AWS and scale for you <br/>
-Well integrated with lambda and AWS services <br/>
-Learn how to properly design DynamoDB tables, how to enable streams, and make sure DynamoDB tables are well secured <br/>
### Traditional Architecture
![AWS_Serverless:_DynamoDB1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/83a4af5d-b302-4122-8836-ed7079b6cd52) <br/>
:We have clients and they connect to an Application layer that could be made of Elastic Load Balancer, and EC2 Instances that are grouped and scaling with an Auto Scaling Group <br/>
Have a Database Layer and it could be using Amazon RDS which is backed by MySQL, or PostgreSQL, or these kind of technologies <br/>
-Traditional applications leverage RDBMS databases <br/>
-These Databases have the SQL query language <br/>
-Strong requirements about how the data should be modeled <br/>
-Ability to do query joins, aggregations, complex computations <br/>
-Vertical Scaling (Getting a more powerful CPU/RAM/IO) <br/>
If wanting a better database, you need to replace a database and get a more powerful CPU, or better disc with IO <br/>
-Horizontal Scaling (Increasing reading capability by adding EC2/ RDS Read Replicas) <br/>
As for Read Replicas, you need to limit the number of Read Replicas you can have and therefore limited into your horizontal read scaling <br/>
### No SQL Databases
-NoSQL Databases are non-relational databases and are distributed <br/>
-NoSQL databases include MongoDB, DynamoDB, ... <br/>
-NoSQL databases do not support query joins (or just limited support) <br/>
-NoSQL databases don't perform aggregations such as "SUM, "AVG",...) <br/>
-All the data that is needed for a query is present in one row <br/>
-NoSQL databases scale horizontally <br/>
If you need more write or read capacity, behind the scenes can have more instances and scale very well <br/>
-There's no "right or wrong" for NoSQL vs SQL, they just require to the model the data differently and think about the user queries differently <br/>
### Amazon Dynamo DB 
-Fully managed, highly available with replication across multiple AZs <br/>
-NoSQL Database - not a relational database <br/>
-Scales to massive workloads, distributed database <br/>
-Millions of requests per seconds, trillions of row, 100s of TB of storage <br/>
-Fast and consistent in performance(Low latency in retrieval) <br/>
-Integrated with IAM for security, authorization and administration <br/>
-Enables event driven programming with Dynamo DB Streams <br/>
-Low-cost and auto-scaling capabilites <br/>
-Standard & Infrequent Access(IA) Table Class <br/>


Footnote <br/>
non-relational databases: <br/>
Unlike relational databases that store data in tables with predefined schemas <br/>
NoSQL databases use a variety of data models, including key-value, document, wide-column, and graph formats <br/>
These models provide more flexibility in terms of data structure, allowing for the storage of unstructured or semi-structured data <br/>
distributed: <br/>
NoSQL databases are often designed to run on distributed systems <br/>
where data is spread across multiple servers or nodes in a network <br/>
This distribution can be across data centers or even geographical regions <br/>
Vertical Scaling: <br/> 
Also known as scaling up, involves enhancing the database server's resources (CPU, RAM, IO) to handle more load <br/> 
This is often simpler but can become expensive and has physical limits <br/>
Horizontal Scaling for Reads:  <br/>
Achieved by adding Read Replicas in RDS, which are read-only copies of the database <br/> 
While this improves read capacity, there's a practical limit to the number of replicas you can have, thus limiting scalability <br/>

### AWS Regions
