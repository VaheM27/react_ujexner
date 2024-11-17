import { useState } from "react";
import { data } from "../Navbar/constants/data";

import "./Food.css";

const Food = () => {
  const [food, setfood] = useState(data);
  return (
    <>
      {food.map((elm) => {
        return (
          <div key={elm.id} className="main">
            <div className="box">
              <p>{elm.id}</p>
              <img src={elm.image} alt="image" />
              <p>{elm.title}</p>
              <p>{elm.name}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Food;
