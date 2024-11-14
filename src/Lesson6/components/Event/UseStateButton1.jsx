import { useState } from "react";

export const UseStateButton1 = () => {
  const [number, setNumber] = useState(0);
  const plyus = () => {
    setNumber(number + 1);
  };
  const minus = () => {
    setNumber(number - 1);
  };
  return (
    <div className="div">
      <div className="center">
        <button onClick={minus}>Click Me</button>
        <button onClick={plyus}>Click Me</button>
      </div>
      <p> {number} </p>
    </div>
  );
};
