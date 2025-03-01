---
layout: post
title: "Loops & recursion II"
date: 2025-02-27
---

## Loops are almost the same as recursion, but not quite 

Recursion can expand; It could be called before the end, or tail,
of a function. This would allow you to do expansive tree functions. 

I used recursion in my tic-tac-toe game; every time the computer had
to choose their move, it would play out every variation of each move 
choice and calculate how likely that move was to result in a win based
on every possible play that could be taken after it. Then each branch 
would report up the score calculation for each of its child branches
and at last, report to the parent call the summation score for each current
choice, and then it just picked the best score. 

Easy. 

Well... at least it's easy for tic-tac-toe. But what if there were more branches?
What if I tried to do that for chess? Too bad, I can't. Not just because I 
am not very good at chess, but because the estimated minimum number of terminating 
branches in chess is [Shannon number](https://en.wikipedia.org/wiki/Shannon_number)
roughly 3.7 * 10^43. If I asked my computer to try to recursively find each terminal
game state, I would have a stack overflow. 

Ok, so recursion can consume huge amounts of data if it's used anywhere in a function
other than at the very end, or the tail, you might say. What about loops? 
In Clojure, the recur call is there to ensure the next pass through the function is 
done on the same memory block as the last one. This means every pass through uses the 
same memory, so -no- expansion of data and never any stack overflow. Loops may also
be processed a little faster than recursive functions which may not 

But, you ask, if loop is so great, why do we keep coming back to talk about recursion? 
Great question. In my research so far, it's easy to find a lot of reasons that are very
quickly out of my depth, but one of the arguments in favor of recursion appears to be 
that it is in line with the functional nature of Clojure; Data is immutable, but to
iterate through a loop so often has implicit variable manipulation (a counter or tracker 
most often). Using recursion is more clearly a consumption of data to create new data.
No breaking the immutability of data there!

**Cheers**
