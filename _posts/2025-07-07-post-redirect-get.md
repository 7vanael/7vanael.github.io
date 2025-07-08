---
layout: post
title: "Post-Redirect-Get"
date: 2025-07-07
---

## Why even bother redirecting to the same page?

Ok, this took me longer to understand than it should have. When serving content to a user
and allowing them to send POST requests, you shouldn't just send a response. Why? A response 
is a good and reasonable thing to send after getting a POST request, right?? 
Wrong. 

### The browser knows what it's done. 
You have given it a page that it can send a POST on, and if the last thing that it did to get 
to where you are now ALSO happened to be a POST, it can try to _resend_ that same POST request. 
But, your server thinks it's already received that POST, processed it, and provided a response. 
Wouldn't it be a terrible shame if your back end code no longer knew what to do if it got an 
inappropriate request that it wasn't expecting, like the same form twice!

### Make the browser do something idempotent
POST requests can be a problem if they aren't what your back end expects. But GET requests? Those 
aren't going to do anything on the back end. You can do a GET request all day (I mean, ok, not to 
DOS levels, but you know what I mean). GET requests are idempotent. It doesn't matter if you 
refresh after a GET. No problems here, you'll just get back exactly what you have now. Refresh 
to your heart's content, dear user, no server stress here!

**Cheers!**