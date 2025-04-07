import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const skills = [
  'HTML5',
  'CSS',
  'JavaScript (ES6)',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Git / GitHub',
  'Postman',
  'TailwindCSS',
  'Bootstrap',
  'Material UI',
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 min-h-screen bg-gradient-to-br from-gray-700 via-gray-800 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 animate-fade-in">
          SKILLS
        </h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={item}
              className="bg-gray-900 hover:bg-gray-800 hover:shadow-pink-500/40 shadow-lg text-white p-4 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="text-lg font-medium">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
