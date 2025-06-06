---
layout: post
title: "Merge Sort"
date: 2025-06-04
---
## Merge Sort Algorithm

The Merge sorting algorithm is another recursive algorithm that 
uses a divide and conquer approach. It initially breaks the list 
into two sublists recursively until it has only lists of size 1. 

`[4 6 8 2 1 9 3 7]`

`[4 6 8 2] [ 1 9 3 7]`

`[4 6] [8 2] || [ 1 9] [3 7]`

`[4] [6] | [8] [2] || [1] [9] | [3] [7]`


On the way back out of the recursive tree, it combines the sublists 
into the original list, choosing to take from the list with the 
lowest number first.

`[4 6] | [2 8] || [1 9] | [3 7]`

`[2 4 6 8] || [1 3 7 9]`

`[1 2 3 4 6 7 8 9]`

The difference on the performance of Merge Sort by data type was 
present, but slightly less dramatic than in QuickSort: 

````
MergeSorting DataStructures.LinkedList:
Time: 288.058958 milliseconds
Final size: 10000

MergeSorting DataStructures.ArrayList:
Time: 18.466709 milliseconds
Final size: 10000
````

Merge sorting had a notable improvement in speed for LinkedList as 
compared to Quick sort by a factor of 4, likely due to the reduction in 
total traversals of the list. Merge sort was slower to sort 
ArrayLists by a factor of 5. These exact differences can vary with the 
precise implementation of the method. If you remove items from sub lists
as you move them to the combined lists, that allows you to avoid one of 
the traversals of the lists and so LinkedList runs almost twice as fast, 
however the performance of ArrayList suffers for the additional shifting 
of each remaining element in the sub list. 

Either way, ArrayList is still much faster than Linked List in both 
Merge and Quick sort, but Merge sorting gave up some speed for Arrays 
while gaining a lot of performance for LinkedList.

**Cheers!**