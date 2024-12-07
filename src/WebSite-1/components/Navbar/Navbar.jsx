import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import webIcon from '../../assets/logos/logo.png';
import './Navbar.css';
import './NavbarMedia.css';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="Navbar">
      <img src={webIcon} alt="Website Logo" />
      <ul className={`menu ${menuVisible ? 'open' : ''}`}>
        <li><NavLink to="/Home">Home</NavLink></li>
        <li><NavLink to="/AboutUs">About Us</NavLink></li>
        <li><NavLink to="/Gallery">Gallery</NavLink></li>
        <li><NavLink to="/Services">Services</NavLink></li>
        <li><NavLink to="/ContactUs">Contact Us</NavLink></li>
      </ul>
      <button onClick={toggleMenu} className='barsBtn'><i className="fa-solid fa-bars"></i></button>
    </nav>
  );
};

export default Navbar;
