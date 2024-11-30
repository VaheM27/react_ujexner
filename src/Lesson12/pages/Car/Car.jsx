import React from "react";
import CarComponent from "../../components/CarComponent/CarComponent";
import { CarData } from "../../constants/Data";
import "./Car.css";

export const Car = () => {
  return (
    <div>
      {CarData.map((item) => {
        return (
          <CarComponent
            id={item.id}
            image={item.image}
            title={item.title}
            start_production={item.start_production}
            classs={item.classs}
          />
        );
      })}
    </div>
  );
};
