import React, { useEffect, useState } from "react";
import Item from "../../components/Item/Item";

import "./Items.scss";

export const Items = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  return (
    <div className="itemsBox">
      {data.map((elm) => {
        return <Item imgSrc={elm.image} price={elm.price} productId={elm.id} />;
      })}
    </div>
  );
};
