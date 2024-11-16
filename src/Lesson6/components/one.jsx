import { useState } from "react";

export const One = () => {
  const [number, setNumber] = useState(0);

  const Increment = () => {
    setNumber(number + 1);
  };
  const Decrement = () => {
    setNumber(number - 1);
  };
  const Multiply = () => {
    setNumber(number * 2);
  };

  const Divide = () => {
    setNumber(number / 2);
  };
  return (
    <div>
      <div>
        <p>{number}</p>
        <button onClick={Increment}>increment</button>
        <button onClick={Decrement}> decrement</button>
        <button onClick={Multiply}>multiply</button>
        <button onClick={Divide}>divaide</button>
      </div>
    </div>
  );
};
