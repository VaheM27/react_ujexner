import { useState } from "react";

import './calculate.css';


const Calculate = () => {
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number + 1);
    };

    const decrement = () => {
        setNumber(number - 1);
    };
    const multiplication = () => {
        setNumber(number * 2);
    };

    const division = () => {
        setNumber(number / 2);
    };

    return (
        <div className="calculateBox">
            <p>{number}</p>
            <hr />
            <div className="buttons">
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={multiplication}>*</button>
                <button onClick={division}>/</button>
            </div>
        </div>
    );
}

export default Calculate