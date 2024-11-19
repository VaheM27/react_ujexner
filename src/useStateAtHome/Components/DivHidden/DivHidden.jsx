import { useState } from "react";

import "./DivHidden.css";

export const DivHidden = () => {
  const [show, setShow] = useState(true);
  function ShowHiddenDiv() {
    setShow(!show);
  }

  return (
    <div>
      <h1>{show ? "Show Div" : "Div Hidden"}</h1>
      <button onClick={ShowHiddenDiv}>{show ? "Hide" : "Show"}</button>
      {show ? <div className="box1"> </div> : <p>Div hidden</p>}
    </div>
  );
};
