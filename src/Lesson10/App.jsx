import React, { useState } from "react";
import Navbar from "./components/Navbar/navbar";
import Main from "./components/Main/main";
import CardBox from "./components/CardBox/cardBox";

import "./App.css";

function App() {
    const [cart, setCart] = useState([]);
    const [showCardBox, setShowCardBox] = useState(false);

    const addToCart = (pizza) => {
        setCart((prevCart) => {
            const PizzaIndex = prevCart.findIndex(item => item.pizza.id === pizza.id);
            if (PizzaIndex >= 0) {
                const updatedCart = [...prevCart];
                updatedCart[PizzaIndex].quantity += 1;
                return updatedCart;
            } else {
                return [...prevCart, { pizza, quantity: 1 }];
            }
        });
    };

    const toggleCardBox = () => {
        setShowCardBox(!showCardBox);
    };

    const removeFromCart = (pizzaId) => {
        setCart(cart.filter(item => item.pizza.id !== pizzaId));
    };

    const increaseQuantity = (pizzaId) => {
        setCart(cart.map(item => 
            item.pizza.id === pizzaId 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        ));
    };

    const decreaseQuantity = (pizzaId) => {
        setCart(cart.map(item => 
            item.pizza.id === pizzaId && item.quantity > 1 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        ));
    };

    const sortAZ = () => {
        const sorted = [...cart].sort((a, b) => a.pizza.name.localeCompare(b.pizza.name));
        setCart(sorted);
    };

    return (
        <div>
            <Navbar cartCount={cart.length} toggleCardBox={toggleCardBox} />
            <Main addToCart={addToCart} />
            {showCardBox && (
                <CardBox 
                    cart={cart} 
                    toggleCardBox={toggleCardBox} 
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    removeFromCart={removeFromCart}
                    sortAZ={sortAZ} 
                />
            )}
        </div>
    );
}

export default App;
