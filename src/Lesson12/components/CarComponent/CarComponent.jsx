import React from "react";
import "./CarComponent.css";

const CarComponent = ({ image, title, start_production, classs }) => {
  return (
    <div>
      <img src={image} alt="sa" />
      <h2>{title}</h2>
      <p>{start_production}</p>
      <p>{classs}</p>
    </div>
  );
};
export default CarComponent;
