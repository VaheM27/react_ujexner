import {useState} from "react";
import Car from "../Main/Cars/Cars";
// import Clothes from "../Main/Clothes/Clothes";
// import Food from "../Main/Food/Food";

import "./Navbar.css";

const Navbar = (Car) => {
  const [show, setShow] = useState(true);
  const ShowHide = () => {
    setShow(!show);
  };
  return (
    <div className="nav">
      <ul>
        <li>
          <a onClick={ShowHide} href="#">Cars</a>
        </li>
        <li>
          <a onClick={ShowHide} href="#">Clothes</a>
        </li>
        <li>
          <a onClick={ShowHide} href="#">Food</a>
        </li>
      </ul>
      
    </div>
  );
};
export default Navbar;
