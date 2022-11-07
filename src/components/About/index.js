import image from "../../assets/images/mypic.png";
import "./about.css";
import MainTitle from "./header";
// import Particles from "../Particles/particles";

const About = () => {
  return (
    <>
    <div className="about-me">
     <section className="about-section">
      <h1 className="hero-heading">Asha Chakre</h1>
      <h2>Full Stack Developer</h2>
      <div>
      <img src={image} alt="Asha Chakre" />
      </div>
      <p className="content">Passionate and Ambitious Full Stack Developer
        and UX/UI enthusiast based in San Jose,CA with the passion of learning and creating apps
        with prior experience in quality assurance eager to leverage skills and experience in a fast-paced environment and grow as a developer.
        As a web developer, I emphasize a mobile-first web
        development perspective along with creating responsive web applications
        which enhance the users experience.</p>
      <a href="https://www.linkedin.com/in/ashachakre/" className="btn">Get In Touch</a> 
     </section>
    </div> 
    </>  
  );
};

export default About;
