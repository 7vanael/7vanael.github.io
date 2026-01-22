---
layout: post
title: "The Revision"
date: 2026-01-18
---


How to master git submodules
How to unscramble bloated repositories with git submodules
How to deconstruct & organize heavy projects by using git submodules
lighten
clean up
isolate
clarify

organize
unburden
deconstruct & organize
heavy projects by using git submodules

• The fishing net to capture the correct readers
  • A description of the problem you are facing
  • Starting conditions
  • All of your options (briefly)
  • When submodules are the best choice
• Setting up the submodule
  • How to create a submodule
  • Optional branch integration
  • Propogating submodule changes to all other users of this repository
  • Troubleshooting?
• Linking it to your project
  • Linking the submodule concept to the implementation that comes out once you do the commands
    (here's the mental model for what is happen)
    The mental model for git submodules
    This is the finished state from the last section, and the starting point for this section
    Building your project despite the catch-22 of nested git repositories
  • What are symlinks?
  • Sym-linking your submodule to your project
  • Troublershooting?
• Updating the submodule and propogating changes to the parent
  • How to pull in updates your local copy/repository
  • How to push your updates to the cloud copy/repository
  • Troubleshooting
  • Troubleshooting
  • Troubleshooting
  • Troubleshooting
• Git submodules are great
  • Here be the emotional benefits of using git submodules: you feel more organized and unburdened
  • maybe it was complicated to get here, but now you've set yourself up for an easier time
the end


## Do you need git Submodules?
## Git Submodules: For when a package manager won't cut it
## How to make your projects more managed with git submodules
## The 'Why' and 'How' of git Submodules

Have you written the same data validation logic in three different repositories? Has your team's asset library bloated 
to 2GB and every git clone feels like downloading a movie? Or, maybe you've built a slick set of UI components that several 
different applications use - but now every time you fix a bug or add a feature, you're copy-pasting the fix across 
multiple codebases.

These situations creep up on us. The first time you want to solve a problem in one project that just happens to
be easily addressed the same way you solved it in another? Simple. One little component or method copied and pasted
surely never hurt anyone. One shared logo file creeps in just a couple megabytes at a time. And then the favicon,
and then the profile photos, and... Before you know it, you wake up one day and there's duplicate code or
files everywhere. 

The time has come to start talking about git submodules. I'll tell you about them, and about my journey in getting them 
implemented and working in my team's project. 

By the end, you'll know whether submodules are right for your project, how to set them up without completely 
breaking your team's workflow, and how to troubleshoot the inevitable hiccups that come up when you change processes.

Let's dive in!


### When Submodules are the best choice
You're probably familiar with using libraries or some kind of dependency manager to pull in external
packages. Git Submodules add a layer of complexity, so, why would we use them instead of just creating a deployed package
or library to import? Great question.

If your potential submodule is:
- Stable (only rare changes)
- Must have semantic versioning
- Ready to be deployed in a dependency registry

then you should feel free to take the path of least resistance and import your stable, versioned dependency
like usual!

However. If you find instead:

- You have multiple projects in development that are independent, but have duplicate code
- You have a very large project with distinct sections that can or should be developed independently
- You want to reduce bloat in your project repo by pulling out large files that don't change often, but know more will be added

AND
- The potential submodule is being actively developed

Then, making a submodule is the complexity you need to improve your process, reduce your duplicate code or bloated
projects. We were facing the third challenge: New features were calling for media files—files that didn’t belong in 
the core application, barely changed once added, and were shared across multiple projects. Pulling them into a 
dedicated repository let us slim down our main repo while keeping everything in sync.

Submodules weren’t the simplest option, but they were the right one.

### How to create a submodule

Bringing in a submodule is as easy as:
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

#### Branch Specification

Here's where it gets interesting. By default, submodules don't track a branch - they track a
specific commit. But you can configure them to track a branch instead:

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
git config -f .gitmodules submodule.child-project.branch develop
```


Need to double-check? Run `git submodule status` which will show you the specific
commit SHA's referenced by your active submodule(s).

That was easy! Now you have a submodule. You can commit these changes, and then so will
everyone else on your team. Well done! Ship it!

Or... so I thought. 

#### Getting your team using submodules
If it seemed too easy, literally running one command, to get submodules set up, you might have a good intuition. 
That's all you have to do to get it started, but now, every single person using the parent project also has 
to participate. 
After you announce your victory, and they pull the changes you pushed (the submodule and the `.gitsubmodule` file), 
they will be immediately pinging you to tell you that they don't have the submodule. 
Since they aren't the ones who did the `git submodule add` command, they will need
to run

    `git submodule update --init`

If you have submodules that themselves also have submodules, `--recur` should be added to the end of
the call. Provided they also have access to the submodule repository, they should now be set up and ready to go.

### What's in the submodule?
If you inspect the changes to be committed for your new submodule, you'll see that the only thing
that gets committed to the parent project's git is the git SHA for the specific commit of the
submodule project that's being referenced.

Your IDE will likely be very helpful and let you navigate the directory of the submodule so it
will seem like it's all right there! But be aware, any changes made to the submodule project will
be separate commits to a different project. We'll talk more about updating the submodule a little later.

If you imported to the root directory, your project directory might look a little bit like:

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
└── src/
    └── parent-package/
        └── source-files/
```
You might see a problem emerging, especially if your parent project is going to be built and
deployed. Importing the submodule to the root makes the source code not included with where your
build is probably looking for it. However, if you were to import it to the directory with your
source code, you'd also be sending files you don't want packaged and released, like the .gitignore,
README and the hidden git files that are also there! **So, if no where is safe, then how do we
make this usable?**

So, then, if submodules leaves your project in an unbuildable state, how CAN you build it?

### Symlinks
Symlinks, or symbolic links, are a way to put a pointer in your directory to somewhere else.
It won't move the files (which is great, because in this case, the files aren't really there), it
will just provide a path to traverse.

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


### Retrieving updates from submodules
Your parent project stores the submodule as a git SHA that references a particular commit. This will
not be updated unless you update it.

To pull in the latest changes from your submodule, run
```bash
git submodule update --remote
```
If you want to, as a matter of course, pull in submodule updates when you pull the rest
of the changes for your parent project, you can pull with:
```bash
git pull --recurse-submodules
```
The fact that you have to intentionally pull your submodule updates can be helpful in
protecting your project from unexpected changes, or changes your parent project isn't ready
to navigate. However, if you are confident that you will always want every update from your
submodules, you can update your git preferences, or create an alias to have the `--recurse-submodules`
flag.


### Updating submodules
You _can_ make changes to the submodule from the parent module. Your IDE changelog may be helpful
in breaking down changes for you to review and commit separately. You can also navigate in the
terminal to the submodule (not the symlink!) and do the usual `git status` `git add <changed-file>` and
`git commit -m "commit message"` and even `git push origin main`.
When you then navigate up to your parent root, you will see you then have uncommitted changes of
the submodule. (The uncommited change is just a new commit SHA that you created just a second ago!)
To preserve these changes in the rest of the project, you will have to do a second round of
git add/commit/push for the parent project to share the update with the rest of the project users.

##### Two projects. Two commits. Two pushes.

You may find it is easier to keep straight if you make changes to the submodule from the
submodule projects (not your parent project), and then the parent project will always
need the `git submodule update --remote` when you want to pull in the latest submodule changes.
If you're the first to pull in the changes, you'll see a change to the git SHA for your submodule that
will be shared with the rest of the project users when you commit and push the change.
It doesn't matter if you make the change to the submodule from within the parent project,
or if you open the submodule project and make the change to it directly.
Because they are two separate repositories, you will always have to make two commits
to propagate a change to both.


### Troubleshooting Steps:

#### The submodule does not appear in your directory
If you've run `git submodule update --init` and the submodule does not appear in your directory, there are a
couple of options. First, verify that the `.gitsubmodule` file is present and has the required path and url
for your submodule.
It's possible that, especially if working on a team, a commit may have been made that deleted the directory for
the submodule.
If the `.gitsubmodule` file is still there, or visible in your git history, you should be able to re-initialize
the submodule(s) by running:

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
If this returns no results, run `git status` to see the git status of the submodule repo.
One user found that in VSCode, the import process had been successful, but then had deleted the
contents of the repo. To revert local changes, while still in the submodule directory, you can discard your
local changes (like undesired deletions) to the submodule:

`git reset --hard HEAD`

If there are still no files, go to the project of the submodule and ensure the files are still there!
Revert to a prior commit if needed, and push those changes, and then follow the instructions for pulling in
changes from the submodules to proceed.


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
This means you may not have permission to access the submodule repository and, if you need it to
progress you should contact the administrator of the submodule.


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

If we were to navigate to where the symlinks are
and run it again, we would see:

```bash
parent/src % git ls-tree head   
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
Our child-packages look different inside src! Good, because they are actually symbolic links that
git is _not_ going to treat the same way as our regular directories!
This is a great way to verify what exactly git believes each item in your project is, and, if
you find a discrepancy, that's a good place to start troubleshooting.

Submodules are a great tool for managing the use, and reuse, of parts of your project so you can keep
your code modular and independently deployable, while still using your solutions in multiple projects.
I hope that after reading this brief you'll feel confident about using and troubleshooting git submodules in your
own projects.

**Cheers!**