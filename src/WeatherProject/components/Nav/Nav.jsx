import "./Nav.scss";
const Nav = () => {
  return (
    <div className="nav-div">
      <div></div>
      <input type="text" placeholder="Search City" />
      <button type="submit">Search City</button>
      <section className="section-for-c-f">
        <div className="radio-c">
          <input type="radio" />
          <option value="C">°C</option>
        </div>
        <div className="radio-f">
          <input type="radio" />
          <option value="F">°F</option>
        </div>
      </section>
    </div>
  );
};

export default Nav;
