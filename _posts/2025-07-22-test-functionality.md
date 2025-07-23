---
layout: post
title: "Test Functionality"
date: 2025-07-22
---

## Don't test the function, test its functionality

I've recently had the pleasure of refactoring some architectural aspects of my project and 
that meant reworking quite a bit of code. I was trying to get out of a multimethod I had previously 
implemented (when I did it, it was a great idea, but the needs of the project changed, and now 
it wasn't a great idea anymore).

I had written terrible initial tests for my functions; essentially stubbing them out and just 
verifying that they called the right functions with the right parameters. 
If I had instead written tests that tested that the data was transformed in the way I expected, 
then I could have refactored the entire multimethod out and not changed a single test and reduced 
my refactoring time by about two thirds. 

I think this goes back to an ongoing struggle that I'm sure anyone who is new to embracing TDD can 
relate to; writing tests can seem time-consuming and a bit like a chore at first! Yeah, yeah, ok, 
I can get a failing test that's pretty quick by piping through a bunch of junk tests. It turns out, 
it did technically let me write my code according to TDD, but that didn't mean it was clean code. 

It's a bit like going vegetarian then living off oreos and potato-chips. Sure, you're being 
vegetarian, but you'd get a lot more benefit out of it if you actually ate some vegetables. 

**Cheers!**