import Link from 'next/link';
import { BRAND, CONTACT, NAV_ITEMS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-[#071A2F] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/econe-logo.png" alt="ECONE Logo" className="h-10 w-auto" />
              <span className="text-3xl font-black text-white block" style={{fontFamily:'Outfit,sans-serif'}}>{BRAND.name}</span>
            </div>
            <p className="text-white/70 mb-6 max-w-sm text-sm leading-relaxed">{BRAND.description}</p>
            <div className="space-y-2 text-white/80 text-sm">
              <p>Email: <a href={`mailto:${CONTACT.email}`} className="hover:text-[#B87333] transition-colors">{CONTACT.email}</a></p>
              <p>Phone: <a href={`tel:${CONTACT.phone}`} className="hover:text-[#B87333] transition-colors">{CONTACT.phone}</a></p>
              <p className="mt-2 text-white/60">{CONTACT.address}</p>
            </div>
          </div>
          {NAV_ITEMS.slice(0, 3).map((item) => (
            <div key={item.label}>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{item.label}</h3>
              <ul className="space-y-3">
                {item.children?.slice(0, 6).map((child) => (
                  <li key={child.label}>
                    <Link href={child.href} className="text-white/60 hover:text-white text-sm transition-colors">
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-white/50">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
