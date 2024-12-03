import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "../../Routes";
import Icon from "@mdi/react";
import { mdiArrowRightCircle, mdiArrowLeftCircle } from "@mdi/js";

import "./ItemDetails.scss";

export const ItemDetails = () => {
  const [prod, setProd] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProd(res));
  }, [id]);

  return (
    <div className="itemInfo">
      <div className="imgBox">
        <img src={prod?.image} alt="Item Image" />
      </div>
      <div className="details">
        <p className="price">${prod?.price}</p>
        <p className="title">{prod?.title}</p>
        <p className="desc">{prod?.description}</p>
        <p># {prod?.category}</p>
        <div className="rate">
          <p>{prod?.rating.rate}</p>
          <p>{prod?.rating.count}</p>
        </div>
      </div>
      <div className="btns">
        <Icon
          onClick={() =>
            navigate(
              id === "1" ? `/${ROUTES.ITEMS}/20` : `/${ROUTES.ITEMS}/${+id - 1}`
            )
          }
          className="icon"
          path={mdiArrowLeftCircle}
          size={3}
        />
        <Icon
          onClick={() =>
            navigate(
              id === "20" ? `/${ROUTES.ITEMS}/1` : `/${ROUTES.ITEMS}/${+id + 1}`
            )
          }
          className="icon"
          path={mdiArrowRightCircle}
          size={3}
        />
      </div>
    </div>
  );
};
