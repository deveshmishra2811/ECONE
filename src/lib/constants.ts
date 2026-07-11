export const BRAND = {
  name: 'ECONE',
  tagline: 'One Earth. One Loop. One Future.',
  product: 'ECONE Panel',
  positioning: 'Circular Formwork Panels Built from Recycled Plastic',
  description: 'ECONE builds circular formwork panels from recycled plastic for smarter, lighter, and more sustainable construction workflows.',
} as const;

export const CONTACT = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '918928133816',
  email: process.env.NEXT_PUBLIC_EMAIL || 'deveshmishra2811@gmail.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '+918928133816',
  address: process.env.NEXT_PUBLIC_ADDRESS || 'Visvesvaraya National Institute of Technology (VNIT), Nagpur, Maharashtra',
} as const;

export const PRODUCT = {
  weight: '11–15 kg/m²',
  standardSize: '800 × 1062.5 mm',
  targetLifecycle: '100+ cycles',
  saleCost: '₹4,500/m²',
  rentalCost: '₹650/m²/month',
  plywoodCost: '₹700/m²',
  plywood100CycleCost: '₹7,000/m²',
  steelUpfrontCost: '₹9,000/m²',
} as const;

export const PAYMENT = {
  defaultAmount: Number(process.env.NEXT_PUBLIC_DEFAULT_PAYMENT_AMOUNT) || 500,
  currency: 'INR',
} as const;

export const COLORS = {
  navy: '#071A2F',
  navyHover: '#0B2545',
  offwhite: '#F7F3EA',
  amber: '#B87333',
  amberDark: '#7A4A20',
  ecoGreen: '#0F4D2E',
  slate: '#59636D',
  charcoal: '#1E293B',
  white: '#FFFFFF',
} as const;

export const WHATSAPP_MESSAGES = {
  general: 'Hi ECONE team, I am interested in ECONE Panel. Please help me with product details, pricing, and next steps.',
  pilot: 'Hi ECONE team, I would like to book a pilot project for ECONE Panel. Please guide me through the process.',
  quote: 'Hi ECONE team, I would like to request a quote for ECONE Panel for my project.',
  catalogue: 'Hi ECONE team, I would like to request the ECONE product catalogue.',
  partner: 'Hi ECONE team, I am interested in becoming an ECONE partner. Please share the details.',
  calculator: 'Hi ECONE team, I calculated my project savings on the website. Please help me with a quote.',
} as const;

export const NAV_ITEMS = [
  {
    label: 'About Us',
    href: '/about-us',
    children: [
      { label: 'ECONE vs Plywood & Steel', href: '/about-us#comparison' },
      { label: 'Cost Savings', href: '/about-us#cost-savings' },
      { label: 'Sustainability & Durability', href: '/about-us#sustainability' },
      { label: 'Validation Roadmap', href: '/about-us#validation-roadmap' },
      { label: 'Process of Making', href: '/about-us#process-of-making' },
    ],
  },
  {
    label: 'Product',
    href: '/product',
    children: [
      { label: 'Recycled Panel', href: '/product#overview', children: [
        { label: 'Product Overview', href: '/product#overview' },
        { label: 'Panel Anatomy', href: '/product#anatomy' },
        { label: 'Material Concept', href: '/product#material' },
        { label: 'Key Use Cases', href: '/product#use-cases' },
        { label: 'Product Gallery', href: '/product#gallery' },
      ]},
      { label: 'Sizes & Dimensions', href: '/product#sizes', children: [
        { label: 'Standard Panel Sizes', href: '/product#sizes' },
        { label: 'Thickness Options', href: '/product#sizes' },
        { label: 'Weight per Panel', href: '/product#sizes' },
        { label: 'Coverage Area', href: '/product#sizes' },
        { label: 'Size Comparison Chart', href: '/product#sizes' },
        { label: 'Custom Size Enquiry', href: '/contact?type=custom-size' },
      ]},
      { label: 'Features', href: '/product#features', children: [
        { label: 'Lightweight Handling', href: '/product#features' },
        { label: 'Reusable Design', href: '/product#features' },
        { label: 'Water Resistance', href: '/product#features' },
        { label: 'Smooth Finish Target', href: '/product#features' },
        { label: 'Stackable Storage', href: '/product#features' },
        { label: 'Easy Cleaning', href: '/product#features' },
        { label: 'Rental-Ready Design', href: '/product#features' },
      ]},
      { label: 'Technical Specs', href: '/product#technical-specs', children: [
        { label: 'Material Composition', href: '/product#technical-specs' },
        { label: 'Load & Strength Testing', href: '/product#technical-specs' },
        { label: 'Target Cycle Life', href: '/product#technical-specs' },
        { label: 'Surface Finish', href: '/product#technical-specs' },
        { label: 'Thermal / Water Behaviour', href: '/product#technical-specs' },
        { label: 'Validation Status', href: '/product#technical-specs' },
      ]},
      { label: 'Buy / Rent Options', href: '/product#buy-rent', children: [
        { label: 'Rent for Project', href: '/product#buy-rent' },
        { label: 'Book Pilot', href: '/book-pilot' },
        { label: 'Request Quote', href: '/contact?type=quote' },
        { label: 'Bulk Purchase Enquiry', href: '/contact?type=bulk' },
        { label: 'Talk to Sales on WhatsApp', href: '#whatsapp' },
      ]},
    ],
  },
  {
    label: 'Applications',
    href: '/applications',
  },
  {
    label: 'Calculators',
    href: '/calculators',
    children: [
      { label: 'Contractor TCO Calculator', href: '/calculators/contractor-tco' },
      { label: 'Carbon Impact Calculator', href: '/calculators/carbon-impact' },
      { label: 'Rental vs Purchase Advisor', href: '/calculators/rental-vs-purchase' },
      { label: 'Project Time Saving Estimator', href: '/calculators/time-saving' },
    ],
  },
  {
    label: '3D Studio',
    href: '/3d-studio',
    children: [
      { label: '3D Panel Explorer', href: '/3d-studio#panel-explorer' },
      { label: 'Material Cross-section', href: '/3d-studio#cross-section' },
      { label: 'Assembly Simulator', href: '/3d-studio#assembly' },
      { label: 'Formwork Planner Lite', href: '/3d-studio#planner' },
      { label: 'AR Preview', href: '/3d-studio#ar-preview' },
    ],
  },
  {
    label: 'Impact',
    href: '/impact',
    children: [
      { label: 'Plastic Diverted', href: '/impact#plastic-diverted' },
      { label: 'CO₂ Avoided', href: '/impact#co2-avoided' },
      { label: 'Material Passport', href: '/impact#material-passport' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Brochure', href: '/resources#catalogue' },
      { label: 'Testing Roadmap', href: '/work-in-progress' },
      { label: 'FAQs', href: '/work-in-progress' },
      { label: 'Tender Pack', href: '/work-in-progress' },
      { label: 'Knowledge Hub', href: '/work-in-progress' },
      { label: 'Case Studies / Pilot Updates', href: '/work-in-progress' },
    ],
  },
  {
    label: 'Partners',
    href: '/partners',
    children: [
      { label: 'Rental Shops', href: '/partners#rental-fleet-partners' },
      { label: 'Recyclers', href: '/partners#material-sourcing-partners' },
    ],
  },
] as const;
