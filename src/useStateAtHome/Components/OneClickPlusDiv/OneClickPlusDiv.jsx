import { useState } from "react";
import { nanoid } from "nanoid";

import "./OneClickPlusDiv.css";

export const OneClickPlusDiv = () => {
  const [div, setDiv] = useState([]);

  function addDiv() {
    setDiv([...div, nanoid(8)]);
  }

  return (
    <div>
      <div>
        <h1>Add Div</h1>
        <button onClick={addDiv}>Add Div</button>
      </div>
      <div className="div-container">
        {div.map((elm, index) => {
          return (
            <div className="div-box" key={index}>
              {elm}
            </div>
          );
        })}
      </div>
    </div>
  );
};
