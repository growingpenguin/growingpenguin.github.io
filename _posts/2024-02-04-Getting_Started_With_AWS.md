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

## Tour of the AWS Console & Services in AWS 
-Regions Selector <br/>
Choose the region that will give you low latency <br/>
![Getting_Started_With_AWS3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/86840536-fca8-4fa5-9eb6-b7da3be2ed1c)
-Services by category <br/>
![Getting_Started_With_AWS4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8455c102-a3a6-4d4d-aab7-e66bc95439fa) <br/>
-Search bar <br/>
Can search for a service and have a look of features, resources, blogs, documentations, knowledge articles, tutorials, and marketplace <br/>
![Getting_Started_With_AWS5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/376a6682-74f7-4153-9c2e-f83ca1328169) <br/>
-Navigating Route53 Console <br/>
![Getting_Started_With_AWS6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b35e899b-bda4-44e6-a90a-938a7fdbfcff)<br/>
The reason the region selector turns to global, is because it does not require a region selection <br/>
No matter where you are, you will get the same view <br/>
-Navigating EC2 Console <br/>
![Getting_Started_With_AWS7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f7808dc5-0558-43e5-afd8-fcf0137eb652) <br/>
If the console is ran in another region, view will be different in terms of the region seen <br/>
So it is important to stay within the same region for the entire duration <br/>
-AWS Global Infrastructure <br/>
Gives lots of information around your services <br/>
-Navigating AWS Regional Services <br/>
Give the services list by region <br/>
Not all services are in every region <br/>
![Getting_Started_With_AWS8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3744c4fe-daf6-46c3-bc51-d900a35c947f)<br/>

Reference: <br/>
https://ap-northeast-2.console.aws.amazon.com/console/home?region=ap-northeast-2 <br/>
https://aws.amazon.com/about-aws/global-infrastructure/ <br/>
