'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

export default function PartnersPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#F7F3EA]">
      <section className="bg-gradient-to-b from-[#071A2F] to-[#0B2545] py-20 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily:'Outfit,sans-serif'}}>Partner with ECONE</h1>
            <p className="text-lg text-white/70">Join our mission to transform construction through circular formwork solutions.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <motion.div {...fadeInUp} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-[#B87333]/10 text-[#B87333] font-bold text-xs uppercase tracking-wider rounded-full mb-4">Rental Shops</span>
                <h2 className="text-3xl font-bold text-[#071A2F] mb-4">Rental Fleet Partners</h2>
                <p className="text-[#59636D] mb-6 leading-relaxed">
                  Expand your formwork rental portfolio with a durable, lightweight alternative to plywood that yields higher long-term margins due to its 100+ cycle lifespan.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-sm font-semibold text-[#1E293B]"><div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</div> High ROI on rental assets</li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-[#1E293B]"><div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</div> No delamination or water damage</li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-[#1E293B]"><div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</div> Lighter transport and handling</li>
                </ul>
                <a href="/contact?type=partner-rental" className="inline-block px-8 py-4 bg-[#071A2F] text-white font-bold rounded-xl hover:bg-[#0B2545] transition-colors shadow-lg">
                  Enquire Now
                </a>
              </div>
              <div className="bg-gray-50 rounded-3xl p-10 text-center border border-gray-100 h-full flex flex-col justify-center shadow-inner">
                <span className="text-7xl mb-6 drop-shadow-md">🏬</span>
                <p className="font-bold text-[#071A2F] text-lg">Ideal for scaffolding and formwork rental businesses.</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gray-50 rounded-3xl p-10 text-center border border-gray-100 h-full flex flex-col justify-center shadow-inner">
                <span className="text-7xl mb-6 drop-shadow-md">♻️</span>
                <p className="font-bold text-[#071A2F] text-lg">Ideal for MRFs and plastic waste aggregators.</p>
              </div>
              <div className="order-1 md:order-2">
                <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 font-bold text-xs uppercase tracking-wider rounded-full mb-4">Supply Chain</span>
                <h2 className="text-3xl font-bold text-[#071A2F] mb-4">Material Sourcing Partners</h2>
                <p className="text-[#59636D] mb-8 leading-relaxed">
                  We are constantly looking for reliable suppliers of recycled plastic waste (HDPE/PP blends) to fuel our composite manufacturing process. If you have consistent volume, let's talk.
                </p>
                <a href="/contact?type=partner-supply" className="inline-block px-8 py-4 bg-white border-2 border-[#071A2F] text-[#071A2F] font-bold rounded-xl hover:bg-gray-50 transition-colors">
                  Discuss Supply Volume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
