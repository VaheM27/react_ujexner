import React, { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import { ADD_COUNT, DECREMENT, INCREMENT, SORT } from "./actionTypes";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function increment() {
    dispatch({ type: INCREMENT, payload: 1 });
  }

  function decrement() {
    dispatch({ type: DECREMENT, payload: 2 });
  }

  return (
    <div>
      <p>{JSON.stringify(state)}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => dispatch({ type: ADD_COUNT, payload: 5 })}>
        Add 5
      </button>
      <button onClick={() => dispatch({ type: SORT })}>SORT</button>
    </div>
  );
};

export default App;
