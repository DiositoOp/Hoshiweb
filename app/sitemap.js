import { siteUrl } from '@/data/site';

export default function sitemap() {
  const base = siteUrl();
  return [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/menu`, changeFrequency: 'monthly', priority: 0.9 },
  ];
}
