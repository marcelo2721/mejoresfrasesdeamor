export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-sm font-semibold text-rose-600 dark:text-rose-400 tracking-widest uppercase mb-4">
            Reflexión y Romanticismo
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Mejores Frases<br />de Amor
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12 font-light">
            Inspiración profunda en cada palabra. Las más hermosas frases de amor de grandes autores y pensadores.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent dark:via-rose-600"></div>
      </div>

      {/* Articles Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Card 1 */}
          <article className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-12 bg-rose-500 dark:bg-rose-400"></div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white">
                Frases Profundas
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 flex-grow">
              Reflexiones profundas sobre el amor verdadero, la pasión y los sentimientos que transforman nuestras vidas.
            </p>
            <a
              href="/articulos/frases-profundas-amor"
              className="text-rose-600 dark:text-rose-400 font-semibold text-lg hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
            >
              Explorar artículo →
            </a>
          </article>

          {/* Card 2 */}
          <article className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-12 bg-rose-500 dark:bg-rose-400"></div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white">
                Frases Románticas
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 flex-grow">
              Las más hermosas frases románticas para expresar tus sentimientos. Inspiración para momentos especiales.
            </p>
            <a
              href="/articulos/frases-romanticas"
              className="text-rose-600 dark:text-rose-400 font-semibold text-lg hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
            >
              Explorar artículo →
            </a>
          </article>

          {/* Card 3 */}
          <article className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-12 bg-rose-500 dark:bg-rose-400"></div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white">
                Grandes Autores
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 flex-grow">
              Citas inspiradoras de Shakespeare, Borges, García Márquez y otros grandes pensadores sobre el amor.
            </p>
            <a
              href="/articulos/frases-autores-clasicos"
              className="text-rose-600 dark:text-rose-400 font-semibold text-lg hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
            >
              Explorar artículo →
            </a>
          </article>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent dark:via-rose-600"></div>
      </div>

      {/* About Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-8">
          Por qué el amor importa
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-light">
          El amor es la emoción más profunda del ser humano. A través de las frases y reflexiones de grandes pensadores,
          descubrimos nuevas formas de entender este sentimiento que nos define.
        </p>
        <p className="text-lg text-slate-500 dark:text-slate-500 italic font-light">
          "En cada frase de amor encontramos un pedazo de verdad universal."
        </p>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-t border-slate-200 dark:border-slate-800">
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">
          Descubre nuevas perspectivas sobre el amor cada semana
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="px-8 py-3 bg-rose-600 text-white font-semibold rounded-full hover:bg-rose-700 dark:hover:bg-rose-500 transition-colors"
          >
            Seguir leyendo
          </a>
        </div>
      </section>
    </div>
  );
}
