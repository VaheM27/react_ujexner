import React from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../store/dataSlice/api";
import { fetchWeeklyData } from "../../store/weeklyDataSlice/api";

import "./Navbar.scss";

const Navbar = ({ tempTypeSetter }) => {
  const changeTempValue = (e) => {
    tempTypeSetter(e.target.id);
  };
  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.target[0].value.trim() && dispatch(fetchData(e.target[0].value));
          e.target[0].value.trim() &&
            dispatch(fetchWeeklyData(e.target[0].value));
          e.target.reset();
        }}
      >
        <div className="inputs">
          <input type="text" placeholder="Search..." />
          <input type="submit" />
        </div>
        <div className="radioBtns">
          <input
            type="radio"
            id="celsius"
            name="scales"
            onClick={changeTempValue}
            defaultChecked
          />
          <label htmlFor="celsius">°C</label>
          <input
            type="radio"
            id="farenheit"
            name="scales"
            onClick={changeTempValue}
          />
          <label htmlFor="farenheit">°F</label>
        </div>
      </form>
    </div>
  );
};

export default Navbar;
