import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRef } from "react";
import { useInView } from "framer-motion";

import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaDownload } from "react-icons/fa";
const Homes = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      setScrolled(true); // Trigger animation if scrolled
    } else {
      setScrolled(false); // Reset animation if scrolled back to top
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  const aboutLeftRef = useRef(null);
const aboutRightRef = useRef(null);

const isLeftInView = useInView(aboutLeftRef, { triggerOnce: false, threshold: 0.2 });
const isRightInView = useInView(aboutRightRef, { triggerOnce: false, threshold: 0.2 });


  return (
    <div className="homepage">
 
      {/* Header Section */}
      <header className="header">
        <div className="left">
          <motion.h1
            initial={{ transform: 'translateY(-30px)', opacity: 1 }}  // Start from above and invisible
            animate={{ transform: scrolled ? 'translateX(0)' : 'translateX(-100px)', opacity: scrolled ? 1 : 1 }}  // Move text if scrolled
            transition={{ duration: 1 }}
          >
            Rashmi Kushwah
          </motion.h1>

          <motion.p
            initial={{ transform: 'translateY(-30px)', opacity: 0 }}  // Same animation for paragraph
            animate={{ transform: scrolled ? 'translateX(0)' : 'translateX(-100px)', opacity: scrolled ? 1 : 1 }}
            transition={{ duration: 1, delay: 0.5 }}  // Added delay for effect
          >
            Fullstack Python developer <br />
            "Turing Challanges into Opportunities"
          </motion.p>
        </div>

        <div className="right">
          <motion.img
            src="https://scontent.fdel1-8.fna.fbcdn.net/v/t39.30808-6/474037637_675197015073562_4071111779611771200_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wdQMq6R2AuIQ7kNvgFKx86T&_nc_zt=23&_nc_ht=scontent.fdel1-8.fna&_nc_gid=ABYyI0xI2Xuk5kAc907bHKh&oh=00_AYDNBFxYukG74eal26nAQLCEmvCBZmzMqA0LwssqD0wutw&oe=67A3BE5E"
            alt="Rashmi"
            className="profile-circle"
            initial={{ x: -50, opacity: 0 }}
            animate={{ X: scrolled ? 0 : -50, opacity: scrolled ? 1 : 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
      </header>
      

      <div className="about">
      {/* Left Side (Text) */}
      <motion.div 
        ref={aboutLeftRef}
        className="about-left"
        initial={{ x: "-100%", opacity: 0 }}
        animate={isLeftInView ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2>About Me</h2>
        <p>
          I am a passionate Full Stack Developer with expertise in Python, Django, React, and <br />
          modern web technologies. I specialize in building dynamic, responsive, and scalable<br />
          web applications. With experience in front-end and back-end development, <br />
          I have worked on e-commerce platforms, admin dashboards, and API integrations.<br />
          My skill set includes JavaScript, HTML, CSS, Bootstrap, Tailwind CSS, MySQL, <br />
          and SQLite. I am always eager to learn and implement new technologies to enhance <br />
          user experience and optimize application performance.
        </p>
        <div className="contact-info">
          <p><FaLinkedin /> <a href="https://www.linkedin.com/in/rashmi-kushwah-211487295/">LinkedIn</a></p>
          <p><FaEnvelope /> rashmiinfo6@gmail.com</p>
          <p><FaMapMarkerAlt /> Agra, India</p>
        </div>
      </motion.div>

      {/* Right Side (Image) */}
      <motion.div 
        ref={aboutRightRef}
        className="about-right"
        initial={{ x: "100%", opacity: 0 }}
        animate={isRightInView ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img src="https://media.licdn.com/dms/image/v2/D5603AQHgCQbpn7Nadg/profile-displayphoto-shrink_200_200/B56ZQIwUPKGsAc-/0/1735313672871?e=1743638400&v=beta&t=Imjp5HXwZQVdcLzBYvA7K7ETup3RBmaxeUAJPqM5riM" alt="Rashmi" className="profile-circle" />
        <motion.a 
          href="/resume.pdf" 
          download 
          className="resume-btn"
          whileHover={{ scale: 1.1 }}
        >
          <FaDownload /> Download Resume
        </motion.a>
      </motion.div>
    </div>

    {/* Education & Skills */}
<div className="education-skills">
  <div className="education">
    <h2 className="education-title">Education</h2>
    <p className="education-text">Full Stack Python Developer Course from Vision Infotech</p>
    <div className="education">
    <h2 className="education-title">Education</h2>
    <p className="education-text">Full Stack Python Developer Course from Vision Infotech</p>
    </div>
    <h2 className="education-title">Education</h2>
    <p className="education-text">B.C.A from Dr. B.R. Ambedkar University, Agra</p>

  </div>

  {/* Right Side - Skills */}
  <div className="skills">
    <div className="skill-box">
      <img src="" alt="Python" />
      Python
    </div>
    <div className="skill-box">
      <img src="" alt="Django" />
      Django
    </div>
    <div className="skill-box">
      <img src="" alt="Django Rest Framework" />
      Django Rest Framework
    </div>
    <div className="skill-box">
      <img src="" alt="ReactJS" />
      ReactJS
    </div>
    <div className="skill-box">
      <img src="" alt="Tailwind CSS" />
      Tailwind CSS
    </div>
    <div className="skill-box">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgF_ipGIanerewhQXOb-1CdatUyzRJqpVmg&s" alt="Bootstrap" />
      Bootstrap
    </div>
    <div className="skill-box">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRUGXR_pLaNtbB7Uw9fKjJBWu42VCTQHy-3pAvBp1vC9yiVdH602-e7mRrLDCkKyojKg&usqp=CAU" alt="HTML" />
      <p>HTML</p>
    </div>
    <div className="skill-box">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqX5JpiFmSSrwJS5N-DGi61Nc69XFjrESHMg&s" alt="CSS" />
      CSS
    </div>
    <div className="skill-box">
      <img src="" alt="JavaScript" />
      JavaScript
    </div>
  </div>
</div>

    
      {/* Education & Skills */}
      <div className="education-skills">
      {/* <section className="education-skills"> */}
      <div className="education">
    <h2 className="education-title">Education</h2>
    <p className="education-text">Fullstack Python develoepr Course from Vision Infotech</p>
    
    <div className="education">
      <h2 className="education-title">Education</h2>
      <p className="education-text">B.C.A from Dr. B.R. Ambedkar University,Agra</p>
    </div>
    <div className="education">
      <h2 className="education-title">Education</h2>
      <p className="education-text">12th from Gyan Bharti Girls Inter College, Agra</p>
    </div>
  </div>


{/* Right Side - Skills */}
<div className="skills">
    <div className="skill-box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa7W86jktO0PNI0j7HHoa_0H7Zuhq3TGBFMw&s" alt="Python" />
        Python
    </div>
    <div className="skill-box">
        <img src="data:image/png;base64,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" alt="Django" />
        Django
    </div>
    <div className="skill-box">
        <img src="data:image/png;base64,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" alt="Django Rest Framework" />
        Django Rest Framework
    </div>
    <div className="skill-box">
        <img src="data:image/png;base64,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" alt="ReactJS" />
        ReactJS
    </div>
    <div className="skill-box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTheLFjFjH9Xfv0EjFUOR66d9rkxOofOSEE3w&s" alt="Tailwind CSS" />
        Tailwind CSS
    </div>
    <div className="skill-box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgF_ipGIanerewhQXOb-1CdatUyzRJqpVmg&s" alt="Bootstrap" />
        Bootstrap
    </div>
    <div className="skill-box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRUGXR_pLaNtbB7Uw9fKjJBWu42VCTQHy-3pAvBp1vC9yiVdH602-e7mRrLDCkKyojKg&usqp=CAU" alt="HTML" />
        <p>HTML</p>
    </div>
    <div className="skill-box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqX5JpiFmSSrwJS5N-DGi61Nc69XFjrESHMg&s" alt="CSS" />
        CSS
    </div>
    <div className="skill-box">
        <img src="data:image/png;base64,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" alt="JavaScript" />
        JavaScript
    </div>
    <div className="skill-box">
        <img src="data:image/png;base64,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" alt="MySQL" />
        MySQL
    </div>
    <div className="skill-box">
        <img src="data:image/jpeg;base64,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" alt="SQLite" />
        SQLite
    </div>
    <div className="skill-box">
        <img src="data:image/png;base64,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" alt="Git" />
        Git
    </div>
    <div className="skill-box">
        <img src="data:image/png;base64,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" alt="GitHub" />
        GitHub
    </div>
</div>
</div>
{/* </section> */}


 
             
    </div>
  );
};

export default Homes;
