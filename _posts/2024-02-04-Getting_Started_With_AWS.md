---
layout: post
title:  "Getting Started With AWS"
---

# Getting Started With AWS
## AWS Cloud Overview - Regions & AZ
### AWS Regions
-AWS has Regions all around the world <br/>
-Names can be us-east-1, eu-west-3... <br/>
-A region is a cluster of data centers <br/>
-Most AWS services are region scoped <br/>
If we use one service in one region and use it in another region, it will be like a new time of using the service <br/>

### How to choose an AWS Region? <br/>
-**Compliance** with data governance and legal requirements <br/>
:Data never leaves the region without your explicit permission <br/>
-**Proximity** to Customers <br/>
:Reduced latency <br/>
-**Available Services** within a Region <br/>
New services and new features aren't available in every Region <br/>
-**Pricing** <br/>
Pricing varies region to region and is transparent in the service pricing page <br/>

### AWS Availability Zones 
-Each region has many availability zones (usually 3, min is 3, max is 6) <br/>
Example <br/>
ap-southeast-2a <br/>
ap-southeast-2b <br/>
ap-southeast-2c <br/>
-Each availability zone(AZ) is one or more discrete data centers with redundant power, networking, and connectivity <br/>
-Each availability zone(AZ) is seperate from each other, so that they are isolated from disasters <br/>
ex. If something happens to ap-southeast-2a, we know that it is designed not to cascade into ap-southeast-2b, or ap-southeast-2c <br/>
-They're connected with high bandwidth, ultra-low latency networking <br/>
Altogether, linked together, they will form a region <br/>
![Getting_Started_With_AWS1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1fa1a9ea-1bdf-4a7d-be6b-afd73e1f8d60) <br/>
### AWS Points of Presence (Edge Locations)
-AWS has 400+ Points of Presence(400+ Edge Locations & 10+ Regional Caches) in 90+ cities across 40+ countries <br/>
-Content is delivered to end users with lower latency <br/>
![Getting_Started_With_AWS2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b095bdd3-a3f1-4589-ba67-38d1c20fdcc9)<br/>
### Tour of the AWS Console
-AWS has Global Services: <br/>
IAM, Route53(DNS), CloudFront(Content Delivery Network), WAF(Web Application Firewall) <br/>
-Most AWS Services are Region-scoped <br/>
Amazon EC2(Infrastructure as Service), Elastic Beanstalk(Platform as Service), Lambda(Function as Service), Rekognition(Software as a Service) <br/>



