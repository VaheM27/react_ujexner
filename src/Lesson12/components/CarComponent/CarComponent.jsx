import React from "react";
import "./CarComponent.css";
import { CarData } from "../../constants/Data";

const CarComponent = () => {
  return (
    <table class="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {CarData.map((item) => {
        return(
          <tr>
            <td><h1>{item.id}</h1></td>
            <td><img src={item.image} alt="sa" /></td>
            <td><h2>{item.title}</h2></td>
          </tr>

        )
      })}
    </tbody>
  </table>
    // <div className="cars">
    //   <h1>{id}</h1>
    //   <img src={image} alt="sa" />
    //   <h2>{title}</h2>
    //   <p>{start_production}</p>
    //   <p>{classs}</p>
    // </div>
  );
};
export default CarComponent;
