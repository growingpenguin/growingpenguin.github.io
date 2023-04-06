---
layout: post
title:  "Dijkstra Algorithm"
---
Professor Recitation<br/>
**Dijkstra Algorithm**
Dijkstra Algorithm: Algorithm used to find the shortest past between two distances. <br/>
<br/>
What is different from the Minimum Spanning tree?<br/>
The shortest distance between two vertices might not include all the vertices of the graph.<br/>
Explanations<br/>
: The reason is that the shortest distance between two nodes may not require visiting every node in the graph.
<br/>
How Dijkstra Algorithm works<br/>
-Any subpath B->D of the shortest path A->D between vertices A and D is also the shortest path between vertices B and D.
Explanations <br/>
If you have found the shortest path between A and D, any subpath of that path between any two vertices is also the shortest path between those two vertices.
-Dijkstra used this property in the opposite direction. We overestimate the distance of each vertex from the starting vertex.<br/>
Then we visit each node and its neighbors to find the shortest subpath to those neighbors.<br/>
[References](https://www.programiz.com/dsa/dijkstra-algorithm)


