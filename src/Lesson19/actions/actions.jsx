import React, { useState } from "react";

import "./actions.css";

function Actions({ dispatch }) {
  const [username, setUsername] = useState("");
  const [newNumber, setNewNumber] = useState("");
  return (
    <div className="Actions">
      <h3>Enter Username</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Username"
      />
      <br />
      <button onClick={() => dispatch({ type: "ADD_DEVELOPER", payload: username })}>
        ADD DEVELOPER
      </button>
      <button
        onClick={() =>
          dispatch({ type: "CHANGE_USER", payload: username || "Unknown" })
        }
      >
        CHANGE USER
      </button>
      <button onClick={() => dispatch({ type: "SHUFFLE_ARRAY" })}>
        SHUFFLE ARRAY
      </button>
      <input
        type="number"
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}
        placeholder="Enter Number"
      />
      <br />
      <button
        onClick={() =>
          dispatch({ type: "ADD_NUMBER", payload: Number(newNumber) })
        }
      >
        ADD NUMBER
      </button>
      <button onClick={() => dispatch({ type: "REMOVE_SINGLE_DIGITS" })}>
        REMOVE SINGLE DIGITS
      </button>
      <button onClick={() => dispatch({ type: "ADD_AGE" })}>ADD AGE</button>
    </div>
  );
}

export default Actions;
