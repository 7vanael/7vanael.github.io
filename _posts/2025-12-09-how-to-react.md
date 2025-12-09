---
layout: post
title: "How to React"
date: 2025-12-09
---

## How to React

I've been building a component that is going to display all the immediate, need-to-know 
data for a user about all of their assignments over all of their projects. It's going 
to be great! I've been struggling with the fact that my acceptance criteria seems to 
have me unavoidably generating and sorting most of my data at a pretty high level. 

I explored using `(r/track get-iteration-end-date @iteration)` or similar to try to 
limit rendering to just when specific data I was looking for changed, but, until we 
make the switch to the re-memory DB that Alex & Connor created, the tracks can reduce 
rendering, but they can't stop the processing. That means, even if I were to put all of 
my complicated data retrievals into tracks, it wouldn't make the page any faster. 

What might make my page faster is if I could use cursors instead. 
The database stores all the data as essentially one large atom: 
```clojure
{:all  {1 {:kind :first :id 1 :info :foo}
       2 {:kind :first :id 1 :info :bar}
       3 {:kind :baz :id 3 :text :blah}
       4 {:kind :bax :id 3 :text :yar}
       5 {:kind :woo :id 5 :new-stuff :cool}
       6 {:kind :woo :id 6 :new-stuff :what-ever}}
 :first {1 {:kind :first :id 1 :info :foo}
         2 {:kind :first :id 1 :info :bar}}
 :baz {3 {:kind :baz :id 3 :text :blah}
       4 {:kind :bax :id 3 :text :yar}}
 :woo {5 {:kind :woo :id 5 :new-stuff :cool}
       6 {:kind :woo :id 6 :new-stuff :what-ever}}
 }
```
Using the cursor, you can have your reference only look at the :baz slice of the database pie, 
instead of the :all slice, which is a big improvement, you can prevent recalculations unless something 
in your target slice updates! 

So, with cursors, I could do something like: 
```
(defn my-week [projects]
     (r/with-let [members (r/cursor (.-store @db/impl) [:member])
                  iterations (r/cursor (.-store @db/impl) [:iteration])]
       (let [active-iterations     (->> projects
                                        (mapcat #(ccc/find-by @iterations :project (:id %)))
                                        (filter #(time/before? (time/parse "yyyy-MM-dd" (:start %)) (time/now)))

```
This would let this component, my-week, only update if there were a change to the members that 
were being stored, or a change to the iterations. Really, that seems like a great start! 
With cursor in re-memory db, you can even specify nested fields, and you can even select the keys 
you'd like to get back, so you can really narrow the slice you're returned. 

It turns out that in this particular component, the most granular level of detail that I might like 
to isolate is a Story, but from it, I need the member list, and... that's likely to cause a re-render 
at the member cursor when ever a story changes. So, anything that needs to re-render with a story 
change will cause a re-render of everything (until or unless the :story is changed to not store the 
member, but who knows how many wrinkles that will pass back to other components that have already been 
implemented!)

Anyway, even though I can't make solid use of cursors and tracks at the moment, I just wanted 
to capture some of their use-cases. 

**Cheers!**