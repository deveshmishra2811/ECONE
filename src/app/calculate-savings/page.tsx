'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

export default function CalculateSavingsPage() {
  const [area, setArea] = useState<number>(1000);
  const [material, setMaterial] = useState('plywood');

  const plywoodCostPer100 = 7000;
  const steelCost = 9000;
  const econeCost = 4500;
  const co2PerM2 = 2.5;

  const currentCost = material === 'plywood' ? area * plywoodCostPer100 : area * steelCost;
  const newCost = area * econeCost;
  const savings = currentCost - newCost;
  const savingsPercentage = Math.round((savings / currentCost) * 100);
  const co2Avoided = area * co2PerM2;
  const panelsNeeded = Math.ceil(area / 0.85);

  const formatIN = (num: number) => new Intl.NumberFormat('en-IN').format(num);

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-b from-[#071A2F] to-[#0B2545] py-20 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily:'Outfit,sans-serif'}}>Cost & Carbon Calculator</h1>
            <p className="text-lg text-white/70">
              Estimate your project savings and environmental impact by switching to ECONE.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F3EA] min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            <motion.div {...fadeInUp} className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl h-fit border border-gray-100">
              <h2 className="text-2xl font-bold text-[#071A2F] mb-6">Project Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1E293B] mb-2">Total Formwork Area (m²)</label>
                  <input type="number" value={area} onChange={e => setArea(Number(e.target.value) || 0)} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#B87333] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1E293B] mb-2">Current Material</label>
                  <select value={material} onChange={e => setMaterial(e.target.value)} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#B87333] outline-none">
                    <option value="plywood">Plywood</option>
                    <option value="steel">Steel</option>
                  </select>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-2">Internal Assumptions:</p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>Plywood (100 cycles): ₹7,000/m²</li>
                    <li>Steel (Upfront): ₹9,000/m²</li>
                    <li>ECONE Target: ₹4,500/m²</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{delay: 0.2}} className="lg:col-span-3 space-y-8">
              <div className="bg-[#071A2F] rounded-3xl p-8 shadow-xl text-white">
                <h2 className="text-2xl font-bold mb-8">Estimated Impact</h2>
                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-white/60 text-sm mb-1">Financial Savings</p>
                    <p className="text-4xl font-black text-[#B87333]">₹{formatIN(savings)}</p>
                    <p className="text-sm text-white/50 mt-1">{savingsPercentage}% cost reduction target</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">CO₂e Avoided</p>
                    <p className="text-4xl font-black text-green-400">{formatIN(co2Avoided)} <span className="text-xl">kg</span></p>
                    <p className="text-sm text-white/50 mt-1">Pending validation</p>
                  </div>
                </div>

                <div className="bg-[#0B2545] rounded-2xl p-5 mb-8 border border-white/5">
                  <p className="text-white/80 font-medium text-sm mb-4 border-b border-white/10 pb-2">Total Cost Breakdown</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-white/50 mb-1">{material === 'plywood' ? 'Plywood (100-cycle)' : 'Steel Formwork'}</p>
                      <p className="text-lg font-semibold text-white/90 line-through decoration-white/30">₹{formatIN(currentCost)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#B87333] mb-1">ECONE Panel (Target)</p>
                      <p className="text-lg font-semibold text-white">₹{formatIN(newCost)}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                  <p className="text-white/80 font-medium mb-4">Project Requirements</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-3xl font-bold">{formatIN(panelsNeeded)}</p>
                      <p className="text-sm text-white/50">ECONE Panels needed (Approx)</p>
                    </div>
                    <button className="px-6 py-3 bg-white text-[#071A2F] font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 text-center">
                <p className="text-sm text-gray-500 mb-4 font-medium">Want to discuss these numbers with our engineering team?</p>
                <a href={`https://wa.me/918928133816?text=${encodeURIComponent(`Hi, I calculated my project savings on the website for an area of ${area}m2 using ${material}. Can we discuss a quote?`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1EBE5D] transition-colors shadow-md">
                  Send to WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
