import { url } from "../constants/dataUrl";

import "./Navbar.scss";

const Navbar = ({ changeUrl }) => {
  return (
    <nav className="Navbar">
      <div className="container navcontainer">
        <ul>
          {url.map((link, index) => {
            return (
              <li key={index}>
                <button onClick={() => changeUrl(link.url, link.name)}>
                  {link.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
