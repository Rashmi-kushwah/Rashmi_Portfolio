import React from 'react';
import './Contact.css'; 
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";
const Certificates = () => {
  return (
   <div>

    {/* </section> */}
{/* Certifications */}
<div className="text-center mb-12 bg-black">
  <h2 className="text-3xl font-bold text-white">Certifications</h2>

  <div className="mt-6 grid gap-6 md:grid-cols-4">
    {[ 
      { name: "Python Developer", link: "https://www.linkedin.com/posts/activity-7253360009592385536-qewc?utm_source=share&utm_medium=member_desktop" },
      { name: "Django Developer", link: "https://www.linkedin.com/posts/activity-7253360009592385536-qewc?utm_source=share&utm_medium=member_desktop" },
      { name: "D.C.A", link: "https://example.com/dca-cert" },
      { name: "Git & GitHub", link: "https://example.com/git-github-cert" }
    ].map((cert, index) => (
      <motion.div
        key={index}
        className="bg-white text-black p-4 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 100 }}  // Start position below with no opacity
        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
        viewport={{ once: false, amount: 0.2 }}  // Trigger animation when in view
        transition={{ duration: 0.8 }}  // Duration of the animation
      >
        <h3 className="certification_text">{cert.name}</h3>
        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
          <button className="certificatr_button">View Certificate</button>
        </a>
      </motion.div>
    ))}
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
  </div>
  );
}

export default Certificates;
