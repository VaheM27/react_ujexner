import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";

export const Albums = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res) => res.json())
        .then((res) => setData(res));
    }, []);

    return (
        <div>
            {data.map((item) => {
                return(
                    <Cards 
                        name={item.title}
                        id={item.id}
                    />
                )
            })}
        </div>
    );
};
