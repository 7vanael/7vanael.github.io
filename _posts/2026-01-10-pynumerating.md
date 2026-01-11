---
layout: post
title: "Pynumerating"
date: 2026-01-10
---

## Python Enumerating

I've been working on figuring out how to best go over a set in python and pull out just what I need. In this case, 
I want to know all of the indexes (of self.cells, a list of strings) that are EMPTY and return them as a List[of ints]
```jupyter
def available_moves(self) -> List[int]:
    moves = []
    for i in range(len(self.cells)):
        if self.cells[i] == self.EMPTY:
            moves.append(i)
    return moves
```
Using range is one of the ways to get an iterable, something better than a list, something you 
can iterate over. We remember from yesterday's perusal of the docs that there's another magical way to 
get an iterable from a list that also includes the ability to retrieve the index: 
```jupyter
for i, v in enumerate(['tic', 'tac', 'toe']):
    print(i, v)

0 tic
1 tac
2 toe
```
Given this template, we can re-write our first function: 
```jupyter
def available_moves(self) -> List[int]:
    moves = []
    for i, cell in enumerate(self.cells):
        if cells == self.EMPTY:
            moves.append(i)
    return moves
```
Then, there's some craft we can do to shorten this up even more; we could directly define moves as, 
`[i` the list of indexes `for i, cell in enumberate(self.cells)` from the set of indexes and cells 
`if` only including `cells = self.EMPTY` where the cell value is empty. We do want to return a list that's 
seperate from the list of cells. We wouldn't want to unnecessarily modify state here. But also, we're starting 
from a list of strings and getting a list of ints (index values) so having a new list also happens to be necessary 
in this case. 

```jupyter
def available_moves(self) -> List[int]:
    moves = [i for i, cell in enumerate(self.cells) if cells == self.EMPTY]
    return moves
```
And from here, it looks like we just have unnecessary local variable assignment!
```jupyter
def available_moves(self) -> List[int]:
    return [i for i, cell in enumerate(self.cells) if cells == self.EMPTY]
```

**Cheers!**