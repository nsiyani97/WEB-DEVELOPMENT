### Question 1: Explain the setTimeout() and setInterval() functions in JavaScript. How are they used for timing events?

- **setTimeout()** – The setTimeout() function is used to execute a function once — after a specified delay (in milliseconds).

- **setInterval()** – The setInterval() function is used to execute a function repeatedly — at fixed time intervals (in milliseconds).

- You can stop the repeated execution using **clearInterval()**

```javascript
setTimeout(function, delay);
setInterval(function, interval);
```

---

### Question 2: Provide an example of how to use setTimeout() to delay an action by 2 seconds.

```javascript
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);
```

---
