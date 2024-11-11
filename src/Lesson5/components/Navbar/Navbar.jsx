import logo from "../../assets/logo/Logo.png";
import navBarItems from "../../constants/navBarItems";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navBarDiv">
      <div className="logoBox">
        <img src={logo} alt="Logo" />
        <h1>
          <i>The</i>Box
        </h1>
      </div>
      <ul>
        {navBarItems.map((elm, index) => {
          return <li key={index}>{elm}</li>;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
