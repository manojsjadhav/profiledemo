import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Manoj Jadhav.</span>
        </h1>
        <p className="h-sub-text">
          Highly motivated individual with a degree in BSC from Nanded
          University. Looking for a job in IT. I want to use my skills to grow
          your business and wish to develope a more rounded skillset and improve
          my job capability.
        </p>
        <div className="icons">
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faInstagram} className="icon ig" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Homepage;
