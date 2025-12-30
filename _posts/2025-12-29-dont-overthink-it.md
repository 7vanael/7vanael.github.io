---
layout: post
title: "Don't overthink it"
date: 2025-12-29
---

## Don't Overthink it

Last week was a short one for Christmas, and so I thought I'd take on a little story to make an improved user 
experience for the edge case where a new story is being created in an iteration by user A and is signed by 
user B before that story is saved. 
This had already been addressed once on the backend to just move the new story to the backlog when user A saves the 
story, but our designers thought this could be a less surprising experience for user A with a few improvements. 
* move the story to the next iteration if there is one, otherwise move it to the backlog
* present flash-messages on top of modals
* notify user A in a flash message that their story was moved when the iteration is signed

Part one seemed quick and easy, there was already a check on the back endpoint to move it to the backlog, just adding 
some nuance to check for a next iteration should be relatively fast and painless. 
Changing the styling of the flash-root to have a higher Z index than the modal should also be a single line change, 
anda brief double check with a designer confirmed, easy single digit code change, great!

Then was the hard part. How do you target a single user to get a flash message? I didn't want to update the handler for 
the signatures, because I don't want every member of the project to get the flash message, just the (hopefully one) 
member creating a new story. So, how do I find that rare member?
Well, we have other use cases that are more specific: 

```clojure
(defn on-entity-received [message]
  (with-message [{:keys [id kind project]} message]
    (let [loaded (load-entity kind id)]
      (dispatch/tx* project [loaded])
      (when (= kind :story)
        (dispatch/push-story-update! loaded id)))))
```

Alright, so we already have a pattern for, if the entity we are sending is a particular kind, we send it to the project, 
*and* we do a more specific push as well. That seems like what I'm wanting to do; if I get a signature, I want to push 
it to the project, but I _also_ want to push it to a, hopefully much smaller, subset of members that are making new stories 
for that particular iteration. Great, good place to start. But, how do I target that member is still the problem. 
Well, we already have a pattern for that; we have fields on the member to indicate which story they have active (so they 
can get those more-specific story pushes!). Maybe I need to add another field to the member to indicate they are making 
a new story in a particular iteration. 

```clojure
(when (= kind :signature)
        (dispatch/push-to-pending-new! loaded))
```
then in dispatch: 
```clojure
(defn push-to-pending-new [signature]
  (let [members-writing-new (db/find-by :member
                                        :project (:project signature)
                                        :new-story-pending (:iteration signature))]
    (push-to-connections members-writing-new :story/iteration-signed [signature])))
```
Alright, excellent, now I have a pretty good way to select for a member with a particular status and send just them a 
message that their new story will be moved. 
Ok, so a couple routes to set and to clear :new-story-pending, the endpoints to implement those changes, the schema update 
and migration to support them later, I've spent an entire day mapping out the files I'll need to update and pathing 
with notes about where and how my data will flow. I'm up to 18 impacted files. But, I have them arranged in order and 
littered with todo notes to help me find my way when I have to pick it up again over Christmas weekend. 

I found myself laying awake at 3 am, thinking of all the ways the user could get out of a new story modal and
how I'm going to be sure that I've found all the places I need to call the no-new-story-pending function to be sure I'm
not later having users be notified incorrectly that their story is being moved (that would be a much worse user 
experience!)

I finally have the thought of, 'This shouldn't be this hard.'
And then I think, why does the back end have to be involved in this process at all?? The front and back both know about 
the signature. The back doesn't know about the story yet, and shouldn't have to. Why can't this just all take place in the 
frontend?? 
If we update the iteration on the frontend, an unavailable iteration for a new story will never make it to the backend. 

So... what if our new story modal just tracked if the target iteration got signed, moved it and generated the 
flash message? Does anything really need to go to the backend until they are done with writing the story? No!

So, adding a track! in the story modal:

```clojure
(defn maybe-iteration-signed [current-story new?]
  (when-let [result (storyc/handle-iteration-signed! @current-story @new?)]
    (if (:iteration result)
      (swap! current-story assoc :iteration (:iteration result))
      (swap! current-story dissoc :iteration))
    (flash/add-warn! (:message result))))
```
```clojure
(defn handle-iteration-signed! [current new?]
  (when (and new? (:iteration current))
    (let [iteration (db/entity (:iteration current))]
      (when (signaturec/signed? iteration)
        (if-let [next-iter (next-iteration iteration)]
          {:iteration (:id next-iter)
           :message (str "Iteration was signed. Your new story was moved to \""
                         (or (:title next-iter) (str "Iteration " (:number next-iter)))
                         "\"")}
          {:iteration nil
           :message "Iteration was signed. Your new story was moved to the backlog."})))))
```

A single track and two functions in two namespaces is so so so much better than a sprawling 18 file change. 

This 2 point story took forever (relatively speaking, for a 2 point story that is). In the end, if I had been able to 
get straight to the most simple solution of just handling everything in the front end, it may have actually been close 
to a 2 point story for me! But, I think focusing on building on what's already there and continuing the patterns already 
present in the code, while maybe generally helpful, can easily lead me down unnecessary, winding paths that could have 
been avoided. Maybe next time!


**Cheers!**