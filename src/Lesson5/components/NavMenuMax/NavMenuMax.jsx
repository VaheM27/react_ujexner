import "./NavMenuMax.scss";

const NavMenuMax = ({ home, about, projects, services, contact }) => {
  return (
    <ul className="navMenuMax">
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
  );
};

export default NavMenuMax;
