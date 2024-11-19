import logo from "../assets/jack.gif";
import gifs from "../assets/gifs.gif";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="navbar">
          <img className="logo" src={logo} alt="" />
          <li>
            <a href="#">Food</a>
          </li>
          <li>
            <a href="#">Pizza</a>
          </li>
          <li>
            <a href="">Cotegories</a>
          </li>
        </ul>
      </nav>
      <div className="gif">
      </div>
      <footer>
      </footer>
    </>
  );
};
export default Navbar;
