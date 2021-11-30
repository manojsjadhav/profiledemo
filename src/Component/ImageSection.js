import React from "react";
import About from "../img/About.png";

const ImageSection = () => {
  return (
    <div className="imagesection">
      <div className="img">
        <img src={About} alt="" />
      </div>
      <div className="About-info">
        <h4>
          I am<span> Manoj Jadhav</span>
        </h4>
        <p className="About-text">
          To work in an environment which encourages me to succeed and grow
          professionally where I can utilize my skills and knowledge
          appropriately
        </p>
        <div className="About-details">
          <div className="left-section">
            <p>Full Name </p>
            <p>DOB </p>
            <p>Nationality </p>
            <p>Langueges </p>
            <p>Address </p>
            <p>Countries </p>
          </div>
          <div className="right-section">
            <p>: Manoj Sugriv Jadhav</p>
            <p>: 21 oct 1997</p>
            <p>: India</p>
            <p>: English, Hindi, Marathi</p>
            <p>: A/P- Shindhi Tq- Kaij Dist- Beed</p>
            <p>: Maharashtra</p>
          </div>
        </div>
        <button className="btn">Download Cv</button>
      </div>
    </div>
  );
};

export default ImageSection;
