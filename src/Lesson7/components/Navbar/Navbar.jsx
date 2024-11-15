import Dashboard from "../Dashboard/Dashboard";
import { useState } from "react";
import {
  mensClothes,
  womensClothes,
  electronics,
  jewelery,
} from "../../constants/data";

import "./Navbar.scss";

const Navbar = () => {
  const [productType, setProductType] = useState("");

  const navItems = ["Men Clothes", "Women Clothes", "Electronics", "Jewelery"];

  function getData(value) {
    switch (value) {
      case "Men Clothes":
        setProductType("Men Clothes");
        break;
      case "Women Clothes":
        setProductType("Women Clothes");
        break;
      case "Electronics":
        setProductType("Electronics");
        break;
      case "Jewelery":
        setProductType("Jewelery");
        break;
      default:
        break;
    }
  }

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
