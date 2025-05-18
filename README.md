# PLANY - Professional Fit-out Company Website

<div align="center">
  <img src="public/images/logo.svg" alt="PLANY Logo" width="200">
  <p><em>Building exceptional interior spaces</em></p>
</div>

## 🌟 Overview

PLANY is a multilingual website built for a professional fit-out company, showcasing their portfolio, services, and expertise across multiple markets. The site is optimized for performance, accessibility, and international reach.

## ✨ Features

- **🌐 Multilingual Support** - Full content in Polish, English, Ukrainian, and German
- **🖼️ Dynamic Portfolio** - Showcase projects with filtering capabilities
- **📱 Fully Responsive** - Mobile-first design approach
- **⚡ Performance Optimized** - Fast loading with Core Web Vitals in mind
- **♿ Accessible** - WCAG 2.1 AA compliant
- **🔍 SEO Ready** - Structured metadata and proper hreflang implementation

## 🛠️ Tech Stack

- **[Astro 5.7](https://astro.build/)** - Core framework with Islands Architecture
- **[React 19](https://reactjs.org/)** - For interactive components
- **[Tailwind CSS 4.1](https://tailwindcss.com/)** - For styling
- **TypeScript** - For type safety and developer experience
- **Headless CMS** - Structure prepared for integration

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
PLANY/
├── public/              # Static assets
├── src/
│   ├── components/      # UI components
│   │   ├── atoms/       # Basic UI elements
│   │   ├── molecules/   # Composite components
│   │   └── organisms/   # Complex components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Page components
│   │   ├── en/          # English pages
│   │   ├── pl/          # Polish pages
│   │   ├── ua/          # Ukrainian pages
│   │   └── de/          # German pages
│   ├── styles/          # Global styles
│   ├── utils/           # Utility functions
│   ├── i18n/            # Internationalization
│   └── cms/             # CMS integration
│       ├── types/       # Content type definitions
│       ├── api/         # API utilities
│       └── mock/        # Mock data for development
├── astro.config.mjs     # Astro configuration
└── tailwind.config.js   # Tailwind configuration
```

## 🌍 Internationalization

The website supports four languages:
- 🇵🇱 Polish (PL) - Primary language
- 🇬🇧 English (EN) - International audience
- 🇺🇦 Ukrainian (UA) - Supporting Ukrainian clients
- 🇩🇪 German (DE) - Supporting German market

Language switching is URL-based (e.g., `/en/`, `/pl/`) with proper SEO handling through hreflang tags.

## 🎯 Key Features

### Portfolio Showcase
Browse through categorized projects with filtering capabilities and detailed case studies.

### Service Details
Comprehensive presentation of services offered with related projects and detailed information.

### Performance Optimizations
- Image optimization pipeline
- Lazy loading for off-screen content
- Code splitting and tree shaking
- Critical CSS inline injection
- Service worker for offline capabilities

### Accessibility
WCAG 2.1 AA compliant with:
- Semantic HTML structure
- Proper color contrast
- Keyboard navigation support
- Screen reader optimization
- ARIA implementation

## 📊 Core Web Vitals Targets

- Largest Contentful Paint (LCP) < 2.5s
- First Input Delay (FID) < 100ms
- Cumulative Layout Shift (CLS) < 0.1

## 🧩 Browser and Device Support

- Modern browsers (latest 2 versions)
- Mobile-first responsive design
- Progressive enhancement approach
- Touch-friendly interactions

## 📜 License

All rights reserved. This project and its source code are proprietary and confidential.

---

For detailed documentation, refer to [documentation.md](documentation.md) and [wcag-implementation.md](wcag-implementation.md).