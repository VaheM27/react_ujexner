import { useState } from "react";
import { Data } from "../constants/data";

export const Tow = () => {
  const [show, setShow] = useState(true);

  const ShowHide = () => {
    setShow(!show);
  };
  return (
    <div className="users">
      <button onClick={ShowHide}>Show/Hide</button>
      <div className="boxes">
        {show &&
          Data.map((el) => {
            return (
              <div className="box">
                <h2>{el.name}</h2>
                <p>{el.year}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
