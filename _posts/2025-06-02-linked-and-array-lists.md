---
layout: post
title: "LinkedList & ArrayList"
date: 2025-06-02
---
## Why different list types?

#### ArrayLists
ArrayLists are just what they sound like, lists with an array under the 
hood. It will maintain order, it's fast to search by index and, with 
the List, it will do the up-sizing and copying to a larger memory block 
without you having to manage the details. 

Because it is an array, it is fastest while adding to the end and 
searching by index with O(1). Other operations are O(n) because, 
modifying anything other than the end may require shifting over every 
subsequent stored value. 

#### LinkedList
LinkedLists are quite different from ArrayLists; they don't occupy a 
single contiguous memory block and so never have a modification 
operation that requires copying the entire data set anywhere 
(well, unless you decide to go copy the data, but that's beside the 
point). LinkedLists store data in Nodes. Nodes are objects that contain 
the value you're storing, as well as instructions on how to find the 
next value and the previous value. 
This means that it's very fast to modify the beginning or end of a 
LinkedList (O(1)) but doing anything in the middle is slower (O(n)) 
because it can't go directly to any index, it must traverse the list 
to find out from each node where to find the next node until it finds 
the node it is looking for. 
This makes LinkedList an easy choice for if you have data you don't 
expect the middle of to change often, but will traverse the entire 
list for most use-cases. 


**Cheers!**