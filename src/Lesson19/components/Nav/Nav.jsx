import React from "react";
import { NavLink } from "react-router-dom";
import ROUTES from "../../Routes";

import "./Nav.scss";

const Nav = () => {
  const navItems = ["posts", "comments", "users"];

  return (
    <div className="nav">
      <ul>
        {navItems.map((elm, i) => {
          return (
            <NavLink
              className="link"
              key={i}
              to={`/${ROUTES.DASHBOARD}/${elm}`}
            >
              <li className="navLi">{elm}</li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
