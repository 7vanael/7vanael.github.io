---
layout: post
title: "Bubble Sort"
date: 2025-06-05
---
## Bubble Sort Algorithm

The Bubble sorting algorithm is molasses compared to the QuickSort 
and MergeSort algorithms previously discussed. Without tailored 
optimizations in LinkedList, it is nearly 500 times slower than 
QuickSorting, and over **2,000 times** slower than MergeSort with 
LinkedLists. 

ArrayList also saw notable decrease in performance (though it's hard 
to bea the drama of 2000!). Bubble sorting with ArrayList was 10 times 
slower than Merge sorting, and 50 times slower than Quick sorting. 

With stats like these, it's hard to imagine when or why you might 
try to use a bubble sort!

````
BubbleSort Performance Testing
=============================

BubbleSorting DataStructures.LinkedList:
Time: 675609.694375 milliseconds
Final size: 10000

BubbleSorting DataStructures.ArrayList:
Time: 219.280792 milliseconds
Final size: 10000
````
That's a run time of +11 minutes on LinkedList!

An early termination mechanism had no significant improvement in 
run time that I found, but may in some cases for particular data 
sets that are close to sorted, so I left it in.

To get it to run in any reasonable amount of time, I had to add 
specialized functions to my datastructures. I started with methods 
like, lessThanNext & swapWithNext. Even these weren't enough and I 
had to condense it into a final very specialized function that 
combined the evaluation with the swap. This strays pretty far from 
the baked in data structures, but is an interesting exercise in 
improving performance. (And even so, it is still somewhat lacking.)

````
BubbleSorting DataStructures.LinkedList:
Time: 214397.398583 milliseconds
Final size: 10000

BubbleSorting DataStructures.ArrayList:
Time: 66.406625 milliseconds
Final size: 10000
````

(That's still about 3.5 minutes, ouch!)

**Cheers!**