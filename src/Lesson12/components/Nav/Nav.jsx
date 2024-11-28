import React from "react";

import { NavLink } from "react-router-dom";
import ROUTES from "../../Routes";

import "./Nav.css";

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
          <NavLink to={ROUTES.USER} className="links">
            User
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.CAR} className="links">
            Car
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.FRUIT} className="links">
            Fruit
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.TIME} className="links">
            Time
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
