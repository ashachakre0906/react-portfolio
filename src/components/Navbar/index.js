import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap-nav';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar(){
    return (
        <div className='navbar'>
           <div className='toggleButton'>
               <button></button>
           </div>
           <div className='links'>
               <Link to='/'>Home</Link>
               <Link to='/about'>About Me</Link>
               <Link to='/portfolio'>Portfolio</Link>
               <Link to='/resume'>Resume</Link>
               <Link to='/contact'>Contact</Link>
           </div>
       </div>

    )
       
}

export default Navbar;