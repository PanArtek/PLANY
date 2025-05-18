import type { CompanyInfo } from '../types';

export const mockCompanyInfo: CompanyInfo = {
  name: 'PLANY',
  logo: {
    url: '/images/logo.svg',
    alt: 'PLANY Logo'
  },
  address: [
    '123 Business Street',
    'Warsaw, 00-000',
    'Poland'
  ],
  phone: '+48 123 456 789',
  email: 'info@plany.com',
  socialMedia: [
    {
      platform: 'facebook',
      url: 'https://facebook.com/plany'
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/plany'
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/company/plany'
    }
  ],
  workingHours: [
    {
      days: 'Monday - Friday',
      hours: '9:00 - 18:00'
    },
    {
      days: 'Saturday',
      hours: '10:00 - 15:00'
    },
    {
      days: 'Sunday',
      hours: 'Closed'
    }
  ]
};