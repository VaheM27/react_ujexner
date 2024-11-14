import { useState } from "react";
import { nanoid } from "nanoid";

export const ComFour = () => {
  const [div, setDiv] = useState([]);

  function addDiv() {
    setDiv([...div, { id: nanoid(8) }]);
  }

  return (
    <div className="fain">
      <button onClick={addDiv}>Add Div</button>
      {div.map((elm) => {
        return (
          <div className="div-box" key={elm.id}>
            {elm.id}
          </div>
        );
      })}
    </div>
  );
};
