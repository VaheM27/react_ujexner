import { useState } from "react";

import "./Number.scss";

const Number = () => {
  const [digit, setDigit] = useState(0);

  const handleStateManage = (title) => {
    switch (title) {
      case "Add":
        setDigit(digit + 1);
        break;
      case "Extract":
        setDigit(digit - 1);
        break;
      case "Multiple":
        setDigit(digit * 2);
        break;
      case "Divide":
        setDigit(digit / 2);
        break;
      case "Degree":
        setDigit(Math.pow(digit, 2));
        break;
      default:
        return digit;
    }
  };

  const buttons = ["Add", "Extract", "Multiple", "Divide", "Degree"];

  return (
    <div className="number">
      <h1 className="mainNum">{digit}</h1>
      <div className="btnDiv">
        {buttons.map((item, index) => {
          return (
            <button
              key={index}
              className="btn"
              onClick={() => handleStateManage(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Number;
