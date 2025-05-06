---
layout: post
title: "Mouse-clicking"
date: 2025-05-01
---
## Why isn't my mouse clicking working?!

It turns out I, and several others have lamented, despite seeing that the 
mouse indeed has acknowledged that it was clicked, and yet, the triggerable 
action was not taken! Why??

Well, dear reader, let me tell you. Quil has some cool built-in functions,
many of which are based on the [Processing API](https://processing.org/).
As such, you can find a quil implementation for most of the functions found 
in Processing. 
You might find some interesting functions there that will help you interact 
with your [mouse](https://processing.org/reference#input-mouse). But, 
choose carefully!

If you skim through that list, find "mouseClicked" call yourself a day, 
you may later find that the frame-rate of your sketch is faster than your 
user's click on and off. This means, the user thinks they've clicked, but 
since it wasn't in the same frame rate, your mouse-clicked function doesn't 
trigger. 

May I recommend you browse just a little longer to find the mouse-pressed 
function. It will trigger your activity after the mouse button is pressed 
down, without having to wait to see if it's let up again or not. 

Game changer.

**Cheers!**