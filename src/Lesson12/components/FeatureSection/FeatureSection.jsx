import { useState } from "react";
import { SectionHeader, Button, Dropdown } from "../Main";
import { featureData } from "../../constants/data";

import "./FeatureSection.scss";

const FeatureSection = () => {
  const [activeDropdown, setActiveDropdown] = useState("");

  const drop = (id) => {
    setActiveDropdown(activeDropdown === id ? "" : id);
  };
  return (
    <section>
      <div className="container section">
        <SectionHeader
          heading2="Ինչո՞ւ սովորել"
          bold=" մեզ մոտ"
          text="Մեզ մոտ ծրագրավորում սովորելը ձեռնտու է"
          className="sectionHeader"
        />
        <div className="featureSection">
          <img
            src="https://smartcode.am/public/image/per2.svg"
            alt="section-image"
          />
          <ul>
            {featureData.map((data, i) => (
              <li key={i}>
                <Dropdown
                  id={data.title + i}
                  activeDropdown={activeDropdown}
                  drop={drop}
                  header={data.title}
                  bold={data.bold}
                  context={data.context}
                  icon={data.icon}
                />
              </li>
            ))}
          </ul>
        </div>
        <Button
          social={false}
          content="Սկսե՛լ ուսումը"
          type="button"
          className="orangeBtn"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
