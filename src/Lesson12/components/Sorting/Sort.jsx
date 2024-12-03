import React, { useState } from "react";
import "./Sort.css";

const Sort = ({ onSort }) => {
    const [sortBy, setSortBy] = useState("username");


    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };


    const handleSort = () => {
        onSort(sortBy);
    };

    return (
        <div className="sorting-panel">
            <label htmlFor="sort-by">Sort By:</label>
            <select id="sort-by" value={sortBy} onChange={handleSortChange}>
                <option value="username">Username</option>
                <option value="email">Email</option>
                <option value="id">ID</option>
            </select>
            <button id="sort-button" onClick={handleSort}>Sort</button>
        </div>
    );
};

export default Sort;
