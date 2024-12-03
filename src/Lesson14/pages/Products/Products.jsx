import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);

  const handleViewProduct = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="cardBox">
      {data.map((product, index) => (
        <div className="Card" key={index}>
          <h2>ID: {product.id}</h2>
          <h1>Name: {product.title}</h1>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <button onClick={() => handleViewProduct(product.id)}>About This Product</button>
        </div>
      ))}
    </div>
  );
};

export default Products;