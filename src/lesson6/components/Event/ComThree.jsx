import { useState } from "react";

import "./index.css";

export const ComThree = () => {
  const [show, setShow] = useState(true);

  function showHide() {
    setShow(!show);
  }

  return (
    <div className="main">
      <button onClick={showHide}>{show ? "Hide" : "Show"}</button>
      {show ? <div className="box"></div> : <p>Div hidden</p>}
    </div>
  );
};
