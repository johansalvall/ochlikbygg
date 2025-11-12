# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based website for **Ochlik Bygg AB**, a Swedish construction company. The application features a bold, professional design with dark backgrounds and striking orange accents (#ff6b35).

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
- **React** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon components

### Component Structure

```
App.jsx (main component)
├── Navigation (fixed navbar)
├── Hero Section (with stats)
├── Services Section (6 services)
├── References Section (project showcase)
├── Why Us Section (company history)
├── CTA Section (call to action)
├── Contact Section (contact info)
└── Footer
```

### Design Theme

**Bold & Professional**
- Colors: Dark backgrounds (#1a1a1a) with bright orange accents (#ff6b35)
- Style: High contrast, dramatic impact
- Typography: Uppercase headings, bold weights
- Animations: Smooth scroll-triggered animations with Framer Motion

### Animation Patterns

All sections use **Framer Motion** with consistent patterns:

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
      staggerChildren: 0.15
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

### Sections Overview

Each section includes:

1. **Navigation** - Sticky nav with logo and links (HEM, TJÄNSTER, OM OSS, KONTAKT)
2. **Hero** - Large banner with company tagline and statistics grid
3. **Services** - 6 core services (Nybyggnation, Renovering, Tillbyggnad, Takarbeten, Fönsterinstallation, Specialarbeten)
4. **References** - 3 project examples with hover effects
5. **Why Us** - Company history and features
6. **CTA** - Call-to-action section with gradient background
7. **Contact** - Contact details (phone, email, address, social media)
8. **Footer** - Copyright information

### CSS Organization

- `index.css` - Global resets
- `App.css` - All website styles

**Important**: All styles are scoped under the `.app` class to ensure proper organization.

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
When adding a new section:
1. Use the orange (#ff6b35) accent color
2. Follow the animation patterns (fadeInUp, stagger)
3. Ensure mobile responsiveness (breakpoint: 968px)
4. Maintain consistent spacing (padding: 6rem 2rem)

### Styling Guidelines
- Primary brand color: #ff6b35 (orange)
- Dark background: #1a1a1a
- Light background: #f5f5f5
- Text on dark: white or #ccc
- Text on light: #1a1a1a or #555

### Hot Module Replacement
Vite's HMR is enabled. When editing:
- CSS changes apply instantly without page reload
- JSX changes trigger fast refresh (preserves React state)
- Changes to `App.jsx` may require full reload

### Responsive Design
Mobile-first responsive design:
- Mobile: < 768px
- Desktop: > 968px
- Use `@media (max-width: 968px)` for mobile breakpoints

Key responsive changes:
- Hero: Single column layout on mobile
- Navigation: Reduced spacing on mobile
- Stats: Maintain 2-column grid even on mobile
- Content: Full width with reduced font sizes

### Framer Motion Performance
For optimal performance:
- Use `viewport={{ once: true }}` for scroll-triggered animations (prevents re-triggering)
- Use `whileInView` instead of always-active animations
- Keep `staggerChildren` delays reasonable (0.1-0.2s)

## Production Deployment

### Building for Production
```bash
npm run build
```

The built files will be in the `dist/` folder, ready to deploy to any static hosting service.

### Deployment Options
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting provider

### Environment Considerations
- Ensure all image paths are correct (`/images/...`)
- Test all animations on production build
- Verify mobile responsiveness
- Check that all links work correctly
