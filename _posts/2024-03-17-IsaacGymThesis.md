---
layout: post
title:  "Isaac Gym Thesis"
---

# Isaac Gym Thesis
##  Introduction
-RL이 성능이 좋다 <br/>
Reinforcement Learning이 요즘 머신러닝 분야에서 유행이다. <br/>
DeepRL 역시 여러 task에 있어서 초인적인 성능을 달성하였다 <br/>
-Simulator의 장점 <br/>
위험 부담 없는 환경에서 시행착오를 통해 안전성과 학습 속도를 향상시켜 실제 세계의 손상을 방지 <br/>
-RL이 직면한 문제 <br/>
CPU GPU 조합의 필요성
CPUs: Environmental Physics 시뮬레이션, Reward 계산, Environment 구동 <br/>
GPUs: Neural network models training과 inference에 있어서의 가속화 그리고 Rendering <br/> 
CPU와 GPU 사이의 전환 비효율성은 각각 순차 작업과 병렬성에 최적화되어 있으며, 상당한 계산 요구와 시뮬레이션 속도를 제한하여 로봇 심층 강화 학습의 확장성에 있어서 challenging 하다 <br/>
로봇 분야에서의 심층 강화 학습의 확장성은 2가지 병목 현상 <br/>
1) 엄청난 계산 요구 사항 및 2) 제한된 simulation speed <br/>
자유도가 높은 로봇에 대해 장기적인 행동을 학습할 때 특히 Challenging <br/>
-해결방안 <br/>
해결방안1: 하드웨어 가속기(GPU)에서 시뮬레이션을 실행 <br/>
=> 훈련 시간 및 필요한 계산 자원을 대폭 줄일 수 있음 <br/>
문제: <br/>
(1)일부 병목 현상은 여전히 해결되지 않았음  <br/>
여전히 CPU GPU 전환 비효율성 문제 지속됨 <br/>
Simulation은 GPU에서 이루어졌지만 물리 상태는 CPU로 다시 복사  <br/>
Observations and Rewards Calculation은 최적화된 C++ 코드를 사용하여 계산되었고 나중에 GPU로 다시 복사되어 Policy와 Value network가 실행됨 <br/>
(2)대표적인 로봇 환경이 아닌 단순화된 물리 기반 시나리오만 훈련되었으며, 실제로 시뮬레이션에서 실제로(sim2real) 전환하는 시도는 이루어지지 않았음  <br/>
-제한된 시뮬레이션 환경에서는 좋은 performance를 보이지만 이러한 시나리오들이 현실 세계 환경의 전체 복잡성과 예측 불가능성을 포착하지 못하기 때문에, 같은 성공이 더 복잡하고 현실적인 상황으로 이전될 것이라고 확신하기 어렵다 <br/>









## Getting started
