import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MenuBrowser from '@/components/MenuBrowser';
import OpenBadge from '@/components/OpenBadge';
import { menu } from '@/data/menu';
import { mapsLink, site, siteUrl } from '@/data/site';

export const metadata = {
  title: 'Menú y precios',
  description: 'Menú completo de Hoshi Sushi Roll con precios: rollos clásicos y especiales, entradas, brochetas kushiague, platos calientes y bebidas.',
  alternates: { canonical: '/menu' },
};

// Menú en el formato que Google entiende.
function menuSchema() {
  const offer = (price) => ({ '@type': 'Offer', price, priceCurrency: 'MXN' });
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: `Menú de ${site.name}`,
    url: `${siteUrl()}/menu`,
    hasMenuSection: menu.map((s) => ({
      '@type': 'MenuSection',
      name: s.title,
      hasMenuItem: s.groups.flatMap((g) => g.items.map((i) => ({
        '@type': 'MenuItem',
        name: i.name,
        ...(i.desc ? { description: i.desc } : {}),
        offers: i.variants ? i.variants.map((v) => ({ ...offer(v.price), name: v.name })) : offer(i.price),
      }))),
    })),
  };
}

export default function MenuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema()) }} />
      <Header current="menu" />
      <main id="contenido">
        <section className="menu-hero">
          <div className="wrap menu-hero-row">
            <div className="menu-hero-copy">
              <p className="eyebrow">Sushi japo-mex · Minatitlán</p>
              <h1 className="display h1">Nuestro menú</h1>
              <p className="lead">
                Rollos clásicos y especiales, entradas, brochetas kushiague, platos calientes y bebidas. Precios en pesos mexicanos.
              </p>
              <OpenBadge />
              <div className="actions">
                <a className="btn btn-primary" href={mapsLink} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
              </div>
            </div>
            <img className="menu-hero-photo" src="/img/bandeja-grande.jpg" alt="Charola grande con filas de rollos surtidos" width="787" height="1400" fetchPriority="high" />
          </div>
        </section>

        <MenuBrowser menu={menu} />

        <section className="block">
          <div className="wrap closing">
            <div>
              <h2 className="display h2">¿Ya se te antojó?</h2>
              <p className="muted lead">Te esperamos en {site.street}, {site.neighborhood}, {site.city}.</p>
            </div>
            <a className="btn btn-primary" href={mapsLink} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
