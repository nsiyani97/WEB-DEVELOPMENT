- What is useRef?

`useRef` is a React Hook that lets you create a mutable object that stays the same between renders.
It does not trigger re-renders when the value changes.
Often used to access DOM elements, store mutable values, and track previous state.

- useRef Definition

useRef returns an object like: `{ current: value }`
This object persists across renders, and updating `.current` does not re-render the component.

```jsx
const refName = useRef(initialValue);
// To Access the value:
refName.current;
```

1. Basic useRef DOM Access
   Attach `useRef` to an HTML element to directly access it.
   Common for focusing input, measuring DOM size, scrolling.

```jsx
import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null); // store DOM reference

  const focusInput = () => {
    inputRef.current.focus(); // access DOM node and focus
  };

  return (
    <>
      <input ref={inputRef} placeholder="Click button to focus me" />
      <button onClick={focusInput}>Focus</button>
    </>
  );
};

export default FocusInput;
```

2. Storing Mutable Values Without Re-render
   useRef can store values that won't cause component re-render when changed.
   Useful for counters, flags, and previous values.

```jsx
const MutableValue = () => {
  const countRef = useRef(0); // stores number like a variable

  const increase = () => {
    countRef.current += 1; // updating ref does NOT re-render
    console.log("Current:", countRef.current);
  };

  return <button onClick={increase}>Increase</button>;
};
```

3. Tracking Previous State Value
   Store an old state value so you can compare old vs new.
   useEffect updates the reference after render.

```jsx
const PrevState = () => {
  const [count, setCount] = useState(0);
  const prevRef = useRef(0); // store previous count

  useEffect(() => {
    prevRef.current = count; // update after render
  });

  return (
    <>
      <p>Current: {count}</p>
      <p>Previous: {prevRef.current}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};
```

4. Avoiding Re-renders With useRef Instead of useState
   useRef is good when you want to track values without causing UI updates.

```jsx
const NoRerenderCounter = () => {
  const clicks = useRef(0); // no re-render on update

  const handleClick = () => {
    clicks.current += 1; // update silently
    console.log(clicks.current);
  };

  return <button onClick={handleClick}>Click</button>;
};
```

5. useRef for setInterval Timer ID
   Store interval ID so you can clear it later.

```jsx
const Timer = () => {
  const timerRef = useRef(null);

  const start = () => {
    timerRef.current = setInterval(() => {
      console.log("Running...");
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current); // clear using ref
  };

  return (
    <>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
};
```

6. useRef for setTimeout ID
   Store timeout ID so you can cancel it safely.

```jsx
const TimeoutExample = () => {
  const timeoutRef = useRef(null);

  const start = () => {
    timeoutRef.current = setTimeout(() => {
      console.log("Done!");
    }, 2000);
  };

  const cancel = () => {
    clearTimeout(timeoutRef.current);
  };

  return (
    <>
      <button onClick={start}>Start Timer</button>
      <button onClick={cancel}>Cancel</button>
    </>
  );
};
```

7. useRef to Store Previous Props
   Track prop changes across renders.

```jsx
const PrevProps = ({ value }) => {
  const prev = useRef();

  useEffect(() => {
    prev.current = value; // store previous prop
  });

  return (
    <>
      <p>Current: {value}</p>
      <p>Previous: {prev.current}</p>
    </>
  );
};
```

8. useRef to Prevent Unwanted Effects (Flag Ref)
   Avoid running an effect on the first render.

```jsx
const SkipFirstEffect = () => {
  const firstRender = useRef(true);
  const [data, setData] = useState(0);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false; // skip first run
      return;
    }
    console.log("Effect running after first render");
  }, [data]);

  return <button onClick={() => setData(data + 1)}>Update</button>;
};
```

9. useRef to Access Child Elements (scrolling)
   Scroll to an element automatically.

```jsx
const ScrollToDiv = () => {
  const boxRef = useRef(null);

  const scroll = () => {
    boxRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button onClick={scroll}>Scroll to Box</button>

      <div style={{ height: 600 }} />
      <div ref={boxRef} style={{ height: 100, background: "yellow" }}>
        Target Box
      </div>
    </>
  );
};
```

10. useRef for Focus Management
    Automatically focus an input on page load.

```jsx
const AutoFocus = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus(); // focus when mounted
  }, []);

  return <input ref={inputRef} placeholder="Auto-focused" />;
};
```

11. Persisting Values Between Renders With No Re-render
    useRef preserves values even when component re-renders.
    Good for counters that don't need UI updates.

```jsx
const PersistedValue = () => {
  const count = useRef(0);

  return (
    <button
      onClick={() => {
        count.current++;
        console.log(count.current);
      }}
    >
      Increment (No Re-render)
    </button>
  );
};
```

12. useRef for Imperative Handle (useImperativeHandle)
    Expose functions from child component to parent with refs.
    Requires forwardRef.

```jsx
const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    sayHello() {
      alert("Hello from child!");
    },
  }));

  return <p>Child Component</p>;
});

const Parent = () => {
  const childRef = useRef();

  return <button onClick={() => childRef.current.sayHello()}>Call Child</button>;
};
```

13. useRef for Media Controls (Audio / Video)
    Control media elements directly.

```jsx
const VideoPlayer = () => {
  const videoRef = useRef();

  return (
    <>
      <video ref={videoRef} width="300" src="/sample.mp4" />
      <button onClick={() => videoRef.current.play()}>Play</button>
      <button onClick={() => videoRef.current.pause()}>Pause</button>
    </>
  );
};
```

14. useRef to Store Expensive Computation Results
    Avoid recalculating a heavy function on every render.

```jsx
const ExpensiveCalc = () => {
  const resultRef = useRef(null);

  if (!resultRef.current) {
    // calculate only once
    let total = 0;
    for (let i = 0; i < 1e6; i++) total += i;
    resultRef.current = total;
  }

  return <p>{resultRef.current}</p>;
};
```

15. useRef for Detecting Clicks Outside an Element
    Great for closing menus, modals, dropdowns.

```jsx
const OutsideClick = () => {
  const boxRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        console.log("Clicked outside!");
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={boxRef} style={{ padding: 20, background: "#eee" }}>
      Click inside this box
    </div>
  );
};
```
