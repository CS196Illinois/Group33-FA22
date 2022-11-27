import React from 'react'
import logo from '../assets/apt4u_logo.png'

function Navbar() {
  return (
    <div classname="navbar">
        <div className="leftSide">
            <img src={logo}/>
        </div>
        <div className="rightSide"></div>
    </div>
  )
}

export default Navbar