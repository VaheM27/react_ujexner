import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((products) => setProduct(products));
  }, []);
  return (
    <div className="prBox">
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
