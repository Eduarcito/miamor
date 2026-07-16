import React, { useState } from 'react';
import '../styles/PhotoGallery.css';
import ImageModal from './ImageModal';

const imageList = [
  'foto1.jpg',
  'foto2.jpg',
  'foto3.jpg',
  'foto4.jpg',
  'foto5.jpg',
  'foto6.jpg',
  'foto9.jpg',
  'foto10.jpg',
  'foto11.jpg',
  'foto12.jpg',
  'foto13.jpg',
  'foto14.jpg',
  'foto15.jpg',
  'foto16.jpg',
  'foto17.jpg',
  'foto19.jpg',
  'foto20.jpg',
  'foto22.jpeg',
  'foto23.jpeg',
  'foto24.jpeg',
  'foto25.jpeg',
  'foto26.jpeg',
  'foto27.jpeg',
  'foto28.jpeg',
  'foto29.jpeg',
  'foto30.jpeg',
  'foto31.jpeg',
  '2.jpeg',
  '5.jpeg',
  '6.jpeg',
  '7.jpeg',
  '8.jpeg',
  '9.jpeg',
  '10.jpeg',
  '15.jpeg',
  '17.jpeg',
  '18.jpeg',
  '20.jpeg',
  '23.jpeg',
  '24.jpeg',
  '25.jpeg',
  '26.jpeg',
  '27.jpeg',
  '35.jpeg',
  '36.jpeg',
  '37.jpeg',
  '38.jpeg',
  '39.jpeg',
  '40.jpeg',
  '41.jpeg',
  '42.jpeg',
  '43.jpeg',
  '44.jpeg',
  '45.jpeg',
  '46.jpeg',
  '47.jpeg',
  '48.jpeg',
  '49.jpeg',
  '57.jpeg',
  '58.jpeg',
  '59.jpeg',
  '60.jpeg',
  '61.jpeg',
  '62.jpeg',
  '63.jpeg',
  '64.jpeg',
  '65.jpeg',
];

const PhotoGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedImage = selectedIndex === null
    ? null
    : `${process.env.PUBLIC_URL}/imagenes/${imageList[selectedIndex]}`;

  const showPrevious = () => {
    setSelectedIndex((currentIndex) => (
      currentIndex === 0 ? imageList.length - 1 : currentIndex - 1
    ));
  };

  const showNext = () => {
    setSelectedIndex((currentIndex) => (
      currentIndex === imageList.length - 1 ? 0 : currentIndex + 1
    ));
  };

  return (
    <section className="gallery-section" id="gallery" aria-labelledby="gallery-title">
      <div className="gallery-heading">
        <p className="gallery-kicker">Jardín de recuerdos</p>
        <h2 id="gallery-title">Elizabeth, el amor de mi vida</h2>
        <p>
          Una colección de pequeños momentos que se volvieron mis recuerdos favoritos.
          Toca cualquier foto para verla más cerca.
        </p>
      </div>

      <div className="gallery-meta" aria-label="Gallery summary">
        <span>{imageList.length} recuerdos</span>
        <span>Fotos</span>
        <span>Hecho con amor</span>
      </div>

      <div className="gallery">
        {imageList.map((img, index) => (
          <button
            className="gallery-card fade-in"
            key={img}
            onClick={() => setSelectedIndex(index)}
            style={{ animationDelay: `${Math.min(index * 0.025, 0.7)}s` }}
            aria-label={`Abrir recuerdo ${index + 1}`}
          >
            <img
              src={`${process.env.PUBLIC_URL}/imagenes/${img}`}
              alt={`Recuerdo con Elizabeth ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>

      <ImageModal
        src={selectedImage}
        alt={selectedIndex === null ? '' : `Recuerdo con Elizabeth ${selectedIndex + 1}`}
        count={imageList.length}
        currentIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onPrevious={showPrevious}
        onNext={showNext}
      />
    </section>
  );
};

export default PhotoGallery;
