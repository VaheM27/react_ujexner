import { Title, ServiceBox } from "../Main";

import construction from "../../assets/png/Construction.png";
import renovation from "../../assets/png/Renovation.png";
import consultation from "../../assets/png/Consultation.png";
import services from "../../assets/png/Services.png";
import architecture from "../../assets/png/Architecture.png";
import electric from "../../assets/png/Electric.png";

import "./Service.scss";

const boxes = [
  {
    title: "Construction",
    img: construction,
  },
  {
    title: "Renovation",
    img: renovation,
  },
  {
    title: "Consultation",
    img: consultation,
  },
  {
    title: "Repair Services",
    img: services,
  },
  {
    title: "Architecture",
    img: architecture,
  },
  {
    title: "Electric",
    img: electric,
  },
];

const style1 = {
  backgroundColor: "var(--background-color-main)",
  color: "var(--box-blue)",
};
const style2 = {
  backgroundColor: "var(--box-blue)",
  color: "var(--background-color-main)",
};

const Service = () => {
  return (
    <section className="services">
      <div className="container sectionContainer">
        <Title title="Services" />
        <div className="box-section">
          {boxes.map((box, i) => {
            return (
              <ServiceBox
                key={box.title + i}
                src={box.img}
                alt={box.title}
                title={box.title}
                style={i % 2 === 0 ? style1 : style2}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
