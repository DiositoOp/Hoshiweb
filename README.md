# Web de Hoshi Sushi Roll

Sitio informativo de Hoshi Sushi Roll: inicio y menú con precios. No toma pedidos ni guarda datos, así que no necesita base de datos.

Hecho con Next.js. Las dos páginas se generan como archivos estáticos, por lo que cargan rápido y el hosting gratuito de Vercel alcanza.

## Probarlo en tu computadora

Necesitas Node.js 20 o más reciente.

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Qué editar

Casi todo lo que cambia con el tiempo está en dos archivos:

| Archivo | Qué contiene |
|---|---|
| `data/site.js` | Dirección, teléfono, días y horario, aviso de promoción y WhatsApp |
| `data/menu.js` | Platillos, descripciones, precios y los tres rollos destacados del inicio |

Pendientes en `data/site.js`:

- `openDays`: está puesto como todos los días. Ajusta los días reales (0 = domingo … 6 = sábado); de eso depende el aviso "Abierto ahora".
- `mapsPin`: código de ubicación de Google (plus code) que usa el mapa de la página. Si el mapa no cae en el local, copia el código desde tu ficha de Google Maps.
- `whatsapp`: vacío a propósito. Si lo llenas aparece el botón "Escríbenos" en la sección Visítanos.
- `notice`: texto opcional para una franja arriba de la página (promoción o día festivo).

El color de fondo se cambia en las primeras líneas de `app/globals.css` (`--bg`, `--bg-alt`, `--panel`, `--line`).

Las fotos están en `public/img/`. Para cambiar una, reemplaza el archivo con el mismo nombre.

## Publicarlo en Vercel

1. Crea un repositorio nuevo en GitHub (por ejemplo `hoshi-web`) y sube el contenido de esta carpeta, con `package.json` en la raíz.
2. En Vercel: **Add New → Project**, importa el repositorio y pulsa **Deploy**. No necesita variables.
3. Si conectas un dominio propio (**Settings → Domains**), el sitio lo usa solo para Google y redes. Si quieres fijarlo a mano, agrega la variable `NEXT_PUBLIC_SITE_URL` con la dirección completa.
4. En tu ficha de Google Maps, usa **Agregar sitio web** y pega la dirección.

## Lo que incluye para Google

- Título, descripción e imagen para cuando se comparte el enlace.
- Datos estructurados del restaurante (dirección, horario, teléfono) y del menú con precios.
- `sitemap.xml` y `robots.txt`.

## Estructura

```
data/site.js              Datos del negocio
data/menu.js              Menú
app/page.js               Inicio
app/menu/page.js          Menú
app/layout.js             Encabezado del documento y datos para Google
app/globals.css           Estilos
components/OpenBadge.jsx  Aviso "Abierto ahora / Cerrado" con hora de Minatitlán
components/MenuBrowser.jsx  Categorías fijas y buscador del menú
components/Mascot.jsx     Mascota animada (cara dibujada por partes)
```
