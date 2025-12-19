---
layout: post
title: "Migrating"
date: 2025-12-18
---

## Migrating

Oh my goodness, has it been a day. So, our github actions started failing after I pushed some changes 
last week that were brought to my attention yesterday. After some investigating, it seems the likely 
culpret was that the migrations often had a database created in their namespace, almost always as a def 

```clojure
(def m-db (db/create (db/load-config) schemas-of-interest))
```

That was fine when they weren't in source code, because they would only be loaded when they were going to 
be used to update the database, groovy. But! When in the regular src, that def gets read and initialized 
as soon as the namespace is loaded, and that means it's trying to create all the databases. And that will 
cause you errors if you don't have a database service running (like you might not if you were just running 
some specs on local, or, in the more relevant case, when run on github actions). 

So, the object for the day was three-fold: to first make sure all the specs for all the migrations passed
(which was difficult for some that expected the database schemas to be distinctly different than 
they were when these were first written and run), and to ensure that any specs that referenced a database 
used a test database, not a real one, and thirdly to make sure that none of the migration files
tried to create a database in such a way that would cause errors when run without a database service in place 

The first task had some difficulties, but once you get the hang of figuring out how to set your schema 
for migrations, it gets easier. 
I ended up with a helper function to go through and properly remove the old schema, replace it with the 
migration-specific schema, and pass back a complete schema that will work for that migration:

```clojure
(defn schema-with-target-schemas [target-schemas]
  (let [backend-schemas (remove #(contains? (set (map (fn [s] (-> s :kind :value)) target-schemas)) (-> % :kind :value))
                                full/full-schema)
        schemas         (concat backend-schemas target-schemas)]
    schemas))
```

That was able to solve most of the spec passing issues. So then it was on to making sure the specs didn't try 
to access the real database and only used a test one. That turned out to not be too bad: 
```clojure
  (redefs-around [db/load-config (fn [] {:impl :memory :uri "datomic:mem://test"})])
```

If you set the load-config to load up a test database, then your specs won't be able to hit the real one! Nice. 
I do appreciate single line changes that solve a problem. (Of course.. it's a single line per file impacted, so not 
quite nothing). 

Finally, I needed to be sure databases weren't actually initialized on being required, but waiting until they were 
called. This wasn't too bad either if you just pop them all in a delay so they don't get read until they get 
dereferenced!

```clojure
(def migration-db (delay (db/create-db (db/load-config) (mhelper/schema-with-target-schemas migration-target-schemas))))
```
These steps got the migrations about 90% complete for being in the src. 
There was one file in particular that gave me a ton of trouble. 

One migration moved it's data into a temp field, then created the old field and then populated it with new data: 
```clojure

(defn up []
  (let [odysseys (vec (db/find- @migration-db :odyssey))
        phases   (vec (db/find- @migration-db :phase))
        ordered-tasks (get-tasks)]
    (m/rename-attribute!- @migration-db :odyssey :phases :odyssey :temp-phases)
    (m/rename-attribute!- @migration-db :phase :tasks :phase :temp-tasks)
    (m/add-attribute!- @migration-db :odyssey :phases {:type :string})
    (m/add-attribute!- @migration-db :phase :tasks {:type :string})
....))
```
Then it went on to put in the new version of the data on the old (new?) :phase or :task. 

This is probably just fine if this code is run a single time. But, in testing, it is of course run multiple 
times. And wouldn't you know it, I kept getting errors about trying to rename the attribute to a key that already 
existed. How is that possible?? You can see that I created my migration database with a specific schema (that did *not* 
have the :temp-phases or :temp-tasks fields), so why does it keep insisiting that those fields already exist?

Well. I'll tell you why. It's because that migration-db is created with the correct schemas. But as soon as the first 
pass through happens, that schema inside the created database is now modified. Sure, you can delete the data from the 
database between test runs, absolutely! But, it doesn't delete the updates to the schema inside that database. 
So once the database has been used in a test run, it's always going to error for any future run. 

The trick is, this migration (along with all the others) has already been run. The goal here is not to _change_ the 
migration code to fit the specs, it's to make the specs work with the migration in src. 

So I can't just have the database reset on every call, then the migration wouldn't be able to do any meaningful work. 
I need the db to reset on every test. So...

```clojure
(def m-db (atom nil))

(redefs-around [sut/migration-db m-db])
(before
  (reset! m-db (db/create-db {:impl :memory :uri (str "datomic:mem://test" (datomic/squuid))} (mhelper/schema-with-target-schemas sut/target-schemas)))
  (seed-tests))

```

This took ages to get to because of the unique :uri necessary. If you don't change the uri, you still get the same 
database! So direct all calls to the migration-db to my test m-db. I don't need to redef load-config like I did in 
every other test because I'm generating it (it's the map that holds the :impl & :uri). 
Then, before every test, I create a new m-db to use for just that test. 

It's pretty neat actually!


I was very hopeful that this was the last brick in my wall  and that with this final change, all of my migration and 
clj tests would pass without the database running. And, they do! 

But then I find that the integration tests are failing... and I haven't even begun to sort those out and the day is 
long over-due. 

Looks like I know where I'm starting tomorrow.

**Cheers!**