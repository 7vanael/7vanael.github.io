---
layout: post
title: "Clojure Function Feature"
date: 2025-02-28
---

## Conj vs Cons

There are two similar ways to add items to a collection that 
work differently and may have different results depending on 
the collection type you use it on. 

| | `cons` | `conj`                                                              |
|---|---|---------------------------------------------------------------------|
| **Syntax** | `(cons element collection)` | `(conj collection element(s))`                                      |
| **Vectors** | Adds to beginning, returns seq:<br>`(cons 1 [2 3])` → `(1 2 3)` | Adds to end, preserves vector:<br>`(conj [1 2] 3)` → `[1 2 3]`      |
| **Lists** | Adds to beginning, returns seq:<br>`(cons 1 '(2 3))` → `(1 2 3)` | Adds to beginning, preserves list:<br>`(conj '(2 3) 1)` → `(1 2 3)` |


Cons is straight forward, you call for the element first, it's 
added at the beginning of your collection regardless of type. 

Conj is a little lazier, it asks for the collection first, and 
it behaves differently based on its type. Lists are linked lists 
with each element pointing to the location of the next. It's easier 
to have the list point to the new element, then the new element point 
at the previously first element than it is to trace through the entire 
list to find the last element and add a pointer to the new element. 
Conversely, with vectors, they are stored in a block of memory together 
and instead of rewriting the entire vector to make room at the front, 
it just gets tacked along at the end where there's possibly unassigned 
memory. (Chances can be improved by method of vector creation but that isn't 
today's scope!)


**Thank goodness for Friday**
