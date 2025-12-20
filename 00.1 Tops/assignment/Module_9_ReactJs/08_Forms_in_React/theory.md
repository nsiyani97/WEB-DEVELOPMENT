## Question 1: How do you handle forms in React? Explain the concept of controlled components.

Controlled components manage form data via React state:

```jsx
const [value, setValue] = useState("");
<input value={value} onChange={(e) => setValue(e.target.value)} />;
```

---

## Question 2: Difference between controlled and uncontrolled components in React.

**Controlled:** Data managed via React state.
**Uncontrolled:** Data handled by the DOM directly using `ref`.

---
