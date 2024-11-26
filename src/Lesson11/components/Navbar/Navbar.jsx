import React from "react";
import navData from "../../constants/navData";

import "./Navbar.css";

const Navbar = ({ setPath }) => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {navData.map((item, index) => (
                    <li key={index} onClick={() => setPath(item.path)} className="navbar-item">{item.name}</li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
