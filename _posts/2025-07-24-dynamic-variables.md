---
layout: post
title: "Dynamic Variables"
date: 2025-07-24
---

## For when it's only almost always the one thing

I've been working with a feature that only works with one method of saving, but it's attached to a program 
that has several ways of saving, so the save type still sometimes has to be specified. Even though, in this 
feature I really only can have one type of save method permitted. 

I had some code that did some routine functions with a http request. Typically, I'd been passing a state 
around to all of my functions, so I'd just use the state to set the save parameter. In this case however, 
I had a request that I needed to parse to create a state. Further, in production at all times, the base-state 
would always need to be `base-state {:interface :web :save :sql}` That's fine, really, I can have code that sets a default 
state and then we can update it with the real details as we go. 

Later in that same let statement: 
````
    base-state-with-id   (if game-id (assoc base-state :game-id game-id) base-state)
    loaded-state         (ttt-core/load-game base-state-with-id)
````
It's that load-game function that needs to know what save method we're using of course, and this feature 
only supports the one. 

Seems fine, yeah? 

The only trouble is my tests are wildly unhappy about this plan because, in the testing environment, when 
you aren't directly testing your server, you never want to actually spin up your server. Naturally, 
I was only passing in states with :save :mock and expecting states with a :mock save value returned to me.
I could make the tests pass by expecting :sql, however that was of course causing all of my tests to add 
and manipulate my production server, which we certainly can't let stand. 

So, what are the options? 
I can't even modify my function call to pass in the state because we get the state by calling load-game. 
I need it to always be :sql in production, but if we're testing, it should always be :mock. 

I've solved similar issues previously by having an optional second parameter passed in, like:
````
(defn get-game-from-request [request & [save]]
    (let [savemethod         (or save :sql)
        game-id              (get-game-id-from-cookies (.getCookies request))
        base-state           {:interface :web :save save-method}
        base-state-with-id   (if game-id (assoc base-state :game-id game-id) base-state)
        loaded-state         (ttt-core/load-game base-state-with-id)
        state-with-form-data (add-form-data-to-state request loaded-state)]
    state-with-form-data))
````
Maybe this problem should have been addressed in just the same way, but I decided to try an alternative;
````
(def ^:dynamic *save-method* :sql)
````
which changed the base state definition to 
````
base-state           {:interface :web :save *save-method*}
````
Ok, but what was that definition? We've used (def) before, but it's usually like 
`(def screen-width 72)` so this is using \*earmuffs* around the name as well as some ^:metadata. 
Alright, the earmuffs, or *, do some special work about threads. We aren't really using that here, but 
it is convention in Clojure to use them with your dynamic variables because they're eye-catching and make 
it easier for the next developer to be clear that you're dealing with a dynamic variable. 
Then, the ^:dynamic metadata: It is tagging this variable as dynamic, which means it could be reassigned. 
That's great, because that's exactly what we want to do!

Now, for each of my tests (or any that might cause this function to be called) I need to around the function 
call use 
``(binding [*save-method* :mock] ...)`` to set the value for my tests. Or, handily in speclj, I can just
use at the top of my describe block ``(around [it] (binding [sut/*save-method* :mock] (it)))`` and never 
worry about if this function is trying to spin up my production database again!

There's a whole list of [metadata options](https://clojure.org/reference/vars) that I'm 
sure I'll be diving into more when I need to investigate macros.

**Cheers!**