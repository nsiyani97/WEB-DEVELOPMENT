### Question 1: What is error handling in JavaScript? Explain the try, catch, and finally blocks with an example.

**Error handling** in JavaScript is a mechanism that allows developers to detect, handle, and respond to runtime errors — preventing the entire program from crashing and providing meaningful feedback to users or developers.

- JavaScript provides several ways to handle errors gracefully, the most common being the `try...catch...finally` statement.

1. **try**: The `try` block contains the code that might throw an error. If no error occurs, the `catch` block is skipped.

2. **catch**: The `catch` block runs only if an error occurs inside the `try` block. It receives the error object (usually named `error` or `err`) which provides details about what went wrong.

3. **finally**: The `finally` block always executes, whether or not an error occurred. It’s typically used for cleanup tasks, like closing connections or clearing temporary data.

```javascript
try {
  // Code that may cause an error
  let num = 10;
  console.log("Before error");

  // Intentional error
  console.log(num.toUpperCase()); // ❌ num is a number, not a string

  console.log("This line won't run");
} catch (error) {
  // Handles the error
  console.log("An error occurred:", error.message);
} finally {
  // Always runs
  console.log("Execution completed (with or without error).");
}
```

**Custom error** is an error that developers create intentionally using the `throw` statement to handle specific situations or invalid conditions in a program.

- It allows developers to display meaningful error messages instead of system-generated ones, making debugging and user feedback easier.

```javascript
try {
  let marks = -10;
  if (marks < 0) {
    throw new Error("Marks cannot be negative!");
  }
} catch (error) {
  console.log("Error:", error.message);
}
```

---

### Question 2: Why is error handling important in JavaScript applications?

- **Error handling** is crucial in JavaScript because it ensures that programs run smoothly even when unexpected problems occur. It helps maintain application stability, user experience, and code reliability.

1. Prevents Application Crashes

- Without error handling, even a small runtime error can stop the entire program.
- Proper handling ensures the app continues running smoothly.

2. Improves User Experience

- Instead of showing confusing error messages or breaking the UI, users can see friendly messages like “Something went wrong, please try again.”

3. Makes Debugging Easier

- Errors can be logged or displayed in a controlled way, helping developers quickly identify and fix issues.

4. Ensures Program Stability

- Helps maintain consistent behavior and prevents unexpected failures during execution.

5. Handles Unexpected Situations

- Allows developers to deal with issues such as invalid input, failed network requests, or missing data gracefully.

6. Supports Secure and Reliable Code

- Prevents exposure of sensitive technical details and ensures the program behaves predictably in all cases.
