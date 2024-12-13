import React from "react";

import "./Board.scss";

const Board = ({ sendData, modalOpener }) => {
  return (
    <div className="details">
      {sendData.map((item) => {
        return (
          <div key={item.id} className="card">
            <p className="id">{item.id}</p>
            <h1>{item.name || item.title}</h1>
            <h2>{item.body || item.username}</h2>
            <p className="email">{item.email && item.email}</p>
            <p className="closeIcon" onClick={() => modalOpener(item.id)}>
              &times;
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Board;
