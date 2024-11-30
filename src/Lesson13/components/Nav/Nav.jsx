import React from "react";
import { NavLink } from "react-router-dom";
import ROUTES from "../../Routes";
import Icon from "@mdi/react";
import {
  mdiLinkedin,
  mdiHomeCircle,
  mdiFacebook,
  mdiInstagram,
  mdiHanger,
} from "@mdi/js";

import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <div className="main">
        <NavLink to={ROUTES.HOME} className="flexLink">
          <Icon path={mdiHomeCircle} size={3} />
          <p>Home</p>
        </NavLink>
        <NavLink to={ROUTES.PRODUCTS} className="flexLink">
          <Icon path={mdiHanger} size={3} />
          <p>Products</p>
        </NavLink>
      </div>
      <ul>
        <li>
          <a href="#" target="_blank" className="sm">
            <Icon path={mdiFacebook} size={2} />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="sm">
            <Icon path={mdiInstagram} size={2} />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="sm">
            <Icon path={mdiLinkedin} size={2} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
