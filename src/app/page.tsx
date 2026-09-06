export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 dark:from-slate-950 dark:to-rose-950">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-rose-900 dark:text-rose-200 mb-4">
            Mejores Frases de Amor
          </h1>
          <p className="text-xl text-rose-700 dark:text-rose-300 max-w-2xl mx-auto">
            Inspiración, reflexión y romanticismo en cada palabra. Descubre las más hermosas frases de amor de grandes autores.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <article className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-rose-900 dark:text-rose-200 mb-4">
              Frases Profundas de Amor
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Explora reflexiones profundas sobre el amor verdadero, la pasión y los sentimientos que transforman nuestras vidas.
            </p>
            <a href="/articulos/frases-profundas-amor" className="text-rose-600 hover:text-rose-700 font-semibold">
              Leer artículo →
            </a>
          </article>

          <article className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-rose-900 dark:text-rose-200 mb-4">
              Frases Románticas
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Las mejores frases románticas para expresar tus sentimientos. Inspiración para momentos especiales.
            </p>
            <a href="/articulos/frases-romanticas" className="text-rose-600 hover:text-rose-700 font-semibold">
              Leer artículo →
            </a>
          </article>

          <article className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-rose-900 dark:text-rose-200 mb-4">
              Frases de Grandes Autores
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Citas inspiradoras sobre el amor de Shakespeare, Borges, García Márquez y otros grandes escritores.
            </p>
            <a href="/articulos/frases-autores-clasicos" className="text-rose-600 hover:text-rose-700 font-semibold">
              Leer artículo →
            </a>
          </article>
        </div>

        <section className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-rose-900 dark:text-rose-200 mb-4">
            ¿Por qué el amor importa?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            El amor es la emoción más profunda del ser humano. A través de las frases y reflexiones de grandes pensadores,
            descubrimos nuevas formas de entender este sentimiento que nos define.
          </p>
        </section>
      </div>
    </div>
  );
}
