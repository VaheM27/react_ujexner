import React, { Fragment } from "react";
import { NavLink } from 'react-router-dom';

import mapIcon from '../../assets/icons/map-icon.png';
import callIcon from '../../assets/icons/call-icon.png';
import mailIcon from '../../assets/icons/mail-icon.png';

import './Footer.css';

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="footer-content">
          <div className="column">
            <h3>About</h3>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</p>
          </div>
          <div className="column">
            <h3>Menu</h3>
            <ul>
              <li><NavLink to="/Home">Home</NavLink></li>
              <li><NavLink to="/AboutUs">About Us</NavLink></li>
              <li><NavLink to="/Gallery">Gallery</NavLink></li>
              <li><NavLink to="/Services">Services</NavLink></li>
              <li><NavLink to="/ContactUs">Contact Us</NavLink></li>
            </ul>
          </div>
          <div className="column">
            <h3>Useful Link</h3>
            <ul>
              <li><a href="#">Adipiscing Elit, sed do Eiusmod Tempor incididunt</a></li>
            </ul>
          </div>
          <div className="column">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <p><img src={mapIcon} alt="Map icon" />Address: Loram Ipusm</p>
              <p><img src={callIcon} alt="Call icon" />Call: +01 1234567890</p>
              <p><img src={mailIcon} alt="Mail icon" />Email: <a href="mailto:demo@gmail.com">demo@gmail.com</a></p>
            </div>
          </div>
        </div>
      </footer>
      <div className="footerEnd">2024 All Rights Reserved. Design by @yeghyanmelik@gmail.com</div>
    </Fragment>
  );
}

export default Footer;
