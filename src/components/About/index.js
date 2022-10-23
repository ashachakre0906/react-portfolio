import image from "../../assets/images/mypic.png";
import "./about.css";
import MainTitle from "./header";

const About = () => {
  return (
    <div className="about-me">
      <header>
      <h1 className="hero-heading">Asha Chakre</h1>
      <h2>Full Stack Developer</h2>
      </header>
      <div>
      <img src={image} alt="Asha Chakre" />
      </div>
      <p>Passionate and Ambitious Full Stack Developer
        and UX/UI enthusiast based in San Jose,CA with the passion of learning and creating apps
        with prior experience in quality assurance
        eager to leverage skills and experience 
        in a fast-paced environment and grow as a developer.</p>
    <a href="https://github.com/ashachakre0906" className="btn">Get In Touch</a> 
    </div>   
  );
};

export default About;
