import React from "react";

import "./Body.css";

const Body = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <div className="item" key={item.id}>
            <p>{(item.firstName) ? `Name: ${item.firstName}` : `Title: ${item.title}`}</p>
            <p>{item.lastName ? `LastName: ${item.lastName}` : `Descr: ${item.description}`}</p>
            <p>{item.maidenName ? item.maidenName : item.category ? item.quantity : ""}</p>
            <p>{item.age || item.total || item.rating}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
