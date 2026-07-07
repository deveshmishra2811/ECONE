'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

export default function ProductPage() {
  return (
    <div className="pt-20">
      {/* Product Hero */}
      <section className="bg-[#071A2F] py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-[#B87333] font-semibold tracking-wider uppercase text-sm mb-2 block">The Core Innovation</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily:'Outfit,sans-serif'}}>ECONE Panel</h1>
            <p className="text-lg text-white/70 mb-8">
              A recycled composite formwork panel designed to replace plywood. Lightweight, reusable for 100+ cycles, and engineered for the circular economy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-pilot" className="px-6 py-3 bg-[#B87333] text-white font-semibold rounded-xl hover:bg-[#7A4A20] transition-colors">
                Book Pilot
              </Link>
              <Link href="#buy-rent" className="px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                View Pricing
              </Link>
            </div>
          </motion.div>
          <motion.div {...fadeInUp} transition={{delay: 0.2}}>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video relative">
              <Image src="/images/11.jpeg" alt="ECONE Panel" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Anatomy & Material */}
      <section id="anatomy" className="section-padding bg-[#F7F3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071A2F] mb-4" style={{fontFamily:'Outfit,sans-serif'}}>Panel Anatomy & Material</h2>
            <p className="text-[#59636D] max-w-2xl mx-auto">Engineered using recycled plastic composites with a structural 3-layer design for strength and weight reduction.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="bg-[#071A2F] rounded-2xl p-8 relative">
                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <h3 className="text-white font-bold mb-2">1. Top Sheet</h3>
                    <p className="text-white/70 text-sm">Smooth outer surface designed for direct concrete contact, targeting a high-quality finish without extensive plastering.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <h3 className="text-white font-bold mb-2">2. Rib / Honeycomb Core</h3>
                    <p className="text-white/70 text-sm">Internal structural grid that provides essential stiffness and strength while significantly reducing overall panel weight.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <h3 className="text-white font-bold mb-2">3. Bottom Sheet</h3>
                    <p className="text-white/70 text-sm">Structural backing layer that completes the sandwich panel design and houses connection points.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{delay: 0.2}}>
              <h3 className="text-2xl font-bold text-[#071A2F] mb-4">Material Concept</h3>
              <p className="text-[#59636D] mb-6">
                ECONE panels are built from a proprietary recycled plastic composite. By giving new life to waste plastics, we create a durable construction material that prevents deforestation (by replacing plywood) and diverts waste from landfills.
              </p>
              <ul className="space-y-3">
                {['Primary input: Recycled plastic', 'Fully recyclable at end-of-life', 'Water and moisture resistant', 'No rust or corrosion'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-[#1E293B] font-medium">
                    <span className="w-6 h-6 bg-[#0F4D2E]/20 text-[#0F4D2E] rounded-full flex items-center justify-center text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/impact" className="text-[#B87333] font-semibold hover:underline">Learn more about our environmental impact →</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071A2F] mb-4" style={{fontFamily:'Outfit,sans-serif'}}>Product Gallery</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div {...fadeInUp} className="rounded-2xl overflow-hidden aspect-square relative shadow-lg">
              <Image src="/images/11.jpeg" alt="ECONE Panel View 1" fill className="object-cover" />
            </motion.div>
            <motion.div {...fadeInUp} transition={{delay:0.1}} className="rounded-2xl overflow-hidden aspect-square relative shadow-lg">
              <Image src="/images/12.jpeg" alt="ECONE Panel View 2" fill className="object-cover" />
            </motion.div>
            <motion.div {...fadeInUp} transition={{delay:0.2}} className="rounded-2xl overflow-hidden aspect-square relative shadow-lg">
              <Image src="/images/13.jpeg" alt="ECONE Panel View 3" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sizes & Dimensions */}
      <section id="sizes" className="section-padding bg-[#071A2F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{fontFamily:'Outfit,sans-serif'}}>Sizes & Dimensions</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Standardised for maximum efficiency on site.</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Standard Size', value: '800 × 1062.5 mm' },
              { label: 'Coverage Area', value: '0.85 m² per panel' },
              { label: 'Weight', value: '11–15 kg/m²' },
              { label: 'Thickness', value: 'TBD' }
            ].map((stat, i) => (
              <motion.div key={stat.label} {...fadeInUp} transition={{delay: i * 0.1}} className="bg-white/10 border border-white/20 rounded-2xl p-6">
                <p className="text-white/60 text-sm mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071A2F] mb-4" style={{fontFamily:'Outfit,sans-serif'}}>Key Features</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Lightweight Handling', desc: 'At 11-15 kg/m², panels can be manually handled without cranes.', icon: '🪶' },
              { title: 'Reusable Design', desc: 'Targeting 100+ cycles, dramatically reducing replacement frequency.', icon: '🔄' },
              { title: 'Water Resistance', desc: 'Does not absorb water like plywood. No swelling or delamination.', icon: '💧' },
              { title: 'Smooth Finish', desc: 'Engineered to provide a smooth concrete surface finish.', icon: '✨' },
              { title: 'Stackable Storage', desc: 'Designed to nest and stack efficiently for transport and storage.', icon: '📦' },
              { title: 'Rental-Ready', desc: 'Durable construction makes it ideal for rental fleet operations.', icon: '🤝' },
            ].map((feature, i) => (
              <motion.div key={feature.title} {...fadeInUp} transition={{delay: i * 0.1}} className="bg-[#F7F3EA] rounded-2xl p-6 border border-gray-100 hover:border-[#B87333]/30 transition-colors">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold text-[#071A2F] mb-2">{feature.title}</h3>
                <p className="text-[#59636D] text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs & Status */}
      <section id="technical-specs" className="section-padding bg-[#F7F3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071A2F] mb-4" style={{fontFamily:'Outfit,sans-serif'}}>Technical Specifications & Validation Status</h2>
          </motion.div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="divide-y divide-gray-100">
              {[
                { spec: 'Material Composition', value: 'Recycled Plastic Composite', status: 'Validated', color: 'bg-green-100 text-green-700' },
                { spec: 'Target Cycle Life', value: '100+ Uses', status: 'Target', color: 'bg-blue-100 text-blue-700' },
                { spec: 'Load & Strength', value: 'TBD', status: 'Under Testing', color: 'bg-amber-100 text-amber-700' },
                { spec: 'Thermal Behaviour', value: 'TBD', status: 'Pending', color: 'bg-gray-100 text-gray-700' },
                { spec: 'Water Absorption', value: 'Near Zero', status: 'Internal Estimate', color: 'bg-purple-100 text-purple-700' },
              ].map((row, i) => (
                <div key={row.spec} className="flex flex-col md:flex-row justify-between p-6 hover:bg-gray-50 transition-colors">
                  <div className="mb-2 md:mb-0">
                    <p className="font-semibold text-[#071A2F]">{row.spec}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[#59636D]">{row.value}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${row.color}`}>{row.status}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
              <Link href="/resources" className="text-sm font-semibold text-[#B87333] hover:underline">Download Technical Sheet (Coming Soon) →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Buy / Rent Options */}
      <section id="buy-rent" className="section-padding bg-[#071A2F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{fontFamily:'Outfit,sans-serif'}}>Pricing Models</h2>
            <p className="text-white/70">Flexible procurement models for projects of all sizes.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} className="bg-white rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#B87333] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <h3 className="text-2xl font-bold text-[#071A2F] mb-2">Rent</h3>
              <p className="text-[#59636D] text-sm mb-6">Ideal for short-term projects or specific applications.</p>
              <p className="text-4xl font-black text-[#B87333] mb-1">₹650</p>
              <p className="text-sm text-[#59636D] mb-8">per m² / month (Target)</p>
              <ul className="space-y-3 mb-8">
                {['No high upfront capital required', 'Pay only for what you use', 'Maintenance handled by ECONE/Partners', 'Flexible return policies'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#1E293B]">
                    <span className="text-[#0F4D2E]">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact?type=rent" className="block w-full text-center py-3 bg-[#071A2F] text-white rounded-xl font-semibold hover:bg-[#0B2545] transition-colors">
                Enquire for Rental
              </Link>
            </motion.div>
            
            <motion.div {...fadeInUp} transition={{delay: 0.2}} className="bg-white/10 border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Purchase</h3>
              <p className="text-white/70 text-sm mb-6">For large contractors with repetitive projects.</p>
              <p className="text-4xl font-black text-white mb-1">₹4,500</p>
              <p className="text-sm text-white/50 mb-8">per m² (Target Sale Price)</p>
              <ul className="space-y-3 mb-8">
                {['Own your inventory', 'Lowest cost over 100+ uses', 'Tax depreciation benefits', 'End-of-life buyback program'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/90">
                    <span className="text-[#B87333]">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact?type=buy" className="block w-full text-center py-3 bg-white text-[#071A2F] rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Request Sales Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
