import { useReducer, useState } from "react";
import { reducer, initialState } from "./reducer";
import { ACTION } from "./actionTypes";

import "./App.scss";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.pventDefault();
    if (value.trim()) {
      dispatch({ type: ACTION.ADD_DEVELOPER, payload: value });
      setValue("");
    }
  };

  const handleActionClick = (actionType, payload) => {
    dispatch({ type: actionType, payload });
    setValue("");
  };

  const handleAddNumber = (actionType) => {
    const parsedValue = parseInt(value);
    if (Number.isNaN(parsedValue)) {
      alert("Please write a valid number");
      setValue("");
    } else {
      handleActionClick(actionType, parsedValue);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input">
          <input
            type="text"
            name="input"
            value={value}
            onChange={handleChange}
          />
          <label htmlFor="input">Enter Username, Number or Developer</label>
        </div>
        <button
          type="button"
          onClick={() => handleActionClick(ACTION.ADD_DEVELOPER, value)}>
          Add Developer
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: ACTION.SHUFFLE_ARRAY })}>
          Shuffle Array
        </button>
        <button
          type="button"
          onClick={() => handleAddNumber(ACTION.ADD_NUMBER)}>
          Add Number
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: ACTION.REMOVE_SINGLE_DIGITS })}>
          Remove Single Digits
        </button>
        <button
          type="button"
          onClick={() => handleActionClick(ACTION.CHANGE_USER, value)}>
          Change User
        </button>
        <button type="button" onClick={() => handleAddNumber(ACTION.ADD_AGE)}>
          Add Age
        </button>
      </form>
      <div className="output">
        <h1>Output</h1>
        <p>
          {Object.entries(state).map(([key, value]) => (
            <div key={key}>
              <span>{key}: </span> 
              <span>{JSON.stringify(value)}</span>
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};

export default App;
