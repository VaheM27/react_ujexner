import React from "react";

import "./Nav.css";
import { NavLink } from "react-router-dom";
import ROUTES from "../../Rountes";

const Nav = () => {

  const token = localStorage.getItem("authToken");

  return (
    <div className="nav">
      <ul>
        {!token ?
          <>
            <li>
              <NavLink to={ROUTES.LOGIN} className="links">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.REGISTER} className="links">
                Register
              </NavLink>
            </li>
          </>
          :
          <>
            <li>
              <NavLink to={ROUTES.LOGOUT} className="links">
                LogOut
              </NavLink>
            </li>
          </>
        }
      </ul>
    </div>
  );
};

export default Nav;