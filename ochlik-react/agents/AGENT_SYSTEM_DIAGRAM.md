# Agent System Architecture - Visual Overview

## 🏗️ Agent Hierarchy & Relationships

```
                          📋 OCHLIK BYGG AB WEBSITE
                                    |
                    ┌───────────────┴───────────────┐
                    |                               |
            🏛️ FOUNDATION LAYER              🔧 OPTIMIZATION LAYER
                    |                               |
        ┌───────────┴───────────┐          ┌────────┴────────┐
        |                       |          |                 |
   🏗️ ARCHITECTURE         🎨 DESIGN    ♿ ACCESSIBILITY   📈 SEO
      AGENT               AGENT          AGENT           AGENT
        |                       |          |                 |
        └───────────────┬───────┘          └────────┬────────┘
                        |                           |
                   🔄 REFACTORING AGENT ───────────┘
                   (Cross-cutting concerns)
```

---

## 🎯 Agent Responsibilities Matrix

| Aspect | Architecture | Design | Refactoring | Accessibility | SEO |
|--------|-------------|--------|-------------|---------------|-----|
| **Component Structure** | 🟢 Owner | ⚪ Consult | 🟡 Optimize | ⚪ Validate | ⚪ N/A |
| **Visual Styling** | ⚪ N/A | 🟢 Owner | 🟡 Clean up | 🟡 Verify contrast | ⚪ N/A |
| **Performance** | ⚪ Consult | ⚪ Monitor | 🟢 Owner | ⚪ N/A | 🟡 Track |
| **Code Quality** | 🟡 Maintain | ⚪ N/A | 🟢 Owner | ⚪ N/A | ⚪ N/A |
| **Keyboard Nav** | 🟡 Enable | ⚪ N/A | ⚪ N/A | 🟢 Owner | ⚪ N/A |
| **ARIA Labels** | 🟡 Structure | ⚪ N/A | ⚪ N/A | 🟢 Owner | ⚪ N/A |
| **Color Contrast** | ⚪ N/A | 🟡 Choose | ⚪ N/A | 🟢 Verify | ⚪ N/A |
| **Meta Tags** | ⚪ N/A | ⚪ N/A | ⚪ N/A | ⚪ N/A | 🟢 Owner |
| **Keywords** | ⚪ N/A | ⚪ N/A | ⚪ N/A | ⚪ N/A | 🟢 Owner |
| **Image Alt Text** | 🟡 Structure | ⚪ N/A | ⚪ N/A | 🟡 Descriptive | 🟢 Keywords |
| **Theme Config** | 🟡 Structure | 🟢 Define | 🟡 Consolidate | ⚪ N/A | ⚪ N/A |

Legend: 🟢 Primary Owner | 🟡 Contributor | ⚪ Not Involved

---

## 🔄 Collaboration Workflows

### Workflow 1: Adding New Feature

```
Step 1: Architecture Agent
├─ Create component structure
├─ Define props and interfaces
└─ Set up HTML semantics
         │
         ▼
Step 2: Design Agent
├─ Apply theme colors
├─ Style layouts and spacing
└─ Ensure responsive design
         │
         ▼
Step 3: Refactoring Agent
├─ Extract reusable patterns
├─ Optimize performance
└─ Clean up code
         │
         ▼
Step 4: Accessibility Agent
├─ Add ARIA labels
├─ Test keyboard navigation
└─ Verify screen reader support
         │
         ▼
Step 5: SEO Agent
├─ Add meta descriptions
├─ Optimize content keywords
└─ Implement structured data
```

---

### Workflow 2: Fixing Performance Issue

```
Step 1: Refactoring Agent
├─ Profile and identify bottleneck
├─ Measure current metrics
└─ Propose solution
         │
         ▼
Step 2: Architecture Agent (if structural)
├─ Restructure components if needed
├─ Implement code splitting
└─ Optimize data flow
         │
         ▼
Step 3: Refactoring Agent
├─ Implement optimization
├─ Test performance improvement
└─ Verify no functionality broken
         │
         ▼
Step 4: Accessibility Agent
├─ Verify a11y not impacted
└─ Test with assistive tech
         │
         ▼
Step 5: SEO Agent
├─ Verify improved page speed
└─ Update performance metrics
```

---

### Workflow 3: Content Update

```
Step 1: SEO Agent
├─ Research keywords
├─ Optimize content copy
└─ Structure for readability
         │
         ▼
Step 2: Design Agent
├─ Adjust typography
├─ Optimize layout
└─ Ensure visual hierarchy
         │
         ▼
Step 3: Accessibility Agent
├─ Verify content structure
├─ Check heading hierarchy
└─ Test screen reader flow
         │
         ▼
Step 4: Refactoring Agent
├─ Clean up any messy code
└─ Extract content constants
```

---

## 📊 Current Codebase: Agent Territory Map

### Components by Primary Owner

```
Navigation.jsx (90 lines)
├─ Architecture: Component structure ✓
├─ Design: Styling and mobile drawer ✓
├─ Accessibility: Missing skip link ❌
└─ SEO: N/A

Hero.jsx (96 lines)
├─ Architecture: Hero layout ✓
├─ Design: Background image & CTAs ✓
├─ Accessibility: Heading hierarchy needs review ⚠️
└─ SEO: Missing H1 semantic tag ❌

Services.jsx (91 lines)
├─ Architecture: Service cards structure ✓
├─ Design: Icons and card styling ✓
├─ Refactoring: Duplicate animation variants ❌
└─ Accessibility: Cards accessible ✓

References.jsx (566 lines) ⚠️ LARGE
├─ Architecture: Gallery + modal structure ✓
├─ Design: Image carousel styling ✓
├─ Refactoring: Needs component splitting ❌
├─ Accessibility: Modal focus trap missing ❌
└─ SEO: Missing descriptive alt text ❌

WhyUs.jsx (136 lines)
├─ Architecture: Two-column layout ✓
├─ Design: Brand colors and spacing ✓
└─ Accessibility: List semantics ✓

CTA.jsx (503 lines) ⚠️ LARGE
├─ Architecture: Contact form structure ✓
├─ Design: Form styling ✓
├─ Refactoring: Could extract form logic ⚠️
├─ Accessibility: Form labels present ✓
└─ SEO: N/A

Footer.jsx (232 lines)
├─ Architecture: Footer sections ✓
├─ Design: Dark theme styling ✓
├─ Accessibility: Link focus states ✓
└─ SEO: NAP consistency needed ⚠️
```

---

## 🎯 Priority Tasks by Agent (Next 30 Days)

### Week 1-2: SEO Agent (Highest Impact)
```
Priority: CRITICAL
Impact: 🔥🔥🔥🔥🔥

Tasks:
├─ 1. Add meta tags to index.html (2 hours)
├─ 2. Implement LocalBusiness schema (3 hours)
├─ 3. Optimize image filenames (4 hours)
├─ 4. Add Swedish alt text to images (3 hours)
└─ 5. Create FAQ section content (4 hours)

Total: 16 hours
Expected Result: Foundation for organic traffic growth
```

### Week 2-3: Accessibility Agent (User Impact)
```
Priority: HIGH
Impact: 🔥🔥🔥🔥

Tasks:
├─ 1. Add skip link to Navigation (1 hour)
├─ 2. Fix References modal focus trap (3 hours)
├─ 3. Add keyboard controls to carousel (2 hours)
├─ 4. Verify color contrast ratios (2 hours)
└─ 5. Test with NVDA screen reader (3 hours)

Total: 11 hours
Expected Result: WCAG 2.1 AA compliance
```

### Week 3-4: Refactoring Agent (Code Quality)
```
Priority: MEDIUM
Impact: 🔥🔥🔥

Tasks:
├─ 1. Extract animation variants (2 hours)
├─ 2. Create image constants file (1 hour)
├─ 3. Split References modal component (4 hours)
├─ 4. Consolidate theme colors (2 hours)
└─ 5. Create custom hooks (3 hours)

Total: 12 hours
Expected Result: 30% less code duplication, better maintainability
```

---

## 🔍 Decision Tree: Which Agent Do I Need?

```
                          START HERE
                               |
                    Is this about content/visibility?
                          /         \
                        YES          NO
                         |            |
                    SEO AGENT         |
                                      |
                        Is this about appearance?
                              /         \
                            YES          NO
                             |            |
                        DESIGN AGENT      |
                                          |
                            Is this about code quality?
                                  /         \
                                YES          NO
                                 |            |
                          REFACTORING         |
                              AGENT           |
                                              |
                                Is this about usability/access?
                                      /         \
                                    YES          NO
                                     |            |
                              ACCESSIBILITY    ARCHITECTURE
                                  AGENT          AGENT
```

---

## 📈 Impact vs. Effort Matrix

```
HIGH IMPACT
    │
    │   🎯 SEO Setup          ♿ A11y Fixes
    │   (meta tags,          (keyboard nav,
    │   schema, alt text)    focus management)
    │         │                     │
    │         │                     │
    │   ──────┼─────────────────────┼──────── HIGH EFFORT
    │         │                     │
    │   🔄 Extract           🎨 Theme
    │   Variants            Refinement
    │   (animation code)    (minor tweaks)
    │
LOW IMPACT
```

### Recommended Order
1. **SEO Setup** (High Impact, Medium Effort) - Start here
2. **Accessibility Fixes** (High Impact, High Effort) - Week 2
3. **Extract Variants** (Medium Impact, Low Effort) - Quick wins
4. **Theme Refinement** (Low Impact, Low Effort) - Polish

---

## 🛡️ Agent Guardrails

### ✅ Architecture Agent MAY:
- Create new components
- Restructure folders
- Define component APIs
- Set up HTML semantics

### ❌ Architecture Agent MAY NOT:
- Change colors or fonts
- Optimize bundle size
- Add meta tags
- Fix keyboard navigation

---

### ✅ Design Agent MAY:
- Modify theme.js colors
- Adjust spacing and typography
- Update responsive breakpoints
- Style components

### ❌ Design Agent MAY NOT:
- Restructure components
- Extract hooks or utilities
- Add ARIA labels
- Change SEO keywords

---

### ✅ Refactoring Agent MAY:
- Extract duplicate code
- Create custom hooks
- Optimize performance
- Split large components

### ❌ Refactoring Agent MAY NOT:
- Change visual appearance
- Modify HTML structure
- Add accessibility features
- Write new content

---

### ✅ Accessibility Agent MAY:
- Add ARIA attributes
- Implement keyboard controls
- Fix focus management
- Test with screen readers

### ❌ Accessibility Agent MAY NOT:
- Change component architecture
- Modify visual design
- Optimize bundle size
- Write marketing copy

---

### ✅ SEO Agent MAY:
- Write meta descriptions
- Add structured data
- Optimize keywords
- Plan content strategy

### ❌ SEO Agent MAY NOT:
- Change component structure
- Modify CSS styling
- Refactor JavaScript
- Implement keyboard navigation

---

## 🎓 Real-World Example: Adding a Blog Section

### Step-by-Step Agent Collaboration

```
STEP 1: Architecture Agent
┌─────────────────────────────────────┐
│ Create blog component structure:    │
│ - src/components/Blog.jsx           │
│ - src/components/BlogPost.jsx       │
│ - Define props interface            │
│ - Set up semantic HTML (<article>)  │
└─────────────────────────────────────┘
            ↓
STEP 2: Design Agent
┌─────────────────────────────────────┐
│ Apply styling:                      │
│ - Blog grid layout                  │
│ - Post card design                  │
│ - Typography for readability        │
│ - Responsive breakpoints            │
└─────────────────────────────────────┘
            ↓
STEP 3: SEO Agent
┌─────────────────────────────────────┐
│ Optimize for search:                │
│ - Add Article schema markup         │
│ - Write SEO-friendly titles         │
│ - Add meta descriptions             │
│ - Include target keywords           │
└─────────────────────────────────────┘
            ↓
STEP 4: Accessibility Agent
┌─────────────────────────────────────┐
│ Ensure accessibility:               │
│ - Proper heading hierarchy          │
│ - Image alt text for featured image│
│ - "Read more" links descriptive     │
│ - Keyboard navigation works         │
└─────────────────────────────────────┘
            ↓
STEP 5: Refactoring Agent
┌─────────────────────────────────────┐
│ Optimize code:                      │
│ - Extract blog post card component  │
│ - Create useBlogData hook          │
│ - Optimize image loading            │
│ - Remove any duplication            │
└─────────────────────────────────────┘
            ↓
         ✅ DONE
```

---

## 📞 Quick Reference Card

### "I need to..."

| Task | Agent | Priority |
|------|-------|----------|
| Add new component | Architecture | - |
| Change colors | Design | - |
| Speed up site | Refactoring | Medium |
| Fix tab navigation | Accessibility | High |
| Improve Google ranking | SEO | Critical |
| Extract duplicate code | Refactoring | Low |
| Add ARIA labels | Accessibility | High |
| Write meta description | SEO | Critical |
| Split large file | Refactoring | Medium |
| Verify color contrast | Accessibility | High |

---

**This visual guide provides a clear understanding of how agents work together to maintain and improve the Ochlik Bygg AB website. Refer to individual agent `.md` files for detailed instructions.**
