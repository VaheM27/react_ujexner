import icon3 from "../../assets/image/icons/icon3.png";
import icon4 from "../../assets/image/icons/icon4.png";
import icon5 from "../../assets/image/icons/icon5.png";
import icon6 from "../../assets/image/icons/icon6.png";
import icon7 from "../../assets/image/icons/icon7.png";
import icon8 from "../../assets/image/icons/icon8.png";

import "./SectionMiddle.scss";

const SectionMiddle = () => {
  return (
    <>
      <section className="bottom">
        <div className="container">
          <div className="section2">
            <h2>Services</h2>
            <div className="services">
              <div className="serviceBox">
                <img src={icon3} alt="icon" />
                <p>Construction</p>
              </div>
              <div className="serviceBox">
                <img src={icon4} alt="icon" />
                <p>Renovation</p>
              </div>
              <div className="serviceBox">
                <img src={icon5} alt="icon" />
                <p>Consultation</p>
              </div>
              <div className="serviceBox">
                <img src={icon6} alt="icon" />
                <p>Repair Services</p>
              </div>
              <div className="serviceBox">
                <img src={icon7} alt="icon" />
                <p>Architecture</p>
              </div>
              <div className="serviceBox">
                <img src={icon8} alt="icon" />
                <p>Electric</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionMiddle;
