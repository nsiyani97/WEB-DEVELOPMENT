1. useState

“useState is the hook that creates state inside a functional component.
It provides a state value and a function to update that value.
Whenever the state updates, React automatically re-renders the component.”

2. useEffect

“useEffect is the hook that performs side effects in a component.
Side effects include actions like fetching data, setting timers, subscribing to events, or manually updating the DOM.
Its behavior depends on the dependency array — it can run on every render, only once, or only when specific values change.”

3. useContext

“useContext is the hook that allows a component to directly access values from a React Context.
It removes the need for passing props through many levels, making data sharing easier across the component tree.”

4. useRef

“useRef is the hook that stores a mutable value which does not cause re-renders when it changes.
It is commonly used to reference DOM elements or hold values that must persist across renders without triggering updates.”

5. useReducer

“useReducer is the hook designed for managing complex state logic.
It works using a reducer function that receives the current state and an action, and returns a new state.
This hook is ideal when state transitions involve multiple conditions or operations.”

6. useCallback

“useCallback is the hook that returns a memoized version of a function.
It ensures the function is only recreated when its dependencies change.
This helps improve performance by preventing unnecessary re-renders in child components.”

7. useMemo

“useMemo is the hook that memoizes the result of an expensive calculation.
It re-computes the value only when its dependencies change, preventing unnecessary heavy operations on each render.”

8. useLayoutEffect

“useLayoutEffect is the hook similar to useEffect but it runs synchronously before the browser paints the screen.
It is mainly used for reading or measuring layout information like sizes, positions, or scroll values.”

9. useImperativeHandle

“useImperativeHandle is the hook that customizes the instance value exposed when using refs with a component.
It provides control over what actions or properties can be accessed by parent components.”

10. useDebugValue

“useDebugValue is the hook used to show custom labels in React DevTools.
It is mainly used inside custom hooks to make debugging easier.”

11. useDeferredValue

“useDeferredValue is the hook that allows React to delay updating a part of the UI.
It helps keep the interface responsive during heavy computations.”

12. useTransition

“useTransition is the hook that allows marking certain state updates as non-urgent.
It improves user experience by letting urgent updates happen first while deferring slow ones.”

13. useId

“useId is the hook that generates a unique and stable ID for use in server and client rendering.
It is useful for accessibility attributes like labels and form controls.”

14. useSyncExternalStore

“useSyncExternalStore is the hook used for reading external data sources in a consistent way.
It ensures that React and external stores like Redux remain synchronized.”

15. Custom Hook

“A custom hook is a JavaScript function that starts with the word ‘use’ and contains one or more built-in hooks.
It allows reusing logic across multiple components without repeating code.”
