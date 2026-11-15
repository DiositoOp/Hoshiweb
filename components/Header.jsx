import Link from 'next/link';
import { mapsLink, site } from '@/data/site';

export default function Header({ current }) {
  return (
    <>
      {site.notice && <p className="notice-bar">{site.notice}</p>}
      <header className="header">
        <div className="wrap header-row">
          <Link href="/" className="brand">
            <img src="/logo.png" alt="" width="46" height="46" />
            <span>{site.name}</span>
          </Link>
          <nav aria-label="Secciones" className="nav">
            <Link href="/menu" aria-current={current === 'menu' ? 'page' : undefined}>Menú</Link>
            <Link href="/#visitanos" className="nav-wide">Visítanos</Link>
            <a className="btn btn-primary btn-sm" href={mapsLink} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
          </nav>
        </div>
      </header>
    </>
  );
}
