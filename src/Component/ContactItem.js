import React from "react";

const ContactItem = ({ text1, text2, title }) => {
  return (
    <div className="contactitem">
      <div className="contact">
        <div className="right-items">
          <h4>{title}</h4>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
