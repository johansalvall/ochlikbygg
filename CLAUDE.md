# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based website for **Ochlik Bygg AB**, a Swedish construction company. The application is built with Material-UI (MUI) for component design and Framer Motion for animations.

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

### Technology Stack
- **React 19** - UI library
- **Vite** - Build tool and dev server with file watching enabled (`usePolling: true`)
- **Material-UI (MUI)** - Component library and theming system
- **Framer Motion** - Animation library
- **React Icons** - Icon components (used alongside MUI icons)

### Component Structure

```
App.jsx (main component wrapped in ThemeProvider)
├── Navigation (navbar)
├── Hero (hero section with stats grid)
├── Services (6 service cards)
├── References (project showcase)
├── WhyUs (company history)
├── CTA (call to action)
├── Contact (contact information)
└── Footer

Shared Components:
└── SectionTitle (reusable section header with underline)
```

### Theme System

The app uses **MUI's theming system** defined in `theme.js`:

**Color Palette:**
- **Primary**: Blue (#3d5a80) - Main brand color, used for headings and accents
- **Secondary**: Dark gray (#1a1a1a) - Backgrounds and text
- **Accent**: Yellow (#f5c842) - Highlights, stats, and hover effects
- **Background**: White (#ffffff) default, light gray (#f5f5f5) paper

**Breakpoints:**
- xs: 0px
- sm: 600px
- md: 900px
- lg: 1200px (max container: 1600px)
- xl: 1536px (max container: 1920px)

**Key Theme Customizations:**
- All buttons have `borderRadius: 0` (sharp corners)
- Typography uses Segoe UI font family
- Headings are very bold (700-900 weight)
- Button text is uppercase with letter spacing
- Container max widths are extended for larger screens

### Animation Patterns

All sections use **Framer Motion** with consistent animation patterns:

```javascript
// Standard fade-in-up animation
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

// Stagger children animations
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

// Usage with viewport triggers (prevents re-animation)
<motion.div
  variants={stagger}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
>
  <motion.div variants={fadeInUp}>...</motion.div>
</motion.div>
```

**Animation Conventions:**
- Use `viewport={{ once: true }}` to prevent re-triggering on scroll
- Stagger delays are typically 0.15s
- Section titles animate separately with their own timing
- Hover animations use `whileHover={{ y: -10 }}` or `scale: 1.05`

### File Structure

```
src/
├── App.jsx               # Main app component with ThemeProvider
├── theme.js              # MUI theme configuration
├── main.jsx              # Entry point
├── index.css             # Global CSS resets
└── components/           # All page sections as components
    ├── Navigation.jsx
    ├── Hero.jsx
    ├── Services.jsx
    ├── References.jsx
    ├── WhyUs.jsx
    ├── CTA.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    └── SectionTitle.jsx  # Shared component
```

### Adding New Components

When creating new components:

1. **Use MUI components** - Import from `@mui/material` (Box, Container, Typography, Grid, etc.)
2. **Follow theme colors** - Use theme palette values via `sx` prop: `bgcolor: 'primary.main'`, `color: 'accent.main'`
3. **Use MUI's sx prop** for styling - Avoids separate CSS files
4. **Add animations** - Import `motion` from `framer-motion` and wrap components with `motion.div`
5. **Responsive design** - Use MUI's responsive props: `sx={{ py: { xs: 4, md: 8 } }}`

### Component ID Convention

Main sections have IDs for navigation anchors:
- `id="hem"` - Hero
- `id="tjanster"` - Services
- `id="referenser"` - References (if present)
- `id="om-oss"` - WhyUs
- `id="kontakt"` - Contact

## Company Information

**Ochlik Bygg AB**
- Founded: 2009 by Tomasz Ochlik
- Location: Hässleholmsvägen 22, 285 33 Markaryd, Sweden
- Phones: 073-723 35 36, 073-094 05 03
- Emails: info@ochlikbygg.se, adam@ochlikbygg.se
- Social: Facebook (OTB Bygg AB), Instagram (@ochlikbygg)

**Core Values**: Trygghet (Security), Ansvar (Responsibility), Kunskap (Knowledge)

## Development Notes

### Vite Configuration
- File watching uses polling (`usePolling: true`) to ensure proper hot reload
- Dev server typically runs on http://localhost:5173
- HMR (Hot Module Replacement) is enabled for fast development

### Static Assets
Images are in `public/images/` and referenced as `/images/filename.ext`:
- `background.jpg` - Hero background
- `logo.gif` - Company logo (if present)
- Other project images

### Responsive Strategy
- MUI Grid system for layouts
- Use responsive object syntax in `sx` prop: `{ xs: value, md: value }`
- Mobile breakpoint: 968px (referenced in some custom media queries)
- Typography scales automatically per theme configuration

### Common Patterns

**Section Layout:**
```jsx
<Box id="section-id" sx={{ py: 10, bgcolor: 'background.paper' }}>
  <Container maxWidth="lg">
    <SectionTitle title="SECTION TITLE" />
    {/* Section content */}
  </Container>
</Box>
```

**MUI Button with Framer Motion:**
```jsx
<Button
  component={motion.a}
  href="#kontakt"
  variant="contained"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  BUTTON TEXT
</Button>
```

## Production Build

```bash
npm run build
```

Built files go to `dist/` folder, ready for static hosting (Vercel, Netlify, etc.)
