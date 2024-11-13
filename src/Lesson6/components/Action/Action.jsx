import { useState } from "react";

import "./Action.scss";

const Action = () => {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }
  function decrement() {
    setNumber(number - 1);
  }
  function multiplication() {
    setNumber(number * 2);
  }
  function division() {
    setNumber(number / 2);
  }
  function square() {
    setNumber(number ** 2);
  }
  function squareRoot() {
    setNumber(Math.sqrt(number));
  }

  return (
    <div className="action">
      <p>{number}</p>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={multiplication}>Multiplication</button>
        <button onClick={division}>Division</button>
        <button onClick={square}>Square</button>
        <button onClick={squareRoot}>Square Root</button>
      </div>
    </div>
  );
};

export default Action;
