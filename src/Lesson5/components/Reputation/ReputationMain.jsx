import ReputationBlock from "../../components/Reputation/ReputationBlock";
import reputationDivs from "../../constants/reputationdivs";

import "./Reputation.scss";

const ReputationMain = () => {
  return (
    <div className="reputation">
      <h1>Our Reputation</h1>

      {reputationDivs.map((item) => {
        return (
          <div key={item.id} className="reputation_block">
            <ReputationBlock
              icon={item.icon}
              name={item.name}
              desc={item.desc}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ReputationMain;
