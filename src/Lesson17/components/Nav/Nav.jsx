import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="container nav">
        {user && (
          <ul>
            {user.image && (
              <li>
                <img src={user.image} alt={user.firstName} />
              </li>
            )}
            <li>
              <p>
                {user.firstName} {user.lastName}
              </p>
            </li>
          </ul>
        )}
        <ul>
          <li>
            <NavLink to={"/"}>
              <i className="bi bi-box-arrow-in-left"></i>Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
