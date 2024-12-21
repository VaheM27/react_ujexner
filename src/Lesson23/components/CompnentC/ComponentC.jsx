import React, { useContext } from "react";
import { UserData } from "../../App";

import "./Component.css";

const ComponentC = () => {
  const data = useContext(UserData);
  return (
    <div>
      <p>{JSON.stringify(data)}</p>
      <p>Component C </p>
    </div>
  );
};

export default ComponentC;
