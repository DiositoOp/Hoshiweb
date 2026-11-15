import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ArrowIcon, BagIcon, ClockIcon, InstagramIcon, PinIcon } from '@/components/Icons';
import Mascot from '@/components/Mascot';
import OpenBadge from '@/components/OpenBadge';
import { countItems, featured, menu } from '@/data/menu';
import { daysLabel, instagramLink, mapsEmbed, mapsLink, phoneLink, prettyPhone, prettyTime, site, whatsappLink } from '@/data/site';

const section = (id) => menu.find((s) => s.id === id);
const hours = `${prettyTime(site.openTime)} a ${prettyTime(site.closeTime)}`;

// Las tres puertas de entrada al menú.
const CATEGORIES = [
  { id: 'clasicos', title: 'Rollos clásicos', desc: 'California, Phila, Banana, Avokado y los empanizados de siempre, desde $135.', photo: '/img/bandeja-clasicos.jpg', alt: section('clasicos').alt, link: `Ver los ${countItems(section('clasicos'))} rollos clásicos`, color: 'var(--matcha)' },
  { id: 'especiales', title: 'Rollos especiales', desc: 'Hoshi Maki, Pick Me Maki con fresa, Yaki Yaki con arrachera y más, a $175.', photo: '/img/frutas.jpg', alt: section('especiales').alt, link: 'Ver los rollos especiales', color: 'var(--salmon)' },
  { id: 'entradas', title: 'Entradas y calientes', desc: 'Gyozas, wonton, brochetas kushiague, teriyaki, yakisoba, yakimeshi y alitas.', photo: '/img/entradas.jpg', alt: section('entradas').alt, link: 'Ver entradas y platos calientes', color: 'var(--orange)' },
];

const GALLERY = [
  ['/img/bandeja-grande.jpg', 'Charola grande de rollos surtidos'],
  ['/img/empanizado-caja.jpg', 'Rollo empanizado bañado en salsas, para llevar'],
  ['/img/bebidas.jpg', 'Rollos y bebidas en la terraza de noche'],
  ['/img/cajas-logo.jpg', 'Rollos para llevar con la etiqueta de Hoshi Sushi Roll'],
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        {/* Portada */}
        <section className="hero">
          <img className="hero-photo" src="/img/hero.jpg" alt="Rollos empanizados bañados en aderezo de chipotle y salsa dulce" width="787" height="1400" fetchPriority="high" />
          <div className="hero-fade" aria-hidden="true" />
          <div className="wrap hero-copy">
            <p className="eyebrow">Sushi japo-mex · Minatitlán, Ver.</p>
            <h1 className="display h1">EL ARTE DEL SUSHI, CON EL SABOR QUE TE GUSTA.</h1>
            <p className="lead hero-lead">
              Rollos clásicos y especiales, kushiague, yakimeshi y más. Te esperamos en la Col. Petrolera.
            </p>
            <OpenBadge />
            <div className="actions">
              <Link className="btn btn-primary" href="/menu">Ver el menú</Link>
              <a className="btn btn-ghost" href={mapsLink} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
            </div>
          </div>
        </section>

        {/* Lo que la gente pregunta primero */}
        <section aria-label="Información rápida" className="facts">
          <div className="wrap facts-grid">
            <div className="fact"><ClockIcon /><div><strong>{hours}</strong><span>{daysLabel()}</span></div></div>
            <div className="fact"><PinIcon /><div><strong>{site.street}</strong><span>{site.neighborhood}, {site.city}</span></div></div>
            <div className="fact"><BagIcon /><div><strong>Aquí, para llevar o a domicilio</strong><span>Llama al {prettyPhone}</span></div></div>
          </div>
        </section>

        {/* Menú por categorías */}
        <section className="block">
          <div className="wrap">
            <p className="eyebrow">El menú</p>
            <h2 className="display h2">Tres formas de antojarte</h2>
            <div className="cards">
              {CATEGORIES.map((c) => (
                <Link key={c.id} href={`/menu#${c.id}`} className="card" style={{ '--accent': c.color }}>
                  <img src={c.photo} alt={c.alt} width="787" height="1400" loading="lazy" />
                  <h3 className="display card-title">{c.title}</h3>
                  <p className="muted">{c.desc}</p>
                  <span className="card-link">{c.link} <ArrowIcon width="18" height="18" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tres rollos */}
        <section className="block alt">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">En el menú</p>
                <h2 className="display h2">Tres de nuestros rollos</h2>
              </div>
              <p className="muted lead">Uno de la casa, un clásico y uno con fruta.</p>
            </div>
            <div className="featured">
              {featured.map((r) => (
                <article key={r.name}>
                  <img src={r.photo} alt={r.alt} width="800" height="1000" loading="lazy" />
                  <div className="dish-head">
                    <h3 className="display dish-name lg">{r.name}</h3>
                    <span className="display price lg">${r.price}</span>
                  </div>
                  <p className="dish-desc">{r.desc}</p>
                </article>
              ))}
            </div>
            <Link className="btn btn-ghost" href="/menu">Ver el menú completo</Link>
          </div>
        </section>

        {/* Mascota */}
        <section className="block alt">
          <div className="wrap"><Mascot /></div>
        </section>

        {/* Visítanos */}
        <section id="visitanos" className="block">
          <div className="wrap">
            <p className="eyebrow">Ubicación y horario</p>
            <h2 className="display h2">Visítanos</h2>
            <div className="visit">
              <div className="visit-info">
                <OpenBadge />
                <dl className="details">
                  <div><dt>Dirección</dt><dd>{site.street}, {site.neighborhood}, {site.postalCode} {site.city}, Ver.</dd></div>
                  <div><dt>Horario</dt><dd>{daysLabel()}, de {hours}</dd></div>
                  <div><dt>Teléfono</dt><dd><a href={phoneLink}>{prettyPhone}</a></dd></div>
                  <div><dt>Servicios</dt><dd>{site.services.join(' · ')}</dd></div>
                </dl>
                <div className="actions">
                  <a className="btn btn-primary" href={mapsLink} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
                  <a className="btn btn-ghost" href={phoneLink}>Llamar</a>
                  {whatsappLink && <a className="btn btn-ghost" href={whatsappLink} target="_blank" rel="noopener noreferrer">Escríbenos</a>}
                </div>
              </div>
              <figure className="visit-photo">
                <img src="/img/fachada.jpg" alt="Fachada de Hoshi Sushi Roll: barda blanca con el mural de la mascota y portón de bambú" width="1050" height="1400" loading="lazy" />
                <figcaption>Busca el mural de Hoshi junto al portón de bambú.</figcaption>
              </figure>
              <iframe
                className="map"
                title="Mapa de Hoshi Sushi Roll en Google Maps"
                src={mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Instagram */}
        <section className="block alt">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">Instagram</p>
                <h2 className="display h2">Sigue a Hoshi</h2>
              </div>
              <a className="btn btn-ghost" href={instagramLink} target="_blank" rel="noopener noreferrer"><InstagramIcon />@{site.instagram}</a>
            </div>
            <div className="gallery">
              {GALLERY.map(([src, alt]) => (
                <img key={src} src={src} alt={alt} width="787" height="1400" loading="lazy" />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
