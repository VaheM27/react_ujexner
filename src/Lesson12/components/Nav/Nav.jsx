import React from "react";

import { NavLink } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <ul className="navigation">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contactUs">ContactUs</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
