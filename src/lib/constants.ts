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
      { label: 'Sizes & Dimensions', href: '/product/sizes', children: [
        { label: 'Standard Panel Sizes', href: '/product/sizes#standard' },
        { label: 'Thickness Options', href: '/product/sizes#thickness' },
        { label: 'Weight per Panel', href: '/product/sizes#weight' },
        { label: 'Coverage Area', href: '/product/sizes#coverage' },
        { label: 'Size Comparison Chart', href: '/product/sizes#comparison' },
        { label: 'Custom Size Enquiry', href: '/contact?type=custom-size' },
      ]},
      { label: 'Features', href: '/product/features', children: [
        { label: 'Lightweight Handling', href: '/product/features#lightweight' },
        { label: 'Reusable Design', href: '/product/features#reusable' },
        { label: 'Water Resistance', href: '/product/features#water-resistance' },
        { label: 'Smooth Finish Target', href: '/product/features#smooth-finish' },
        { label: 'Stackable Storage', href: '/product/features#stackable' },
        { label: 'Easy Cleaning', href: '/product/features#easy-cleaning' },
        { label: 'Rental-Ready Design', href: '/product/features#rental-ready' },
      ]},
      { label: 'Technical Specs', href: '/product/technical-specs', children: [
        { label: 'Material Composition', href: '/product/technical-specs#material' },
        { label: 'Load & Strength Testing', href: '/product/technical-specs#load-testing' },
        { label: 'Target Cycle Life', href: '/product/technical-specs#cycle-life' },
        { label: 'Surface Finish', href: '/product/technical-specs#surface' },
        { label: 'Thermal / Water Behaviour', href: '/product/technical-specs#thermal' },
        { label: 'Validation Status', href: '/product/technical-specs#validation' },
        { label: 'Download Technical Sheet', href: '/resources#technical-sheet' },
      ]},
      { label: 'Accessories', href: '/product/accessories', children: [
        { label: 'Pins & Wedges', href: '/product/accessories#pins-wedges' },
        { label: 'Locking System', href: '/product/accessories#locking' },
        { label: 'Tie Rods / Connectors', href: '/product/accessories#tie-rods' },
        { label: 'Corner Accessories', href: '/product/accessories#corner' },
        { label: 'Lifting / Handling Tools', href: '/product/accessories#lifting' },
        { label: 'Cleaning Tools', href: '/product/accessories#cleaning' },
        { label: 'Replacement Parts', href: '/product/accessories#replacement' },
      ]},
      { label: 'Handling Guide', href: '/product/handling-guide', children: [
        { label: 'Installation Steps', href: '/product/handling-guide#installation' },
        { label: 'Cleaning Process', href: '/product/handling-guide#cleaning' },
        { label: 'Storage Guidelines', href: '/product/handling-guide#storage' },
        { label: 'Transport Guidelines', href: '/product/handling-guide#transport' },
        { label: "Do's & Don'ts", href: '/product/handling-guide#dos-donts' },
        { label: 'Site Safety Notes', href: '/product/handling-guide#safety' },
        { label: 'Download Handling Manual', href: '/resources#handling-manual' },
      ]},
      { label: 'Buy / Rent Options', href: '/product/buy-rent', children: [
        { label: 'Rent for Project', href: '/product/buy-rent#rent' },
        { label: 'Book Pilot', href: '/book-pilot' },
        { label: 'Request Quote', href: '/contact?type=quote' },
        { label: 'Bulk Purchase Enquiry', href: '/contact?type=bulk' },
        { label: 'Rental Partner Model', href: '/partners/rental-shops' },
        { label: 'Talk to Sales on WhatsApp', href: '#whatsapp' },
      ]},
    ],
  },
  {
    label: 'Applications',
    href: '/applications',
    children: [
      { label: 'Wall Formwork', href: '/applications/wall-formwork', children: [
        { label: 'Residential Walls', href: '/applications/wall-formwork#residential' },
        { label: 'Commercial Walls', href: '/applications/wall-formwork#commercial' },
        { label: 'Boundary Walls', href: '/applications/wall-formwork#boundary' },
        { label: 'Retaining Walls', href: '/applications/wall-formwork#retaining' },
        { label: 'Repetitive Wall Projects', href: '/applications/wall-formwork#repetitive' },
        { label: 'Wall Area Estimator', href: '/calculators' },
      ]},
      { label: 'Slab Formwork', href: '/applications/slab-formwork', children: [
        { label: 'Residential Slabs', href: '/applications/slab-formwork#residential' },
        { label: 'Commercial Slabs', href: '/applications/slab-formwork#commercial' },
        { label: 'Institutional Slabs', href: '/applications/slab-formwork#institutional' },
        { label: 'Repetitive Slab Projects', href: '/applications/slab-formwork#repetitive' },
        { label: 'Slab Panel Requirement', href: '/applications/slab-formwork#requirement' },
        { label: 'Slab Area Estimator', href: '/calculators' },
      ]},
      { label: 'Column Formwork', href: '/applications/column-formwork', children: [
        { label: 'Square Columns', href: '/applications/column-formwork#square' },
        { label: 'Rectangular Columns', href: '/applications/column-formwork#rectangular' },
        { label: 'Small Column Projects', href: '/applications/column-formwork#small' },
        { label: 'Repetitive Column Casting', href: '/applications/column-formwork#repetitive' },
        { label: 'Column Requirement Enquiry', href: '/contact?type=column' },
      ]},
      { label: 'Drain Formwork', href: '/applications/drain-formwork', children: [
        { label: 'Roadside Drains', href: '/applications/drain-formwork#roadside' },
        { label: 'Campus Drains', href: '/applications/drain-formwork#campus' },
        { label: 'Municipal Drains', href: '/applications/drain-formwork#municipal' },
        { label: 'Industrial Drains', href: '/applications/drain-formwork#industrial' },
        { label: 'Drain Project Quote', href: '/contact?type=drain' },
      ]},
      { label: 'Box Culvert Formwork', href: '/applications/box-culvert', children: [
        { label: 'Small Culverts', href: '/applications/box-culvert#small' },
        { label: 'Public Works Culverts', href: '/applications/box-culvert#public-works' },
        { label: 'Infrastructure Culverts', href: '/applications/box-culvert#infrastructure' },
        { label: 'Repetitive Culvert Projects', href: '/applications/box-culvert#repetitive' },
        { label: 'Technical Discussion Request', href: '/contact?type=culvert' },
      ]},
      { label: 'Campus / Public Works', href: '/applications/campus-public-works', children: [
        { label: 'Institutional Projects', href: '/applications/campus-public-works#institutional' },
        { label: 'Municipal Projects', href: '/applications/campus-public-works#municipal' },
        { label: 'Smart City Projects', href: '/applications/campus-public-works#smart-city' },
        { label: 'Government Construction', href: '/applications/campus-public-works#government' },
        { label: 'Campus Pilot Projects', href: '/applications/campus-public-works#pilot' },
        { label: 'Request Public Works Presentation', href: '/contact?type=public-works' },
      ]},
      { label: 'Custom Project Use Case', href: '/applications/custom-project', children: [
        { label: 'Submit Project Details', href: '/applications/custom-project#submit' },
        { label: 'Upload Drawing / Requirement', href: '/applications/custom-project#upload' },
        { label: 'Request Feasibility Review', href: '/applications/custom-project#feasibility' },
        { label: 'Get Panel Suggestion', href: '/applications/custom-project#suggestion' },
        { label: 'Request Custom Quote', href: '/contact?type=custom' },
      ]},
    ],
  },
  {
    label: 'Why ECONE',
    href: '/why-econe',
    children: [
      { label: 'ECONE vs Plywood', href: '/why-econe#econe-vs-plywood' },
      { label: 'ECONE vs Steel', href: '/why-econe#econe-vs-steel' },
      { label: 'Cost Savings', href: '/why-econe#cost-savings' },
      { label: 'Reuse & Durability', href: '/why-econe#reuse-durability' },
      { label: 'Sustainability', href: '/why-econe#sustainability' },
      { label: 'Validation Roadmap', href: '/why-econe#validation-roadmap' },
    ],
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
      { label: 'LCA Roadmap', href: '/impact#lca-roadmap' },
      { label: 'ESG Pack', href: '/impact#esg-pack' },
      { label: 'Material Passport', href: '/impact#material-passport' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Catalogue', href: '/resources#catalogue' },
      { label: 'Technical Sheet', href: '/resources#technical-sheet' },
      { label: 'Testing Roadmap', href: '/resources#testing-roadmap' },
      { label: 'FAQs', href: '/resources#faqs' },
      { label: 'Tender Pack', href: '/resources#tender-pack' },
      { label: 'Blog / Knowledge Hub', href: '/resources#blog' },
      { label: 'Case Studies / Pilot Updates', href: '/resources#case-studies' },
    ],
  },
  {
    label: 'Partners',
    href: '/partners',
    children: [
      { label: 'Contractors', href: '/partners#contractors' },
      { label: 'Rental Shops', href: '/partners#rental-shops' },
      { label: 'Distributors', href: '/partners#distributors' },
      { label: 'Government Bodies', href: '/partners#government' },
      { label: 'EPR Brands', href: '/partners#epr-brands' },
      { label: 'Recyclers', href: '/partners#recyclers' },
      { label: 'Developers', href: '/partners#developers' },
      { label: 'Campuses', href: '/partners#campuses' },
    ],
  },
] as const;
