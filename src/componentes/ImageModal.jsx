import React from 'react';
import '../styles/ImageModal.css';

const ImageModal = ({ src, alt, onClose }) => {
  if (!src) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✿ Cerrar</button>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default ImageModal;