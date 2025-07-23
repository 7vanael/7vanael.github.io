---
layout: post
title: "Thread Carefully"
date: 2025-07-18
---

## Threading will get you far if you use it as expected

I had a bit of data that I wanted to do a series of transformations on. It seemed like a 
dead ringer for a use case for a threader. 

I needed to configure a state based on a series of user choices. 
````
(defn configure [state]
 (-> state
        core/draw-state
        (core/config-x-type (core/get-selection state))
        maybe-config-x-difficulty
        core/draw-state
        (core/config-o-type (core/get-selection state)
        maybe-config-o-difficulty
        core/draw-state
        (core/select-board (core/get-selection state))

````
Some of the steps had to be pulled out because they were only maybe completed, but others 
were always done and should be threaded straight through. 

I was testing my threader as I piled in function calls  and got all the way to the last one 
before getting an error. It never seemed able to recognise the input I gave it and the test for 
if this function successfully selected a board refused to pass no matter what I gave it and the program 
also refused to work! 

But why? I was using the same structure I had been using on the rest of the thread! What's different 
from the last line than any of the lines above it??

I'll tell you what. The get-selection when we begin will prompt the user for a choice between 
the player types, either human or computer, and return their selection. 

This thread that I wrote was a liar; It appeared that it was working as expected through the 
config-x-type and config-o-type methods, but only happened to be working out of pure chance that they 
both knew how to process the response provided by the initial state's get-selection. It provided 
either human or computer, and that's what they both expected. Select-board, however, expected 
a board size back and had no idea what to do with human or computer (which is all it could get back 
because it's core/get-selection was referencing the initial state in the thread, not the last state from 
the line above it!) 

To rectify this mess, the 
entire implementation of the get-selection multimethod had to be reworked to provide an entire state 
back, instead of just the selection, and then all the methods that might have previously expected 
a call to include a state and a response as separate objects had to be reworked to expect just a state, 
to pull the response from the state, and then process the data as before. 

It seems like a very small change to make to get from the above code to: 
````
 (-> state
        core/draw-state
        core/get-selection
        core/config-x-type
        maybe-config-x-difficulty
        core/draw-state
        core/get-selection
        core/config-o-type
        maybe-config-o-difficulty
        core/draw-state
        core/get-selection
        core/select-board)
````
but it was more like several hours of refactoring a multitude of functions and defmethod implementations 
to streamline the process. 

Anyway, I really think it was the first two methods working that buried the lead on this one, 
but it can't stay hidden forever!


**Happy Friday!**