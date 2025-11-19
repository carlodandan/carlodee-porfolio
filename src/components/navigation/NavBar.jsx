// components/NavBar.jsx
import { useState } from 'react';

const NavBar = ({ currentSection, setCurrentSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setCurrentSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">carlodee</h1>
          </div>
          
          {/* Navigation Links - Hidden on mobile, visible on medium screens and up */}
          <div className="hidden md:flex">
            <div className="ml-10 flex items-center gap-6">
              <button
                onClick={() => handleNavClick('home')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSection === 'home'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('art')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSection === 'art'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Art Gallery
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSection === 'about'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('commission')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSection === 'commission'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Commission
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSection === 'contact'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button and dropdown - Only show on mobile */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle mobile menu"
            >
              {/* Burger Icon */}
              <div className="w-6 h-6 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>

            {/* Dropdown Menu */}
            {isMobileMenuOpen && (
              <div className="absolute right-0 top-12 w-48 bg-white/95 backdrop-blur-md rounded-md shadow-lg border border-gray-200 py-2 z-50">
                <button
                  onClick={() => handleNavClick('home')}
                  className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors ${
                    currentSection === 'home'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick('art')}
                  className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors ${
                    currentSection === 'art'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Art Gallery
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors ${
                    currentSection === 'about'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => handleNavClick('commission')}
                  className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors ${
                    currentSection === 'commission'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Commission
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors ${
                    currentSection === 'contact'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Contact
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;