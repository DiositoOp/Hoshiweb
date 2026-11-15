// Menú de Hoshi Sushi Roll. Para cambiar un precio o agregar un platillo, edita esta lista.
// Cada platillo: { name, price, desc? }  ·  Con variantes: { name, desc?, variants: [{ name, price }] }

const PROTEINS = (camaron, res, pollo, mixto) => [
  { name: 'Camarón', price: camaron },
  { name: 'Res', price: res },
  { name: 'Pollo', price: pollo },
  { name: 'Mixto', price: mixto },
];

export const menu = [
  {
    id: 'clasicos',
    title: 'Rollos clásicos',
    blurb: 'Los de siempre, al natural o empanizados.',
    photo: '/img/bandeja-clasicos.jpg',
    alt: 'Charola de rollos clásicos con láminas de plátano, aguacate y queso crema',
    groups: [
      {
        title: 'Naturales',
        items: [
          { name: 'California Roll', price: 135, desc: 'Surimi, aguacate y pepino.' },
          { name: 'Phila Roll', price: 150, desc: 'Camarón empanizado, aguacate, pepino y laminado de queso crema.' },
          { name: 'Banana Roll', price: 155, desc: 'Camarón empanizado, aguacate, queso crema, laminado de plátano frito y salsa dulce.' },
          { name: 'Avokado Roll', price: 155, desc: 'Camarón empanizado, aguacate, pepino, queso crema y laminado de aguacate.' },
          { name: 'Maki Maki', price: 175, desc: 'Aguacate, pepino, atún empanizado, laminado de queso crema y salsa dulce.' },
        ],
      },
      {
        title: 'Empanizados',
        items: [
          { name: 'Dragon Roll', price: 160, desc: 'Camarón empanizado, aguacate, queso crema, pasta tampico, salsa dulce y aderezo de chipotle.' },
          { name: 'Kama Toro Maki', price: 165, desc: 'Atún, salmón, queso crema, capeado en tempura, pasta tampico, salsa dulce y aderezo de chipotle.' },
          { name: 'Niwatori Maki', price: 165, desc: 'Zanahoria, queso crema, pollo a la plancha y gratinado de queso manchego.' },
          { name: 'Niku Maki', price: 165, desc: 'Aguacate, queso crema, carne a la plancha, tocino, pasta tampico, salsa dulce y aderezo de chipotle.' },
          { name: 'KM Maki', price: 175, desc: 'Aguacate, queso crema, salmón, pasta tampico, salsa dulce y aderezo de chipotle.' },
        ],
      },
    ],
  },
  {
    id: 'especiales',
    title: 'Rollos especiales',
    blurb: 'Las combinaciones de la casa.',
    photo: '/img/frutas.jpg',
    alt: 'Rollos especiales con láminas de fresa, kiwi, salmón y aguacate',
    groups: [
      {
        title: 'Naturales',
        items: [
          { name: 'Hoshi Maki', price: 175, desc: 'Camarón empanizado, aguacate, queso crema, laminado de salmón y aderezo de chipotle.' },
          { name: 'Pick Me Maki', price: 175, desc: 'Camarón empanizado, queso crema, durazno y laminado de fresa.' },
          { name: 'Cremmy Roll', price: 175, desc: 'Salmón, queso crema, surimi, laminado de aguacate y salsa acevichada.' },
        ],
      },
      {
        title: 'Empanizados',
        items: [
          { name: 'Umi Riku Maki', price: 175, desc: 'Camarón empanizado, carne de res, aguacate, gratinado de queso mozzarella, salsa dulce y aderezo de chipotle.' },
          { name: 'Yaki Yaki', price: 175, desc: 'Arrachera, camarón empanizado, pollo a la plancha, queso crema, pepino, pasta tampico, salsa dulce y aderezo de chipotle.' },
          { name: 'Marinero Maki', price: 175, desc: 'Ensalada de atún y surimi, salsa acevichada y salsa negra chiltepín.' },
          { name: 'Spicy Maki', price: 175, desc: 'Camarón empanizado, salmón, queso crema, capeado en tempura, pasta tampico y aderezo de chipotle.' },
        ],
      },
      {
        title: 'Especial',
        items: [{ name: 'Mitad & mitad', price: 180, desc: 'Cualquier rollo que quieras combinar, mitad y mitad.' }],
      },
    ],
  },
  {
    id: 'entradas',
    title: 'Entradas',
    blurb: 'Para empezar o para compartir.',
    photo: '/img/entradas.jpg',
    alt: 'Brochetas kushiague, gyozas y oniguiris',
    groups: [
      {
        title: '',
        items: [
          { name: 'Gyozas', price: 140, desc: 'Empanadillas de carne molida con vegetales.' },
          { name: 'Wonton', price: 150, desc: 'Empanadillas de carne molida de cerdo y camarón con vegetales.' },
          { name: 'Tostada de atún', price: 65, desc: 'Tostada de atún marinado picante.' },
          { name: 'Niguiri de salmón', price: 65, desc: 'Bolita de arroz con lámina de salmón.' },
          {
            name: 'Oniguiri',
            variants: [
              { name: 'Atún', price: 80 },
              { name: 'Salmón', price: 85 },
              { name: 'Camarón', price: 95 },
            ],
          },
        ],
      },
      {
        title: 'Brochetas kushiague · 3 piezas',
        items: [
          { name: 'Queso manchego', price: 110 },
          { name: 'Queso mozzarella', price: 115 },
          { name: 'Plátano con queso', price: 117 },
          { name: 'Camarón con queso', price: 135 },
          { name: 'Surtidos · 4 piezas', price: 150 },
        ],
      },
    ],
  },
  {
    id: 'calientes',
    title: 'Platos calientes',
    blurb: 'Salteados al momento, sopa y platos fríos.',
    photo: '/img/yakimeshi.jpg',
    alt: 'Yakimeshi servido con una charola de rollos empanizados',
    groups: [
      {
        title: '',
        items: [
          { name: 'Teriyaki', desc: 'Salteado de verduras en salsa dulce teriyaki, acompañado de arroz gohan.', variants: PROTEINS(165, 155, 155, 175) },
          { name: 'Yakisoba', desc: 'Salteado de verduras con salsas orientales, acompañado de pasta.', variants: PROTEINS(165, 155, 155, 175) },
          { name: 'Yakimeshi', desc: 'Arroz frito con verduras.', variants: PROTEINS(150, 140, 140, 160) },
          { name: 'Alitas BBQ oriental', price: 165, desc: '6 piezas en salsa teriyaki oriental, acompañadas de papas fritas.' },
        ],
      },
      {
        title: 'Sopas y platos fríos',
        items: [
          { name: 'Miso', price: 110, desc: 'Caldo de pasta miso con espinaca, champiñón y tofu.' },
          { name: 'Ensalada de atún', price: 180, desc: 'Atún fresco marinado con pepino, cebolla, chile habanero y un toque de mayonesa.' },
        ],
      },
    ],
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    blurb: 'Para acompañar.',
    photo: '/img/bebidas.jpg',
    alt: 'Rollos y dos bebidas con hielo en la terraza de noche',
    groups: [
      {
        title: 'Sin alcohol',
        items: [
          { name: 'Ichigo', price: 60, desc: 'Pulpa de fruta natural con ginger ale. Fresa o mango.' },
          { name: 'Calpis natural', price: 55, desc: 'Limonada de yogurt.' },
          { name: 'Calpis sabor', price: 60, desc: 'Limonada de yogurt con pulpa natural. Fresa o mango.' },
          { name: 'Limonada mineral', price: 60 },
          { name: 'Refresco', price: 45, desc: 'Pregunta por los sabores.' },
          { name: 'Arizona', price: 35, desc: 'Pregunta por los sabores.' },
          { name: 'Boing', price: 35, desc: 'Pregunta por los sabores.' },
          { name: 'Botella de agua', price: 35 },
        ],
      },
      {
        title: 'Con alcohol',
        items: [
          { name: 'Carajillo', price: 85, desc: 'Shot de espresso y Licor 43.' },
          { name: 'Carajillo horchata', price: 95, desc: 'Shot de espresso y Licor 43 Horchata.' },
          { name: 'Mezcalina', price: 90, desc: 'Mezcal y pulpa de fruta natural. Fresa, mango, jamaica o tamarindo.' },
          { name: 'Sangría', price: 95, desc: 'Vino tinto espumoso con un toque de limón.' },
        ],
      },
    ],
  },
];

export function countItems(section) {
  return section.groups.reduce((n, g) => n + g.items.length, 0);
}

/** Los tres rollos que se destacan en la página de inicio. */
export const featured = [
  { name: 'Hoshi Maki', price: 175, photo: '/img/hoshimaki.jpg', alt: 'Hoshi Maki con lámina de salmón y aderezo de chipotle', desc: 'Camarón empanizado, aguacate, queso crema, laminado de salmón y aderezo de chipotle.' },
  { name: 'Avokado Roll', price: 155, photo: '/img/avokado.jpg', alt: 'Avokado Roll con lámina de aguacate', desc: 'Camarón empanizado, aguacate, pepino, queso crema y laminado de aguacate.' },
  { name: 'Pick Me Maki', price: 175, photo: '/img/pickme.jpg', alt: 'Pick Me Maki con lámina de fresa', desc: 'Camarón empanizado, queso crema, durazno y laminado de fresa.' },
];
