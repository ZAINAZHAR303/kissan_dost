import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  // Toggle the navbar state
  const toggleNavbar = () => {
    setIsActive(!isActive);
    if (!isActive) {
      document.body.style.marginTop = '320px'; // Push content down when navbar is active
    } else {
      document.body.style.marginTop = '0'; // Reset content margin when navbar is inactive
    }
  };

  return (
    <header>
      <label className="logo">HASEE MIRZA</label>
      <div className="hamburger" onClick={toggleNavbar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={`navbar ${isActive ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
