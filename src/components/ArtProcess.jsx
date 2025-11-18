import { useState } from 'react';
import './ArtProcess.css';

const ArtProcess = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const images = {
    lineart: {
      crop: '/img/crop/ken.png',
      full: '/img/full/ken.png'
    },
    flats: {
      crop: '/img/crop/ken_copy.png',
      full: '/img/full/ken_copy.png'
    },
    rendered: {
      crop: '/img/crop/ken_copy_2.png',
      full: '/img/full/ken_copy_2.png'
    }
  };

  const handleImageClick = (imageType) => {
    setExpandedImage(imageType);
  };

  const closeExpanded = () => {
    setExpandedImage(null);
  };

  return (
    <div className="art-process-container">
      {/* Separator Line */}
      <div className="art-separator"></div>

      {/* Images Grid - Using cropped images initially */}
      <div className="art-grid">
        {Object.entries(images).map(([type, src]) => (
          <div key={type} className="art-column">
            <div
              className="art-image-container"
              onClick={() => handleImageClick(type)}
            >
              <img
                src={src.crop}
                alt={type}
                className="art-image-cropped"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Separator Line */}
      <div className="art-separator"></div>

      {/* Modal for full image */}
      {expandedImage && (
        <div 
          className="art-modal-overlay"
          onClick={closeExpanded}
        >
          <div className="art-modal-content">
            <button
              className="art-modal-close"
              onClick={closeExpanded}
            >
              ✕
            </button>
            <div className="art-modal-image-container">
              <img
                src={images[expandedImage].full}
                alt={`Expanded ${expandedImage}`}
                className="art-modal-image"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtProcess;