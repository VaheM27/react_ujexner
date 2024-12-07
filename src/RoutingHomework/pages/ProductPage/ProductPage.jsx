import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "../../Routes";
import { Link } from "react-router-dom";
import "./ProductPage.css";

export const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((result) => setUser(result));
  }, [id]);

  return (
    <div className="product">
      <Link to={"/products"}>Back</Link>
      {!user ? (
        <h1>Loading...</h1>
      ) : (
        <div key={user?.id} className="product-divs">
          <p>ID: {user?.id}</p>
          <img src={user?.thumbnail} alt={user?.title} />
          <h1>{user?.title}</h1>
          <h1>{user?.brand}</h1>
          <p>{user?.description}</p>
          <h1>{user?.price}$</h1>
          <p>Category: {user?.category}</p>
          <p>Rating: {user?.rating}</p>
          <p>Stock: {user?.stock}</p>
          <p>Available: {user?.available}</p>
          <p>Discount: {user?.discountPercentage}%</p>
          <p>Brand: {user?.brand}</p>
        </div>
      )}
      <div className="buttons">
        <div>
          <button onClick={() => navigate(`/${ROUTES.PRODUCTS}/${+id - 1}`)}>
            Prev
          </button>
          <button onClick={() => navigate(`/${ROUTES.PRODUCTS}/${+id + 1}`)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
