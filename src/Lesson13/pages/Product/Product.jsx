import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./Product.css";

export const Product = () => {
  const [dataLenght, setDataLenght] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((products) => setDataLenght(+products.limit));
  }, []);
  const next = (id) => (+id % dataLenght) + 1;

  const prev = (id) => {
    if (id == 1) {
      return dataLenght;
    } else {
      return (+id - 1 + dataLenght) % dataLenght;
    }
  };

  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((products) => setProduct(products));
  }, [id]);
  return (
    <div className="prBox">
      <div>
        <button className="btn3" onClick={() => navigate(`/products/${prev(id)}`)}>prev</button>
        <button className="btn4" onClick={() => navigate(`/products/${next(id)}`)}>next</button>
      </div>
      <h1>{product.id}</h1>
      <img src={product.thumbnail} alt="" />
      <p>{product.title}</p>
      <p>{product.category}</p>
      <p>{product.price + "$"}</p>
      <p>{product.rating}</p>
      <p>{product.stock}</p>
      <p>{product.stock}</p>
    </div>
  );
};
