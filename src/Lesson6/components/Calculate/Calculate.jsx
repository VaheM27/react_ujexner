import { useState } from "react";

import "./Calculate.scss";

const Calculate = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const actionMap = {
    Addition: () => setCount(count + parseInt(value)),
    Subtraction: () => setCount(count - parseInt(value)),
    Division: () => setCount(count / parseInt(value)),
    Multiplication: () => setCount(count * parseInt(value)),
    Quadrat: () => setCount(count ** 2),
  };

  const inputValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <section className="calcSection">
      <div className="container flexContainer">
        <div>
          <p>{count}</p>
          <input type="text" onChange={inputValue} placeholder="Give a Value" />
        </div>
        <div>
          {Object.entries(actionMap).map(([actionName, actionFunc]) => (
            <button onClick={actionFunc} key={actionName}>
              {actionName}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calculate;
