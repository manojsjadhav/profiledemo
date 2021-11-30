import React from "react";

const Tittle = ({ title, span }) => {
  return (
    <div className="title">
      <h3>
        {title}
        <span> {span}</span>
      </h3>
    </div>
  );
};

export default Tittle;
