import react from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./navbar.css";
const Navigation = (props) =>{
  const pages = ['Home','About','Portfolio','Project'];
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <header className="header">Asha Chakre</header>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="nav-link" id="responsive-navbar-nav">
            <Nav>
              {pages.map (pages => (<Nav.Link href={`#${pages.toLowerCase()}`}onClick = {() =>props.switchPage(pages)}
              >{pages}</Nav.Link>))}
              {/* <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Navigation;
