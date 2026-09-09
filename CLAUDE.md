# Mejores Frases de Amor - Project Documentation

**Last Updated:** 2026-09-08 23:59 UTC | **Status:** 🟡 FASE 1 Partial (4/7 articles)

---

## 📋 Project Overview

**Website:** https://mejoresfrasesdeamor.com

**Goal:** SEO-driven content hub for Spanish love phrases with Hub-Spoke architecture

**Target:** Rank for "frases de amor" (49,500/month searches) and related long-tail keywords

**Monetization:** AdSense (leaderboard 728x90 + 2x rectangles 300x250 per article)

---

## 🏗️ Current Architecture

### Hub-Spoke Strategy (15 articles total)

**HUB (Main):**
- Frases de Amor mega-article (49,500/month)

**FASE 1 (7 sub-articles) - READY:**
1. ✅ Frases Cortas (5.4k/month) - `/articulos/frases-amor-cortas`
2. ✅ Frases Bonitas (3.6k/month) - `/articulos/frases-amor-bonitas`
3. ✅ Para Dedicar (6.6k/month) - `/articulos/frases-amor-dedicar`
4. ✅ Amor Propio (12.1k/month) - `/articulos/frases-amor-propio`
5. 🟡 Amor Profundo (2.4k/month) - `/articulos/frases-amor-profundo` [Próximamente]
6. 🟡 Poemas (2.1k/month) - `/articulos/poemas-amor` [Próximamente]
7. 🟡 Autores Famosos (sub-hub) - `/autores-famosos` [Planned]

**FASE 2 (3 sub-hubs):**
- Ocasiones Especiales Hub
- Emociones Específicas Hub  
- Contextos de Relación Hub

**FASE 3 (5 articles):**
- Individual deep-dives for each FASE 2 sub-hub

### Homepage Status
- ✅ Hero section with h1 "Frases de Amor"
- ✅ 6-card grid "Explora Nuestras Colecciones" with emojis (✨💕💌🌟💎📖)
- ✅ "¿Por Qué las Palabras Importan?" editorial section
- ✅ "Más Recursos" secondary section (Autores Famosos, Ocasiones Especiales)
- ✅ "Comenzar Ahora" CTA
- ✅ AdSense placeholder areas (728x90 leaderboard + 2x 300x250 rectangles)

---

## 🚀 Deployment & Repositories

### ⚠️ CRITICAL: Two Repositories Issue (RESOLVED 2026-09-08)

**Problem:** Vercel was connected to `marcelo2721/mejoresfrasesdeamor-site` (old repo) instead of `marcelo2721/mejoresfrasesdeamor` (current repo with 6 cards)

**Solution:** Disconnected old repo in Vercel Settings → Git, reconnected to correct repo `marcelo2721/mejoresfrasesdeamor`

**Current Setup:**
- **Local:** `C:\Users\usuario\Proyectos\mejoresfrasesdeamor`
- **Remote:** `https://github.com/marcelo2721/mejoresfrasesdeamor.git` (main branch)
- **Vercel:** Connected to `marcelo2721/mejoresfrasesdeamor` ✅
- **Live URL:** https://mejoresfrasesdeamor.com (Production)

### Vercel Project Settings
- **Project Name:** mejoresfrasesdeamor-site (in Vercel UI)
- **Git Integration:** GitHub (marcelo2721/mejoresfrasesdeamor) 
- **Auto-deploy:** Enabled on main branch pushes
- **Build Command:** `next build`
- **Framework:** Next.js 16.3.4 with TypeScript

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16.3.4 with Turbopack
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (light theme only, dark mode disabled)
- **Theme:** Light mode enforced globally
  - `tailwind.config.ts`: `darkMode: false`
  - `globals.css`: Light colors (#ffffff bg, #171717 text)
  - `layout.tsx`: `className="light"` + `colorScheme: "light"`
- **Schema:** JSON-LD (Article + FAQ + BreadcrumbList per article)
- **Fonts:** Geist Sans & Geist Mono (Google Fonts)
- **CMS:** Static files (no database, content in components)

---

## 📁 File Structure (Key Files)

```
src/app/
├── page.tsx              ← Homepage with 6-card grid ✅
├── layout.tsx            ← Root layout, light theme forced
├── globals.css           ← Global styles, light-only
├── articulos/
│   └── [slug]/
│       └── page.tsx      ← Dynamic article routes (2 articles live)
└── sitemap.xml           ← Auto-generated sitemap

tailwind.config.ts        ← Dark mode disabled
next.config.ts            ← Security headers, no ISR/caching config
```

---

## 🎯 Content Strategy

### Article Structure (per article, 1,500-2,000 words)
1. **Intro** (100-150 words) - Hook + relevance
2. **7-10 Frases** (main content) - Each with explanation
3. **Psychological Section** (200-300 words) - Why these phrases work
4. **Practical Section** (200-300 words) - How to use them
5. **FAQ Schema** (3-5 Q&A)
6. **Related Content** (internal links to hub + lateral articles)

### Internal Linking Strategy
- **All articles → Hub** (Frases de Amor main article)
- **Hub → All articles** (homepage grid + footer)
- **Lateral linking** (related articles reference each other)
- **Breadcrumb navigation** (Article → Category → Home)

### SEO Signals Per Article
- Schema.org markup (Article type)
- Meta tags (title, description, OG)
- H1 optimization
- Image alt text
- Internal anchor text optimization

---

## ✅ Current Status (2026-09-08 SESSION END)

### Live ✅
- ✅ Homepage with 6-card architecture (LIVE)
- ✅ 4 FASE 1 articles live (Cortas, Bonitas, Para Dedicar, Amor Propio)
- ✅ Light theme enforced globally
- ✅ UTF-8 encoding fixed (charset meta tag added)
- ✅ Schema markup for homepage
- ✅ AdSense placeholder areas
- ✅ Google Search Console verification
- ✅ CLAUDE.md documentation complete
- ✅ Memory system initialized

### BLOCKING - Must Complete BEFORE Link Building 🟡
- ❌ **3 FASE 1 articles missing** (Amor Profundo, Poemas, Autores Famosos)
- ❌ **FASE 2 sub-hubs** (0/3 implemented)
- ❌ **FASE 3 articles** (0/5 implemented)
- ❌ **Full internal linking strategy** (partially done)

### Strategic Decision (APPROVED)
- **DO NOT start Link Building yet**
- **REASON:** Site appears incomplete (3 "Próximamente" cards)
- **CORRECT SEQUENCE:** Complete FASE 1 first → THEN Link Building
- **ETA:** FASE 1 completion = end of this week

---

## 🔗 Important URLs & Credentials

| Resource | URL | Notes |
|----------|-----|-------|
| Live Site | https://mejoresfrasesdeamor.com | Production |
| Vercel Dashboard | https://vercel.com/dashboard | Project: mejoresfrasesdeamor-site |
| GitHub Repo | https://github.com/marcelo2721/mejoresfrasesdeamor | main branch |
| Google Search Console | https://search.google.com/search-console | Verify indexation |
| Google Analytics | (To be set up) | Traffic tracking |
| Google AdSense | (To be set up) | Monetization |

---

## 🚦 Lessons Learned (Session 2026-09-08)

### Repository Confusion
- **Problem:** Two repos existed (`mejoresfrasesdeamor` + `mejoresfrasesdeamor-site`)
- **Impact:** Vercel deployed old code from wrong repo, 6 cards didn't appear
- **Solution:** Switched Vercel connection to correct repo in Settings → Git
- **Prevention:** Always verify Vercel → Git connection matches expected repo
- **Action:** Document repos clearly in CLAUDE.md (✅ done)

### Deployment Caching Issues
- **Problem:** Multiple Vercel redeployments didn't help because Vercel was reading from wrong repo
- **Lesson:** Check git connection FIRST before assuming build cache issues
- **Next time:** Verify `git remote -v` matches Vercel project setting

### Theme Enforcement
- **Decision:** Removed all `dark:` Tailwind classes to force light mode
- **Reason:** Cleaner design, no theme switcher needed
- **Implementation:** `darkMode: false` in tailwind.config.ts + global CSS override

---

## 🎨 Design Tools Integration (PRIORITY)

**Goal:** Improve visual consistency + avoid generic "AI-generated" look  
**Status:** ✅ DESIGN.md CREATED (2026-09-08)

### Design System

**DESIGN.md** (brand guidelines complete):
- ✅ Paleta de colores: Rosa romántico #C7265A (primary) + neutros
- ✅ Tipografía: Playfair Display (display) + Inter (body)
- ✅ Espaciado: Tokens gap-xs to gap-2xl
- ✅ Componentes: Quote cards, article hero, badges, buttons, inputs
- ✅ UX patterns: Hero + CTA, quote grids, category chips, related articles
- ✅ Tono y voz: Emocional pero honesto, inclusivo, inspiracional
- ✅ Accesibilidad: WCAG 2.1 AA compliance
- ✅ CSS Token sheet: Variables documentadas

### Integration Roadmap (Aligned with Article Creation)

**FASE 1A - FOUNDATION (Week 1, before creating articles)**
1. ✅ **DESIGN.md Created** 
   - Brand guidelines complete with color palette, typography, spacing, components
   - Single source of truth for visual consistency across all 15 articles
   - Ready to implement in layout.tsx
   
2. ⏳ **Implement CSS Variables in layout.tsx**
   - Add `--rose-primary`, `--gap-*`, `--font-*` to globals.css
   - Ensure light theme uses DESIGN.md colors (replace current styling)
   - Validate against DESIGN.md specifications
   
3. ⏳ **Activate Image to Code Workflow**
   - Methodology: Mockup visual layouts BEFORE touching code
   - Apply when designing article hero sections, quote blocks, section layouts
   - Ensures consistency with DESIGN.md brand guidelines

**FASE 1B - BUILD & VALIDATE (While creating FASE 1 articles)**
3. ✅ **Web Design Guidelines** (Skill - already in Claude Code)
   - Audit each article section for UX/accessibility compliance
   - Run before publishing each article
   - Catches accessibility regressions early
   
4. ✅ **Playwright CLI** (Testing tool - `npm install -D @playwright/test`)
   - Test responsive layouts across mobile/desktop viewports
   - Capture screenshots for social preview images
   - Validate responsive behavior before production

**FASE 2+ - ENHANCEMENT (If needed)**
5. 🟡 **21st MCP** (Optional - only if building complex components)
   - AI-powered React/Tailwind component library
   - Skip unless articles need interactive quote galleries, animated carousels, etc.

### How They Work Together
- **DESIGN.md** = Single source of truth (shared by all tools)
- **Image to Code** = Visual-first design methodology (mockup → code)
- **Web Design Guidelines** = UX/accessibility validation gate
- **Playwright CLI** = Responsive + social preview testing
- **21st MCP** = Component acceleration (nice-to-have, not critical)

### When to Use Each Plugin

| Article Phase | Plugin | Action |
|---|---|---|
| Design | Image to Code | Create visual mockup of section layout |
| Design | DESIGN.md | Reference brand guidelines |
| Code | Web Design Guidelines | Audit code against best practices |
| QA | Playwright CLI | Test responsive + capture screenshots |
| Deploy | ✅ | Publish to production |

---

## 📅 Next Steps (Priority Order - REVISED)

### PHASE THIS WEEK (CRITICAL PATH)
1. **✅ Homepage Architecture LIVE** - Done 2026-09-08 ✅
2. **✅ UTF-8 Encoding Fixed** - Done 2026-09-08 ✅
3. **⏳ DESIGN FOUNDATION** (BEFORE articles)
   - [ ] Create DESIGN.md with brand guidelines (colors, fonts, spacing)
   - [ ] Document Image to Code workflow in team guidelines
4. **⏳ COMPLETE FASE 1 ARTICLES** (THIS IS THE BLOCKER)
   - [ ] Amor Profundo (2.4k/month) - using Image to Code + Web Design Guidelines
   - [ ] Poemas (2.1k/month) - using Image to Code + Web Design Guidelines
   - [ ] Autores Famosos (sub-hub) - using Image to Code + Web Design Guidelines
   - Each with: Full content (1,500-2,000 words) + Schema markup + Internal linking + Playwright testing

### PHASE SHORT-TERM (Week 2-3)
1. **Link Building Outreach** (FASE 1)
   - 15-20 emails to relevant Spanish language sites
   - Goal: 3-5 high-quality backlinks
   - Focus: Guest posts, resource mentions, partnerships
   - **ONLY AFTER FASE 1 IS COMPLETE**

2. **Index in Google Search Console** - Verify all URLs indexed
3. **Monitor Rankings** - Track position for "frases de amor" target keyword
4. **AdSense Setup** - Request approval + deploy ads

### PHASE MEDIUM-TERM (1-2 months)
1. **FASE 2 Sub-hubs** - 3 topic hubs (Ocasiones, Emociones, Contextos) using design tools
2. **FASE 3 Deep-dives** - 5 individual articles for FASE 2 using design tools
3. **Content Expansion** - Regular updates + seasonal content with consistent visual quality

---

## 🤖 AI/Claude Workflow Notes

### Daily Session Protocol
- At end of day, user says: **"Hasta aquí llegamos hoy"**
- Claude automatically:
  1. Updates CLAUDE.md with day's changes
  2. Commits to GitHub with summary
  3. Saves session notes to memory system
  4. Next session: Claude has full context in <2 minutes

### Memory System (Stored separately)
- User profile & project goals
- Architecture decisions & rationale
- Lessons learned this session
- Common debugging patterns

### Documentation Priority
1. **CLAUDE.md** (this file) - Git-tracked, authoritative
2. **Memory system** - Claude's long-term context
3. **Git commits** - Granular change history
4. **Vercel/GitHub UI** - Deployment/code state

---

## ⚠️ Common Pitfalls & How to Avoid

| Issue | Prevention |
|-------|-----------|
| Repo confusion | Always verify `git remote -v` and Vercel Settings → Git connection |
| Cache issues | Check correct repo connected BEFORE troubleshooting cache |
| Theme breaking | Never add `dark:` classes; use light-only styling |
| Missing internal links | Use PLAN_ESTRATEGICO_FINAL_HUB_SPOKE.md as reference |
| Article duplication | Check existing articles before creating new ones |

---

## 📞 Quick Reference Commands

```bash
# Check repo
git remote -v

# View last commits
git log --oneline -5

# Check current branch
git branch -a

# Force rebuild (Vercel)
# 1. Go to Vercel Settings → Git → Disconnect
# 2. Reconnect to correct repo
# 3. Push new commit to trigger deploy

# Check file in GitHub
git show HEAD:src/app/page.tsx | grep "h3"
```

---

**Maintained by:** Claude with User  
**Last Sync:** 2026-09-08 23:59 UTC  
**Next Review:** Daily (at session end)
