import React from 'react';
import { SERVICE_ICONS } from '../components/iconServices';


export interface Service {
  icon: React.ReactNode;
  title: string;
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
    icon: SERVICE_ICONS.webDesign,
    title: 'Web Design & UI/UX',
    href: '#services',
  },
  {
    icon: SERVICE_ICONS.software,
    title: 'Software Development',
    href: '#services',
  },
  {
    icon: SERVICE_ICONS.marketing,
    title: 'Digital Marketing',
    href: '#services',
  },
  {
    icon: SERVICE_ICONS.branding,
    title: 'Branding & Identity',
    href: '#services',
  },
  {
    icon: SERVICE_ICONS.cloud,
    title: 'Cloud Services',
    href: '#services',
  },
  {
    icon: SERVICE_ICONS.academy,
    title: 'Academy & Training',
    href: '#services',
  },
];