import { Metadata } from "next";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: ArticlePageProps
): Promise<Metadata> {
  const title = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const description = `Descubre las mejores frases sobre ${title}. Inspiración y reflexión profunda en cada palabra.`;
  const url = `https://mejoresfrasesdeamor.com/articulos/${params.slug}`;

  return {
    title: `${title} | Mejores Frases de Amor`,
    description,
    keywords: [`frases ${title}`, `frases de ${title.toLowerCase()}`, "amor"],
    openGraph: {
      title,
      description,
      url,
      type: "article",
      locale: "es_ES",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const title = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: `Descubre las mejores frases sobre ${title}. Inspiración y reflexión profunda.`,
    image: "https://mejoresfrasesdeamor.com/og-image.png",
    datePublished: new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "Mejores Frases de Amor",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 dark:from-slate-950 dark:to-rose-950">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <article>
          <h1 className="text-5xl font-bold text-rose-900 dark:text-rose-200 mb-4">
            {title}
          </h1>

          <div className="text-gray-600 dark:text-gray-400 mb-12 pb-8 border-b border-rose-200 dark:border-rose-800">
            <p>Publicado: {new Date().toLocaleDateString("es-ES")}</p>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Este artículo contiene las frases más inspiradoras sobre {params.slug}.
              Cada una de ellas viene de grandes autores y pensadores que han reflexionado profundamente sobre este tema.
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-rose-900 dark:text-rose-200 mb-6">
                Las Mejores Frases
              </h2>

              <div className="space-y-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-slate-800 p-8 rounded-lg border-l-4 border-rose-500 shadow-md"
                  >
                    <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-2">
                      "La vida sin amor es como un árbol sin flores ni frutos."
                    </p>
                    <p className="text-right text-gray-600 dark:text-gray-400">
                      — Autor destacado
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-rose-900 dark:text-rose-200 mb-6">
                Por qué estas frases importan
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Las frases de amor nos ayudan a entender y expresar nuestros sentimientos más profundos.
                A través de las palabras de grandes pensadores, encontramos inspiración y consuelo.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-rose-200 dark:border-rose-800">
            <a
              href="/"
              className="inline-block text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300 font-semibold"
            >
              ← Volver al inicio
            </a>
          </div>
        </article>
      </div>
    </div>
    </>
  );
}
