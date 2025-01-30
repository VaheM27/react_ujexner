import React from "react";
import DailyCard from "../../components/DailyCard/DailyCard";

export const Home = ({ type }) => {
  return (
    <div>
      <DailyCard tempType={type} />
    </div>
  );
};
