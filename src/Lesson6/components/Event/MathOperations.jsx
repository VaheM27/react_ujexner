import { useState } from "react";
import "./index.css";

export const MathOperations = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1)
  };

  const decrement = () => {
    setNumber(number - 1)
  };

  const multiplication = () => {
    setNumber(number * 2)
  };

  const division = () => {
    setNumber(number / 2)
  };

  const square_up = () => {
    setNumber(number ** 2)
  };

  const reset = () => {
    setNumber(0)
  };

  return (
    <div className="math_operations">
      <div className="math_operations_buttons">
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decreement</button>
      <button onClick={multiplication}>Multiplication By 2</button>
      <button onClick={division}>Division By 2</button>
      <button onClick={square_up}>Square Up</button>
      </div>
      <p>{number}</p>
      <button className="reset_button" onClick={reset}>Reset</button>
    </div>
  );
};
