import type { ProjectPage } from '../types';

export const mockProjectPages: ProjectPage[] = [
  {
    seo: {
      en: {
        title: 'Modern Office Space - Tech Company Headquarters | PLANY Portfolio',
        description: 'A contemporary office space designed for a tech company, featuring open workspaces, collaborative areas, and private meeting rooms.',
        keywords: ['office design', 'tech office', 'commercial fit-out', 'workspace design']
      },
      pl: {
        title: 'Nowoczesna przestrzeń biurowa - Siedziba firmy technologicznej | Portfolio PLANY',
        description: 'Nowoczesna przestrzeń biurowa zaprojektowana dla firmy technologicznej, z otwartymi przestrzeniami roboczymi, obszarami do współpracy i prywatnymi salami konferencyjnymi.',
        keywords: ['projektowanie biur', 'biuro technologiczne', 'fit-out komercyjny', 'projektowanie przestrzeni roboczej']
      },
      ua: {
        title: 'Сучасний офісний простір - Штаб-квартира технологічної компанії | Портфоліо PLANY',
        description: 'Сучасний офісний простір, розроблений для технологічної компанії, із відкритими робочими місцями, зонами для співпраці та приватними конференц-залами.',
        keywords: ['дизайн офісу', 'технологічний офіс', 'комерційне оздоблення', 'дизайн робочого простору']
      },
      de: {
        title: 'Moderner Büroraum - Hauptsitz eines Technologieunternehmens | PLANY Portfolio',
        description: 'Ein zeitgemäßer Büroraum, der für ein Technologieunternehmen konzipiert wurde, mit offenen Arbeitsbereichen, Kollaborationszonen und privaten Besprechungsräumen.',
        keywords: ['Bürodesign', 'Technik-Büro', 'Gewerbe-Fit-out', 'Arbeitsplatzgestaltung']
      }
    },
    title: 'Modern Office Space',
    subtitle: 'Tech Company Headquarters',
    category: 'commercial',
    client: 'TechSolutions Inc.',
    location: 'Warsaw, Poland',
    date: 'March 2024',
    services: ['Commercial Fit-out', 'Interior Design', 'Custom Furniture'],
    description: 'A contemporary office space designed for a tech company, featuring open workspaces, collaborative areas, and private meeting rooms. The design focuses on creating a flexible environment that promotes collaboration, creativity, and employee well-being.',
    featuredImage: {
      url: '/images/portfolio/office-1.jpg',
      alt: 'Modern office space with open workstations and collaborative areas'
    },
    gallery: [
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
      },
      {
        url: '/images/portfolio/office-4.jpg',
        alt: 'Private office with custom desk and storage solutions'
      },
      {
        url: '/images/portfolio/office-5.jpg',
        alt: 'Collaborative space with comfortable seating and presentation equipment'
      },
      {
        url: '/images/portfolio/office-6.jpg',
        alt: 'Reception area with branded design elements'
      }
    ],
    challenge: 'TechSolutions Inc. needed a modern office space that would accommodate their growing team while fostering collaboration and creativity. The challenge was to create a flexible workspace that balanced open areas with private spaces for focused work and meetings, all while reflecting the company\'s innovative brand identity.',
    solution: 'We designed a comprehensive fit-out solution that included open workstations, collaborative areas, private meeting rooms, and social spaces. The design incorporated flexible furniture systems, acoustic solutions, and technology integration to create a dynamic, adaptable environment. Custom furniture and branded design elements were used to reinforce the company\'s identity throughout the space.',
    results: 'The new office has significantly improved collaboration and communication among team members, leading to increased productivity and innovation. The flexible design has easily accommodated the company\'s growth, and the branded environment has strengthened their corporate identity. The client reports that the new office has been instrumental in attracting and retaining top talent in a competitive industry.',
    nextProject: {
      title: 'Luxury Apartment',
      slug: 'luxury-apartment',
      image: {
        url: '/images/portfolio/apartment-1.jpg',
        alt: 'Luxury apartment living room with custom furniture'
      }
    },
    prevProject: {
      title: 'Corporate Headquarters',
      slug: 'corporate-headquarters',
      image: {
        url: '/images/portfolio/corporate-1.jpg',
        alt: 'Finance company headquarters reception area'
      }
    },
    slug: 'modern-office-space'
  },
  {
    seo: {
      en: {
        title: 'Luxury Apartment - High-end Residential Fit-out | PLANY Portfolio',
        description: 'A high-end residential fit-out for a luxury apartment, featuring custom-designed furniture, premium materials, and smart home technology.',
        keywords: ['luxury apartment design', 'high-end fit-out', 'residential interior design', 'smart home integration']
      },
      pl: {
        title: 'Luksusowy apartament - Wysokiej klasy fit-out mieszkalny | Portfolio PLANY',
        description: 'Wysokiej klasy fit-out mieszkalny dla luksusowego apartamentu, z meblami na zamówienie, materiałami premium i technologią inteligentnego domu.',
        keywords: ['projektowanie luksusowych apartamentów', 'wysokiej klasy fit-out', 'projektowanie wnętrz mieszkalnych', 'integracja inteligentnego domu']
      },
      ua: {
        title: 'Розкішна квартира - Високоякісне житлове оздоблення | Портфоліо PLANY',
        description: 'Високоякісне житлове оздоблення розкішної квартири, з меблями на замовлення, преміальними матеріалами та технологією розумного будинку.',
        keywords: ['дизайн розкішних квартир', 'високоякісне оздоблення', 'дизайн житлових інтер\'єрів', 'інтеграція розумного будинку']
      },
      de: {
        title: 'Luxuswohnung - Hochwertiges Wohnraum-Fit-out | PLANY Portfolio',
        description: 'Ein hochwertiges Wohnraum-Fit-out für eine Luxuswohnung mit maßgefertigten Möbeln, Premiummaterialien und Smart-Home-Technologie.',
        keywords: ['Luxuswohnungsdesign', 'hochwertiges Fit-out', 'Wohnraumgestaltung', 'Smart-Home-Integration']
      }
    },
    title: 'Luxury Apartment',
    subtitle: 'High-end Residential Fit-out',
    category: 'residential',
    client: 'Private Client',
    location: 'Warsaw, Poland',
    date: 'January 2024',
    services: ['Residential Fit-out', 'Interior Design', 'Custom Furniture'],
    description: 'A high-end residential fit-out for a luxury apartment, featuring custom-designed furniture, premium materials, and smart home technology. The design focuses on creating a sophisticated, comfortable living environment that reflects the client\'s personal style and enhances their quality of life.',
    featuredImage: {
      url: '/images/portfolio/apartment-1.jpg',
      alt: 'Luxury apartment living room with custom furniture'
    },
    gallery: [
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
      },
      {
        url: '/images/portfolio/apartment-4.jpg',
        alt: 'Bathroom with marble finishes and custom vanity'
      },
      {
        url: '/images/portfolio/apartment-5.jpg',
        alt: 'Home office with built-in storage and custom desk'
      },
      {
        url: '/images/portfolio/apartment-6.jpg',
        alt: 'Dining area with custom lighting and furniture'
      }
    ],
    challenge: 'Our client wanted to transform a standard apartment into a luxurious living space that reflected their sophisticated taste and accommodated their lifestyle. The challenge was to maximize the functionality of the space while creating a high-end aesthetic that incorporated custom design elements and smart home technology.',
    solution: 'We developed a comprehensive design that reimagined the apartment\'s layout to optimize space utilization and flow. Custom furniture pieces were designed to fit the specific dimensions and aesthetic requirements, and premium materials were selected for all finishes. Smart home technology was integrated throughout the apartment for convenience, comfort, and energy efficiency.',
    results: 'The transformed apartment now provides a luxurious, comfortable living environment that perfectly aligns with the client\'s lifestyle and aesthetic preferences. The custom furniture and built-ins maximize space utilization while creating a cohesive design language throughout the home. The integrated smart technology enhances convenience and efficiency, allowing the client to control lighting, climate, entertainment, and security systems with ease.',
    nextProject: {
      title: 'Fashion Boutique',
      slug: 'fashion-boutique',
      image: {
        url: '/images/portfolio/retail-1.jpg',
        alt: 'Fashion boutique interior with custom display units'
      }
    },
    prevProject: {
      title: 'Modern Office Space',
      slug: 'modern-office-space',
      image: {
        url: '/images/portfolio/office-1.jpg',
        alt: 'Modern office space with open workstations and collaborative areas'
      }
    },
    slug: 'luxury-apartment'
  }
];