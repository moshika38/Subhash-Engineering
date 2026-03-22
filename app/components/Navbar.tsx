"use client";

import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-white/10' : 'bg-black/40 backdrop-blur-md border-b border-white/5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="p-2 sm:p-2.5 bg-gradient-to-br from-primary to-yellow-400 rounded-lg sm:rounded-xl shadow-lg shadow-primary/30 group-hover:shadow-primary/50 group-hover:scale-105 transition-all duration-300">
            <h6 className="text-white font-bold text-xs sm:text-sm tracking-wider">SE</h6>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-[10px] xs:text-xs sm:text-sm tracking-wider uppercase leading-tight">Subhash Engineering</span>
            <span className="text-white/50 text-[8px] sm:text-[10px] tracking-widest uppercase hidden sm:block">Precision Metal Works</span>
          </div>
        </Link>

        <nav className="hidden lg:flex gap-1 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="px-4 py-2 text-white/80 hover:text-primary text-sm font-medium rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+94112345678" className="group flex items-center gap-2 text-white/80 hover:text-primary transition-colors">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone size={18} />
            </div>
            <span className="text-sm font-medium">+94 11 234 5678</span>
          </a>
          <Link href="#contact" className="group bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 flex items-center gap-2">
            Get a Quote
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors duration-300"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-900/98 backdrop-blur-lg border-t border-white/10 animate-slide-down">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-white/80 hover:text-primary hover:bg-white/5 rounded-xl transition-all duration-300 font-medium text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-white/10">
              <Link 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-xl font-semibold text-center transition-colors duration-300 text-sm"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
