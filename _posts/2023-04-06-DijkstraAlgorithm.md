---
layout: post
title:  "Dijkstra Algorithm"
---
Professor Recitation<br/>
**Dijkstra Algorithm** <br/>
Dijkstra Algorithm: Algorithm used to find the shortest past between two distances. <br/>
<br/>
What is different from the Minimum Spanning tree?<br/>
The shortest distance between two vertices might not include all the vertices of the graph.<br/>
Explanations<br/>
: The reason is that the shortest distance between two nodes may not require visiting every node in the graph. <br/>
<br/>
How Dijkstra Algorithm works<br/>
-Any subpath B->D of the shortest path A->D between vertices A and D is also the shortest path between vertices B and D. <br/>
Explanations <br/>
If you have found the shortest path between A and D, any subpath of that path between any two vertices is also the shortest path between those two vertices. <br/>
-Dijkstra used this property in the opposite direction. We overestimate the distance of each vertex from the starting vertex.<br/>
Then we visit each node and its neighbors to find the shortest subpath to those neighbors.<br/>
[References](https://www.programiz.com/dsa/dijkstra-algorithm) <br/>

Why can't Dijkstra Algorithm have a minus distance? <br/>
A: Because the algorithm doesn't visit the vertex its visited. <br/>
Solution <br/>
BellmanFord Algorithm : |V|-1 <br/>
갔던 곳 다시 감 <br/>
Pigeonal Principle <br/>

But |V|-1 is
=> modify weight <br/>

