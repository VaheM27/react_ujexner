import Card from "../Card/Card";
import { cardData } from "../../constants/cardData";

import "./CardSection.css";

const CardSection = () => {
  return (
    <div className="cardSection">
      <h2 className="sectionName">Our Reputation</h2>
      <div className="cards">
        {cardData.map((el, index) => {
          return (
            <Card
              key={index}
              imgSrc={el.image}
              title={el.title}
              description={el.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardSection;
