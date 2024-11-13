import { useState } from "react";

import "./Number.scss";

const Number = () => {
  const [digit, setDigit] = useState(0);

  const add = () => {
    setDigit(digit + 1);
  };

  const extract = () => {
    setDigit(digit - 1);
  };

  const multiple = () => {
    setDigit(digit * 2);
  };

  const divide = () => {
    setDigit(digit / 2);
  };

  const degree = () => {
    setDigit(Math.pow(digit, 2));
  };

  return (
    <div className="number">
      <h1 className="mainNum">{digit}</h1>
      <div className="btnDiv">
        <button onClick={add} className="btn">
          Add
        </button>
        <button onClick={extract} className="btn">
          Extract
        </button>
        <button onClick={multiple} className="btn">
          Multiple
        </button>
        <button onClick={divide} className="btn">
          Divide
        </button>
        <button onClick={degree} className="btn">
          Degree
        </button>
      </div>
    </div>
  );
};

export default Number;
