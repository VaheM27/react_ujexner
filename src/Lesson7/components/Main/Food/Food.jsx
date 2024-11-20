import {Data} from "../../../constants/FooData";

import "./Food.css";

const Food = () => {
  return (
    <div className="foods">
      {Data.map((el, id) => {
        return (
          <div className="food" key={id}>
            <img src={el.image} alt="" />
            <h3>{el.name}</h3>
            <p>{el.description}</p>
            <p>price: ${el.price}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Food;