# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based website showcase for **Ochlik Bygg AB**, a Swedish construction company. The application presents **three distinct design prototypes** that the client can choose from, plus a landing page that serves as a design selector.

## Development Commands

```bash
# Start development server (usually runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## Architecture

### Core Concept: Multi-Prototype System

The app uses a **conditional rendering pattern** where `App.jsx` acts as both:
1. **Landing page** (when `currentPrototype === null`) - Showcases company info and lets users explore designs
2. **Prototype container** (when prototype is selected) - Renders the chosen prototype with a switcher bar

### State Management Pattern

```javascript
// In App.jsx
const [currentPrototype, setCurrentPrototype] = useState(null)

// null = Landing page
// 'modern' | 'bold' | 'classic' = Selected prototype
```

### Prototype Structure

Each prototype lives in `src/prototypes/{Name}/`:
- `{Name}Prototype.jsx` - React component (self-contained, no props)
- `{Name}.css` - Scoped CSS (uses specific class prefixes to avoid conflicts)

**Key principle**: Each prototype is completely independent and can be viewed/edited without affecting others.

### Component Hierarchy

```
App.jsx (root state)
├── Landing Page (when prototype === null)
│   ├── Hero Section (with logo)
│   ├── Values Section
│   ├── References Section (project showcase)
│   ├── Prototype Selector Buttons
│   ├── Contact Section
│   └── Footer
└── Prototype View (when prototype selected)
    ├── Prototype Selector (fixed top-right, with back button)
    └── One of:
        ├── ModernPrototype.jsx
        ├── BoldPrototype.jsx
        └── ClassicPrototype.jsx
```

### Design Themes

Each prototype has distinct characteristics:

**Modern (Minimalist)**
- Color: Olive green (#6b8e23)
- Style: Clean, white backgrounds, subtle borders
- Typography: Sans-serif throughout
- Animations: Smooth fadeInUp, stagger effects

**Bold (Professional)**
- Color: Orange (#ff6b35) on dark backgrounds
- Style: High contrast, dramatic
- Typography: Uppercase headings, bold weights
- Animations: Slide-up overlays, strong transforms

**Classic (Trustworthy)**
- Color: Earth tones (browns #5d4037, olive #6b8e23)
- Style: Traditional borders, warm backgrounds
- Typography: Serif for headings, sans-serif for body
- Animations: Gentle fades, scale effects

### Animation Patterns

All prototypes use **Framer Motion** with consistent patterns:

```javascript
// Standard fade-in animation
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

// Stagger children
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1 // or 0.15, 0.2 depending on prototype
    }
  }
}

// Usage with viewport triggers
<motion.div
  variants={stagger}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
>
  <motion.div variants={fadeInUp}>...</motion.div>
</motion.div>
```

### Assets Location

Static assets are in `public/images/`:
- `logo.gif` - Company logo
- `hero.jpg` - Main hero background
- `gallery-header.jpg` - Gallery/references background

Images are referenced as `/images/filename.ext` (Vite handles the public folder automatically).

### Shared Sections Across Prototypes

Each prototype includes these sections (with different styling):
1. **Navigation** - Fixed or sticky nav with logo
2. **Hero** - Large banner with company tagline
3. **Values** - 3 core values (Trygghet, Ansvar, Kunskap)
4. **Services** - List of construction services offered
5. **References** - Project showcase with 3 example projects
6. **About** - Company history and information
7. **Contact** - Contact details (phone, email, address)
8. **Footer** - Copyright and additional info

### CSS Organization

- `index.css` - Global resets
- `App.css` - Landing page styles + prototype selector styles
- `{Prototype}.css` - Prototype-specific styles with namespaced classes

**Important**: Each prototype CSS uses a root class (`.modern-prototype`, `.bold-prototype`, `.classic-prototype`) to scope all styles and prevent conflicts.

## Company Information

When editing content, use this official information:

**Ochlik Bygg AB**
- Founded: 2009 by Tomasz Ochlik
- Location: Hässleholmsvägen 22, 285 33 Markaryd, Sweden
- Phones: 073-723 35 36, 073-094 05 03
- Emails: info@ochlikbygg.se, adam@ochlikbygg.se
- Social: Facebook (OTB Bygg AB), Instagram (@ochlikbygg)

**Core Values**: Trygghet (Security), Ansvar (Responsibility), Kunskap (Knowledge)

## Key Development Notes

### Adding New Sections
When adding a new section to prototypes:
1. Add to all three prototypes to maintain feature parity
2. Use each prototype's color scheme and animation patterns
3. Ensure mobile responsiveness (breakpoint: 968px)
4. Add to landing page if it's a showcase-worthy feature

### Styling Conflicts
If styles aren't applying correctly:
- Check that the root prototype class is present (e.g., `.modern-prototype`)
- Verify CSS specificity (prototype styles should be scoped under root class)
- Check browser DevTools for conflicting inherited styles

### Hot Module Replacement
Vite's HMR is enabled. When editing:
- CSS changes apply instantly without page reload
- JSX changes trigger fast refresh (preserves React state)
- Changes to `App.jsx` may require full reload

### Responsive Design
All prototypes use mobile-first responsive design:
- Mobile: < 768px
- Desktop: > 968px
- Use `@media (max-width: 968px)` for mobile breakpoints

### Framer Motion Performance
For optimal performance:
- Use `viewport={{ once: true }}` for scroll-triggered animations (prevents re-triggering)
- Use `whileInView` instead of always-active animations
- Keep `staggerChildren` delays reasonable (0.1-0.2s)
