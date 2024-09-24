---
layout: post
title:  "Causality Theory"
---

# Ros2
## Short Introduction to Causality
Causal models: the mechanism between variables, to understand the underlying system between variables <br/>
-Can be represented using graphs <br/>
-What does it mean for a variable X to cause variable Y? (X -> Y) <br/>
Ex1: Simple Example <br/>
Assumption: We are having an exam, two girls are participating. X is an answer to the exam question <br/>
Girl1:First X is realized as X=x <br/>
Girl2:Then Y is realized conditioned on X=x <br/>
=> There is a clear causal connection between random variables X and Y <br/>
First X is realized and variable Y is realized based on the value of X <br/>
How can we see the asymmetry between random variables? <br/>
The asymmetry can not be seen from the data itself, but an experiment or **intervention** can be performed <br/>
Situation1: <br/>
The teacher tells the answer to Girl1 <br/>
(1)The value of x is forced to take a certain value <br/>
(2)Because of the underlying mechanism, value of y will be realized and will be set as the answer <br/> 
Situation2: <br/>
The teacher tells the answer to Girl2 <br/>
(1)Value of y is changed <br/>
(2)Because of the underlying system, the value of x will not be changed <br/>
=> This is how we can see the asymmetry between random variables in a causal system <br/>
Summary <br/>
If you force a value on X, then this affects to the answer of Y <br/>
If you force a value on Y, then this doesn't affect the answer of X <br/>
This is asymmetric relation, and if this can be observed, X is causing Y can be distinguished <br/>
<br/>
Ex2: Realistic Example <br/>
Assumption: Given a dataset of binary variables <br/>

| S: Heavy Smoker | C: Lung cancer before 60 |
|-----------------|-----------------|
| 0 | 0 |
| 1 | 1 |
| 0 | 1 |
| 1 | 1 |


S:Binary variable which stands for whether it is a heavy smoker or not <br/>
C:Binay variable which stands for whether it has lung cancer before 60 <br/>
How do we check if they are causally related? <br/>
Situation1: <br/>
Smoking => Cancer <br/>
Smoking indeed causes cancer and there is causal dependencies that can be observed <br/>
Situation2: <br/>
```mermaid
graph TD;
    Gene --> Smoking;
    Gene --> Cancer;
Maybe there is a gene out there that is active that causes me to smoke

