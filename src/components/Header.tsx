'use client';
import { useState } from 'react';
import Link from 'next/link';
import { BRAND, NAV_ITEMS } from '@/lib/constants';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/01.png" alt="ECONE Logo" className="h-20 w-auto" />
            </Link>
          </div>
          <nav className="hidden lg:flex space-x-6">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group py-6">
                <Link href={item.href} className="text-muted-foreground hover:text-foreground font-medium text-sm transition-colors">
                  {item.label}
                </Link>
                {item.children && (
                  <div className="absolute left-0 top-full w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 overflow-hidden">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link key={child.label} href={child.href} className="block px-4 py-2 text-sm text-[#1E293B] hover:bg-[#F7F3EA] hover:text-[#B87333]">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/book-pilot" className="liquid-glass rounded-full px-6 py-2.5 text-sm font-medium text-foreground">
              Book Pilot
            </Link>
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="space-y-2">
                <Link href={item.href} className="block text-base font-semibold text-foreground">
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-2 border-l border-gray-200">
                    {item.children.map((child) => (
                      <Link key={child.label} href={child.href} className="block text-sm text-muted-foreground hover:text-foreground">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <Link href="/book-pilot" className="block w-full text-center liquid-glass px-5 py-3 text-foreground font-semibold rounded-full">
                Book Pilot
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
