---
layout: post
title: "Sieve of Eratosthenes"
date: 2025-03-03
---
## Fun algorithms time!
#### Sift the Two's and Sift the Three's: 
#### The Sieve of Eratosthenes.
#### When the multiples sublime, 
#### the numbers that remain are Prime.
#### *~Anonymous*

I like today's problem, (Euler #7, find the 10001st prime number)
mostly because I have to go figure out how to solve it first! 

After doing some internet reading about various algorithms used 
for finding primes, the Sieve of Eratosthenes stood out like a 
shining beacon. I'm the most excited that this seems like an opportunity 
to make use of the lazy-sequence capability in Clojure that thus far has 
sounded cool, but I haven't had occasion to really work it until now. 

So, [what is it?](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) The cliff 
notes are like this: 
- get a list of all the integers (right out front here with that lazy sequence)
- start at 2, the smallest prime number; add it to your list of primes
- remove all multiples of 2 from the list
- add the next number to your list of primes,
- remove all multiples of the next number (3) from the list
- repeat

How might this look in code? I'm so glad you asked. 

``````
(def eratosthenes-sieve
  (letfn [(next-sieve [n xs]
            (lazy-seq
              (let [multiple? #(zero? (rem % n))]
                (cons n (next-sieve (first (drop-while multiple? (rest xs)))
                                    (remove multiple? (rest xs)))))))]
    (next-sieve 2 (iterate inc 2))))

(defn euler-7 [n]
  (nth eratosthenes-sieve (dec n)))
``````

Just as we said we would, we set out with a lazy sequence that we've wrapped in 
a [Thunk](https://cleancoders.com/blog/2024-12-20-laziness-is-a-virtue-the-case-for-lazy-evaluation) 
that we're calling our eratosthenes-sieve. It contains a function that we call
recursively (Our first call to the defined function is actually on the last line 
of the definition). We start at 2 and then feed in an iterated list of every number
increasing by 1, but starting at 2.
``````
    (next-sieve 2 (iterate inc 2))))
``````
For ease of reading, we can simplify our evaluation of if each number being 
considered is a multiple of the current candidate:
``````
              (let [multiple? #(zero? (rem % n))]
``````
Then our function just has two main lines. We know we initialized the first n 
to be 2, our first prime number. (cons n (... adds n to our list of primes.
Then we call our function (next-sieve) again! We just have to figure out our new 
arguments.

````
(first (drop-while multiple? (rest xs)))
````
The first argument is what we think our next prime will be. So, starting with the
lazy-list (xs) we take everything but the first item in the list (which we initialized 
with a 2 in our first call) and drop every number in the list that's a multiple of n
(still 2 this round). Of the numbers remaining, we take the first one on the list and 
call it our next prime (This makes 3 ready to be our prime next cycle!)

Great, what about the second argument for our call to next-sieve?

````
(remove multiple? (rest xs)))))))]
````
It again takes the entire lazy sequence after the first number and removes every 
number that is a multiple of n. After the first cycle, no even number remains 
in our lazy sequence. 

Excellent, our Thunk is ready to provide to us any nth prime number!
We can call it like so:

````
(defn which-prime [n]
    (nth eratosthenes-sieve (dec n)))
``````
'nth' is a built-in Clojure function that accepts a collection and an index value.
We have to decrement n to account for the 0-based indexing in Clojure (the first 
prime would be found at index 0 in our collection). 


**Cheers**
