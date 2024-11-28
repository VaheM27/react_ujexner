import React from "react";
import "./Cards.css";
const Cards = ({ id, name, username, email }) => {
  return (
    <div className="cards">
      <p className="id">id_ {id}</p>
      <h1>{name}</h1>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  );
};

export default Cards;
