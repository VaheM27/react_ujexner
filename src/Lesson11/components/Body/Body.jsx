import React from "react";

const Body = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.firstName || item.title}</p>
            <p>{item.lastName || item.description}</p>
            <p>{item.maidenName || item.category || item.quantity}</p>
            <p>{item.age || item.total || item.rating}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
