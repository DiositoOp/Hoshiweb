import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = { title: 'Página no encontrada' };

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="contenido" className="block">
        <div className="wrap not-found">
          <img src="/logo.png" alt="" width="120" height="120" />
          <h1 className="display h2">Esta página no existe</h1>
          <p className="muted lead">Pero el menú sí, y está completo.</p>
          <div className="actions">
            <Link className="btn btn-primary" href="/menu">Ver el menú</Link>
            <Link className="btn btn-ghost" href="/">Ir al inicio</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
