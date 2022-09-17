import react from "react";
// import Nav from 'react-bootstrap/Nav';
// import './navbar.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/portfolio">
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/resume">Resume</Link>
      </li>
    </ul>
  );
}

export default Navigation;
