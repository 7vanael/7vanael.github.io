---
layout: post
title: "From Outline"
date: 2026-01-20
---

# Git Submodules: For when a package manager won't cut it
## How to deconstruct & organize heavy projects by using git submodules


Here's a fun contradiction: Git is designed to never lose your work, but the moment you nest one Git repository inside another, Git pretends the inner one doesn't exist. The files are there, you can see them and make changes to them, but those changes won't be tracked in the parent project's git. 
But, 'Why would you ever want to put one git project inside another?' you ask. Well, what if you find that some section of your Project A (lets say it's some useful UI components) would actually be really helpful if you could also use it in Projects B & C? 

#### How can you use the same code in multiple places?
You might just copy those files into projects B & C. But, you know that over time those files will start to drift apart. A little bug fix while you're in A, a little feature upgrade while you're in B, an innocent renaming of a method while you're in C. No way to keep these files in sync! Getting all the right changes from each project merged to make it the best version is all but impossible. Besides which, copying code is almost never the right answer! 
Ok, ok, no copied code. New plan: you'll break that section of code out of project A and make it its own project, project X. Then, you'll release it to the package manager (npm? pip? cargo?) and just use it as a dependency. Alright... So, now every time you want to make (and use!) a change from project X, you just need to update the change log, update the version, build it and publish it. Well... that could kind of work, but geeze, if this is still being actively developed, you're going to end up with dozens of versions in a month with not very useful changelog messages and preposterous versions like 1.2.176. Aside from this causing often permanent noise in the package registry (lets hope you aren't trying to build a public reputation!), you'll still not be saved from then having to go update the version in each of your projects A B & C to see the changes. 
It might finally be time to talk about git submodules. Git submodules are the solution of choice when you want to share code between projects, organize a massive codebase by splitting it into discrete repos that still work together, or manage dependencies that don't belong in a package registry.
I'll walk you through what submodules are, how to set one up, how to solve the nested-repo catch-22 with symlinks, and how to live with them day-to-day. By the end, you'll have one source of truth for shared code and the workflow to keep it in sync. Let's dive in!

### What's a submodule?
Remember that contradiction from the intro? Git ignoring a repo inside a repo isn't a bug—it's working exactly as designed. Git's policy is simple: one .git folder = one repository. When you nest repositories, Git doesn't want to accidentally track someone else's version control history. That would be chaos.
But you do need a way to say "this folder should contain code from that other repo." You could just clone the repo directly into your project, but then you're stuck with a static snapshot. If you make updates to that code, how do you share those changes with your other projects? How do you pull in updates from elsewhere?
This is what submodules solve. Instead of embedding another repository, you create a pointer to it.
When you add a submodule, you're telling Git three things:

- Where to find the code - The cloneable URL of the external repository
- Where to put it in your project - The local path where this code should live
- Which version to use - A specific commit SHA, not "whatever's latest"

This creates a difference between what git tracks, and what you see in your file structure. When you navigate to the submodule directory in your parent project, you'll see everything that's in the child project: all the files, all the code. It looks like a normal folder. And in fact, it is a normal Git repository. You can cd into it, make changes, commit, push. It's fully functional.
But, your parent repository? It doesn't care about what's inside that folder. It only cares about the bookmark: "This folder should contain commit XYZ from that repo over there." When you make those changes in the child repo, the only changes your parent repo will see is a single line change in the directory of your submodule with a new commit SHA.  

#### The two-repository dance
Because submodules are separate repositories, working with them involves a two-step process. 
1. You make changes and commit them in the submodule
2. you update the pointer and commit that in the parent

It feels a bit awkward at first, but it does make sense that to propagate changes across two git repositiories, you will have to make two git commits, and two git pushes. 

Ok, that's all great theory, but how do you get it done?

### How to create a submodule
This is the easy part. To create a submodule, you run 

```bash
 git submodule add <git-cloneable-url> <optional-file-path>
```

Depending on the size of your submodule project, this may take a moment to load, and maybe another minute for
your IDE to index and make usable.
It will produce a `.gitmodules` file, that should look like:
```bash
[submodule "child-project"]
	path = child-project
	url = git@github.com:cleancoders/child-project.git

[submodule "second-project"]
    path = optional/file/path/second-project
    url = git@github.com:cleancoders/second-project.git
```

#### Optional Branch Specification

By default, submodules don't track a branch - they track a specific commit. But you can configure them to track a branch instead:

```bash
git submodule add -b main git@github.com:cleancoders/child-project.git
```

This adds a `branch = main` line to your `.gitmodules`:
```
[submodule "child-project"]
    path = child-project
    url = git@github.com:cleancoders/child-project.git
    branch = main
```

What's the difference between tracking branches vs commits?
- Without `-b`: Your submodule is pinned to whatever commit SHA you last updated it to. You have
  finer control about what update you pull in.
- With `-b`: When you run `git submodule update --remote`, it pulls the latest commit from
  that branch.

You can also set or change the branch later:
```bash
git config -f .gitmodules submodule.child-project.branch production
```

Need to double-check? Run `git submodule status` which will show you the specific
commit SHA's referenced by your active submodule(s).

That was easy! Now you have a submodule. You can commit these changes, and then so will
everyone else on your team. Well done! Ship it!

#### Getting submodules to work on more than just 'your machine'
You've done everything you need to do to initialize the git submodule for your project, but you are immediately inundated by pings from your team that they don't have the submodule. Right, Ok, update your project's readme now to include the part where, to get the project set up, everyone else on your team will need to run 
    `git submodule update --init`
If you have submodules that have submodules themselves, go ahead and add `--recursive` to that command. 

Ok. _Now_ your team has submodules!

### Building your project despite the catch-22 of nested git repositories
Your project directory might now look a little like:

```bash
your-parent-project-root/
├── child-project-root/
    └── src/
        └── child-package1/
        └── child-package2/
    └── [...]
    └── .github/
    └── .gitignore
    └── README.md
└── spec/
    └── parent-package/
        └── test-files/
└── src/
    └── parent-package/
        └── source-files/
└── [...]
└── .gitmodules
└── .gitignore
└── README.md
```
There's a small problem brewing here with how you are going to build and deploy your parent project. Your submodule, if put at the root directory, isn't in the parent `src` path where your build process will see it. You don't want to put the entire submodule in the parent `src` path, because it will then also include all the child project's .git files, readme, and everything else that just doesn't belong! _Now_ what??

#### What are symlinks?
Symlinks, or symbolic links, are a way to put a pointer in your directory to somewhere else.
It won't move the files (which is great, because that's what we've been working around doing this whole time), it
will just provide a path to traverse.

### Sym-linking your submodule into your project
Creating a symlink is best done from the directory that you want to be the parent of your targeted
file or directory. In this case, if you wanted `child-package1` to be usable by your parent project,
you should navigate to the parent-project's src folder.

```bash
your-parent-project-root/
├── child-project-root/
    └── src/
        └── child-package1/
        └── child-package2/
    └── [...]
    └── .github/
    └── .gitignore
    └── README.md
└── spec/
    └── package-name/
        └── test-files/
└── src/                    <- go here!
    └── parent-package/
        └── source-files/
    └── child-package1/     <- to create symlinks here
    └── child-package2/
```

To make a symlink, you run `ln -s path/to/submodule/directory name-of-directory`

In the example project structure, that would be:
`ln -s ../child-project-root/src/child-package1 child-package1`
and could be repeated for as many of the child project's directories or files as is needed.
Many IDE's will have an indicator on your symlinks to remind you they are different from regular
directories, but they will also let you explore that directory as if it contained the files!

You can navigate up the file-tree with `../` but not past the project root. You also cannot
navigate the file-tree when naming the symlink, so you wouldn't be able to, from the root directory,
run:
```bash
ln -s child-project-root/src/child-package1 src/child-package1
```
"src/child-package1" is not a valid directory or file name!



### Updating the submodule and propagating changes to the parent project
So you have your submodule set up, it works, your parent project can see and use it, but doesn't try to track the changes to the submodule files. Fabulous. The set-up is complete! But now you want to use it. The entire premise of all of this was so that we could make changes to the submodule and see and use those changes in the parent project(s). 


#### Retrieving updates from submodules
Your parent project stores the submodule as a git SHA that references a particular commit. This will
not be updated unless someone updates it.
To pull in the latest changes from your submodule, run
```bash
git submodule update --remote
```
If you want to, as a matter of course, pull in submodule updates when you pull the rest
of the changes for your parent project, you can pull with:
```bash
git pull --recurse-submodules
```

An option that might be even better for your team is to update your git config to just always pull in the submodule updates whenever you pull changes from the parent project by running
```bash
    git config --global submodule.recurse true
```
This step reduces the change to the team's workflow, and so is maybe easier to get everyone to stick with! 

If you pull in changes from the submodule (so now reference a newer commit), you will have to do a git add/commit/push to propagate that change to all users of the parent project. 

#### Making changes to the submodule
You _can_ make changes to the submodule from the parent module. Your IDE changelog may be helpful
in breaking down changes for you to review and commit separately. You can also navigate in the
terminal to the submodule (not the symlink!) and do the usual `git status` `git add <changed-file>` and
`git commit -m "commit message"` and even `git push origin main`.
When you then navigate up to your parent root, you will see you then have uncommitted changes of
the submodule. (The uncommited change is just a new commit SHA that you created just a second ago!)

To preserve these changes in the rest of the project, you will have to do a second round of
git add/commit/push for the parent project to share the update with the rest of the project users.


##### Two projects. Two commits. Two pushes.

You may find it is easier to keep straight if you make changes to the submodule from the submodule projects (not your parent project). This way, the parent project will always need the `git submodule update --remote` or `git pull --recurse-submodules` when you want to pull in the latest submodule changes.
If you're the first to pull in the changes, you'll see a change to the git SHA for your submodule that will be shared with the rest of the project users when you commit and push the change. It doesn't matter if you make the change to the submodule from within the parent project, or if you open the submodule project and make the change to it directly.
Because they are _two_ separate repositories, you will always have to make _two_ commits to propagate a change to both.


### Troubleshooting Steps:

#### The submodule does not appear in your directory
If you've run `git submodule update --init` and the submodule does not appear in your directory, there are a couple of options. First, verify that the `.gitsubmodule` file is present and has the required path and url for your submodule.
It's possible that, especially if working on a team, a commit may have been made that deleted the directory for the submodule.
If the `.gitsubmodule` file is still there, or visible in your git history, you should be able to re-initialize the submodule(s) by running:

```bash
git submodule add <url for cloing the submodule repo> <optional: path to target directory if not root>
```


#### Your submodule init seemed to work, but the files aren't there
Navigate into the submodule folder.

Running `ls -la` should list all the files and directories in the submodule root directory:
```bash
child-project % ls -la
total 24
drwxr-xr-x@  8 yournamehere  staff   256 Jan  7 16:14 .
drwxr-xr-x  25 yournamehere  staff   800 Jan  9 09:53 ..
-rw-r--r--@  1 yournamehere  staff    38 Jan  7 13:40 .git
drwxr-xr-x@  3 yournamehere  staff    96 Jan  7 13:40 .github
-rw-r--r--@  1 yournamehere  staff    64 Jan  7 13:40 .gitignore
-rw-r--r--@  1 yournamehere  staff  2618 Jan  7 16:14 README.md
drwxr-xr-x@ 29 yournamehere  staff   928 Jan  8 11:22 directory
drwxr-xr-x@  4 yournamehere  staff   128 Jan  7 16:35 other_directory, etc
```
If this returns no results, run `git status` to see the git status of the submodule repo. One user found that in VSCode, the import process had been successful, but then had deleted the contents of the repo. To revert local changes, while still in the submodule directory, you can discard your local changes (like undesired deletions) to the submodule:

`git reset --hard HEAD`

If there are still no files, go to the project of the submodule and ensure the files are still there!
Revert to a prior commit if needed, and push those changes, and then follow the instructions for pulling in changes from the submodules to proceed.


#### You aren't able to clone into the repo

You've verified that your `.gitmodules` file has the submodule listed, but when you run
` git submodule update --init` you get an error like:

```bash
Cloning into '/Users/yourname/file/path/to/target_repo'...
ERROR: Repository not found.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```
This means you may not have permission to access the submodule repository and, if you need it to progress you should contact the administrator of the submodule.


#### Investigating

Sometimes, things aren't what you expected, and it's hard to tell what part went wrong.
The first step is figuring out what git sees.
```bash
parent-project-root % git ls-tree head
100644 blob c7d5cde0b23daf5488da06ae450daf0a016a2    .gitignore
100644 blob bae12e4a78d5fn91132b1ebad85356b202148    .gitmodules
100644 blob ef4a8228f451b0274bfa14cf79ec481d188e1    README.md
160000 commit 8b8833d677c8e6f7314613b504834b7afae8d  child-project
040000 tree d200111a915c90acb09508961e840f14de9d0    spec
040000 tree 7693cf3f7d18aeb087dc770a82807faa5f113    src

```

If we were to navigate to where the symlinks are and run it again, we would see:

```bash
parent-project/src % git ls-tree head   
040000 tree c7ce442c03a3caf770c6e39f35926263cd7c7    parent-package
120000 blob 2eafc99e8fc762a4945da9f67255f0300d0f7    child-package1
120000 blob c17275d03c3aac4bf8c5ac234dea24ef9c201    child-package2
```

- Files, or blobs, are classed as `100644`
- Directories, or trees, are `040000`
- Commits, or submodules, are `160000`
- Symbolic links are `120000`

We can see from this view that our parent-project sees the child-project as a commit, `160000`.
Perfect, that's exactly what we would expect.
Our child-packages look different inside src! Good, because they are actually symbolic links that git is _not_ going to treat the same way as our regular directories!
This is a great way to verify what exactly git believes each item in your project is, and, if you find a discrepancy, that's a good place to start troubleshooting.

### The rewards
We've made it all the way through! You have a project with a submodule symlinked where your build can see it—code that's separated, not duplicated, with a single source of truth. You know how to make changes in the submodule and propagate them to the parent, you have git config settings to automate pulls, and you even have troubleshooting tips for when things go sideways.
With explicit version control that you can point to a branch or a specific commit, you can have fine-tuned control over what each of your parent projects get and when. Yes, it's two commits, but it skips a version update, a change log and polluting the package registry with version 1.2.176! 
There's really very little that's added to ongoing maintenance once the set-up is complete, so the hard part is over, and now you can go forth, and point responsibly!