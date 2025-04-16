import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiPostman, } from 'react-icons/si';

const skillIcons = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-3xl" /> },
  { name: 'React.js', icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-3xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-white text-3xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600 text-3xl" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-300 text-3xl" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-400 text-3xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500 text-3xl" /> },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-700 via-gray-800 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 -mt-10">
          SKILLS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillIcons.map(({ name, icon }) => (
            <motion.div
              key={name}
              data-aos="zoom-in-up"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-gray-800 text-white border border-blue-600/30 rounded-xl py-6 px-4 shadow-lg hover:shadow-blue-500/50 transition duration-300"
            >
              <div className="flex flex-col items-center justify-center gap-2">
                {icon}
                <p className="text-lg font-semibold">{name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
