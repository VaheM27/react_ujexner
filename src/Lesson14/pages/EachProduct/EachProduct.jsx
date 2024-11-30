import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ROUTES from "../../Routes";

const EachProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [eachData, setEachData] = useState();
  console.log(location);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setEachData(res));
    console.log(eachData);
  }, [id]);

  return (
    <div>
      <h1>{eachData?.title}</h1>
      <p>{eachData?.description}</p>
      <p>{eachData?.category}</p>
      <p>{eachData?.price}</p>
      <p>{eachData?.stock}</p>
      <p>{eachData?.discountPercentage}</p>
      <p>{eachData?.rating}</p>
      <img src={eachData?.thumbnail} alt="" />
      <div className="btnBoxes">
        <button onClick={() => navigate(`/${ROUTES.PRODUCTS}/${+id + 1}`)}>
          Next
        </button>
        <button onClick={() => navigate(`/${ROUTES.PRODUCTS}/${+id - 1}`)}>
          Prev
        </button>
      </div>
    </div>
  );
};

export default EachProduct;
