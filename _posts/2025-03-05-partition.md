---
layout: post
title: "Partition"
date: 2025-03-05
---
## For when you only want a segment at a time

Partition came in handy today when trying to evaluate a series 
a small segment at a time. Partition is overloaded with a few 
signatures to meet your particular need, each returning a lazy 
list of lists: 

`(partition n collection)`
 
will return your collection in lists each of length n. By default, 
there will not be any repeated elements from one list to the next.

You can specify a step `(partition n step collection)` to either 
have overlapping lists (if step < n) or skip portions of the initial 
collection (if step > n).

If your partition size and step would result in an incomplete segment, 
it is dropped. You can remedy that by also providing a pad 
`(partition n step pad collection)` Your pad may be a single element,

`user=> (partition 3 3 [:a] [1 1 1 2 2 2 3])
((1 1 1) (2 2 2) (3 :a))`

or it could be a collection, elements of which would be used until 
the segment is complete. (You must define a step in order to define a pad)

`user=> (partition 3 3 [:a :b :c] [1 1 1 2 2 2 3])
((1 1 1) (2 2 2) (3 :a :b))`


**Cheers**