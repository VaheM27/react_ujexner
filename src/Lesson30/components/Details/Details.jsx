import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../store/selectors/productSelectors";
import {
  deleteProductMiddleware,
  editProductMiddleware,
  getOneProductMiddleware,
  getProductsMiddleware,
} from "../../store/reducers/productReducers";
import Icon from "@mdi/react";
import {
  mdiCloseCircleOutline,
  mdiArrowLeft,
  mdiPencil,
  mdiCheckOutline,
} from "@mdi/js";

import styles from "./Details.module.scss";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputState, setInputState] = useState(false);

  const dispatch = useDispatch();
  const product = useSelector(useProducts);
  const products = useSelector(useProducts);

  useEffect(() => {
    dispatch(getOneProductMiddleware(id));
  }, []);

  const showInput = () => {
    setInputState(!inputState);
  };

  return (
    <div className={styles.details}>
      <div className={styles.actions}>
        <button
          onClick={() => {
            dispatch(getProductsMiddleware());
            navigate("/");
          }}
          className={styles.btn}
        >
          <Icon path={mdiArrowLeft} size={1} />
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(deleteProductMiddleware(id));
            dispatch(getProductsMiddleware());
            navigate("/");
          }}
        >
          <Icon path={mdiCloseCircleOutline} size={1} />
        </button>
      </div>
      <h1>{product.title}</h1>
      <div className={styles.btnPart}>
        <h2>{product.price} USD</h2>
        <button onClick={showInput} className={styles.btn}>
          <Icon path={mdiPencil} size={1} />
        </button>
        {inputState && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newPrice = e.target.elements[0].value.trim(); // Get the trimmed input value
              if (!newPrice) {
                alert("Price cannot be empty!");
                return;
              }
              dispatch(editProductMiddleware({ id, price: newPrice }));
              setInputState(false);
              e.target.reset();
            }}
          >
            <input
              type="text"
              placeholder="Write new price."
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  e.target.value = value;
                } else {
                  e.target.value = value.slice(0, -1);
                }
              }}
            />
            <button className={styles.btn} type="submit">
              <Icon path={mdiCheckOutline} size={1} />
            </button>
          </form>
        )}
      </div>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.images}>
        {product.images?.map((elm, index) => {
          return <img src={elm} key={index} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Details;
