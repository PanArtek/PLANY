import type { ServicePage } from '../types';

export const mockServicePages: ServicePage[] = [
  {
    seo: {
      en: {
        title: 'Commercial Fit-out Services | PLANY',
        description: 'Professional commercial fit-out services for offices, retail spaces, and hospitality venues.',
        keywords: ['commercial fit-out', 'office fit-out', 'retail fit-out', 'hospitality fit-out']
      },
      pl: {
        title: 'Usługi Fit-out Komercyjny | PLANY',
        description: 'Profesjonalne usługi fit-out komercyjny dla biur, sklepów i obiektów hotelowych.',
        keywords: ['fit-out komercyjny', 'fit-out biurowy', 'fit-out sklepów', 'fit-out hotelowy']
      },
      ua: {
        title: 'Послуги комерційного оздоблення | PLANY',
        description: 'Професійні послуги комерційного оздоблення для офісів, магазинів та готельних закладів.',
        keywords: ['комерційне оздоблення', 'офісне оздоблення', 'оздоблення магазинів', 'готельне оздоблення']
      },
      de: {
        title: 'Gewerbe Fit-out Dienstleistungen | PLANY',
        description: 'Professionelle Fit-out-Dienstleistungen für Büros, Einzelhandelsgeschäfte und Gastronomiebetriebe.',
        keywords: ['Gewerbe Fit-out', 'Büro Fit-out', 'Einzelhandel Fit-out', 'Gastronomie Fit-out']
      }
    },
    title: 'Commercial Fit-out',
    subtitle: 'Creating Exceptional Commercial Spaces',
    description: 'Our commercial fit-out services transform ordinary spaces into functional, inspiring environments that enhance productivity, reflect your brand identity, and impress your clients and employees.',
    featuredImage: {
      url: '/images/services/commercial-fit-out.jpg',
      alt: 'Modern office space with professional fit-out'
    },
    content: [
      {
        type: 'text',
        content: 'At PLANY, we specialize in delivering high-quality commercial fit-out services for a wide range of businesses and industries. Our experienced team works closely with you to understand your specific requirements, brand values, and operational needs, ensuring that the final result exceeds your expectations.\n\nWhether you\'re setting up a new office, renovating a retail store, or upgrading a hospitality venue, we have the expertise to deliver exceptional results on time and within budget.'
      },
      {
        type: 'feature',
        content: {
          title: 'Comprehensive Project Management',
          description: 'From initial concept to final handover, our project management team ensures that every aspect of your fit-out project is executed with precision and efficiency.',
          icon: 'project'
        }
      },
      {
        type: 'feature',
        content: {
          title: 'Custom Design Solutions',
          description: 'Our design team creates tailored solutions that align with your brand identity, optimize your space, and enhance functionality.',
          icon: 'design'
        }
      },
      {
        type: 'feature',
        content: {
          title: 'Quality Craftsmanship',
          description: 'We employ skilled craftsmen and use premium materials to ensure the highest quality finish for your commercial space.',
          icon: 'quality'
        }
      },
      {
        type: 'image',
        content: {
          url: '/images/services/commercial-process.jpg',
          alt: 'Commercial fit-out process diagram'
        }
      },
      {
        type: 'text',
        content: '## Our Commercial Fit-out Services\n\n### Office Fit-out\nCreate productive, inspiring workspaces that foster collaboration, creativity, and employee well-being. Our office fit-out services include space planning, furniture selection, lighting design, acoustics, technology integration, and more.\n\n### Retail Fit-out\nTransform your retail space into an engaging environment that enhances the customer experience and drives sales. We handle everything from storefront design to custom display units, lighting, and signage.\n\n### Hospitality Fit-out\nDevelop distinctive hospitality venues that create memorable experiences for your guests. Our hospitality fit-out services cover restaurants, cafes, hotels, bars, and more, with a focus on ambiance, functionality, and durability.'
      },
      {
        type: 'gallery',
        content: [
          {
            url: '/images/portfolio/office-1.jpg',
            alt: 'Modern office fit-out example'
          },
          {
            url: '/images/portfolio/retail-1.jpg',
            alt: 'Retail store fit-out example'
          },
          {
            url: '/images/portfolio/restaurant-1.jpg',
            alt: 'Restaurant fit-out example'
          }
        ]
      },
      {
        type: 'cta',
        content: {
          title: 'Ready to Transform Your Commercial Space?',
          subtitle: 'Contact us today for a consultation and free quote.',
          buttonText: 'Get in Touch',
          buttonLink: '/en/contact'
        }
      }
    ],
    relatedServices: [
      {
        title: 'Interior Design',
        description: 'Professional interior design services to create functional and aesthetically pleasing spaces.',
        icon: 'design',
        slug: 'interior-design'
      },
      {
        title: 'Project Management',
        description: 'End-to-end project management ensuring timely delivery within budget.',
        icon: 'project',
        slug: 'project-management'
      },
      {
        title: 'Custom Furniture',
        description: 'Bespoke furniture design and manufacturing to meet specific requirements and preferences.',
        icon: 'furniture',
        slug: 'custom-furniture'
      }
    ],
    slug: 'commercial-fit-out'
  },
  {
    seo: {
      en: {
        title: 'Residential Fit-out Services | PLANY',
        description: 'High-quality residential fit-out services for apartments, houses, and residential complexes.',
        keywords: ['residential fit-out', 'apartment fit-out', 'house renovation', 'home fit-out']
      },
      pl: {
        title: 'Usługi Fit-out Mieszkalny | PLANY',
        description: 'Wysokiej jakości usługi fit-out mieszkalny dla apartamentów, domów i kompleksów mieszkalnych.',
        keywords: ['fit-out mieszkalny', 'fit-out apartamentów', 'renowacja domów', 'fit-out domów']
      },
      ua: {
        title: 'Послуги житлового оздоблення | PLANY',
        description: 'Високоякісні послуги з оздоблення квартир, будинків і житлових комплексів.',
        keywords: ['житлове оздоблення', 'оздоблення квартир', 'ремонт будинків', 'оздоблення домів']
      },
      de: {
        title: 'Wohnraum Fit-out Dienstleistungen | PLANY',
        description: 'Hochwertige Fit-out-Dienstleistungen für Wohnungen, Häuser und Wohnkomplexe.',
        keywords: ['Wohnraum Fit-out', 'Wohnungs-Fit-out', 'Hausrenovierung', 'Heim-Fit-out']
      }
    },
    title: 'Residential Fit-out',
    subtitle: 'Creating Your Dream Living Space',
    description: 'Our residential fit-out services transform houses into homes, creating beautiful, functional living spaces that reflect your personal style and enhance your quality of life.',
    featuredImage: {
      url: '/images/services/residential-fit-out.jpg',
      alt: 'Modern home interior with luxury fit-out'
    },
    content: [
      {
        type: 'text',
        content: 'At PLANY, we understand that your home is a reflection of your personality and lifestyle. Our residential fit-out services are designed to create living spaces that are not only aesthetically pleasing but also highly functional and tailored to your specific needs.\n\nWhether you\'re renovating an apartment, updating a house, or fitting out a newly built property, our experienced team will work closely with you to bring your vision to life, ensuring that every detail is perfect.'
      },
      {
        type: 'feature',
        content: {
          title: 'Personalized Design',
          description: 'Our design team creates customized solutions that reflect your personal style, optimize your space, and enhance your daily living experience.',
          icon: 'design'
        }
      },
      {
        type: 'feature',
        content: {
          title: 'Quality Materials',
          description: 'We use only the highest quality materials and finishes to ensure durability, longevity, and a premium aesthetic for your home.',
          icon: 'quality'
        }
      },
      {
        type: 'feature',
        content: {
          title: 'Expert Craftsmanship',
          description: 'Our skilled craftsmen bring decades of experience to every project, ensuring meticulous attention to detail and flawless execution.',
          icon: 'craftsmanship'
        }
      },
      {
        type: 'image',
        content: {
          url: '/images/services/residential-process.jpg',
          alt: 'Residential fit-out process diagram'
        }
      },
      {
        type: 'text',
        content: '## Our Residential Fit-out Services\n\n### Complete Home Renovation\nTransform your entire home with a comprehensive renovation that updates every aspect of your living space, from structural changes to finishing touches.\n\n### Kitchen & Bathroom Fit-out\nCreate functional, stylish kitchens and bathrooms that combine practicality with luxury, featuring custom cabinetry, premium fixtures, and quality finishes.\n\n### Custom Built-ins & Storage\nMaximize your space with custom-designed built-ins and storage solutions that seamlessly integrate with your home\'s aesthetic while providing practical organization.\n\n### Smart Home Integration\nEnhance your living experience with integrated technology solutions, including lighting, climate control, audio-visual systems, and security features.'
      },
      {
        type: 'gallery',
        content: [
          {
            url: '/images/portfolio/apartment-1.jpg',
            alt: 'Luxury apartment renovation example'
          },
          {
            url: '/images/portfolio/home-1.jpg',
            alt: 'Modern home fit-out example'
          },
          {
            url: '/images/portfolio/apartment-2.jpg',
            alt: 'Custom kitchen renovation example'
          }
        ]
      },
      {
        type: 'cta',
        content: {
          title: 'Ready to Transform Your Home?',
          subtitle: 'Contact us today for a consultation and free quote.',
          buttonText: 'Get in Touch',
          buttonLink: '/en/contact'
        }
      }
    ],
    relatedServices: [
      {
        title: 'Interior Design',
        description: 'Professional interior design services to create functional and aesthetically pleasing spaces.',
        icon: 'design',
        slug: 'interior-design'
      },
      {
        title: 'Custom Furniture',
        description: 'Bespoke furniture design and manufacturing to meet specific requirements and preferences.',
        icon: 'furniture',
        slug: 'custom-furniture'
      },
      {
        title: 'Consultation',
        description: 'Expert advice on space optimization, materials, and design solutions.',
        icon: 'consultation',
        slug: 'consultation'
      }
    ],
    slug: 'residential-fit-out'
  }
];