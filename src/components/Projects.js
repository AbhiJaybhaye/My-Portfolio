import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Authentication from '../assets/Authentication.png'
import ExpenseTracker from '../assets/ExpenseTracker.png'
import Qtify from '../assets/Qtify.png'

const Projects = () => {
  const fadeInProjects = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const [hoveredProject, setHoveredProject] = useState(null);

  const springProps = useSpring({
    transform: hoveredProject ? 'scale(1.05)' : 'scale(1)',
    config: { tension: 150, friction: 12 },
  });

  const projects = [
    { id: 1, live:'https://qtify-react.vercel.app', img: Qtify, title: 'Qtify App', desc: 'Developed a responsive song-browsing app for seamless music discovery, showcasing songs across albums and genres with an aesthetic UI.' },
    { id: 2, live:'https://x-expense-tracker-react.vercel.app', img: ExpenseTracker, title: 'Expense Tracker App', desc: 'Developed a responsive expense tracking app with data visualization (pie charts, bar graphs) and interactive features like notifications and modal pop-ups.' },
    { id: 3, live:'https://authentication-frontend-black.vercel.app', img: Authentication, title: 'Authentication App', desc: 'Designed and implemented a user authentication dashboard for signup and login. Integrated JWT authentication on the backend.' }
  ];

  const handleMouseEnter = (project) => {
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <animated.section className="trial-block shadow3 text-center" id="projects" style={fadeInProjects}>
      <h2 className="text-center badge badge-info mb-5"><h4>Projects</h4></h2>
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-3" key={project.id}>
              <animated.div
                className="card mb-4"
                onMouseEnter={() => handleMouseEnter(project)}
                onMouseLeave={handleMouseLeave}
                style={{ ...springProps, width: '80%', margin: '0 auto' }}
              >
                <img
                  src={project.img}
                  className="card-img-top"
                  alt={project.title}
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.desc}</p>
                  <a href={project.live}><button className="btn btn-link">Live Demo</button></a>
                </div>
              </animated.div>
            </div>
          ))}
        </div>
      </div>
    </animated.section>
  );
};

export default Projects;
