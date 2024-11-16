import { Data } from "..//..//constants/ReputationData/repData";

import "./Reputation.css";

const Reputation = () => {
  return (
    <div className="repMain">
      <div className="rep">
        <h1>Our Reputation</h1>
        <div className="box">
          {Data.map((el, index) => {
            return (
              <div className="card" key={index}>
                <img src={el.img} alt="img" />
                <h2>{el.title}</h2>
                <p>{el.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reputation;
