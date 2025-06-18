---
layout: post
title: "Factories"
date: 2025-06-10
---

## How can you have applications not depend on the objects they create?

An application has objects that it uses to complete its work. Those objects 
have to come from somewhere, and the application probably has to ask for them. 

How, then, can we have an application that doesn't need to be redeployed 
every time we make a change to one of the objects it uses?

You can use a factory; it will be in charge of actually calling for object creation. 

````
public interface ShapeFactory {
    Shape createSquare(int length);
    Shape createTriangle(int base, int height, double angle1, double angle2, double angle3);
    Shape createCircle(int radius);}
````
This is a fine factory, but it still, if we add a new shape, or change the formula for 
how we want to define our triangles (right triangles are all the rage now, and they 
only need a base and height because who wants eccentric triangles? No one) we would
have to still update our application package to implement the right interface with 
all the `Shape createSquare` etc. 

So, we do a crazy thing, and we only make one method in the interface!

````
public interface ShapeFactory {
    Shape make(String shape);
    }
````

What? That's crazy. And, a little bit it is, because that means in the package with our 
objects we now have to store all the names of the shapes we want to be able to make 
as a list of Strings. 

So, it actually needs one more method: `getMethods` that returns a list of Strings 
and then the application can call the `Shape make("circle")` and be provided with 
the latest rendition of a circle. 

This does present a trade-off of compromising type safety with string transmittal of 
method names, but, a hearty suite of unit tests should keep you well protected, and 
the independent deployability is worth it. 

**Cheers!**