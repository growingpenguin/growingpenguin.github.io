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
### Dynamo DB - Basics
-DynamoDB is made of Tables <br/>
-Each table has a Primary Key (must be decided at creation time) <br/>
-Each table can have an infinite number of items (=rows) <br/>
-Each item has attributes (can be added over time - can be null) <br/>
-Maximum size of an item is 400KB <br/>
-Data types supported are: <br/>
  Scalar Types - String, Number, Binary, Boolean, Null <br/>
  Document Types - List, Map <br/>
  Set Types - String Set, Number Set, Binary Set <br/>
### DynamoDB - Primary Keys
**Option1: Partition Key (HASH)** <br/>
-Partition key must be unique for each item <br/>
-Partition key must be "diverse" so that the data is distributed <br/>
-Example: "User_ID" for a users table <br/>
![AWS_Serverless:_DynamoDB2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f7bca090-b997-4014-9fd5-35ff46370b5d) <br/>
**Option2: Partition Key + Sort Key (HASH + RANGE)** <br/>
-The combination should be unique for each item <br/>
-Data is grouped by partition key <br/>
-Example: user-games table, "User_ID" for a Partition Key and "Game_ID" for Sort Key <br/>
![AWS_Serverless:_DynamoDB3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/81f625a6-1a92-4331-ba6b-a5a26cd319bb) <br/>
### DynamoDB - Partition Keys (Exercise)
-We're building a movie database <br/>
-What is the best Partition Key to maximize data distribution? <br/>
movie_id, producer_name, leader_actor_name, movie_language <br/>
Answer: "movie_id" has the highest cardinality so it's a good candidate <br/>
Is unique for each row <br/>
"movie_language" doesn't take many values and may be skewed towards English so it's not a great choice for the Partition Key <br/>
=> Point: Always choose the parttion key with the highest cardinality and that can take the most amount of values <br/>
## DynamoDB Basics - Hands On
### Create Table
Database is already created for us <br/>
1)Enter Table name, Partition Key, and Sort Key <br/>
![AWS_Serverless:_DynamoDB4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/40170eff-a659-4008-be86-1c5c428a5a24) <br/>
Table name: Users <br/>
Partition key: user_id, (type is String)<br/>
2)Settings <br/>
![AWS_Serverless:_DynamoDB5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/390512aa-d969-4556-a4cb-85607c5dcbd7) <br/>
3)Table Class <br/>
![AWS_Serverless:_DynamoDB6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/47467eab-c42a-48a6-b524-fc87d6e95776) <br/>
Dynamo DB Standard: recommended for most use cases <br/>
Dynamo DB Standard-IA: Data is infrequently accessed and give you some cost optimizations <br?
4)Read/Write Capacity Settings <br/>
Privisioned: In the free tier <br/>
Reading Capacity: Off, Writing Capacity: Off <br/>
=> Privisioned a read and write capacity <br/>
Two provisioned capacity units are within the free tier, so two for reads and two for writes <br/>
5)Secondary Indexes <br/>
Skip <br/>
6) Estimated Cost <br/>
![AWS_Serverless:_DynamoDB7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b6233220-a70f-413c-82f2-5cecb907151a) <br/>
=> Within the Free tier <br/>
7) Encryption at Rest <br/>
![AWS_Serverless:_DynamoDB8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1706bc60-0a49-4ca6-abec-18dede533a5a) <br/>
8)Overview of Users Table <br/>
![AWS_Serverless:_DynamoDB9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c758a3d2-ee53-4480-ad40-5756ea44fb2f)
Can confirm Partition key, Sort key, and Capacity mode <br/>
9) See Items by clicking View items <br/>
9-1) Choose user_id and define define partition key <br/>
![AWS_Serverless:_DynamoDB10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f30ae069-b661-42b5-9276-ab02107d1416) <br/>
9-2) Add attributes <br/>
Create though form <br/>
![AWS_Serverless:_DynamoDB11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b99ff23a-d95f-4081-99b7-402f2fa09afd) <br/>
Create though json <br/>
![AWS_Serverless:_DynamoDB12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/0f210914-4456-4e4b-8644-cb416f90165f) <br/>
10)First item created <br/>
![AWS_Serverless:_DynamoDB13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b8fd10fd-0be7-446e-8e76-a15d51061f53) <br/>
Item John Doe created in my table <br/>
user_id, first_name, and last_name <br/>
11)Second item created with the same user_id? <br/>
![AWS_Serverless:_DynamoDB14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/401c032e-1e9c-4ea8-adab-909ec88f8fda) <br/>
=>Going to have a problem, because I am using the same user_id as before and has to be unique, when I have just the partition key <br/>
12)Create second item with a new attribute <br/>
![AWS_Serverless:_DynamoDB15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d0e2373e-bb65-499d-9521-cd1e3a892ae5) <br/>
-Request is successful <br/>
-As for an RDS database, would've had a problem such as columns not defined, some values or null <br/>
-Can have john to have a first name and last name, and have Alice to have an age and first name <br/>
=> Completely fine to you to add attributes over time. The only thing that has to be non-null is the user_id <br/>
-In the example, john has a null age, and alice has a null last_name by default <br/>
This is the risk and the power of dynamo DB. You can add attributes over time without impacting previous data <br/>
13)Create a Second table <br/>
![AWS_Serverless:_DynamoDB17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d63472e1-831e-4a11-9b3b-d0fbcd966be3) <br/>

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
