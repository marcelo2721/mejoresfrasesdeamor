export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* AdSense: Leaderboard (728x90) */}
      <div className="flex justify-center py-4 px-4">
        <div className="w-full max-w-screen-lg h-24 bg-[var(--surface-alt)] rounded border border-[var(--ink-20)] flex items-center justify-center text-[var(--ink-60)]">
          <span className="text-sm">Espacio para publicidad (728x90)</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-sm font-semibold text-rose-600 tracking-widest uppercase mb-4">
            ExpresiÃ³n y Romanticismo
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--ink)] mb-6 leading-tight">
            Frases de Amor
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--ink-60)] max-w-3xl mx-auto mb-12 font-light">
            Expresiones autÃ©nticas para cada momento especial. Descubre las palabras perfectas para tu pareja.
          </p>
          <a
            href="/articulos/frases-amor-propio"
            className="inline-block px-8 py-3 bg-rose-600 text-white font-semibold rounded-full hover:bg-rose-700 transition-colors"
          >
            Comenzar a Explorar
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
      </div>

      {/* HUB PRINCIPAL - Frases de Amor */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl font-bold text-[var(--ink)] mb-16 text-center">
          Explora Nuestras Colecciones
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Cortas */}
          <article className="flex flex-col h-full bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-lg border border-rose-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">✨</span>
              <div className="w-1 h-12 bg-rose-500"></div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--ink)] mb-4">
              Frases Cortas
            </h3>
            <p className="text-[var(--ink-60)] text-sm leading-relaxed mb-4 flex-grow">
              Impacto mÃ¡ximo en pocas palabras. Mensajes poderosos para WhatsApp, redes sociales y momentos espontÃ¡neos.
            </p>
            <p className="text-xs text-rose-600 font-semibold mb-6">5.4k bÃºsquedas/mes</p>
            <a
              href="/articulos/frases-amor-cortas"
              className="text-rose-600 font-semibold hover:text-rose-700 transition-colors"
            >
              Leer ArtÃ­culo â†’
            </a>
          </article>

          {/* Card 2: Bonitas */}
          <article className="flex flex-col h-full bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-lg border border-rose-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">💕</span>
              <div className="w-1 h-12 bg-rose-500"></div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--ink)] mb-4">
              Frases Bonitas
            </h3>
            <p className="text-[var(--ink-60)] text-sm leading-relaxed mb-4 flex-grow">
              Belleza lÃ­rica para tus sentimientos. Expresiones romÃ¡nticas de autores clÃ¡sicos y modernos.
            </p>
            <p className="text-xs text-rose-600 font-semibold mb-6">3.6k bÃºsquedas/mes</p>
            <a
              href="/articulos/frases-amor-bonitas"
              className="text-rose-600 font-semibold hover:text-rose-700 transition-colors"
            >
              Leer ArtÃ­culo â†’
            </a>
          </article>

          {/* Card 3: Dedicar */}
          <article className="flex flex-col h-full bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-lg border border-rose-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">💌</span>
              <div className="w-1 h-12 bg-rose-500"></div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--ink)] mb-4">
              Para Dedicar
            </h3>
            <p className="text-[var(--ink-60)] text-sm leading-relaxed mb-4 flex-grow">
              Expresiones perfectas para momentos especiales y declaraciones de amor sinceras.
            </p>
            <p className="text-xs text-rose-600 font-semibold mb-6">6.6k bÃºsquedas/mes</p>
            <a
              href="/articulos/frases-amor-dedicar"
              className="text-rose-600 font-semibold hover:text-rose-700 transition-colors"
            >
              Leer ArtÃ­culo â†’
            </a>
          </article>

          {/* Card 4: Amor Propio */}
          <article className="flex flex-col h-full bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-lg border border-rose-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🌟</span>
              <div className="w-1 h-12 bg-rose-500"></div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--ink)] mb-4">
              Amor Propio
            </h3>
            <p className="text-[var(--ink-60)] text-sm leading-relaxed mb-4 flex-grow">
              Empoderamiento y autoaceptaciÃ³n. Frases para quererte mÃ¡s y fortalecer tu autoestima.
            </p>
            <p className="text-xs text-rose-600 font-semibold mb-6">12.1k bÃºsquedas/mes</p>
            <a
              href="/articulos/frases-amor-propio"
              className="text-rose-600 font-semibold hover:text-rose-700 transition-colors"
            >
              Leer ArtÃ­culo â†’
            </a>
          </article>

          {/* Card 5: Profundo */}
          <article className="flex flex-col h-full bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-lg border border-rose-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">💎</span>
              <div className="w-1 h-12 bg-rose-500"></div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--ink)] mb-4">
              Amor Profundo
            </h3>
            <p className="text-[var(--ink-60)] text-sm leading-relaxed mb-4 flex-grow">
              Conexiones autÃ©nticas y sinceras. Reflexiones sobre el amor verdadero y eterno.
            </p>
            <p className="text-xs text-rose-600 font-semibold mb-6">2.4k bÃºsquedas/mes</p>
            <a
              href="/articulos/frases-amor-profundo"
              className="text-rose-600 font-semibold hover:text-rose-700 transition-colors"
            >
              PrÃ³ximamente â†’
            </a>
          </article>

          {/* Card 6: Poemas */}
          <article className="flex flex-col h-full bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-lg border border-rose-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📖</span>
              <div className="w-1 h-12 bg-rose-500"></div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--ink)] mb-4">
              Poemas
            </h3>
            <p className="text-[var(--ink-60)] text-sm leading-relaxed mb-4 flex-grow">
              ExpresiÃ³n romÃ¡ntica clÃ¡sica. PoesÃ­a que toca el alma y permanece en el recuerdo.
            </p>
            <p className="text-xs text-rose-600 font-semibold mb-6">2.1k bÃºsquedas/mes</p>
            <a
              href="/articulos/poemas-amor"
              className="text-rose-600 font-semibold hover:text-rose-700 transition-colors"
            >
              PrÃ³ximamente â†’
            </a>
          </article>
        </div>
      </section>

      {/* AdSense: In-feed (300x250) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-center">
        <div className="w-80 h-72 bg-[var(--surface-alt)] rounded border border-[var(--ink-20)] flex items-center justify-center text-[var(--ink-40)]">
          <span className="text-sm">Espacio para publicidad (300x250)</span>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
      </div>

      {/* Editorial Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[var(--ink)] mb-8">
          Â¿Por QuÃ© las Palabras Importan?
        </h2>
        <p className="text-xl text-[var(--ink-60)] leading-relaxed mb-8 font-light">
          El amor es la emociÃ³n mÃ¡s profunda del ser humano. A travÃ©s de frases sinceras y reflexiones de grandes pensadores,
          descubrimos nuevas formas de expresar lo que sentimos y fortalecer nuestras relaciones.
        </p>
        <p className="text-lg text-slate-500 italic font-light">
          "Las palabras tienen el poder de transformar relaciones, sanar heridas y conectar almas."
        </p>
      </section>

      {/* Secondary Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-[var(--ink)] mb-12 text-center">
          MÃ¡s Recursos
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Autores Famosos */}
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <h4 className="text-2xl font-bold text-[var(--ink)] mb-4">ðŸ“š Autores Famosos</h4>
            <p className="text-[var(--ink-60)] text-sm mb-6">
              Citas inspiradoras de Shakespeare, Neruda, Coelho y otros grandes pensadores sobre el amor.
            </p>
            <a
              href="/autores-famosos"
              className="text-rose-600 font-semibold hover:text-rose-700 transition-colors"
            >
              Explorar â†’
            </a>
          </div>

          {/* Ocasiones Especiales */}
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <h4 className="text-2xl font-bold text-[var(--ink)] mb-4">ðŸŽ‰ Ocasiones Especiales</h4>
            <p className="text-[var(--ink-60)] text-sm mb-6">
              Frases perfectas para San ValentÃ­n, aniversarios, cumpleaÃ±os y momentos memorables.
            </p>
            <a
              href="/ocasiones-especiales"
              className="text-rose-600 font-semibold hover:text-rose-700 transition-colors"
            >
              Explorar â†’
            </a>
          </div>
        </div>
      </section>

      {/* AdSense: In-feed (300x250) - Before Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-center">
        <div className="w-80 h-72 bg-[var(--surface-alt)] rounded border border-[var(--ink-20)] flex items-center justify-center text-[var(--ink-40)]">
          <span className="text-sm">Espacio para publicidad (300x250)</span>
        </div>
      </div>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-t border-slate-200">
        <p className="text-[var(--ink-60)] text-lg mb-6">
          Encuentra la frase perfecta para expresar tu amor
        </p>
        <a
          href="/articulos/frases-amor-propio"
          className="inline-block px-8 py-3 bg-rose-600 text-white font-semibold rounded-full hover:bg-rose-700 transition-colors"
        >
          Comenzar Ahora
        </a>
      </section>
    </div>
  );
}

// Force rebuild 09/08/2026 09:16:45
