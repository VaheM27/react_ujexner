import React from "react";

import "./output.css";

function Output({ state }) {
  return (
    <div className="Output">
      <h3>Output</h3>
      <p>
        <strong>developers:</strong>
        <ul>
          {state.developers.map((dev, index) => (
            <li key={index}>
              ID: {dev.id}, Name: {dev.name}
            </li>
          ))}
        </ul>
      </p>
      <p>
        <strong>user:</strong> ID: {state.user.id}, Name: {state.user.name}
        {state.user.age && `, Age: ${state.user.age}`}
      </p>
      <p>
        <strong>arr:</strong>
        <ul>
          {state.arr.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </p>
    </div>
  );
}

export default Output;
