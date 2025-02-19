---
layout: post
title: "Recursive Loops"
date: 2025-02-19
---

## Day three is for repeating yourself 
In Clojure, the loops want to look more like recursive functions, and even have a sneaky 'recur' 
key word in them. Both recursive functions and loops (that I've run into so far) have you 
first address the ending condition: 
````
(if (= n 0)
    ;;return the accumulated or base value to escape
    true/tracker/accumulator
````
If you haven't met your escape, the second line will be how to modify your starting condition
and start the process again. 

With a loop, that will have you stay in the current function, but change the values of the
variables you are using. That might mean incrementing/decrementing a counter, adding the
current counter to a list, toggling a boolean, etc. 
````
    (recur (dec n) (not even-tracker))
````
With a recursive function, you *don't* "recur" but instead call your function again,
also changing your starting values
````
    (not (is-even? (dec n)))
````
This leaves us just with initializing our loop or recursive function. Both will likely be called
with some value passed in. With a recursive function, you have to pass in every value you want
to be able to change each function to the initial call. 
````
(defn is-even? [n]
````
With a loop, you can call the function with only select parameters because it's the 
initialization of the loop that will have to contain every value you want to track during the loop. 
````
(defn is-even-bigint? [n]
    (loop [n n 
            even-tracker true]
````
In this loop, I can track both the value of n and the accumulator, even-counter, even though
I didn't pass the even-counter into the function. (Though you'll notice I did have to pass
both n and the even-tracker when I called for the loop to recur)


**Cheers!**
