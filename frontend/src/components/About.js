import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../style/About.css';

const About = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are dedicated to providing you with the best experience possible. Our team is passionate about delivering high-quality products and services to meet your needs.
        </p>
        <p>
          Our mission is to create value for our customers through innovation and excellence. We believe in building strong relationships with our clients and constantly striving to exceed their expectations.
        </p>
        <p>
          Thank you for visiting our site, and we look forward to serving you!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
