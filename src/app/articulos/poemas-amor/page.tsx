export default function PoemiasDeAmor() {
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
            Poesía Romántica
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl sm:text-6xl font-bold text-[var(--ink)] mb-6 leading-tight">
            Poemas de Amor
          </h1>
        </div>

        {/* Intro */}
        <div className="prose prose-lg max-w-none text-center mb-12">
          <p className="text-xl text-[var(--ink-60)] leading-relaxed font-light">
            Los poemas de amor expresan lo que las palabras cotidianas no alcanzan. Capturan la ternura, el deseo y la profundidad en cada verso, ofreciendo un lenguaje universal para los sentimientos más intensos.
          </p>
          <p className="text-lg text-[var(--ink-60)] mt-6">
            Esta recopilación trae versos de autores reconocidos que han tocado millones de corazones. Cada poema es una invitación a expresar, a sentir y a conectar con la persona amada de forma auténtica.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
      </div>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Section 1: Los Mejores Poemas */}
        <div className="mb-16">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl font-bold text-[var(--ink)] mb-12">
            Los Mejores Poemas de Amor
          </h2>

          <div className="space-y-12">
            {/* Poem 1: Neruda */}
            <div className="border-l-4 border-rose-500 pl-6 py-4">
              <h3 className="text-xl font-bold text-[var(--ink)] mb-3">
                "Puedo escribir los versos más tristes esta noche"
              </h3>
              <p className="text-[var(--ink-60)] italic mb-4">
                — Pablo Neruda
              </p>
              <p className="text-[var(--ink)] leading-relaxed mb-3">
                Neruda inicia su célebre poema con una confesión de dolor, reconociendo que el amor y la pérdida son inseparables. Este verso resuena porque valida la tristeza como parte legítima del sentimiento amoroso.
              </p>
              <p className="text-[var(--ink-60)] text-sm">
                <strong>Ideal para:</strong> Momentos de reflexión, despedidas amorosas o cuando quieres expresar vulnerabilidad.
              </p>
            </div>

            {/* Poem 2: Darío */}
            <div className="border-l-4 border-rose-500 pl-6 py-4">
              <h3 className="text-xl font-bold text-[var(--ink)] mb-3">
                "Margarita, está linda la mar, y el viento lleva esencia de azahar"
              </h3>
              <p className="text-[var(--ink-60)] italic mb-4">
                — Rubén Darío
              </p>
              <p className="text-[var(--ink)] leading-relaxed mb-3">
                Darío transforma la naturaleza en símbolo de belleza, comparando la persona amada con el esplendor del mar. La sensualidad lírica y la precisión poética hacen de este uno de los versos más memorables del romanticismo.
              </p>
              <p className="text-[var(--ink-60)] text-sm">
                <strong>Ideal para:</strong> Declaraciones de amor, momentos románticos bajo las estrellas, dedicatorias sinceras.
              </p>
            </div>

            {/* Poem 3: Lorca */}
            <div className="border-l-4 border-rose-500 pl-6 py-4">
              <h3 className="text-xl font-bold text-[var(--ink)] mb-3">
                "Verde que te quiero verde"
              </h3>
              <p className="text-[var(--ink-60)] italic mb-4">
                — Federico García Lorca
              </p>
              <p className="text-[var(--ink)] leading-relaxed mb-3">
                La obsesión amorosa en su forma más pura. Lorca repite el color para enfatizar la totalidad del deseo, creando un efecto hipnotizante que captura la fijación emocional del enamorado.
              </p>
              <p className="text-[var(--ink-60)] text-sm">
                <strong>Ideal para:</strong> Expresar obsesión amorosa de forma poética, mensajes que demuestren pasión constante.
              </p>
            </div>

            {/* Poem 4: Bécquer */}
            <div className="border-l-4 border-rose-500 pl-6 py-4">
              <h3 className="text-xl font-bold text-[var(--ink)] mb-3">
                "Volverán las oscuras golondrinas en tu balcón sus nidos a colgar"
              </h3>
              <p className="text-[var(--ink-60)] italic mb-4">
                — Gustavo Adolfo Bécquer
              </p>
              <p className="text-[var(--ink)] leading-relaxed mb-3">
                La certeza de que todo regresa excepto el amor perdido. Bécquer juega con la esperanza y la resignación, creando una melancolía que toca profundamente porque habla de ciclos naturales y destino emocional.
              </p>
              <p className="text-[var(--ink-60)] text-sm">
                <strong>Ideal para:</strong> Reflexionar sobre separaciones, nostalgias amorosas, reconciliaciones.
              </p>
            </div>

            {/* Poem 5: Bukowski */}
            <div className="border-l-4 border-rose-500 pl-6 py-4">
              <h3 className="text-xl font-bold text-[var(--ink)] mb-3">
                "Finds what you love and let it kill you"
              </h3>
              <p className="text-[var(--ink-60)] italic mb-4">
                — Charles Bukowski
              </p>
              <p className="text-[var(--ink)] leading-relaxed mb-3">
                Bukowski rechaza el romanticismo suave para ofrecernos una verdad radical: el amor real exige sacrificio total. Esta visión despojada de sentimentalismos habla de pasión auténtica y compromiso absoluto.
              </p>
              <p className="text-[var(--ink-60)] text-sm">
                <strong>Ideal para:</strong> Declarar devoción incondicional, expresar que el amor es tu prioridad absoluta.
              </p>
            </div>

            {/* Poem 6: Dickinson */}
            <div className="border-l-4 border-rose-500 pl-6 py-4">
              <h3 className="text-xl font-bold text-[var(--ink)] mb-3">
                "If you were coming in the Fall, I'd brush the Summer by"
              </h3>
              <p className="text-[var(--ink-60)] italic mb-4">
                — Emily Dickinson
              </p>
              <p className="text-[var(--ink)] leading-relaxed mb-3">
                La espera amorosa convertida en arte. Dickinson captura cómo el tiempo se detiene cuando anticipamos estar con quien amamos. Cada hora se vuelve un sacrificio tolerable si significa verlo.
              </p>
              <p className="text-[var(--ink-60)] text-sm">
                <strong>Ideal para:</strong> Distancia amorosa, relaciones a larga distancia, anticipación del encuentro.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent my-12"></div>

        {/* Section 2: ¿Por qué resuenan? */}
        <div className="mb-16">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl font-bold text-[var(--ink)] mb-8">
            ¿Por Qué Estos Poemas Resuenan en Nuestro Corazón?
          </h2>

          <div className="space-y-6 text-[var(--ink-60)] leading-relaxed">
            <p>
              La poesía de amor funciona como un espejo emocional. Cuando lees versos que describen exactamente lo que sientes, experimentas un alivio profundo. No estás solo. Otros han sentido esto antes, lo han sobrevivido, y lo han transformado en belleza.
            </p>

            <p>
              Los grandes poetas dominan la <strong>precisión emocional</strong>. Pueden nombrar sensaciones que tú ni siquiera sabías que tenían palabras. Esa validación es poderosa: confirma que tus emociones son reales, significativas y compartidas por la humanidad.
            </p>

            <p>
              Además, la estructura del verso —la métrica, la rima, el ritmo— crea una musicalidad que trasciende el significado literal. Tu cerebro retiene estos poemas porque funcionan como canciones del alma. Se quedan contigo.
            </p>

            <p>
              La mayoría de estos poemas nacieron del <strong>sufrimiento genuino</strong>. Neruda escribía desde la desesperación. Bécquer desde la pérdida. Esta autenticidad es lo que los hace imperecederos. No son construcciones vacías; son grietas por donde entra la luz.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent my-12"></div>

        {/* Section 3: Cómo Usarlas */}
        <div className="mb-16">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl font-bold text-[var(--ink)] mb-8">
            Cómo Usar Estos Poemas en Tu Relación
          </h2>

          <div className="space-y-6 text-[var(--ink-60)]">
            <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-500">
              <h3 className="font-bold text-[var(--ink)] mb-3">📱 En WhatsApp o Redes Sociales</h3>
              <p className="leading-relaxed">
                Dedica un verso al amanecer. No necesita explicación; los grandes poemas hablan solos. Acompaña con una foto tuya o de ustedes dos. El impacto es doble: belleza + intimidad.
              </p>
            </div>

            <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-500">
              <h3 className="font-bold text-[var(--ink)] mb-3">💌 En una Tarjeta Manuscrita</h3>
              <p className="leading-relaxed">
                Escribe a mano un fragmento de tu poema favorito. El esfuerzo de la caligrafía añade valor emocional. Esa tangibilidad permanece más tiempo en la memoria que cualquier mensaje digital.
              </p>
            </div>

            <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-500">
              <h3 className="font-bold text-[var(--ink)] mb-3">🎤 Recitados en Momentos Especiales</h3>
              <p className="leading-relaxed">
                Aniversarios, cenas románticas, encuentros después de tiempo separados. No temas ser vulnerable. Recitar poesía es un acto de coraje que demuestra entrega genuina.
              </p>
            </div>

            <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-500">
              <h3 className="font-bold text-[var(--ink)] mb-3">🎵 Como Letra de Canción</h3>
              <p className="leading-relaxed">
                Algunos versos tienen ritmo natural. Léelos como si fueran una canción. El musicales permite que penetren más profundamente en el corazón de quien los escucha.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent my-12"></div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-8 rounded-lg mb-12">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl font-bold text-[var(--ink)] mb-6">
            El Poder Eterno de la Poesía Amorosa
          </h2>
          <p className="text-[var(--ink-60)] leading-relaxed mb-4">
            La poesía de amor no envejece porque habla a un nivel que trasciende la moda, la tecnología y las épocas. Neruda escribía hace un siglo y sus versos siguen siendo el lenguaje del corazón humano.
          </p>
          <p className="text-[var(--ink-60)] leading-relaxed mb-6">
            Cuando sientes que las palabras no son suficientes, la poesía viene a rescatarte. Te da las palabras que necesitas. Te permite decir "te amo" de formas tan hermosas que la persona amada comprenderá la magnitud de tu sentimiento.
          </p>
          <p className="text-[var(--ink)] font-semibold">
            ¿Cuál es tu poema favorito? La próxima vez que lo leas, hazlo con intención. Dedícalo. Comparte. Transforma esas palabras en acción emocional.
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
          <h3 className="text-2xl font-bold text-[var(--ink)] mb-6">Explora Más Expresiones de Amor</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/articulos/frases-amor-cortas"
              className="block p-6 bg-rose-50 rounded-lg border border-rose-200 hover:shadow-md transition-shadow"
            >
              <p className="font-bold text-[var(--ink)] mb-2">Frases Cortas de Amor</p>
              <p className="text-sm text-[var(--ink-60)]">Impacto máximo en pocas palabras para dedicar al instante.</p>
            </a>
            <a
              href="/articulos/frases-amor-bonitas"
              className="block p-6 bg-rose-50 rounded-lg border border-rose-200 hover:shadow-md transition-shadow"
            >
              <p className="font-bold text-[var(--ink)] mb-2">Frases Bonitas de Amor</p>
              <p className="text-sm text-[var(--ink-60)]">Belleza lírica para tus sentimientos más profundos.</p>
            </a>
            <a
              href="/articulos/frases-amor-dedicar"
              className="block p-6 bg-rose-50 rounded-lg border border-rose-200 hover:shadow-md transition-shadow"
            >
              <p className="font-bold text-[var(--ink)] mb-2">Frases para Dedicar</p>
              <p className="text-sm text-[var(--ink-60)]">Expresiones perfectas para momentos especiales y declaraciones.</p>
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
            <h3 className="font-bold text-[var(--ink)] mb-3">¿Puedo usar estos poemas para dedicar en redes sociales?</h3>
            <p className="text-[var(--ink-60)]">
              Absolutamente. Los poemas que compartimos son de dominio público o de autores contemporáneos reconocidos. Dedícalos libremente, siempre dando crédito al poeta original.
            </p>
          </div>
          <div className="border-b border-[var(--ink-20)] pb-6">
            <h3 className="font-bold text-[var(--ink)] mb-3">¿Qué hago si mi pareja no entiende la poesía?</h3>
            <p className="text-[var(--ink-60)]">
              Recita el poema con emoción genuina. Luego, habla sobre lo que significa para ti. La intención es lo que importa. La poesía es un puente entre corazones, no una prueba de intelecto.
            </p>
          </div>
          <div className="border-b border-[var(--ink-20)] pb-6">
            <h3 className="font-bold text-[var(--ink)] mb-3">¿Es mejor dedicar poemas clásicos o escribir los propios?</h3>
            <p className="text-[var(--ink-60)]">
              Ambos son válidos. Los clásicos ofrecen belleza comprobada. Los propios ofrecen autenticidad. Lo ideal: combina versos reconocidos con palabras tuyas para crear algo único.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center border-t border-[var(--ink-20)]">
        <p className="text-[var(--ink-60)] text-lg mb-6">
          ¿Listo para expresar tu amor de forma auténtica?
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
  title: "Poemas de Amor | Versos Auténticos que Tocan el Alma",
  description: "Descubre los mejores poemas de amor de autores clásicos. Versos de Neruda, Darío, Lorca y más para dedicar y expresar sentimientos profundos.",
  keywords: "poemas de amor, poesía amorosa, versos de amor, poemas románticos",
  openGraph: {
    title: "Poemas de Amor | Versos que Tocan el Alma",
    description: "Los mejores poemas de amor para dedicar a tu pareja",
    url: "https://mejoresfrasesdeamor.com/articulos/poemas-amor",
    type: "article",
  },
};
