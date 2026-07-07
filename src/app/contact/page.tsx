'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '@/lib/constants';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

export default function ContactPage() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-b from-[#071A2F] to-[#0B2545] py-20 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily:'Outfit,sans-serif'}}>Contact ECONE</h1>
            <p className="text-lg text-white/70">Get in touch for quotes, pilot programs, or partnership inquiries.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F3EA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div {...fadeInUp}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-[#071A2F] mb-6">Send a Message</h2>
                {status === 'success' ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-500">We will get back to you shortly.</p>
                    <button onClick={() => setStatus('idle')} className="mt-6 text-[#B87333] font-semibold underline">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div><label className="block text-sm font-semibold mb-1 text-[#1E293B]">Name *</label><input required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#B87333] outline-none" /></div>
                      <div><label className="block text-sm font-semibold mb-1 text-[#1E293B]">Phone *</label><input required type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#B87333] outline-none" /></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div><label className="block text-sm font-semibold mb-1 text-[#1E293B]">Email *</label><input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#B87333] outline-none" /></div>
                      <div><label className="block text-sm font-semibold mb-1 text-[#1E293B]">Company</label><input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#B87333] outline-none" /></div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1 text-[#1E293B]">Inquiry Type</label>
                      <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#B87333] outline-none text-gray-700">
                        <option>General Inquiry</option>
                        <option>Request Quote</option>
                        <option>Book Pilot</option>
                        <option>Partnership</option>
                        <option>Investor Relations</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1 text-[#1E293B]">Message</label>
                      <textarea rows={4} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#B87333] outline-none"></textarea>
                    </div>
                    <button disabled={status==='loading'} type="submit" className="w-full py-4 bg-[#071A2F] text-white font-bold rounded-xl hover:bg-[#0B2545] transition-colors shadow-lg">
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} transition={{delay: 0.2}}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#071A2F] mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-2xl mt-1">📞</span>
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Phone</p>
                        <a href={`tel:${CONTACT.phone}`} className="text-[#071A2F] font-bold text-lg hover:text-[#B87333] transition-colors">{CONTACT.phone}</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-2xl mt-1">✉️</span>
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Email</p>
                        <a href={`mailto:${CONTACT.email}`} className="text-[#071A2F] font-bold text-lg hover:text-[#B87333] transition-colors break-all">{CONTACT.email}</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-2xl mt-1">🏢</span>
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Office</p>
                        <p className="text-[#071A2F] font-medium leading-relaxed">{CONTACT.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#25D366]/10 border border-[#25D366]/20 p-8 rounded-3xl">
                  <h3 className="text-xl font-bold text-[#0F4D2E] mb-2">Fastest Response</h3>
                  <p className="text-[#0F4D2E]/80 text-sm mb-6">Our team is highly active on WhatsApp. Message us for quick answers to your questions.</p>
                  <a href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1EBE5D] transition-colors shadow-lg">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
