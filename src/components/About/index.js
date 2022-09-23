import react from "react";
import image from "../../assets/images/mypic.png";
import "./about.css";
import MainTitle from "./header";

const About = () => {
  return (
    <div className="about-me">
      <img src={image} alt="Asha Chakre" />
      <h1 className="hero-heading">hello, I am Asha Chakre</h1>
      <p className="content">Hi, My Name is Asha Chakre.An Aspiring Fullstack developer currently enrolled in UC Berkely Extension,Coding Bootcamp. </p>
      {/* <MainTitle /> */}
    </div>   
  );
};

export default About;
