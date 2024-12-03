import React from 'react';
import { Link } from 'react-router-dom'; 

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Users</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
