---
layout: post
title: "SQL with next-jdbc"
date: 2025-05-20
---
## Some functions are Friendly, and you're probably going to use them

If you're looking to connect your Clojure code to a database, 
you'll probably need a few tools in your belt. I found I needed to 
upgrade my community edition IntelliJ to the standard full package 
so that the database connection tab would appear. Then you'll probably 
be diving into some libraries that will help you talk to it.
[next-jdbc](https://github.com/seancorfield/next-jdbc) is a great 
place to start. The opening page is chock-full of links to additional 
references that will tell you how to [get started](https://github.com/seancorfield/next-jdbc)
that includes examples on setting up your tables 

````
(jdbc/execute! ds ["
create table address (
  id int auto_increment primary key,
  name varchar(32),
  email varchar(255)
)"])
````
as well as how to populate a table: 
````
(jdbc/execute-one! ds ["INSERT INTO address (name,email) VALUES (?,?) RETURNING *"
                       "A.Person" "albert@person.org"])
````

But dear reader, don't stop there! There are other ways to make your code 
shorter (and, as long as it's still readable, shorter is better!)

Take a gander at the 
[friendly SQL functions](https://github.com/seancorfield/next-jdbc/blob/develop/doc/friendly-sql-functions.md)
to see that the above code snippet could be even nicer with: 
````
(sql/insert! ds :address {:name "A. Person" :email "albert@person.org"})
````

There's still plenty to explore, like how to get less-straightforward data 
fields to convert smoothly (I think edn may be making a repeat appearance)
but having short readable commands is a nice place to start. 

Thank goodness for great documentation!


**Cheers!**