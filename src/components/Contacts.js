import React from "react";

import hero from "../img/hero.png";
import iconEmail from "../img/icon-email.png";
import iconLinkedIn from "../img/icon-linkedin.png";

export default function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__photo">
        <img src={hero} alt="hero image" />
      </div>
      <div className="contacts__id">
        <h1>Laura Smith</h1>
        <h4>Frontend Developer</h4>
        <span>laurasmith.website</span>
      </div>
      <div className="contacts__message">
        <div className="contacts__message__email">
          <img src={iconEmail} alt="icon email" />
          Email
        </div>
        <div className="contacts__message__linkedin">
          <img src={iconLinkedIn} alt="icon linkedIn" />
          LinkedIn
        </div>
      </div>
    </div>
  );
}
