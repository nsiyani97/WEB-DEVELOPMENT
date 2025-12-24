### Question 1: What is the DOM (Document Object Model) in JavaScript? How does JavaScript interact with the DOM?

- The DOM is a structured representation of a webpage's elements (HTML or XML page). Whenever an HTML page loads, the web browser creates a DOM for that page. It's a way for JavaScript to understand and change a webpage's content, layout, and style.

- The DOM represents the web page as a tree-like structure of objects. Each web page element, like paragraphs and images, becomes an object in this tree. JavaScript uses the DOM to manipulate these objects and make the webpage interactive.

- The DOM allows JavaScript to access, modify, add, or delete HTML elements and their content dynamically.

```javascript
// 1. Accessing Elements
document.getElementById("title"); // by ID
document.getElementsByClassName("class"); // by class name
document.getElementsByTagName("p"); // by tag name
document.querySelector(".class"); // first matching element
document.querySelectorAll("p"); // all matching elements

// 2. Changing Content
heading.innerText = "Welcome to JavaScript!";
heading.style.color = "blue";

// 3. Creating and Adding New Elements
let newPara = document.createElement("p");
newPara.innerText = "This is a new paragraph.";
document.body.appendChild(newPara);

// 4. Removing Elements
heading.remove(); // Removes the <h1> element
```

---

### Question 2: Explain the methods getElementById(), getElementsByClassName(), and querySelector() used to select elements from the DOM.

- `getElementById("id")` – is used to select a single HTML element by its unique id attribute.

- `getElementsByClassName("class")` – is used to select all elements that share the same class name.

- `querySelector("selector")` – selects the first element that matches a CSS selector (like #id, .class, or tag name).

---
