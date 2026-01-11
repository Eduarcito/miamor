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
  'foto21.jpeg',
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
  'foto32.jpeg',
  '2.jpeg',
  '3.jpeg',
  '4.jpeg',
  '5.jpeg',
  '6.jpeg',
  '7.jpeg',
  '8.jpeg',
  '9.jpeg',
  '10.jpeg',
  '11.jpeg',
  '12.jpeg',
  '13.jpeg',
  '14.jpeg',
  '15.jpeg',
  '16.jpeg',
  '17.jpeg',
  '18.jpeg',
  '19.jpeg',
  '20.jpeg',
  '21.jpeg',
  '22.jpeg',
  '23.jpeg',
  '24.jpeg',
  '25.jpeg',
  '26.jpeg',
  '27.jpeg',
  '28.jpeg',
  '29.jpeg',
  '30.jpeg',
  '31.jpeg',
  '32.jpeg',
  '33.jpeg',
  '34.jpeg',
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
  '50.mp4',
  '51.mp4',
  '52.mp4',
  '53.mp4',
  '54.mp4',
  '55.mp4',
  '56.mp4',
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
