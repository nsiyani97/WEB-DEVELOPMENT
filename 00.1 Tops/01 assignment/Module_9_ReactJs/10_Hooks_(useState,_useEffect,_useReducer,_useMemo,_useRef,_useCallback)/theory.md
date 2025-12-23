## Question 1: What are React hooks? How do useState() and useEffect() work?

Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes. Some common hooks include useState, useEffect, useMemo, useRef, useCallback, etc.

---

## Question 2: Why are hooks important in React?

Hooks eliminate the need for class components, simplify code reuse, and make logic easier to share.

---

## Question 3: What is useReducer?

`useReducer()` is an alternative to `useState()` for complex state logic.  
It uses a reducer function with actions:

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

---

## Question 4: What is the purpose of useCallback & useMemo Hooks?

- `useCallback()` memoizes callback functions.
- `useMemo()` memoizes computed values.

---

## Question 5: Difference between useCallback & useMemo Hooks.

- `useCallback` returns a **function**.
- `useMemo` returns a **computed value**.

---

## Question 6: What is useRef?

`useRef()` stores mutable values that persist across renders and can access DOM elements directly.

---
