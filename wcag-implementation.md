# WCAG 2.1 AA Implementation Guide for PLANY Website

This document outlines the specific implementation details for ensuring WCAG 2.1 AA compliance on the PLANY website. It serves as a reference for developers and a checklist for accessibility testing.

## 1. Perceivable

### 1.1 Text Alternatives
All non-text content has appropriate text alternatives:

- **Images**: All images use the `<OptimizedImage>` component which enforces alt text
- **Decorative Images**: Marked with `alt=""` and appropriate `aria-hidden="true"`
- **SVG Icons**: Include title elements and appropriate ARIA attributes
- **Background Images**: Ensure no critical information is conveyed only through background images

### 1.2 Time-based Media
For any video or audio content that may be added:

- **Captions**: Required for all pre-recorded audio content
- **Audio Descriptions**: Required for pre-recorded video content
- **Controls**: Media players include keyboard-accessible controls
- **Transcripts**: Available for all audio and video content

### 1.3 Adaptable
Content can be presented in different ways without losing information:

- **Responsive Design**: All content adapts to different viewport sizes
- **Orientation**: Content works in both portrait and landscape orientations
- **Content Order**: Logical reading order regardless of visual layout
- **Input Purpose**: Form fields have appropriate autocomplete attributes

### 1.4 Distinguishable
Content is easy to see and hear:

- **Color**: Not used as the only visual means of conveying information
- **Text Contrast**: Minimum ratio of 4.5:1 for normal text, 3:1 for large text
- **Resizing**: Content can be resized to 200% without loss of functionality
- **Text Spacing**: Content supports custom text spacing
- **Hover/Focus Content**: Additional content on hover/focus is dismissible

## 2. Operable

### 2.1 Keyboard Accessible
All functionality is available from a keyboard:

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **No Keyboard Trap**: Users can navigate to and from all components
- **Shortcuts**: Any keyboard shortcuts can be turned off or remapped
- **Component Focus**: Custom components manage focus appropriately

### 2.2 Enough Time
Users have enough time to read and use content:

- **Timeout Warning**: Warnings for session timeouts with options to extend
- **Moving Content**: Controls to pause, stop, or hide moving content
- **Auto-updating**: Content that updates automatically can be paused or controlled

### 2.3 Seizures and Physical Reactions
Content does not cause seizures or physical reactions:

- **Flashing Content**: No content flashes more than three times per second
- **Animation**: Motion animation from interactions can be disabled
- **Reduced Motion**: Respects the `prefers-reduced-motion` media query

### 2.4 Navigable
Content provides ways to navigate and find content:

- **Skip Links**: "Skip to content" link at the beginning of the page
- **Page Titles**: Descriptive, unique page titles
- **Focus Order**: Tab order follows a logical sequence
- **Link Purpose**: Link text clearly identifies the purpose
- **Multiple Ways**: Multiple ways to locate a page (navigation, search, sitemap)
- **Headings**: Proper heading structure (`h1`-`h6`)
- **Focus Visible**: Enhanced focus indicators beyond browser defaults

### 2.5 Input Modalities
Content is operable through various inputs:

- **Pointer Gestures**: Complex gestures have simple alternatives
- **Pointer Cancellation**: Actions completed on up-event with ability to abort
- **Target Size**: Interactive targets are at least 44×44 pixels
- **Motion Actuation**: Functionality triggered by motion can be operated by interface components

## 3. Understandable

### 3.1 Readable
Content is readable and understandable:

- **Page Language**: Lang attribute specified on the html element
- **Parts Language**: Lang attribute on elements with different languages
- **Unusual Words**: Glossary or definitions for specialized terminology
- **Abbreviations**: Expanded form or definition on first use

### 3.2 Predictable
Pages operate and appear in predictable ways:

- **On Focus**: Elements do not change context when receiving focus
- **On Input**: Input fields do not automatically change context without warning
- **Consistent Navigation**: Navigation patterns are consistent across the site
- **Consistent Identification**: Components with the same functionality are identified consistently

### 3.3 Input Assistance
Help users avoid and correct mistakes:

- **Error Identification**: Form errors clearly identified and described
- **Labels/Instructions**: All form controls have clear labels and instructions
- **Error Suggestion**: Error messages suggest corrections where possible
- **Error Prevention**: Important forms have confirmation, review, or undo options

## 4. Robust

### 4.1 Compatible
Content is compatible with current and future user agents:

- **Valid Markup**: HTML validation with no major errors
- **Name, Role, Value**: All components use appropriate HTML elements or ARIA
- **Status Messages**: Status messages can be programmatically determined

## 5. Implementation Examples

### 5.1 Semantic HTML Components

All components use the most appropriate semantic HTML elements:

```
Header: <header>
Main navigation: <nav>
Main content: <main>
Footer: <footer>
Sections: <section>
Articles: <article>
Asides: <aside>
Headings: <h1> through <h6>
Lists: <ul>, <ol>, <li>
```

### 5.2 Form Implementation

Forms implement these accessibility features:

- Each input has an associated `<label>` element
- Required fields are marked with `aria-required="true"`
- Error messages are linked to inputs using `aria-describedby`
- Form groups use `<fieldset>` and `<legend>` where appropriate
- Form validation errors are announced using `aria-live` regions

### 5.3 Interactive Components

Custom interactive components implement:

- Appropriate `role` attributes
- Keyboard event handlers
- ARIA states (`aria-expanded`, `aria-selected`, etc.)
- Focus management for dialogs and disclosures
- Touch target sizes of at least 44×44 pixels

### 5.4 Image Optimization Component

The `<OptimizedImage>` component ensures:

- Required alt text
- Appropriate image loading strategy
- Responsive image handling
- Aspect ratio preservation to prevent layout shifts

### 5.5 Color Contrast Utilities

Tailwind CSS extended with:

- Custom color utilities that ensure minimum contrast ratios
- Focus state styles with sufficient contrast
- Error and success state colors that meet contrast requirements

## 6. Testing and Validation

### 6.1 Automated Testing
Regular automated testing includes:

- axe-core for component-level testing
- Lighthouse accessibility audits
- HTML validation
- Contrast ratio checking

### 6.2 Manual Testing
Periodic manual testing includes:

- Keyboard navigation testing
- Screen reader testing (NVDA, VoiceOver, JAWS)
- Reduced motion testing
- Browser zoom testing
- Mobile accessibility testing

### 6.3 User Testing
When possible, testing with:

- Users with different disabilities
- Users of assistive technologies
- Users with different devices and browsers

## 7. Resources and References

- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)
- [Inclusive Components](https://inclusive-components.design/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)

---

This document serves as both a reference guide and a checklist for implementing and testing WCAG 2.1 AA compliance on the PLANY website. It should be regularly updated as new components are added or existing ones are modified.