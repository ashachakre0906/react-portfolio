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
      <p>Passionate and Ambitious Full Stack Developer
        and UX/UI enthusiast 
        based in San Jose,CA
        with prior experience in quality assurance<br></br>
        Eager to leverage skills and experience 
        in a fast-paced environment and grow as a developer.</p>
    <a href="https://github.com/ashachakre0906" className="btn">Get In Touch</a> 
    </div>   
  );
};

export default About;
