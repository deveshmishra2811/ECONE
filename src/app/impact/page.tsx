'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

export default function ImpactPage() {
  return (
    <div className="pt-20">
      <section className="bg-[#0F4D2E] py-24 text-center relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEgMjB2LTMuMWMtMi41LS4zLTQuNy0xLjYtNi4xLTMuNWwyLjQtMS41YzEgMS40IDIuNiAyLjQgNC4zIDIuNnYuM2gydi0uM2MxLjctLjIgMy4zLTEuMiA0LjMtMi42bDIuNCAxLjVjLTEuNCAxLjktMy42IDMuMi02LjEgMy41VjIwaC0yeiBNMTIgNGMuOSAwIDEuOC4yIDIuNi41bDItMmMyLS45IDQtMS40IDYuMS0xLjVWNGgtMnYtLjNjLTEtLjItMi0xLjItMy0yLjZMMTMgLjRDMTEuNiAxLjggOS4zIDMuMSA2LjggMy40VjRoLTJ2LS4zQzMuOCAzLjUgMS42IDIuMi4yLjRMMi42IDEuOUMzLjYgMy4zIDUuMiA0LjMgNi45IDQuNXYuM2gydi0uM2MxLjctLjIgMy4zLTEuMiA0LjMtMi42bDIuNCAxLjVjLS44LjQtMS43LjYtMi42LjZ2MnoiLz48L3N2Zz4=')] bg-repeat" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp}>
            <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-green-300 text-xs font-bold tracking-widest mb-6 uppercase border border-white/20 backdrop-blur-sm">Environmental Impact</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight" style={{fontFamily:'Outfit,sans-serif'}}>Building a Circular Future</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              We convert plastic waste into long-lasting construction materials, avoiding deforestation and reducing carbon emissions in the built environment.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="plastic-diverted" className="section-padding bg-[#F7F3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071A2F] mb-4" style={{fontFamily:'Outfit,sans-serif'}}>Plastic Waste Diversion</h2>
            <p className="text-[#59636D] max-w-2xl mx-auto">Our primary raw material is recycled plastic that would otherwise enter landfills or pollute our oceans.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#B87333]/30 to-transparent -translate-y-1/2" />
            
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center relative z-10 border border-gray-100">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-100">
                <span className="text-4xl">🗑️</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-[#071A2F]">Sourcing</h3>
              <p className="text-[#59636D] text-sm">Partnering with recyclers to source discarded plastics for composite manufacturing.</p>
            </div>
            
            <div className="bg-[#B87333] p-10 rounded-3xl shadow-xl text-center text-white transform md:-translate-y-4 relative z-10">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                <span className="text-4xl">♻️</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Target Conversion</h3>
              <p className="text-white/80 text-sm mb-6">Aiming to convert significant volumes of plastic into durable panels yearly.</p>
              <div className="px-4 py-1.5 bg-white/20 rounded-full text-xs font-semibold inline-block backdrop-blur-sm shadow-inner">Internal Estimate</div>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center relative z-10 border border-gray-100">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-100">
                <span className="text-4xl">🏗️</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-[#071A2F]">Application</h3>
              <p className="text-[#59636D] text-sm">Deploying the recycled material into heavy-duty construction formwork.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="co2-avoided" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#071A2F] mb-6" style={{fontFamily:'Outfit,sans-serif'}}>Avoiding Deforestation & CO₂</h2>
              <p className="text-[#59636D] mb-8 text-lg">
                Traditional formwork relies heavily on plywood, driving deforestation and generating massive construction waste as panels are discarded after a few uses.
              </p>
              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-bold">✖</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#1E293B] text-lg">Plywood Baseline</p>
                    <p className="text-[#59636D]">Replaced every 4-6 cycles, high waste footprint, contributing to deforestation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0F4D2E]/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-[#0F4D2E] text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#1E293B] text-lg">ECONE Impact</p>
                    <p className="text-[#59636D]">Targeting 100+ cycles from one panel, significantly lowering lifetime embodied carbon.</p>
                  </div>
                </li>
              </ul>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-blue-700 text-sm font-bold rounded-xl border border-blue-100">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                LCA Audit Pending Third-Party Validation
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} transition={{delay:0.2}} className="bg-gradient-to-br from-[#071A2F] to-[#0B2545] rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <span className="text-7xl mb-8 block drop-shadow-lg">🌲</span>
                <h3 className="text-3xl font-bold mb-6">Save Trees.<br/>Build Better.</h3>
                <p className="text-white/70 mb-10 text-lg">Every square meter of ECONE Panel used directly reduces the demand for timber-based formwork in the construction industry.</p>
                <a href="/calculate-savings" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#071A2F] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                  Calculate Your Impact →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="material-passport" className="section-padding bg-[#F7F3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#071A2F] mb-6" style={{fontFamily:'Outfit,sans-serif'}}>Digital Material Passport</h2>
            <p className="text-[#59636D] text-lg max-w-2xl mx-auto mb-12">We are designing a system to track the exact lifecycle of every panel to ensure true circularity.</p>
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6">
                <span className="inline-flex items-center px-4 py-1.5 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">Concept Phase</span>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-10 text-left">
                <div className="w-40 h-40 bg-gray-50 rounded-3xl flex flex-col items-center justify-center border-2 border-dashed border-gray-300 shrink-0">
                  <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
                  <span className="text-gray-500 font-bold tracking-widest text-sm">QR / RFID</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Track Every Cycle</h3>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">Future panels will feature scannable tags linking to a digital twin. This passport will track batch origin, current cycle count, repair history, and end-of-life recycling status — ensuring no panel is ever sent to a landfill.</p>
                  <div className="flex gap-4">
                    <span className="flex items-center gap-2 text-sm font-semibold text-[#071A2F] bg-gray-100 px-3 py-1.5 rounded-lg">✓ Batch ID</span>
                    <span className="flex items-center gap-2 text-sm font-semibold text-[#071A2F] bg-gray-100 px-3 py-1.5 rounded-lg">✓ Usage Count</span>
                    <span className="flex items-center gap-2 text-sm font-semibold text-[#071A2F] bg-gray-100 px-3 py-1.5 rounded-lg">✓ Location</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
