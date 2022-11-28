import React from 'react';
import logo from '../assets/apt4u_logo.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
        <div className="leftSide">
            <img src={logo}/>
        </div>
        <div className="rightSide">
            <Link to="/"> Home </Link>
            <Link to="/predictionpage"> Predictor </Link> 
            <Link to="/about"> About Us </Link>
            <Link to="/contact"> Contact </Link>
        </div>
    </div>
  )
}

export default Navbar