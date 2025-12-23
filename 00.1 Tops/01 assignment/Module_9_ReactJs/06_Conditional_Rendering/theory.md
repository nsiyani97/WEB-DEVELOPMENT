## Question 1: What is conditional rendering in React?

Conditional rendering displays components or elements based on certain conditions using logic like if-else or ternary operators.

---

## Question 2: Explain how if-else, ternary operators, and && are used in JSX for conditional rendering.

```jsx
if (isLoggedIn) return <Dashboard />;
return <Login />;

// Ternary
{
  isLoggedIn ? <Dashboard /> : <Login />;
}

// Logical AND
{
  isAdmin && <AdminPanel />;
}
```

---
