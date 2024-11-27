import { Button } from "../Main";
import { social } from "../../constants/data";

import "./Header.scss";

const Header = () => {
  return (
    <section className="header">
      <div className="container header-container">
        <div className="header-l">
          <div className="header-content">
            <h1>
              <span>Սովորի՛ր </span>ծրագրավորում
              <br />
              <span>Դարձի՛ր </span>պահանջված մասնագետ
            </h1>
            <p>Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։</p>
            <div className="button-box">
              <Button
                type="button"
                className="orangeBtn"
                social={false}
                content="Սկսե՛լ ուսումը"
              />
              <Button
                social={false}
                className="video"
                content={
                  <>
                    <i className="bi bi-play-circle"></i> Տեսանյութ
                  </>
                }
              />
            </div>
          </div>
          <div className="social-box">
            <ul>
              {social.map((obj, ind) => (
                <li key={ind}>
                  <Button
                    social={obj.social}
                    link={obj.link}
                    className={obj.className}
                    target={obj.target}
                    content={obj.content}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="header-r">
          <img
            src="https://smartcode.am/public/image/header.svg"
            alt="header-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
