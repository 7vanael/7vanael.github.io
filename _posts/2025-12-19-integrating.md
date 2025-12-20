---
layout: post
title: "Integrating"
date: 2025-12-19
---

## Integrating

Ok, so after my very long day yesterday when I thought I was finally ending on a win after achieving a pretty excellent 
solution (in my opinion at least) for the more complicated migration and its spec, then having the wind taken out of 
my sails as I found that all the integration tess were failing, I got to start my day back into investigating 
how on earth I happened to break all the integration specs and then merge my changes from a branch back into main. 

Well, the best possible news was that wonder of wonders, the integration tests pass! No changes to the code, no 
changes to the specs. Just green lights across the board! 
This is where it's probably useful to note that after a certain period of intense focus and hard work, there's probably 
some benefit in taking a break. For any period of time, but at least some. Because this struggle turned out to be 
the silliest. The Integration specs do real calls between our program and other services. That means, in addition to 
needing the database to run, it needs the program running too!! And so, my magic trick of making a whole suite of tests 
pass was just one `clj -Mtest:run` away. 

Then it was on to merge conflicts of trying to get the changes I had worked on for over a day to join the main branch 
where they could be useful to the rest of the team. 
There were merge conflicts upon merge conflicts, which I was so very confused by because I was certain the only changes 
to these files should be coming from me. Eventually, to just make it happen, my craftsman advisor helped me roll back 
to the most important commit on the branch, merge it to main, and then just manually make the changes that had been 
subsequently made on the branch which were mostly moving files between folders. 


It turns out, the source of my merge conflicts was probably that not one, but two commits were made in main yesterday 
that renamed the package that the migration specs lived in, and that was just too much confusion for intelliJ to 
figure out!! No wonder. 

Finally, at long last, Github actions are green, the team is up and running, and, for those who like to live in hope, 
migration troubles are in the rearview mirror. 

**Happy Friday!**