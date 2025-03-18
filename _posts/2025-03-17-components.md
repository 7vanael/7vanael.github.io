---
layout: post
title: "Components"
date: 2025-03-17
---
## Where guide rails turn into guide posts

As I've been working my way though the video sessions with Uncle Bob, most 
of the early content is quite clearly imperative. "Name your functions this way."
"Design your classes that way." "Architect your dependencies like so."
The transition to component design had a notable shift in tone as the principles 
for components (Reuse Equivalence, Common Closure, & Common Reuse) are not ones 
that work in concert with each other the way the SOLID principles do. 

In SOLID, by adhering to single responsibility, you are more likely to be 
set up to also implement Open-Closed. If you are compliant with Open-closed, 
then you're already most of the way (if not already) following Dependency 
Inversion. And if you have inverted your dependencies, then you're poised 
for Interface Segregation and if you do it right, then you are already compliant 
with Liskov Substitution. The principles build on each other, almost as if one 
refines the implementation of the one that came before.

There certainly may be times when your solution won't be quite wholly compliant 
with all the SOLID principles, and even Uncle Bob agrees that it may not be 
possible to always be 100% SOLID compliant, but the principles at least do not 
countermand each other.

The principles for Component design, however, are in tension. To follow the 
implications of the Release Reuse Equivalence, you need to have a lot of classes 
to make release cycles worth it. But that makes it harder and less likely you'll 
be able to adhere to the Common Reuse Principle, which says if you use a component, 
you should be using every class within it. One principle drives your component 
size up, while the other drives it down. Here, there are now not imperatives, 
but instead warnings to consider: Going this way leads to this trouble, but 
going that way brings a different trial instead. 

Worse yet, Uncle Bob says that your chosen tradeoffs are likely to need to change 
over time, so the reassurance of doing it well once with SOLID has now given way 
to a perpetual evaluation of changing needs. 

Time for the balancing act to begin.

**Cheers!**