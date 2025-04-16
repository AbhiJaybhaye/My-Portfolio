import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'hover.css/css/hover.css';
import { FaGithub, FaPlay } from 'react-icons/fa'; // Importing relevant icons
import { AiOutlineCode } from 'react-icons/ai'; // Importing the Source Code icon
import Qtify from '../assets/Qtify.png';
import ExpenseTracker from '../assets/ExpenseTracker.png';
import Authentication from '../assets/Authentication.png';

const projects = [
  {
    name: 'Qtify App',
    desc: 'Developed a responsive song-browsing app for seamless music discovery, showcasing songs across albums and genres with an aesthetic UI.',
    image: Qtify,
    demoLink: 'https://qtify-react.vercel.app',
    sourceCodeLink: 'https://github.com/AbhiJaybhaye/qtify_react.git'
  },
  {
    name: 'Expense Tracker App',
    desc: 'Developed a responsive expense tracking app with data visualization (pie charts, bar graphs) and interactive features like notifications.',
    image: ExpenseTracker,
    demoLink: 'https://x-expense-tracker-react.vercel.app',
    sourceCodeLink: 'https://github.com/AbhiJaybhaye/qtify_react.git'
  },
  {
    name: 'Authentication App',
    desc: 'Designed and implemented a user authentication dashboard for signup and login. Integrated JWT authentication on the backend.',
    image: Authentication,
    demoLink: 'https://authentication-frontend-black.vercel.app',
    sourceCodeLink: 'https://github.com/AbhiJaybhaye/Authentication_Frontend.git'
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="projects"
      className="py-20 min-h-screen bg-gradient-to-br from-gray-700 via-gray-800 to-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 -mt-10">PROJECTS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              data-aos="zoom-in-up"
              className="bg-gray-900 bg-opacity-80 rounded-2xl overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 border border-gray-700 relative"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold text-white transition-all duration-300 hover:text-pink-600">
                  {project.name}
                </h3>
                <p className="text-gray-300 mt-2 mb-4">{project.desc}</p>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block p-3 bg-pink-600 text-white rounded hover:bg-pink-700 transition-all duration-300"
                  >
                    <FaPlay size={20} />
                  </a>
                </div>
              </div>

              <a
                href={project.sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 right-5 bg-pink-600 text-white p-2.5 rounded hover:bg-pink-700 transition-all duration-300"
              >
                <AiOutlineCode size={24} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
