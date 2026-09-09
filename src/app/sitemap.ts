import { MetadataRoute } from 'next';

const BASE_URL = 'https://mejoresfrasesdeamor.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = [
    { slug: 'frases-amor-cortas', type: 'article' },
    { slug: 'frases-amor-bonitas', type: 'article' },
    { slug: 'frases-amor-dedicar', type: 'article' },
    { slug: 'frases-amor-propio', type: 'article' },
    { slug: 'poemas-amor', type: 'article' },
    { slug: 'frases-amor-profundo', type: 'article' },
    { slug: 'autores-famosos', type: 'hub' },
  ];

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...articles.map((item) => ({
      url: item.type === 'hub'
        ? `${BASE_URL}/${item.slug}`
        : `${BASE_URL}/articulos/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
