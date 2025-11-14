# Agent Roles Overview for Ochlik Bygg AB Website

This directory contains specialized agent instructions for different aspects of website development and optimization. Each agent has a specific focus area and works collaboratively with others to maintain a high-quality, professional website for the construction business.

## 📚 Quick Navigation

- **[START HERE: Setup Complete Summary](SETUP_COMPLETE.md)** - Overview of everything that's been set up
- **[Quick Start Guide](QUICK_START.md)** - Fast reference for common tasks
- **[Agent System Diagram](AGENT_SYSTEM_DIAGRAM.md)** - Visual guide to agent relationships
- **Individual Agent Instructions** (see below for detailed files)

---

## Available Agents

### 1. Architecture Agent (`architecture_agent.md`)
**Focus**: Structure, Components, and HTML/CSS Foundation
- Maintains clean component hierarchy and folder structure
- Ensures semantic HTML and accessibility foundations
- Manages reusable component library
- Provides blueprint for other agents to work within
- Documents component usage and architecture decisions

**When to use**: Setting up new components, restructuring sections, planning major features

---

### 2. Design Agent (`design_agent.md`)
**Focus**: Visual Design, Styling, and Brand Consistency
- Applies colors, typography, and spacing according to brand guidelines
- Ensures visual consistency across all sections
- Optimizes responsive design and mobile experience
- Manages theme configuration and Material-UI customization
- Creates polished, professional aesthetics

**When to use**: Styling components, updating visual design, adjusting responsive layouts

---

### 3. Refactoring Agent (`refactoring_agent.md`) ⭐ NEW
**Focus**: Code Quality, Performance, and Maintainability
- Eliminates code duplication and extracts reusable patterns
- Optimizes bundle size and performance
- Improves code organization and readability
- Implements React and Vite best practices
- Extracts custom hooks and shared utilities
- Monitors and improves Core Web Vitals

**When to use**: Cleaning up code, improving performance, making codebase more maintainable

**Priority tasks identified**:
- Extract shared animation variants to separate file
- Split large components (References modal)
- Create custom hooks for common patterns
- Consolidate hardcoded values to theme/constants

---

### 4. Accessibility Agent (`accessibility_agent.md`) ⭐ NEW
**Focus**: WCAG 2.1 AA Compliance and Inclusive Design
- Ensures keyboard navigation works throughout site
- Implements proper ARIA labels and semantic markup
- Verifies color contrast and text readability
- Tests with screen readers (NVDA, JAWS, VoiceOver)
- Manages focus states and skip links
- Respects user preferences (reduced motion, high contrast)
- Ensures Swedish language support in assistive technologies

**When to use**: Adding new interactive features, fixing navigation issues, preparing for launch

**Priority fixes identified**:
- Add descriptive alt text to gallery images
- Implement focus trap in modal
- Add skip link for keyboard users
- Verify color contrast ratios
- Add keyboard controls to image carousel

---

### 5. SEO & Content Optimization Agent (`seo_content_agent.md`) ⭐ NEW
**Focus**: Search Engine Visibility and Local SEO
- Optimizes meta tags, structured data, and Open Graph tags
- Implements local SEO for Markaryd region
- Manages keyword strategy for Swedish construction terms
- Creates and optimizes content for target audience
- Tracks rankings and search performance
- Builds Google Business Profile optimization strategy
- Ensures NAP (Name, Address, Phone) consistency

**When to use**: Launching site, updating content, improving search rankings, tracking performance

**Immediate actions needed**:
- Add missing meta tags and descriptions
- Implement LocalBusiness schema markup
- Optimize image filenames and alt text
- Create FAQ section with local keywords
- Set up Google Search Console tracking

---

## Agent Workflow & Collaboration

### Standard Development Process
1. **Architecture Agent** creates structure and components
2. **Design Agent** applies styling within that structure
3. **Refactoring Agent** cleans up and optimizes code
4. **Accessibility Agent** ensures inclusive functionality
5. **SEO Agent** optimizes content and metadata

### When Making Changes
- **New Feature**: Architecture → Design → Accessibility → SEO
- **Visual Update**: Design → Accessibility (verify contrast)
- **Performance Issue**: Refactoring → Architecture (if structural)
- **Content Update**: SEO → Design (if visual changes needed)
- **Bug Fix**: Identify owner → Implement → Accessibility (verify fix doesn't break a11y)

### Cross-Agent Coordination
- **Refactoring + Architecture**: Coordinate on component restructuring
- **Design + Accessibility**: Verify color contrast and focus states together
- **SEO + Design**: Balance keyword placement with visual design
- **All Agents**: Communicate before major changes that affect multiple areas

---

## Quick Reference

### Current Website Tech Stack
- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **UI Library**: Material-UI 7.3.5
- **Animation**: Framer Motion 12.23.24
- **Icons**: React Icons 5.5.0, Material Icons 7.3.5

### Key Components
- `Navigation.jsx` - Header with mobile drawer
- `Hero.jsx` - Landing section with CTA
- `Services.jsx` - Service cards with icons
- `References.jsx` - Project gallery with modal
- `WhyUs.jsx` - About section with benefits
- `Contact.jsx` - Contact information
- `Footer.jsx` - Site footer with links

### Important Files
- `theme.js` - Material-UI theme configuration
- `index.css` - Global CSS reset
- `package.json` - Dependencies and scripts

---

## Best Practices for All Agents

### Communication
- ✅ Be specific about file paths and line numbers
- ✅ Provide before/after code examples
- ✅ Explain the "why" behind changes
- ✅ Document decisions for future reference
- ✅ Ask for clarification when requirements are unclear

### Code Changes
- ✅ Test changes in development environment first
- ✅ Verify mobile and desktop responsive behavior
- ✅ Check browser console for errors
- ✅ Maintain consistent code style
- ✅ Keep commits focused and well-described

### Quality Standards
- ✅ All interactive elements must be keyboard accessible
- ✅ Color contrast must meet WCAG AA standards
- ✅ Images must have descriptive alt text
- ✅ Code must be readable and maintainable
- ✅ Performance should be monitored (Lighthouse score 90+)

### What NOT to Do
- ❌ Don't make changes outside your area of expertise without consulting relevant agent
- ❌ Don't break existing functionality when refactoring
- ❌ Don't ignore accessibility in favor of visual design
- ❌ Don't optimize prematurely without measuring first
- ❌ Don't introduce new dependencies without justification

---

## Getting Started as an Agent

1. **Read your specific agent instructions** in detail
2. **Review the current codebase** to understand context
3. **Check the priority tasks** listed in your agent file
4. **Coordinate with other agents** if your work overlaps
5. **Make incremental changes** and test thoroughly
6. **Document your work** so others can follow your reasoning

---

## Project Goals

### Business Objectives
- Generate qualified leads (phone calls and email inquiries)
- Showcase 15+ years of construction expertise
- Build trust with Markaryd/Småland region customers
- Highlight completed projects and services
- Provide easy contact methods

### Technical Objectives
- Fast, responsive single-page website
- Lighthouse score 90+ across all categories
- WCAG 2.1 AA accessibility compliance
- Top 5 Google rankings for local construction keywords
- Mobile-first experience
- Professional, trustworthy design

### Success Metrics
- Page load time < 2 seconds
- Mobile usability score: 100
- Accessibility score: 100
- SEO score: 95+
- Conversion rate: 3-5% (visitors → inquiries)
- Local search visibility for "byggföretag markaryd" and related terms

---

**Questions or need clarification?** Refer to individual agent files for detailed instructions, or collaborate with other agents to resolve complex cross-domain issues.
