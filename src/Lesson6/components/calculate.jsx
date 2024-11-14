import { useState } from "react";
import "./calculate.css";

const Calculate = () => {
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number + 1);
    };

    const decrement = () => {
        setNumber(number - 1);
    };

    return (
        <div>
            <p>{number}</p>
            <div className="buttons">
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </div>
    );
}

export default Calculate