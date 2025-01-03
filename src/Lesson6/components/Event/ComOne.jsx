import { useState } from "react";
import "./index.css";

export const ComOne = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 4)
  };

  const decrement = () => {
    setNumber(number - 1)
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decreement</button>
    </div>
  );
};
