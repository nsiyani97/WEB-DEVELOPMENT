### Question 1: What are variables in JavaScript? How do you declare a variable using var, let, and const?

- a **variable** is a container for storing data values such as numbers, strings, objects, or functions. Variables make code reusable and dynamic because they allow us to work with data in memory.

- var has a global scope or function scope; let and const are block-scoped.

- var can be re-declared and updated, let can be updated but not re-declared.

- const cannot be re-declared or updated, that’s why they’re called “constants”.

Variables store data values.

```javascript
var name = "John";
let age = 25;
const country = "India";
```

---

### Question 2: Explain the different data types in JavaScript. Provide examples for each.

- primitive : String, Number, Boolean, Null, Undefined, Symbols
  Primitive data types are the main elements that make up all the data you work with in JavaScript. They are immutable, meaning you can't change their values once you create them. Also, they're stored in memory as single values.

- non-primitive : Object, Array, Function
  Non-primitive data types, also called reference data types, store groups of data or complex structures. They are mutable, meaning you can change their values once you create them. Unlike primitive data types, they're stored in memory as references rather than single values.

1. **String** – `"Hello"`
2. **Number** – `42`
3. **Boolean** – `true`
4. **Null** – intentional absence of value
5. **Undefined** – a variable declared but not assigned
6. **Object** – `{name: "John"}`
7. **Array** – `[1, 2, 3]`
8. **Function** - `function add(a = 10, b = 5) { return a + b; }`

---

### Question 3: What is the difference between undefined and null in JavaScript?

- **undefined**: A variable has been declared but not assigned a value.
- **null**: A null variable is a variable or property that is empty. You use null variables when you want to show that a variable has no values or want to clear the value of a variable.

---
