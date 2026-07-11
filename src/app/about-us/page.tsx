'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

/* ── Signature Squiggle Component ── */
function SignatureLine({ color, isTeal }: { color: string; isTeal?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  
  return (
    <div ref={ref} className="h-4 w-16 mt-1 mb-2">
      <motion.svg
        viewBox="0 0 100 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <motion.path
          d={
            isTeal 
              ? "M5 10 C 20 0, 40 20, 60 10 S 80 0, 95 10" // loop/circle-like
              : "M5 15 L 20 5 L 40 18 L 60 4 L 80 15 L 95 8" // jagged crack
          }
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}

/* ── Animated counter for Ramesh Story cards ── */
function CountUpNumber({
  target,
  start = 0,
  prefix = '',
  displayPrefix,
  color,
  decimal,
}: {
  target: number;
  start?: number;
  prefix?: string;
  displayPrefix?: string;
  color: string;
  decimal?: boolean;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [value, setValue] = useState(start);
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animate = useCallback(() => {
    if (prefersReducedMotion) {
      setValue(target);
      return;
    }
    const duration = 1200;
    const steps = 40;
    const increment = (target - start) / steps;
    let current = start;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        clearInterval(interval);
        current = target;
      }
      setValue(decimal ? parseFloat(current.toFixed(1)) : Math.round(current));
    }, duration / steps);
  }, [target, start, decimal, prefersReducedMotion]);

  useEffect(() => {
    if (isInView) animate();
  }, [isInView, animate]);

  const formatted = decimal
    ? value.toFixed(1)
    : new Intl.NumberFormat('en-IN').format(value);

  return (
    <p ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-black leading-none" style={{ color }}>
      {prefix}
      {displayPrefix ?? ''}
      {formatted}
    </p>
  );
}

export default function WhyEconePage() {
  return (
    <div className="pt-20">
      {/* SECTION 1: RAMESH STORY (Replacing old Hero) */}
      <section className="py-16 md:py-20 bg-[#071A2F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.2em] text-[#B87333] font-semibold mb-5 text-left"
          >
            Customer Story
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-left max-w-4xl mb-10 leading-snug"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Meet Ramesh, a contractor in Nagpur. Every project costs him more than it should.
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10">
            {[
              { target: 7000, prefix: '₹', unit: 'per m²', label: 'He buys the same plywood again and again', color: '#E8734A', start: 700 },
              { target: 50, prefix: '', unit: 'kg per m²', label: 'Steel too heavy to carry alone', color: '#E8734A', start: 10, displayPrefix: '40-' },
              { target: 70, prefix: '', unit: '°C on site', label: 'Too hot to touch in summer', color: '#E8734A', start: 20, displayPrefix: '60-' },
              { target: 4.8, prefix: '', unit: 'kg per m²', label: 'Good plastic thrown away close by', color: '#0D9488', start: 0, decimal: true, isTeal: true },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                className={`border rounded-2xl p-5 md:p-6 text-left flex flex-col h-full transition-colors ${
                  card.isTeal 
                    ? 'bg-[#0D9488]/10 border-[#0D9488]/40 hover:border-[#0D9488]/70' 
                    : 'bg-white/5 border-white/20 hover:border-white/40'
                }`}
              >
                <div>
                  <CountUpNumber
                    target={card.target}
                    start={card.start}
                    prefix={card.prefix}
                    displayPrefix={card.displayPrefix}
                    color={card.color}
                    decimal={card.decimal}
                  />
                  <SignatureLine color={card.color} isTeal={card.isTeal} />
                  <p className="text-white/50 text-[10px] sm:text-xs uppercase font-bold tracking-wider mb-4">
                    {card.unit}
                  </p>
                </div>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed mt-auto font-medium">
                  {card.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Closing line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-left text-white/70 text-sm sm:text-base max-w-3xl"
          >
            It&apos;s not about price. It&apos;s about using the wrong material -{' '}
            <span className="text-[#0D9488] font-semibold">that&apos;s why ECONE exists.</span>
          </motion.p>
        </div>
      </section>

      {/* Combined Comparison Table */}
      <section id="comparison" className="section-padding bg-[#F7F3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071A2F] mb-4" style={{fontFamily:'Outfit,sans-serif'}}>Material Comparison</h2>
            <p className="text-[#59636D] max-w-2xl mx-auto">How ECONE stacks up against traditional formwork choices.</p>
          </motion.div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-4 bg-[#071A2F] border-b border-[#0B2545]">
                <div className="p-4 font-bold text-white">Feature</div>
                <div className="p-4 font-bold text-[#B87333]">ECONE Panel (Target)</div>
                <div className="p-4 font-bold text-white/70">Standard Plywood</div>
                <div className="p-4 font-bold text-white/70">Steel Formwork</div>
              </div>
              {[
                { f: 'Reusability', e: '100+ Cycles', p: '4-6 Cycles', s: 'High' },
                { f: 'Upfront Cost / 100-Cycle', e: '₹4,500/m²', p: '₹7,000/m² (100 cycles)', s: '₹9,000/m²' },
                { f: 'Weight', e: '11-15 kg/m²', p: '12-16 kg/m²', s: '40+ kg/m² (Crane often needed)' },
                { f: 'Water / Weather Resistance', e: 'High (No swelling/rust)', p: 'Low (Absorbs & rots)', s: 'Medium (Rusts over time)' },
                { f: 'Concrete Adhesion', e: 'Low (Easy to strip)', p: 'Medium', s: 'High (Needs regular oiling)' },
                { f: 'End of Life', e: 'Recyclable by ECONE', p: 'Landfill / Burned', s: 'Recyclable' }
              ].map((row, i) => (
                <div key={row.f} className="grid grid-cols-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                  <div className="p-4 md:p-6 font-semibold text-[#071A2F]">{row.f}</div>
                  <div className="p-4 md:p-6 text-[#1E293B] font-medium flex items-center gap-2"><span className="text-[#B87333]">✓</span> {row.e}</div>
                  <div className="p-4 md:p-6 text-[#59636D]">{row.p}</div>
                  <div className="p-4 md:p-6 text-[#59636D]">{row.s}</div>
                </div>
              ))}
            </div>
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

      {/* Process of Making */}
      <section id="process-of-making" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#071A2F] mb-4" style={{fontFamily:'Outfit,sans-serif'}}>Process of Making</h2>
            <p className="text-[#59636D] max-w-2xl mx-auto">From recycled plastic to construction-ready panels - a glimpse into how ECONE Panels are made.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Panel Stack', image: '/images/13.jpeg', desc: 'Finished panels ready for deployment' },
              { title: 'Panel Close-up', image: '/images/11.jpeg', desc: 'Detailed view of panel structure' },
              { title: 'Formwork Setup', image: '/images/12.jpeg', desc: 'Plastic formwork system elements' },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeInUp} transition={{...fadeInUp.transition, delay: i * 0.1}} className="rounded-2xl overflow-hidden shadow-lg group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F]/90 via-[#071A2F]/40 to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-lg mb-1">{item.title}</p>
                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[#59636D] text-sm mt-8 p-4 bg-white rounded-xl max-w-2xl mx-auto border border-gray-200">
            <span className="font-semibold">Note:</span> Additional factory, testing lab, and on-site assembly photos to be updated by ECONE team upon pilot completion.
          </p>
        </div>
      </section>
    </div>
  );
}
