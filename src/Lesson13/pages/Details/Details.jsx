import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Details.scss";

export const Details = () => {
  const { id } = useParams();
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((res) => setArr(res));
  }, []);

  return (
    <div className="cardDetails">
      {arr
        .filter((elm) => elm.id === +id)
        .map((item) => (
          <div className="item" key={item.id}>
            <div className="imgDiv">
              {item.images.map((imgs, i) => {
                return <img key={i} src={imgs}></img>;
              })}
            </div>
            <h1>Name: {item.title}</h1>
            <h4>Description: {item.description}</h4>
            <p>Created At: {item.creationAt}</p>
            <p>Updated At: {item.updatedAt}</p>
            <p className="tag">#{item.category.name}</p>
            <b>Price: ${item.price}</b>
            <button>Buy Now</button>
          </div>
        ))}
    </div>
  );
};
