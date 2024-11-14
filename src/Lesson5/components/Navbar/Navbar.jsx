import logo from "../../assets/logo/Logo.png";
import NavbarItems from "../../constants/NavbarItems";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="NavbarDiv">
      <div className="logoBox">
        <img src={logo} alt="Logo" />
        <h1>
          <i>The</i>Box
        </h1>
      </div>
      <ul>
        {NavbarItems.map((elm, index) => {
          return <li key={index}>{elm}</li>;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
