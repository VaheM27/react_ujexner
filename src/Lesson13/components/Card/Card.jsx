import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../Routes";

import "./Card.scss";

const Card = ({ id, image, name, price }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="itemDetails">
        <h3>{name}</h3>
        <p>{`$${Number(price) + 50}`}</p>
        <button>
          <Link
            className="btn"
            to={`/${ROUTES.PRODUCTS}/${id}`}
          >{`Buy Now For $${price}`}</Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
