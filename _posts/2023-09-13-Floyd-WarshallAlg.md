---
layout: post
title: Floyd-Warshall Algorithm
---

FLoyd-Warshall: Shortest distance algorithm 
Function: Search the shortest distance between all nodes
Feature: 
Available to implement even if there are negative weight edges <br/>
Access algorithm using dynammic programming <br/>
Time Complexity <br/>
O(V^3)<br/>

Basics of FloydWarshall <br/>
: If there is a shortest distance between A node and B node, and there is a K node between the shortest distance, then the partial distance is also
the shortest distance <br/>
D[S][E] = min(D[S][E], D[S][K]+D[K][E]) <br/>

Implementation Process <br/>
(1) Declare and Initialize an adjacent matrix <br/>
if S==E -> Same blank is 0, Other blanks are initialized as infinity <br/>
(2) Store the graph data in a shortest distance matrix <br/>
If the starting node is S, destination node is E,the weight is W, matrix is filled with edge information <br/>
D[S][E] = w <br/>
(3) Update the matrix with recurrence formula <br/>
Update the matrix values repeating the nested loop <br/>
Floyd-Warshall algorithm logic <br/>
for stopover node k (1 ~ N): <br/>
  for starting node S (1 ~ N): <br/>
    for destination node E (1 ~ N): <br/>
D[S][E] = min(D[S][E], D[S][K] + D[K][E])
      
Floyd-Warshall algorithm identifies the shortest distance between all nodes, so has a slow time complexity of O(V^3) 
