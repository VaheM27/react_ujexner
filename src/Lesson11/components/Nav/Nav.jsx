import React from "react";
import navData from "../../constants/navItem";

import "./Nav.css";

const Nav = ({ setPath }) => {
  return (
    <div>
      <ul>
        {navData.map((item, index) => (
          <li key={index} onClick={() => setPath(item.path)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
