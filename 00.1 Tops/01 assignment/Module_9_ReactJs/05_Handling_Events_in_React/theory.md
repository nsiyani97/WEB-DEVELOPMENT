## Question 1: How are events handled in React compared to vanilla JavaScript? Explain the concept of synthetic events.

React uses **synthetic events**, a wrapper around native events, ensuring cross-browser compatibility. Event handlers are written in camelCase, and you pass the function reference.

```html
<button id="myButton">Click Me</button>

<script>
  const button = document.getElementById("myButton");

  // Native event listener
  button.addEventListener("click", function (event) {
    alert("Button clicked!");
    console.log(event); // Native MouseEvent object
  });
</script>
```

---

## Question 2: What are some common event handlers in React.js?

Examples:

**onClick:** `onClick={() => alert("Clicked!")}`
**onChange:** `onChange={(e) => setValue(e.target.value)}`
**onSubmit:** `onSubmit={(e) => e.preventDefault()}`

---

## Question 3: Why do you need to bind event handlers in class components?

In class components, methods don’t bind `this` automatically. Binding ensures the correct context of `this` inside the handler.

---
