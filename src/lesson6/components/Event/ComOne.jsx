import { useState } from "react";
import "./index.css";

export const ComOne = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={increment} className="button_increment">
        Increment
      </button>
      <button onClick={decrement} className="button_decrement">
        Decrement
      </button>
    </div>
  );
};
