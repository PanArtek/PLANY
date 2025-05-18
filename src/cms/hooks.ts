import { useState, useEffect } from 'react';
import { 
  getHomePage, 
  getPortfolioItems, 
  getPortfolioItemBySlug, 
  getServicePageBySlug,
  getProjectPageBySlug,
  getCompanyInfo,
  localizeString
} from './api';
import type { 
  HomePage, 
  PortfolioItem, 
  ServicePage, 
  ProjectPage, 
  CompanyInfo
} from './types';

// Custom hook for fetching the home page data
export function useHomePage() {
  const [data, setData] = useState<HomePage | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const homeData = await getHomePage();
        setData(homeData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}

// Custom hook for fetching portfolio items
export function usePortfolioItems(locale: string) {
  const [data, setData] = useState<PortfolioItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const portfolioData = await getPortfolioItems(locale);
        setData(portfolioData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [locale]);

  return { data, loading, error };
}

// Custom hook for fetching a single portfolio item by slug
export function usePortfolioItem(slug: string) {
  const [data, setData] = useState<PortfolioItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const portfolioItem = await getPortfolioItemBySlug(slug);
        setData(portfolioItem);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  return { data, loading, error };
}

// Custom hook for fetching a service page by slug
export function useServicePage(slug: string) {
  const [data, setData] = useState<ServicePage | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const servicePage = await getServicePageBySlug(slug);
        setData(servicePage);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  return { data, loading, error };
}

// Custom hook for fetching a project page by slug
export function useProjectPage(slug: string) {
  const [data, setData] = useState<ProjectPage | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const projectPage = await getProjectPageBySlug(slug);
        setData(projectPage);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  return { data, loading, error };
}

// Custom hook for fetching company information
export function useCompanyInfo() {
  const [data, setData] = useState<CompanyInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const companyInfo = await getCompanyInfo();
        setData(companyInfo);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}