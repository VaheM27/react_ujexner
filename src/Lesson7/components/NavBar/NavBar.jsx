import { useState } from "react";

import NavMenu from "../NavMenu/NavMenu";
import { regions } from "../../constants/data";

import "./NavBar.scss";

const NavBar = ({ onRegionSelect }) => {
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggle(index, region) {
    setOpenIndex(openIndex === index ? null : index);
    openIndex !== index ? onRegionSelect(region) : onRegionSelect(null);
  }

  return (
    <nav>
      <div className="container">
        <ul>
          {regions.map((region, id) => (
            <li key={id}>
              <NavMenu
                section={region}
                isOpen={openIndex === id}
                onToggle={() => handleToggle(id, region)}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
