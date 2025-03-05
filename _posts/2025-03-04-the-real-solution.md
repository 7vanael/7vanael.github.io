---
layout: post
title: "The Real Solution"
date: 2025-03-04
---
## Sometimes the journey just looks more exciting than the destination

I was modestly dishonest in yesterday's post when I possibly left my dear
reader with the impression that I completed the solution for Euler's #7 
using the Sieve of Eratosthenes. I really delighted in the algorithm and 
finding that solution, however it had a fatal flaw. It couldn't work for 
very large numbers and so it never did provide me with a solution. 

The fatal flaw of the design is that the function used recursively could not
be called with 'recur', the excellent tool Clojure provides to allow for stack
safe recursion. So, the solution worked well for small numbers, but couldn't 
stand up to large numbers. 

The final solution was much more concise. It still used a def of primes that was 
still called by the nth of (dec n). Sadly it didn't need the Sieve of Eratosthenes 
at all (but I will say... it's pretty smooth)

````
(def primes
  (conj (filter helper/prime? (iterate #(+ 2 %) 3)) 2))
````
It iterates over integers, counting by 2's, starting at 3 (3, 5, 7, ...). 
This does use a helper function that determines if a single integer is prime or
not. It filters out anything that isn't prime, then tacks on 2 to the beginning 
as our unique first prime. 

It's a different way to think of the solution that seems to me to be both more 
elegant, but also more brute force than the Sieve at the same time. 

The best code is the code that works though!

**Cheers**
