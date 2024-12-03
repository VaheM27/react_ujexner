// import './Nav.scss';

import { NavLink } from "react-router-dom";

const Nav = ({ categories }) => {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {categories.map((category, index) => (
            <li key={category + index}>
              <NavLink to={`${category}`}>{category}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
