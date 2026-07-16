import React, { useState } from 'react';
import '../styles/springflowers.css';

const roses = [
  { id: 1, offsetX: '16%', offsetY: '34%', delay: '0s' },
  { id: 2, offsetX: '36%', offsetY: '24%', delay: '0.25s' },
  { id: 3, offsetX: '58%', offsetY: '30%', delay: '0.5s' },
  { id: 4, offsetX: '77%', offsetY: '40%', delay: '0.75s' },
  { id: 5, offsetX: '48%', offsetY: '52%', delay: '1s' },
];

const SpringFlowers = () => {
  const [bloomedRoseId, setBloomedRoseId] = useState(null);

  const handleRoseClick = (id) => {
    setBloomedRoseId(bloomedRoseId === id ? null : id);
  };

  return (
    <div className="spring-section">
      <div className="spring-copy">
        <p className="spring-kicker">Flores amarillas</p>
        <h2>Para la mujer que hace florecer todo</h2>
        <p>Toca una flor y mantén vivo este pequeño jardín para ella.</p>
      </div>

      <div className="bouquet" aria-label="Flores amarillas interactivas">
        {roses.map((rose) => (
          <button
            type="button"
            key={rose.id}
            className={`flower ${rose.id === bloomedRoseId ? 'bloomed' : ''}`}
            style={{
              left: rose.offsetX,
              top: rose.offsetY,
              animationDelay: rose.delay,
            }}
            onClick={() => handleRoseClick(rose.id)}
            aria-label={`Hacer florecer la flor ${rose.id}`}
          >
            <span className="petal petal1"></span>
            <span className="petal petal2"></span>
            <span className="petal petal3"></span>
            <span className="petal petal4"></span>
            <span className="petal petal5"></span>
            <span className="center"></span>
            <span className="stem"></span>
            <span className="leaf leaf-left"></span>
            <span className="leaf leaf-right"></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpringFlowers;
