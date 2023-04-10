---
layout: post
title:  "Algorithm Time Complexity"
---

# Algorithm Time Complexity 

**Set DataStructure Time Complexity** <br/>

DS            | Container Build(A)  | Static find(k) | Dynamic insert(x),delete(x) | Order find_min(),find_max() | Order find_next(),find_prev() 
-------------------|-----------------|--------------------------|---------------------------|---------------------------|--------------------
Unordered Array |   n    | n  | n  |   n |   n
Sorted Array | ? | logn | n | 1 | logn



**Permutation Sort Time Complexity** <br/>
DS            | Container Build(A)  | Static find(k) | Dynamic insert(x),delete(x) | Order find_min(),find_max() | Order find_next(),find_prev() 
-------------------|-----------------|--------------------------|---------------------------|---------------------------|--------------------
Unordered Array |   n    | n  | n  |   n |   n
Sorted Array | n!xn | logn | n | 1 | logn


Description <br/>
Sorting techniques <br/>
Permutation Sort: <br/>
Creates a permutation by randomly shuffling the elements. If the list is sorted,algorithm terminates. <br/>
If not, create a new permutation, repeating the process above.  <br/>
Selection Sort: <br/>
Repeatedly finding the minimum element of the sort and moving it to the front. <br/>
Insertion Sort: <br/>
Merge Sort: <br/>

Sorting <br/>
Destructive Sorting: <br/>
Overwrites an input array <br/>
Creating a new sorted list from an unsorted list without modifying the original list<br/> 
-Original list is left untouched and a new sorted list is created <br/>
-Disadvantage: Requires additional memory to store the new sorted list, which may be a disadvantage if the original list is very large <br/>
In place Sorting: Sorting the original list in memory without creating a new list<br/> 
Uses O(1) extra space <br/>
-Modifies the original list, rearranging its elements into sorted order. <br/>
-Advantage: Can be more efficient in terms of memory usage, as it doesn't require additional memory to store a new sorted list <br/>
-Disadvantage: Can be more complex and require more careful implementation to ensure that it works correctly and efficiently. <br/>
