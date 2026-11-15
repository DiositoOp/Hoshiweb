// Datos del negocio. Todo lo que cambia con el tiempo se edita aquí, sin tocar el diseño.
export const site = {
  name: 'Hoshi Sushi Roll',
  tagline: 'Sushi japo-mex en Minatitlán, Veracruz',
  description:
    'Rollos clásicos y especiales, entradas, brochetas kushiague, platos calientes y bebidas. Sushi japo-mex en la Col. Petrolera, Minatitlán, Veracruz.',

  // Ubicación
  street: 'Calle 5 esquina con calle 23',
  neighborhood: 'Col. Petrolera',
  postalCode: '96850',
  city: 'Minatitlán',
  state: 'Veracruz',
  mapsQuery: 'Hoshi Sushi Roll, Minatitlán, Veracruz', // para el botón "Cómo llegar"
  mapsPin: '2F43+29 Minatitlán, Veracruz', // código de ubicación de Google, para el mapa de la página

  // Contacto
  phone: '7581040495', // 10 dígitos
  whatsapp: '', // Déjalo vacío para no mostrar WhatsApp. Si se usa: 10 dígitos.
  instagram: 'hoshi_sushiroll',

  // Horario. openDays: 0 = domingo, 1 = lunes … 6 = sábado.
  // OJO: confirma los días. Por ahora se asume que abren todos los días.
  openDays: [0, 1, 2, 3, 4, 5, 6],
  openTime: '16:00',
  closeTime: '22:00',
  timeZone: 'America/Mexico_City',

  // Información para la visita
  services: ['Consumo en el lugar', 'Para llevar', 'Entrega a domicilio'],

  // Aviso opcional arriba de la página (promoción, día festivo, etc.). Vacío = no se muestra.
  notice: '',
};

export const DAY_NAMES = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

/** "16:00" -> "4:00 pm" */
export function prettyTime(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  const suffix = h >= 12 ? 'pm' : 'am';
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, '0')} ${suffix}`;
}

/** Texto de los días: "Todos los días", "Martes a domingo" o la lista. */
export function daysLabel(days = site.openDays) {
  const sorted = [...days].sort((a, b) => a - b);
  if (sorted.length === 7) return 'Todos los días';
  // Recorre la semana empezando en lunes para detectar un tramo corrido.
  const week = [1, 2, 3, 4, 5, 6, 0];
  const flags = week.map((d) => sorted.includes(d));
  const start = flags.findIndex((f, i) => f && !flags[(i + 6) % 7]);
  const run = [];
  for (let i = 0; i < 7 && flags[(start + i) % 7]; i += 1) run.push(week[(start + i) % 7]);
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  if (run.length === sorted.length && run.length > 2) {
    return `${cap(DAY_NAMES[run[0]])} a ${DAY_NAMES[run[run.length - 1]]}`;
  }
  return cap(week.filter((d) => sorted.includes(d)).map((d) => DAY_NAMES[d]).join(', '));
}

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsPin)}&z=17&output=embed`;
export const phoneLink = `tel:+52${site.phone}`;
export const prettyPhone = `${site.phone.slice(0, 3)} ${site.phone.slice(3, 6)} ${site.phone.slice(6)}`;
export const instagramLink = `https://www.instagram.com/${site.instagram}`;
export const whatsappLink = site.whatsapp ? `https://wa.me/52${site.whatsapp}` : '';

/** Dirección pública del sitio (para Google y redes). En Vercel se toma sola. */
export function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return 'http://localhost:3000';
}
