---
layout: post
title: "Practice Makes better"
date: 2025-02-25
---

## While perfection sounds like a great goal.. 
### Practicing to be better lets you keep improving

So you think you know how to solve a problem because you've done it once before. But 
like our trail winding up the mountain, you might find an interesting nuance along the
way that would shape your next trip better.

Today was for preparing for the Prime Factor Kata. 
Can you step through the evolution of this function driven by testing?


 (should= [] (find-prime-factors [1])

```
(defn find-prime-factors [n]
    (vector))
```


 (should= [2] (find-prime-factors [2])

```
(defn find-prime-factors [n]
    (if (> n 1) 
        (vector n)
        (vector))
```
[no change for  n = 3]

 (should= [2 2] (find-prime-factors [4])

```
(defn find-prime-factors [n]
    (cond (<= n 1) (vector)
        (<= n 3) (vector n)
        :else (vector 2 (/ n 2)))
```

 (should= [2 2] (find-prime-factors [4])

```
(defn find-prime-factors [n]
    (cond (<= n 1) (vector)
        (<= n 3) (vector n)
        :else (vector 2 (/ n 2))))
```
[This still works for  [2 3] (find-prime-factors [6])]


 (should= [2 2 2] (find-prime-factors [8])

```
(defn find-prime-factors [n]
    (loop [n n primes[]]
        (cond (<= n 1) primes
            (<= n 3) (conj primes n)
            :else (recur (/ n 2) (conj primes 2))))
```

(should= [3 3] (find-prime-factors [9])

```
(defn find-prime-factors [n]
    (loop [n n primes[] factor 2]
        (cond (<= n 1) primes
            (<= n 3) (conj primes factor)
            :else (if (= 0 (rem n factor))
                    (recur (/ n factor) (conj primes factor) factor)
                    (recur n primes (inc factor))))
```
[By not only adding a factor to the loop, but also an if to
only increment the factor if it isn't one of n, we are able to
capture repeated factors (2 2 2) or (3 3)]

This code works, but it's ugly. An If inside a cond and a loop?

*Say less*. 

```
(defn find-prime-factors [n]
    (loop [n n primes[] factor 2]
        (cond 
            (<= n 1) 
                primes
            (= 0 (rem n factor))
                (recur (/ n factor) (conj primes factor) factor)
            :else 
                (recur n primes (inc factor))))
```
Isn't that better? 
Thanks for walking the trail with me.

**Cheers**
