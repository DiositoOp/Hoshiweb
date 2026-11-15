import './globals.css';
import { instagramLink, site, siteUrl } from '@/data/site';

const title = `${site.name} · ${site.tagline}`;

export const metadata = {
  metadataBase: new URL(siteUrl()),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: site.name,
    title,
    description: site.description,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Charola de rollos de Hoshi Sushi Roll' }],
  },
  twitter: { card: 'summary_large_image', title, description: site.description, images: ['/og.jpg'] },
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#0b1210' };

// Datos que Google lee para mostrar horario, dirección y menú en las búsquedas.
function restaurantSchema() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const base = siteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: site.name,
    description: site.description,
    url: base,
    image: `${base}/og.jpg`,
    logo: `${base}/logo.png`,
    telephone: `+52${site.phone}`,
    servesCuisine: ['Sushi', 'Japonesa', 'Mexicana'],
    priceRange: '$$',
    currenciesAccepted: 'MXN',
    hasMenu: `${base}/menu`,
    sameAs: [instagramLink],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.street}, ${site.neighborhood}`,
      addressLocality: site.city,
      addressRegion: site.state,
      postalCode: site.postalCode,
      addressCountry: 'MX',
    },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: site.openDays.map((d) => days[d]),
      opens: site.openTime,
      closes: site.closeTime,
    }],
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema()) }} />
      </head>
      <body>
        <a className="skip" href="#contenido">Saltar al contenido</a>
        {children}
      </body>
    </html>
  );
}
