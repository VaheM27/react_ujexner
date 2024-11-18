import { useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import { regions } from "../../constants/data";

import "./NavBar.scss";

const NavBar = ({ onRegionSelect }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index, region) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);
    onRegionSelect(newIndex === null ? null : region);
  };

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
