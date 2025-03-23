// An array of links for navigation bar
const navBarLinks = [
  { name: 'Home', url: '/' },
  { name: 'Expertise', url: '/expertise' },
  { name: 'Clients', url: '/clients' },
  { name: 'Testimonials', url: '/testimonials' },
  { name: 'Contact VCC', url: '/contact' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Company',
    links: [
      { name: 'Expertise', url: '/expertise' },
      { name: 'Clients', url: '/clients' },
      { name: 'Contact VCC', url: '/contact' },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: 'https://www.facebook.com/',
  x: 'https://twitter.com/',
  github: 'https://github.com/mearashadowfax/ScrewFast',
  google: 'https://www.google.com/',
  slack: 'https://slack.com/',
  linkedin: 'https://www.linkedin.com/in/valuecreationconsulting/',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
