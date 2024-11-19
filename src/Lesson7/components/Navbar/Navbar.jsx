import { useState } from "react";
import NavSection from "../../constants/navSection";
import NavLogo from "../../assets/logo/logo.png";
import "./Navbar.css";
import "../../medias/mediaNav.css";

const Navbar = ({ toggleUsers, toggleCars, toggleProducts }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav>
                <img src={NavLogo} alt="Logo" />
                <ul className={menuOpen ? "open" : ""}>
                    {NavSection.map((item, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                onClick={() => {
                                    if (item === "Users") toggleUsers();
                                    if (item === "Cars") toggleCars();
                                    if (item === "Products") toggleProducts();
                                }}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

