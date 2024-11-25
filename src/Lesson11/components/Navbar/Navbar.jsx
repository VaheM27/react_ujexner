import navItems from "../../constants/navItems";

import "./Navbar.scss";

const Navbar = ({ slug, url }) => {
  return (
    <div className="nav">
      <ul>
        {navItems.map((elm, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                slug(elm.path);
                url(elm.url);
              }}
            >
              {elm.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
