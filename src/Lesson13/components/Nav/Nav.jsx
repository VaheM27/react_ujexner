import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo/TestLogo.png";
import home from "../../assets/png/home.png";
import group from "../../assets/png/group.png";
import shedule from "../../assets/png/shedule.png";
import chat from "../../assets/png/chat.png";
import transactions from "../../assets/png/transactions.png";
import jose from "../../assets/png/jose.png";
import settings from "../../assets/png/settings.png";
import more from "../../assets/png/more.png";

import "./Nav.scss";

const Nav = () => {
  return (
    <nav>
      <div className="container navContainer">
        <div className="navContainer">
          <NavLink to="/">
            <img src={logo} alt="Tech Care" id="logo" />
          </NavLink>
          <ul>
            <li>
              <NavLink to="/overview">
                <img src={home} alt="Overview" />
                <span>Overview</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/patients">
                <img src={group} alt="Patients" />
                <span>Patients</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/shedule">
                <img src={shedule} alt="Shedule" />
                <span>Schedule</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/message">
                <img src={chat} alt="Chat" />
                <span>Message</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/transactions">
                <img src={transactions} alt="Transactions" />
                <span>Transactions</span>
              </NavLink>
            </li>
          </ul>
          <div className="navRight">
            <div className="navUser">
              <img src={jose} alt="Dr. Jose Simmons" className="avatar"/>
              <div>
                <Link to="/:userId">Dr. Jose Simmons</Link>
                <p>General Practitioner</p>
              </div>
            </div>
            <div className="navSettings">
              <button>
                <img src={settings} alt="Settings" />
              </button>
              <button>
                <img src={more} alt="more" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
