"use client";

import { Compass, Factory, Hammer } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function MachinedExcellence() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-30 w-full bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 bg-white shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden mb-12 sm:mb-20 border border-gray-100 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative p-6 sm:p-10 border-b sm:border-b-0 sm:border-r border-gray-100 bg-white hover:bg-primary/5 transition-all duration-300 group">
            <div className="text-primary mb-4 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 group-hover:scale-105 transition-transform">
              <Compass size={24} className="sm:hidden" />
              <Compass size={28} className="hidden sm:block" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors text-center sm:text-left">Custom Fabrication</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed text-center sm:text-left">Tailored metal solutions for architectural requirements.</p>
          </div>
          
          <div className="relative p-6 sm:p-10 border-b sm:border-b-0 sm:border-r border-gray-100 bg-white hover:bg-primary/5 transition-all duration-300 group">
            <div className="text-primary mb-4 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 group-hover:scale-105 transition-transform">
              <Hammer size={24} className="sm:hidden" />
              <Hammer size={28} className="hidden sm:block" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors text-center sm:text-left">Professional Welding</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed text-center sm:text-left">Certified welding processes for structural integrity.</p>
          </div>
          
          <div className="relative p-6 sm:p-10 bg-white hover:bg-primary/5 transition-all duration-300 group">
            <div className="text-primary mb-4 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 group-hover:scale-105 transition-transform">
              <Factory size={24} className="sm:hidden" />
              <Factory size={28} className="hidden sm:block" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors text-center sm:text-left">Steel Structures</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed text-center sm:text-left">Large scale manufacturing for commercial spaces.</p>
          </div>
        </div>

        <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 sm:mb-12 lg:mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl mb-6 lg:mb-0">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6 border border-primary/20">
              Our Excellence
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-6 tracking-tight">Machined Excellence</h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Every cut is calculated. Every weld is verified with precision.
            </p>
          </div>
          <Link href="#gallery" className="group flex items-center gap-2 sm:gap-3 text-primary font-bold mt-4 lg:mt-0 hover:text-primary-hover transition-colors">
            <span className="text-sm sm:text-base">Gallery</span>
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center transform group-hover:translate-x-1 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4"><path d="m9 18 6-6-6-6"/></svg>
            </span>
          </Link>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-64 sm:h-80 lg:h-[500px] group shadow-xl">
            <img 
              src="images/about1.png" 
              alt="Advanced Welding" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent"></div>
            
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
              <span className="bg-primary/90 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-4 py-1 sm:py-2 rounded-full uppercase tracking-wider">
                Featured
              </span>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-10">
              <div className="text-[10px] sm:text-xs tracking-[0.2em] text-primary mb-1 sm:mb-2 uppercase font-bold">Technique</div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">Advanced TIG/MIG Welding</div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-6 sm:p-8 sm:p-10 flex flex-col justify-center overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-yellow-400 mb-2 sm:mb-4">0.02</div>
                <div className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg mb-1">Precision</div>
                <div className="text-gray-500 text-xs sm:text-sm">Millimeter Accuracy</div>
              </div>
              
              <div className="relative bg-gradient-to-br from-primary to-yellow-500 rounded-2xl p-6 sm:p-8 sm:p-10 flex flex-col justify-between overflow-hidden group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
                <div className="bg-white/20 backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight text-white">
                  Structural Integrity
                </div>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-5 sm:p-6 lg:p-8 flex items-center gap-4 sm:gap-6 overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="hidden sm:flex bg-gradient-to-br from-primary/20 to-primary/10 p-3 sm:p-4 rounded-xl items-center justify-center shrink-0 border border-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary sm:w-8 sm:h-8"><path d="M12 2v20"/><path d="M2 12h20"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/></svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1">Laser Cutting Tech</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                  Clean edges through 5000W fiber laser systems.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
