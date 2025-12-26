````markdown
# Component Library Specifications
## Shilpa A Jain — Numerologist Website

---

## Component Variants & States

All components follow the design system tokens defined in `DESIGN_SYSTEM.md`.

---

## 1. Button Component

### Variants

#### Primary Button
```tsx
// Default state
background: var(--color-primary)
color: #FFFFFF
padding: 14px 32px
border-radius: var(--radius-base)
font-size: var(--text-button)
font-weight: 500
font-family: var(--font-body)
transition: all 200ms ease-out

// Hover state
background: var(--color-primary-hover)
transform: scale(1.02)
box-shadow: var(--shadow-sm)

// Active/Pressed state
transform: scale(0.98)

// Focus state
outline: 2px solid var(--color-primary)
outline-offset: 2px

// Disabled state
background: #D4D0C8
color: #8A8A8A
cursor: not-allowed
opacity: 0.6
```

**Usage**: Primary CTAs — "Book a Personal Session", form submissions

**Tailwind Classes**:
```tsx
<button className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-200 hover:scale-102 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 disabled:bg-border disabled:text-gray-muted disabled:cursor-not-allowed disabled:opacity-60">
  Book a Personal Session
</button>
```

---

**Document Version**: 1.0  
**Last Updated**: December 14, 2025

````