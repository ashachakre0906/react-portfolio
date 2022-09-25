import image from "../../assets/images/mypic.png";
import "./about.css";
import MainTitle from "./header";

const About = () => {
  return (
    <div className="about-me">
      <h1 className="hero-heading">Asha Chakre</h1>
      <h2>Full Stack Developer</h2>
      <div>
      <img src={image} alt="Asha Chakre" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <a href="https://github.com/ashachakre0906" className="btn">Get In Touch</a> 
    </div>   
  );
};

export default About;
