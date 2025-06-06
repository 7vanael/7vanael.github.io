---
layout: post
title: "QuickSort"
date: 2025-06-03
---
## Quick Sort Algorithm

Quick sort is one of the more popular sorting algorithms. It's a 
recursive function that takes an unsorted list, chooses a pivot point
(pivot point selection method may vary between implementations, but 
it seemed that the last item in the list was a popular choice). It then 
sorts all the data that's less than the value of the pivot value to the 
left, everything larger to it to the right, then places the pivot 
point in between them. This means in the first call, the pivot point 
is placed in its final location! 

`[4 6 8 2 1 9 3]`

`[2 1] [3] [4 6 9 8]`

Quick sort is then called recursively on the left segment and the right 
segment, until there is a single number passed into the range. 

`[2] [1]` &
`[4 6] [8] [9]`


Quicksort is light on memory usage since it's an in-place sort.
The performance of Quicksort can vary widely based on the data
structure used however! Because it operates on index references and 
has multiple value reassignments, it's best to use a data structure
that supports referencing by index with speed. 
````
QuickSorting LinkedList:
Time: 1479.936292 milliseconds
Final size: 10000

QuickSorting ArrayList:
Time: 4.214792 milliseconds
Final size: 10000
````
When given identical sets of random numbers, LinkedList takes more than 
350 times longer than the ArrayList! 

We know LinkedLists are slower at accessing and modifying the middle 
of the list because it has to traverse it from node-to-node every time. 
ArrayLists, on the other hand, can directly access values by index and 
so are much faster with this algorithm that capitalizes so much on 
index-based references.

**Cheers!**