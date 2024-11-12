import navmenuItems from "../../constants/navmenu";

import "./Nav.scss";

const Nav = ({ source }) => {
  return (
    <>
      <nav className="navbar">
        <div className="nav_container">
          <a href="/" className="nav_logo" data-scroll="header-main">
            <img src={source} alt="Logo" title="Logo" />
          </a>

          <ul className="navbar_menu">
            {navmenuItems.map((elm) => (
              <li key={elm.id} id={elm.id}>
                <a href={elm.src} target="_blank">
                  {elm.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
