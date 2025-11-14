# Agent Quick Start Guide - Ochlik Bygg AB Website

## 🎯 Which Agent Should I Use?

### "My code is messy and hard to maintain"
→ **Use: Refactoring Agent**
- Extracts duplicate code
- Creates reusable components
- Improves performance
- Organizes file structure

### "Users can't navigate with keyboard"
→ **Use: Accessibility Agent**
- Fixes keyboard navigation
- Adds ARIA labels
- Improves screen reader support
- Ensures WCAG compliance

### "Site isn't showing up in Google searches"
→ **Use: SEO & Content Agent**
- Optimizes meta tags
- Adds structured data
- Improves local SEO
- Tracks keyword rankings

### "The layout needs restructuring"
→ **Use: Architecture Agent**
- Reorganizes components
- Manages HTML structure
- Creates component blueprints
- Documents architecture

### "Colors and spacing need adjustment"
→ **Use: Design Agent**
- Updates theme colors
- Adjusts typography
- Refines responsive design
- Ensures visual consistency

---

## 📋 Priority Tasks by Agent

### Refactoring Agent - Top 3 Tasks
1. ✅ Extract animation variants to `src/animations/variants.js`
2. ✅ Split References modal into `ReferenceModal.jsx` component
3. ✅ Create constants file for image paths and colors

**Estimated Impact**: Reduce code duplication by 30%, improve maintainability

---

### Accessibility Agent - Top 3 Tasks
1. 🔥 Add descriptive alt text to all gallery images (Swedish)
2. 🔥 Implement focus trap in References modal + Escape key handler
3. 🔥 Add skip link for keyboard navigation

**Estimated Impact**: Achieve WCAG 2.1 AA compliance, improve usability for 15% of users

---

### SEO & Content Agent - Top 3 Tasks
1. 🚀 Add meta tags and Open Graph data to `index.html`
2. 🚀 Implement LocalBusiness structured data (JSON-LD)
3. 🚀 Optimize image filenames and alt text with Swedish keywords

**Estimated Impact**: Increase organic traffic by 40-60% within 3-6 months

---

## 🔄 Common Workflows

### Adding a New Section
```
1. Architecture Agent: Create component structure
2. Design Agent: Apply styling and theme
3. Refactoring Agent: Extract reusable patterns
4. Accessibility Agent: Add ARIA labels and keyboard support
5. SEO Agent: Add relevant keywords and meta data
```

### Fixing a Performance Issue
```
1. Refactoring Agent: Profile and identify bottleneck
2. Architecture Agent: Restructure if needed
3. Refactoring Agent: Implement optimization
4. SEO Agent: Verify improved page speed for SEO
```

### Making Content Changes
```
1. SEO Agent: Research keywords and optimize content
2. Design Agent: Adjust typography and layout
3. Accessibility Agent: Verify content is screen-reader friendly
4. Refactoring Agent: Clean up any messy code
```

### Launching New Feature
```
1. Architecture Agent: Design component structure
2. Design Agent: Create visual design
3. Refactoring Agent: Optimize code quality
4. Accessibility Agent: Full a11y audit
5. SEO Agent: Add relevant meta data
```

---

## 📊 Current Site Health Snapshot

### Performance
- **Bundle Size**: ~500KB (target: <300KB) ⚠️
- **Load Time**: ~1.5s (good) ✅
- **Lighthouse Performance**: 85/100 (needs improvement) ⚠️

### Accessibility
- **Keyboard Navigation**: Partial support ⚠️
- **Screen Reader Support**: Missing labels ⚠️
- **Color Contrast**: Mostly compliant ✅
- **ARIA Coverage**: Minimal ⚠️

### SEO
- **Meta Tags**: Missing ❌
- **Structured Data**: Missing ❌
- **Image Optimization**: Needs work ⚠️
- **Local SEO Setup**: Not started ❌
- **Keyword Strategy**: Not defined ❌

### Code Quality
- **Code Duplication**: High (animation variants, styles) ⚠️
- **Component Size**: Some large files (References.jsx ~500 lines) ⚠️
- **Type Safety**: No TypeScript/PropTypes ⚠️
- **Testing**: None ❌

### Design
- **Visual Consistency**: Good ✅
- **Responsive Design**: Good ✅
- **Theme Usage**: Partial (some hardcoded values) ⚠️
- **Brand Alignment**: Strong ✅

---

## 🎓 Agent Training Examples

### Example 1: Refactoring Animation Variants

**Problem**: Same animation code duplicated in multiple files

**Before** (in Services.jsx and References.jsx):
```jsx
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
```

**After**: 
```jsx
// Create: src/animations/variants.js
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// In components:
import { fadeInUp, stagger } from '../animations/variants';
```

**Impact**: Reduced duplication, easier to maintain animations globally

---

### Example 2: Adding Accessibility to Modal

**Problem**: Modal not keyboard accessible

**Before**:
```jsx
<Modal open={open} onClose={handleClose}>
  <Box>
    <img src={image} />
    <Typography>{title}</Typography>
  </Box>
</Modal>
```

**After**:
```jsx
<Modal 
  open={open} 
  onClose={handleClose}
  aria-labelledby="project-title"
  aria-describedby="project-description"
  onKeyDown={(e) => {
    if (e.key === 'Escape') handleClose();
  }}
>
  <Box tabIndex={-1}>
    <img 
      src={image} 
      alt={`${project.title} - Detaljbild av ${project.description}`}
    />
    <Typography id="project-title" variant="h2">
      {title}
    </Typography>
    <Typography id="project-description">
      {description}
    </Typography>
  </Box>
</Modal>
```

**Impact**: Modal now keyboard accessible, screen reader friendly

---

### Example 3: Adding SEO Meta Tags

**Problem**: No meta information for search engines

**Before**: Basic HTML with no meta tags

**After** (in index.html):
```html
<head>
  <title>Ochlik Bygg AB | Byggföretag i Markaryd | Tak, Renovering, Snickeri</title>
  <meta name="description" content="Professionella byggtjänster i Markaryd sedan 2009. Specialister på takbyten, renovering, nybyggnation. Ring 073-723 35 36 för kostnadsfri offert.">
  
  <!-- Open Graph for social media -->
  <meta property="og:title" content="Ochlik Bygg AB - Byggföretag i Markaryd">
  <meta property="og:description" content="15 års erfarenhet inom bygg, tak och renovering">
  <meta property="og:image" content="https://ochlikbygg.se/images/combined_logo.png">
  <meta property="og:url" content="https://ochlikbygg.se">
  
  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Ochlik Bygg AB",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hässleholmsvägen 22",
      "addressLocality": "Markaryd",
      "postalCode": "285 33"
    },
    "telephone": "+46737233536"
  }
  </script>
</head>
```

**Impact**: Better search rankings, rich snippets in Google, social media previews

---

## 🛠️ Tools Each Agent Uses

### Refactoring Agent
- **VS Code**: Code editor
- **Vite**: Build tool and dev server
- **React DevTools**: Component profiler
- **Bundle Analyzer**: Check bundle size
- **Lighthouse**: Performance metrics

### Accessibility Agent
- **NVDA**: Free screen reader (Windows)
- **WAVE**: Browser accessibility checker
- **axe DevTools**: Automated a11y testing
- **Keyboard**: Manual keyboard testing
- **Color Contrast Checker**: WebAIM tool

### SEO & Content Agent
- **Google Search Console**: Performance tracking
- **Google Business Profile**: Local SEO management
- **PageSpeed Insights**: Speed and SEO metrics
- **Rich Results Test**: Structured data validator
- **Ahrefs/SEMrush**: Keyword research (optional)

### All Agents
- **Chrome DevTools**: Inspect elements, console
- **Git**: Version control
- **Browser testing**: Chrome, Firefox, Safari
- **Mobile testing**: Responsive mode + real devices

---

## 📞 Support & Collaboration

### When in Doubt
1. Check the detailed agent instructions in your specific `.md` file
2. Review examples in the agent documentation
3. Look at existing code patterns in the project
4. Coordinate with other agents if work overlaps
5. Test changes thoroughly before committing

### Communication Guidelines
- **Be specific**: Include file paths and line numbers
- **Show examples**: Before/after code snippets
- **Explain why**: Benefits of the change
- **Consider impact**: How it affects other areas
- **Document**: Leave comments for complex logic

---

## 🎯 Success Criteria

### Site is "Launch Ready" When:
- ✅ Lighthouse scores all above 90
- ✅ No critical accessibility issues
- ✅ All meta tags and structured data present
- ✅ No code duplication in critical paths
- ✅ Images optimized and properly named
- ✅ Keyboard navigation fully functional
- ✅ Mobile experience excellent
- ✅ Local SEO configured (Google Business Profile)
- ✅ All forms validated and error-handled
- ✅ Page load time under 2 seconds

---

**Ready to Start?** Pick your agent role and dive into the detailed instructions in the specific agent `.md` files!
