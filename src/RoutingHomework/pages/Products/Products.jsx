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
    <div>
      <h1 style={{ userSelect: "none" }}>Products</h1>
      {data.map((elm) => (
        <div key={elm.id}>
          <p>{elm.title}</p>
          <p>{elm.price}</p>
          <Link to={`/${ROUTES.PRODUCTS}/${elm.id}`}>Product</Link>
        </div>
      ))}
    </div>
  );
};
