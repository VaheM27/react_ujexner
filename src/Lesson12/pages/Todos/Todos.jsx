import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";

export const Todos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((res) => setData(res));
    }, []);

    return (
        <div>
            {data.map((item) => (
                <Cards
                    key={item.id}
                    title={item.title}
                    id={item.id}
                    completed={item.completed}
                />
            ))}
        </div>
    );
};
