import React, { useEffect, useState } from "react";
import Icon from "@mdi/react";
import {
  mdiGithub,
  mdiLinkedin,
  mdiReddit,
  mdiWebhook,
  mdiMapMarker,
  mdiEmail,
  mdiPhone,
  mdiInstagram,
  mdiFacebookMessenger,
  mdiYoutube,
  mdiTwitter,
} from "@mdi/js";

import "./Footer.scss";

const Footer = () => {
  const [footerData, setFooterData] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users/")
      .then((res) => res.json())
      .then((res) => setFooterData(res.data));
  }, []);

  return (
    <div className="footer">
      <ul className="firstUl">
        <li>
          <Icon path={mdiGithub} size={1.5} />
        </li>
        <li>
          <Icon path={mdiLinkedin} size={1.5} />
        </li>
        <li>
          <Icon path={mdiReddit} size={1.5} />
        </li>
        <li>
          <Icon path={mdiWebhook} size={1.5} />
        </li>
        <li>
          <Icon path={mdiInstagram} size={1.5} />
        </li>
        <li>
          <Icon path={mdiFacebookMessenger} size={1.5} />
        </li>
        <li>
          <Icon path={mdiYoutube} size={1.5} />
        </li>
        <li>
          <Icon path={mdiTwitter} size={1.5} />
        </li>
      </ul>
      <ul className="secondUl">
        <li>
          <Icon path={mdiMapMarker} size={1} />
          <p>30/1 Sevan Str., Yerevan, Armenia</p>
        </li>
        <li>
          <Icon path={mdiEmail} size={1} />
          <p>contact@info.com</p>
        </li>
        <li>
          <Icon path={mdiPhone} size={1} />
          <p>+37477255204</p>
        </li>
      </ul>
      <div className="footerStaff">
        {footerData?.map((elm) => {
          return (
            <img
              key={elm.id}
              src={elm.avatar}
              alt="footer images"
              width={"50px"}
            />
          );
        })}
      </div>
      <p className="footerPar">© All Rights Reserved 2024</p>
    </div>
  );
};

export default Footer;
