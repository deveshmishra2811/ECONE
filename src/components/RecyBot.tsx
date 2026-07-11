'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
};

export function RecyBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'bot', text: 'Hi! I am RecyBot, the ECONE AI Assistant. How can I help you today? Try asking about our product, savings, or applications.' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Rule-based logic
    setTimeout(() => {
      let botResponse = 'I can help you with information about ECONE panels, applications, pricing, pilots, and partnerships. Try asking about our product, applications, or savings calculator!';
      const lower = text.toLowerCase();

      if (lower.includes('what is econe') || lower.includes('about econe')) {
        botResponse = 'ECONE builds circular formwork panels from recycled plastic. Our panels are designed to replace plywood in concrete construction - offering better reuse, lower waste, and a circular lifecycle.';
      } else if (lower.includes('panel') || lower.includes('product')) {
        botResponse = 'The ECONE Panel is a recycled composite formwork panel. Standard size: 800 × 1062.5 mm, Weight: 11–15 kg/m², Target lifecycle: 100+ cycles. Target sale price: ₹4,500/m² or rental at ₹650/m²/month.';
      } else if (lower.includes('application') || lower.includes('use case') || lower.includes('where')) {
        botResponse = 'ECONE Panel can be used for wall formwork, slab formwork, column formwork, drain formwork, box culverts, and campus/public works projects.';
      } else if (lower.includes('validation') || lower.includes('certified') || lower.includes('certification') || lower.includes('tested')) {
        botResponse = 'ECONE is currently presented with validation-conscious language. Final certifications, testing reports, and third-party validations should be updated once available. Some specifications are target values under validation.';
      } else if (lower.includes('saving') || lower.includes('cost') || lower.includes('price') || lower.includes('calculator')) {
        botResponse = 'You can estimate your project savings using our Contractor TCO Calculator. Plywood 100-cycle cost: ₹7,000/m² vs ECONE at ₹4,500/m².';
      } else if (lower.includes('pilot') || lower.includes('book') || lower.includes('demo')) {
        botResponse = 'You can book a pilot project with ECONE! Visit the Book Pilot page or contact our team directly. Pilot booking amount: ₹500.';
      } else if (lower.includes('partner') || lower.includes('distributor') || lower.includes('rental')) {
        botResponse = 'ECONE partners with contractors, rental shops, distributors, government bodies, EPR brands, recyclers, developers, and campuses. Visit our Partners page to apply.';
      } else if (lower.includes('catalogue') || lower.includes('download') || lower.includes('brochure')) {
        botResponse = 'Our product catalogue and technical documents are being finalized. You can request them through our Resources page or contact us on WhatsApp.';
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('email') || lower.includes('reach')) {
        botResponse = 'You can reach ECONE at: Email: deveshmishra2811@gmail.com | Phone: +91 89281 33816 | Address: VNIT, Nagpur, Maharashtra | Or chat with us on WhatsApp!';
      } else if (lower.includes('whatsapp')) {
        botResponse = 'Chat with our team on WhatsApp: +91 89281 33816';
      }

      setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'bot', text: botResponse }]);
    }, 500);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-[#071A2F] text-white w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center border-2 border-white/10"
        aria-label="Open RecyBot"
      >
        <span className="text-xl font-bold">R</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-50 w-[320px] h-[480px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#071A2F] p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#B87333] rounded-full flex items-center justify-center font-bold text-sm">R</div>
                <div>
                  <h3 className="font-semibold leading-tight">RecyBot</h3>
                  <p className="text-xs text-white/70">ECONE AI Assistant</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
              {messages.map(msg => (
                <div key={msg.id} className={`max-w-[85%] ${msg.sender === 'user' ? 'self-end' : 'self-start'}`}>
                  <div className={`p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-[#071A2F] text-white rounded-tr-sm' : 'bg-white border border-gray-200 text-[#1E293B] rounded-tl-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-3 pb-2 pt-2 bg-gray-50 border-t border-gray-100 flex gap-2 overflow-x-auto whitespace-nowrap hide-scrollbar">
              <Link onClick={() => setIsOpen(false)} href="/book-pilot" className="inline-block text-[11px] px-3 py-1.5 rounded-full border border-[#071A2F]/20 bg-white text-[#071A2F] hover:bg-[#071A2F] hover:text-white transition-colors">Book Pilot</Link>
              <Link onClick={() => setIsOpen(false)} href="/calculate-savings" className="inline-block text-[11px] px-3 py-1.5 rounded-full border border-[#071A2F]/20 bg-white text-[#071A2F] hover:bg-[#071A2F] hover:text-white transition-colors">Calculator</Link>
              <a href="https://wa.me/918928133816" target="_blank" rel="noopener noreferrer" className="inline-block text-[11px] px-3 py-1.5 rounded-full border border-[#071A2F]/20 bg-white text-[#071A2F] hover:bg-[#071A2F] hover:text-white transition-colors">WhatsApp</a>
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-gray-200">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(input); }} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#B87333]"
                />
                <button type="submit" className="bg-[#B87333] text-white p-2 rounded-xl hover:bg-[#7A4A20] transition-colors" disabled={!input.trim()}>
                  <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
