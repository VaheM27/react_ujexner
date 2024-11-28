import React from "react";

import "./Nav.css";
import { NavLink } from "react-router-dom";
import ROUTES from "../../Routes";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={ROUTES.HOME} className="links">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.ABOUT} className="links">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.CONTACTUS} className="links">
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.PRODUCTS} className="links">
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
