---
layout: post
title: "Reading from BufferedReader"
date: 2025-06-17
---

## Reading Buffered Reader

The problem with reading from a BufferedReader class is that it doesn't
promise to deliver the entire contents in a single pass.

Sometimes, this isn't a problem but is definitely expected, perhaps while
using a streaming service. It's much less prominent for most of us these
days, but there could be delays in data transmission. When Netflix first
started introducing streaming videos, I remember hitting play then waiting
for a few minutes to let the buffered content get a head start. The data
needed a little more time to come in and definitely didn't arrive all at
the same time in one big bite. It was sent chunk by chunk, the speed
depending heavily on the other demands of the network.

So, to have a smooth movie watching experience, you let the buffer grow
first. But, we have to make sure that the next bite of the movie goes
in order and doesn't overwrite the beginning of the flick!
You can do this with a BufferedReader. 
You'll want a buffer to load into that should be the size of the total
package: `char[] buffer = new char[total-length]`
Then, you know you want to start at the beginning: `int bytesRead = 0;`
Next, you loop:

````
while (bytesRead < contentLength) {
    int result = in.read(buffer, bytesRead, contentLength - bytesRead);
    if (result == -1) break;
    bytesRead += result;
}
````
Read is a method performed on a Buffered Reader that takes 
your target buffer that you're filling, the index of where to start 
filling the target buffer, and the number of bytes you expect to read. 

Read will return the number of bytes that were read this loop. You 
track where the next loop should start by adding it to the number of 
bytesRead, and track your remaining content by simply subtracting what 
you've already read from the expected content length. 

The `if (result == -1)` is there to check if the stream ended abruptly, 

And now you know how to build a buffer!

**Cheers!**