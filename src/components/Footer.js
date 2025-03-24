import React from 'react';
import { Navbar as BootstrapNavbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const brandStyle = {
    color: '#007bff', 
  };

  const footerStyle = {
    bottom: 0,
    left: 0,
    width: '100%',
    textAlign: 'center',
    padding: '10px 0',
  };

  const copyrightStyle = {
    color: 'black',
    fontSize: '14px', 
    marginTop: '5px', 
  };

  return (
    <BootstrapNavbar style={footerStyle} variant="light" className="py-2">
      <Container className="d-flex flex-column align-items-center">
        <BootstrapNavbar.Brand href="#home" style={brandStyle} className='brandStyle'>My Portfolio</BootstrapNavbar.Brand>
        <div style={copyrightStyle}>
          &copy; {new Date().getFullYear()} Copyrights Reserved <br/> Created by Abhi08.official
        </div>
      </Container>
    </BootstrapNavbar>
  );
};

export default Footer;
