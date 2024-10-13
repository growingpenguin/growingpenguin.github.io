---
layout: post
title:  "Causality Theory"
---

# Causality Theory 
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

## Correlation vs. Causation
Multiple explanations for the observed correlations might exist <br/>
Situation1: <br/>
Smoking -> Cancer <br/>
Smoking indeed causes cancer and there is causal dependencies that can be observed <br/>
Situation2: <br/>
Gene --- Smoking <br/>
|  <br/>
Cancer  <br/>
Intricate explanation might be..maybe there is a gene out there that is active that causes me to smoke but the same gene also gives me cancer <br/>
=> This can also induce the absurd correlation between smoking and cancer <br/>
Task: Distinguish from one another. Which one is the true one <br/>

## To check Causality
Distinguish two causal graphs from one another to find out which one is the true one <br/>
(1)Find 100 people randomly -> Force them to smoke <br/>
(2)Collect data whether they get cancer or not <br/>
(3)Find 100 other people randomly -> Force them not to smoke <br/>
(4)Collect additional data <br/>
=>If cancer rates differ between two subpopulations, then we can say smoking causes cancer. <br/> 
Randomized experiment was performed which has been used in clinical trials for decades, but this is also known as an **intervention**. <br/>
**Intervention or Randomized experiment** helped understand the correlation <br/>

## Correlation vs. Causation 2
How a randomized experiment(randomizing who smokes and who doesn't) helps in the language of DAGs <br/>
Pre-intervention: Before the intervention, two causal graphs existed <br/>
Gene --- Smoking <br/>
|  <br/>
Cancer  <br/>
Smoking -> Cancer <br/>
Post-intervention: After the intervention <br/>
Gene -/- Smoking <br/>
|  <br/>
Cancer  <br/>
(1)Effectively cutting off the relationship between Gene and smoking variable <br/>
(2)Observed data from that <br/>
(3)After cutting the edge, smoking and cancer become independent <br/> 
(4)Whereas intervening with smoking or not, it will not change the dependency and the correlation between smoking and cancer will still exist <br/>
=> How intervention or randomized experiment helps distinguish two causal graphs from one another <br/>

## Why do we need causal graphs?
This experiment may be impossible to perform, because forcing people to smoke is not ethical <br/>
If certain experiments cannot be performed, if having expert knowledge and causal graphs are known from expert knowledge, then without performing the experiment, I can actually predict what would happen if I perform the experiment <br/>
=> If knowing which graph is a true causal graph, if intervening on smoking, whether cancer rates will change or not, <br/>


## Structural Causal Models (SCM)
![CausalModel1](https://github.com/user-attachments/assets/40755adf-1192-4ee2-93e7-99ab4921068e) <br/>
X causes Y <br/>
![CausalModel2](https://github.com/user-attachments/assets/9a829a6d-50fa-42e5-bb0c-67c6eff9d33b) <br/>
-X is sampled from sound distribution Px <br/>
-E is sampled from sound distribution Pe <br/>
This is independent from X and a variable I never get to observe <br/>
It is not on the graph, but I know that it affects my variable Y <br/>
-Y can be written as a function of X and E together <br/>
While X and E are independent <br/>
![CausalModel3](https://github.com/user-attachments/assets/2f7f4d24-a16b-4108-93cd-adf63273e5f4) <br/>
-In general, if we have a bigger graph, variable Y is a function of its parent set parent Y <br/>
E is again independent from all the parents <br/>
=> Typical assumption for using structural equations <br/>

## Interventional Distributions
What happens if I intervene and sample in your distribution? <br/>
Causal graph and structural equations that come with it <br/>
![CausalModel4](https://github.com/user-attachments/assets/dc3052b8-d678-43e6-b512-5fb76a713914) <br/>
1)Perform an intervention on Y <br/>
Setting a value of Y to something, forcing it to take lower case y <br/>
2)Replace where would I see the variable Y with the realization of y <br/>
3)Y no longer depends on X, but set by the value I decide <br/>
Causal graph is the one on the right hand side <br/>
4)These structural equations now induce another joint distribution on the random variable if I am sampling from if I perform this experiment <br/>

## Causal Bayesian Networks
SCM is not the only way to represent causal relations, there is something called **causal bayesian networks** which is a less detailed description <br/>
![CausalModel5](https://github.com/user-attachments/assets/a5f54a71-7b65-4a7b-8569-b6f76f7a107f) <br/>
-Causal Bayesian Networks is DAG which is a causal graph alongside with a joint distribution that factorizes with respect to the graph <br/>
-From these two, we can calculate interventional distributions by using the factorization formula and using the causal graph assuming that there are no latent variables <br/>

Reference: <br/>
https://www.youtube.com/watch?v=Czk3aczfZlk&t=850s <br/>
