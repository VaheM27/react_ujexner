import React from 'react';

import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div>
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <p>
          <a href="https://twitter.com" target="_blank">Twitter</a> |
          <a href="https://facebook.com" target="_blank">Facebook</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;