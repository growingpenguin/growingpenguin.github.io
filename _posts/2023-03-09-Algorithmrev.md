---
layout: post
title: Algorithm review 2nd week
---
# Intro #
## Quick Review ## 
Problem <br/>
Algorithm <br/>
Correctness<br/>
:We need to use induction<br/>
1.Hypothesis<br/>
2.Base Case<br/>
3.Hypothesis step <br/>
efficiency<br/>
Ex.<br/>
Algorithm A : $3n^2 + 5$<br/>
Algorithm B : $7n^2$<br/>
$T(A)=T(B)$<br/>
upper bound = lower bound<br/>
=>Tight bound<br/>

## Fig.1.3 ##
Image<br/>
This graph is respect of input size.<br/>
$logn$ < $n$ < $nlogn$ < $n^2$ < $2^n$ <br/>
$logn$ ~ $nlogn$ is ok. But $n^2$ and $2^n$ is not ok. <br/>
For these alorithms, we need to change these algorithms into either $logn$, $n$, or $nlogn$ due to high time complexity.<br/>

## Asymptotic Notation ## 
|    Big-Oh       |   Static       |   Theta      |
|-----------------|----------------|--------------|
|  Upper Bound    |  Lower Bound   | Tight bound  |  
|  Worst Case     |  Best Case     | Average Case |
lower bound: Find it easily because it is the lowest number

# Chapter1 #
## Ch1.-prob1
Write a number that finds the largest number in a list(an array) of n numbers.<br/>
Base case $k=0$, $k=1$ both are available.<br/>
Pseudo code<br/>

## Ch1.-prob.44 ##
Can you verify the correctness of algorithms for Exercise1?<br/>
Pseudo code <br/>

## Ch1.-prob.20
Image <br/>
Image <br/>
Pseudo code<br/>
Ans: $T(n^2)$

## Ch1.-prob.29
T1 : forloop1 <br/>
T2 : forloop2 <br/>
$T1(n)$ + $T2(n)$ = $T(n)$ <br/>
Pseudo code<br/>

## Ch1.-prob.30
Pseudo code<br/>
$T(n)$<br/>
$T(outerloop)$: n/2 <br/>
$T(innerloop)$: 1+2+3+...+n/2 <br/>
$T(n)$ = $\frac{n}{2}$ x $\frac{(1 + n/2)}{2}$

# Lecture2 : Sorting
## Vocabulary ##
Container <br/>
:A collection of objects.(e.g.vector,list,set, ...) <br/>
Interface <br/>
:A collection of operations.(e.g.sequence,set, ...) <br/>
Datastructure <br/>
:A way to store data that supports a set of operations.<br/>
Container and Interface are part of a Datastructure.<br/>

## Set ##
**Set Interface**
|Container         |   Static  |   Dynamic               | Order                                                    |
|------------------|-----------|-------------------------|----------------------------------------------------------|
|build(A)<br/>len()|  find(k)  | insert(x)<br/>delete(x) | find_min()<br/>find_max()<br/>find_prev()<br/>find_next()          |
                                                                       
<br/>
build(A): Put student data one by one in a set.<br/>
          데이터를 자료구조 안에 넣는 동작이다.<br/>
find(k): find the student or object that one wants to find according to the studentID or key <br/>
insert(x), delete(x): It is dynamic because the object contained changes during the runtime. <br/>
k stands for key. <br/>

**Set Datastructure** <br/>
|                |    Container     |  Static     |      Dynamic                |             Order                                               |       
|----------------|------------------|-------------|-----------------------------|-----------------------------------------------------------------|
|                |      build(A)    |  find(k)    | insert(x)<br/>delete(x)     |  find_min()<br/>find_max()     | find_next()<br/>find_prev()    |
| Unsorted Array |        n         |      n      |              n              |                                n                                |
|  Sorted Array  |        ?         |    logn     |              n              |              1                 |                logn            | 
<br/>
find(k):<br/>
Suppose a situation when we want to find a student with a specific student ID. In the worst case, the student could be situated in the end of the set.<br/>
That's why we use Big-O and the time complexity is n in the unsorted array.<br/>
insert(x),delete(x): Its time complexity is 'n' cause we have to fill in the value irrelevent whether sorted or not. <br/>
find_min(),find_max(): When it is sorted, we can find it immediately. So the time complexity is one. <br/>
find(k): <br/>
Think of Binary Search. <br/>
 $\frac{n}{2}$ $x$ $\frac{1}{2}$ $x$... <br/>
find_next(),find_prev(): This operation finds the value next or previous to the value that we want to find. That's why its time complexity is logn. <br/>
Exactly the same with find(k). <br/>
build(A): Building a set itself takes about n time complexity. So the total time complexity should be inevitably more than n. So the best time complexity <br/>
for the set datastructure is **nlogn**, which is slightly higher than n.<br/>


# Sorting #
**Vocabulary : Sorting** <br/>
Destructive: Overwrites the input array<br/>
-It is in an operation that modifies the original data structure, set. It modifies the original set and also creates a new set with the modified contents.<br/>
-It is useful when memory usage is in concern or if you want avoid making unnecessary copies of data. <br/>
-ex.Suppose we are sorting a new memory to find the person with the largest number. It would be a waste of memory to save all the data one by one. 
In place: Uses O(1) extra space<br/>
-It is in an operation that modifies the original data structure, set. It modifies the original set directly without creating a new set.<br/>
-It doesn't allocate similar or bigger data. <br/>
-It operates without taking up extra space and the sorting spends constant time.<br/>

**Permutation Sort** <br/>

**Selection Sort** <br/>

**Merge Sort** <br/>



