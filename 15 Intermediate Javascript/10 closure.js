/*
  Closure
  
  A closure is a function that remembers its outer variables and can access them even when the outer function has finished executing.
  In JavaScript, closures are created every time a function is created, at function creation time.

  Key Concept:
  - Lexical Scoping: A function has access to variables in its own scope, its parent's scope, and the global scope.
  - Retention: The inner function "closes over" the variables it needs from the outer scope, keeping them alive in memory.
*/

// 1. Basic Closure Example
function outerFunction() {
    let outerVariable = "I am from outer scope";

    function innerFunction() {
        console.log(outerVariable); // Accessing variable from parent scope
    }

    return innerFunction;
}

const myClosure = outerFunction(); // outerFunction finishes execution here
myClosure(); // "I am from outer scope" - innerFunction still remembers outerVariable!


// 2. Practical Example: Data Privacy / Encapsulation
function createCounter() {
    let count = 0; // 'count' is private to this scope

    return {
        increment: function () {
            count++;
            console.log("Count:", count);
        },
        decrement: function () {
            count--;
            console.log("Count:", count);
        },
        getCount: function () {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.decrement(); // Count: 1

// console.log(counter.count); // undefined - cannot access 'count' directly
