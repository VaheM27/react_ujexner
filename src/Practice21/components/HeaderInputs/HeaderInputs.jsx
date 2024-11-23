import React from "react";

import "./HeaderInputs.css";

export const HeaderInputs = ({ add, sort, passSort }) => {
  return (
    <div className="inputs">
      <form className="form" onSubmit={add}>
        <input type="text" id="login" placeholder="Login" />
        <input type="text" id="pass" placeholder="Password" />
        <input type="submit" />
        {/* <button onClick={sort}>Sort By Login</button> */}
        {/* <button onClick={passSort}>Sort By Password</button> */}
      </form>
    </div>
  );
};
