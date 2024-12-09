import React from "react";

import "./Box.scss";

const Box = ({ fName, lName, email, img, id }) => {
  const deleteUser = (userId) => {
    fetch(`http://localhost:3005/users/${userId}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="box">
      <div className="top">
        <img src={img} alt="" />
      </div>
      <div className="bottom">
        <p>
          Full Name: <br />
          {fName + " " + lName}
        </p>
        <p>
          email: <br />
          {email}
        </p>
      </div>
      <button onClick={() => deleteUser(id)}>Delete</button>
    </div>
  );
};

export default Box;
