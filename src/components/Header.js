import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  return (
    <header className="centered-content pt-1" id='home'>
      <div className="container mt100">
        <h1 className="display-4">Hi, I'm Abhijeet Jaybhaye</h1>
        <h2 className='mt-1 mb-3'>MERN Stack Developer</h2>
        <p className="lead">Innovative Full Stack Developer passionate about building dynamic, high-performance web applications.
                Skilled in React.js, Node.js, Express.js, and MongoDB, specializing in scalable, responsive user experiences.
                With a keen eye for detail and a problem-solving mindset, I craft clean, efficient code for enhanced functionality.
                Constantly exploring new technologies.</p>
      </div>
    </header>
  );
};

export default Header;
