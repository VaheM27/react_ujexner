import logo from "../../assets/image/logo/logo.png";

import "./Nav.scss";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav">
            <div className="logo">
              <img src={logo} alt="logo" />
              <p>
                <i>The</i>Box
              </p>
            </div>
            <div className="rightSide">
              <ul>
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>About Us</p>
                </li>
                <li>
                  <p>Projects</p>
                </li>
                <li>
                  <p>Services</p>
                </li>
                <li>
                  <p>Contact Us</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
