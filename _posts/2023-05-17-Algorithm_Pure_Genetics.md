---
layout: post
title: Pure Genetics Algorithm
---

# Pure Genetics Algorithm Problem # 
방향성이 없는 간선에 가중치가 부여된 단순 그래프(simple graph) G = (V, E)가 주어진다. V와 E는 각각 정점 집합과 간선 집합이다. 정점 집합 V를 두 개의 집합 S와 S’(=V-S)로 나누는 방법은 여러 종류가 있는데, 여러분은 S와 S’을 잇는 간선의 가중치의 총합을 최대화하도록 나눠야 한다.

**Step1: Problem Analysis**<br/>
2.1.Chromosome Expression <br/>
Binary encoding 방식을 선택하였다. Graph를 고정적으로 2개의 subgraph로 cut하므로 하나의 subgraph는 0, 다른 subgraph는 1로 표현한다. <br/>
2.2. GA Structure <br/>
1.Subgraph의 수를 random하게 생성한 뒤 그 갯수 만큼의  index를 선택해 뒤에서부터 정렬해 population pool을 형성한다. Population에 대한 Cost는 노드의 가중치를 합하는 방식으로 계산된다. <br/>
2.Roulette function을 2번 진행해 두 부모를 뽑는다. 자식은 부모의 crossover를 통해 형성한 뒤 1% 확률로 하나의 gene에 대해 mutation이 이루어진다. <br/>
3.자식은 하나 생성하며, 부모의 최악의 chromsome과 비교해 보다 우월하다면 그 chromosome을 대체해 새로운 generation이 생성되고 아니라면 generation이 유지된다. <br/>
4.제한 시간이 다 되었을 때 마지막으로 도출된 cost가 가장 높은 최선의 해를 반환한다. <br/>
2.3. Used Operators <br/>
* selection: Edge가 될 가능성이 있는 vertex 집합을 인접 리스트와 비교해  edge 연결여부에 따라 해당 가중치를 더하는 방식으로 cutsize를 측정. 기존의 Fitness공식에 절대값을 붙여 Roulette function을 시행하되 함수에 정렬한 fitness를 삽입해 기존의 정의 유지. <br/>
* crossover: Random한 crossover point에 따라 parent를 partition해 offspring에 copy하는 방식으로 부모와 같은 크기의 새로운 offspring을 형성한다. <br/>
* mutation: Random한 mutation point를 지정해 mutation rate에 따라 1에서 빼주는 형식으로 한 bit가 flip된다.  <br/>
* replacement: Steady-state GA사용. 최소의 cost를 갖는 chromosome이  offspring chromosome의 cost보다 더 크다면 최소의 cost의 chromosome이 있던 자리에 offspring이 들어가는 방식으로 세대 교체. <br/>
<br/>
**Step2: PureGA Pseudo Code**<br/>
My Pure GA Pseudo Code <br/>

**Step3: PureGA Code**<br/>
My Pure GA Code <br/>

**Step4: Results**<br/>
My Results <br/>

**Step5: Reflection**<br/>
Discussion - Project Review <br/>
순수 GA이다보니 빨리 값이 수렴이 안 되는 문제가 있었다. 따라서 Generation의 stopping condition 지정이 어려웠다. 시간 단축이 힘들었다. 여러 자료구조를 사용해 보았고 알고리즘에 있어서 time complexity가 중요한 만큼 직접 알고리즘을 구성하는 경험은 뜻깊었던 것 같다.<br/>




