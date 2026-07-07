'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PAYMENT } from '@/lib/constants';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

export default function BookPilotPage() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', company: '', city: '',
    projectType: 'wall', projectArea: '', currentMaterial: 'plywood', timeline: '', message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate API call for now (can be replaced with Razorpay integration later)
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-[#F7F3EA] px-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-lg text-center">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
          <h2 className="text-3xl font-bold text-[#071A2F] mb-4">Application Received!</h2>
          <p className="text-[#59636D] mb-8">Thank you for your interest in an ECONE pilot project. Our team will review your details and contact you shortly.</p>
          <button onClick={() => window.location.href = '/'} className="px-6 py-3 bg-[#071A2F] text-white rounded-xl font-semibold">Return to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-[#F7F3EA] min-h-screen pb-20">
      <section className="bg-[#071A2F] py-16 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily:'Outfit,sans-serif'}}>Book a Pilot Project</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Test ECONE Panels on your active construction site. Evaluate performance, measure savings, and validate the finish before a full fleet rollout.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 -mt-8 relative z-10">
        <motion.div {...fadeInUp} className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-10 border-b border-gray-100 bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-[#071A2F]">Pilot Booking Request</h2>
              <p className="text-sm text-[#59636D] mt-1">Submit your details to secure a pilot slot.</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 text-center">
              <p className="text-[10px] text-gray-500 uppercase tracking-wide font-bold">Booking Amount</p>
              <p className="text-2xl font-black text-[#B87333]">₹{PAYMENT.defaultAmount}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div><label className="block text-sm font-semibold text-[#1E293B] mb-2">Full Name *</label><input required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333] outline-none" onChange={e => setFormData({...formData, name: e.target.value})} /></div>
              <div><label className="block text-sm font-semibold text-[#1E293B] mb-2">Phone Number *</label><input required type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333] outline-none" onChange={e => setFormData({...formData, phone: e.target.value})} /></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div><label className="block text-sm font-semibold text-[#1E293B] mb-2">Email Address *</label><input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333] outline-none" onChange={e => setFormData({...formData, email: e.target.value})} /></div>
              <div><label className="block text-sm font-semibold text-[#1E293B] mb-2">Company / Organization *</label><input required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333] outline-none" onChange={e => setFormData({...formData, company: e.target.value})} /></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div><label className="block text-sm font-semibold text-[#1E293B] mb-2">City *</label><input required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#B87333]" onChange={e => setFormData({...formData, city: e.target.value})} /></div>
              <div>
                <label className="block text-sm font-semibold text-[#1E293B] mb-2">Project Type</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#B87333]" onChange={e => setFormData({...formData, projectType: e.target.value})}>
                  <option value="wall">Wall Formwork</option>
                  <option value="slab">Slab Formwork</option>
                  <option value="column">Column Formwork</option>
                  <option value="drain">Drain / Box Culvert</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1E293B] mb-2">Current Material</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#B87333]" onChange={e => setFormData({...formData, currentMaterial: e.target.value})}>
                  <option value="plywood">Plywood</option>
                  <option value="steel">Steel</option>
                  <option value="plastic">Other Plastic</option>
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div><label className="block text-sm font-semibold text-[#1E293B] mb-2">Approx. Formwork Area (m²)</label><input type="number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#B87333]" onChange={e => setFormData({...formData, projectArea: e.target.value})} /></div>
              <div><label className="block text-sm font-semibold text-[#1E293B] mb-2">Expected Project Start</label><input type="text" placeholder="e.g. Next month, Q3" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#B87333]" onChange={e => setFormData({...formData, timeline: e.target.value})} /></div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1E293B] mb-2">Additional Details</label>
              <textarea rows={3} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#B87333]" onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
            </div>
            <div className="pt-4 flex flex-col items-center">
              <button disabled={loading} type="submit" className="w-full md:w-auto px-10 py-4 bg-[#B87333] text-white font-bold rounded-xl hover:bg-[#7A4A20] transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed">
                {loading ? 'Processing...' : `Submit Application & Pay ₹${PAYMENT.defaultAmount}`}
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center max-w-md">The ₹500 fee confirms your serious interest and secures your place in our pilot queue. (Payment gateway integration pending).</p>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
