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
  'foto7.jpg',
  'foto8.jpg',
  'foto9.jpg',
  'foto10.jpg',
  'foto11.jpg',
  'foto12.jpg',
  'foto13.jpg',
  'foto14.jpg',
  'foto15.jpg',
  'foto16.jpg',
  'foto17.jpg',
  'foto18.jpg',
  'foto19.jpg',
  'foto20.jpg',
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(`${process.env.PUBLIC_URL}/imagenes/${img}`);
  };

  return (
    <div className="gallery-section">
      <h2>Nuestras Fotos</h2>
      <div className="gallery">
        {imageList.map((img, i) => (
          <img
            key={i}
            src={`${process.env.PUBLIC_URL}/imagenes/${img}`}
            alt={`foto-${i}`}
            className="fade-in"
            onClick={() => handleImageClick(img)}
          />
        ))}
      </div>

      {/* Modal para pantalla completa */}
      <ImageModal
        src={selectedImage}
        alt="Foto ampliada"
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default PhotoGallery;