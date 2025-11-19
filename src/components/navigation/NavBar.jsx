// components/NavBar.jsx
import { useState } from 'react';

const NavBar = ({ currentSection, setCurrentSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setCurrentSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">carlodee</h1> {/* Changed to white */}
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex">
                <div className="ml-10 flex items-center gap-6">
                <button
                    onClick={() => handleNavClick('home')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === 'home'
                        ? 'text-blue-400 bg-blue-900/50'  // Updated for dark theme
                        : 'text-gray-300 hover:text-blue-400 hover:bg-slate-800'  // Updated for dark theme
                    }`}
                >
                    Home
                </button>
                <button
                    onClick={() => handleNavClick('art')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === 'art'
                        ? 'text-blue-400 bg-blue-900/50'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-slate-800'
                    }`}
                >
                    Art Gallery
                </button>
                <button
                    onClick={() => handleNavClick('about')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === 'about'
                        ? 'text-blue-400 bg-blue-900/50'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-slate-800'
                    }`}
                >
                    About
                </button>
                <button
                    onClick={() => handleNavClick('commission')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === 'commission'
                        ? 'text-blue-400 bg-blue-900/50'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-slate-800'
                    }`}
                >
                    Commission
                </button>
                <button
                    onClick={() => handleNavClick('contact')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === 'contact'
                        ? 'text-blue-400 bg-blue-900/50'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-slate-800'
                    }`}
                >
                    Contact
                </button>
                </div>
            </div>

            {/* Mobile menu button - also update colors for dark theme */}
            <div className="md:hidden relative">
                <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-blue-400 p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle mobile menu"
                >
                {/* Burger Icon */}
                <div className="w-6 h-6 flex flex-col justify-between">
                    <span className={`w-full h-0.5 bg-gray-300 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-gray-300 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-gray-300 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                </div>
                </button>

                {/* Dropdown Menu - update for dark theme */}
                {isMobileMenuOpen && (
                <div className="absolute right-0 top-12 w-48 bg-slate-800/95 backdrop-blur-md rounded-md shadow-lg border border-slate-700 py-2 z-50">
                    <button
                    onClick={() => handleNavClick('home')}
                    className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors ${
                        currentSection === 'home'
                        ? 'text-blue-400 bg-blue-900/50'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-slate-700'
                    }`}
                    >
                    Home
                    </button>
                    {/* Repeat for other buttons with same styling pattern */}
                </div>
                )}
            </div>
            </div>
        </div>
        </nav>
  );
};

export default NavBar;