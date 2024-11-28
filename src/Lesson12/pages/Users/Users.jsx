import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";

export const Users = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((res) => setData(res));
    }, []);

    return (
        <div>
            {data.map((item) => (
                <Cards
                    key={item.id}
                    name={item.name}
                    id={item.id}
                    username={item.username}
                    email={item.email}
                />
            ))}
        </div>
    );
};
