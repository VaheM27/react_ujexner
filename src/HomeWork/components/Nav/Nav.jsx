import React from "react";
import { NavLink } from "react-router-dom";
import ROUTES from "../../Routes";

import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li style={{ userSelect: "none" }}>
          <NavLink to={ROUTES.USERS}>Users</NavLink>
        </li>
        <li style={{ userSelect: "none" }}>
          <NavLink to={ROUTES.POSTS}>Posts</NavLink>
        </li>
        <li style={{ userSelect: "none" }}>
          <NavLink to={ROUTES.PHOTOS}>Photos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
