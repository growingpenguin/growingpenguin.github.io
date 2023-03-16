---
layout: post
title: Algorithm Recitation 3rd week
---

**In-Place Algorithm** <br/>
: An algorithm that does not need extra space and produces an output in the same memory that contains the data by transforming the input 'in-place'. <br/>
However a small constant extra space used for variables are allowed. <br/>
Usually this space is O(log n), though sometimes O(n) is allowed.<br/>
Examples<br/>
In-Place: Bubble Sort, Selection Sort, Insertion Sort, Heap Sort <br/>
Not In-Place: Merge Sort(It requires O(n) extra space) <br/>
Quick Sort? <br/>
: Uses extra space for recursive function calls. It is not used to manipulate input, but only for recursive calls. <br/>

**Hashing**
[Hashing Introduction] (https://www.geeksforgeeks.org/what-is-hashing/)
Hashing  <br/>
: popular technique for storing and retrieving data as fast as possible.
Why to use Hashing?  <br/>
Searching in Binary tree requires the time complexity O(logn)  <br/>
In hashing, the above operations take an average time complexity of O(1).  <br/>
Ex. We want to design a system for storing employee records with phone numbers.
 <br/>
Basic Operations  <br/>
Hash Table: Create a new Hash Table.  <br/>
Delete: Delete a perfect key-value pair from the hash table.  <br/>
Get: Search a key in the hash table and return the value associated with that key.  <br/>
Put: Insert a new key-value pair inside the hash table.  <br/>
Delete HashTable: Delete all the HashTable  <br/>
 <br/>
Hashing components  <br/>
Hash Table: An array that stores pointers to records corresponding to a given number.  <br/>
If no existing phone number has function value equal to the index for the entry, hash table is NIL.  <br/>
Data is stored in a way that is easy to find those terms later if required.  <br/>
Hash Function: A function that converts a given big phone number to a small practical integer value.  <br/>
The mapped integer value is used as an index of the hash table.  <br/>
Its main job is to map each and possible key to a unique slot index. If every key is mapped to a unique slot index, then the hash function is known as a perfect hash function  <br/>
Collision Handling: Since a hash function gets us a small number of a big key, there is the possibility that two keys result in the same value. A newly inserted key maps to an already occupied slot in the hash table is called a collision and must be handled using collision handling technique.  <br/>
-Chaining: Make each cell of the hash table to a linked list of records that have the same hash function value.  <br/>
It is simple, but requires additional memory outside the table.  <br/>
-Open addressing: All elements are stored in the hash table itself. Each table entry either contains a record or NIL. When searching for an element, we examine the slot one by one until the desire element is found or it is clear that the element is not in the table.  <br/>

Hashing Code <br/>
https://gist.github.com/growingpenguin/5ac7dab9c105de7d4a13738e855e6a48

