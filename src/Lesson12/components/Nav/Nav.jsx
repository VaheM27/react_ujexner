import { NavLink } from "react-router-dom";
import ROUTES from "../../Routes";

import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
      <li>
          <NavLink className="navLink" to={ROUTES.HOME}>Home</NavLink>
        </li>
        <li>
          <NavLink className="navLink" to={ROUTES.USERS}>Users</NavLink>
        </li>
        <li>
          <NavLink className="navLink" to={ROUTES.PRODUCTS}>Products</NavLink>
        </li>
        <li>
          <NavLink className="navLink" to={ROUTES.RECIPES}>Recipes</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
