import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { HashLink as Link } from 'react-router-hash-link';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => setIsOpen(!isOpen);

    const commonSpringProps = {
        from: { opacity: 0, transform: 'translateY(-20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 500 },
    };

    const nameSpring = useSpring({
        from: { opacity: 0, transform: 'translateX(-20px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { duration: 500 },
    });

    const linkSpring = useSpring(commonSpringProps);

    const navbarStyle = {
        backgroundColor: '#001f3f',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
            <animated.a className="navbar-brand" style={{ ...nameSpring, paddingLeft: '15px' }}>AJ</animated.a>
            <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <Link to="#home" className="nav-link" onClick={toggleNavbar}>
                            <animated.span style={{ ...linkSpring, color: '#fff' }}>Home</animated.span>
                        </Link>
                    </li>
                            <li className="nav-item">
                                <Link to="#skills" className="nav-link" onClick={toggleNavbar}>
                                    <animated.span style={{ ...linkSpring, color: '#fff' }}>Skills</animated.span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#projects" className="nav-link" onClick={toggleNavbar}>
                                    <animated.span style={{ ...linkSpring, color: '#fff' }}>Projects</animated.span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#social" className="nav-link" onClick={toggleNavbar}>
                                    <animated.span style={{ ...linkSpring, color: '#fff' }}>Socials</animated.span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#contactme" className="nav-link" onClick={toggleNavbar}>
                                    <animated.span style={{ ...linkSpring, color: '#fff' }}>Contact Me</animated.span>
                                </Link>
                            </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
