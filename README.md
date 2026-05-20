# Wendy Glen Portfolio Website

A modern and responsive portfolio website built with Next.js, React, TypeScript, and SCSS Modules.

This project showcases Wendy Glen’s virtual assistant services, portfolio information, and Calendly-powered contact experience through a clean, production-ready frontend architecture.

---

# Tech Stack

- Next.js 15
- React
- TypeScript
- SCSS Modules
- Calendly Integration
- Feature-Based Frontend Architecture

---

# Features

## Home Page

- Responsive hero section
- Professional introduction
- Service highlights
- Calendly contact popup integration
- Smooth modern UI styling

## Portfolio Page

- Portfolio showcase section
- CTA section with Calendly popup
- Social/contact links
- Responsive layout

## Contact System

- Reusable modal architecture
- Calendly embedded popup
- Centralized modal management
- Accessible modal interactions

## Frontend Architecture

- Feature-based folder structure
- Reusable components
- Scoped SCSS Modules
- Centralized styling system
- Clean separation of UI and feature logic

---

# Project Structure

```bash
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── portfolio/
│       └── page.tsx
│
├── features/
│   ├── contact/
│   │   ├── components/
│   │   │   └── ContactModal/
│   │   └── hooks/
│   │
│   ├── home/
│   │   └── components/
│   │
│   ├── navbar/
│   │   └── components/
│   │
│   └── portfolio/
│       └── components/
│
└── styles/
    ├── abstracts/
    ├── base/
    └── main.scss
```

---

# Getting Started

## 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

---

## 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using pnpm:

```bash
pnpm install
```

---

## 3. Run Development Server

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

# Build for Production

```bash
npm run build
```

Run production server:

```bash
npm run start
```

---

# Deployment

This project is optimized for deployment on Vercel.

## Recommended Deployment Stack

| Layer             | Platform   |
| ----------------- | ---------- |
| Frontend Hosting  | Vercel     |
| Repository        | GitHub     |
| Domain Management | Cloudflare |

---

## Deploy to Vercel

1. Push project to GitHub
2. Go to Vercel
3. Import repository
4. Deploy

---

# Calendly Integration

The project uses a reusable modal-based Calendly integration.

Main files:

```bash
src/features/contact/components/ContactModal/
```

This allows multiple CTA buttons across the website to reuse the same Calendly popup system without duplicating logic.

---

# Styling System

The project uses:

- SCSS Modules for component-scoped styling
- Shared SCSS architecture under:

```bash
src/styles/
```

Includes:

- Variables
- Mixins
- Typography
- Animations
- Base styles
- Reset styles

---

# Future Improvements

Potential future enhancements:

- Dark mode support
- Blog integration
- CMS integration
- Contact form backend
- SEO optimization
- Performance optimization
- Animation enhancements
- Multi-language support

---

# Author

Wendy Glen

Professional Virtual Assistant

---

# License

This project is for personal and professional portfolio use.
