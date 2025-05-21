---
layout: post
title: "Before All & Each"
date: 2025-05-15
---
## Rediscovering Junit

I've been jumping back in to my once homeland of Java, but with 
a decidedly different perspective. I remember it was a month 
at least of learning Clojure and feeling like I was trying to 
translate what I wanted to do first into Java then trying to 
convert Java into Clojure. 
I guess I didn't realize at some point along the way I stopped 
having to reference the old ways when working in Clojure anymore 
and, boy oh boy, is the re-entry weird! Declaring variables? 
Instantiating objects? Multipart function signatures? What's 
all that about again? And, while I had used Junit, I certainly 
hadn't practiced TDD with it, so most of my looking things up is 
centered around that. 

First up is @BeforeAll. I like the @annotations, it's important to 
note they come before functions. @BeforeAll must annotate a static 
function. This means there's only one for the whole class, not 
one template for different instances of the same class.
This will run once, and might be a good use for setting up a testing 
environment. If you need something that will run before **each** 
test, then you can use @BeforeEach. 
So, when you get to feeling pretty repetitive instantiating your tested 
class for each and every test, you might instead: 

````
private Bowling bolwing; 

@BeforeAll
void setUp() {
    bowling = new Bowling();
}
````

Initializing the variable outside the setup function lets each 
method access it. However, since it's used in a static method, 
it must also be a static variable. 
The remainder of the tests don't need to be static however, because 
the entire point is that a new instance of bowling will be created 
BeforeAll tests.

**Cheers!**