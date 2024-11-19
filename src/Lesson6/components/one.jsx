import { useState } from "react";

export const One = () => {
  const [number, setNumber] = useState(0);

  // const Increment = () => {
  //   setNumber(number + 1);
  // };
  // const Decrement = () => {
  //   setNumber(number - 1);
  // };
  // const Multiply = () => {
  //   setNumber(number * 2);
  // };
  // const Divide = () => {
  //   setNumber(number / 2);
  // };
  const handle = (title) => {
    switch (title) {
      case "Increment":
        setNumber(number + 1);
        break;
      case "Decrement":
        setNumber(number - 1);
        break;
      case "Multiply":
        setNumber(number * 2);
        break;
      case "Divide":
        setNumber(number / 2);
        break;
      default:
        return number;
    }
  };
  const buttons = ["Increment", "Decrement", "Multiply", "Divide"];

  return (
    <div className="incr">
      <div className="decr">
        <p>{number}</p>
        {/* <button onClick={Increment}>increment</button>
        <button onClick={Decrement}> decrement</button>
        <button onClick={Multiply}>multiply</button>
        <button onClick={Divide}>divaide</button> */}
        {buttons.map((item, index) => {
          return (
            <button key={index} onClick={() => handle(item)}>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};
