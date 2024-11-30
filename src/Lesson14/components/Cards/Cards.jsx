import React from "react";

const Cards = ({ id, name, username, email }) => {
  return (
    <div>
      <p>{id}</p>
      <h1>{name}</h1>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  );
};

export default Cards;
