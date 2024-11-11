import NavMenuMax from "../NavMenuMax/NavMenuMax";
import NavHamburgerMenu from "../NavHamburgerMenu/NavHamburgerMenu";

import logo from "../../assets/logo/logo.png";

import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="Nav">
      <div className="container navContainer">
        <div className="navLogo">
          <img src={logo} alt="TheBox" />
          <h1>
            <i>The</i>Box
          </h1>
        </div>
        <NavMenuMax />
        <NavHamburgerMenu />
      </div>
    </nav>
  );
};

export default Nav;
