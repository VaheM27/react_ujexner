import React from "react";

import "./Sort.css"

const Sort = () => {
    return (
        <div class="sorting-panel">
            <label for="sort-by">Sort By:</label>
            <select id="sort-by">
                <option value="username">Username</option>
                <option value="email">Email</option>
                <option value="id">ID</option>
            </select>
            <button id="sort-button">Sort</button>
        </div>
    )
}

export default Sort