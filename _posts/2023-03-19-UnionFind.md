---
layout: post
title: UnionFind
---

Union-Find: 여러 노드가 있을 때 union, find 연산으로 구성. 특정 2개의 노드를 연결해 1개의 집합으로 묶는 연산으로 구성된 알고리즘 <br/>
Union: 특정 2개의 노드를 연결해 1개의 집합으로 묶는 연산 <br/>
Find: 두 노드가 같은 집합에 있는지 확인하는 연산<br/>

유니온 파인드 핵심 이론<br/>
union 연산: union(a,b)는 $a \in [A]$, $b \in [B]$ 일 때, $A$ $\cup$ $B$ <br/>
find 연산: 특정 노드 a에 관해 a가 속한 집합의 대표 노드 반환 연산. $a \in [A]$ find(a)는 A 집합의 대표 노드 반환<br/>
알고리즘 구현 방법
1. 1차원 배열 이용. 처음에는 각 집합의 대표 노드는 각각의 노드. 모두 대표 노드이므로 자신의 인덱스값 초기화<br/>
<img src="/_images/Union-Find_1.jpg" width="400" height="500">
2. 2개의 노드를 선택해 각각의 대표 노드를 찾아 연결하는 union 연산 수행. <br/>
<img src="/_images/Union-Find_2.jpg" width="400" height="500">
3. find 연산은 자신이 속한 집합의 대표 노드를 찾는 연산. 이는 대표 노드를 찾을 뿐 만 아니라 그래프를 정돈하고 시간 복잡도를 줄이는 역할을 한다.<br/>
<img src="/_images/Union-Find_3.jpg" width="400" height="500">
find 연산 작동원리<br/>
(1) index와 value값이 동일한지 확인 (집합의 대표 노드 유무 확인)
(2) 동일하지 않으면 value값이 가르키는 index값 위치로 이동 (이 노드가 속한 대표 노드 찾아가기!)<br/>
(3) 이동 위치의 index와 value값이 같을 때까지 1~2 반복. 이 반복이므로 재귀 사용.<br/>
(4) 대표 노드에 도달하면 재귀 함수를 빠져나오며 거치는 모든 노드의 값을 대표 노드값으로 변경.<br/>
find 연산 시간복잡도<br/>
연산할 때 거치는 노드들이 바로 대표 노드와 연결돼서 연산 속도가 O(1)



출처: DO it! 알고리즘 코딩테스트

