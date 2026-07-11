'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

export default function ResourcesPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#F7F3EA]">
      <section className="bg-gradient-to-b from-[#071A2F] to-[#0B2545] py-20 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily:'Outfit,sans-serif'}}>Resources & Documentation</h1>
            <p className="text-lg text-white/70">Product catalogue and documentation.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-2xl mx-auto px-4">
          <div id="catalogue">
            <motion.div {...fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-start text-left">
              <span className="text-4xl mb-6 block">📊</span>
              <h3 className="text-xl font-bold text-[#071A2F] mb-3">Product Catalogue</h3>
              <p className="text-sm text-[#59636D] mb-8 flex-1">Complete overview of panel sizes, corner accessories, tie-rods, and common application examples.</p>
              <a href="/contact?type=catalogue" className="block text-center w-full py-3 bg-[#071A2F] text-white font-semibold rounded-xl hover:bg-[#0B2545] transition-colors shadow-md">
                Request via Email
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
