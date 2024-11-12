import { useState } from "react";

export const ComThree = () => {
  const [show, setShow] = useState(true);

  function showHide() {
    setShow(!show);
  }

  return (
    <div className="main">
      <button onClick={showHide}>Show/Hide</button>
      {show ? <div className="box"></div> : <p>DIV hidden</p>}
      <div className={show ? "box" : "box2"}></div>
    </div>
  );
};
