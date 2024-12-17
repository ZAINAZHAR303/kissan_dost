import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
       <header>
        <label class="logo">HASEE MIRZA</label>
        <div class="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <nav class="navbar">
            <ul>
                <li ><a  href="#home" class="active">Home</a></li>
                <li ><a href="#about">About</a></li>
                <li ><a href="#project">Projects</a></li>
                <li ><a href="#contact">Contact</a></li>
             </ul>
            </nav>
    </header> 
   
    </div>
  )
}

export default Navbar
