import React from "react";


import './Main.css';

const Main = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((item) => (
        <div key={item.id} className="card">
          <h1 className="card-title">ID: {item.id}</h1>
          <p className="card-content">
            Name : {item.title || item.name || item.firstName || (Array.isArray(item.products) && item.products[0]?.title)}
          </p>
          <p className="card-content">
            {item.age || item.price || (Array.isArray(item.products) && item.products[0]?.price) || item.ingredients || item.reactions?.likes}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Main;
