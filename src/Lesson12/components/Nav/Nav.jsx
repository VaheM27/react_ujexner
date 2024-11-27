import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../Main";

import "./Nav.scss";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav">
        <NavLink to="/">
          <img
            src="https://smartcode.am/public/image/logo.png?v=1"
            alt="SmartCode"
          />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/courses">Դասընթացներ</NavLink>
          </li>
          <li>
            <NavLink to="/features">Առավելություններ</NavLink>
          </li>
          <li>
            <NavLink to="/staff">Թրեյներներ</NavLink>
          </li>
          <li>
            <NavLink to="about-us">Մեր մասին</NavLink>
          </li>
        </ul>
        <Button
          social={false}
          content="Սկսե՛լ ուսումը"
          type="button"
          className="orangeBtn"
        />
      </div>
    </nav>
  );
};

export default Nav;
