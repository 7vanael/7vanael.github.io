---
layout: post
title: "Run! And other ways to stop being lazy"
date: 2025-03-06
---
## If side effects are the point

Lazy-sequences are great, but sometimes you need them to get to work 
already! But, they'll only process when the data is called, so, 
how do you get it to hand it over? 

There's a handy set of functions that will force evaluation of the 
lazy sequence you have on hand. 

### Clojure Sequence Processing Functions Comparison

| Function | Purpose                                                                       | Returns | Best Used When                                             | Example |
|----------|-------------------------------------------------------------------------------|---------|------------------------------------------------------------|---------|
| `doall`  | Forces evaluation of a lazy sequence and retains the result                   | The fully realized sequence | You need to force evaluation AND keep the result  | `(doall (map println (range 5)))` <br>Prints 0 1 2 3 4 and returns the sequence (nil nil nil nil nil) |
| `dorun`  | Forces evaluation of a lazy sequence but discards the results                 | `nil` always | You only care about side effects and want to save memory   | `(dorun (map println (range 5)))` <br>Prints 0 1 2 3 4 and returns nil |
| `doseq`  | A loop specifically for performing side effects over a sequence               | `nil` always | You want iteration with side effects; like using "for"     | `(doseq [x (range 5)] (println x))` <br>Prints 0 1 2 3 4 and returns nil |
| `run!`   | Runs the procedure via reduce for side effects on successive collection items | `nil` always | You want a cleaner way to apply a function for side effects | `(run! println (range 5))` <br>Prints 0 1 2 3 4 and returns nil |

Run! is the latest addition to the list. It seems to be a slick reimplementation 
of dorun that needed a little more layering. Doall is for if you want the best 
of both worlds, the stored result and the side effects and don't mind using 
the memory to do it. If you have loops, then you might be looking for doseq. 
But you probably don't, so you probably aren't!

**Cheers!**