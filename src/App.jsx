import React from 'react';
import './App.css';
import PhotoGallery from './componentes/PhotoGallery';
import SpringFlowers from './componentes/SpringFlowers';

function App() {
  return (
    <div className="App">
      <backgroundmusic />
      <header>
        <h1>🌸 Nuestro Jardín de Recuerdos 🌸</h1>
      </header>
      <PhotoGallery />
      <SpringFlowers />
    </div>
  );
}

export default App;