import React from "react";

const Cards = ({ id, name, username, email }) => {
  return (
    <div className="cards">
      <p>{id}</p>
      <h1>{name}</h1>
      <p>{username}</p>
      <p>{email}</p>
      <button>User Information</button>
    </div>
  );
};

export default Cards;
