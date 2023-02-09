import image from "../../assets/images/mypic.png";
import "./about.css";
import MainTitle from "./header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
          <p className="content">
            Passionate and Ambitious Full Stack Developer and UX/UI enthusiast
            based in San Jose,CA with the passion of learning and creating apps
            with prior experience in quality assurance eager to leverage skills
            and experience in a fast-paced environment and grow as a developer.
            As a web developer, I emphasize a mobile-first web development
            perspective along with creating responsive web applications which
            enhance the users experience.
          </p>
          <a href="https://www.linkedin.com/in/ashachakre/" className="btn">
            Get In Touch
          </a>
          <div className="hidden d-flex justify-content-center social-media-icons-white">
            <div className="hide">
              <a href="https://github.com/ashachakre0906">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/ashachakre/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="mailto:chourpagar.asha@gmail.com"
                alt="email asha chakre"
                title="email me at chourpagar.asha@gmail.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            {/* <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} />
            </a> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
