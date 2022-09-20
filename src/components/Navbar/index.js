import react from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';
function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark">
        <Container>
          <header className="header">Asha Chakre</header>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="nav-link" id="responsive-navbar-nav">
          <Nav>
          <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}


// function Navigation() {
//   return (
//     <ul className="nav d-flex justify-content-center bg-color-black">
//       <li className="nav-item">
//         <Link className="nav-link" to="/about">
//           About
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/portfolio">
//           Portfolio
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/contact">Contact</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/resume">Resume</Link>
//       </li>
//     </ul>
//   );
// }

export default Navigation;
