---
layout: post
title: "Directory Stream"
date: 2025-06-16
---

## Directories in the root directory

So you'd like to navigate some directories? Me too, but where do you start? 

Java has a nifty DirectoryStream method that accepts a root/directory path. 
`DirectoryStream<Path> stream = Files.newDirectoryStream(Paths.get(dir))`

You can then itterate over the Paths contained in the directory in a simple 
for loop and.. do what ever makes sense once you get them! 

````
try (DirectoryStream<Path> stream = Files.newDirectoryStream(Paths.get(dir))) {
    for (Path path : stream) {
      if (Files.isDirectory(path)) {
        fileSet.add(path.getFileName().toString());
      }else {
        fileSet.add(path.getFileName().toString().append(fileExtension);
      }
    }
  }
````


**Cheers!**