import React from "react";

import "./Product.css";
import { Link } from "react-router-dom";
import ROUTES from "../../Routes";

const Product = ({ id, title, description, category, price, thumbnail }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{category}</p>
      <p>{price}</p>
      <img src={thumbnail} alt="" />
      <Link to={`/${ROUTES.PRODUCTS}/${category}/${id}`}>Go to Product Page</Link>
    </div>
  );
};

export default Product;
