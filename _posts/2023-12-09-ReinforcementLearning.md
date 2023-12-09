---
layout: post
title:  "Reinforcement Learning"
---
# Week11
TD(0) <br/>
Original 1-step TD algorithm, which updates the state-value function based on the immediate reward and the estimated value of the next state.
**n-step TD** <br/>
Incorporates additional information from the future compared to the standard 1-step TD. It uses the return obtained over n steps, instead of the immediate reward, to update the state-value function.
**TD(Lambda)** <br/>
Lambda reward는 모든 n-step까지의 가중평균된 보상. <br/>
-람다의 총합이 1이 되도록 하기 위해서 (1 - 람다) 계수로 노멀라이즈를 하여 0부터 1까지의 값을 갖도록 한다.<br/> 
-Higher the value of λ, the slower the decay, leading to a stronger emphasis on long-term rewards. Conversely, a lower λ places more weight on the immediate reward, similar to 1-step TD.<br/> 
-람다는 n step이 커질수록 보상에 대한 값을 감소시키게 작용한다<br/>
-Benefits <br/>
Stabilizes learning: By diminishing the impact of distant rewards, the decaying function helps to stabilize the learning process and avoid overemphasizing long-term goals over immediate gains.<br/>
Reduces variance: The decay helps to smooth out the noise associated with individual rewards, leading to more consistent and reliable value estimates. <br/>
Adaptive behavior: The ability to control the decay rate (λ) allows the algorithm to adapt its behavior to different tasks. For short-term tasks, a lower λ is preferred, while long-term tasks benefit from a higher λ
<br/>
**TD-Gammon** <br/>
Combination of the TD(λ) algorithm and nonlinear function approximation using a multilayer artificial neural network trained by backpropagating TD errors <br/>
<br/>
**Q-Learning with VFA** <br/>
-Minimize MSE loss by stochastic gradient descent <br/>
-Converges to the optimal Q(s, a) using table lookup representation <br/>
-Q-learning with VFA can diverge: Correlations between samples, Non-stationary targets <br/>
**Deep Q-learning DQN)** <br/>
Tries to solve this issues by Experience replay and Fixed Q-targets <br/>
Experience replay <br/>
Stores past experiences in a replay buffer and samples them randomly for training. This reduces correlations between samples and improves  generalization. <br/>
Fixed Q-targets <br/>
Fix the target weights used in the target calculation for multiple updates. This will help to improve stability <br/>
Uses a separate Q-network to generate target Q-values. This network updates its parameters periodically, making the target values less prone to rapid changes. <br/>
**Double Q-learning** <br/>
It utilizes two Q-networks to estimate the Q-values and combines them to form a more robust target for updating both networks.<br/>
Overall, double Q-learning is a valuable technique for mitigating overestimation issues in Q-learning and improving the overall performance of reinforcement learning algorithms. <br/>
그래서 2개의 estimator를 이용해서 랜덤 하게 각자를 업데이트하는 방식으로 진행할 때 2개의 차이를 이용해서 최대한 잡음을 빼버리고 업데이트하는 전략을 취하는 것 같습니다.<br/>

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







Reference: <br/>
https://ropiens.tistory.com/86
https://daeson.tistory.com/334 [대소니:티스토리]
