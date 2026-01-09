---
layout: post
title: "Submodules"
date: 2026-01-06
---

## Submodules

Today I've been working on a story that intimidated me mostly because of all the parts I hadn't done before. 
I'm pretty pleased to discover that at least the first couple steps have (so far) been much smoother than expected!

First I had to make a new assets repo, which, since it's just going to be files, just needs... a folder? Alright. 
But, even if it needed to be a project with code, the next steps wouldn't change. 
Add and commit the changes you need, easy peasy.

Then, I needed to make it a submodule of another project. 

```
 git submodule add <git-cloneable-url> <optional-file-path>
```
Then, there should be a `.gitmodules` file, and it needs to have info about how to find the submodules for your 
project: 
```
[submodule "blog"]
	path = blog
	url = git@github.com:cleancoders/blog.git

[submodule "public-assets"]
    path = public-assets
    url = git@github.com:cleancoders/public-assets
```
Now my project has two! 
Then, I just need to add some breadcrumbs in the README for my friends to remind them to use 
`git submodule init` to get their submodules loaded, then `git submodule update` to pull them in, 
and they'll be ready to go!

**Cheers!**