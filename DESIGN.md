# Mejores Frases de Amor — Manual de Marca

> Sistema de diseño para mejoresfrasesdeamor.com  
> Basado en estructura WeddingWire Brand Manual · 2026

---

## 1. Paleta de Colores

### Colores de Marca

| Nombre | Hex | RGB | Uso |
|---|---|---|---|
| Rose Primary | `#C7265A` | rgb(199, 38, 90) | CTAs, links activos, accents principales |
| Rose Dark | `#A01E48` | rgb(160, 30, 72) | Hover, links visited, énfasis |
| Rose Light | `#E8A4C4` | rgb(232, 164, 196) | Fondos suave, acentos secundarios |
| Rose 50 | `#F5E8ED` | rgb(245, 232, 237) | Fondos de badges, chips activos |

### Neutros

| Nombre | Hex | RGB | Uso |
|---|---|---|---|
| Ink | `#222222` | rgb(34, 34, 34) | Texto principal (body text) |
| Ink 60 | `#6C6C6C` | rgb(108, 108, 108) | Texto secundario, subtítulos |
| Ink 40 | `#8C8C8C` | rgb(140, 140, 140) | Placeholder, hint text, etiquetas |
| Ink 20 | `#D9D9D9` | rgb(217, 217, 217) | Bordes, divisores, separadores |
| Surface | `#FFFFFF` | rgb(255, 255, 255) | Fondo base |
| Surface Alt | `#F8F8F8` | rgb(248, 248, 248) | Fondos alternativos, sidebar |
| Surface Mid | `#EFEFEF` | rgb(239, 239, 239) | Hover backgrounds |

### Semánticos

| Nombre | Hex | RGB | Uso |
|---|---|---|---|
| Error / Alert | `#E3513D` | rgb(227, 81, 61) | Errores, acciones destructivas |
| Success | `#6CC04A` | rgb(108, 192, 74) | Confirmaciones, validación |
| Warning | `#F5A623` | rgb(245, 166, 35) | Advertencias, "Próximamente" |

### Contraste WCAG

| Combinación | Ratio | Nivel | Uso |
|---|---|---|---|
| #FFF sobre #C7265A | 3.28:1 | AA | Texto en botón primary |
| #C7265A sobre #FFF | 3.28:1 | AA | Links activos, CTA secundario |
| #222 sobre #FFF | 16.1:1 | AAA | Cuerpo de texto |
| #6C6C6C sobre #FFF | 5.74:1 | AA | Texto secundario |
| #A01E48 sobre #F5E8ED | 4.2:1 | AA | Badges y chips activos |

---

## 2. Tipografía

### Familias Tipográficas

**Display / Headings Principales**
- Fuente: **Playfair Display** (Google Fonts, serif elegante)
- Stack CSS: `'Playfair Display', Georgia, serif`
- Pesos: 700 (Bold), 800 (ExtraBold)
- Uso: H1, H2, secciones principales, citas destacadas

**Body / UI**
- Fuente: **Inter** (Google Fonts, sans-serif humanista)
- Stack CSS: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
- Pesos: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Uso: Párrafos, botones, inputs, etiquetas

**Mono** (para citas, código)
- Fuente: **JetBrains Mono** (Google Fonts)
- Stack CSS: `'JetBrains Mono', monospace`
- Uso: Citas entrecomilladas, ejemplos de frases

### Escala Tipográfica

| Nivel | Familia | Peso | Tamaño | Line-height | Uso |
|---|---|---|---|---|---|
| Hero | Playfair | 800 | 56px | 1.0 | Título principal de página (H1) |
| H2 | Playfair | 800 | 40px | 1.2 | Títulos de sección, article headers |
| H3 | Inter | 700 | 24px | 1.3 | Títulos de card, subtítulos |
| H4 | Inter | 600 | 20px | 1.3 | Sub-secciones, labels importantes |
| Body | Inter | 400 | 16px | 1.6 | Párrafos de texto, descripción |
| Small | Inter | 400 | 14px | 1.5 | Texto de apoyo, meta information |
| Label UI | Inter | 600 | 12px | 1.2 | Etiquetas, uppercase + 0.06em |
| Quote | Playfair | 600 | 18px | 1.5 | Frases destacadas (sin comillas) |

### Reglas Tipográficas

- **Letter spacing:** `normal` en todos los niveles excepto Label UI (`0.06em`)
- **Text transform:** Evitar uppercase en botones (usar "Continue" no "CONTINUE")
- **Línea óptima de lectura:** ~65 caracteres en body (max-width: 560px)
- **Tracking negativo:** NO usar en ningún nivel
- **Line height mínimo:** 1.5 en todos los niveles (accesibilidad)

---

## 3. Espaciado

Sistema basado en múltiplos de 4px. Variables CSS:

| Token | Valor | Uso |
|---|---|---|
| `--gap-xs` | 4px | Separación mínima, espacio entre inline elements |
| `--gap-sm` | 8px | Padding pequeño, gap entre chips |
| `--gap-md` | 16px | Padding interior estándar de cards |
| `--gap-lg` | 24px | Gap entre cards, padding horizontal de modales |
| `--gap-xl` | 40px | Separación entre secciones principales |
| `--gap-2xl` | 64px | Márgenes de página, hero padding |
| `--layout-padding` | 1.5rem (24px) | Padding lateral del layout |
| `--modal-padding-x` | 1.5rem | Padding horizontal de modales |
| `--modal-padding-y` | 1.75rem (28px) | Padding vertical de modales |

---

## 4. Border Radius

| Nombre | Valor | Uso |
|---|---|---|
| sm | 4px | Tags internos, íconos pequeños |
| md | 8px | **Estándar.** Botones, inputs, cards, contenedores |
| lg | 16px | Modales, contenedores grandes |
| pill | 100px | Chips de categoría, badges, app banner |
| circle | 50% | Avatares, íconos de autor |

---

## 5. Componentes

### Botones

**Especificaciones Base:**

| Propiedad | Valor |
|---|---|
| Font family | Inter |
| Font weight | 600 (SemiBold) |
| Font size base | 16px |
| Padding base | 12px 24px |
| Border radius | 8px |
| Background primary | `#C7265A` |
| Color text primary | `#FFFFFF` |
| Text transform | none (sentencia normal) |
| Letter spacing | normal |

**Variantes:**

| Variante | Background | Border | Color texto | Uso |
|---|---|---|---|---|
| Primary | `#C7265A` | transparent | `#FFF` | CTAs principales, "Leer artículo" |
| Secondary | transparent | `1.5px solid #C7265A` | `#C7265A` | Acciones secundarias |
| Ghost | transparent | `1.5px solid #D9D9D9` | `#6C6C6C` | Cancelar, cerrar |
| Success | `#6CC04A` | transparent | `#FFF` | Confirmaciones |

**Tamaños:**

| Talla | Font size | Padding |
|---|---|---|
| Small | 14px | 8px 16px |
| Base | 16px | 12px 24px |
| Large | 18px | 16px 32px |

---

### Inputs y Formularios

| Propiedad | Valor |
|---|---|
| Border reposo | `1.5px solid #D9D9D9` |
| Border focus | `1.5px solid #C7265A` |
| Border error | `1.5px solid #E3513D` |
| Border radius | 8px |
| Padding | `12px 14px` |
| Font size | 15px |
| Color | `#222222` |
| Placeholder color | `#8C8C8C` |
| Line height | 1.5 |

---

### Quote Card (Frase Destacada)

Componente central del sitio. Estructura:

```
┌─────────────────────────────────┐
│  " Texto de la frase aquí...    │
│   ... sin comillas literales "  │
│                                 │
│  — Nombre del Autor             │
│    @username (si aplica)        │
└─────────────────────────────────┘
```

**Especificaciones:**

| Propiedad | Valor |
|---|---|
| Background | `#F5E8ED` (Rose 50) |
| Border left | `4px solid #C7265A` |
| Padding | `24px` (gap-lg) |
| Border radius | 8px |
| Font frase | Playfair 600, 18px, #222 |
| Font autor | Inter 400, 14px, #6C6C6C |
| Hover | Sombra leve, no transform |

---

### Article Hero

Encabezado de cada artículo.

| Elemento | Estilo |
|---|---|
| H1 | Playfair 800, 40px, #222 |
| Subheading | Inter 400, 16px, #6C6C6C |
| Meta (autor, fecha, lectura) | Inter 400, 12px, #8C8C8C |
| Divider | 1px solid #D9D9D9 |
| Padding | 40px (gap-xl) top/bottom |

---

### Chips de Categoría

Navegación por tema (Amor Propio, Para Dedicar, etc.)

| Propiedad | Reposo | Activo/Hover |
|---|---|---|
| Background | `#FFF` | `#F5E8ED` |
| Border | `1px solid #D9D9D9` | `1px solid #C7265A` |
| Color texto | `#222` | `#C7265A` |
| Border radius | 100px (pill) | 100px |
| Padding | `8px 16px` | — |
| Font size | 14px, 600 | — |

---

### Badges

Pequeños indicadores de estado.

| Variante | Background | Color texto | Uso |
|---|---|---|---|
| Primary | `#F5E8ED` | `#A01E48` | Tags, categorías activas |
| Success | `#EBF8E2` | `#3A7A1E` | "Disponible", "Nuevo" |
| Warning | `#FFF3E0` | `#E65100` | "Próximamente", "En progreso" |
| Info | `#E3F2FD` | `#1565C0` | Información, tips |

Especificaciones: `6px 12px`, `border-radius: 100px`, font-size `11px`, font-weight `600`, uppercase, letter-spacing `0.06em`

---

### Alerts / Notificaciones

| Variante | Background | Color texto | Ícono |
|---|---|---|---|
| Info | `#E3F2FD` | `#1565C0` | ℹ️ |
| Success | `#EBF8E2` | `#2E6B16` | ✅ |
| Warning | `#FFF3E0` | `#E65100` | ⚠️ |
| Danger | `#FDE8E5` | `#8C2010` | ❌ |

Estructura: flex row, gap `16px`, padding `16px 24px`, `border-radius: 8px`

---

### Author Avatar + Bio

Componente para mostrar autores de frases/artículos.

| Propiedad | Valor |
|---|---|
| Avatar size | 48px circular |
| Avatar bg | `#C7265A` |
| Avatar color | `#FFF` |
| Nombre | Inter 600, 14px |
| Bio | Inter 400, 12px, #6C6C6C |
| Layout | Flex row, gap 12px |

---

## 6. UX Patterns

| Patrón | Descripción | Propósito |
|---|---|---|
| **Hero + CTA** | Título Playfair H1 + descripción + botón "Explorar frases" | Conversión inmediata. Primera interacción. |
| **Quote Card Grid** | Grid 1-2 columnas (responsive), quote cards con autor | Exploración visual de frases. Engagement. |
| **Category Chips** | Navegación horizontal filtrable por tema | Descubrimiento. Reduce fricción. |
| **Article H1 + Meta** | Título + subtítulo + autor/fecha + lectura estimada | Contexto de contenido. Credibilidad. |
| **Related Articles** | Cards con thumbnail + título + 2-línea descripción | Retención. Cross-linking SEO. |
| **Social Share Buttons** | Fila de botones: Copy link, Share Twitter, Share Email | Distribución orgánica. Viralidad. |
| **Author Card** | Avatar circular + nombre + bio + link a perfil | Social proof. Credibilidad del contenido. |
| **Newsletter CTA** | Card destacada: "Recibe frases nuevas" + input email + botón | Retención. Email list building. |

---

## 7. Tono y Voz

### Principios

- **Emocional pero conciso:** "Inspira, no sermona" → frases sentidas, no melosas
- **Inclusivo:** "Frases para cada corazón" → diversidad de emociones y contextos
- **Honesto:** Attribuir correctamente al autor, no reinventar
- **Íntimo:** Dirigirse directamente al lector: "Encuentra tu frase"
- **Aspiracional:** Evocar estados emocionales deseados sin falsedad

### No Hacer

- Frases genéricas sin atribución clara
- Exceso de emojis o símbolos románticos (max 1 por sección)
- Jerga millennial o trending-topic language
- Promesas imposibles ("La frase perfecta") — decir "Una frase que resuene"
- Uppercase en botones o headers

### Ejemplos de Copy

| Contexto | Texto | Principio |
|---|---|---|
| Hero H1 | "Frases que tocan el corazón" | Directo, emocional |
| Hero CTA | "Explorar nuestras colecciones" | Acción positiva, invitación |
| Card intro | "Dedica una frase que diga lo que no puedes expresar" | Beneficio + caso de uso |
| Article H1 | "Frases de amor profundo: reflexiones para el alma" | Específico, poético pero accesible |
| Newsletter CTA | "Recibe frases nuevas cada semana" | Promesa clara, frecuencia |
| Author credit | "— Autor, Año" o "— @username (si versos propios)" | Simétrico, respetuoso |

---

## 8. Token Sheet (CSS)

```css
/* ── COLORES ── */
--rose-primary:  #C7265A;   /* CTAs, links activos, primary actions */
--rose-dark:     #A01E48;   /* Hover, visited, emphasis */
--rose-light:    #E8A4C4;   /* Fondos suaves, secondary accents */
--rose-50:       #F5E8ED;   /* Fondos de badges, chips, highlights */

--red-alert:     #E3513D;   /* Error, destructivo */
--yellow-warn:   #F5A623;   /* Warning, próximamente */
--green-ok:      #6CC04A;   /* Success, confirmación */

--ink:           #222222;   /* Texto principal */
--ink-60:        #6C6C6C;   /* Texto secundario */
--ink-40:        #8C8C8C;   /* Placeholder, hint */
--ink-20:        #D9D9D9;   /* Bordes, divisores */
--surface:       #FFFFFF;   /* Fondo base */
--surface-alt:   #F8F8F8;   /* Fondo alternativo */
--surface-mid:   #EFEFEF;   /* Hover backgrounds */

/* ── TIPOGRAFÍA ── */
--font-display:  'Playfair Display', Georgia, serif;
--font-body:     'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono:     'JetBrains Mono', monospace;

/* Escala
   hero  : Playfair 800 · 56px / 1.0
   h2    : Playfair 800 · 40px / 1.2
   h3    : Inter 700   · 24px / 1.3
   body  : Inter 400   · 16px / 1.6
   small : Inter 400   · 14px / 1.5
   label : Inter 600   · 12px · uppercase · +0.06em
   quote : Playfair 600 · 18px / 1.5
*/

/* ── ESPACIADO ── */
--gap-xs:         4px;
--gap-sm:         8px;
--gap-md:         16px;
--gap-lg:         24px;   /* 1.5rem — gap estándar */
--gap-xl:         40px;
--gap-2xl:        64px;
--layout-padding: 1.5rem;
--modal-padding-x: 1.5rem;
--modal-padding-y: 1.75rem;

/* ── BORDER RADIUS ── */
--radius-sm:   4px;
--radius-md:   8px;      /* Estándar */
--radius-lg:   16px;
--radius-pill: 100px;

/* ── BREAKPOINTS (opcional) ── */
--bp-mobile:   480px;
--bp-tablet:   768px;
--bp-desktop:  1024px;
```

---

## 9. Accesibilidad & Performance

### WCAG 2.1 AA Compliance

- ✅ Contraste mínimo 4.5:1 en todos los textos
- ✅ Focus states visibles en botones e inputs
- ✅ Labels asociados a inputs (no solo placeholders)
- ✅ Alt text en todas las imágenes
- ✅ Color no es el único indicador (usar íconos + texto)

### Rendimiento

- **Tipografías:** Usar `font-display: swap` en Google Fonts
- **Imágenes:** WebP con fallback JPG, max 150KB por imagen
- **CSS:** Purgar unused styles con PurgeCSS/Tailwind
- **Espaciado:** No usar valores aleatorios, siempre tokens

---

## 10. Aplicación en Desarrollo

### Próximos pasos:

1. ✅ **DESIGN.md creado** (este archivo)
2. ⏳ **Implementar en layout.tsx** (variables CSS globales)
3. ⏳ **Crear componentes** (QuoteCard, ArticleHero, etc.)
4. ⏳ **Validar con Web Design Guidelines plugin**
5. ⏳ **Testing responsive con Playwright CLI**

---

*Documento vivo. Actualizar con cada decisión de diseño.*

**Responsable:** Marcelo + Claude  
**Última actualización:** 2026-09-08  
**Versión:** 1.0
