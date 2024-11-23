import React from "react";
import "./navbar.css";

function Navbar({ cartCount, toggleCardBox }) {
    return (
        <div className="Navbar">
            <h1 className="Logo">Pizza WebSite</h1>

            <div className="contactUs">
                <a href="tel:098023260">Phone : +374 98 02-32-60</a>
                |
                <a href="mailto:yeghyanmelik@gmail.com">E-Mail : yeghyanmelik@gmail.com</a>
            </div>

            <div className="userAndCard">
                <div className="card" onClick={toggleCardBox}>
                    <i className="fa-solid fa-cart-shopping icon"></i>
                    <p>{cartCount}</p>
                </div>
                <i className="fa-solid fa-user icon"></i>
            </div>
        </div>
    );
}

export default Navbar;
