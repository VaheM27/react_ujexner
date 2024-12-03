import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import Sort from "../../components/Sorting/Sort";

export const Users = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((res) => setData(res));
    }, []);

    const handleSort = (sortBy) => {
        const sortedData = [...data].sort((a, b) => {
            if (a[sortBy] < b[sortBy]) return -1;
            if (a[sortBy] > b[sortBy]) return 1;
            return 0;
        });
        setData(sortedData); 
    };

    return (
        <div>
            <Sort onSort={handleSort} />
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
