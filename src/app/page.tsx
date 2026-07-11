'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

export default function HomePage() {
  const [projectArea, setProjectArea] = useState<number>(1000);
  const [currentMaterial, setCurrentMaterial] = useState<string>('plywood');

  const plywoodCostPer100 = 7000;
  const eConeCost = 4500;
  const savingsPerM2 = plywoodCostPer100 - eConeCost;
  const totalSavings = savingsPerM2 * projectArea;
  const co2PerM2 = 2.5;
  const totalCO2 = co2PerM2 * projectArea;

  return (
    <div className="pt-20">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-40 overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Light Overlay for Contrast */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-0" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal text-foreground leading-[0.95] tracking-[-2.46px] animate-fade-rise" style={{fontFamily: 'var(--font-display)'}}>
            Circular formwork panels built from <em className="not-italic text-muted-foreground">recycled plastic.</em>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
            We're designing tools for sustainable construction, bold builders, and forward thinkers. Amid the chaos of the site, we build circular solutions for sharp workflows and zero waste.
          </p>
          <Link href="/book-pilot" className="liquid-glass rounded-full px-14 py-5 text-base font-medium text-foreground mt-12 animate-fade-rise-delay-2 cursor-pointer shadow-sm">
            Book Pilot
          </Link>
        </div>
      </section>

      {/* SECTION 2: PERSONA SELECTOR */}
      <section className="section-padding bg-[#F7F3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#071A2F] mb-4" style={{fontFamily:'Outfit,sans-serif'}}>Who Are You?</h2>
            <p className="text-[#59636D] max-w-2xl mx-auto">ECONE serves diverse stakeholders across the construction value chain. Select your role to see how we can help.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: '🛠️', label: 'Contractor / Builder', href: '/partners#contractors' },
              { icon: '🏢', label: 'Government / Public Works', href: '/partners#government' },
              { icon: '🚚', label: 'Rental Partner', href: '/partners#rental-shops' },
              { icon: '🌱', label: 'ESG / EPR Partner', href: '/partners#epr-brands' },
              { icon: '💼', label: 'Investor / Incubator', href: '/contact?type=investor' },
              { icon: '🎓', label: 'Student / Researcher', href: '/partners#campuses' },
            ].map((persona, i) => (
              <motion.div key={persona.label} {...fadeInUp} transition={{...fadeInUp.transition, delay: i * 0.1}}>
                <Link href={persona.href} className="block p-6 bg-white rounded-2xl text-center card-hover border border-gray-100 hover:border-[#B87333]/30 h-full">
                  <span className="text-3xl mb-3 block">{persona.icon}</span>
                  <p className="text-sm font-semibold text-[#1E293B]">{persona.label}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PROBLEM MATRIX (Restored to keep homepage flow intact since Ramesh moved to About Us, wait, no, the user originally told me to put the story on the homepage, then told me to move it to About Us replacing "Why choose ECONE", and didn't mention restoring the Problem Matrix. Let me just remove SECTION 3 completely or I'll restore a placeholder so it doesn't jump directly from Persona to Loop. No, let's just restore Problem Matrix. Actually, I can just leave it out. The flow is: Hero -> Who Are You -> Loop. That's fine.) */}


      {/* SECTION 4: ECONE SOLUTION LOOP */}
      <section className="section-padding bg-[#F7F3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#071A2F] mb-4" style={{fontFamily:'Outfit,sans-serif'}}>The ECONE Circular Loop</h2>
            <p className="text-[#59636D] max-w-2xl mx-auto">From waste plastic to construction site and back - ECONE creates a truly circular formwork system.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: '01', title: 'Plastic Waste Collection', desc: 'Sourced from recyclers and waste streams', icon: '♻️' },
              { step: '02', title: 'Material Processing', desc: 'Cleaned, sorted, and prepared', icon: '🔧' },
              { step: '03', title: 'Panel Manufacturing', desc: 'Composite panel production', icon: '🏭' },
              { step: '04', title: 'Site Deployment', desc: 'Delivered and used on construction sites', icon: '🟧' },
              { step: '05', title: 'Recovery After Use', desc: 'Panels collected after project', icon: '🚚' },
              { step: '06', title: 'Reuse / Recycle Again', desc: 'Cleaned, repaired, or recycled', icon: '🔄' },
            ].map((step, i) => (
              <motion.div key={step.step} {...fadeInUp} transition={{...fadeInUp.transition, delay: i * 0.1}} className="relative">
                <div className="bg-white rounded-2xl p-5 text-center card-hover border border-gray-100 h-full">
                  <div className="w-10 h-10 bg-[#071A2F] text-white rounded-full flex items-center justify-center text-xs font-bold mx-auto mb-3">{step.step}</div>
                  <span className="text-2xl block mb-2">{step.icon}</span>
                  <h3 className="font-semibold text-[#071A2F] text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-[#59636D]">{step.desc}</p>
                </div>
                {i < 5 && (
                  <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-4 h-4 items-center justify-center z-10">
                    <svg className="w-full h-full text-[#B87333]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M0 8h16M11 4l4 4-4 4" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PRODUCT PREVIEW */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#071A2F] mb-4" style={{fontFamily:'Outfit,sans-serif'}}>The ECONE Panel</h2>
            <p className="text-[#59636D] max-w-2xl mx-auto">A recycled composite formwork panel designed for reuse, rental, and circularity.</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeInUp}>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-square relative">
                <Image src="/images/11.jpeg" alt="ECONE Panel Detail" fill className="object-cover" />
              </div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{...fadeInUp.transition, delay: 0.2}}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F7F3EA] rounded-xl p-4 border border-gray-100">
                    <p className="text-xs text-[#59636D] mb-1">Standard Size</p>
                    <p className="text-lg font-bold text-[#071A2F]">800 × 1062.5 mm</p>
                  </div>
                  <div className="bg-[#F7F3EA] rounded-xl p-4 border border-gray-100">
                    <p className="text-xs text-[#59636D] mb-1">Panel Weight</p>
                    <p className="text-lg font-bold text-[#071A2F]">11–15 kg/m²</p>
                  </div>
                  <div className="bg-[#F7F3EA] rounded-xl p-4 border border-gray-100">
                    <p className="text-xs text-[#59636D] mb-1">Target Lifecycle</p>
                    <p className="text-lg font-bold text-[#071A2F]">100+ Cycles</p>
                    <p className="text-[10px] text-[#B87333]">Target - Under Validation</p>
                  </div>
                  <div className="bg-[#F7F3EA] rounded-xl p-4 border border-gray-100">
                    <p className="text-xs text-[#59636D] mb-1">Target Price</p>
                    <p className="text-lg font-bold text-[#071A2F]">₹4,500/m²</p>
                    <p className="text-[10px] text-[#B87333]">Sale • ₹650/m²/mo Rental</p>
                  </div>
                </div>
                <div className="bg-[#071A2F] rounded-xl p-5 shadow-lg">
                  <h3 className="text-white font-semibold mb-3">Key Features</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {['Lightweight Handling', 'Reusable Design', 'Water Resistance', 'Smooth Finish Target', 'Stackable Storage', 'Rental-Ready'].map(f => (
                      <div key={f} className="flex items-center gap-2 text-white/80 text-sm">
                        <span className="text-[#B87333]">✓</span> {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/product" className="inline-flex items-center px-6 py-3 bg-[#B87333] text-white font-semibold rounded-xl hover:bg-[#7A4A20] transition-colors shadow-md">
                  Explore Product →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* SECTION 7: AI PROJECT SAVINGS PREVIEW */}
      <section className="section-padding bg-[#071A2F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{fontFamily:'Outfit,sans-serif'}}>Estimate Your Project Savings</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Quick preview of potential savings when switching from plywood to ECONE Panel.</p>
          </motion.div>
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Project Area (m²)</label>
                  <input
                    type="number"
                    value={projectArea}
                    onChange={(e) => setProjectArea(Number(e.target.value) || 0)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#B87333] transition-colors"
                    placeholder="Enter project area"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Current Material</label>
                  <select
                    value={currentMaterial}
                    onChange={(e) => setCurrentMaterial(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#B87333] appearance-none transition-colors"
                  >
                    <option value="plywood" className="bg-[#071A2F]">Plywood</option>
                    <option value="steel" className="bg-[#071A2F]">Steel</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/5">
                  <p className="text-2xl font-bold text-[#B87333]">₹{(totalSavings / 1000).toFixed(0)}K</p>
                  <p className="text-xs text-white/60">Estimated Savings</p>
                  <p className="text-[10px] text-[#B87333] mt-1">Internal estimate</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/5">
                  <p className="text-2xl font-bold text-green-400">{(totalCO2 / 1000).toFixed(1)}T</p>
                  <p className="text-xs text-white/60">CO₂e Avoided</p>
                  <p className="text-[10px] text-green-400 mt-1">Under validation</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/5">
                  <p className="text-2xl font-bold text-white">{projectArea}</p>
                  <p className="text-xs text-white/60">m² Coverage</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/5">
                  <p className="text-2xl font-bold text-white">{Math.ceil(projectArea / 0.85)}</p>
                  <p className="text-xs text-white/60">Panels Needed</p>
                  <p className="text-[10px] text-white/40 mt-1">Approximate</p>
                </div>
              </div>
              <div className="text-center">
                <Link href="/calculate-savings" className="inline-flex items-center px-8 py-3 bg-[#B87333] text-white font-semibold rounded-xl hover:bg-[#7A4A20] transition-colors shadow-lg">
                  Calculate Full Savings →
                </Link>
              </div>
            </div>
            <p className="text-center text-white/40 text-xs mt-4">These results are estimates based on available assumptions. Final pricing and values may vary after validation.</p>
          </motion.div>
        </div>
      </section>



      {/* SECTION 10: IMPACT PREVIEW */}
      <section className="section-padding bg-[#0F4D2E] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEgMjB2LTMuMWMtMi41LS4zLTQuNy0xLjYtNi4xLTMuNWwyLjQtMS41YzEgMS40IDIuNiAyLjQgNC4zIDIuNnYuM2gydi0uM2MxLjctLjIgMy4zLTEuMiA0LjMtMi42bDIuNCAxLjVjLTEuNCAxLjktMy42IDMuMi02LjEgMy41VjIwaC0yeiBNMTIgNGMuOSAwIDEuOC4yIDIuNi41bDItMmMyLS45IDQtMS40IDYuMS0xLjVWNGgtMnYtLjNjLTEtLjItMi0xLjItMy0yLjZMMTMgLjRDMTEuNiAxLjggOS4zIDMuMSA2LjggMy40VjRoLTJ2LS4zQzMuOCAzLjUgMS42IDIuMi4yLjRMMi42IDEuOUMzLjYgMy4zIDUuMiA0LjMgNi45IDQuNXYuM2gydi0uM2MxLjctLjIgMy4zLTEuMiA0LjMtMi42bDIuNCAxLjVjLS44LjQtMS43LjYtMi42LjZ2MnoiLz48L3N2Zz4=')] bg-repeat opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{fontFamily:'Outfit,sans-serif'}}>Environmental Impact</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Every ECONE Panel contributes to waste reduction, carbon avoidance, and circular material flows.</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: 'Plastic Diverted', value: 'Target: 50+ tonnes/year', icon: '♻️', note: 'Internal estimate' },
              { metric: 'CO₂ Avoided', value: 'Significant reduction', icon: '🌍', note: 'Pending third-party audit' },
              { metric: 'Plywood Waste', value: 'Designed to replace', icon: '🪵', note: 'Per project basis' },
              { metric: 'Circular Model', value: 'End-of-life recovery', icon: '🔄', note: 'System in development' },
            ].map((impact, i) => (
              <motion.div key={impact.metric} {...fadeInUp} transition={{...fadeInUp.transition, delay: i * 0.1}} className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/15 transition-colors">
                <span className="text-4xl block mb-4">{impact.icon}</span>
                <h3 className="text-white font-semibold mb-2">{impact.metric}</h3>
                <p className="text-white/80 text-sm mb-3 font-medium">{impact.value}</p>
                <div className="inline-block px-2 py-1 bg-[#071A2F]/40 rounded text-xs text-green-300">
                  {impact.note}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeInUp} className="text-center mt-10">
            <Link href="/impact" className="inline-flex items-center px-6 py-3 bg-white text-[#0F4D2E] font-semibold rounded-xl hover:bg-white/90 transition-colors shadow-lg shadow-black/10">
              View Impact Dashboard →
            </Link>
          </motion.div>
        </div>
      </section>



      {/* SECTION 12: PROOF WALL */}
      <section className="section-padding bg-[#F7F3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#071A2F] mb-4" style={{fontFamily:'Outfit,sans-serif'}}>Trust & Credibility</h2>
            <p className="text-[#59636D] max-w-2xl mx-auto">Building confidence through institutional support, mentorship, and validated progress.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: '🏫', label: 'VNIT Association', desc: 'Incubated at VNIT Nagpur' },
              { icon: '🧑‍🏫', label: 'Mentors & Advisors', desc: 'To be updated' },
              { icon: '🤝', label: 'Pilot Partners', desc: 'To be updated' },
              { icon: '🏆', label: 'Grants & Recognition', desc: 'To be updated' },
              { icon: '📰', label: 'Media Mentions', desc: 'To be updated' },
              { icon: '📋', label: 'Case Studies', desc: 'Coming soon' },
            ].map((proof, i) => (
              <motion.div key={proof.label} {...fadeInUp} transition={{...fadeInUp.transition, delay: i * 0.05}} className="bg-white rounded-2xl p-5 text-center card-hover border border-gray-100 h-full flex flex-col justify-center">
                <span className="text-3xl block mb-3">{proof.icon}</span>
                <p className="font-semibold text-sm text-[#071A2F] leading-tight mb-1">{proof.label}</p>
                <p className="text-[11px] text-[#59636D] bg-gray-50 rounded px-2 py-1 mt-auto inline-block mx-auto">{proof.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: PARTNER PREVIEW */}
      <section className="section-padding bg-[#071A2F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0B2545]/50 skew-x-12 translate-x-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{fontFamily:'Outfit,sans-serif'}}>Partner With ECONE</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Join the circular construction ecosystem. ECONE works with partners across the value chain.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🛠️', label: 'Contractors', href: '/partners#contractors' },
              { icon: '🚚', label: 'Rental Shops', href: '/partners#rental-shops' },
              { icon: '📦', label: 'Distributors', href: '/partners#distributors' },
              { icon: '🏢', label: 'Government Bodies', href: '/partners#government' },
              { icon: '🌱', label: 'EPR Brands', href: '/partners#epr-brands' },
              { icon: '♻️', label: 'Recyclers', href: '/partners#recyclers' },
              { icon: '🏗️', label: 'Developers', href: '/partners#developers' },
              { icon: '🏫', label: 'Campuses', href: '/partners#campuses' },
            ].map((partner, i) => (
              <motion.div key={partner.label} {...fadeInUp} transition={{...fadeInUp.transition, delay: i * 0.05}}>
                <Link href={partner.href} className="block bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/15 transition-all hover:scale-105 hover:-translate-y-1">
                  <span className="text-2xl block mb-2 drop-shadow-md">{partner.icon}</span>
                  <h3 className="text-white font-semibold text-sm">{partner.label}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeInUp} className="text-center mt-10">
            <Link href="/partners" className="inline-flex items-center px-8 py-3 bg-[#B87333] text-white font-semibold rounded-xl hover:bg-[#7A4A20] transition-colors shadow-lg">
              Become a Partner →
            </Link>
          </motion.div>
        </div>
      </section>


    </div>
  );
}
