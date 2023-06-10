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
|  |    General Purpose SSD   |   Provisioned IOPS SSD    |   Through-put Optimized HDD  |  Cold SSD      |
|-----|-----------------|----------------|--------------|-------------------|
|Maximum Volume Size|  16TIB  |  16TIB   | 16TIB  |16TIB  | 
|Maximum IOPS/Volume|  16000  |  64000 | 500 |250 | 
|Maximum Throughput/Volume|  250MIB/S  |  1000MIB/S | 500MIB/S |250MIB/S  |  
-Maximum IOPS: Volume per max calculation <br/>
<br/>
Amazon EBS Features <br/>
Snapshots <br/>
-Point-in-time snapshots <br/>
Requests made -> instantly snapshots are made and stored in S3 buckets <br/>
-Recreate a new volume at any time <br/>
When needed a new volume can be generated  <br/>
Encryption <br/>
-Encrypted Amazon EBS Volumes <br/>
-No additional costs <br/>
Elasticity <br/>
-Increase Capacity <br/>
Even when the volume is attached to the EC2 instance it is available to change the capacity <br/>
-Change to different types <br/>
Ex. Types of storage can be changed from General Iops to Provisioned Iops <br/>
<br/>
Amazon EBS: Volumes, IOPS, and pricing <br/>
1.Volumes <br/>
-Amazon EBS volumes persist indpendently from the instance <br/>
Even when the EC2 instance is no longer used, EBS volumes persists <br/>
-All volume types are charged by the amount that is provisioned per month. <br/>
2.IOPS <br/>
General Purpose SSD:<br/>
Charged by the amound you provision in GB per month until storage is released. <br/>
Magnetic(HDD) <br/>
Charged by the amount of requests to volume <br/>
(requests:the amount you read/write) <br/>
Provisioned IOPS SSD <br/>
Charged by the amount that you provision in IOPS(multiplied by the percentage of days that you provision for the month) <br/>
<br/>
3.Snapshots <br/>
Added cost of Amazon EBS snapshots to Amazon S3 is per GB-month of data stored <br/>
Object is generated and stored in S3 to store snapshots<br/>
4.Data transfer <br/>
Inbound data transfer is free <br/>
Outbound data transfer across Regions incur charges <br/>
-Accessing EC2 instances and storages within the regions is free. <br/>
## 2.Simple Storage Service (S3) 
<br/>
