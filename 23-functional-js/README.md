# Functional JS

This lecture mainly serves as an introduction to **functional programming** in Javascript, so there is no need to go too in depth on use-cases for callbacks and closures - this will be covered more in the following lecture.

This is a very conceptual lecture, so it is important to ground explanations in code examples, analogies, and use-cases - anything to illustrate how the conceptual manifests at a practical level.

The included class participation problems can be done at the end or interspersed throughout the lecture. The block of code at the end of this document can be used as a small-group discussion question close to the end of lecture, if there is time.

## SWBATs
* Identify functions as objects. In particular, they will be able to:
  * Assign functions to variables
  * Pass functions as arguments to functions
* Return functions inside functions
* Write functions in both the traditional and arrow syntaxes
* Explain what an IIFEs is and why one might use it

## Resources
* [Functional Programming Lecture](https://www.youtube.com/watch?v=NcKLiPpXjqU)
* [Modules and IIFEs Lecture](https://www.youtube.com/watch?v=MrUxe0RIJao)
* [Class Participation Problems](https://gist.github.com/alexgriff/97cd3cc946f3047828c1196afd66ac61)

## Outline

```
  10m Functions are First Class Objects
  10m Introduction to Callbacks
  10m Introduction to Closures
  30m Functional Programming Paradigms
  --
  60m Total
```

### Functions are First Class Objects
  * They are objects
  * Can do anything you can do with other objects
  * Store in variables
  * Pass as arguments to other functions
  * Return from functions
  * Arrow Function

### Introduction to Callbacks
  * Compare to Ruby blocks
  * inline anonymous vs. named functions

    ```js
    function doThis(callback) {
      callback();
    }

    doThis(function() { console.log("Beef"); })

    function beefy() {
      console.log("Steak");
    }
    doThis(beefy); // => Logs "Steak", returns undefined
    ```

  * .map, .filter, .forEach as native functions that take callbacks

    ```js
    let arr = [1, 2, 3, 4, 5];
    function callback(num) { console.log(num); }
    arr.forEach(callback) // => Logs 1 2 3 4 5
    ```

### Introduction to Closures
  * Functions that draw a bubble around everything that's in scope at the time of their definition
  * Can be used to create 'private' variables
  * Can be used to curry (don't go too in depth on this concept)

  * First Class Functions
    * Reference vs. Execution

      ```js
      function definition() { return "Hey!" }
      let reference = definition;
      console.log(reference); // => f definition()
      console.log(reference()); // => "Hey!"
      ```

    * Higher-order functions
      * Functions that

        **A.)** accept other functions as arguments

          ```js
          // Higher Order Function
          function higherOrder(callback) {
            console.log('From Inside of Higher Order');
            callback();
          }

          // Callback
          function logHello() {
            console.log('Hello');
          }

          // Passing callback into higher-order function
          higherOrder(logHello)
          ```

        **B.)** and/or return a function

          ```js
          //Outer
           function multiplyBy(multiplier) {
              //Inner
             return function(num) {
               return multiplier * num;
             }
           }
           //Calling it once to return function, again to execute inner
           multiplyBy(3)(2); // => 6
           ```

   * Storage Within Data Structures

      ```js
      function funky() { console.log("Funky"); }
      function beefy() { console.log("Beefy"); }

      let array = [];

      array.push(funky);
      array.push(beefy);

      array[0](); // => "Funky"
      array[1](); // => "Beefy"

      let obj = {};

      obj.cool = funky;
      obj.steak = beefy;

      obj.cool(); // => "Funky"
      obj.steak(); // => "Beefy"
      ```

### Functional Programming Paradigms
* **Declarative** versus **imperative**
  * Imperative (procedural)
    * _How_ to do some operation
    * Based on statements such as `if`, `for`, and/or `switch`
  * Declarative
    * _What_ operations to do
    * Based on expressions which resolve to a value
* **Pure functions**
  * Given the same inputs, the function will always return the same output
  * Has no **side-effects**, meaning it doesn't change anything in the program
      * Modifying any external variable or object property
      * Logging to the console
      * Writing to the screen
      * Writing to a file
      * Writing to the network
      * Triggering any external process
      * Calling any other functions with side-effects
  * Avoid **shared state**
      * Don't use variables/data from outside of the function
  * Avoid **mutating state**
      * Creating new objects: `Object.assign`
      * Shallow immutability: `Object.freeze`
  * References
      * [Quick Read - Medium](https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c)
      * [In depth read - Medium](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)

* **Higher-order functions** and reusability
  * Abstract or isolate actions, effects, or async flow control using callback functions, promises
  * Create utilities which can act on a wide variety of data types (think functional library)
  * **Partial application** of a function to its arguments or create a **curry**-able function for the purpose of reuse or function composition
  * Take a list of functions and return some composition of those input functions
  * References
      * [Simple Explanation of Higher Order Functions - Quora](https://www.quora.com/What-is-a-simple-explanation-of-higher-order-functions-and-callbacks-in-JavaScript)
      * [Eloquent JavaScript HOF - ebook](http://eloquentjavascript.net/05_higher_order.html)
      * [Sitepoint](https://www.sitepoint.com/higher-order-functions-javascript/)
      * [Currying and Partial Application](https://medium.com/wdstack/javascript-function-composition-currying-and-partial-application-5a04107530ee)

* Function **composition**
  * Combine two or more functions to perform some computation
      * `f(g(x))`
  * Combine two or more functions to produce a new function
      * `f(g)(x) === f(g(x))`
  * References
      * [Composition](http://blog.ricardofilipe.com/post/javascript-composition-for-dummies)

* Memoization
  * [Memoization - Good article](https://addyosmani.com/blog/faster-javascript-memoization/)
* Anonymous Functions
* Recursion

* Array methods `.forEach`, `.map`, `.filter`, `.reduce`

* Examples

  ```js
  // forEach passing function definition
  let arr = [1, 2, 3, 4, 5];
  arr.forEach(num => console.log(num);)
  // => 1
  // => 2
  // => 3
  // => 4
  // => 5

  // forEach passing function by reference
  arr.forEach(console.log);
  // => 1 0 (5) [1, 2, 3, 4, 5]
  // => 2 1 (5) [1, 2, 3, 4, 5]
  // => 3 2 (5) [1, 2, 3, 4, 5]
  // => 4 3 (5) [1, 2, 3, 4, 5]
  // => 5 4 (5) [1, 2, 3, 4, 5]

  // map passing function definition
  let numsTimesThree = arr.map(num => num * 3);
  numsTimesThree; // => [3, 6, 9, 12, 15]

  // filter passing function definition
  let numsLessThanTen = numsTimesThree.filter(num => num < 10);
  numsLessThanTen; // => [3, 6, 9]

  // reduce passing function definition
  let sum = numsLessThanTen.reduce((acc, val, ind) => acc + val);
  sum; // => 18

  // All of the above chained together
  arr.map(num => num * 3)
  .filter(num => num < 10)
  .reduce((acc, val, ind) => acc + val)
  // => 18
  ```