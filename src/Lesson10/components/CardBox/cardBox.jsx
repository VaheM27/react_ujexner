import React from "react";
import "./cardBox.css";

function CardBox({ cart, toggleCardBox, increaseQuantity, decreaseQuantity, removeFromCart, sortAZ }) {
    return (
        <div className="card-Box">
            <button className="close-btn" onClick={toggleCardBox}>X</button>
            <h2>Your Cart</h2>
            <button className="sort-btn" onClick={sortAZ}>Sort A-Z</button>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <img src={item.pizza.image} alt={item.pizza.name} className="pizza-image" />
                            <p>{item.pizza.name}</p>
                            <p>${item.pizza.price.toFixed(2)}</p>
                            <div className="quantity">
                                <button onClick={() => decreaseQuantity(item.pizza.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => increaseQuantity(item.pizza.id)}>+</button>
                            </div>
                            <button onClick={() => removeFromCart(item.pizza.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CardBox;
