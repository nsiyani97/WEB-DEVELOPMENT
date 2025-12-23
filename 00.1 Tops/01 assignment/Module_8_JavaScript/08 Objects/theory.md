### Question 1: What is an object in JavaScript? How are objects different from arrays?

- An object in JavaScript is a collection of data represented as key–value pairs. It is used to store multiple related pieces of information together under one name.

- There are two ways to access values of objects: Dot notation, Bracket notation.

```javascript
// object
let person = {
  name: "Nikhil",
  age: 25,
  city: "Mumbai",
};

console.log(person.name);
console.log(person["city"]);
```

1. **Structure**: Objects store data in key–value pairs, where each key maps to a value, while arrays store data in indexed positions starting from 0.

2. **Syntax**: Objects use curly braces {} with key–value pairs like `{name: "Nikhil", age: 25}`, while arrays use square brackets [] like `["Apple", "Banana", "Mango"]`.

3. **Access**: Object values are accessed using property names `(obj.key or obj["key"])`, while array elements are accessed using numeric indexes `(arr[0], arr[1])`.

4. **Order**: Objects are unordered collections — the order of keys is not guaranteed, while arrays are ordered by their index positions.

5. **Use Case**: Objects are best for representing entities with named properties (like a person or product), while arrays are ideal for lists or sequences of data (like items, numbers, or names).

---

### Question 2: Explain how to access and update object properties using dot notation and bracket notation.

- Uses a dot (.) to access or modify a property directly.
- Dot notation use the object name, followed by a dot, and then the property name.

- Uses square brackets ([]) with a string key.
- Bracket notation allows you to access or update object properties using string keys placed inside square brackets.
- It is useful when the property name is stored in a variable, or contains spaces or special characters.

```javascript
let person = { name: "Nikhil", age: 25 };
console.log(person.name); // Access → Output: Nikhil

person.age = 26; // Update
console.log(person.age); // Output: 26

let person = { name: "Nikhil", age: 25, "home city": "Mumbai" };

console.log(person["age"]); // Access → Output: 25
console.log(person["home city"]); // Works, unlike dot notation

person["age"] = 27; // Update
console.log(person["age"]); // Output: 27
```

---
