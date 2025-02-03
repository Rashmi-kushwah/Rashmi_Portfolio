import React, { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import './Project.css'; // Import your CSS file
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

// const projects = [
//   {
//     name: "Recipe Manager",
//     img: "https://pratikshasportfolio.vercel.app/recepie.png", // Example image URL
//     description: "Manage your recipes in an organized way.",
//   },
//   {
//     name: "Doctor Management System",
//     img: "https://pratikshasportfolio.vercel.app/recepie.png", // Example image URL
//     description: "Manage schedules, appointments, and records.",
//   },
//   {
//     name: "Random User Generator",
//     img: "https://pratikshasportfolio.vercel.app/recepie.png", // Example image URL
//     description: "Generate random user data for testing purposes.",
//   },
//   {
//     name: "To-Do List",
//     img: "https://pratikshasportfolio.vercel.app/recepie.png", // Example image URL
//     description: "Organize your tasks and manage your to-do list.",
//   },
// ];

const Projects = () => {
  useEffect(() => {
    // Select all project cards
    const cards = document.querySelectorAll('.project-card');
    
    // Create an Intersection Observer to add 'in-view' class when cards enter viewport
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    cards.forEach(card => observer.observe(card));

    // Clean up the observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div>
    {/* <div className="projects">
      <h2 className="projects-title text-3xl font-bold">Projects</h2>
      
      <div className="projects-grid mt-6 grid gap-6 md:grid-cols-4">
        {projects.map((project, index) => (
          <div key={index} className="project-card bg-white text-black p-4 rounded-lg shadow-md">
            <img
              src={project.img}
              alt={project.name}
              style={{ width: '280px', height: 'auto' }}
              className="project-image w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="project-name font-semibold mt-2">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-buttons mt-4 flex justify-between">
              <button className="github-btn flex items-center gap-2">
                <FaGithub />
                GitHub
              </button>
              <button className="live-btn flex items-center gap-2">
                <FiExternalLink />
                Live
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
     */}
        
    {/* Project Section */}
    <div className="projects text-center py-10 bg-blue-900 text-white" id="projects">
      {/* <section className="projects text-center py-10 bg-blue-900 text-white" id="projects"> */}
      <h2 className="projects-title text-4xl font-bold mb-4">Projects</h2>
      <div className="projects-grid mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[
          {
            name: "Recipe Manager",
            description: "Organize and access recipes effortlessly.",
            img: "https://pratikshasportfolio.vercel.app/doctor.png", 
          },
          {
            name: "Doctor Management System",
            description: "Manage schedules, appointments, and records.",
            img: "https://pratikshasportfolio.vercel.app/recepie.png", 
          },
          {
            name: "Random User Generator",
            description: "Fetches and displays random user profiles.",
            img: "https://pratikshasportfolio.vercel.app/todo.png", 
          },
          {
            name: "To-Do List",
            description: "Helps users manage tasks efficiently.",
            img: "https://pratikshasportfolio.vercel.app/recepie.png", 
          },
        ].map((project, index) => (
         <motion.div
  className="project-card bg-white text-black p-6 rounded-lg shadow-lg"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.2 }}
  transition={{ duration: 0.8 }}
  key={index}
>

          <img
            src={project.img}
            alt={project.name}
            style={{ width: '280px', height: 'auto' }}
            className="object-cover rounded-t-lg"
          />

            <h3 className="project-name font-semibold text-xl mt-4">{project.name}</h3>
            <p className="project-description mt-2 text-sm">{project.description}</p>
            <div className="project-buttons mt-4 flex justify-around">
              <button className="github-btn bg-gray-800 text-white px-4 py-2 rounded-md flex items-center">
                <FaGithub className="mr-2" /> GitHub
              </button>
              <button className="live-btn bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
                <FiExternalLink className="mr-2" /> Live
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      </div>

      
    {/* </section> */}
    
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

export default Projects;
