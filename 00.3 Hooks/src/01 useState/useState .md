**useState** is a React Hook that lets you create state variables inside functional components.
It allows your component to store data, update data, and re-render automatically when that data changes.

- useState is a React Hook that returns two values:

state value (current value)
state setter function (used to update the value)

When you update state, React re-renders the component with the new value.

```jsx
const [state, setState] = useState(initialValue);

const [count, setCount] = useState(0);
```

1. Basic State Initialization
   Creating your first state variable with an initial value.

```jsx
import React, { useState } from "react";

const BasicInit = () => {
  // Declare a state variable "count" with initial value 0,
  // and a setter function "setCount".
  const [count, setCount] = useState(0);

  return (
    // When button clicked, call setCount to update state (count + 1).
    // React re-renders and shows the new count.
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
  );
};
export default BasicInit;
```

2. Updating State on Button Click
   State changes in response to events (e.g., clicking).

```jsx
import React, { useState } from "react";

const ChangeName = () => {
  // name initially "Nikhil"
  const [name, setName] = useState("Nikhil");

  return (
    // clicking replaces the name with "Siyani" by calling setter
    <button onClick={() => setName("Siyani")}>Change Name: {name}</button>
  );
};
export default ChangeName;
```

3. Storing Strings, Numbers, Booleans
   useState can store any primitive value.

```jsx
import React, { useState } from "react";

const ThemeToggle = () => {
  // isDark is a boolean; default is false (light theme)
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      {/* show current theme based on boolean */}
      <p>Theme: {isDark ? "Dark" : "Light"}</p>

      {/* toggle boolean by negating previous value */}
      <button onClick={() => setIsDark(!isDark)}>Toggle</button>
    </>
  );
};
export default ThemeToggle;
```

4. useState with Objects
   When updating objects, you must copy old state.

```jsx
import React, { useState } from "react";

const ObjectState = () => {
  // user is an object stored in state
  const [user, setUser] = useState({ name: "Nikhil", age: 27 });

  // updateAge uses the setter to create a new object (immutably)
  const updateAge = () => {
    // spread previous user properties, then override age
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    // displays name and age; clicking updates age immutably
    <button onClick={updateAge}>
      {user.name} - {user.age}
    </button>
  );
};
export default ObjectState;
```

5. useState with Arrays
   Arrays must also be copied, not mutated.

```jsx
import React, { useState } from "react";

const ArrayState = () => {
  // items is an array in state, starts empty
  const [items, setItems] = useState([]);

  const addItem = () => {
    // create a new array with existing items + new item
    setItems([...items, items.length + 1]);
  };

  return (
    <>
      {/* join numbers for display */}
      <p>Items: {items.join(", ")}</p>
      <button onClick={addItem}>Add Item</button>
    </>
  );
};
export default ArrayState;
```

6. Functional Updates
   When your new state depends on old state, use a callback.

```jsx
import React, { useState } from "react";

const FunctionalUpdate = () => {
  // count starts at 0
  const [count, setCount] = useState(0);

  const add = () => {
    // use functional updater to avoid stale closure problems;
    // prev is the previous state value provided by React.
    setCount((prev) => prev + 1);
  };

  return <button onClick={add}>Count: {count}</button>;
};
export default FunctionalUpdate;
```

7. Lazy Initialization
   Initial state is computed only once.

```jsx
import React, { useState } from "react";

const LazyInit = () => {
  // expensiveCalc runs only once (on initial render) because we pass a function.
  const expensiveCalc = () => {
    // imagine heavy computation here
    let result = 0;
    for (let i = 0; i < 1000000; i++) result += i;
    return result;
  };

  // useState accepts a function to lazily compute initial state
  const [num, setNum] = useState(() => expensiveCalc());

  return <p>Result: {num}</p>;
};
export default LazyInit;
```

8. Multiple useState Hooks
   You can create many independent states.

```jsx
import React, { useState } from "react";

const MultipleStates = () => {
  // each piece of state is independent
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [active, setActive] = useState(true);

  return (
    <div>
      {/* controlled updates would normally come from inputs/buttons */}
      <p>
        {name} {age} {active.toString()}
      </p>
    </div>
  );
};
export default MultipleStates;
```

9. Controlling Form Inputs
   Text fields store values in state.

```jsx
import React, { useState } from "react";

const ControlledInput = () => {
  // text stores current input value
  const [text, setText] = useState("");

  return (
    // value is bound to state; onChange updates state from the event
    <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type here" />
  );
};
export default ControlledInput;
```

10. Resetting State
    You can manually reset state to its initial value.

```jsx
import React, { useState } from "react";

const ResetState = () => {
  // count default 5
  const [count, setCount] = useState(5);

  return (
    <>
      <p>{count}</p>
      {/* reset to initial value (0 in this example) */}
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
};
export default ResetState;
```

11. Toggling Boolean State
    Common for dark mode, dropdowns, modals.

```jsx
import React, { useState } from "react";

const ToggleOpen = () => {
  // open indicates whether modal/dropdown is open
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* toggle by negating previous value */}
      <button onClick={() => setOpen((prev) => !prev)}>Toggle</button>

      {/* conditional rendering based on boolean state */}
      {open && <div>Opened!</div>}
    </>
  );
};
export default ToggleOpen;
```

12. Updating Part of an Object
    Use spread operator.

```jsx
import React, { useState } from "react";

const UpdatePartObject = () => {
  // person has multiple fields
  const [person, setPerson] = useState({ name: "Nikhil", city: "Ahmedabad" });

  const changeCity = () => {
    // use functional updater and spread to avoid losing other keys
    setPerson((prev) => ({ ...prev, city: "Mumbai" }));
  };

  return <button onClick={changeCity}>{person.city}</button>;
};
export default UpdatePartObject;
```

13. Updating Arrays of Objects
    Common for lists, carts, todo apps.

```jsx
import React, { useState } from "react";

const TodosExample = () => {
  // todos is an array of objects
  const [todos, setTodos] = useState([{ id: 1, task: "Learn React" }]);

  const addTodo = () => {
    // append a new todo object immutably
    setTodos((prev) => [...prev, { id: prev.length + 1, task: "Learn useState" }]);
  };

  return (
    <>
      {/* list tasks */}
      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.task}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};
export default TodosExample;
```

14. useState with Async Operations
    Updating state after fetch / setTimeout.

```jsx
import React, { useState, useEffect } from "react";

const AsyncState = () => {
  // start with loading text
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    // simulate async operation (e.g., fetch)
    const timer = setTimeout(() => {
      // update state after async task completes
      setData("Loaded!");
    }, 2000);

    // cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, []); // empty deps => run once on mount

  return <p>{data}</p>;
};
export default AsyncState;
```

15. Avoiding Re-render Problems
    Never mutate state directly.

```jsx
import React, { useState } from "react";

const ImmutableUpdate = () => {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  const addNumberWrong = () => {
    // WRONG: mutating the array and setting the same reference can fail to trigger a re-render
    // numbers.push(4);
    // setNumbers(numbers);
  };

  const addNumberCorrect = () => {
    // CORRECT: create a new array so React sees a new reference and re-renders
    setNumbers((prev) => [...prev, prev.length + 1]);
  };

  return (
    <>
      <p>{numbers.join(", ")}</p>
      <button onClick={addNumberCorrect}>Add Number</button>
    </>
  );
};
export default ImmutableUpdate;
```

learn useEffect hooks as per following pattern:
what is useEffect

- useEffect defination
- useEffect syntaxt

-> basic to advanced concepts at least 15.
1 useEffect concept name

- useEffect concept meaning with 2 to 3 lines
- coding example and write inline explaination comments.

2 useEffect concept name
...
