---
layout: post
title: "Hammering Nails"
date: 2025-05-06
---
## I have a hammer, so I'm pretty sure that's a nail!

I learned about multi-methods and, now that I know how to work them, I like 
them a *lot!* However, it has come to my attention that, perhaps, there are 
some possible scenarios where they aren't the best tool for the particular 
job. 

I was well on my way this morning making a new feature that expanded prior 
capability and I happily dove in making multi-methods here and another 
over there. The open-closed principle at work! 

However, it came time to divy up my functions into appropriate new name-spaces 
and it was suddenly much less happy. I really only had two scenarios, and, 
while some parts of them needed to be handled differently, they were sill 
essentially performing the same over-all task. Further, they both used common 
functions between them! On top of that, deciding where the new def-multi declarations 
should live separately from any of the implementations made less and less sense. I 
really didn't need to have that much separation for these functions that just needed 
to do the same things but handle different case types. 

So, I set down my hammer and back to refactoring I went, to the old stand-by's of 
if statements (_not_ nested!!)

**Cheers!**