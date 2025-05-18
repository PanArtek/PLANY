import React from 'react';
import { useServicePage } from '../cms/hooks';
import { getLangFromUrl, useTranslations } from '../i18n/utils';
import type { ServiceContent, Feature, CTA, Image } from '../cms/types';

interface ServiceDetailProps {
  slug: string;
  url: URL;
}

export default function ServiceDetail({ slug, url }: ServiceDetailProps) {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  
  // Get service data from the CMS
  const { data: service, loading, error } = useServicePage(slug);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
      </div>
    );
  }
  
  if (error || !service) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">Failed to load service details. Please try again later.</p>
      </div>
    );
  }
  
  // Render different content types
  const renderContent = (content: ServiceContent) => {
    switch (content.type) {
      case 'text':
        return (
          <div className="prose prose-lg max-w-none">
            {/* In a real implementation, you would use a markdown renderer here */}
            <div dangerouslySetInnerHTML={{ __html: content.content as string }} />
          </div>
        );
      
      case 'image':
        const image = content.content as Image;
        return (
          <div className="my-12">
            {/* This would be an actual image in production */}
            <div className="bg-gray-200 h-80 w-full flex items-center justify-center">
              <span className="text-gray-400">{image.alt || 'Image'}</span>
            </div>
          </div>
        );
      
      case 'gallery':
        const images = content.content as Image[];
        return (
          <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, index) => (
              <div key={index} className="bg-gray-200 h-60 flex items-center justify-center">
                <span className="text-gray-400">{img.alt || `Gallery Image ${index + 1}`}</span>
              </div>
            ))}
          </div>
        );
      
      case 'feature':
        const feature = content.content as Feature;
        return (
          <div className="my-8 p-6 bg-background-alt rounded-lg">
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-text-light">{feature.description}</p>
          </div>
        );
      
      case 'cta':
        const cta = content.content as CTA;
        return (
          <div className="my-12 p-8 bg-primary text-white rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">{cta.title}</h3>
            {cta.subtitle && <p className="mb-6 text-gray-300">{cta.subtitle}</p>}
            <a 
              href={cta.buttonLink} 
              className="inline-block px-6 py-3 bg-secondary text-white rounded-md hover:bg-secondary-dark transition-colors duration-200"
            >
              {cta.buttonText}
            </a>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* Service header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-text-light">{service.subtitle}</p>
        </header>
        
        {/* Featured image */}
        <div className="mb-12">
          {/* This would be an actual image in production */}
          <div className="bg-gray-200 h-96 w-full flex items-center justify-center">
            <span className="text-gray-400">{service.featuredImage.alt || 'Featured Image'}</span>
          </div>
        </div>
        
        {/* Service description */}
        <div className="mb-12">
          <p className="text-lg text-text-light">{service.description}</p>
        </div>
        
        {/* Service content */}
        {service.content.map((content, index) => (
          <div key={index} className="mb-8">
            {renderContent(content)}
          </div>
        ))}
        
        {/* Related services */}
        {service.relatedServices && service.relatedServices.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {service.relatedServices.map((relatedService, index) => (
                <a 
                  key={index} 
                  href={`/${lang}/services/${relatedService.slug}`}
                  className="card p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3">{relatedService.title}</h3>
                  <p className="text-text-light">{relatedService.description}</p>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}