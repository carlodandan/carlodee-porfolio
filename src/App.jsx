// App.jsx
import { useState } from 'react';
import ArtGallery from './components/gallery/ArtGallery';
import Home from './components/home/Home';
import About from './components/about/About';
import Commission from './components/commission/Commission';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'art':
        return <ArtGallery />;
      case 'about':
        return <About />;
      case 'commission':
        return <Commission />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">carlodee</h1>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => setCurrentSection('home')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === 'home'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => setCurrentSection('art')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === 'art'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Art Gallery
                </button>
                <button
                  onClick={() => setCurrentSection('about')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === 'about'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setCurrentSection('commission')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === 'commission'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Commission
                </button>
                <button
                  onClick={() => setCurrentSection('contact')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === 'contact'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setCurrentSection('home')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;