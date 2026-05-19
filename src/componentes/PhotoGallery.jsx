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
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(`${process.env.PUBLIC_URL}/imagenes/${img}`);
  };

  return (
    <div className="gallery-section">
      <h2>❤️‍🩹 Mi mujer ❤️‍🩹</h2>
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
