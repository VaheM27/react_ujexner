import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../Routes";

import "./Item.scss";

const Item = ({ productId, imgSrc, price }) => {
  return (
    <Link to={`/${ROUTES.ITEMS}/${productId}`}>
      <div className="itemCard">
        <img src={imgSrc} alt="Item Image" />
        <p>${price}</p>
      </div>
    </Link>
  );
};

export default Item;
