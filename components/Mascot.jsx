'use client';

import { useEffect, useRef, useState } from 'react';

const MESSAGES = {
  idle: 'Cuida cada rollo que sale de la cocina. Hazlo reaccionar.',
  hi: '¡Hola! Qué gusto verte por aquí.',
  pet: 'Así se pone cuando lo consienten.',
  feed: '¡Ñam! Nada lo emociona más que un rollo recién hecho.',
  wink: 'Te guarda un lugar en la terraza.',
};

const Heart = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 21s-7.5-4.7-10-9.2C.3 8.6 1.9 4.5 5.8 4.5c2.2 0 3.8 1.2 4.7 2.6l1.5 2.2 1.5-2.2c.9-1.4 2.5-2.6 4.7-2.6 3.9 0 5.5 4.1 3.8 7.3C19.5 16.3 12 21 12 21z" /></svg>
);

/**
 * Hoshi con cara animada. El aro con el nombre es el logo real; la cara de encima está dibujada
 * por partes (ojos, boca, mejillas) para que pueda parpadear, sonreír, guiñar y comer.
 */
export default function Mascot() {
  const [mood, setMood] = useState('idle');
  const [run, setRun] = useState(0); // cambia en cada toque para reiniciar la animación
  const timer = useRef(null);

  function react(next) {
    clearTimeout(timer.current);
    setMood(next);
    setRun((n) => n + 1);
    timer.current = setTimeout(() => setMood('idle'), 2600);
  }
  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <div className="mascot">
      <div className={`mascot-stage is-${mood}`} key={run}>
        <div className="hoshi" role="img" aria-label="Hoshi, la mascota de Hoshi Sushi Roll">
          <img src="/logo.png" alt="" width="256" height="256" loading="lazy" />
          <svg className="hoshi-face" viewBox="0 0 200 200" aria-hidden="true">
            <circle cx="100" cy="100" r="100" fill="#fff" />
            <circle cx="100" cy="100" r="76" fill="#fff" stroke="#111114" strokeWidth="3" />
            <g transform="translate(100 100) scale(1.22) translate(-100 -102)">
            <rect x="64" y="50" width="52" height="48" rx="15" fill="#c2e8aa" />
            <circle cx="128" cy="112" r="23" fill="#f6a65c" />
            <ellipse className="blush" cx="56" cy="114" rx="13" ry="9" fill="#ffb3c4" />
            <ellipse className="blush" cx="147" cy="118" rx="12" ry="8" fill="#ffb3c4" />

            {/* Ojos abiertos */}
            <g className="eye eye-left">
              <circle cx="80" cy="90" r="15" fill="#111114" />
              <circle cx="75" cy="85" r="5.5" fill="#fff" />
              <circle cx="85" cy="95" r="2.5" fill="#fff" />
            </g>
            <g className="eye eye-right">
              <circle cx="122" cy="90" r="15" fill="#111114" />
              <circle cx="117" cy="85" r="5.5" fill="#fff" />
              <circle cx="127" cy="95" r="2.5" fill="#fff" />
            </g>
            {/* Ojos sonrientes (aparecen al consentirlo, al comer y al guiñar) */}
            <path className="smile smile-left" d="M66 94 Q80 76 94 94" fill="none" stroke="#111114" strokeWidth="6" strokeLinecap="round" />
            <path className="smile smile-right" d="M108 94 Q122 76 136 94" fill="none" stroke="#111114" strokeWidth="6" strokeLinecap="round" />

            <g className="mouth">
              <path d="M81 116 H121 A20 23 0 0 1 81 116 Z" fill="#111114" />
              <ellipse cx="101" cy="134" rx="10" ry="6" fill="#ff9fb4" />
            </g>
            </g>
          </svg>
        </div>

        {/* Efectos: solo se ven durante su reacción */}
        <span className="fx bubble" aria-hidden="true">¡Hola!</span>
        <span className="fx heart h1" aria-hidden="true"><Heart /></span>
        <span className="fx heart h2" aria-hidden="true"><Heart /></span>
        <span className="fx heart h3" aria-hidden="true"><Heart /></span>
        <svg className="fx bite" viewBox="0 0 40 40" aria-hidden="true">
          <circle cx="20" cy="20" r="19" fill="#111114" />
          <circle cx="20" cy="20" r="14" fill="#fff" />
          <circle cx="16" cy="18" r="5" fill="#ff9f7a" />
          <circle cx="24" cy="23" r="4.5" fill="#c2e8aa" />
        </svg>
        <svg className="fx sparkle" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
        </svg>
      </div>

      <div className="mascot-copy">
        <p className="eyebrow">Nuestra mascota</p>
        <h2 className="display h2">Hoshi siempre está de buenas.</h2>
        <p className="lead mascot-message" aria-live="polite">{MESSAGES[mood]}</p>
        <div className="chips">
          <button type="button" className="chip" onClick={() => react('hi')}>Saludar</button>
          <button type="button" className="chip" onClick={() => react('pet')}>Consentir</button>
          <button type="button" className="chip" onClick={() => react('feed')}>Darle un rollo</button>
          <button type="button" className="chip" onClick={() => react('wink')}>Guiñar</button>
        </div>
      </div>
    </div>
  );
}
