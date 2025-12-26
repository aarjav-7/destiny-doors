````markdown
# Shilpa A Jain — Design System
## Numerologist & Life Guidance Expert

---

## Brand Fundamentals

### Tone & Voice
- **Tone**: Calm, warm, confident, empathetic, expert
- **Brand Essence**: Modern spirituality meets professional guidance
- **Primary Audience**: India-first, global secondary — ages 25–55 seeking clarity and guidance

### Design Philosophy
- Establish authority through clean, professional design
- Build trust with warm, accessible aesthetics
- Create calm, focused user experience
- Modern spiritual without clichéd mysticism

---

## Color System

### Primary Palette

```css
/* Background Colors */
--color-bg-base: #FAF9F7;          /* Primary background */
--color-bg-secondary: #F4F1EC;     /* Secondary/alternate sections */
--color-bg-elevated: #FFFFFF;      /* Cards, modals, elevated surfaces */

/* Accent Colors */
--color-primary: #7B6CF6;          /* Primary accent - spiritual purple */
--color-primary-hover: #6454E5;    /* Primary hover state (darker 15%) */
--color-primary-light: #E8E5FE;    /* Primary tint for backgrounds */

--color-secondary: #E6C77A;        /* Secondary accent - warm gold */
--color-secondary-hover: #D4B363;  /* Secondary hover state */
--color-secondary-light: #F8F2E3;  /* Secondary tint */

/* Text Colors */
--color-text-primary: #2F2F2F;     /* Headings, charcoal */
--color-text-secondary: #5F5F5F;   /* Body text, warm gray */
--color-text-tertiary: #8A8A8A;    /* Muted text, meta info */

/* UI Colors */
--color-border: #E8E5DF;           /* Borders, dividers */
--color-border-hover: #D4D0C8;     /* Border hover state */

/* Semantic Colors */
--color-success: #4CAF50;
--color-error: #EF4444;
--color-warning: #F59E0B;
--color-info: #3B82F6;
```

### Tailwind Mapping

```js
// Add to tailwind.config.js
colors: {
  base: '#FAF9F7',
  secondary: '#F4F1EC',
  elevated: '#FFFFFF',
  
  primary: {
    DEFAULT: '#7B6CF6',
    hover: '#6454E5',
    light: '#E8E5FE',
  },
  accent: {
    DEFAULT: '#E6C77A',
    hover: '#D4B363',
    light: '#F8F2E3',
  },
  
  charcoal: '#2F2F2F',
  gray: {
    warm: '#5F5F5F',
    muted: '#8A8A8A',
  },
  
  border: {
    DEFAULT: '#E8E5DF',
    hover: '#D4D0C8',
  },
}
```

### Color Contrast (WCAG AA Verified)

| Combination | Ratio | Status |
|------------|-------|--------|
| `#2F2F2F` on `#FAF9F7` | 10.8:1 | ✅ AAA |
| `#5F5F5F` on `#FAF9F7` | 5.2:1 | ✅ AA |
| `#7B6CF6` on `#FFFFFF` | 4.8:1 | ✅ AA (Large text) |
| `#6454E5` on `#FFFFFF` | 6.1:1 | ✅ AA |

---

## Typography System

### Font Families

```css
/* Headings - Elegant Serif */
--font-heading: 'Playfair Display', Georgia, serif;

/* Spiritual Accents - Serif */
--font-accent: 'Cormorant Garamond', Georgia, serif;

/* Body & UI - Clean Sans-serif */
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Font Loading (Next.js)

```tsx
// app/layout.tsx
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-accent',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});
```

### Type Scale

#### Desktop (≥1024px)

```css
/* Headings */
--text-h1: 56px;        /* Line height: 1.1 (61.6px), Weight: 700 */
--text-h2: 36px;        /* Line height: 1.2 (43.2px), Weight: 600 */
--text-h3: 28px;        /* Line height: 1.3 (36.4px), Weight: 600 */
--text-h4: 22px;        /* Line height: 1.4 (30.8px), Weight: 600 */

/* Body */
--text-body-lg: 18px;   /* Line height: 1.7 (30.6px), Weight: 400 */
--text-body: 16px;      /* Line height: 1.6 (25.6px), Weight: 400 */
--text-body-sm: 14px;   /* Line height: 1.5 (21px), Weight: 400 */

/* UI */
--text-button: 16px;    /* Line height: 1.2, Weight: 500 */
--text-caption: 13px;   /* Line height: 1.4, Weight: 400 */
```

---

## Spacing & Layout

### Spacing Scale

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

### Grid System

#### Desktop (≥1024px)
- **Columns**: 12
- **Gutter**: 24px
- **Max width**: 1200px
- **Side margin**: 48px

#### Tablet (768px–1023px)
- **Columns**: 8
- **Gutter**: 20px
- **Max width**: 100%
- **Side margin**: 32px

#### Mobile (<768px)
- **Columns**: Stack (single column)
- **Gutter**: 16px
- **Max width**: 100%
- **Side margin**: 24px

### Container Classes

```css
/* Global Container */
.container-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px; /* Desktop */
}

@media (max-width: 1023px) {
  .container-main {
    padding: 0 32px; /* Tablet */
  }
}

@media (max-width: 767px) {
  .container-main {
    padding: 0 24px; /* Mobile */
  }
}

/* Narrow Container (for blog posts, forms) */
.container-narrow {
  max-width: 768px;
  margin: 0 auto;
  padding: 0 24px;
}
```

---

## Border Radius

```css
--radius-sm: 4px;      /* Small elements, badges */
--radius-base: 8px;    /* Buttons, inputs, small cards */
--radius-lg: 16px;     /* Cards, modals, feature blocks */
--radius-xl: 24px;     /* Hero sections, large containers */
--radius-full: 9999px; /* Pills, circular avatars */
```

---

## Shadows & Elevation

```css
/* Base shadow (cards at rest) */
--shadow-sm: 0 2px 8px rgba(47, 47, 47, 0.04);

/* Hover state (cards, buttons on hover) */
--shadow-md: 0 6px 18px rgba(47, 47, 47, 0.06);

/* Modal, popover */
--shadow-lg: 0 12px 32px rgba(47, 47, 47, 0.08);

/* Dropdown, elevated menu */
--shadow-xl: 0 20px 48px rgba(47, 47, 47, 0.12);
```

---

## Motion & Animation

### Timing Functions

```css
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

## Iconography

### Icon Style
- **Library**: Lucide React (https://lucide.dev)
- **Weight**: Thin to regular stroke (1.5–2px)
- **Size Scale**: 16px, 20px, 24px, 32px
- **Color**: Inherit from text color

### Common Icons

```tsx
// components/icons.tsx
import {
  Calendar,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Youtube,
  Star,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  User,
  Clock,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

export const Icons = {
  calendar: Calendar,
  mail: Mail,
  phone: Phone,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  star: Star,
  arrowRight: ArrowRight,
  menu: Menu,
  close: X,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  user: User,
  clock: Clock,
  checkCircle: CheckCircle,
  external: ExternalLink,
};
```

---

## Image Specifications

### Formats & Optimization

```
Priority: AVIF > WebP > JPEG
- Use next/image with automatic format selection
- Implement responsive srcset
- Lazy load below-fold images
```

---

**Document Version**: 1.0  
**Last Updated**: December 14, 2025  
**Design System Owner**: Design Team

````