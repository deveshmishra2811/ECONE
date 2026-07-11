'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function WorkInProgressPage() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-[#F7F3EA] section-padding">
      <div className="max-w-2xl mx-auto text-center px-4">
        <motion.div {...fadeInUp} className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-gray-100">
          <div className="w-20 h-20 bg-[#F7F3EA] rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner border border-[#071A2F]/10">
            🚧
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#071A2F] mb-4" style={{fontFamily:'Outfit,sans-serif'}}>Work in Progress</h1>
          <p className="text-[#59636D] text-lg mb-8 max-w-lg mx-auto">
            We are actively developing this section. Please check back later for updates as we continue building the ECONE circular ecosystem.
          </p>
          <Link href="/" className="inline-flex items-center px-8 py-4 bg-[#B87333] text-white font-bold rounded-xl hover:bg-[#7A4A20] transition-colors shadow-lg shadow-[#B87333]/20">
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
