import React, { useState, useEffect } from "react";

const Users = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("https://673c6b8a96b8dcd5f3f9e8e7.mockapi.io/Users");
                const result = await response.json();
                setData(result.users);
                console.log(result);
            } catch (error) {
                console.error("Error");
            }
        };
        getData();
    }, []);
}

export default Users