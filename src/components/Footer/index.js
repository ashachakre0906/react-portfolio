import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "../Footer/footer.css";
import { Container } from "react-bootstrap";
function Footer() {
  return (
    <div className="footer">
      <div className="d-flex justify-content-center social-media-icons-white">
        <a href="https://github.com/ashachakre0906">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/ashachakre/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:chourpagar.asha@gmail.com" alt="email asha chakre" title="email me at chourpagar.asha@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <p className="footer-text"><strong>© Asha Chakre™</strong>Full-Stack Portfolio.All Rights Reserved.</p>
    </div>
  );
}
export default Footer;
