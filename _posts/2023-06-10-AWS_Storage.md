---
layout: post
title: AWS Storage
---

# AWS Storage #
Storage types <br/>
Amazon EBS (Elastic Block Storage) <br/>
-Stored in the unit of Block <br/>
-High speed SSD or HDD is attached to computing instances <br/>
Amazon S3 (Amamzon Simple Storage Service) <br/>
-Stored in the unit of Object <br/>
Amazon Elastic File System <br/>
-Similar to NFS(Network File System)<br/>
-There's a large storage. Through the network diverse machines can use the storage as if the file system is connected to my desktop <br/>
-Large enterprises and applications use the storage <br/>
Amazon Simple Storage Service Glacier <br/>
-The storage is a cold storage. Datas that are not accessed frequently but needs to be stored are stored in the above storage <br/>
<br/>
## 1.Elastic Block Storage (EBS) 
Block Storage vs. Object Storage <br/>
What if you want to change one character in a 1GB File?
Object storage:Entire file must be updated <br/>
Block storage: Change one block(piece of the file) that contains the character<br/>
<br/>
Amazon EBS <br/>
Create individual storage volumes and attach them to the Amazon instances <br/>
-EBS offers block level storage <br/>
-Volumes are automatically replicated within Availability zones <br/>
-It can backed up automatically to Amazon S3 through S3 snapshots. <br/>
-Uses <br/>
Boot volumes and storage for Amazon Elastic Compute Cloud (Amazon EC2) instances <br/>
Data storage with a file system <br/>
Database hosts <br/>
Enterprise applications <br/>
<br/>
Amazon EBS volume types <br/>

<br/>
## 2.Simple Storage Service (S3) 
