import React, { useState} from 'react';

function Navbar({ setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  const handleDownloadResume = () => {
    const userConfirmed = window.confirm("Do you want to download the resume?");
    if (userConfirmed) {
      const link = document.createElement("a");
      link.href = "/Resume.pdf";
      link.download = "Abhijeet_Jaybhaye_Resume.pdf";
      link.click();
    }
  };

  return (
    <nav className="fixed w-full bg-gradient-to-br from-gray-700 via-gray-800 to-black shadow-md z-10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl text-white">AJ</span>
          </div>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleLinkClick('about')}
              className="text-white hover:text-blue-500 transition-colors duration-200 hover:cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleLinkClick('skills')}
              className="text-white hover:text-blue-500 transition-colors duration-200 hover:cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => handleLinkClick('projects')}
              className="text-white hover:text-blue-500 transition-colors duration-200 hover:cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className="text-white hover:text-blue-500 transition-colors duration-200 hover:cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={handleDownloadResume}
              className="ml-2 px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 hover:cursor-pointer"
            >
              Resume
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button onClick={() => handleLinkClick('about')} className="block text-white hover:text-blue-500 p-2">
            About
          </button>
          <button onClick={() => handleLinkClick('skills')} className="block text-white hover:text-blue-500 p-2">
            Skills
          </button>
          <button onClick={() => handleLinkClick('projects')} className="block text-white hover:text-blue-500 p-2">
            Projects
          </button>
          <button onClick={() => handleLinkClick('contact')} className="block text-white hover:text-blue-500 p-2">
            Contact
          </button>
          <button
            onClick={handleDownloadResume}
            className="block w-full mt-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2 transition"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
