import { MetadataRoute } from 'next';

const BASE_URL = 'https://mejoresfrasesdeamor.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = [
    'frases-profundas-amor',
    'frases-romanticas',
    'frases-autores-clasicos',
  ];

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...articles.map((slug) => ({
      url: `${BASE_URL}/articulos/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
