import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Details.scss";

export const Details = () => {
  const { id } = useParams();
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((res) => setArr(res));
  }, []);

  return (
    <div className="cardDetails">
      <div className="item" key={arr.id}>
        <div className="imgDiv">
          {arr?.images?.map((imgs, i) => {
            return <img key={i} src={imgs} alt=""></img>;
          })}
        </div>
        <h1>Name: {arr.title}</h1>
        <h4>Description: {arr.description}</h4>
        <p>Created At: {arr.creationAt}</p>
        <p>Updated At: {arr.updatedAt}</p>
        <p className="tag">#{arr.category.name}</p>
        <b>Price: ${arr.price}</b>
        <button>Buy Now</button>
      </div>
    </div>
  );
};
