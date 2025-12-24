import { createStore } from "redux";
import counterReducer from "./reducer";

/*
  Create the Redux store:
  - The single source of truth for app state.
  - Pass the reducer to createStore.
  - Optionally enable Redux DevTools when available.
*/

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(counterReducer, reduxDevtools);

export default store;
