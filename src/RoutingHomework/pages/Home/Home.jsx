import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <p>
        Why did the React component get promoted? Because it always knew how to
        handle itself under state pressure! 😄
      </p>
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png"
        alt="React.JS"
        className="img"
      />
      <div>
        <Link to={"/users"}>Users</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/todos"}>ToDos</Link>
      </div>
    </div>
  );
};
