import ogImageSrc from '@images/social.png';

export const SITE = {
  title: 'Value Creation Consulting',
  tagline: 'Managing by the numbers',
  description:
    'VCC offers project management consulting services, including working with owners and management to create KPIs for key drivers of profit, mentoring management teams, building strategic business plans, and reviewing and improving the business model.',
  description_short: 'VCC offers project management consulting services',
  url: 'https://screwfast.uk',
  author: 'Emil Gulamov',
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: 'en-US',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: 'en_US',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title}: : Project Management Consulting Services`,
  description:
    'VCC offers project management consulting services, including working with owners and management to create KPIs for key drivers of profit, mentoring management teams, building strategic business plans, and reviewing and improving the business model.',
  image: ogImageSrc,
};
