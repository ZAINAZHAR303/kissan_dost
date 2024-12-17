import React from 'react';
import './About.css';
import Navbar from '../../components/Navbar/Navbar';

const About = () => {
  return (
    <>
        <Navbar/>
      <div className="about-container">
      <div className="card">
        <img src="" alt="My Pic" className="card-img" />
        <div className="card-content">
          <h2>My Name</h2>
          <p>Bio: Your bio data goes here. You can add details like education, interests, and more.</p>
        </div>
      </div>

      <div className="card">
        <img src="" alt="Friend Pic" className="card-img" />
        <div className="card-content">
          <h2>Friend's Name</h2>
          <p>Bio: Friend's bio data goes here.</p>
        </div>
      </div>

      <div className="card">
        <img src="another-picture-url.jpg" alt="Another Pic" className="card-img" />
        <div className="card-content">
          <h2>Another Person's Name</h2>
          <p>Bio: Another bio data goes here.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
