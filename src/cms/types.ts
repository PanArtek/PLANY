// Common interfaces
export interface SEO {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
}

export interface LocalizedContent<T> {
  en: T;
  pl: T;
  ua: T;
  de: T;
}

export interface Image {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

// Page interfaces
export interface HomePage {
  seo: LocalizedContent<SEO>;
  hero: LocalizedContent<HeroSection>;
  about: LocalizedContent<AboutSection>;
  services: LocalizedContent<ServicesSection>;
  portfolio: LocalizedContent<PortfolioSection>;
  process: LocalizedContent<ProcessSection>;
  testimonials: LocalizedContent<TestimonialsSection>;
  contact: LocalizedContent<ContactSection>;
}

// Section interfaces
export interface HeroSection {
  title: string;
  subtitle: string;
  ctaText: string;
  secondaryCtaText: string;
  backgroundImage?: Image;
}

export interface AboutSection {
  title: string;
  subtitle: string;
  description: string;
  image?: Image;
  stats: {
    experience: string;
    projects: string;
    clients: string;
    awards: string;
  };
}

export interface ServicesSection {
  title: string;
  subtitle: string;
  services: Service[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface PortfolioSection {
  title: string;
  subtitle: string;
  categories: string[];
  viewProjectText: string;
}

export interface PortfolioItem {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  slug: string;
  featuredImage: Image;
  images: Image[];
  client?: string;
  location?: string;
  date?: string;
  services?: string[];
}

export interface ProcessSection {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export interface ProcessStep {
  title: string;
  description: string;
  stepNumber: number;
}

export interface TestimonialsSection {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export interface Testimonial {
  name: string;
  position: string;
  company?: string;
  content: string;
  rating: number;
  image?: Image;
}

export interface ContactSection {
  title: string;
  subtitle: string;
  form: {
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    messageLabel: string;
    submitText: string;
    successMessage: string;
    errorMessage: string;
  };
  addressTitle: string;
  address: string[];
  phoneTitle: string;
  phone: string;
  emailTitle: string;
  email: string;
  workingHoursTitle: string;
  workingHours: {
    days: string;
    hours: string;
  }[];
}

// Service page details
export interface ServicePage {
  seo: LocalizedContent<SEO>;
  title: string;
  subtitle: string;
  description: string;
  featuredImage: Image;
  content: ServiceContent[];
  relatedServices: Service[];
}

export interface ServiceContent {
  type: 'text' | 'image' | 'gallery' | 'feature' | 'cta';
  content: string | Image | Image[] | Feature | CTA;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface CTA {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
}

// Portfolio project details
export interface ProjectPage {
  seo: LocalizedContent<SEO>;
  title: string;
  subtitle?: string;
  category: string;
  client: string;
  location: string;
  date: string;
  services: string[];
  description: string;
  featuredImage: Image;
  gallery: Image[];
  challenge: string;
  solution: string;
  results: string;
  nextProject?: {
    title: string;
    slug: string;
    image: Image;
  };
  prevProject?: {
    title: string;
    slug: string;
    image: Image;
  };
}

// Company info
export interface CompanyInfo {
  name: string;
  logo: Image;
  address: string[];
  phone: string;
  email: string;
  socialMedia: {
    platform: 'facebook' | 'instagram' | 'linkedin' | 'twitter' | 'youtube';
    url: string;
  }[];
  workingHours: {
    days: string;
    hours: string;
  }[];
}