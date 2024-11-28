import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";

export const Posts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
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
                    desc={item.body}
                />
            ))}
        </div>
    );
};
