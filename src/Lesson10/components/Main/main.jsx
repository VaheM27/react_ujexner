import React from "react";
import pizzaData from "../../constants/pizzaData";
import "./main.css";

function Main({ addToCart }) {
    return (
        <main className="pizzaContainer">
            {pizzaData.map((pizza) => (
                <div key={pizza.id} className="pizza-card">
                    <img src={pizza.image} alt={pizza.name} className="pizza-image" />
                    <h3 className="pizza-name">{pizza.name}</h3>
                    <p className="pizza-description">{pizza.description}</p>
                    <p className="pizza-price">${pizza.price.toFixed(2)}</p>
                    <button onClick={() => addToCart(pizza)}>
                        Add To Cart <i className="fa-solid fa-cart-shopping icon"></i>
                    </button>
                </div>
            ))}
        </main>
    );
}

export default Main;
