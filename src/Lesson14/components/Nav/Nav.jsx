import React from "react";
import { NavLink } from "react-router-dom";
import ROUTES from "../../Routes";
import Icon from "@mdi/react";
import { mdilHome, mdilCart, mdilAccount } from "@mdi/light-js";

import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink className="navLink" to={ROUTES.HOME}>
            <Icon path={mdilHome} size={1.5} />
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to={ROUTES.ITEMS}>
            <Icon path={mdilCart} size={1.5} />
            <p>Products</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to={ROUTES.PERSONAL}>
            <Icon path={mdilAccount} size={1.5} />
            <p>Personal</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
