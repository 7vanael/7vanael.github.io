---
layout: post
title: "Submodules"
date: 2026-01-07
---

## Submodules

Ok, so the submodules needed a little more work than I initially gave them credit for, but 
I think that makes this even better to write about.  I had modeled much of my work on the blog that 
appeared to already be there, but it seems like, though there was a .gitmodule that listed 
the blog, running `git submodule status` didn't actually reveal that git recognized the 
blog as a submodule! So I suspect someone might have done a lot of legwork, including 
writing a troubleshooting script that cloned the blog repo directly into the project, 
which then required them to add /blog to the .gitignore which then gave this message when 
I tried to install the blog as a submodule: 
```
git submodule add git@github.com:cleancoders/blog.git blog
The following paths are ignored by one of your .gitignore files:
blog
hint: Use -f if you really want to add them.
```

Ahha,and then I find the troubleshooting step in the README with a command for a script 
that runs: 
`  git clone git@github.com:cleancoders/blog.git`
So... since the blog repo seems to have never been initialized as a submodule, probably most 
people who used it couldn't get it to load and so were manually cloning the repo right into 
the project, and so when I tried to actually make the blog a submodule:
```
git submodule add git@github.com:cleancoders/blog.git blog
The following paths are ignored by one of your .gitignore files:
blog
```
Yes, of course `/blog` needed to be ignored, we don't want to track the blog files here, they 
have their own repo! But, since the blog wasn't recognized in this project as a submodule, 
git would certainly have tracked and uploaded all the blog files in this project's history. Not great. 

Ok, so, delete the blog file at the root, remove /blog from .gitignore, then add the blog as a 
submodule, and update it, and it should be all set!

Now I just have the small task of notifying people that they need to delete that folder before 
pulling these changes... right after I get my GitHubAction working properly!

**Cheers!**