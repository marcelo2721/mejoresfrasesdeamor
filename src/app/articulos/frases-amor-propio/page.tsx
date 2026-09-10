import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frases de Amor Propio para Empoderarte | Mejores Frases de Amor",
  description:
    "Descubre 7 frases de amor propio que transforman tu vida. Afirmaciones poderosas, reflexiones de autores famosos y estrategias prácticas para fortalecer tu autoestima.",
  keywords: [
    "frases de amor propio",
    "amor propio",
    "afirmaciones",
    "autoestima",
    "frases de autoaceptación",
  ],
  openGraph: {
    title: "Frases de Amor Propio para Empoderarte",
    description:
      "Descubre 7 frases de amor propio que transforman tu vida. Afirmaciones poderosas y estrategias prácticas.",
    url: "https://mejoresfrasesdeamor.com/articulos/frases-amor-propio",
    type: "article",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frases de Amor Propio para Empoderarte",
    description:
      "Descubre 7 frases de amor propio que transforman tu vida. Afirmaciones poderosas y estrategias prácticas.",
  },
};

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Frases de Amor Propio para Empoderarte y Quererte Más",
    description:
      "Descubre 7 frases de amor propio que transforman tu vida. Afirmaciones poderosas, reflexiones de autores famosos y estrategias prácticas para fortalecer tu autoestima.",
    image: "https://mejoresfrasesdeamor.com/og-image.png",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    author: {
      "@type": "Organization",
      name: "Mejores Frases de Amor",
    },
    publisher: {
      "@type": "Organization",
      name: "Mejores Frases de Amor",
      logo: {
        "@type": "ImageObject",
        url: "https://mejoresfrasesdeamor.com/logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
        {/* AdSense Leaderboard */}
        <div className="flex justify-center py-4 px-4">
          <div className="w-full max-w-screen-lg h-24 bg-slate-100 rounded border border-slate-300 flex items-center justify-center text-slate-400">
            <span className="text-sm">Espacio para publicidad (728x90)</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-slate-600 mb-8">
            <a href="/" className="hover:text-rose-600">Inicio</a>
            {" > "}
            <a href="/#frases-de-amor" className="hover:text-rose-600">Frases de Amor</a>
            {" > "}
            <span>Amor Propio</span>
          </nav>

          <article>
            <header className="mb-12">
              <h1 className="text-5xl font-serif font-bold text-rose-900 mb-4">
                Frases de Amor Propio para Empoderarte y Quererte Más
              </h1>
              <div className="text-gray-600 pb-6 border-b border-rose-200">
                <p>Publicado: 7 de septiembre, 2026</p>
                <p className="text-sm mt-2">Lectura: ~5 minutos</p>
              </div>
            </header>

            {/* AdSense Rectangle 1 */}
            <div className="flex justify-center my-8">
              <div className="w-80 h-72 bg-slate-100 rounded border border-slate-300 flex items-center justify-center text-slate-400">
                <span className="text-sm">Espacio para publicidad (300x250)</span>
              </div>
            </div>

            <div className="prose max-w-none">
              {/* Introducción */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-rose-900 mb-6">
                  Introducción
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  El amor propio no es vanidad. Es la base de toda salud emocional, relaciones sanas y decisiones auténticas. Sin él, nos perdemos buscando validación en otros, construimos relaciones tóxicas y sacrificamos nuestra paz por complacer a quien nos rodea.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Las siguientes frases no son simples palabras bonitas. Son herramientas que reprograman tu mente, desactivan el crítico interno y te permiten vivir como la prioridad que mereces ser.
                </p>
              </section>

              {/* Las 7 Frases */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-rose-900 mb-8">
                  Las 7 Frases de Amor Propio Que Cambian Todo
                </h2>

                <div className="space-y-8">
                  {[
                    {
                      title: "1. 'Yo soy suficiente, tal como soy hoy'",
                      content:
                        "No mañana cuando logres un objetivo. No cuando adelgaces, cuando tengas más dinero o cuando otros te lo confirmen. Hoy. Ahora. Eres suficiente. Esta frase desarma la trampa de la perfección que la sociedad instala en tu mente. Cuando la repites cada mañana, dejas de actuar desde la inseguridad y comienzas a actuar desde la seguridad.",
                    },
                    {
                      title: "2. 'Mi paz es innegociable'",
                      content:
                        "Cuántas veces sacrificas tu paz por evitar un conflicto. Cuántas relaciones tóxicas mantienes por miedo a estar solo. Esta frase establece una línea clara: tu tranquilidad emocional está por encima de cualquier otra cosa. Es el límite que te protege de vampiros emocionales y entornos destructivos.",
                    },
                    {
                      title: "3. 'Merezco respeto, especialmente del que veo en el espejo'",
                      content:
                        "El respeto comienza contigo. Si no te respetas, otros tampoco. Esta afirmación cambia la dinámica de todas tus relaciones porque establece un estándar. Enseña a otros cómo deben tratarte al demostrales cómo te tratas a ti mismo.",
                    },
                    {
                      title: "4. 'Hoy elijo ser mi propia prioridad'",
                      content:
                        "No es egoísmo. Es supervivencia emocional. Cuando priorizas tu bienestar, tu familia y relaciones prosperan porque no llegás quemado. El oxígeno del avión primero en tu máscara, después en la de los demás. Este pequeño cambio de mentalidad desactiva años de culpa condicionada.",
                    },
                    {
                      title: "5. 'Mis errores son lecciones, no fracasos'",
                      content:
                        "La autocrítica destructiva te paraliza. Esta frase transforma cada caída en información valiosa. Desactiva el perfeccionismo que muchos cargan desde la infancia y permite experimentar, fallar y crecer sin colapsar emocionalmente.",
                    },
                    {
                      title: "6. 'No necesito permiso para ser auténtica'",
                      content:
                        "Pasamos la vida esperando ser 'suficientemente buenas' para existir plenamente. No existe ese permiso. Existe solo la decisión de ocupar el espacio que te corresponde, con tus imperfecciones incluidas. Esta frase es especialmente poderosa para las mujeres que crecieron aprendiendo a hacerse pequeñas.",
                    },
                    {
                      title: "7. 'El amor que me doy es el que enseño'",
                      content:
                        "Si te maltratas, otros te maltratan. Si te valoras, otros te valoran. Es la ley de la atracción emocional más real que existe. Cambiar la relación contigo mismo cambia automáticamente todas tus relaciones externas.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white p-8 rounded-lg border-l-4 border-rose-500 shadow-md"
                    >
                      <h3 className="text-xl font-semibold text-rose-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* AdSense Rectangle 2 */}
              <div className="flex justify-center my-8">
                <div className="w-80 h-72 bg-slate-100 rounded border border-slate-300 flex items-center justify-center text-slate-400">
                  <span className="text-sm">Espacio para publicidad (300x250)</span>
                </div>
              </div>

              {/* Ciencia */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-rose-900 mb-6">
                  Por Qué Estas Frases Funcionan (La Ciencia Detrás)
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Tu cerebro no distingue entre lo que es verdad y lo que repites con emoción. Cuando repites una frase afirmativa, creas nuevas rutas neuronales que reemplazan los patrones negativos automáticos.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  La mayoría de personas llevan diálogos internos destructivos instalados en la infancia: <em>"No soy suficiente", "Debo complacer para ser amado", "Soy mi apariencia"</em>. Estas frases actúan como antivirus, limpiando ese código tóxico e instalando nuevas creencias.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  El efecto no es mágico ni inmediato. Es acumulativo. Cada repetición fortalece la nueva creencia hasta que se vuelve tu verdad operativa.
                </p>
              </section>

              {/* Estrategia */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-rose-900 mb-6">
                  Cómo Usarlas (La Estrategia Que Funciona)
                </h2>
                <ul className="space-y-4 text-gray-700">
                  <li>
                    <strong>En la mañana:</strong> Repite 2-3 frases mientras te miras en el espejo. 30 segundos. El contacto visual es clave.
                  </li>
                  <li>
                    <strong>Durante el día:</strong> Usa la frase como ancla mental cuando dudes o sientas ansiedad.
                  </li>
                  <li>
                    <strong>En la noche:</strong> Repite una frase de gratitud antes de dormir. Tu subconsciente procesa información mientras duermes.
                  </li>
                  <li>
                    <strong>En redes sociales:</strong> Comparte estas frases. Refuerza tu compromiso contigo mismo.
                  </li>
                </ul>
              </section>

              {/* Conclusión */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-rose-900 mb-6">
                  El Viaje Que Comienza Hoy
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  El amor propio no es un destino. Es una práctica diaria. Algunos días será fácil repetir estas frases. Otros días, tu voz interior crítica será tan ruidosa que no la escucharás. Eso es normal. La consistencia vence la resistencia.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  <strong>Empieza hoy. Mañana será demasiado tarde para la persona que eras ayer.</strong>
                </p>
              </section>

              {/* FAQ Schema */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-rose-900 mb-6">
                  Preguntas Frecuentes
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      q: "¿Cuánto tiempo tarda en funcionan estas frases?",
                      a: "Los cambios iniciales se notan en 2-3 semanas de repetición consistente. Para transformaciones profundas, la práctica diaria durante 3-6 meses genera resultados duraderos.",
                    },
                    {
                      q: "¿Puedo crear mis propias frases de amor propio?",
                      a: "Absolutamente. Las frases más poderosas son aquellas que resuenan con tu verdad personal. Estos ejemplos son un punto de partida.",
                    },
                    {
                      q: "¿Es egoísta priorizar mi amor propio?",
                      a: "No. El amor propio es la base para relaciones saludables. Cuando te amas, tienes más energía y capacidad para amar a otros genuinamente.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="border-b border-rose-200 pb-6">
                      <h3 className="text-lg font-semibold text-rose-900 mb-2">
                        {item.q}
                      </h3>
                      <p className="text-gray-700">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Por qué creé este sitio */}
            <section className="mt-16 pt-12 border-t-2 border-rose-200">
              <h2 className="text-3xl font-serif font-bold text-rose-900 mb-6">
                Por Qué Creé Mejores Frases de Amor
              </h2>

              <div className="prose max-w-none text-gray-700 space-y-4">
                <p className="text-lg leading-relaxed">
                  Trabajé muchos años en eventos sociales: bodas, quince años, agasajos familiares. Durante todo ese tiempo descubrí algo que se repetía constantemente.
                </p>

                <p className="text-lg leading-relaxed">
                  Novios querían decir algo bonito a sus parejas. Padres querían expresar lo que sentían hacia sus hijos en un momento especial. Quinceañeras querían agradecerle a sus familias. Pero todos tenían el mismo miedo: <strong>caer en la cursilería, no saber qué decir de verdad</strong>.
                </p>

                <p className="text-lg leading-relaxed">
                  Por eso creé este sitio. No como un lugar más con frases genéricas, sino como un espacio de consulta real donde puedas encontrar inspiración. Un lugar donde descubras que los sentimientos que hoy atravesas son los mismos que han atravesado a la humanidad desde siempre.
                </p>

                <p className="text-lg leading-relaxed">
                  <strong>Este sitio es para todos:</strong> para quien quiere expresar amor a una pareja, para padres que buscan palabras para sus hijos, para amigos que quieren estar presentes en momentos importantes, para quien siente que algo bonito merece ser dicho de verdad.
                </p>

                <p className="text-lg leading-relaxed text-rose-900 font-semibold">
                  Porque no debería haber miedo a expresar lo que sentimos. Solo inspiración.
                </p>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-16 pt-8 border-t border-rose-200">
              <h3 className="text-2xl font-serif font-bold text-rose-900 mb-6">
                Artículos Relacionados
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <a
                    href="/articulos/frases-amor-bonitas"
                    className="text-rose-600 hover:text-rose-700 font-semibold"
                  >
                    → Frases Bonitas de Amor para Dedicar
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-rose-600 hover:text-rose-700 font-semibold"
                  >
                    ← Volver a Inicio
                  </a>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
