````markdown
# Page Layouts & Structure
## Shilpa A Jain — Numerologist Website

All layouts use the design system and components defined in `DESIGN_SYSTEM.md` and `COMPONENTS.md`.

---

## Global Layout Structure

```tsx
// app/layout.tsx structure
<html>
  <body>
    <Header /> {/* Sticky navigation */}
    <main>
      {children} {/* Page-specific content */}
    </main>
    <Footer />
    <CookieConsent /> {/* GDPR/Privacy banner */}
  </body>
</html>
```

---

## 1. Home Page

### Layout Blueprint

```
┌──────────────────────────────────────────────────┐
│                   HEADER                         │
├──────────────────────────────────────────────────┤
│                                                  │
│              HERO SECTION                        │
│   [Portrait]  +  Headline + CTA                  │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│              TRUST / INTRO BLURB                 │
│   Brief value proposition, credentials           │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│              CORE SERVICES                       │
│   [Card] [Card] [Card]                          │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│              TESTIMONIALS PREVIEW                │
│   Carousel or 3-column grid                      │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│              BLOG HIGHLIGHTS                     │
│   Latest 3 articles                             │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│              FINAL CTA                          │
│   "Ready to discover your path?"                │
│                                                  │
├──────────────────────────────────────────────────┤
│                   FOOTER                         │
└──────────────────────────────────────────────────┘
```

---

**Document Version**: 1.0  
**Last Updated**: December 14, 2025

````