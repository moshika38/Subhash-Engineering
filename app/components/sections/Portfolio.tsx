"use client";

import { useEffect, useState, useRef } from "react";

export default function Portfolio() {
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
    <section ref={sectionRef} id="portfolio" className="py-12 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-48 sm:w-80 h-48 sm:h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 lg:mb-16 gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-6 border border-primary/20">
              Our Work
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-2 sm:mb-4 tracking-tight">Portfolio of Excellence</h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed hidden sm:block">
              Recent projects across Sri Lanka.
            </p>
          </div>
          
          <div className="flex gap-2 sm:gap-3">
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="sm:col-span-2 lg:col-span-5 h-64 sm:h-80 lg:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden group relative shadow-lg sm:shadow-xl">
            <img 
              src="images/sample.jpg" 
              alt="Steel Framed Structure" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent"></div>
            
            <div className="absolute top-3 left-3 sm:top-6 sm:left-6">
              <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] sm:text-xs font-bold px-2 sm:px-4 py-1 sm:py-2 rounded-full uppercase tracking-wider">
                Industrial
              </span>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-gray-900/90 to-transparent">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">Steel Structure</h3>
              <p className="text-slate-300 text-xs sm:text-sm">Colombo, Sri Lanka</p>
            </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6">
            <div className="h-64 sm:h-80 lg:h-[280px] rounded-2xl sm:rounded-3xl overflow-hidden group relative shadow-lg sm:shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Luxury Gates" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
              
              <div className="absolute top-3 left-3 sm:top-6 sm:left-6">
                <span className="bg-primary/90 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-4 py-1 sm:py-2 rounded-full uppercase tracking-wider">
                  Featured
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-gray-900/90 to-transparent">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Luxury Estate Gates</h3>
                <p className="text-slate-300 text-xs sm:text-sm">Custom automated systems</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 h-48 sm:h-56 lg:h-[140px]">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden group relative shadow-lg sm:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Precision Welding" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <h4 className="text-sm sm:text-base font-bold text-white">Welding Detail</h4>
                </div>
              </div>
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden group relative shadow-lg sm:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Steel Staircase" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <h4 className="text-sm sm:text-base font-bold text-white">Steel Staircase</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-8 sm:mt-12 lg:mt-16 text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:shadow-lg w-full sm:w-auto">
            <span className="text-sm sm:text-base">View All Projects</span>
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow-md group-hover:translate-x-1 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4"><path d="m9 18 6-6-6-6"/></svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
