import React from "react";
import "./Cards.css";

const Cards = ({ id, name, username, email, title, desc }) => {
    return (
        <div className="card-container">
            <div className="card">
                <h2 className="card-id">ID: {id}</h2>
                {name && <h1 className="card-name">Name: {name}</h1>}
                {username && <p className="card-username">Username: {username}</p>}
                {email && <p className="card-email">E-Mail: {email}</p>}
                {title && <p className="card-title">Title: {title}</p>}
                {desc && <p className="card-desc">Description: {desc}</p>}
            </div>
        </div>
    );
};

export default Cards;
