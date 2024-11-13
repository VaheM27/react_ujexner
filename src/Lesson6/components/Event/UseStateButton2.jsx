import { useState } from "react";

export const UseStateButton2 = () => {
  const [number2, setNumber] = useState(1);
  const bajanum = () => {
    setNumber(number2 * 2);
  };
  const bazmapatkum = () => {
    setNumber(number2 / 2);
  };
  return (
    <div className="div1">
      <p> {number2} </p>
      <div className="center1">
        <button onClick={bazmapatkum}>Click Me</button>
        <button onClick={bajanum}>Click Me</button>
      </div>
    </div>
  );
};
