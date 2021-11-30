import React from "react";
import Tittle from "../Component/Tittle";
import ImageSection from "../Component/ImageSection";
import Skillsection from "../Component/Skillsection";

const Aboutpage = () => {
  return (
    <div className="Aboutpage">
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Tittle title={"My Skills"} span={"My Skills"} />
      <div className="skills-container">
        <Skillsection skill={"HTML"} prograss={"90%"} width={"90%"} />
        <Skillsection skill={"CSS"} prograss={"87%"} width={"87%"} />
        <Skillsection skill={"Javascript"} prograss={"95%"} width={"95%"} />
        <Skillsection skill={"React js"} prograss={"94%"} width={"94%"} />
        <Skillsection skill={"React Redux"} prograss={"93%"} width={"93%"} />
        <Skillsection skill={"Bootstrap"} prograss={"85%"} width={"85%"} />
        <Skillsection skill={"material ui"} prograss={"75%"} width={"75%"} />
      </div>
    </div>
  );
};

export default Aboutpage;
