/*
  The Event Loop is a mechanism that allows JavaScript to perform non-blocking operations.
  It manages the execution of code, collecting and processing events, and executing queued sub-tasks.

  Key Components:
  1. Call Stack: Where the code is executed. LIFO (Last In, First Out).
  2. Web APIs: Browser features (setTimeout, DOM events, fetch) that run separately.
  3. Microtask Queue: High priority queue (Promises, queueMicrotask). Checked after every operation in the Call Stack.
  4. Callback Queue (Task Queue): Lower priority queue (setTimeout, setInterval). Checked only when Call Stack and Microtask Queue are empty.

  Order of Execution:
  1. Synchronous code (Call Stack)
  2. Microtasks (Microtask Queue) - e.g., Promise.then
  3. Macrotasks (Callback Queue) - e.g., setTimeout
*/

console.log("1. Start of script (Synchronous)");

// setTimeout is a Macrotask. It goes to Web APIs -> Callback Queue.
setTimeout(() => {
    console.log("4. setTimeout callback (Macrotask) - Runs last");
}, 0);

// Promise.resolve().then() is a Microtask. It goes to Microtask Queue.
Promise.resolve().then(() => {
    console.log("3. Promise callback (Microtask) - Runs before Macrotasks");
});

console.log("2. End of script (Synchronous)");

/*
  Explanation of the Output:
  1. "1. Start of script" is pushed to the Call Stack and executed immediately.
  2. setTimeout is encountered. The callback is sent to Web APIs. Since delay is 0, it moves to the Callback Queue.
  3. Promise.then is encountered. The callback is sent to the Microtask Queue.
  4. "2. End of script" is pushed to the Call Stack and executed immediately.
  5. The Call Stack is now empty.
  6. The Event Loop checks the Microtask Queue first. It finds the Promise callback and executes it: "3. Promise callback".
  7. The Microtask Queue is empty.
  8. The Event Loop checks the Callback Queue. It finds the setTimeout callback and executes it: "4. setTimeout callback".
*/
