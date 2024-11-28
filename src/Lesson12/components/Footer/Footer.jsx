import { NavLink } from "react-router-dom";
import ROUTES from "../../Routes";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footerUl">
        <li>
          <NavLink to={ROUTES.HOME}>Home</NavLink>
        </li>
        <li>Users</li>
        <li>Products</li>
        <li>Recipes</li>
      </ul>
      <p className="footerPar">© All Rights Reserved 2024</p>
    </div>
  );
};

export default Footer;
