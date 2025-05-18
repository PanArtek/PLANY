import type { PortfolioItem } from '../types';

export const mockPortfolioItems: PortfolioItem[] = [
  {
    title: 'Modern Office Space',
    subtitle: 'Tech Company Headquarters',
    description: 'A contemporary office space designed for a tech company, featuring open workspaces, collaborative areas, and private meeting rooms.',
    category: 'commercial',
    slug: 'modern-office-space',
    featuredImage: {
      url: '/images/portfolio/office-1.jpg',
      alt: 'Modern office space with open workstations and collaborative areas'
    },
    images: [
      {
        url: '/images/portfolio/office-1.jpg',
        alt: 'Modern office space with open workstations and collaborative areas'
      },
      {
        url: '/images/portfolio/office-2.jpg',
        alt: 'Meeting room with glass walls and modern furniture'
      },
      {
        url: '/images/portfolio/office-3.jpg',
        alt: 'Office kitchen and break area'
      }
    ],
    client: 'TechSolutions Inc.',
    location: 'Warsaw, Poland',
    date: 'March 2024',
    services: ['Commercial Fit-out', 'Interior Design', 'Custom Furniture']
  },
  {
    title: 'Luxury Apartment',
    subtitle: 'High-end Residential Fit-out',
    description: 'A high-end residential fit-out for a luxury apartment, featuring custom-designed furniture, premium materials, and smart home technology.',
    category: 'residential',
    slug: 'luxury-apartment',
    featuredImage: {
      url: '/images/portfolio/apartment-1.jpg',
      alt: 'Luxury apartment living room with custom furniture'
    },
    images: [
      {
        url: '/images/portfolio/apartment-1.jpg',
        alt: 'Luxury apartment living room with custom furniture'
      },
      {
        url: '/images/portfolio/apartment-2.jpg',
        alt: 'Modern kitchen with high-end appliances'
      },
      {
        url: '/images/portfolio/apartment-3.jpg',
        alt: 'Master bedroom with custom woodwork'
      }
    ],
    client: 'Private Client',
    location: 'Warsaw, Poland',
    date: 'January 2024',
    services: ['Residential Fit-out', 'Interior Design', 'Custom Furniture']
  },
  {
    title: 'Fashion Boutique',
    subtitle: 'Retail Store Fit-out',
    description: 'A stylish retail fit-out for a fashion boutique, featuring custom display units, fitting rooms, and a visually striking interior design.',
    category: 'retail',
    slug: 'fashion-boutique',
    featuredImage: {
      url: '/images/portfolio/retail-1.jpg',
      alt: 'Fashion boutique interior with custom display units'
    },
    images: [
      {
        url: '/images/portfolio/retail-1.jpg',
        alt: 'Fashion boutique interior with custom display units'
      },
      {
        url: '/images/portfolio/retail-2.jpg',
        alt: 'Fitting rooms with luxury finishes'
      },
      {
        url: '/images/portfolio/retail-3.jpg',
        alt: 'Retail counter and checkout area'
      }
    ],
    client: 'Fashion Forward',
    location: 'Krakow, Poland',
    date: 'November 2023',
    services: ['Commercial Fit-out', 'Interior Design', 'Custom Furniture']
  },
  {
    title: 'Upscale Restaurant',
    subtitle: 'Fine Dining Establishment',
    description: 'A complete fit-out for an upscale restaurant, featuring custom-designed dining areas, a bar, and a professional kitchen.',
    category: 'hospitality',
    slug: 'upscale-restaurant',
    featuredImage: {
      url: '/images/portfolio/restaurant-1.jpg',
      alt: 'Upscale restaurant dining area with custom seating'
    },
    images: [
      {
        url: '/images/portfolio/restaurant-1.jpg',
        alt: 'Upscale restaurant dining area with custom seating'
      },
      {
        url: '/images/portfolio/restaurant-2.jpg',
        alt: 'Bar area with custom woodwork'
      },
      {
        url: '/images/portfolio/restaurant-3.jpg',
        alt: 'Professional kitchen with stainless steel equipment'
      }
    ],
    client: 'Gourmet Dining Ltd.',
    location: 'Warsaw, Poland',
    date: 'October 2023',
    services: ['Commercial Fit-out', 'Interior Design', 'Custom Furniture']
  },
  {
    title: 'Corporate Headquarters',
    subtitle: 'Finance Company Office',
    description: 'A prestigious office fit-out for a finance company headquarters, featuring executive offices, conference rooms, and open workspaces.',
    category: 'office',
    slug: 'corporate-headquarters',
    featuredImage: {
      url: '/images/portfolio/corporate-1.jpg',
      alt: 'Finance company headquarters reception area'
    },
    images: [
      {
        url: '/images/portfolio/corporate-1.jpg',
        alt: 'Finance company headquarters reception area'
      },
      {
        url: '/images/portfolio/corporate-2.jpg',
        alt: 'Executive office with custom furniture'
      },
      {
        url: '/images/portfolio/corporate-3.jpg',
        alt: 'Conference room with audiovisual equipment'
      }
    ],
    client: 'Global Finance Group',
    location: 'Warsaw, Poland',
    date: 'September 2023',
    services: ['Commercial Fit-out', 'Interior Design', 'Project Management']
  },
  {
    title: 'Modern Family Home',
    subtitle: 'Complete Home Renovation',
    description: 'A complete renovation of a family home, featuring contemporary design, custom furniture, and smart home integration.',
    category: 'residential',
    slug: 'modern-family-home',
    featuredImage: {
      url: '/images/portfolio/home-1.jpg',
      alt: 'Modern family home living area with custom furniture'
    },
    images: [
      {
        url: '/images/portfolio/home-1.jpg',
        alt: 'Modern family home living area with custom furniture'
      },
      {
        url: '/images/portfolio/home-2.jpg',
        alt: 'Kitchen with custom cabinetry'
      },
      {
        url: '/images/portfolio/home-3.jpg',
        alt: 'Master bedroom with built-in storage'
      }
    ],
    client: 'Private Client',
    location: 'Wroclaw, Poland',
    date: 'August 2023',
    services: ['Residential Fit-out', 'Interior Design', 'Custom Furniture']
  }
];