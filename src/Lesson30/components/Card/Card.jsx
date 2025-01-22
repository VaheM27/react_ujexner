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
    <div className={styles.container}>
      <h1>Products</h1>
      <div className={styles.card}>
        {products?.map((elm) => {
          return (
            <Link to={`products/${elm.id}`} className={styles.box} key={elm.id}>
              <img
                src={
                  elm.images[0].includes("[") || elm.images[0].includes("]")
                    ? "https://thumbs.dreamstime.com/b/no-image-icon-vector-available-picture-symbol-isolated-white-background-suitable-user-interface-element-205805243.jpg"
                    : elm.images[0]
                }
                alt="Image"
              />
              <div className={styles.info}>
                <p>${elm.price}</p>
                <p>{elm.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
