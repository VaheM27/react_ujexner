import { useState } from "react";
import "./IncrementDecrement.css";

export const IncrementDecrement = () => {
  const [number, setNumber] = useState(0);

  function Increment() {
    setNumber(number + 1);
  }
  function Decrement() {
    setNumber(number - 1);
  }

  return (
    <div >
      <h1>Increment Decrement</h1>
      <p className="number-p">{number}</p>
      <button onClick={Increment} className="button-increment">Increment</button>
      <button onClick={Decrement} className="button-decrement">Decrement</button>
    </div>
  );
};
