import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
}

export const NAV_ITEMS = [
  { label: 'About Us', href: '#about' },
  {
    label: 'Services', 
    href: '#services',
    children: ['Web Design', 'Digital Marketing', 'Software Development', 'Branding', 'Cloud Services', 'Academy'],
  },
  { label: 'Events', href: '#events', children: ['Webinars', 'Workshops', 'Live Sessions'] },
  { label: 'Partners', href: '#partners' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const PORTFOLIO_ITEMS = [
  {
    cat: 'Web Development UI/UX',
    title: 'Mach Cargo Logistics Platform',
    desc: 'End-to-end redesign and rebuild of a global freight-forwarding portal with real-time tracking and client dashboards.',
    year: '2024',
  },
  {
    cat: 'Web Development Branding',
    title: 'Oceanía Boutique Hotel',
    desc: 'Luxury hotel website with booking integration, multilingual support, and a photography-first content strategy.',
    year: '2024',
  },
  {
    cat: 'Web Development SEO',
    title: 'Heiberg Castellanos Law',
    desc: 'Corporate identity refresh and lead-generation website for a binational law firm serving Venezuelan and US markets.',
    year: '2023',
  },
];

export const BLOG_POSTS = [
  {
    cat: 'Press Release',
    date: 'Jun 2, 2026',
    title: 'AI Governance Alliance: Partnering for Responsible Enterprise Intelligence',
    excerpt: 'We announce a strategic alliance focused on establishing AI governance frameworks for mid-market organizations.',
  },
  {
    cat: 'Article',
    date: 'Jan 4, 2026',
    title: '2026 Digital Trends: CRM, Programmatic Ads, AI Agents, and BI',
    excerpt: 'A deep-dive into the technologies reshaping how businesses acquire, retain, and serve customers this year.',
  },
  {
    cat: 'Article',
    date: 'Oct 14, 2025',
    title: 'NOVA: Intelligent Agricultural Advisory Powered by Generative AI',
    excerpt: 'How we built an AI advisor for small-scale farmers that delivers crop management insights via WhatsApp.',
  },
];

export const CLIENT_LOGOS = [
  'Clientify', 'Mach Cargo', 'Oceanía Hotel', 'Heiberg Castellanos',
  'Sybven', 'CloudOps Co.', 'FinTech MX', 'AgriTech LTD',
  'MedStar Corp', 'EduPlus', 'LogiTrack', 'BrandLab'
];

export const SERVICES: Service[] = [
  {
    icon: null, // O el nodo de React / ícono que uses
    title: 'Web Design & UI/UX',
    desc: 'Custom digital experiences designed to convert visitors into loyal brand advocates.',
    href: '#services',
  },
  {
    icon: null,
    title: 'Software Development',
    desc: 'Scalable web applications and backend systems engineered for high performance.',
    href: '#services',
  },
  {
    icon: null,
    title: 'Digital Marketing',
    desc: 'Data-driven campaigns that maximize customer acquisition and lifetime value.',
    href: '#services',
  },
  {
    icon: null,
    title: 'Branding & Identity',
    desc: 'Distinctive visual identities that position your brand apart in competitive markets.',
    href: '#services',
  },
  {
    icon: null,
    title: 'Cloud Services',
    desc: 'Robust infrastructure and cloud migration strategies ensuring 99.9% uptime.',
    href: '#services',
  },
  {
    icon: null,
    title: 'Academy & Training',
    desc: 'Corporate upskilling programs in modern web technologies and digital workflows.',
    href: '#services',
  },
];