'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { countItems } from '@/data/menu';
import { SearchIcon } from './Icons';

// Quita acentos y mayúsculas para que "salmon" encuentre "salmón".
const plain = (text) => text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

function Item({ item }) {
  return (
    <li className="dish">
      <div className="dish-head">
        <h4 className="display dish-name">{item.name}</h4>
        {item.price != null && <span className="display price">${item.price}</span>}
      </div>
      {item.desc && <p className="dish-desc">{item.desc}</p>}
      {item.variants && (
        <ul className="variants">
          {item.variants.map((v) => (
            <li key={v.name}><span>{v.name}</span><span className="price-sm">${v.price}</span></li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function MenuBrowser({ menu }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(menu[0].id);
  const tabsRef = useRef(null);

  // En celular, desliza la barra para que la categoría activa quede a la vista.
  useEffect(() => {
    const strip = tabsRef.current;
    const tab = strip?.querySelector('a.on');
    if (!strip || !tab) return;
    strip.scrollTo({ left: tab.offsetLeft - strip.clientWidth / 2 + tab.clientWidth / 2, behavior: 'smooth' });
  }, [active]);

  // Filtra platillos por nombre o ingredientes.
  const sections = useMemo(() => {
    const q = plain(query.trim());
    if (!q) return menu;
    return menu
      .map((s) => ({
        ...s,
        groups: s.groups
          .map((g) => ({ ...g, items: g.items.filter((i) => plain(`${i.name} ${i.desc || ''} ${g.title}`).includes(q)) }))
          .filter((g) => g.items.length),
      }))
      .filter((s) => s.groups.length);
  }, [menu, query]);

  const total = sections.reduce((n, s) => n + countItems(s), 0);

  // Marca en la barra la categoría que se está viendo.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -60% 0px' },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      <div className="menu-bar">
        <div className="wrap menu-bar-row">
          <nav aria-label="Categorías" className="tabs" ref={tabsRef}>
            {menu.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'on' : ''}>{s.title}</a>
            ))}
          </nav>
          <label className="search">
            <span className="sr-only">Buscar en el menú</span>
            <SearchIcon width="18" height="18" />
            <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar: salmón, plátano…" />
          </label>
        </div>
      </div>

      <p className="sr-only" role="status">{query ? `${total} resultados` : ''}</p>

      {sections.length === 0 && (
        <div className="wrap empty">
          <p className="lead">No encontramos “{query}” en el menú.</p>
          <button type="button" className="btn btn-ghost" onClick={() => setQuery('')}>Ver todo el menú</button>
        </div>
      )}

      {sections.map((s, index) => (
        <section key={s.id} id={s.id} className={`menu-section${index % 2 ? ' alt' : ''}`}>
          <div className="wrap">
            <div className="section-head">
              <div>
                <h2 className="display h2">{s.title}</h2>
                <p className="muted lead">{s.blurb}</p>
              </div>
              <span className="count">{countItems(s)} {countItems(s) === 1 ? 'opción' : 'opciones'}</span>
            </div>
            <div className="menu-body">
              <img className="menu-photo" src={s.photo} alt={s.alt} width="787" height="1400" loading="lazy" />
              <div className="menu-groups">
                {s.groups.map((g) => (
                  <div key={g.title || 'principal'}>
                    {g.title && <h3 className="eyebrow group-title">{g.title}</h3>}
                    <ul className="dishes">
                      {g.items.map((item) => <Item key={item.name} item={item} />)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
