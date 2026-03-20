"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-brand/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12 lg:mb-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="p-2 sm:p-2.5 bg-gradient-to-br from-primary to-yellow-400 rounded-lg sm:rounded-xl shadow-lg shadow-primary/30">
                <h6 className="text-white font-bold text-xs sm:text-sm tracking-wider">SE</h6>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase leading-tight">Subhash Engineering</span>
                <span className="text-white/50 text-[8px] sm:text-[10px] tracking-widest uppercase">Precision Metal Works</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 sm:mb-6">
              Custom fabrication and steel solutions with unmatched quality.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 hover:bg-primary flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-white/10 hover:border-primary"
                >
                  <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-6 sm:w-8 h-0.5 sm:h-1 bg-primary rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-4">
              {['Services', 'Portfolio', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-600 group-hover:bg-primary group-hover:w-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-6 sm:w-8 h-0.5 sm:h-1 bg-primary rounded-full"></span>
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-4">
              {['Iron Works', 'Welding', 'Steel Structures', 'Fabrication'].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-600 group-hover:bg-primary group-hover:w-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-6 sm:w-8 h-0.5 sm:h-1 bg-primary rounded-full"></span>
              Contact
            </h4>
            <ul className="space-y-3 sm:space-y-5">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="sm:w-[18px] sm:h-[18px] text-primary" />
                </div>
                <span className="text-gray-400 text-xs sm:text-sm">Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={14} className="sm:w-[18px] sm:h-[18px] text-primary" />
                </div>
                <span className="text-gray-400 text-xs sm:text-sm">+94 11 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={14} className="sm:w-[18px] sm:h-[18px] text-primary" />
                </div>
                <span className="text-gray-400 text-xs sm:text-sm truncate">info@subhashengineering.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock size={14} className="sm:w-[18px] sm:h-[18px] text-primary" />
                </div>
                <span className="text-gray-400 text-xs sm:text-sm">Mon - Sat: 8AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Subhash Engineering. All rights reserved.
            </div>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
