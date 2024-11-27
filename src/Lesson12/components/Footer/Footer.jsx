import { Link } from "react-router-dom";
import { Button } from "../Main";
import { social, company, contact } from "../../constants/data";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="foot-l">
          <Link to="/">
            <img
              src="https://smartcode.am/public/image/logo.png?v=1"
              alt="Smart Code"
            />
          </Link>
          <p>Որակյալ ուսուցում, Անվճար պրակտիկա, Երաշխավորված աշխատանք</p>

          <ul>
            {social.map((obj) => (
              <li key={Math.random()}>
                <Button
                  social={obj.social}
                  link={obj.link}
                  content={obj.content}
                  target={obj.target}
                  className={obj.className}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="foot-m">
          <h2>Ընկերություն</h2>
          <ul>
            {company.map((obj) => (
              <li key={Math.random()}>
                <Link to={obj.path}>{obj.list}</Link>
              </li>
            ))}
            <li>
              <a
                href="https://staff.am/en/company/smartcode"
                target="_blank"
                rel="noreferrer">
                Աշխատանք
              </a>
            </li>
          </ul>
        </div>
        <div className="foot-r">
          <h2>Կապ մեզ հետ</h2>
          <ul>
            {contact.map((obj) => (
              <li key={Math.random()}>
                <a href={obj.href} target={obj.target}>
                  {obj.icon}
                  {obj.content}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
