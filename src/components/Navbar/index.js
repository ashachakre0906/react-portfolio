import react from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import "./navbar.css";
const Navigation = (props) => {
  // const pages = ["About", "Portfolio", "Project"];
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {/* <header className="header">Asha Chakre</header> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="nav-link" id="responsive-navbar-nav">
          <Nav>
            <Nav.Link
              onClick={() => {
                props.changePage("About");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              onClick={() => {
                props.changePage("Portfolio");
              }}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#resume"
              onClick={() => {
                props.changePage("Resume");
              }}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => {
                props.changePage("Contact");
              }}
            >
              Contact
            </Nav.Link>

            {/* {pages.map (pages => (<Nav.Link href={`#${pages.toLowerCase()}`}onClick = {() =>props.switchPage(pages)}
              >{pages}</Nav.Link>))} */}
            {/* <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
