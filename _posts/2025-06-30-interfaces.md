---
layout: post
title: "Interfaces"
date: 2025-06-30
---

## Interfaces are so powerful

When working on my own self-contained project, making up mocks that imitated my classes was fairly 
straightforward, I could have them just extend the class they worked from and modify their behavior

````
MockObject extends RealObject{
@Override
public data getData(){
  return specialFormula;
  }
}
````
How clever it would have been if instead I had made an interface that defined the methods and 
then just let the classes implement the varying functionalities. 

At the initial time of creation the difference didn't seem to matter. When attempting to use 
the project as a library in Clojure however, the objects of course aren't quite as implementable, 
but Java interfaces are implementable in Clojure using reify. 
It even turns out, you can use a single reify call to implement multiple methods in a single interface: 

````
(defn mock-object [several defined inputs or defaults] ;These don't have to match anything in Java!
  (reify JavaInterface
    (method [input] (function if-needed)
    (method2 [defined defaults] defaults)
    ...))
````
Now, using your interface, you can have custom implementations that will behave just the way you need 
it to. 

**Cheers!**