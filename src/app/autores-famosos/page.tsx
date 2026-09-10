export default function AutoresFamosos() {
  return (
    <article className="min-h-screen bg-white">
      {/* AdSense: Leaderboard (728x90) */}
      <div className="flex justify-center py-4 px-4">
        <div className="w-full max-w-screen-lg h-24 bg-[var(--surface-alt)] rounded border border-[var(--ink-20)] flex items-center justify-center text-[var(--ink-60)]">
          <span className="text-sm">Espacio para publicidad (728x90)</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-rose-600 tracking-widest uppercase mb-4">
            Sabiduría Clásica
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl sm:text-6xl font-bold text-[var(--ink)] mb-6 leading-tight">
            Frases de Amor de Autores Famosos
          </h1>
        </div>

        {/* Intro */}
        <div className="prose prose-lg max-w-none text-center mb-12">
          <p className="text-xl text-[var(--ink-60)] leading-relaxed font-light">
            Los grandes autores del mundo han dedicado sus vidas a entender el amor. Sus palabras trascienden siglos y continentes, tocando el corazón de millones.
          </p>
          <p className="text-lg text-[var(--ink-60)] mt-6">
            Desde la poesía romántica de Rubén Darío hasta la filosofía de Paulo Coelho, descubre cómo los maestros de la escritura han capturado la esencia del sentimiento más profundo que existe.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
      </div>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Section 1: Autores Destacados */}
        <div className="mb-16">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl font-bold text-[var(--ink)] mb-12">
            Los Autores Más Citados sobre Amor
          </h2>

          <div className="space-y-14">
            {/* Autor 1: Pablo Neruda */}
            <div className="border-l-4 border-rose-500 pl-6 py-4">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-[var(--ink)]">Pablo Neruda</h3>
                <span className="text-sm bg-rose-50 text-rose-700 px-3 py-1 rounded-full">Poeta Chileno</span>
              </div>

              <p className="text-[var(--ink-60)] text-sm mb-4">
                Poeta chileno (1904-1973). Nobel de Literatura 1971. Revolucionó la poesía moderna con un lenguaje directo y apasionado.
              </p>

              <div className="bg-rose-50 p-6 rounded-lg mb-4">
                <p className="text-[var(--ink)] italic mb-3 text-lg">
                  "Puedo escribir los versos más tristes esta noche. Yo la quise, y a veces ella también me quiso."
                </p>
                <p className="text-[var(--ink-60)] text-sm">
                  Inicio de "Veinte poemas de amor y una canción de desesperación", su obra más icónica sobre el dolor y la pasión.
                </p>
              </div>

              <p className="text-[var(--ink-60)] mb-4">
                Neruda escribía desde la vulnerabilidad. Sus versos capturan la tristeza, la obsesión y la entrega sin filtros. Es el poeta del amor sincero, no del romanticismo fingido.
              </p>
            </div>

            {/* Autor 2: Rubén Darío */}
            <div className="border-l-4 border-rose-500 pl-6 py-4">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-[var(--ink)]">Rubén Darío</h3>
                <span className="text-sm bg-rose-50 text-rose-700 px-3 py-1 rounded-full">Poeta Nicaragüeño</span>
              </div>

              <p className="text-[var(--ink-60)] text-sm mb-4">
                Poeta nicaragüeño (1867-1916). Fundador del modernismo literario. Transformó la poesía hispanoamericana con belleza y sensibilidad.
              </p>

              <div className="bg-rose-50 p-6 rounded-lg mb-4">
                <p className="text-[var(--ink)] italic mb-3 text-lg">
                  "Margarita, está linda la mar, y el viento lleva esencia de azahar."
                </p>
                <p className="text-[var(--ink-60)] text-sm">
                  Del "Madrigal", donde Darío convierte la naturaleza en símbolo de belleza femenina. Versos que evocan sensualidad y adoración.
                </p>
              </div>

              <p className="text-[var(--ink-60)] mb-4">
                Darío elevaba el amor a lo poético. Cada verso es una joya literaria que mezcla lo sensual con lo espiritual. Ideal para quien busca expresar amor de forma elegante.
              </p>
            </div>

            {/* Autor 3: Federico García Lorca */}
            <div className="border-l-4 border-rose-500 pl-6 py-4">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-[var(--ink)]">Federico García Lorca</h3>
                <span className="text-sm bg-rose-50 text-rose-700 px-3 py-1 rounded-full">Poeta Español</span>
              </div>

              <p className="text-[var(--ink-60)] text-sm mb-4">
                Poeta español (1898-1936). Líder de la Generación del 27. Revolucionó la poesía con simbolismo profundo y musicalidad hipnotizante.
              </p>

              <div className="bg-rose-50 p-6 rounded-lg mb-4">
                <p className="text-[var(--ink)] italic mb-3 text-lg">
                  "Verde que te quiero verde. Verde es el amor."
                </p>
                <p className="text-[var(--ink-60)] text-sm">
                  La obsesión amorosa en su forma más pura. Lorca repite el color para hipnotizar, capturando la fijación del deseo apasionado.
                </p>
              </div>

              <p className="text-[var(--ink-60)] mb-4">
                Lorca escribía con ritmo y mantra. Sus versos son como canciones que se repiten en la mente. Perfecto para expresar obsesión amorosa de forma poética.
              </p>
            </div>

            {/* Autor 4: Gustavo Adolfo Bécquer */}
            <div className="border-l-4 border-rose-500 pl-6 py-4">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-[var(--ink)]">Gustavo Adolfo Bécquer</h3>
                <span className="text-sm bg-rose-50 text-rose-700 px-3 py-1 rounded-full">Poeta Español</span>
              </div>

              <p className="text-[var(--ink-60)] text-sm mb-4">
                Poeta español (1836-1870). Romántico por excelencia. Sus "Rimas" son consideradas las joyas de la poesía amorosa española.
              </p>

              <div className="bg-rose-50 p-6 rounded-lg mb-4">
                <p className="text-[var(--ink)] italic mb-3 text-lg">
                  "Volverán las oscuras golondrinas en tu balcón sus nidos a colgar."
                </p>
                <p className="text-[var(--ink-60)] text-sm">
                  La melancolía del amor perdido. Bécquer juega con ciclos naturales para expresar que todo regresa excepto lo que más se desea.
                </p>
              </div>

              <p className="text-[var(--ink-60)] mb-4">
                Bécquer escribe desde la nostalgia. Sus versos hablan de ausencias, esperanzas no cumplidas y la belleza melancólica de lo que se perdió. Ideal para reflexionar sobre separaciones.
              </p>
            </div>

            {/* Autor 5: Paulo Coelho */}
            <div className="border-l-4 border-rose-500 pl-6 py-4">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-[var(--ink)]">Paulo Coelho</h3>
                <span className="text-sm bg-rose-50 text-rose-700 px-3 py-1 rounded-full">Autor Brasileño</span>
              </div>

              <p className="text-[var(--ink-60)] text-sm mb-4">
                Autor brasileño (1947-). Bestseller mundial. Combina filosofía espiritual con narrativa accesible. "El Alquimista" ha vendido millones de copias.
              </p>

              <div className="bg-rose-50 p-6 rounded-lg mb-4">
                <p className="text-[var(--ink)] italic mb-3 text-lg">
                  "Cuando quieres algo, todo el universo conspira para ayudarte a conseguirlo."
                </p>
                <p className="text-[var(--ink-60)] text-sm">
                  Filosofía del amor como destino. Coelho cree que el amor verdadero es una manifestación del universo trabajando a tu favor.
                </p>
              </div>

              <p className="text-[var(--ink-60)] mb-4">
                Coelho escribe para el lector moderno. Sus reflexiones sobre el amor conectan espiritualidad con realidad cotidiana. Ideal para quien busca significado profundo.
              </p>
            </div>

            {/* Autor 6: Charles Bukowski */}
            <div className="border-l-4 border-rose-500 pl-6 py-4">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-[var(--ink)]">Charles Bukowski</h3>
                <span className="text-sm bg-rose-50 text-rose-700 px-3 py-1 rounded-full">Poeta Americano</span>
              </div>

              <p className="text-[var(--ink-60)] text-sm mb-4">
                Poeta americano (1920-1994). Escribía desde la marginalidad. Su poesía es cruda, honesta y rechaza toda pretensión romántica.
              </p>

              <div className="bg-rose-50 p-6 rounded-lg mb-4">
                <p className="text-[var(--ink)] italic mb-3 text-lg">
                  "Finds what you love and let it kill you."
                </p>
                <p className="text-[var(--ink-60)] text-sm">
                  Amor radical. Bukowski cree que el amor verdadero exige sacrificio total, que debe consumirte completamente. Sin filtros ni romanticismo.
                </p>
              </div>

              <p className="text-[var(--ink-60)] mb-4">
                Bukowski escribe la verdad incómoda. Si buscas expresar que tu amor es absoluto, sin reservas, sin pretensiones, Bukowski tiene las palabras exactas.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent my-12"></div>

        {/* Section 2: Temas por Autor */}
        <div className="mb-16">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl font-bold text-[var(--ink)] mb-8">
            Elige el Autor Según tu Necesidad
          </h2>

          <div className="space-y-6 text-[var(--ink-60)]">
            <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-500">
              <h3 className="font-bold text-[var(--ink)] mb-3">🌙 Si quieres expresar tristeza o nostalgia</h3>
              <p className="mb-2">
                Lee a <strong>Gustavo Adolfo Bécquer</strong> o <strong>Pablo Neruda</strong>. Ambos capturan la melancolía del amor perdido con belleza devastadora.
              </p>
              <p className="text-sm">
                Ideal para reconciliaciones, reflexiones sobre ausencias, o simplemente validar que la tristeza amorosa es bella.
              </p>
            </div>

            <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-500">
              <h3 className="font-bold text-[var(--ink)] mb-3">✨ Si quieres sonar elegante y romántico</h3>
              <p className="mb-2">
                Lee a <strong>Rubén Darío</strong>. Sus versos son joyería literaria que convierte lo cotidiano en sagrado.
              </p>
              <p className="text-sm">
                Perfecto para dedicatorias formales, declaraciones de amor clásico, o impresionar con belleza poética.
              </p>
            </div>

            <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-500">
              <h3 className="font-bold text-[var(--ink)] mb-3">🔥 Si quieres expresar pasión obsesiva</h3>
              <p className="mb-2">
                Lee a <strong>Federico García Lorca</strong> o <strong>Charles Bukowski</strong>. Su lenguaje es hipnótico y crudo.
              </p>
              <p className="text-sm">
                Ideal para parejas nuevas, momentos de deseo intenso, o cuando el amor te consume completamente.
              </p>
            </div>

            <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-500">
              <h3 className="font-bold text-[var(--ink)] mb-3">🌟 Si buscas significado espiritual</h3>
              <p className="mb-2">
                Lee a <strong>Paulo Coelho</strong>. Conecta el amor con el propósito de vida y la manifestación del universo.
              </p>
              <p className="text-sm">
                Perfecto para parejas que comparten valores espirituales o cuando quieres darle un significado más profundo a la relación.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent my-12"></div>

        {/* Section 3: Cómo Leerlos */}
        <div className="mb-16">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl font-bold text-[var(--ink)] mb-8">
            Cómo Aprovechar la Literatura de Amor
          </h2>

          <div className="space-y-6 text-[var(--ink-60)]">
            <div className="border-b border-[var(--ink-20)] pb-6">
              <h3 className="font-bold text-[var(--ink)] mb-3">📚 Lee completo, no solo citas</h3>
              <p className="leading-relaxed">
                Una frase aislada pierde contexto. Si te impacta un verso, busca el poema completo. Entiende por qué el poeta escribía eso. La profundidad viene del contexto.
              </p>
            </div>

            <div className="border-b border-[var(--ink-20)] pb-6">
              <h3 className="font-bold text-[var(--ink)] mb-3">🗣️ Recita con voz, no solo con ojos</h3>
              <p className="leading-relaxed">
                Los poemas están hechos para sonar. Lee en voz alta. Escucha el ritmo, la métrica, la musicalidad. Tu voz añade una dimensión que la lectura silenciosa no puede.
              </p>
            </div>

            <div className="border-b border-[var(--ink-20)] pb-6">
              <h3 className="font-bold text-[var(--ink)] mb-3">💭 Medita sobre lo que resuena</h3>
              <p className="leading-relaxed">
                Cuando un verso te golpea el pecho, detente. ¿Por qué te impacta? ¿Qué verdad expresa sobre ti? La poesía no es para pasar, es para permanecer en ella.
              </p>
            </div>

            <div className="border-b border-[var(--ink-20)] pb-6">
              <h3 className="font-bold text-[var(--ink)] mb-3">🎁 Dedica con intención, no por obligación</h3>
              <p className="leading-relaxed">
                Si regalas un verso, hazlo porque realmente crees que expresa lo que sientes. La autenticidad se percibe. Tu pareja sabrá si es genuino o si solo lo encontraste en Google.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent my-12"></div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-8 rounded-lg mb-12">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl font-bold text-[var(--ink)] mb-6">
            La Herencia del Amor Escrito
          </h2>
          <p className="text-[var(--ink-60)] leading-relaxed mb-4">
            Estos autores vivieron en épocas diferentes, escribieron en idiomas distintos, experimentaron amores únicos. Y sin embargo, sus palabras resuenan hoy porque capturaron algo universal: la verdad del sentimiento humano.
          </p>
          <p className="text-[var(--ink-60)] leading-relaxed mb-6">
            Cuando lees a Neruda o a Lorca, no estás leyendo historias antiguas. Estás conectando con la experiencia humana que te precede. Estás participando de una conversación que lleva siglos.
          </p>
          <p className="text-[var(--ink)] font-semibold">
            Elige tu poeta. Deja que sus palabras se conviertan en las tuyas. Que su verdad se vuelva tu verdad también.
          </p>
        </div>

        {/* Por qué creé este sitio */}
        <div className="my-16 pt-12 border-t-2 border-rose-200">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl font-bold text-[var(--ink)] mb-8">
            Por Qué Creé Mejores Frases de Amor
          </h2>

          <div className="space-y-6 text-[var(--ink-60)] leading-relaxed text-lg">
            <p>
              Trabajé muchos años en eventos sociales: bodas, quince años, agasajos familiares. Durante todo ese tiempo descubrí algo que se repetía constantemente.
            </p>

            <p>
              Novios querían decir algo bonito a sus parejas. Padres querían expresar lo que sentían hacia sus hijos en un momento especial. Quinceañeras querían agradecerle a sus familias. Pero todos tenían el mismo miedo: <strong>caer en la cursilería, no saber qué decir de verdad</strong>.
            </p>

            <p>
              Por eso creé este sitio. No como un lugar más con frases genéricas, sino como un espacio de consulta real donde puedas encontrar inspiración. Un lugar donde descubras que los sentimientos que hoy atravesas son los mismos que han atravesado a la humanidad desde siempre.
            </p>

            <p>
              <strong>Este sitio es para todos:</strong> para quien quiere expresar amor a una pareja, para padres que buscan palabras para sus hijos, para amigos que quieren estar presentes en momentos importantes, para quien siente que algo bonito merece ser dicho de verdad.
            </p>

            <p className="text-[var(--ink)] font-semibold text-lg">
              Porque no debería haber miedo a expresar lo que sentimos. Solo inspiración.
            </p>
          </div>
        </div>

        {/* Internal Links */}
        <div className="my-12">
          <h3 className="text-2xl font-bold text-[var(--ink)] mb-6">Explora Más Frases de Amor</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/articulos/poemas-amor"
              className="block p-6 bg-rose-50 rounded-lg border border-rose-200 hover:shadow-md transition-shadow"
            >
              <p className="font-bold text-[var(--ink)] mb-2">Poemas de Amor</p>
              <p className="text-sm text-[var(--ink-60)]">Versos de autores clásicos completos para dedicar.</p>
            </a>
            <a
              href="/articulos/frases-amor-profundo"
              className="block p-6 bg-rose-50 rounded-lg border border-rose-200 hover:shadow-md transition-shadow"
            >
              <p className="font-bold text-[var(--ink)] mb-2">Amor Profundo</p>
              <p className="text-sm text-[var(--ink-60)]">Frases sobre conexión emocional y vulnerabilidad genuina.</p>
            </a>
            <a
              href="/"
              className="block p-6 bg-rose-50 rounded-lg border border-rose-200 hover:shadow-md transition-shadow"
            >
              <p className="font-bold text-[var(--ink)] mb-2">Todas las Colecciones</p>
              <p className="text-sm text-[var(--ink-60)]">Explora todas nuestras categorías de frases de amor.</p>
            </a>
          </div>
        </div>
      </section>

      {/* AdSense: In-feed (300x250) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-center">
        <div className="w-80 h-72 bg-[var(--surface-alt)] rounded border border-[var(--ink-20)] flex items-center justify-center text-[var(--ink-40)]">
          <span className="text-sm">Espacio para publicidad (300x250)</span>
        </div>
      </div>

      {/* FAQ Schema */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[var(--ink)] mb-8">Preguntas Frecuentes</h2>
        <div className="space-y-6">
          <div className="border-b border-[var(--ink-20)] pb-6">
            <h3 className="font-bold text-[var(--ink)] mb-3">¿Cuál es el mejor autor para leer si recién comienzo con la poesía?</h3>
            <p className="text-[var(--ink-60)]">
              Comienza con Paulo Coelho o Rubén Darío. Ambos tienen un lenguaje accesible pero profundo. Evita a Lorca si eres principiante; su estilo es más hermético y requiere familiaridad previa.
            </p>
          </div>
          <div className="border-b border-[var(--ink-20)] pb-6">
            <h3 className="font-bold text-[var(--ink)] mb-3">¿Puedo citar a estos autores en mis dedicatorias?</h3>
            <p className="text-[var(--ink-60)]">
              Absolutamente. Es más, hacerlo demuestra que has pensado en encontrar las palabras perfectas. Solo asegúrate de dar crédito: "Como dijo Neruda..." o "Rubén Darío escribió..."
            </p>
          </div>
          <div className="border-b border-[var(--ink-20)] pb-6">
            <h3 className="font-bold text-[var(--ink)] mb-3">¿Hay autores más modernos que hable sobre amor?</h3>
            <p className="text-[var(--ink-60)]">
              Sí, pero los clásicos tienen una ventaja: durabilidad emocional. Sus versos han sido probados por siglos. Autores modernos son más inmediatos pero menos atemporales. Combina ambos.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center border-t border-[var(--ink-20)]">
        <p className="text-[var(--ink-60)] text-lg mb-6">
          ¿Listo para subirte a los hombros de los gigantes literarios?
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-rose-600 text-white font-semibold rounded-full hover:bg-rose-700 transition-colors"
        >
          Volver al Inicio
        </a>
      </section>

      {/* AdSense: Before Footer */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-center">
        <div className="w-80 h-72 bg-[var(--surface-alt)] rounded border border-[var(--ink-20)] flex items-center justify-center text-[var(--ink-40)]">
          <span className="text-sm">Espacio para publicidad (300x250)</span>
        </div>
      </div>
    </article>
  );
}

// Meta + Schema
export const metadata = {
  title: "Frases de Amor de Autores Famosos | Neruda, Darío, Lorca y Más",
  description: "Descubre frases de amor de autores clásicos: Pablo Neruda, Rubén Darío, Federico García Lorca, Bécquer, Paulo Coelho y Bukowski. Poesía y sabiduría amorosa.",
  keywords: "frases de amor de autores, Pablo Neruda frases, Rubén Darío amor, García Lorca frases de amor, Bécquer",
  openGraph: {
    title: "Frases de Amor de Autores Famosos",
    description: "Descubre los mejores autores que escriben sobre amor",
    url: "https://mejoresfrasesdeamor.com/autores-famosos",
    type: "article",
  },
};
