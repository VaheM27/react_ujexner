import "./NavHamburgerMenu.scss";

const NavHamburgerMenu = () => {
  return (
    <div className="hamburgerMenu">
      <button>
        <i className="bi bi-list"></i>
      </button>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default NavHamburgerMenu;
