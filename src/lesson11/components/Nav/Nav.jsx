import navItem from "../../constants/navItem";

import "./Nav.css";

const Nav = ({ setpath }) => {
  return (
    <div>
      <body>
        <ul className="li">
          {navItem.map((item, index) => {
            return (
              <li
                onClick={() => {
                  setpath(item.path);
                }}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </body>
    </div>
  );
};

export default Nav;
