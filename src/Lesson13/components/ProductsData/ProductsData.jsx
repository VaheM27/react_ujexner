import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./ProductsData.css";

const ProductsData = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products.products));
  }, []);
  return (
    <div>
      {products.map((item) => {
        return (
          <div className="products" key={item.id}>
            <p>{item.id}</p>
            <img src={item.thumbnail} alt="" />
            <p>{item.title}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <Link  className="proLink" to={`/products/${item.id}`}>go</Link>
          </div>
        );
      })}
    </div>
  );
};
export default ProductsData;
