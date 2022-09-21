import react from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,faLinkedin,faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../Footer/footer.css';
import { Container} from 'react-bootstrap';
function Footer () {
    return (
        <Container>
             <div className="footer">
                <div className="d-flex justify-content-center singlecol social-media-icons-white">
                    <a href="https://github.com/ashachakre0906"><FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/ashachakre/"><FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook}/>
                    </a>
                </div>
             
             <p className="footer-text">&copy; Asha Chakre, 2022</p>
          </div>
        </Container>

    )

}
export default Footer;