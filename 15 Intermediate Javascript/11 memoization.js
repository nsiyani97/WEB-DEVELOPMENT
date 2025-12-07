/*
  Memoization
  
  Memoization is an optimization technique used to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

  Key Concept:
  - Caching: Store the output of a function for a specific input.
  - Lookup: Before computing, check if the result is already in the cache.
  - Closure: Often uses closures to maintain the cache object.
*/

// 1. A slow, recursive function (Fibonacci) without memoization
let callCountSlow = 0;
function slowFib(n) {
    callCountSlow++;
    if (n <= 1) return n;
    return slowFib(n - 1) + slowFib(n - 2);
}

console.time("Slow Fib");
console.log(`Slow Fib Result (n=35): ${slowFib(35)}`);
console.timeEnd("Slow Fib");
console.log(`Slow Fib Calls: ${callCountSlow}\n`);


// 2. Implementing Memoization manually
let callCountMemo = 0;
const memo = {};

function memoFib(n) {
    callCountMemo++;

    if (n in memo) return memo[n]; // Return cached result

    if (n <= 1) return n;

    // Store result in cache before returning
    memo[n] = memoFib(n - 1) + memoFib(n - 2);
    return memo[n];
}

console.time("Memo Fib");
console.log(`Memo Fib Result (n=35): ${memoFib(35)}`);
console.timeEnd("Memo Fib");
console.log(`Memo Fib Calls: ${callCountMemo}\n`);


// 3. A Generic Memoize Utility Function (Higher-Order Function)
function memoize(fn) {
    const cache = {};

    return function (...args) {
        // Create a unique key for the arguments
        const key = JSON.stringify(args);

        if (key in cache) {
            // console.log("Fetching from cache for args:", args);
            return cache[key];
        } else {
            // console.log("Computing result for args:", args);
            const result = fn.apply(this, args);
            cache[key] = result;
            return result;
        }
    };
}

// Example usage of generic memoize
const fastFib = memoize(function (n) {
    if (n <= 1) return n;
    return fastFib(n - 1) + fastFib(n - 2);
});

/* 
   Note: For recursive functions to be fully memoized with a wrapper, 
   the internal recursive calls must also call the memoized version.
   The above 'fastFib' works because 'fastFib' variable is hoisted/available 
   inside the function body when it executes.
*/

console.log("Generic Memoize Test:");
console.log(fastFib(10)); // Computes
console.log(fastFib(10)); // Returns from cache
