
import { Website } from './types';

export const WEBSITES: Website[] = [
  {
    id: '1',
    title: 'EcoStore - Green E-commerce Template',
    slug: 'ecostore-green-ecommerce',
    category: 'E-commerce',
    price: 499,
    shortDescription: 'A modern, sustainable-focused shopping experience for eco-friendly brands.',
    longDescription: 'EcoStore is designed with conversion in mind. It features a clean, minimalist aesthetic that highlights products while emphasizing sustainability. Built with high performance and accessibility as core priorities.',
    features: [
      'Fully Responsive Product Grid',
      'Integrated Shopping Cart System',
      'Customer Review & Rating System',
      'SEO Optimized Product Pages',
      'Wishlist Functionality'
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Stripe Integration'],
    images: [
      'https://picsum.photos/seed/eco1/1200/800',
      'https://picsum.photos/seed/eco2/1200/800',
      'https://picsum.photos/seed/eco3/1200/800',
      'https://picsum.photos/seed/eco4/1200/800',
      'https://picsum.photos/seed/eco5/1200/800'
    ],
    demoUrl: '#',
    isFeatured: true
  },
  {
    id: '2',
    title: 'SaaSFlow - Modern Startup Platform',
    slug: 'saasflow-startup-platform',
    category: 'SaaS',
    price: 750,
    shortDescription: 'Professional landing page and dashboard kit for modern SaaS applications.',
    longDescription: 'SaaSFlow provides everything a growing startup needs to showcase their software. From detailed feature breakdowns to complex pricing tables and interactive charts.',
    features: [
      'Interactive Dashboard Mockups',
      'Dynamic Pricing Tables',
      'User Authentication Flow Designs',
      'Dark Mode Support',
      'Smooth Scroll Animations'
    ],
    technologies: ['Next.js', 'TypeScript', 'Chart.js', 'Radix UI'],
    images: [
      'https://picsum.photos/seed/saas1/1200/800',
      'https://picsum.photos/seed/saas2/1200/800',
      'https://picsum.photos/seed/saas3/1200/800',
      'https://picsum.photos/seed/saas4/1200/800',
      'https://picsum.photos/seed/saas5/1200/800'
    ],
    demoUrl: '#',
    isFeatured: true
  },
  {
    id: '3',
    title: 'PortfolioX - Creative Agency Theme',
    slug: 'portfoliox-agency-theme',
    category: 'Agency',
    price: 350,
    shortDescription: 'Showcase your work with style using this ultra-sleek agency portfolio.',
    longDescription: 'PortfolioX is for creators who want to stand out. It uses bold typography and large imagery to create a lasting impression on potential clients.',
    features: [
      'Filterable Portfolio Gallery',
      'Team Member Showcase',
      'Bespoke Case Study Templates',
      'Integrated Blog Section',
      'Contact Form with Validation'
    ],
    technologies: ['HTML5', 'SASS', 'GSAP Animations', 'Vanilla JS'],
    images: [
      'https://picsum.photos/seed/port1/1200/800',
      'https://picsum.photos/seed/port2/1200/800',
      'https://picsum.photos/seed/port3/1200/800',
      'https://picsum.photos/seed/port4/1200/800',
      'https://picsum.photos/seed/port5/1200/800'
    ],
    demoUrl: '#',
    isFeatured: true
  },
  {
    id: '4',
    title: 'HealthPath - Medical & Wellness',
    slug: 'healthpath-wellness',
    category: 'Health',
    price: 450,
    shortDescription: 'A trustworthy and clean interface for clinics and health specialists.',
    longDescription: 'HealthPath focuses on clarity and trust. It includes specialized sections for appointment booking, medical service descriptions, and doctor profiles.',
    features: [
      'Appointment Booking UI',
      'Health Service Catalog',
      'Doctor Profile Cards',
      'Testimonial Slider',
      'Location Map Integration'
    ],
    technologies: ['React', 'CSS Modules', 'Google Maps API', 'Formik'],
    images: [
      'https://picsum.photos/seed/health1/1200/800',
      'https://picsum.photos/seed/health2/1200/800',
      'https://picsum.photos/seed/health3/1200/800',
      'https://picsum.photos/seed/health4/1200/800',
      'https://picsum.photos/seed/health5/1200/800'
    ],
    demoUrl: '#',
    isFeatured: false
  }
];
