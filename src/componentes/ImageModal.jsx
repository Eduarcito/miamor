import React, { useEffect } from 'react';
import '../styles/ImageModal.css';

const ImageModal = ({ src, alt, count, currentIndex, onClose, onPrevious, onNext }) => {
  useEffect(() => {
    if (!src) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrevious();
      if (event.key === 'ArrowRight') onNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('modal-open');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [src, onClose, onPrevious, onNext]);

  if (!src) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-shell" onClick={(event) => event.stopPropagation()}>
        <div className="modal-topbar">
          <p>Elizabeth, mi recuerdo favorito para siempre</p>
          <span>{currentIndex + 1} / {count}</span>
        </div>

        <button className="modal-nav previous" onClick={onPrevious} aria-label="Recuerdo anterior">
          ‹
        </button>

        <img src={src} alt={alt} className="modal-image" />

        <button className="modal-nav next" onClick={onNext} aria-label="Siguiente recuerdo">
          ›
        </button>

        <button className="close-button" onClick={onClose} aria-label="Cerrar recuerdo">
          ×
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
