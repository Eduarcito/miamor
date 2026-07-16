import React, { useState } from 'react';
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

const loveReasons = [
  'Porque tu sonrisa se siente como hogar.',
  'Porque haces inolvidables los días sencillos.',
  'Porque contigo la vida se siente más bonita.',
  'Porque amo la forma en que existes en mi mundo.',
  'Porque cada recuerdo contigo se vuelve especial.',
  'Porque eres mi lugar favorito para volver.',
];

const storyMoments = [
  {
    title: 'El inicio',
    text: 'Ese momento en que empezaste a convertirte en alguien más que especial.',
  },
  {
    title: 'Los recuerdos',
    text: 'Fotos, videos, risas, planes pequeños y días que se quedaron en mi corazón.',
  },
  {
    title: 'El ahora',
    text: 'Este capítulo donde te sigo eligiendo con más amor, más calma y más certeza.',
  },
  {
    title: 'El futuro',
    text: 'Más lugares, más sueños, más abrazos y más razones para seguir construyendo lo nuestro.',
  },
];

function App() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <main className="App">
      <nav className="love-nav" aria-label="Navegación de recuerdos">
        <a href="#story">Historia</a>
        <a href="#flowers">Flores</a>
        <a href="#gallery">Fotos</a>
        <a href="#videos">Videos</a>
      </nav>

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
            <button className="secondary-action" type="button" onClick={() => setIsLetterOpen(true)}>
              Leer tu carta
            </button>
          </div>
        </div>

        <div className="hero-polaroids" aria-hidden="true">
          <img src={`${process.env.PUBLIC_URL}/imagenes/foto1.jpg`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/imagenes/foto10.jpg`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/imagenes/38.jpeg`} alt="" />
        </div>
      </section>

      <section className="love-note-section" id="story">
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

      <section className="reasons-section" aria-labelledby="reasons-title">
        <div className="section-heading">
          <p className="eyebrow">Razones pequeñitas</p>
          <h2 id="reasons-title">Algunas razones por las que te amo</h2>
        </div>

        <div className="reasons-grid">
          {loveReasons.map((reason, index) => (
            <article key={reason} className="reason-card">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{reason}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-section" aria-labelledby="timeline-title">
        <div className="section-heading">
          <p className="eyebrow">Nuestro camino</p>
          <h2 id="timeline-title">Un amor que se vuelve más bonito con el tiempo</h2>
        </div>

        <div className="timeline">
          {storyMoments.map((moment) => (
            <article key={moment.title}>
              <div className="timeline-dot" aria-hidden="true"></div>
              <h3>{moment.title}</h3>
              <p>{moment.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="flowers">
        <SpringFlowers />
      </section>

      <PhotoGallery />

      <section className="video-section" id="videos" aria-labelledby="video-title">
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

      <section className="forever-section">
        <p>Hecho para ti, Elizabeth</p>
        <h2>Esta página puede seguir creciendo, igual que todo lo que siento por ti.</h2>
      </section>

      {isLetterOpen && (
        <div className="letter-overlay" role="dialog" aria-modal="true" aria-labelledby="letter-title">
          <div className="letter-card">
            <button className="letter-close" type="button" onClick={() => setIsLetterOpen(false)} aria-label="Cerrar carta">
              ×
            </button>
            <p className="letter-kicker">Para ti</p>
            <h2 id="letter-title">Mi amor, Elizabeth</h2>
            <p>
              Hice este lugar para guardar una parte de lo que siento por ti.
              No alcanza para decirlo todo, pero sí para recordarte que eres
              muy importante para mí.
            </p>
            <p>
              Gracias por tu sonrisa, por los momentos bonitos, por cada recuerdo
              y por hacer que mi vida tenga detalles que quiero cuidar siempre.
            </p>
            <strong>Te amo, hoy y en todos los días que vienen.</strong>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
