import { useReducer } from "react";
import { reducer, initialState } from "./reducer";
import { ACTION } from "./actionTypes";

import "./App.scss";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: ACTION.INPUT, payload: e.target.value });
  };

  const handleActionClick = (actionType, payload) => {
    dispatch({ type: actionType, payload });
  };

  const handleAddNumber = (actionType) => {
    const parsedValue = parseInt(state.inputValue);
    if (Number.isNaN(parsedValue)) {
      alert("Please write a valid number");
    } else {
      handleActionClick(actionType, parsedValue);
    }
  };

  return (
    <div className="container">
      <form>
        <div className="input">
          <input
            type="text"
            name="input"
            value={state.inputValue}
            onChange={handleChange}
          />
          <label htmlFor="input">Enter Username, Number or Developer</label>
        </div>
        <button
          type="button"
          onClick={() =>
            handleActionClick(ACTION.ADD_DEVELOPER, state.inputValue)
          }
        >
          Add Developer
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: ACTION.SHUFFLE_ARRAY })}
        >
          Shuffle Array
        </button>
        <button
          type="button"
          onClick={() => handleAddNumber(ACTION.ADD_NUMBER)}
        >
          Add Number
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: ACTION.REMOVE_SINGLE_DIGITS })}
        >
          Remove Single Digits
        </button>
        <button
          type="button"
          onClick={() =>
            handleActionClick(ACTION.CHANGE_USER, state.inputValue)
          }
        >
          Change User
        </button>
        <button type="button" onClick={() => handleAddNumber(ACTION.ADD_AGE)}>
          Add Age
        </button>
      </form>
      <div className="output">
        <h1>Output</h1>
        <div>
          {Object.entries(state).map(([key, value]) => (
            <div key={key}>
              <span>{key}: </span>
              <span>{JSON.stringify(value)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
