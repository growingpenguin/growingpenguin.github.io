---
layout: post
title:  "Hashing Algorithm"
---
Professor Recitation<br/>
**Hashing**
Instead of allocating a lot of space, let's allocate less space. <br/>
Store the items in a smaller dynamic direct access array with m = O(n) slots instead of u.  <br/>
Why dynamic? m grows and shrinks depending on the number of items. <br/>
<br/>
Two solutions are possible to avoid collision. <br/>
3.1 Division hash function <br/>
h(k) = k mod m<br/>
If it is uniform, this is a good idea. However, what if all keys have the same reminder. <br/>
This is a terrible choice. <br/>
How about *randomly* choose the hash function? <br/>
3.2.Universal hash function <br/>
hab(k) = ((ak+b)mod p)mod m <br/>
H(p,m) = {hab(k)| $a, b \in [0,1,...p-1]$} where a!=0
(a,b are random integers, p is the prime number greater than the range of keys, and m is the size of the hash table)

Understanding through Examples<br/>
<img src="../_images/Hashing1.jpg" width="500" height="700">
<img src="/_images/Hashing2.jpg" width="500" height="400">

Implementation using C++ <br/>
<script src="https://gist.github.com/growingpenguin/075fb606432b80940ac874f394962b84.js"></script>
