import React from 'react';
import { useSpring, animated,} from 'react-spring';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
  const fadeInSkills = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const fluidProps = useSpring({
    from: { width: '0%' },
    to: async (next, cancel) => {
      while (true) {
        await next({ width: '50%' });
        await next({ width: '0%' });
      }
    },
    config: { duration: 2000, loop: true },
  });

  return (
    <animated.section className="trial-block shadow3 text-center" id="skills" style={fadeInSkills}>
      <h2 className="text-center badge badge-info mb-5"><h4>Skills</h4></h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <animated.div className="skill-item" style={fadeInSkills}>
              <span className="m-2 badge text-bg-dark">HTML</span>
              <div className="progress">
                <animated.div className="progress-bar" style={fluidProps}></animated.div>
              </div>
            </animated.div>
          </div>
          <div className="col-lg-4">
            <animated.div className="skill-item" style={fadeInSkills}>
              <span className="m-2 badge text-bg-dark">CSS</span>
              <div className="progress">
                <animated.div className="progress-bar" style={fluidProps}></animated.div>
              </div>
            </animated.div>
          </div>
          <div className="col-lg-4">
            <animated.div className="skill-item" style={fadeInSkills}>
              <span className="m-2 badge text-bg-dark">JavaScript</span>
              <div className="progress">
                <animated.div className="progress-bar" style={fluidProps}></animated.div>
              </div>
            </animated.div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <animated.div className="skill-item" style={fadeInSkills}>
              <span className="m-2 badge text-bg-dark">React.js</span>
              <div className="progress">
                <animated.div className="progress-bar" style={fluidProps}></animated.div>
              </div>
            </animated.div>
          </div>
          <div className="col-lg-4">
            <animated.div className="skill-item" style={fadeInSkills}>
              <span className="m-2 badge text-bg-dark">Node.js</span>
              <div className="progress">
                <animated.div className="progress-bar" style={fluidProps}></animated.div>
              </div>
            </animated.div>
          </div>
          <div className="col-lg-4">
            <animated.div className="skill-item" style={fadeInSkills}>
              <span className="m-2 badge text-bg-dark">Express.js</span>
              <div className="progress">
                <animated.div className="progress-bar" style={fluidProps}></animated.div>
              </div>
            </animated.div>
          </div>
          <div className="col-lg-4">
            <animated.div className="skill-item" style={fadeInSkills}>
              <span className="m-2 badge text-bg-dark">MongoDB</span>
              <div className="progress">
                <animated.div className="progress-bar" style={fluidProps}></animated.div>
              </div>
            </animated.div>
          </div>
          <div className="col-lg-4">
            <animated.div className="skill-item" style={fadeInSkills}>
              <span className="m-2 badge text-bg-dark">Git / Github</span>
              <div className="progress">
                <animated.div className="progress-bar" style={fluidProps}></animated.div>
              </div>
            </animated.div>
          </div>
          <div className="col-lg-4">
            <animated.div className="skill-item" style={fadeInSkills}>
              <span className="m-2 badge text-bg-dark">Postman</span>
              <div className="progress">
                <animated.div className="progress-bar" style={fluidProps}></animated.div>
              </div>
            </animated.div>
          </div>
          <div className="col-lg-4">
            <animated.div className="skill-item" style={fadeInSkills}>
              <span className="m-2 badge text-bg-dark">Tailwind CSS</span>
              <div className="progress">
                <animated.div className="progress-bar" style={fluidProps}></animated.div>
              </div>
            </animated.div>
          </div>
          <div className="col-lg-4">
            <animated.div className="skill-item" style={fadeInSkills}>
              <span className="m-2 badge text-bg-dark">Bootstrap</span>
              <div className="progress">
                <animated.div className="progress-bar" style={fluidProps}></animated.div>
              </div>
            </animated.div>
          </div>
          <div className="col-lg-4">
            <animated.div className="skill-item" style={fadeInSkills}>
              <span className="m-2 badge text-bg-dark">Material UI</span>
              <div className="progress">
                <animated.div className="progress-bar" style={fluidProps}></animated.div>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </animated.section>
  );
};

export default Skills;
