---
layout: post
title: "The Documents"
date: 2025-02-26
---

## Sometimes the journey is the reward... 
### But sometimes you just need to know what document to look for.

Have you ever spent ages making incremental but not end-result meaningful progress
on some nuanced function just to find out later that it was built into
the language this whole time?

Today was for frequencies. 

There's plenty of times I'm sure that you'd have a vector or list of items
or numbers or characters, and you'd like to know what you have and how many of each.
(Today I wanted to know about prime factors, but that's really not the point)

Clojure has you covered! 

Let's say you have a happy vector here: 

[2 2 3 5]

This one is nice and little and you can see what's going on. Maybe you don't need
 to translate that into anything at all. But if it were unruly, like this one:

[2 2 3 5 7 5 3 5 3 3 2 7 7 3 5 2 5 3 3 5 7 3 3 3 7 2 5 3 5 7 17 19 2 3]

Then you might quite like the ability to do this: 

```
user=> (frequencies [2 2 3 5 7 5 3 5 3 3 2 7 7 3 5 2 5 3 3 5 7 3 3 3 7 2 5 3 5 7 17 19 2 3])
{2 6, 3 12, 5 8, 7 6, 17 1, 19 1}

```
https://clojuredocs.org/clojure.core/frequencies#example-542692cac026201cdc326b14

The journey is nice, but it's even nicer with good tools. 

**Cheers**
