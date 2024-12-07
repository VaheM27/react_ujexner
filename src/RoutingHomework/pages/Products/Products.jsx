import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../Routes";

import "./Products.css";

export const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => setData(result.products));
  }, []);

  return (
    <div className="products">
      <h1 style={{ userSelect: "none" }}>Products</h1>
      <Link to={"/"}>Home</Link>
      <div className="products">
        {data.map((elm) => (
          <div key={elm.id} className="Mainproduct">
            <img src={elm.thumbnail} alt={elm.title} />
            <p>{elm.title}</p>
            <p>{elm.price}</p>
            <Link to={`/${ROUTES.PRODUCTS}/${elm.id}`}>Product</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
