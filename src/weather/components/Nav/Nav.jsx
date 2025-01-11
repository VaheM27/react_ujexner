import React from "react";

import "./Nav.scss";

const Nav = ({ locationChange, tempChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let { searchInput } = e.target;
    locationChange(searchInput.value);
    e.target.reset();
  };

  const changeTempValue = (e) => {
    tempChange(e.target.id);
  };

  return (
    <div className="navBar">
      <form className="searchForm" onSubmit={handleSubmit}>
        <div className="inputPart">
          <input type="text" placeholder="City Name..." name="searchInput" />
          <input type="submit" value="Search..." />
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

export default Nav;
