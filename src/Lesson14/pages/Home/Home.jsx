import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../Routes";
import logo from "../../assets/images/shop.webp";

import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <h1>Shopping Centre</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          soluta aperiam est neque exercitationem! Ea adipisci, asperiores ad
          mollitia nemo alias facilis voluptas! Quisquam fugit cum quaerat
          ipsum. Consectetur quidem, inventore in dolorum animi assumenda quo
          placeat rem accusantium laboriosam?
        </p>
        <div className="btnDiv">
          <button>
            <Link to={ROUTES.ITEMS} className="btnLink">
              Products
            </Link>
          </button>
          <button>
            <Link to={ROUTES.PERSONAL} className="btnLink">
              Staff
            </Link>
          </button>
        </div>
      </div>
      <img src={logo} alt="Logo" width="600px" />
    </div>
  );
};
