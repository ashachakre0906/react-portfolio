import react from "react";
import image from "../../assets/images/mypic.png";
import "./about.css";
import MainTitle from "./header";

const About = () => {
  return (
    <div className="about-me">
      <img src={image} alt="Asha Chakre" />
      <MainTitle />
    </div>   
  );
};

export default About;
