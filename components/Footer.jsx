import Link from 'next/link';
import { daysLabel, instagramLink, mapsLink, phoneLink, prettyPhone, prettyTime, site } from '@/data/site';
import { MenuIcon, PhoneIcon, PinIcon } from './Icons';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrap footer-row">
          <div className="footer-brand">
            <img src="/logo.png" alt="" width="56" height="56" loading="lazy" />
            <div>
              <strong className="display footer-name">{site.name}</strong>
              <span className="muted">{site.tagline}</span>
            </div>
          </div>
          <div className="footer-col">
            <span>{site.street}, {site.neighborhood}</span>
            <span>{daysLabel()} · {prettyTime(site.openTime)} a {prettyTime(site.closeTime)}</span>
            <a href={phoneLink}>{prettyPhone}</a>
          </div>
          <nav aria-label="Enlaces" className="footer-col">
            <Link href="/menu">Menú</Link>
            <Link href="/#visitanos">Visítanos</Link>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">Instagram @{site.instagram}</a>
          </nav>
        </div>
      </footer>

      {/* Barra fija en celular: las tres acciones que más se usan */}
      <nav aria-label="Accesos rápidos" className="mobile-bar">
        <Link href="/menu"><MenuIcon />Menú</Link>
        <a href={mapsLink} target="_blank" rel="noopener noreferrer"><PinIcon />Cómo llegar</a>
        <a href={phoneLink}><PhoneIcon />Llamar</a>
      </nav>
    </>
  );
}
