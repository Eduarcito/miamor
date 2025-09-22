import React, { useState } from 'react';
import '../styles/springflowers.css';

const SpringFlowers = () => {
  const [bloomedRoseId, setBloomedRoseId] = useState(null);

  const roses = [
    { id: 1, offsetX: '15%', offsetY: '25%' },
    { id: 2, offsetX: '45%', offsetY: '20%' },
    { id: 3, offsetX: '75%', offsetY: '35%' },
    { id: 4, offsetX: '40%', offsetY: '55%' },
  ];

  const handleRoseClick = (id) => {
    setBloomedRoseId(bloomedRoseId === id ? null : id);
  };

  return (
    <div className="spring-section">
      <h2>Un flores amarillas para ti mi amor </h2>
      {roses.map(rose => (
        <div
          key={rose.id}
          className={`flower ${rose.id === bloomedRoseId ? 'bloomed' : ''}`}
          style={{
            left: `${rose.offsetX}`,
            top: `${rose.offsetY}`
          }}
          onClick={() => handleRoseClick(rose.id)}
        >
          <div className="petal petal1"></div>
          <div className="petal petal2"></div>
          <div className="petal petal3"></div>
          <div className="petal petal4"></div>
          <div className="center"></div>
          <div className="stem"></div>
          <div className="leaf leaf-left"></div>
          <div className="leaf leaf-right"></div>
        </div>
      ))}
    </div>
  );
};

export default SpringFlowers;