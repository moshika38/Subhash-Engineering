"use client";

import { Users, Diamond, Clock, ShieldCheck, Settings, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Advantage() {
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

  const advantages = [
    {
      icon: <Users size={24} />,
      title: "Experienced Team",
      description: "Certified technicians with specialized expertise."
    },
    {
      icon: <Diamond size={24} />,
      title: "Quality Materials",
      description: "Every metal piece tested for stress resistance."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Affordable Pricing",
      description: "Competitive rates without cutting corners."
    },
    {
      icon: <Clock size={24} />,
      title: "Fast Delivery",
      description: "Optimized workflow for strict deadlines."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 py-12 sm:py-16 lg:py-28 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-brand/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-start">
          
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6 lg:mb-8 border border-primary/30">
              <Sparkles size={12} className="sm:w-3.5 sm:h-3.5" />
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight">
              The Subhash Engineering
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-300 to-primary animate-text-shimmer"> Advantage</span>
            </h2>
            
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
              {advantages.map((adv, index) => (
                <div 
                  key={index} 
                  className="group flex gap-3 sm:gap-4 lg:gap-6 hover:bg-white/5 p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 border border-transparent hover:border-white/10"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300 border border-primary/20">
                      {adv.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 group-hover:text-primary transition-colors">{adv.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      {adv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl sm:rounded-3xl"></div>
              <div className="absolute inset-2 sm:inset-4 border border-white/10 rounded-xl sm:rounded-3xl"></div>
              <div className="absolute inset-4 sm:inset-8 border border-white/5 rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                <img 
                  src="/images/about.png" 
                  alt="Subhash Engineering Advantage" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              <div className="absolute -top-2 -right-2 sm:top-0 sm:right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/40 to-yellow-400/40 rounded-xl sm:rounded-2xl backdrop-blur-md flex items-center justify-center border border-primary/30 shadow-lg shadow-primary/20 animate-float">
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">15+</div>
                  <div className="text-[8px] sm:text-[10px] text-white/70 uppercase tracking-wider">Years</div>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-2 sm:bottom-0 sm:left-0 w-18 h-14 sm:w-22 sm:h-16 bg-gradient-to-br from-brand/40 to-brand/20 rounded-xl sm:rounded-2xl backdrop-blur-md flex items-center justify-center border border-brand/30 shadow-lg shadow-brand/20 animate-float delay-300">
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">500+</div>
                  <div className="text-[8px] sm:text-[10px] text-white/70 uppercase tracking-wider">Projects</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className={`mt-10 sm:mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { number: "500+", label: "Projects" },
            { number: "98%", label: "Satisfaction" },
            { number: "24/7", label: "Support" },
            { number: "50+", label: "Workers" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-yellow-300 mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-[10px] sm:text-xs lg:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
