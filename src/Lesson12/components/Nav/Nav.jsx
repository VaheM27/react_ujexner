import React from "react";

import "./Nav.css";
import { NavLink } from "react-router-dom";
import ROUTES from "../../Routes";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to={ROUTES.HOME} className="links">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.USERS} className="links">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.POSTS} className="links">
            Posts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
