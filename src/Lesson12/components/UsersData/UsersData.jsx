import React from "react";

import "./UsersData.css"

const UsersData = ({ id, name, username, email }) => {
  return (
    <div id={id} className="user_item">
      <h2>{name}</h2>
      <p>Username: <b>{username}</b></p>
      <p>{email}</p>
    </div>
  );
};

export default UsersData;
