import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Social from './components/Social';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Outlet />
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <Header />
      <Skills />
      <Projects />
      <Social />
      <ContactMe/>
    </div>
  );
}

export default App;
