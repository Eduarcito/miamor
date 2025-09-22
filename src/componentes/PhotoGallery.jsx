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
  'foto8.jpg',  // Agrega más nombres aquí
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