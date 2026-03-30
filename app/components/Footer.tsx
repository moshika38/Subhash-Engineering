"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
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
              {[
                { Icon: Phone, href: "tel:+94767705308" },
                { Icon: MessageCircle, href: "https://wa.me/94767705308" },
                { Icon: Mail, href: "mailto:manojprabhath17@gmail.com" },
                { Icon: Facebook, href: "https://www.facebook.com/share/17K5jwNF8J/" }
              ].map(({ Icon, href }, index) => (
                <a 
                  key={index} 
                  href={href} 
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 hover:bg-primary flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-white/10 hover:border-primary"
                  target="_blank"
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
              {['Services', 'Portfolio', 'About Us', 'Contact'].map((item) => {
                const anchor = item.toLowerCase().replace(' ', '-');
                const href = isHome ? `#${anchor}` : `/#${anchor}`;
                return (
                  <li key={item}>
                    <Link href={href} className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group text-sm">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-600 group-hover:bg-primary group-hover:w-2 transition-all duration-300"></span>
                      {item}
                    </Link>
                  </li>
                );
              })}
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
                  <Link href={isHome ? "#services" : "/#services"} className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group text-sm">
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
                <span className="text-gray-400 text-xs sm:text-sm">No.22, Keeriyagolla , Hali ela.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={14} className="sm:w-[18px] sm:h-[18px] text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs sm:text-sm">076 7705 308 <span className="text-xs text-primary">(WhatsApp)</span></span>
                  <span className="text-gray-500 text-xs">078 3355 308 (Manoj)</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={14} className="sm:w-[18px] sm:h-[18px] text-primary" />
                </div>
                <span className="text-gray-400 text-xs sm:text-sm truncate">manojprabhath17@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock size={14} className="sm:w-[18px] sm:h-[18px] text-primary" />
                </div>
                <span className="text-gray-400 text-xs sm:text-sm">8AM - 5PM (7 Days)</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Google Map Integration */}
        <div className="mt-8 mb-10 rounded-2xl overflow-hidden h-64 sm:h-80 border border-white/10 shadow-xl shadow-black/30">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6725!2d81.0196244!3d6.968693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTgnMDcuMyJOIDgxwrAwMScxMC43IkU!5e0!3m2!1sen!2slk!4v1711786000000!5m2!1sen!2slk" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-80 hover:opacity-100 transition-opacity duration-300"
          ></iframe>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-gray-500 text-xs sm:text-sm text-center sm:text-left flex flex-col sm:flex-row gap-1">
              <span>&copy; {new Date().getFullYear()} Subhash Engineering. Since 2007. All rights reserved.</span>
              <span className="text-neutral-600 hidden sm:inline">|</span>
              <span>Developed by <a href="https://www.facebook.com/profile.php?id=61587246540726" target="_blank" className="text-primary hover:underline">LogicBit Labs</a></span>
            </div>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
