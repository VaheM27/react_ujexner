import "./Navbar.scss";

const Navbar = ({ navItems, getData }) => {
  return (
    <div className="navBarMain">
      <ul className="navList">
        {navItems.map((elm, i) => {
          return (
            <li key={i} className="navLi">
              <button className="navBtn" onClick={() => getData(elm)}>
                {elm}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
