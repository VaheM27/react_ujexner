import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../Routes";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footerUl">
        <li>
          <Link className="footerLinks" to={ROUTES.HOME}>
            Home
          </Link>
        </li>
        <li>
          <Link className="footerLinks" to={ROUTES.PRODUCTS}>
            Products
          </Link>
        </li>
      </ul>
      <p className="footerPar">© All Rights Reserved 2024</p>
    </div>
  );
};

export default Footer;
