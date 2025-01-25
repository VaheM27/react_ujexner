import React from "react";

const Cards = ({ name, username }) => {
    return <div className="cards">
        {name}
        {username}
  </div>;
};

export default Cards;
