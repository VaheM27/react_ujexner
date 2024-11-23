
import "./Navbar.css";

const Navbar = ({ nav, Data }) => {
  return (
    <div className="nav">
      <ul className="navList">
        {nav.map((e, i) => {
          return (
            <li key={i} className="navLi">
              <a className="navBtn" onClick={() => Data(e)}>
                {e}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;