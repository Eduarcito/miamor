import React from 'react';
import './App.css';
import PhotoGallery from './componentes/PhotoGallery';
import SpringFlowers from './componentes/SpringFlowers';

const videoMemories = [
  '50.mp4',
  '51.mp4',
  '52.mp4',
  '53.mp4',
  '54.mp4',
  '55.mp4',
  '56.mp4',
];

function App() {
  return (
    <main className="App">
      <section className="hero-section" aria-label="Carta de amor para Elizabeth">
        <div className="floating-hearts" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="hero-content">
          <p className="hero-kicker">Un lugarcito hecho con amor</p>
          <h1>Para Elizabeth, mi persona favorita</h1>
          <p className="hero-copy">
            Cada foto, cada sonrisa y cada recuerdo aquí guardado es una forma
            de decirte lo bonito que es compartir la vida contigo.
          </p>
          <div className="hero-actions">
            <a href="#gallery" className="primary-action">Ver nuestros recuerdos</a>
            <a href="#flowers" className="secondary-action">Abrir tus flores</a>
          </div>
        </div>

        <div className="hero-polaroids" aria-hidden="true">
          <img src={`${process.env.PUBLIC_URL}/imagenes/foto1.jpg`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/imagenes/foto10.jpg`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/imagenes/38.jpeg`} alt="" />
        </div>
      </section>

      <section className="love-note-section">
        <div className="section-heading">
          <p className="eyebrow">Nuestra historia</p>
          <h2>Hay recuerdos que merecen su propio cielo</h2>
        </div>

        <div className="note-grid">
          <article>
            <span>01</span>
            <h3>Tu sonrisa</h3>
            <p>Ese detalle que puede convertir cualquier día normal en algo que vale la pena recordar.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Nuestros momentos</h3>
            <p>Pedacitos de tiempo que se volvieron fotos, videos, risas y recuerdos que no quiero perder.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Mi promesa</h3>
            <p>Seguir eligiéndote con paciencia, ternura, respeto y un amor que siempre quiere crecer.</p>
          </article>
        </div>
      </section>

      <section id="flowers">
        <SpringFlowers />
      </section>

      <PhotoGallery />

      <section className="video-section" aria-labelledby="video-title">
        <div className="section-heading">
          <p className="eyebrow">Recuerdos vivos</p>
          <h2 id="video-title">Momentos que todavía se mueven</h2>
        </div>

        <div className="video-grid">
          <video controls preload="metadata" className="feature-video">
            <source src={`${process.env.PUBLIC_URL}/videos/video1.mp4`} type="video/mp4" />
          </video>

          {videoMemories.map((video) => (
            <video key={video} controls preload="metadata">
              <source src={`${process.env.PUBLIC_URL}/imagenes/${video}`} type="video/mp4" />
            </video>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
