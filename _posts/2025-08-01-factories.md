---
layout: post
title: "Factories"
date: 2025-08-01
---

## Factories

Factories are a design pattern used to address creational issues. When you have an application 
that creates objects it then uses, you're at risk for breaking the Dependency Inversion 
Principle and your high level policy may become dependent on your low level detail. 

Any solution you come up with to this problem should also consider the Open-Closed principle 
to avoid just trading mistakes. 

The Factory method uses an abstract application that has a `make()` method that returns a generic 
item (so, instead of a Circle or Square, it would return their parent or shared interface, Shape).
It would also need a `getShapes()` method. This is where the key of the breaking of dependencies 
happens. `getShapes()` gets back from the implementation of the application a list of Strings 
that can be used as arguments in the `make()` method.
(Not shown is that Circle and Square both implement the Shape interface that Shape factory knows 
how to use)
So:

````
abstract Class ShapeFactory {//Or an interface
    Shape make(String shapeName);
    String[] getShapeNames();
}

class ShapeFactoryImpl extends ShapeFactory { //Or, implements the interface
    private Point origin = new Point(0.0, 0.0);

    public Shape make(String shapeName) {
        return switch (shapeName) {
            case "circle" -> new Circle(origin, 1);
            case "square" -> new Square(origin, 1);
            default -> throw new IllegalStateException("Unexpected value: " + shapeName);
        };
    }

    public String[] getShapeNames() {
        return new String[]{"circle", "square"};
    }
}
````
Typically, the Factory method uses an abstract class and then implements it. It could be 
an interface that's implemented instead, and if you were to do that, you'd be pretty close to the 
Abstract Factory Method. 

The Abstract Factory method lets you have a concrete application that implements a Factory Interface
(ah, the above code is making a lot of sense!) And you could then pass in a variety of 
ShapeFactory Implementations. You could make 2D shapes, or 3D shapes, or maybe your shapes work on 
something other than a flat plane. The important thing is that the application doesn't know, or need 
to! 

Yes, you might observe the small risk introduced by breaking type safety. It could be mitigated with a 
suite of unit tests that ensures the strings that are passed at run time are strings that are preserved 
and then accepted again by the ShapeFactory implementation. And, by doing this, you have successfully 
allowed for independent deployability (and development) of the high level policy and the low level 
details, as well as inverted the dependency between them. 
Well done!


**Happy Friday!**