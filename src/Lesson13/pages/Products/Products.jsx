import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product";

import "./Products.css";

export const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products));
  }, []);
  return (
    <div className="allProducts">
      {data.map((item) => (
        <Product
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          category={item.category}
          thumbnail={item.thumbnail}
        />
      ))}
    </div>
  );
};
