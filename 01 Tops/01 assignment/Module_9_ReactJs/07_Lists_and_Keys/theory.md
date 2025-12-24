## Question 1: How do you render a list of items in React? Why is it important to use keys when rendering lists?

Using `map()`:

```jsx
items.map((item) => <li key={item.id}>{item.name}</li>);
```

Keys help React efficiently identify changed, added, or removed elements.

---

## Question 2: What are keys in React, and what happens if you do not provide a unique key?

Keys are unique identifiers for list elements. Without keys, React may re-render incorrectly, leading to performance issues or UI bugs.

---
