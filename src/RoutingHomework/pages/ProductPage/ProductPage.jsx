// import React from "react";
// import { useEffect, useState } from "react";

// import "./Product.css";

// export const Product = () => {
//   return <div></div>;
// };
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import "./ProductPage.css";

export const ProductPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((result) => setUser(result));
  }, [id]);

  //   console.log(user);

  return (
    <div key={user?.id}>
      <h1> {user?.title}</h1>
      <h1>{user?.brand}</h1>
    </div>
  );
};
