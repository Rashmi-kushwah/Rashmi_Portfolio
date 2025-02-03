import React from 'react';
import './About.css';

import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';


const About = () => {
  return (
    <div>
  <div className="about">
  <div className="about-left">
  <h2>About Me</h2>
  <p>
    I am a passionate Full Stack Developer with expertise in Python, Django, React, and <br />modern web technologies.
    I specialize in building dynamic, responsive, and scalable<br /> web applications. With experience in front-end and back-end development, <br />
    I have worked on e-commerce platforms, admin dashboards, and API integrations.<br /> My skill set includes JavaScript, HTML, CSS,
    Bootstrap, Tailwind CSS, MySQL, <br />and SQLite. I am always eager to learn and implement new technologies to enhance <br />user experience 
    and optimize application performance.
  </p>
      <div className="contact-info">
        <p><FaLinkedin /> <a href="https://www.linkedin.com/in/rashmi-kushwah-211487295/">LinkedIn</a></p>
        <p><FaEnvelope /> rashmiinfo6@gmail.com</p>
        <p><FaMapMarkerAlt /> Agra, India</p>
      </div>
    </div>

    <div className="about-right">
      <img src="https://media.licdn.com/dms/image/v2/D5603AQHgCQbpn7Nadg/profile-displayphoto-shrink_200_200/B56ZQIwUPKGsAc-/0/1735313672871?e=1743638400&v=beta&t=Imjp5HXwZQVdcLzBYvA7K7ETup3RBmaxeUAJPqM5riM" alt="Rashmi" className="profile-circle" />
      <motion.a 
        href="/resume.pdf" 
        download 
        className="resume-btn"
        whileHover={{ scale: 1.1 }}
      >
        <FaDownload /> Download Resume
      </motion.a>
    </div>
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

export default About;