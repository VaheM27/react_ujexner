import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";

import "./Products.scss";

export const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="products">
      {data.map((element) => {
        return (
          <Card
            key={element.id}
            id={element.id}
            image={element.images[0]}
            name={element.title}
            price={element.price}
          />
        );
      })}
    </div>
  );
};
