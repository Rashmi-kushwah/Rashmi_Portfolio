import React from 'react';
import './Contact.css';
import { FaGithub } from 'react-icons/fa';

import { FaLinkedin, FaEnvelope } from "react-icons/fa";
const ContactPage = () => {
  return (
    <div>
    <div className="contact-section">
      <div className="contact-text">
        <h2 className="contact-heading">Contact Me</h2>
        <p className="contact-subheading">
          If you have any questions or want to connect, feel free to send me a message!
        </p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="input-field" />
        <input type="email" placeholder="Your Email" className="input-field" />
        <select className="input-field">
          <option>Reason for Contact</option>
          <option>Job Opportunity</option>
          <option>Project Inquiry</option>
          <option>Other</option>
        </select>
        <textarea placeholder="Your Message" className="input-field"></textarea>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
        
        {/* Footer Section  */}
        <footer className="footer">
              <p>© 2025 Rashmi Kushwah. All Rights Reserved.</p>
              <div className="footer-icons">
                <a
                  href="https://github.com/Rashmi-kushwah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/rashmi-kushwah-211487295/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a href="mailto:rashmiinfo6@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
            </footer>
            </div>
  );
};

export default ContactPage;
