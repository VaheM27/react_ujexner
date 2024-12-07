import React from "react";
import { useParams } from "react-router-dom";

const EachProduct = () => {
  const { id, category } = useParams();

  return (
    <div>
      <p>
        This {category} {id} product page
      </p>
    </div>
  );
};

export default EachProduct;
