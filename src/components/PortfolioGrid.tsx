import React, { useState } from 'react';
import { usePortfolioItems } from '../cms/hooks';
import { getLangFromUrl, useTranslations } from '../i18n/utils';
import type { PortfolioItem } from '../cms/types';

interface PortfolioGridProps {
  url: URL;
}

export default function PortfolioGrid({ url }: PortfolioGridProps) {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  
  // Get portfolio data from the CMS
  const { data: portfolioItems, loading, error } = usePortfolioItems(lang);
  
  // State for active filter
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Handle filter click
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };
  
  // Filter items based on active filter
  const filteredItems = portfolioItems?.filter(item => 
    activeFilter === 'all' || item.category.toLowerCase() === activeFilter.toLowerCase()
  );
  
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">Failed to load portfolio items. Please try again later.</p>
      </div>
    );
  }
  
  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button 
          className={`px-4 py-2 rounded-full transition-colors duration-200 ${
            activeFilter === 'all' 
              ? 'bg-secondary text-white' 
              : 'bg-white text-text hover:bg-gray-100'
          }`}
          onClick={() => handleFilterClick('all')}
        >
          {t('portfolio.all' as any)}
        </button>
        <button 
          className={`px-4 py-2 rounded-full transition-colors duration-200 ${
            activeFilter === 'commercial' 
              ? 'bg-secondary text-white' 
              : 'bg-white text-text hover:bg-gray-100'
          }`}
          onClick={() => handleFilterClick('commercial')}
        >
          {t('portfolio.commercial' as any)}
        </button>
        <button 
          className={`px-4 py-2 rounded-full transition-colors duration-200 ${
            activeFilter === 'residential' 
              ? 'bg-secondary text-white' 
              : 'bg-white text-text hover:bg-gray-100'
          }`}
          onClick={() => handleFilterClick('residential')}
        >
          {t('portfolio.residential' as any)}
        </button>
        <button 
          className={`px-4 py-2 rounded-full transition-colors duration-200 ${
            activeFilter === 'retail' 
              ? 'bg-secondary text-white' 
              : 'bg-white text-text hover:bg-gray-100'
          }`}
          onClick={() => handleFilterClick('retail')}
        >
          {t('portfolio.retail' as any)}
        </button>
        <button 
          className={`px-4 py-2 rounded-full transition-colors duration-200 ${
            activeFilter === 'hospitality' 
              ? 'bg-secondary text-white' 
              : 'bg-white text-text hover:bg-gray-100'
          }`}
          onClick={() => handleFilterClick('hospitality')}
        >
          {t('portfolio.hospitality' as any)}
        </button>
        <button 
          className={`px-4 py-2 rounded-full transition-colors duration-200 ${
            activeFilter === 'office' 
              ? 'bg-secondary text-white' 
              : 'bg-white text-text hover:bg-gray-100'
          }`}
          onClick={() => handleFilterClick('office')}
        >
          {t('portfolio.office' as any)}
        </button>
      </div>
      
      {/* Portfolio grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems && filteredItems.map((item: PortfolioItem) => (
          <div 
            key={item.slug} 
            className="card overflow-hidden group"
          >
            <div className="relative h-64 bg-gray-200">
              {/* This would be an actual image in production */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Image Placeholder</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <a href={`/${lang}/portfolio/${item.slug}`} className="btn-primary">
                  {t('portfolio.viewProject' as any)}
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-text-light">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty state */}
      {filteredItems && filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-light">No projects found for this category.</p>
        </div>
      )}
    </div>
  );
}