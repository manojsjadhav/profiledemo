import React from "react";
import ContactItem from "../Component/ContactItem";
import Tittle from "../Component/Tittle";

const Contactpage = () => {
  return (
    <div>
      <div className="Title">
      <Tittle title={"Contact Me"} span={"Contact Me"} />
      </div>
      <div className="contact-page">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d446820.87800051767!2d73.81227090832354!3d18.44706692493604!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1637852598244!5m2!1sen!2sin"
            width="600"
            height="450"
            title="myFrame"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            text1={"+91 8788770201"}
            text2={"+91 8551084038"}
            title={"Phone"}
          />
          <ContactItem text1={"manojjadhav1097@gmail.com"} title={"Email"} />
          <ContactItem text1={"Current Warje Malvadi, Pune Maharashtra"} text2={"Paramount At/Po: Shindi Tq: Kaij Dist: Beed 431123"} title={"Address"} />
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
