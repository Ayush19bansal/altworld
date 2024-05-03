import React from 'react'
import logo from "../assests/logo.jpg"

function Navbar() {
  return (
    <div className='navbar'>

     <div className='logo'>
     <img src={logo}></img>
     <h4>Hi, AltWorld</h4>
     </div>

     <div className='header'>
        <p><span>Pages</span> / Assignment</p>
        <h4>Sales BDE</h4>
     </div>
    </div>
  )
}

export default Navbar
