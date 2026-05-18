# AGENTS.md

## Project Context

This is a Next.js portfolio website using:

- App Router
- SCSS Modules
- Centralized SCSS architecture
- Feature-based frontend structure
- `src/` as the single source of truth

The goal is to complete the remaining frontend implementation based on the provided Figma design while preserving the current architecture and existing working code.

Figma Reference:
[https://www.figma.com/design/pHUC5kVJH74RayhYheavod/Portfolio?node-id=0-1&t=mjvKZVLEG6ADVhdv-1](https://www.figma.com/design/pHUC5kVJH74RayhYheavod/Portfolio?node-id=0-1&t=mjvKZVLEG6ADVhdv-1)

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
```

Do NOT flatten the structure.
Do NOT introduce new architecture patterns.

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
- Existing responsive mixins if already available

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

Prefer:

```scss
.block {
}
.block__element {
}
.block__element_modifier {
}
```

Do not rewrite existing SCSS architecture.

---

# Component Rules

## Preserve Existing Components

Existing components must remain reusable:

- `NavBarView`
- `HomePageView`
- `PortfolioPageView`

Do NOT rename existing components.

Do NOT move components unless absolutely necessary.

---

# Implementation Goal

Implement the remaining missing UI from the Figma design.

This includes:

- Proper layout structure
- Responsive sections
- Typography hierarchy
- Portfolio sections
- Hero refinements
- Spacing and alignment
- Buttons and hover states
- Image positioning
- Mobile responsiveness
- Section composition
- Footer if present in design
- Social links if present in design
- Decorative/background assets if present in public/images

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

Avoid hardcoded viewport hacks.

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

Do NOT invent a new design language.

---

# Safe Refactor Rules

Allowed:

- Create missing components
- Improve layout structure
- Improve responsiveness
- Split large UI sections into smaller components
- Reorganize SCSS within existing feature boundaries

Not allowed:

- Changing routing behavior
- Replacing Next.js architecture
- Introducing state libraries
- Introducing Tailwind
- Introducing UI libraries
- Modifying unrelated logic
- Rewriting the entire project

---

# Asset Rules

Use assets from:

```txt
public/images/
```

Preserve existing filenames.

Use `next/image` for images whenever appropriate.

---

# Coding Standards

Use:

- Clean semantic HTML
- Accessible structure
- Readable component composition
- Proper TypeScript-safe React patterns

Avoid:

- Dead code
- Duplicate styles
- Massive single-file components
- Overengineering

---

# Deliverable Expectations

The final implementation should:

- Visually match the Figma design closely
- Be fully responsive
- Preserve the existing architecture
- Keep SCSS organized
- Maintain reusable components
- Avoid unnecessary refactors
