import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../style/Contact.css';

const Contact = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log('Form submitted:', formData);
    // Reset form data after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
