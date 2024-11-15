import { useState } from "react";

import "./Action.scss";
import { nanoid } from "nanoid";

const Action = () => {
  const [number, setNumber] = useState(0);

  const buttons = [
    ["Increment", "+"],
    ["Decrement", "-"],
    ["Multiplication", "*"],
    ["Division", "/"],
    ["Square", "x^2"],
    ["SquareRoot", "√"],
  ];

  const math = (x) => {
    switch (x[0]) {
      case "Increment":
        setNumber(number + 1);
        break;
      case "Decrement":
        setNumber(number - 1);
        break;
      case "Multiplication":
        setNumber(number * 2);
        break;
      case "Division":
        setNumber(number / 2);
        break;
      case "Square":
        setNumber(number ** 2);
        break;
      case "SquareRoot":
        setNumber(Math.sqrt(number));
        break;
      default:
        break;
    }
  };

  return (
    <div className="action">
      <p>{number}</p>
      <div className="buttons">
        {buttons.map((btn) => {
          return (
            <button
              onClick={() => {
                return math(btn);
              }}
              key={nanoid(2)}
            >
              {btn[0]} <span>{btn[1]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Action;
