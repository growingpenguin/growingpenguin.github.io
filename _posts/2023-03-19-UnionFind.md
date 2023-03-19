---
layout: post
title: UnionFind
---

Union-Find: 여러 노드가 있을 때 union, find 연산으로 구성. 특정 2개의 노드를 연결해 1개의 집합으로 묶는 연산으로 구성된 알고리즘 <br/>
Union: 특정 2개의 노드를 연결해 1개의 집합으로 묶는 연산 <br/>
Find: 두 노드가 같은 집합에 있는지 확인하는 연산<br/>

유니온 파인드 핵심 이론<br/>
union 연산: union(a,b)는 $a$$\in$$A$일 때, $A$ $\cup$ $B$ <br/>
find 연산: 특정 노드 a에 관해 a가 속한 집합의 대표 노드 반환 연산. 노드 a가 A 집합에 속해 있을 때 find(a)는 A 집합의 대표 노드 반환<br/>


출처: DO it! 알고리즘 코딩테스트

