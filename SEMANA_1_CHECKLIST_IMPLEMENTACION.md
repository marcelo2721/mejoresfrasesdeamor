# ✅ SEMANA 1: CHECKLIST DE IMPLEMENTACIÓN
## mejoresfrasesdeamor.com | Go-Live

---

## 📋 PRE-REQUISITOS (Verificar)

- [ ] 2 artículos listos (Amor Propio ✅ + Bonitas ✅)
- [ ] Dominio verificado en Google Search Console ✅
- [ ] Sitemap.xml generado ✅
- [ ] Robots.txt configurado ✅
- [ ] HTTPS activo ✅
- [ ] Next.js build sin errores ✅

---

## 🎨 PASO 1: HOMEPAGE REDESIGN (Nueva Arquitectura)

**Archivo:** `src/app/page.tsx`

### Cambios Necesarios:

**ANTES (4 categorías iguales):**
```
[Frases Románticas] [Amor Profundo] [Autores Famosos] [Ocasiones Especiales]
```

**DESPUÉS (Hub-Spoke):**
```
[FRASES DE AMOR - HUB PRINCIPAL]
  └─ Subcategorías: Cortas | Bonitas | Dedicar | Propio | Profundo

[Recursos Adicionales]
  ├─ Autores Famosos
  ├─ Ocasiones Especiales
  └─ Consejos Experto
```

### Estructura HTML Nueva:

```tsx
export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-16 bg-gradient-to-r from-rose-50 to-pink-50">
        <h1>Frases de Amor: La Guía Completa</h1>
        <p>Expresiones auténticas para cada momento especial</p>
      </section>

      {/* HUB PRINCIPAL - Frases de Amor */}
      <section className="py-12">
        <h2>Explora Nuestras Colecciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Cortas */}
          <Card
            title="Frases Cortas"
            description="Impacto máximo en pocas palabras"
            link="/articulos/frases-amor-cortas"
            volume="5.4k búsquedas/mes"
          />
          
          {/* Card 2: Bonitas */}
          <Card
            title="Frases Bonitas"
            description="Belleza lírica para tus sentimientos"
            link="/articulos/frases-amor-bonitas"
            volume="3.6k búsquedas/mes"
          />
          
          {/* Card 3: Dedicar */}
          <Card
            title="Para Dedicar"
            description="Expresiones para momentos especiales"
            link="/articulos/frases-amor-dedicar"
            volume="6.6k búsquedas/mes"
          />

          {/* Card 4: Propio */}
          <Card
            title="Amor Propio"
            description="Empoderamiento y autoaceptación"
            link="/articulos/frases-amor-propio"
            volume="12.1k búsquedas/mes"
          />

          {/* Card 5: Profundo */}
          <Card
            title="Profundo"
            description="Conexiones auténticas y sinceras"
            link="/articulos/frases-amor-profundo"
            volume="2.4k búsquedas/mes"
          />

          {/* Card 6: Poemas */}
          <Card
            title="Poemas"
            description="Expresión romántica clásica"
            link="/articulos/poemas-amor"
            volume="2.1k búsquedas/mes"
          />
        </div>
      </section>

      {/* MEGA ARTICLE TEASER */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2>Guía Completa: Frases de Amor</h2>
          <p>Descubre 100+ frases clasificadas por tipo y ocasión</p>
          <Button href="/articulos/frases-de-amor">
            Leer Guía Completa →
          </Button>
        </div>
      </section>

      {/* SECONDARY SECTIONS */}
      <section className="py-12">
        <h3>Más Recursos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <SmallCard title="Autores Famosos" />
          <SmallCard title="Ocasiones Especiales" />
        </div>
      </section>

      {/* EDITORIAL SECTION */}
      <section className="py-12 bg-rose-50">
        <h2>¿Por Qué las Palabras Importan?</h2>
        <p>La ciencia detrás de las frases de amor...</p>
      </section>

      {/* AdSense */}
      <AdSenseLeaderboard />
    </>
  );
}
```

**Key Changes:**
- ✅ H1 focused: "Frases de Amor" (main keyword)
- ✅ 6 main category cards (vs 4)
- ✅ Internal links clara architecture
- ✅ Hub teaser a mega-article (cuando esté listo semana 3)
- ✅ AdSense placement optimizado

---

## 📝 PASO 2: PUBLICAR 2 ARTÍCULOS

### Artículo 1: Frases de Amor Propio
**Ruta:** `/src/app/articulos/frases-amor-propio/page.tsx`

**Status:** YA TENEMOS ✅

**Acciones:**
- [ ] Copiar contenido ARTICULO_FRASES_AMOR_PROPIO.md
- [ ] Crear archivo page.tsx con estructura correcta
- [ ] Add schema.org Article + FAQ markup
- [ ] Verificar responsive design
- [ ] Testar en mobile + desktop

---

### Artículo 2: Frases Bonitas de Amor
**Ruta:** `/src/app/articulos/frases-amor-bonitas/page.tsx`

**Status:** YA TENEMOS ✅

**Acciones:**
- [ ] Copiar contenido ARTICULO_FRASES_AMOR_PAREJA_REESCRITO.md
- [ ] Rename: "Frases Bonitas de Amor"
- [ ] Adapt slug: `/frases-amor-bonitas`
- [ ] Add metadata + schema
- [ ] Responsive testing

---

## 🔗 PASO 3: INTERNAL LINKING SETUP

### Homepage → Artículos

**En página de Homepage:**
```tsx
// Bajo cada card
<a href="/articulos/frases-amor-propio" className="hover:text-rose-600">
  Leer artículo completo →
</a>
```

---

### Artículo 1 (Propio) → Artículo 2 (Bonitas)

**Al final del artículo Propio:**
```
---
## Artículos Relacionados

- [Frases Bonitas de Amor para Dedicar](/articulos/frases-amor-bonitas)
- [Cómo Expresar Tus Sentimientos](/articulos/frases-amor-cortas) - [Próximamente]
```

---

### Artículo 2 (Bonitas) → Artículo 1 (Propio)

**Al final del artículo Bonitas:**
```
## Continúa Explorando

- [Frases de Amor Propio: Empoderamiento](/articulos/frases-amor-propio)
- [Frases para Dedicar a Tu Pareja](/articulos/frases-amor-dedicar) - [Próximamente]
```

---

### Ambos → Homepage

**En breadcrumb:**
```html
<a href="/">Inicio</a> > 
<a href="/#frases-de-amor">Frases de Amor</a> > 
<span>Frases de Amor Propio</span>
```

---

## 🔍 PASO 4: TECHNICAL VERIFICATION

### Build & Deploy

```bash
# En terminal:
cd C:\Users\usuario\Proyectos\mejoresfrasesdeamor

# Build
npm run build

# Test
npm run start

# Verificar en localhost:3000:
# - Homepage con nueva arquitectura ✅
# - /articulos/frases-amor-propio ✅
# - /articulos/frases-amor-bonitas ✅
# - Responsive design ✅
# - No 404s ✅
```

### PageSpeed Check

```
https://pagespeed.web.dev/
Target: 90+ Mobile, 95+ Desktop
```

### Mobile Responsiveness

- [ ] Testar en Chrome DevTools (mobile emulation)
- [ ] Testar en real phone
- [ ] AdSense placeholders responsive
- [ ] Text readable (no zoom needed)

---

## 📤 PASO 5: GOOGLE SEARCH CONSOLE SUBMISSION

### 5a: Verificar Sitemap

```
En Google Search Console:
1. Ir a Sitemaps
2. Click "Add new sitemap"
3. URL: https://mejoresfrasesdeamor.com/sitemap.xml
4. Submit
```

**Esperar:** 2-5 minutos para validación

---

### 5b: Submit URLs Manuales

```
1. Ir a URL Inspection (búsqueda de URLs)
2. Pegar:
   - https://mejoresfrasesdeamor.com/
   - https://mejoresfrasesdeamor.com/articulos/frases-amor-propio
   - https://mejoresfrasesdeamor.com/articulos/frases-amor-bonitas

3. Click "Request Indexing"
```

**Esperar:** 24-48 horas para indexación

---

### 5c: Verificar Datos Estructurados

```
1. Ir a Rich Results Test
2. Pegar URL: https://mejoresfrasesdeamor.com/articulos/frases-amor-propio
3. Validar:
   - Article schema: ✅
   - FAQ schema: ✅
   - BreadcrumbList: ✅
   - No errors
```

---

## 📧 PASO 6: LINK OUTREACH - INICIACIÓN

### Objetivo: 10 backlinks Semana 1

### Target Sitios (Baja Prioridad)

1. **Blogs de Pareja + Relaciones**
   - Buscar: "blog relaciones", "consejería pareja"
   - Contact form o email
   - Anchor: "frases de amor"
   - Target URL: Homepage

2. **Sitios de Recursos Gratis**
   - Buscar: "recursos descargables", "plantillas gratis"
   - Propuesta: Frases de amor como recurso
   - Anchor: "101 frases de amor"

3. **Directorios de Contenido**
   - Buscar: "directorio sitios", "agregadores contenido"
   - Submit blog directory
   - Anchor: "Mejores Frases de Amor"

### Template Email (Adaptable)

```
Asunto: Colaboración: Frases de Amor para tu Audiencia

---

Hola [Nombre],

Descubrí tu blog sobre [tema] y me encantó tu contenido en [artículo específico].

Creamos un recurso que podría interesar a tu audiencia:
"Frases de Amor: Guía Completa con Análisis Psicológico"

Incluye:
- 50+ frases clasificadas
- Análisis científico del amor
- Consejos de expertos

Creo que tu comunidad lo adoraría. Si te interesa, podemos colaborar.

Link: https://mejoresfrasesdeamor.com

¿Charlamos?

Saludos,
Marcelo
mejoresfrasesdeamor.com
```

### Sitios para Contactar (Semana 1)

Priority 1 (Alto potencial):
- [ ] psicologiamentefeliz.com
- [ ] parejafeliz.net
- [ ] amoryrelaciones.blogspot.com
- [ ] consejosparelaspareja.com
- [ ] vidaylovecoach.com

Priority 2 (Medio):
- [ ] [5 más según Google Alerts]

---

## 📊 PASO 7: GOOGLE ANALYTICS SETUP

### Event Tracking

```
1. GA4 → Admin → Events
2. Create event: "read_article"
   - Trigger: 3+ minutos en artículo
3. Create event: "click_internal_link"
   - Trigger: Click a link interno
4. Create event: "scroll_depth"
   - Trigger: 50%, 75%, 100% scroll
```

### Goals/Conversions

```
1. GA4 → Admin → Conversions
2. Create: "newsletter_signup" (futuro)
3. Create: "adsense_click" (futuro)
```

---

## ✅ CHECKLIST FINAL SEMANA 1

### Lunes-Martes (Desarrollo)
- [ ] Homepage redesign + test
- [ ] 2 artículos estructurados + schema
- [ ] Internal links configurados
- [ ] Build successful (npm run build)
- [ ] Deploy a Vercel

### Miércoles (Verificación Técnica)
- [ ] PageSpeed: 90+
- [ ] Mobile responsive: OK
- [ ] Sitemap submission: GSC
- [ ] URL manual submission: GSC
- [ ] Rich results validation: OK

### Jueves-Viernes (Link Outreach)
- [ ] Enviar 10 emails outreach
- [ ] Monitorear respuestas
- [ ] Documentar links conseguidos
- [ ] Analytics setup: OK

### Fin de Semana (Monitoreo)
- [ ] GSC: Esperar indexación
- [ ] Analytics: Primeras visitas
- [ ] Rank tracking: Baseline (puede estar en #50+)
- [ ] Preparar Semana 2

---

## 🎯 MÉTRICAS FIN SEMANA 1

### Esperado:
- **Indexación:** 3 URLs en Google ✅
- **Impresiones GSC:** 10-50 (baja aún)
- **Sesiones GA4:** 10-30 (tráfico directo)
- **Rankings:** #10-50 (frases principales)
- **Backlinks conseguidos:** 1-3

### Si No Pasa (Troubleshooting):
- Recheck sitemap.xml en GSC
- Manual resubmit URLs
- Verificar no hay canonical issues
- Check robots.txt (Allow /articulos/)

---

## 📝 NOTAS IMPORTANTES

**Paciencia:**
- GSC tarda 24-48h en indexar
- Rankings toman 1-2 semanas cambiar
- NO esperes resultados en Semana 1
- Esto es maratón, no carrera

**Calidad sobre Velocidad:**
- Mejor 2 artículos perfectos que 5 mediocres
- Schema markup correcto = crucial
- Internal links natural = importante
- Mobile first = obligatorio

**Link Building:**
- Quality > Quantity
- 1 link de DA 60+ > 10 links de DA 20
- Relevancia = más importante que autoridad

---

## 🚀 PRÓXIMO: SEMANA 2 PREP

### Artículos para Publicar Semana 2:
1. "Frases Bonitas de Amor" - NUEVO
2. "Frases para Dedicar a Tu Pareja" - NUEVO

### Tasks Paralelas:
- Comenzar redacción "Frases Cortas de Amor"
- Diseñar MEGA-article "Frases de Amor" (semana 3)
- Link outreach continuo (5-10 links/semana)
- Monitorear GSC rankings

---

**¿Confirmás que empezamos el lunes?**

**Next message:** Envíame cuando tengas completada SEMANA 1 para auditar + planear SEMANA 2.
