import type { APIRoute } from 'astro';
import { languages } from '../i18n/ui';

// Define the base URL for the site
const SITE_URL = 'https://plany.com';

// Define common page paths
const commonPaths = [
  '', // home
  'about',
  'services',
  'portfolio',
  'contact',
];

// Define service paths
const servicePaths = [
  'services/commercial-fit-out',
  'services/residential-fit-out',
  'services/interior-design',
  'services/custom-furniture',
  'services/project-management',
  'services/consultation',
];

// Define portfolio paths
const portfolioPaths = [
  'portfolio/modern-office-space',
  'portfolio/luxury-apartment',
  'portfolio/fashion-boutique',
  'portfolio/upscale-restaurant',
  'portfolio/corporate-headquarters',
  'portfolio/modern-family-home',
];

// Generate all URLs with language prefixes
function generateUrls(): string[] {
  const urls: string[] = [];
  
  // Generate language-specific URLs for common pages
  Object.keys(languages).forEach(lang => {
    // Add common paths
    commonPaths.forEach(path => {
      urls.push(`${SITE_URL}/${lang}/${path}`);
    });
    
    // Add service paths
    servicePaths.forEach(path => {
      urls.push(`${SITE_URL}/${lang}/${path}`);
    });
    
    // Add portfolio paths
    portfolioPaths.forEach(path => {
      urls.push(`${SITE_URL}/${lang}/${path}`);
    });
  });
  
  return urls;
}

// Generate sitemap XML
function generateSitemap(urls: string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${urls.map(url => {
    // For each URL, generate alternate language links
    const path = url.replace(SITE_URL, '');
    const langPrefix = path.split('/')[1]; // Extract language from path
    
    return `<url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${url.includes('/portfolio/') || url.includes('/services/') ? '0.7' : '0.9'}</priority>
    ${Object.keys(languages).map(lang => {
      // Skip self-reference
      if (lang === langPrefix) return '';
      
      // Generate alternate URL by replacing language prefix
      const altUrl = `${SITE_URL}/${lang}${path.substring(langPrefix.length + 1)}`;
      return `<xhtml:link rel="alternate" hreflang="${lang}" href="${altUrl}" />`;
    }).join('\n    ')}
  </url>`;
  }).join('\n  ')}
</urlset>`;
}

export const GET: APIRoute = async () => {
  const urls = generateUrls();
  const sitemap = generateSitemap(urls);
  
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};