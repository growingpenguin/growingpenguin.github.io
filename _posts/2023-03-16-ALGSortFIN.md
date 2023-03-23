---
layout: post
title: Algorithm Recitation 2nd week
---

Sorting Algorithm <br/>
**2. Selection Sort** <br/>

Professor Description (Recitation2)
1) Find the biggest with index <= i
2) Swap
3) Sort 1...i-1
It is usually called the prefix max function to find the biggest element of the array between index 0 and index i. <br/>
Professor code (Recitation2)


Example <br/>
1. 7 1 3 8 2 

**3. Insertion Sort** <br/>

**4. Merge Sort**<br/>
[geekforgeeks MergeSort](https://www.geeksforgeeks.org/merge-sort/?ref=lbp)<br/>
Example <br/>
1. (6) (0) (4) (5) (1) (3) (8) (2) <br/>
2. Merge <br/>
(6, 0) (4, 5) (1, 3) (8, 2) <br/>
3. Sort <br/>
(0, 6) (4, 5) (1, 3) (2, 8) <br/>
4. Merge <br/>
(0, 6, 4, 5) (1, 3, 2, 8) <br/>
5. Sort <br/>
(0, 4, 5, 6) (1, 2, 3, 8) <br/>
6. Merge <br/>
(0, 4, 5, 6, 1, 2, 3, 8) <br/>
7. Sort <br/>
(0, 1, 2, 3, 4, 5, 6, 8) <br/>

Code<br/>
<script src="https://gist.github.com/growingpenguin/3a8bb2b57f752199e8689c9bc4cd624b.js"></script>

 
