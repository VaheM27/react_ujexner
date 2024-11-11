import "./Card.css";

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="Card logo" className="cardImg" />
      <h2 className="cardTitle">{title}</h2>
      <h3 className="cardDesc">{description}</h3>
    </div>
  );
};

export default Card;