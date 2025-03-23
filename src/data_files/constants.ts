import ogImageSrc from '@images/social.png';

export const SITE = {
  title: 'Value Creation Consulting',
  tagline: 'Managing by the numbers',
  description:
    'Helping small business owners transform their business from a job into a wealth-building asset.  VCC offers Executive coaching, excel financial modeling for small business, P&L forecast models, due diligence assistance. Assistance with market messaging, program management and systems engineering.  VCC is lead by former small business owner, and corporate background from electronics engineer to business unit manager to Executive VP and President.',
  description_short:
    'Helping small business owners transform their business from a job into a wealth-building asset.',
  url: 'https://vcc-4u.com',
  author: 'Paul Hightower',
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
  title: `${SITE.title}: Transforming Your Business into a Profitable Asset`,
  description:
    'Helping small business owners transform their business from a job into a wealth-building asset.  VCC offers Executive coaching, excel financial modeling for small business, P&L forecast models, due diligence assistance. Assistance with market messaging, program management and systems engineering.  VCC is lead by former small business owner, and corporate background from electronics engineer to business unit manager to Executive VP and President.',
  image: ogImageSrc,
};
