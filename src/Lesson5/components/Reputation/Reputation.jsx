import { ReputationBox, Title } from "../Main";

import teams from "../../assets/png/Teams.png";
import designs from "../../assets/png/Designs.png";

import "./Reputation.scss";

const boxes = [
  {
    title: "Best Services",
    text: "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
    img: teams,
  },
  {
    title: "Best Teams",
    text: "Cursus semper tellus volutpat aliquet lacus.",
    img: teams,
  },
  {
    title: "Best Designs",
    text: "Ultricies at ipsum nunc, tristique nam lectus.s",
    img: designs,
  },
];

const Reputation = () => {
  return (
    <section className="reputation">
      <div className="container sectionContainer">
        <Title title="Our Reputation" />
        <div className="box-section">
          {boxes.map((box, i) => {
            return (
              <ReputationBox
                key={box.title + i}
                src={box.img}
                alt={box.title}
                title={box.title}
                text={box.text}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reputation;
