import './Home.css';

const Home = ({ onNavigate }) => {
  return (
    <section className="home-section flex items-center justify-center px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto text-center w-full">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="home-title text-5xl sm:text-6xl lg:text-7xl font-bold">
            Carlo Dee
          </h1>
          <p className="home-subtitle text-xl sm:text-2xl text-gray-300 max-w-2xl">
            Anime-style Illustrator & Digital Artist
          </p>
          <p className="home-description text-lg text-gray-400 max-w-3xl">
            Bringing characters to life through vibrant colors, expressive emotions, 
            and the unique charm of anime-inspired artistry.
          </p>
          
          {/* CTA Buttons */}
          <div className="home-cta-container flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={() => onNavigate('art')}
              className="home-cta-primary bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View My Art Gallery
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="home-cta-secondary border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:border-blue-300 hover:text-blue-300 transition-all duration-300 bg-transparent hover:bg-blue-900/20 hover:-translate-y-1"
            >
              Learn About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;