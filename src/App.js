import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './components/Home';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Homes from './components/Header';





const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#fff',
  Position : 'fixed',
  
  // backgroundColor: 'your-color', 
  backgroundColor: 'black',
  padding: '10px 20px',
  boxShadow: '0 4px 10px rgba(255, 215, 0, 0.6)', // Gold shadow effect
};

const logoStyle = {
  fontSize: '25px',
  fontFamily: 'Montserrat, sans-serif', 
  // fontFamily: '"Dancing Script", sans-serif', 
  fontWeight: 'bold',
  animation: 'moveDown 1.5s ease-in-out', // Animation applied to name/logo
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '10px',
};

const navListStyle = {
  display: 'flex',
  listStyleType: 'none',
  padding: '0',
};

const navItemStyle = {
  margin: '0 20px',
};

const navLinkStyle = {
  textDecoration: 'none',
  color: 'white',  // Default color
  fontSize: '18px',
  fontFamily: 'Playfair Display, serif', // Corrected fontFamily

  fontStyle: 'italic', // Apply italic style
  transition: 'color 0.3s ease',
  animation: 'moveDown 1.5s ease-in-out', // Animation applied to each nav link
};

const keyframes = `
  @keyframes moveDown {
    0% {
      transform: translateY(-30px);  /* Start above */
      opacity: 0;
    }
    100% {
      transform: translateY(0);  /* End at normal position */
      opacity: 1;
    }
  }
`;
function App() {
  return (
    <Router>

      
      <div>
    
        <style>{keyframes}</style> {/* Keyframes for animation */}
        <header style={headerStyle}>
          <div style={logoStyle}>RASHMI PORTFOLIO</div> {/* Your name as logo */}
          <nav style={navStyle}>
            <ul style={navListStyle}>
              <li style={navItemStyle}>
                <Link to="/" style={navLinkStyle}>Home</Link>
              </li>
              <li style={navItemStyle}>
                <Link to="/about" style={navLinkStyle}>About</Link>
              </li>
              
              <li style={navItemStyle}>
                <Link to="/skills" style={navLinkStyle}>Skills</Link>
              </li>
              <li style={navItemStyle}>
                <Link to="/projects" style={navLinkStyle}>Projects</Link>
              </li>
              <li style={navItemStyle}>
                <Link to="/certificates" style={navLinkStyle}>Certificates</Link>
              </li>
              <li style={navItemStyle}>
                <Link to="/contact" style={navLinkStyle}>Contact me</Link>
              </li>
            </ul>
          </nav>
        </header>
        

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Homes" element={<Homes />} />
        </Routes>

        
      </div>
    </Router>
  );
}

export default App;
