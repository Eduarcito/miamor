import React, { useEffect, useState } from 'react';
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

const anniversaryDate = new Date('2026-08-07T00:00:00-06:00');

const getCountdown = () => {
  const distance = anniversaryDate.getTime() - Date.now();

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isToday: true };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
    isToday: false,
  };
};

const anniversaryPromises = [
  'Escucharte con paciencia incluso en los días difíciles.',
  'Cuidar los pequeños detalles que te hacen sonreír.',
  'Recordarte lo importante que eres para mí.',
  'Seguir construyendo confianza, respeto y ternura.',
  'Celebrar tus logros como si también fueran míos.',
  'Hacerte sentir elegida, amada y acompañada.',
  'Guardar nuestros recuerdos con el cariño que merecen.',
  'Aprender de mis errores y amarte mejor cada día.',
  'Buscar momentos bonitos aunque el día sea sencillo.',
  'Seguir soñando contigo, paso a paso.',
];

const loveReasons = [
  'Porque tu sonrisa se siente como hogar.',
  'Porque haces inolvidables los días sencillos.',
  'Porque contigo la vida se siente más bonita.',
  'Porque amo la forma en que existes en mi mundo.',
  'Porque cada recuerdo contigo se vuelve especial.',
  'Porque eres mi lugar favorito para volver.',
];

const datePlans = [
  'Una cena tranquila y una foto nueva para esta página.',
  'Ver una película juntos con snacks y abrazos.',
  'Escribirnos una carta y leerla el 7 de agosto.',
  'Elegir una canción que represente estos 10 meses.',
  'Salir a caminar y hablar de nuestros próximos sueños.',
  'Recrear una foto bonita de nuestros primeros recuerdos.',
];

const openWhenNotes = [
  {
    title: 'Ábreme cuando me extrañes',
    text: 'Recuerda que estoy pensando en ti y que siempre hay un pedacito de mí queriendo abrazarte.',
  },
  {
    title: 'Ábreme cuando sonrías',
    text: 'Esa sonrisa tuya es una de mis cosas favoritas en este mundo. Cuídala, porque ilumina todo.',
  },
  {
    title: 'Ábreme el 7 de agosto',
    text: 'Felices 10 meses, mi amor. Gracias por existir conmigo de una forma tan bonita.',
  },
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
  const [countdown, setCountdown] = useState(getCountdown);
  const [selectedPlan, setSelectedPlan] = useState(datePlans[0]);
  const [openNote, setOpenNote] = useState(openWhenNotes[0]);

  useEffect(() => {
    const timer = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(timer);
  }, []);

  const chooseDatePlan = () => {
    const currentIndex = datePlans.indexOf(selectedPlan);
    const nextIndex = (currentIndex + 1) % datePlans.length;
    setSelectedPlan(datePlans[nextIndex]);
  };

  return (
    <main className="App">
      <nav className="love-nav" aria-label="Navegación de recuerdos">
        <a href="#anniversary">10 meses</a>
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
            <a href="#anniversary" className="primary-action">Ver sorpresa de 10 meses</a>
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

      <section className="anniversary-section" id="anniversary" aria-labelledby="anniversary-title">
        <div className="anniversary-hero">
          <div>
            <p className="eyebrow">7 de agosto de 2026</p>
            <h2 id="anniversary-title">10 meses contigo</h2>
            <p>
              Una cuenta regresiva para celebrar todo lo que hemos vivido,
              todo lo que somos y todo lo bonito que todavía nos espera.
            </p>
          </div>

          <div className="countdown-panel" aria-label="Cuenta regresiva para el aniversario">
            {countdown.isToday ? (
              <strong>Hoy celebramos nuestros 10 meses</strong>
            ) : (
              <>
                <div>
                  <strong>{countdown.days}</strong>
                  <span>Días</span>
                </div>
                <div>
                  <strong>{countdown.hours}</strong>
                  <span>Horas</span>
                </div>
                <div>
                  <strong>{countdown.minutes}</strong>
                  <span>Min</span>
                </div>
                <div>
                  <strong>{countdown.seconds}</strong>
                  <span>Seg</span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="anniversary-grid">
          <article className="month-card main-memory">
            <span>10</span>
            <h3>Meses de nosotros</h3>
            <p>
              Diez meses de mirarte con cariño, aprender de nosotros y guardar
              cada recuerdo como algo que vale muchísimo.
            </p>
          </article>

          <article className="date-wheel-card">
            <p className="card-label">Plan sorpresa</p>
            <h3>Rueda de cita</h3>
            <p>{selectedPlan}</p>
            <button type="button" onClick={chooseDatePlan}>Girar plan</button>
          </article>

          <article className="open-when-card">
            <p className="card-label">Cartitas</p>
            <h3>{openNote.title}</h3>
            <p>{openNote.text}</p>
            <div className="note-buttons">
              {openWhenNotes.map((note) => (
                <button
                  key={note.title}
                  type="button"
                  className={openNote.title === note.title ? 'active' : ''}
                  onClick={() => setOpenNote(note)}
                >
                  {note.title.replace('Ábreme ', '')}
                </button>
              ))}
            </div>
          </article>
        </div>

        <div className="promise-section">
          <div className="section-heading compact">
            <p className="eyebrow">Diez promesas</p>
            <h2>Una por cada mes contigo</h2>
          </div>

          <div className="promise-grid">
            {anniversaryPromises.map((promise, index) => (
              <article key={promise}>
                <span>{index + 1}</span>
                <p>{promise}</p>
              </article>
            ))}
          </div>
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
