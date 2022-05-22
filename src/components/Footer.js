import React from "react";

import iconFb from "../img/icon-facebook.png";
import iconInsta from "../img/icon-instagram.png";
import iconTwitter from "../img/icon-twitter.png";
import iconGithub from "../img/icon-github.png";

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="#">
            <img src={iconTwitter} alt="icon twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={iconFb} alt="icon facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={iconInsta} alt="icon instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={iconGithub} alt="icon github" />
          </a>
        </li>
      </ul>
    </div>
  );
}
