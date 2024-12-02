import React from "react";
import notFoundImage from "../../assets/images/notFound.webp";

import "./NotFound.scss";

export const NotFound = () => {
  return (
    <div className="notFound">
      <img src={notFoundImage} alt="Not Found" width={"300px"} />
      <h2>404, Page Not Found...</h2>
    </div>
  );
};
