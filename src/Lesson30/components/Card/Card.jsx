import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useProducts } from "../../store/selectors/productSelectors";
import { getProductsMiddleware } from "../../store/reducers/productReducers";

import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = () => {
  const dispatch = useDispatch();
  const products = useSelector(useProducts);

  useEffect(() => {
    dispatch(getProductsMiddleware());
  }, []);

  return (
    <div className={styles.card}>
      {products?.map((elm) => {
        return (
          <Link to={`/Product/${elm.id}`} className={styles.box} key={elm.id}>
            <img src={elm.images[0]} alt="Image" />
            <p>${elm.price}</p>
            <p>{elm.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Card;
