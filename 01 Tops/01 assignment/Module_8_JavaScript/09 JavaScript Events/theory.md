### Question 1: What are JavaScript events? Explain the role of event listeners.

- JavaScript **events** are actions or occurrences that happen in the browser — such as a user clicking a button, typing in a textbox, or loading a webpage.
- These events allow JavaScript to make web pages interactive and dynamic.
- ex. : click, mouseover, keydown, load

- An **event listener** is a function in JavaScript that waits for a specific event to happen on an element and then executes code in response.
- It allows you to separate HTML and JavaScript logic for cleaner and more flexible code.

```javascript
let button = document.getElementById("myBtn");

button.addEventListener("click", function () {
  alert("Button was clicked!");
});
```

- Keeps HTML and JavaScript code separate
- Allows multiple events on the same element
- Makes code easier to maintain and debug
- Supports modern event handling practices

---

### Question 2: How does the addEventListener() method work in JavaScript? Provide an example.

- The addEventListener() method in JavaScript is used to attach an event handler to an HTML element.
- It listens for a specific event type (like click, mouseover, or keydown) and executes a function when that event occurs.

- element.addEventListener(event, function, useCapture);

```html
<button id="myBtn">Click Me</button>

<script>
  let button = document.getElementById("myBtn");

  button.addEventListener("click", function () {
    alert("Button was clicked!");
  });
</script>
```

---
