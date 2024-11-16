import { Data } from "..//..//constants/MainData/MainData";

import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="services">
        <h1>Services</h1>
        <div className="box">
          {Data.map((el, index) => {
            return (
              <div className="item" key={index}>
                <img src={el.img} alt="img" />
              </div>
            );
          })}
        </div>
      </div>
      <form action="">
        <h1>What can us do for you?</h1>
        <p className="workText">
          We are ready to work on a project of any complexity, whether it’s
          commercial or residential.
        </p>
        <div className="messege">
          <div className="inputs">
            <span>
              <input type="name" placeholder="Your Name" />
              <input type="email" placeholder="Email" name="" id="" />
              <input type="text" placeholder="     Resons for Contacting" />
              <input type="number" placeholder="Phone" name="" id="" />
            </span>
            <span>
              <input type="text" placeholder="Messege" name="" id="" />
              <span className="pText">
                <p>*</p>
                <p> indicates a required field</p>
              </span>
            </span>
          </div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Main;
