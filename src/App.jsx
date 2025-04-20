import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="relative min-h-screen min-w-screen">
      <Navbar setActiveSection={setActiveSection} />
      <main className="pt-16 pb-20 transition-opacity duration-300 relative">
        {renderSection()}
        <Footer />
      </main>
    </div>
  );
}

export default App;