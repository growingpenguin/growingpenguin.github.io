---
layout: post
title: Algorithm Sorting
---

Sorting Algorithm <br/>
**1. Permutation Sort** <br/>
1) Find the all the permutations for the given list <br/>
2) Pick one permutation <br/>
3) Check whether it is sorted. If the given list is a sorted one, return the list <br/>

Example <br/>
1.[1,2,3] is given <br/>
2.Possible Permutations: [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] <br/>
3.Pick one permutation: [1,3,2] <br/>
=>No, not sorted. <br/>
4.Pick one permutation: [1,2,3] <br/>
=>Yes, it is sorted => return [1,2,3] <br/>

Implementation <br/>
https://gist.github.com/growingpenguin/b5e3730e4f04b30e2d6aa60957209953

**2. Selection Sort** <br/>

Professor Description (Recitation2)
1) Find the biggest with index <= i
2) Swap
3) Sort 1...i-1
It is usually called the prefix max function to find the biggest element of the array between index 0 and index i. <br/>
Professor code (Recitation2)


Example <br/>
1. 7 1 3 8 2 

Implementation<br/>
https://gist.github.com/growingpenguin/58b21a8fe8743642a724de6f55fb5b55
<br/>

**3. Insertion Sort** <br/>
Implementation <br/>
https://gist.github.com/growingpenguin/d845a69964587406e6dfa245e4e7a1b8
<br/>
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


Implementation<br/>
https://gist.github.com/growingpenguin/fd2880f24745c4e32663892913094da1
 
