'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

const applications = [
  { title: 'Wall Formwork', icon: '🧱', desc: 'Efficient solutions for residential, commercial, and boundary walls. Quick assembly and smooth finish.', href: '/applications/wall-formwork' },
  { title: 'Slab Formwork', icon: '🏗️', desc: 'Lightweight panels for decking and floor slabs. Reduces labour dependency and craning requirements.', href: '/applications/slab-formwork' },
  { title: 'Column Formwork', icon: '🗳️', desc: 'Square and rectangular column casting made easy with precision panels and interlocking accessories.', href: '/applications/column-formwork' },
  { title: 'Drain Formwork', icon: '🚰', desc: 'Ideal for repetitive roadside and municipal drain projects. High water resistance prevents panel damage.', href: '/applications/drain-formwork' },
  { title: 'Box Culvert', icon: '🌉', desc: 'Robust formwork for infrastructure and culvert projects requiring reliable and reusable casting.', href: '/applications/box-culvert' },
  { title: 'Campus / Public Works', icon: '🏛️', desc: 'Institutional construction projects where speed, quality, and sustainable ESG practices are prioritised.', href: '/applications/campus-public-works' },
  { title: 'Custom Projects', icon: '📐', desc: 'Have a unique requirement? ECONE can evaluate tailored solutions for specialized concrete casting.', href: '/applications/custom-project' },
];

export default function ApplicationsPage() {
  return (
    <div className="pt-20">
      <section className="bg-[#071A2F] py-20 border-b border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily:'Outfit,sans-serif'}}>Applications</h1>
            <p className="text-lg text-white/70">
              ECONE Panel is a highly versatile formwork system designed to handle a wide range of concrete casting requirements across diverse construction sectors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, i) => (
              <motion.div key={app.title} {...fadeInUp} transition={{delay: i * 0.1}} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#B87333]/40 shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
                <span className="text-5xl mb-6 block">{app.icon}</span>
                <h2 className="text-2xl font-bold text-[#071A2F] mb-3">{app.title}</h2>
                <p className="text-[#59636D] mb-8 flex-1">{app.desc}</p>
                <div className="flex gap-3 mt-auto">
                  <Link href={app.href} className="px-5 py-2.5 bg-[#071A2F] text-white text-sm font-semibold rounded-lg hover:bg-[#0B2545] transition-colors text-center flex-1">
                    View Details
                  </Link>
                  <Link href={`/contact?type=${encodeURIComponent(app.title)}`} className="px-5 py-2.5 bg-[#F7F3EA] text-[#071A2F] text-sm font-semibold rounded-lg hover:bg-gray-200 transition-colors text-center flex-1">
                    Enquire
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-[#071A2F] mb-6" style={{fontFamily:'Outfit,sans-serif'}}>Not sure what you need?</h2>
            <p className="text-[#59636D] mb-8">Our engineering team can evaluate your project drawings and recommend the optimal ECONE Panel configuration.</p>
            <Link href="/contact?type=consultation" className="inline-flex px-8 py-4 bg-[#B87333] text-white font-bold rounded-xl hover:bg-[#7A4A20] transition-colors shadow-lg">
              Request Project Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
