# PLANY Website Documentation

This document provides comprehensive documentation for the PLANY fit-out company website. The website is built using Astro with React components and Tailwind CSS, focusing on performance, accessibility, and multilingual support.

## 1. Application Architecture

### 1.1 Technology Stack

- **Frontend Framework**: Astro 5.7 with React 19 integration
- **Styling**: Tailwind CSS 4.1
- **Content Management**: Headless CMS (prepared structure for integration)
- **Deployment**: Static site generation with dynamic components (Islands Architecture)

### 1.2 Architectural Layers

#### Frontend Layer
The frontend is built using Astro's island architecture, which provides the best of both static and dynamic approaches:
- **Static Shell**: Core HTML structure generated at build time
- **Interactive Islands**: React components hydrated in the browser where interactivity is required
- **Component Architecture**: Following Atomic Design principles (atoms, molecules, organisms, templates, pages)

#### CMS Integration Layer
The application is designed to connect with a headless CMS:
- **Data Fetching**: API utilities to fetch content from CMS
- **Content Types**: Structured models that map CMS content to frontend components
- **Preview Mode**: Capability to preview CMS content before publishing

#### Infrastructure Layer
- **Static Hosting**: Optimized for global CDN distribution
- **Asset Optimization**: Image optimization pipeline
- **Performance Monitoring**: Integration with performance monitoring tools

### 1.3 Data Flow

1. **Content Creation**: Data created and managed in headless CMS
2. **Build Process**: Astro pulls content during build process via API
3. **Static Generation**: Pages pre-rendered as static HTML at build time
4. **Client-side Hydration**: Interactive components hydrated in the browser
5. **User Interaction**: Dynamic components respond to user interactions
6. **Form Submissions**: Contact forms submit directly to backend services

### 1.4 Core Components

- **Layout**: Base layout with SEO, performance optimizations, and accessibility features
- **Header**: Navigation with language switcher
- **Footer**: Company information and secondary navigation
- **Hero**: Main promotional area with call-to-action
- **Portfolio**: Project showcases with filtering capability
- **Services**: Service offerings with details
- **Process**: Workflow visualization
- **Testimonials**: Client reviews and feedback
- **Contact**: Contact form with validation

## 2. Content Models

### 2.1 Content Organization

The website content is organized into the following collections:

#### HomePage
- SEO metadata (multilingual)
- Hero section content (multilingual)
- About section content (multilingual)
- Services overview (multilingual)
- Portfolio showcase (multilingual)
- Process description (multilingual)
- Testimonial highlights (multilingual)
- Contact information (multilingual)

#### Service
- Title and description (multilingual)
- Icon or visual identifier
- Detailed content sections
- Related services
- Featured projects
- Call-to-action information

#### Portfolio Project
- Title and description (multilingual)
- Project category
- Client information
- Location and date
- Gallery images
- Challenge, solution, and results sections
- Related services
- Navigation to adjacent projects

#### Testimonial
- Client name and position
- Company name
- Testimonial content (multilingual)
- Rating or satisfaction score
- Optional client image

#### Company Information
- Name and logo
- Contact details (address, phone, email)
- Social media profiles
- Working hours
- Legal information

### 2.2 Content Relationships

- **Services → Projects**: Projects can be linked to one or more services
- **Projects → Services**: Services can showcase related projects
- **Projects → Projects**: Related projects can be linked for navigation
- **Testimonials → Projects**: Testimonials can reference specific projects

### 2.3 Multilingual Content Management

All content models support four languages:
- Polish (PL) - Primary language
- English (EN) - International audience
- Ukrainian (UA) - Supporting Ukrainian clients
- German (DE) - Supporting German market

Each model includes localized fields for content that requires translation, with defaulting mechanisms when translations are not available.

## 3. Key Features

### 3.1 Multilingual Implementation

#### Language Detection and Switching
- URL-based language identification (e.g., `/en/`, `/pl/`)
- Language switcher component in the header
- Default language fallback to Polish
- Language persistence using localStorage

#### SEO for Multilingual Content
- Language-specific metadata
- Proper `hreflang` implementation for alternate language versions
- Canonical URLs for each language
- Structured data with language alternatives

#### Content Translation
- Translation utility functions
- Default language fallback system
- Consistent translation keys across components

### 3.2 Portfolio with Filtering

- Category-based filtering system
- Client-side filtering for immediate response
- Accessible filtering controls with ARIA attributes
- Smooth transitions between filtered views
- URL-based filtering state for direct linking

### 3.3 Contact Forms

- Form validation with accessible error messages
- reCAPTCHA integration to prevent spam
- Multi-step form for complex inquiries
- Proper form labeling and ARIA attributes
- Success and error states with clear feedback

### 3.4 Performance Optimizations

- Image optimization pipeline
- Lazy loading for off-screen images
- Code splitting and tree shaking
- Critical CSS inline injection
- Deferred loading of non-critical assets
- Service worker for offline capabilities
- Asset compression and minification

### 3.5 Scroll Animations

- Intersection Observer API for performant animations
- Progressive enhancement approach (core content visible without JS)
- Reduced motion support for accessibility
- Animation preferences respecting user settings
- Performance-conscious animation techniques

## 4. Code Organization

### 4.1 Directory Structure

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

### 4.2 Responsibility Division

- **Components**: Focused on presentation and user interaction
- **Layouts**: Handle page structure and common elements
- **Pages**: Assemble components and handle routing
- **CMS Integration**: Manage data fetching and content structure
- **Utilities**: Provide shared functionality across components
- **i18n**: Handle translation and localization

### 4.3 React Component State Management

- Local state for component-specific interactions
- Props for passing data down the component tree
- Custom hooks for shared stateful logic
- Context for theme, language, and global UI state
- Minimal use of external state libraries

### 4.4 API Communication

- Abstracted API layer in the CMS module
- Type-safe data fetching with TypeScript interfaces
- Error handling and loading states
- Caching strategies for performance
- Mock data support for development and testing

## 5. Accessibility Implementation (WCAG 2.1 AA)

### 5.1 Semantic HTML

- Proper heading hierarchy (`h1`-`h6`) for document structure
- Semantic elements (`nav`, `main`, `section`, `article`, etc.)
- Landmark roles for screen reader navigation
- Meaningful sequence and document structure
- Proper use of lists for related items

### 5.2 Color and Contrast

- Minimum contrast ratio of 4.5:1 for normal text
- Minimum contrast ratio of 3:1 for large text
- Non-reliance on color alone for conveying information
- Focus indicators with sufficient contrast
- Visual cues beyond color for interactive elements

### 5.3 Keyboard Navigation

- All interactive elements accessible via keyboard
- Logical tab order follows visual layout
- Visible focus indicators for all interactive elements
- No keyboard traps
- Skip navigation links for keyboard users
- Custom key handlers for complex components

### 5.4 Image Accessibility

- Descriptive alt text for images
- Empty alt attributes for decorative images
- Image roles and ARIA for complex images
- Text alternatives for charts and graphs
- Captions for relevant images

### 5.5 ARIA Implementation

- Complementary ARIA attributes, not replacing semantic HTML
- Proper use of ARIA landmarks, roles, states, and properties
- Dynamic ARIA updates for interactive components
- ARIA live regions for important updates
- Careful application following ARIA authoring practices

### 5.6 Forms and Input

- Explicit label association with form controls
- Error identification and suggestions
- Required field indication
- Input purpose identification
- Accessible form validation

### 5.7 Dynamic Content

- Focus management for dynamically revealed content
- Status messages using ARIA live regions
- Modal dialogues with proper keyboard trapping
- Timeout warnings and control
- Animation control and reduced motion support

## 6. Performance and Deployment

### 6.1 Performance Optimization

- Core Web Vitals optimization
  - Largest Contentful Paint (LCP) < 2.5s
  - First Input Delay (FID) < 100ms
  - Cumulative Layout Shift (CLS) < 0.1
- Asset optimization
  - Responsive images with srcset and sizes
  - Modern image formats (WebP, AVIF)
  - Font optimization with preload and display swap
- Code optimization
  - Tree shaking unused code
  - Code splitting for optimized loading
  - Minification of HTML, CSS, and JavaScript

### 6.2 Deployment Process

- Continuous Integration pipeline
- Automated testing before deployment
- Staged deployments with preview environments
- CDN configuration for global distribution
- Cache optimization for static assets
- Automated performance monitoring
- Rollback capability for production issues

### 6.3 Monitoring and Maintenance

- Performance monitoring with Core Web Vitals tracking
- Error logging and monitoring
- Accessibility audit schedule
- Content freshness review process
- Browser compatibility testing
- Security update procedures

## 7. Browser and Device Support

- Modern browsers (latest 2 versions)
- Mobile-first responsive design
- Progressive enhancement approach
- Fallback strategies for older browsers
- Touch-friendly interactions for mobile devices
- Print stylesheet optimization

---

This documentation provides a comprehensive overview of the PLANY website architecture, features, and implementation details. It serves as a guide for developers and designers working on the project, ensuring consistency and quality throughout development and maintenance.