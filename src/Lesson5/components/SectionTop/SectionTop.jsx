import icon1 from "../../assets/image/icons/icon1.png";
import icon2 from "../../assets/image/icons/icon2.png";

import "./SectionTop.scss";

const SectionTop = () => {
  return (
    <>
      <section className="top">
        <div className="container">
          <div className="section">
            <h1>Our Reputation</h1>
            <div className="best">
              <div className="box">
                <img src={icon1} alt="icon" />
                <h2>Best Services</h2>
                <p>
                  Nullam senectus porttitor in eget. Eget rutrum leo interdum.
                </p>
              </div>
              <div className="box">
                <img src={icon1} alt="icon" />
                <h2>Best Teams</h2>
                <p>Cursus semper tellus volutpat aliquet lacus. </p>
              </div>
              <div className="box">
                <img src={icon2} alt="icon" />
                <h2>Best Designs</h2>
                <p>Ultricies at ipsum nunc, tristique nam lectus. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTop;
