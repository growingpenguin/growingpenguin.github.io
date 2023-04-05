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
hab(k) = ((ak+b)mod p)mod m
$$ H(p,m) = {hab(k)| a, b \in [0,1,...p-1]} $$
