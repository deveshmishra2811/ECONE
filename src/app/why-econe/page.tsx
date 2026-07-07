'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

export default function WhyEconePage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-b from-[#071A2F] to-[#0B2545] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily:'Outfit,sans-serif'}}>Why Choose ECONE?</h1>
            <p className="text-lg text-white/70">
              The smart alternative to plywood and heavy steel formwork. Lower costs, zero deforestation, and a guaranteed circular lifecycle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VS Plywood */}
      <section id="econe-vs-plywood" className="section-padding bg-[#F7F3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071A2F] mb-4" style={{fontFamily:'Outfit,sans-serif'}}>ECONE vs Plywood</h2>
          </motion.div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-3 bg-gray-50 border-b border-gray-200">
              <div className="p-4 font-bold text-[#1E293B]">Feature</div>
              <div className="p-4 font-bold text-[#B87333]">ECONE Panel (Target)</div>
              <div className="p-4 font-bold text-[#59636D]">Standard Plywood</div>
            </div>
            {[
              { f: 'Reusability', e: '100+ Cycles', p: '4-6 Cycles' },
              { f: 'Cost per 100 uses', e: '₹4,500/m²', p: '₹7,000/m²' },
              { f: 'Water Resistance', e: 'High (No swelling)', p: 'Low (Absorbs & rots)' },
              { f: 'End of Life', e: 'Recyclable by ECONE', p: 'Landfill / Burned' },
              { f: 'Weight', e: '11-15 kg/m²', p: '12-16 kg/m²' }
            ].map((row, i) => (
              <div key={row.f} className="grid md:grid-cols-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <div className="p-4 md:p-6 font-semibold text-[#071A2F]">{row.f}</div>
                <div className="p-4 md:p-6 text-[#1E293B] font-medium flex items-center gap-2"><span className="text-[#B87333]">✓</span> {row.e}</div>
                <div className="p-4 md:p-6 text-[#59636D] flex items-center gap-2"><span className="text-red-400">✖</span> {row.p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VS Steel */}
      <section id="econe-vs-steel" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071A2F] mb-4" style={{fontFamily:'Outfit,sans-serif'}}>ECONE vs Steel Formwork</h2>
          </motion.div>
          <div className="bg-[#071A2F] rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-3 bg-white/5 border-b border-white/10">
              <div className="p-4 font-bold text-white">Feature</div>
              <div className="p-4 font-bold text-[#B87333]">ECONE Panel (Target)</div>
              <div className="p-4 font-bold text-white/50">Steel Formwork</div>
            </div>
            {[
              { f: 'Upfront Cost', e: '₹4,500/m²', p: '₹9,000/m²' },
              { f: 'Weight', e: '11-15 kg/m² (Manual handling)', p: '40+ kg/m² (Crane often required)' },
              { f: 'Corrosion', e: 'Zero Rust', p: 'Rusts over time' },
              { f: 'Concrete Adhesion', e: 'Low (Easy to strip)', p: 'High (Needs regular oiling)' }
            ].map((row, i) => (
              <div key={row.f} className="grid md:grid-cols-3 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors">
                <div className="p-4 md:p-6 font-semibold text-white">{row.f}</div>
                <div className="p-4 md:p-6 text-white/90 font-medium flex items-center gap-2"><span className="text-[#B87333]">✓</span> {row.e}</div>
                <div className="p-4 md:p-6 text-white/50 flex items-center gap-2"><span className="text-amber-500">⚠️</span> {row.p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Savings */}
      <section id="cost-savings" className="section-padding bg-[#F7F3EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-[#071A2F] mb-6" style={{fontFamily:'Outfit,sans-serif'}}>Significant Cost Savings</h2>
            <p className="text-[#59636D] mb-8">Over 100 casting cycles, plywood needs to be replaced 15 to 20 times. ECONE targets serving those 100 cycles with a single panel.</p>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white p-8 rounded-2xl border border-red-100 shadow-md">
                <h3 className="text-lg font-bold text-[#1E293B] mb-2">Plywood 100-Cycle Cost</h3>
                <p className="text-4xl font-black text-red-500 mb-2">₹7,000<span className="text-base text-gray-500 font-normal">/m²</span></p>
                <p className="text-sm text-gray-500">Assuming ₹700/m² replaced 10 times</p>
              </div>
              <div className="bg-[#071A2F] p-8 rounded-2xl shadow-xl">
                <h3 className="text-lg font-bold text-white mb-2">ECONE 100-Cycle Cost</h3>
                <p className="text-4xl font-black text-[#B87333] mb-2">₹4,500<span className="text-base text-white/60 font-normal">/m²</span></p>
                <p className="text-sm text-white/60">Target sale price</p>
              </div>
            </div>
            <Link href="/calculate-savings" className="inline-flex px-8 py-4 bg-[#B87333] text-white font-bold rounded-xl hover:bg-[#7A4A20] transition-colors shadow-lg">
              Calculate Your Savings →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Validation Roadmap */}
      <section id="validation-roadmap" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#071A2F] mb-4" style={{fontFamily:'Outfit,sans-serif'}}>Our Transparent Validation Roadmap</h2>
            <p className="text-[#59636D] max-w-2xl mx-auto">We believe in transparent communication. Here is the current status of our product claims.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <div className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-4">VALIDATED</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Material: Recycled Plastic</li>
                <li>• Process: Composite Manufacturing</li>
                <li>• Institutional Backing: VNIT Nagpur</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
              <div className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full mb-4">TARGET SPECIFICATIONS</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Reusability: 100+ Cycles</li>
                <li>• Weight: 11-15 kg/m²</li>
                <li>• Sale Price: ₹4,500/m²</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <div className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full mb-4">PENDING / UPCOMING</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Third-Party Load Testing</li>
                <li>• Formal LCA / Carbon Audit</li>
                <li>• Independent Pilot Case Studies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
