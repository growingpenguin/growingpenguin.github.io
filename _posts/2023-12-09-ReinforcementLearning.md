---
layout: post
title:  "Reinforcement Learning"
---

# Week 12
Prioritized Experience Replay <br/>
기존의 DQN에서 Experience Replay를 통해 Replay buffer에 저장된 과거의 경험을 기억해서 학습에 재사용. 그런데 random하게 추출한 방법이었음. 중요한 경험을 자주 재사용하기 위해 선택적으로 추출하고자 한다. <br/>
General 방식: <br/>
Transition의 magnitude of DQN error를 통해 각 transition의 중요한 정도를 평가(Proportional to DQN error) <br/>
Stochastic한 방식으로 접근함 <br/>
<br/>
Policy-based Reinforcement Learning <br/>
-No value function, Learned Policy <br/>
-Deterministic Policy: <br/>
Maps state directly to an action <br/>
-Optimal Policy: <br/>
Policy that maximizes the expected long term reward for the agent <br/>
-When system is not Markov, deterministic policy is easily exploited by the adversary, uniform random policy can be optimal <br/>
Advantages <br/>
-Can learn stochastic policies <br/>
-Better convergence <br/>
-Effective in high dimensional or continuous action spaces <br/>
Disadvantages <br/>
Converge to local optimum <br/>
Inefficient and high variance <br/>
<br/>
Policy Objective Functions <br/>
Find the best 𝜃 in a given policy 𝜋𝜃 (𝑠|𝑎,𝜃) with parameter 𝜃 <br/>
We measure quality by first estimating policy value at start state 𝑉(𝑠0, 𝜃) and find the policy parameters that maximize 𝑽(𝒔𝟎, 𝜽) <br/>
<br/>
Policy Gradient <br/>
Let the policy parameter based on the gradient of some scalar performance measure 𝐽 𝜃 <br/>
<br/>
Differentiable Policy classes <br/>
While a variety of policy classes exist, differentiable policy classes hold a special significance due to their ability to directly calculate gradients with respect to the policy parameters. This enables efficient and effective policy optimization through gradient-based algorithms.<br/>
Softmax <br/>
:Weight actions using linear combination of features <br/>
-Proportional to exponential weight <br/>
Gaussian Distribution <br/>
:Adequate for continuous action space <br/>
Neural networks <br/>
Can represent complex non-linear relationships between states and actions <br/>
<br/>
Value of a Parameterized Policy<br/>
The value of a parameterized policy in reinforcement learning represents the expected long-term reward the policy will generate starting from a specific state.<br/>
<br/>
Likelihood Ratio Policies
The goal is to find the policy parameter 𝜃 that maximizes the expected reward 𝑉 𝜃. <br/>
The expected reward can be expressed as a sum over 𝑃 𝜏; 𝜃 and 𝑅 𝜏 for all possible trajectories. <br/>
To find the optimal policy, we take the gradient of the expected reward with respect to the policy parameter 𝜃. <br/>
<br/>
Policy Gradient: Temporal Structure <br/>
Temporal structure : The way information about past rewards and events is incorporated into the learning process for improving the policy. This structure helps the agent understand how its actions over time contribute to the overall outcome and allows it to learn more efficiently and effectively.<br/>
By incorporating information from multiple rewards and taking advantage of the connection between value function and policy gradients, the agent can learn more efficiently and adapt its behavior to achieve long-term goals. However, it's important to consider the computational cost, discounting effects, and need for baseline subtraction when employing temporal structure in practical applications.<br/>
Likelihood Ratio Policies <br/>
-Empirical estimate for m sample trajectories under 𝜋 <br/>
-Unbiased, but noisy <br/>
(Expected value converges to the true gradient across a large number of samples)
-Solution <br/>
Temporal Structure <br/>
Leveraging the temporal structure of the problem allows for incorporating information from past rewards and experiences into the LRP gradient. This provides a more comprehensive view of the policy's performance and can help reduce noise by taking longer-term effects into account <br/>
Baseline <br/>
Subtracting a baseline value from the LRP gradient can help reduce variance <br/>
Alternative to MC returns<br/>
In certain situations, LRPs can present a computationally efficient alternative to Monte Carlo returns for estimating policy gradients. This is particularly beneficial for problems with large state spaces or complex policies, where traditional Monte Carlo methods may become impractical.<br/>







