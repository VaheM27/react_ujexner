import {Data} from "../../../constants/CarsData";

import "./Cars.css";

const Car = () => {
  return (
    <div className="car">
      {Data.map((el, id) => {
        return (
          <div className="img" key={id}>
            <img src={el.image} alt="" />
            <h3>{el.title}</h3>
            <p>{el.start_production}</p>
            <p>{el.class}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Car;
