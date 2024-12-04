import React from "react";

import { NavLink } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <ul className="nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
