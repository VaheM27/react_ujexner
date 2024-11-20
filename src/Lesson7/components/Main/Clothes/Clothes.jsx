import {Data} from "../../../constants/ClothesData";

import "./Clothes.css";

const Clothes = () => {
  return (
    <div className="Clothes">
      {Data.map((el, id) => {
        return (
          <div className="Clothe" key={id}>
            <img src={el.image} alt="" />
            <h3>{el.title}</h3>
            <p className="descr">{el.description}</p>
            <p>{el.category}</p>
            <p>Price: ${el.price}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Clothes;