import React, { useState } from "react";

// Build a todo list application using Recoil for state management. Allow users to add, remove, and mark tasks as complete.

import { useRecoilState } from "recoil";
import { todoListState } from "./recoil/todoState";

function TodoRecoil() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [text, setText] = useState("");

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText("");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h2>Recoil Todo App</h2>

      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add todo" />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleTodo(t.id)}
            >
              {t.text}
            </span>
            <button onClick={() => removeTodo(t.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoRecoil;
