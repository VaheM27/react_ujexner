import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../Routes";

import "./Users.css";

export const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=208")
      .then((res) => res.json())
      .then((result) => setData(result.users));
  }, []);

  return (
    <div className="div-users">
      <h1 style={{ userSelect: "none" }}>Users</h1>
      {data.map((elm) => {
        return (
          <div key={elm.id} className="userDiv">
            <img src={elm.image} />
            <p>{elm.firstName}</p>
            <p>{elm.lastName}</p>
            <p>{elm.email}</p>
            <Link to={`/${ROUTES.USERS}/${elm.id}`}>User Information</Link>
          </div>
        );
      })}
    </div>
  );
};
