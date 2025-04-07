import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Qtify from '../assets/Qtify.png'
import ExpenseTracker from '../assets/ExpenseTracker.png'
import Authentication from '../assets/Authentication.png'

const projects = [
  {
    name: 'Qtify App',
    desc: 'Developed a responsive song-browsing app for seamless music discovery, showcasing songs across albums and genres with an aesthetic UI.',
    image: Qtify, 
    demoLink: 'https://qtify-react.vercel.app',
  },
  {
    name: 'Expense Tracker App',
    desc: 'Developed a responsive expense tracking app with data visualization (pie charts, bar graphs) and interactive features like notifications.',
    image: ExpenseTracker,
    demoLink: 'https://x-expense-tracker-react.vercel.app',
  },
  {
    name: 'Authentication App',
    desc: 'Designed and implemented a user authentication dashboard for signup and login. Integrated JWT authentication on the backend.',
    image: Authentication,
    demoLink: 'https://authentication-frontend-black.vercel.app',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-700 via-gray-800 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">PROJECTS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="bg-gray-900 bg-opacity-80 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 border border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <p className="text-gray-300 mt-2 mb-4">{project.desc}</p>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-pink-600 text-white font-semibold rounded hover:bg-pink-700 transition"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
