import type {
  HomePage,
  PortfolioItem,
  ServicePage,
  ProjectPage,
  CompanyInfo,
  LocalizedContent
} from './types';
import { mockHomePage } from './mock/home';
import { mockPortfolioItems } from './mock/portfolio';
import { mockServicePages } from './mock/services';
import { mockProjectPages } from './mock/projects';
import { mockCompanyInfo } from './mock/company';

// API functions that would connect to a real headless CMS in production
// but use mock data for now

export async function getHomePage(): Promise<HomePage> {
  // In production, this would fetch from your CMS
  return mockHomePage;
}

export async function getPortfolioItems(locale: string): Promise<PortfolioItem[]> {
  // In production, this would fetch from your CMS with the locale parameter
  return mockPortfolioItems;
}

export async function getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | null> {
  // In production, this would fetch from your CMS using the slug
  const item = mockPortfolioItems.find(item => item.slug === slug);
  return item || null;
}

export async function getServicePageBySlug(slug: string): Promise<ServicePage | null> {
  // In production, this would fetch from your CMS using the slug
  const page = mockServicePages.find(page => page.slug === slug);
  return page || null;
}

export async function getProjectPageBySlug(slug: string): Promise<ProjectPage | null> {
  // In production, this would fetch from your CMS using the slug
  const project = mockProjectPages.find(project => project.slug === slug);
  return project || null;
}

export async function getCompanyInfo(): Promise<CompanyInfo> {
  // In production, this would fetch from your CMS
  return mockCompanyInfo;
}

// Helper functions for localization
export function localizeString<T>(localizedContent: LocalizedContent<T>, locale: string): T {
  const lang = locale as keyof LocalizedContent<T>;
  // Default to English if the requested locale doesn't exist
  return localizedContent[lang] || localizedContent.en;
}