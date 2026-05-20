# AGENTS.md

# Project Context

This is a Next.js portfolio website using:

- App Router
- SCSS Modules
- Centralized SCSS architecture
- Feature-based frontend structure
- `src/` as the single source of truth

The goal is to complete and refine the frontend implementation based on the provided Figma design while preserving the current architecture and existing working code.

Figma Reference:
https://www.figma.com/design/pHUC5kVJH74RayhYheavod/Portfolio?node-id=0-1&t=mjvKZVLEG6ADVhdv-1

---

# Architecture Rules

## Folder Structure

Follow the existing structure strictly.

Current structure:

```txt
src/
  app/
  features/
  styles/
```

Feature modules:

```txt
src/features/home/
src/features/navbar/
src/features/portfolio/
src/features/contact/
```

Do NOT:

- flatten the structure
- introduce new architecture patterns
- move major feature boundaries
- convert the project to another architecture style

Preserve the current feature-oriented structure.

---

# Styling Rules

## SCSS Rules

Use:

- Sass/SCSS only
- SCSS Modules only
- Existing `src/styles/main.scss`
- Existing abstracts system
- Existing mixins/variables architecture
- Existing naming convention
- Existing responsive mixins if available

Codex must follow the current Sass architecture already implemented in the project.

Prefer importing shared Sass utilities through the existing abstracts/index pattern instead of duplicating variables or mixins.

Avoid:

- Tailwind
- Bootstrap
- Material UI
- Chakra UI
- styled-components
- inline styles
- CSS-in-JS
- third-party styling systems
- global CSS leakage

Preferred naming pattern:

```scss
.block {
}

.block__element {
}

.block__element_modifier {
}
```

Do NOT rewrite the existing SCSS architecture.

---

# Component Rules

## Preserve Existing Components

Existing components must remain reusable:

- `NavBarView`
- `HomePageView`
- `PortfolioPageView`
- `ContactModal`
- `ContactModalLauncher`

Do NOT:

- rename existing components
- move components unnecessarily
- duplicate reusable components
- introduce parallel implementations

---

# Implementation Goal

Implement missing frontend behavior and UI refinements while preserving the existing design language and architecture.

Possible implementation areas include:

- Layout structure
- Responsive sections
- Typography hierarchy
- Portfolio sections
- Hero refinements
- Spacing and alignment
- Buttons and hover states
- Image positioning
- Mobile responsiveness
- Section composition
- Footer sections
- Social links
- Decorative/background assets
- Performance improvements
- Accessibility improvements

Use the Figma design as the visual source of truth.

---

# Responsive Requirements

The UI must work correctly on:

- Desktop
- Tablet
- Mobile

Use:

- Flexbox
- CSS Grid when appropriate
- Responsive spacing
- Responsive typography
- Media queries through SCSS

Avoid:

- hardcoded viewport hacks
- fixed-height layouts unless necessary
- layout-breaking absolute positioning

---

# Design Consistency Rules

Match the Figma design closely:

- spacing
- alignment
- font sizing
- visual hierarchy
- section proportions
- button styling
- image scaling
- border radius
- shadows
- colors

Do NOT:

- invent a new design language
- redesign sections unnecessarily
- introduce inconsistent spacing systems
- alter the visual identity

---

# Safe Refactor Rules

Allowed:

- Create missing components
- Improve layout structure
- Improve responsiveness
- Split large UI sections into smaller components
- Reorganize SCSS within existing feature boundaries
- Improve accessibility
- Improve performance safely

Not allowed:

- Changing routing behavior
- Replacing Next.js architecture
- Introducing state libraries
- Introducing Tailwind
- Introducing UI libraries
- Modifying unrelated logic
- Rewriting the entire project
- Refactoring unrelated systems

---

# Asset Rules

Use assets from:

```txt
public/images/
```

Preserve existing filenames whenever possible.

Use:

- `next/image`
- optimized image loading
- proper responsive sizing

Avoid:

- unnecessary asset duplication
- replacing existing image assets without reason

---

# Coding Standards

Use:

- Clean semantic HTML
- Accessible structure
- Readable component composition
- Proper TypeScript-safe React patterns
- Reusable component logic
- Predictable naming

Avoid:

- Dead code
- Duplicate styles
- Massive single-file components
- Overengineering
- Unnecessary abstractions
- Deep prop drilling when avoidable

---

# Visual Regression Protection

When implementing behavioral or performance fixes:

- preserve existing DOM structure whenever possible
- preserve existing class names
- preserve existing SCSS module bindings
- avoid modifying rendered spacing/layout
- avoid replacing existing components unnecessarily

Behavioral fixes must not introduce visual regressions.

---

# Scope Isolation Rules

Only modify files directly related to the requested task.

Avoid touching unrelated:

- sections
- styles
- components
- layouts
- utilities
- feature modules

Minimize file changes whenever possible.

---

# Minimal Change Principle

Prefer the smallest safe implementation that solves the issue.

Avoid:

- introducing new abstractions
- introducing new providers
- introducing unnecessary hooks
- introducing additional dependencies
- creating new utility layers unless explicitly required
- expanding architecture scope unnecessarily

---

# Third-Party Script Rules

## Calendly Integration Rules

The project uses a centralized reusable Calendly modal architecture.

Existing implementation includes:

```txt
src/features/contact/components/ContactModal/
```

All CTA buttons that trigger Calendly must reuse the existing modal system.

Do NOT:

- create duplicate Calendly modals
- dynamically inject Calendly scripts per component
- create separate popup implementations
- duplicate embed logic

All Calendly-triggering buttons must use the shared:

- `ContactModal`
- `ContactModalLauncher`

architecture.

---

## Calendly Performance Rules

Calendly assets must be globally preloaded through:

```txt
src/app/layout.tsx
```

Use:

- `next/script`
- `strategy=\"afterInteractive\"`

The Calendly widget script:

```txt
https://assets.calendly.com/assets/external/widget.js
```

must only be loaded once globally.

Calendly stylesheet:

```txt
https://assets.calendly.com/assets/external/widget.css
```

should also be globally preloaded to avoid first-open blank popup/loading delay.

Do NOT:

- inject Calendly scripts inside modal components
- lazy inject scripts on button click
- duplicate external widget loading

Goals:

- instant popup opening
- no blank modal on first interaction
- centralized third-party script management
- production-safe hydration behavior

---

# Modal Reusability Rules

CTA buttons across the site must support reusable modal launching behavior.

`ContactModalLauncher` should remain reusable and support:

- custom className
- custom children/button label
- accessibility attributes
- shared modal logic

Avoid hardcoded button text inside reusable launcher components.

---

# IMPORTANT

This task is strictly a Calendly loading/performance fix only.

Do NOT:

- modify layout
- modify spacing
- modify typography
- modify styling
- modify responsive behavior
- redesign modal UI
- alter existing animations
- alter section composition
- refactor unrelated components

The visual design must remain identical.

Only fix:

- initial Calendly popup loading delay
- blank first-open modal issue
- external Calendly asset loading behavior

---

# Deliverable Expectations

The final implementation should:

- visually match the Figma design closely
- remain fully responsive
- preserve the existing architecture
- keep SCSS organized
- maintain reusable components
- avoid unnecessary refactors
- avoid visual regressions
- maintain production-safe behavior
- keep third-party integrations centralized and reusable
