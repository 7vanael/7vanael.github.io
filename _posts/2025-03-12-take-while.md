---
layout: post
title: "Take While"
date: 2025-03-12
---
## When it turns out you can get just exactly as much as you wanted

I was trying, per usual, to manipulate primes. I had a solution that 
worked, but, because it relied on a filter that used a loop, it was 
far from ideal when it came to run times. 

I had an alternative within reach. I already had a lazy sequence of 
primes, but couldn't put my finger on how to leverage it for this 
particular puzzle. So off to the internet I went, looking for inspiration 
on how to craft perhaps a recursive function that would let me stop 
collecting from my lazy sequence when it returned a value above my 
threshold? 

Sometimes, even the [wrong question](https://stackoverflow.com/questions/26009635/why-filter-on-a-lazy-sequence-doesnt-work-in-clojure)
can point you in the right direction. Why would you want to
filter a lazy sequence? Then it can't be lazy. (Also, you can't!) 
But, there in the answers from 11 years ago, the perfect function 
for the asker's (and my) end goal. 

### Take-while

A handy little function that will maintain the laziness of your sequence 
and accept a predicate and, optionally, a collection. 

````
(take-while #(< % n) [collection or lazy sequence]
````
And that's how you turn a > 3 second run time into just 0.02 seconds!

**Cheers!**