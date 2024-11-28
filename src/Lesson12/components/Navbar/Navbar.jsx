import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/">Users</NavLink>
                </li>
                <li>
                    <NavLink to="/todos">Todos</NavLink>
                </li>
                <li>
                    <NavLink to="/posts">Posts</NavLink>
                </li>
                <li>
                    <NavLink to="/albums">Albums</NavLink>
                </li>
                <li>
                    <NavLink to="/comments">Comments</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar