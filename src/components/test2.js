import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa"; // GitHub icon from Font Awesome
import { FiExternalLink } from "react-icons/fi"; // Correct external link icon from Feather icons

const Home = () => {
    return (
      
      <section className="projects text-center py-10 bg-blue-900 text-white" id="projects">
      <h2 className="projects-title text-4xl font-bold mb-4">Projects</h2>
      <div className="projects-grid mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[
          {
            name: "Recipe Manager",
            description: "Organize and access recipes effortlessly.",
            img: "https://pratikshasportfolio.vercel.app/doctor.png", // Example image path
          },
          {
            name: "Doctor Management System",
            description: "Manage schedules, appointments, and records.",
            img: "https://pratikshasportfolio.vercel.app/doctor.png", // Example image path
          },
          {
            name: "Random User Generator",
            description: "Fetches and displays random user profiles.",
            img: "https://pratikshasportfolio.vercel.app/doctor.png", // Example image path
          },
          {
            name: "To-Do List",
            description: "Helps users manage tasks efficiently.",
            img: "https://pratikshasportfolio.vercel.app/doctor.png", // Example image path
          },
        ].map((project, index) => (
          <motion.div
            className="project-card bg-white text-black p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            key={index}
          >
          <img
            src={project.img}
            alt={project.name}
            style={{ width: '300px', height: 'auto' }}
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
    </section>
    






   
 





  );
};

export default Home;
