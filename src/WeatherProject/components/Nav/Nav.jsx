import "./Nav.scss";

const Nav = ({ searchCity, changeCelsiusToFahrenheit, celFar }) => {
  return (
    <nav>
      <div className="nav-container">
        <form onSubmit={searchCity}>
          <input type="text" placeholder="Search City" />
          <button type="submit">Search City</button>
        </form>
        <div className="cel-far">
          <div>
            <input
              type="radio"
              id="celsius"
              name="weather"
              onChange={changeCelsiusToFahrenheit}
              checked={celFar}
            />
            <label htmlFor="celsius">°C</label>
          </div>
          <div>
            <input
              type="radio"
              id="fahrenheit"
              name="weather"
              onChange={changeCelsiusToFahrenheit}
              checked={!celFar}
            />
            <label htmlFor="fahrenheit">°F</label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
