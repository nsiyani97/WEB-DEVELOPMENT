**Redux**

- Redux is a state management library.
- It is completely independent of React — you can use Redux with React, Angular, Vue, Node.js, or even plain JavaScript.

- Redux provides:
  A store to hold application state
  Actions to describe what happened
  Reducers to update the state
  A strict, predictable architecture

- Think of Redux as the brain that manages your app’s data.

**React-Redux**

- React-Redux is the official React binding library for Redux.
- It helps React components communicate with a Redux store easily.

- React-Redux provides four main functional features (core APIs) that help React work with Redux smoothly.

`<Provider>` — makes the Redux store available to React components
`useSelector()` — read data from the store
`useDispatch()` — send actions to the store
`connect()` — older HOC API to link components to Redux

- Think of React-Redux as the bridge between React and Redux.

1. `<Provider>`
   Makes the Redux store available to all React components.
   Wraps your entire application.

```jsx
<Provider store={store}>
  <App />
</Provider>
```

2. `useSelector()`
   Lets a React component read data from the Redux store.
   Automatically re-renders the component when the selected state changes.

```jsx
const count = useSelector((state) => state.counter.value);
```

3. `useDispatch()`
   Allows a component to send actions to the Redux store.

```jsx
const dispatch = useDispatch();
dispatch(increment());
```

4. `connect()` (older API)
   Higher-order component used before hooks existed.
   Still supported but not preferred now.

```jsx
export default connect(mapState, mapDispatch)(MyComponent);
```
