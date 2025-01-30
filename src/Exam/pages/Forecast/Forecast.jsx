import React from "react";
import WeeklyCard from "../../components/WeeklyCard/WeeklyCard";

export const Forecast = ({ type }) => {
  return (
    <div>
      <WeeklyCard tempType={type} />
    </div>
  );
};
