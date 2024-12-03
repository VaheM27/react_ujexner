import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = ({ categories, selectCategory }) => {
  return (
    <nav>
      <div className="container nav-container">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {categories.map((category, index) => (
            <li key={category + index}>
              <NavLink
                to={`${category}`}
                onClick={() => {
                  selectCategory(category);
                }}>
                {category}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
