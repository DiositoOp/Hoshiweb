'use client';

import { useEffect, useState } from 'react';
import { DAY_NAMES, prettyTime, site } from '@/data/site';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function minutes(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

/** Calcula si el local está abierto según la hora de Minatitlán, sin importar dónde esté el visitante. */
export function getStatus(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: site.timeZone, weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23',
  }).formatToParts(now);
  const get = (type) => parts.find((p) => p.type === type).value;
  const day = WEEKDAYS.indexOf(get('weekday'));
  const current = Number(get('hour')) * 60 + Number(get('minute'));
  const open = minutes(site.openTime);
  const close = minutes(site.closeTime);
  const opensToday = site.openDays.includes(day);

  if (opensToday && current >= open && current < close) {
    return { open: true, text: `Abierto ahora · cierra a las ${prettyTime(site.closeTime)}` };
  }
  if (opensToday && current < open) {
    return { open: false, text: `Cerrado · abre hoy a las ${prettyTime(site.openTime)}` };
  }
  for (let i = 1; i <= 7; i += 1) {
    const next = (day + i) % 7;
    if (site.openDays.includes(next)) {
      const when = i === 1 ? 'mañana' : `el ${DAY_NAMES[next]}`;
      return { open: false, text: `Cerrado · abre ${when} a las ${prettyTime(site.openTime)}` };
    }
  }
  return { open: false, text: 'Cerrado' };
}

export default function OpenBadge() {
  // Se calcula en el navegador para que no quede guardada una hora vieja en la página.
  const [status, setStatus] = useState(null);
  useEffect(() => {
    const update = () => setStatus(getStatus());
    update();
    const timer = setInterval(update, 60_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className={`badge${status?.open ? ' is-open' : ''}`} role="status">
      <span className="badge-dot" aria-hidden="true" />
      {status ? status.text : `${prettyTime(site.openTime)} a ${prettyTime(site.closeTime)}`}
    </span>
  );
}
