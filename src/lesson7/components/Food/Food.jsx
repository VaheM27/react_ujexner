import { useState } from "react";
import { data } from "../../constants/data";

import "./Food.css";

const Food = () => {
  const [food, setfood] = useState(data);
  return (
    <div className="main">
      {food.map((elm) => {
        return (
          <div className="box" key={elm.id}>
            <p>{elm.id}</p>
            <img src={elm.image} alt="image" />
            <p>{elm.title}</p>
            <p>{elm.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Food;
