import React from "react";
import { NavLink } from "react-router-dom";
import ROUTES from "../../Routes";

import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li style={{ userSelect: "none" }}>
          <NavLink to={ROUTES.HOME}>Home</NavLink>
        </li>
        <li style={{ userSelect: "none" }}>
          <NavLink to={ROUTES.PRODUCTS}>Products</NavLink>
        </li>
        <li style={{ userSelect: "none" }}>
          <NavLink to={ROUTES.USERS}>Users</NavLink>
        </li>
        <li style={{ userSelect: "none" }}>
          <NavLink to={ROUTES.TODOS}>ToDos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
