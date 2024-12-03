import { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    fetch('https://dummyjson.com/products')
      .then((res) => res.json()) 
      .then((data) => setData(data.products))
  }, []);

  return (
    <div className="cardBox">
      {data.map((product, index) => (
        <div className="Card" key={index}>
          <h2>ID: {product.id}</h2>
          <h1>Name: {product.title}</h1>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
          <button>About This Product</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
