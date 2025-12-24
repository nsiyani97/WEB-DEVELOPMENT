### Question 1: What is an array in JavaScript? How do you declare and initialize an array?

- An array in JavaScript is a special type of object used to store multiple values in a single variable.
- Each value in an array is called an element, and each element has an index number (starting from 0).

1. Using Square Brackets [] (Most Common Way)
2. Using the new Array() Constructor

```javascript
let fruits = ["apple", "banana", "cherry"];
let numbers = new Array(10, 20, 30, 40);

// access
console.log(fruits[0]);

console.log(fruits[fruits.length - 1]);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}
```

---

### Question 2: Explain the methods push(), pop(), shift(), and unshift() used in arrays.

- `push()` – Add to end
- `pop()` – Remove from end
- `shift()` – Remove from start
- `unshift()` – Add to start

---
