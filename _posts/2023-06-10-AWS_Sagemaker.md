---
layout: post
title: AWS Sagemaker
---

# AWS Sagemaker #
ML Pipleine <br/>
Section1: <br/>
Problem Formulation <br/>
: Formulate problem according to the business problem <br/>
Section2: <br/>
Collect and Label Data <br/>
:Collect data according to the problem and if needed label the data <br/>
Section3: <br/>
Evaluate Data <br/>
EDA (Explorative Data analysis)
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
: If the model is tuned, feature enginerring, training, evaluating the model process should be repeated. <br/>
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

