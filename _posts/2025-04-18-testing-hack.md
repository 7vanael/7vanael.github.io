---
layout: post
title: "Testing Hacks"
date: 2025-04-18
---
## Testing complex data structures

I've been writing tests for functions that take in a multi-field state 
and to be honest with you, I'm not really interested in going back and
figuring out all the test-states I made for testing some other feature. 
Those states might specify fields I don't care about and tracking all 
the names and associated exact configuration is a little much. 

But, I still need to have a big state to pass into my functions so they 
can manipulate any field they care to

````
{:interface           :gui
   :board               nil
   :active-player-index 0
   :status              :welcome
   :players             [{:character "X" :play-type nil :difficulty nil}
                         {:character "O" :play-type nil :difficulty nil}]
   :turn-phase          nil}
````
This is a lot to have to configure for every test input and output, 
especially if I'm never going to test or care about character O's difficulty. 
 So I made myself a handy little function that will let me specify exactly the 
fields that I want to, and it will fill in defaults for all the rest:

````
(defn state-create [{:keys [board active-player-index status x-type o-type x-difficulty o-difficulty turn-phase]
                     :or   {board               nil
                            active-player-index 0
                            status              :welcome
                            x-type              nil
                            o-type              nil
                            x-difficulty        nil
                            o-difficulty        nil
                            turn-phase          nil}}]
  {:interface           :gui
   :board               board
   :active-player-index active-player-index
   :status              status
   :players             [{:character "X" :play-type x-type :difficulty x-difficulty}
                         {:character "O" :play-type o-type :difficulty o-difficulty}]
   :turn-phase          turn-phase})
````

That takes up a good bit of space, but lets the rest of my tests be nice and compact!

````
(it "moves to select-board if o-type is set to human"
             (let [event     {:x 144 :y 350}
                   new-state (multis/mouse-clicked (test-gui/state-create {:status :config-o-type}) event)]
               (should= (test-gui/state-create {:status :select-board :o-type :human}) new-state)))
````


**Happy Friday!**