---
layout: post
title: AWS Sagemaker
---

# AWS Sagemaker #
**ML Pipleine** <br/>
Section1: <br/>
Problem Formulation <br/>
: Formulate problem according to the business problem <br/>
Section2: <br/>
Collect and Label Data <br/>
:Collect data according to the problem and if needed label the data <br/>
Section3: <br/>
Evaluate Data <br/>
EDA (Explorative Data analysis)<br/>
Section4: <br/>
Feature Engineering <br/>
Section5: <br/>
Select and train model <br/>
Section6: <br/>
Meets Business goal? <br/>
Deploy model <br/>
Section7: <br/>
Evaluate model <br/>
If the model needs more refinement~<br/>
Section8: <br/>
Tune model <br/>
Change the model network structure. Revert the parameter of the model <br/>
Additional process <br/>
Section4 -> Section5 -> Section7 -> Section8 circulates<br/>
: If the model is tuned, feature engineering, training, evaluating the model process should be repeated. <br/>
If the model meets the business goal, the model is deployed <br/>
If the model doesn't meet the goal, augmentation process can be needed <br/>
=? Augmentation <br/>
Feature Augmentation <br/>
: In the current situation, the current features are incapable of having a satisfactory inference level <br/>
=> Add features or combine the original features and make new features<br/>
Data Augmentation <br/>
: The satisfactory level of inference does not come out because there is lack of data or training/test data evaluate scores show totally different scores <br/>
Solution: Additional collection/labeling of data is done. Or data augmentation (revert the original data and add the reverted data) <br/>
<br/>
Define Business Goal <br/>
How will the business measure success? <br/>
How will the solution be used? <br/>
Do similar solutions exist, which might you learn from? <br/>
What assumptions have been made? <br/>
Who are the domain experts? <br/>
<br/>
How would you frame this problem? <br/>
Is this a machine learning problem? <br/>
Is the problem supervised or unsupervised? <br/>
What is the target to predict? <br/>
Do you have access to the data? <br/>
What is the minimum performance? <br/>
How would you solve the problem manually? <br/>
What's the simplest solution? <br/>
<br/>
Example. You want to identify fraudulent credit card transactions so that you can stop the transaction before it processes.<br/>
Why? <br/>
Reduce the number of customers who end their membership because of fraud <br/>
Can you measure it? <br/>
Move from qualative statements to quantative statements that can be measured. <br/>
10% reductions in fraud claims in retail <br/>
## Collect and label Data ##
**Collecting and securing data** <br/>
What data do you need? <br/>
How much data do you have, and where is it? <br/>
Do you have access to that data? <br/>
What solution can you use to bring all of this data into one centralized repository? <br/>
Data sources <br/>
Private data: <br/>
Data that customers create <br/>
Commercial data: <br/>
AWS Data Exchange, AWS Marketplace, and other external providers <br/>
Open-source data: <br/>
Data that is publicly available (check for limits on usage) <br/>
Kaggle, World Health Organization, US Census Bureau, National Oceanic and Atmospheric Administration (US), UC Irvine Machind Learning Repository <br/>
<br/>
Observations <br/>
ML also need a lot of data(feature/target data) - observations - where the target answer or prediction is already known <br/>
Get a domain expert <br/>
Storing data in AWS <br/>
S3 is mostly used. Used a lot as Big data analysis, Deep Learning model repository. Due to its High data IO speed, security, and stability. <br/>
<br/>
**Extract, transform, load(ETL)** <br/>
Original data in data stores ( Datas can be in different formats and places) -> Bring the data -> Catalog the data -> Write the Transform Script that reverts the data source -> Write the schedule script that implements the tranform script => Data transform script is implemented -> Data source is reverted -> Data is stored again as store the refined data final table data set.<br/>
ETL with AWS Glue <br/>
-Service to do ETL <br/>
-Simplifies the complicated ETL service process <br/>
-Runs the ETL process <br/>
-ML functionality <br/>
-Crawls data sources to create catalogs that other systems can query <br/>
-Bring Datasources, revert the data, emit single endpoint <br/>
<br/>
**Data Encryption** <br/>
Amazon S3 encryption <br/>
Amazon RDS encryption <br/> 
**AWS CloudTrail for Audit** <br/>
AWS cloudtrail track user activity or application programming interface(API) usage <br/>
What kind of access was made in the past by whom by what role <br/>
<br/>
## Section3: Evaluate Data  ## 
-Format Data <br/>
-Examine Data types <br/>
-Perform descriptive statistics <br/>
-Visualize data <br/>
<br/>
**You must understand your data(Format Data, Examine Datatypes)** <br/>
Ensure that it's the right data format for your analysis <br/>
-Whether this is a table, whether the attribute that is supposed to contain float is a string <br/>
<br/>
**-Perform descriptive statistics <br/>** <br/>
Load python Dataframe <br/>
Reformats data into tabular representation  <br/>
Converts common data formats CSV, Json, Excel, Pickle and others <br/>
<br/>
Data Analysis using pandas <br/>
Dataframe schema, Descriptive statistics(Overall statistics, Multivariate Statistics, Attribute Statistics <br/>
<br/>
## Section4: Feature Engineering ## 
