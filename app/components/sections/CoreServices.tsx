"use client";

import { Code, Settings, PenTool, LayoutTemplate, SquareDashedBottom, Wrench, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function CoreServices() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
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

  const services = [
    {
      icon: <PenTool size={28} />,
      title: "Iron Works",
      description: "Heavy-duty iron structures and tailored frameworks for large-scale developments.",
      tag: "Industrial",
      image: "/services/iron_works.png",
      detail: "Our structural iron works are engineered for heavy-duty applications. We manufacture load-bearing frame systems, safety barriers, and custom support beams using advanced heat-treated metals targeting precision tolerances safely."
    },
    {
      icon: <Settings size={28} />,
      title: "Welding Solutions",
      description: "Expert MIG, TIG, and ARC welding for structural integrity.",
      tag: "Expert",
      image: "/services/welding.png",
      detail: "We provide precision-grade welding across all positions including overhead and piping paths. Certified handling of TIG (Stainless/Alu) and MIG (Heavy steel) joints guaranteeing clean structural safe specs securely frame setups."
    },
    {
      icon: <Code size={28} />,
      title: "Custom Fabrication",
      description: "Bespoke metal furniture and specialized engineering parts.",
      tag: "Bespoke",
      image: "/services/fabrication.png",
      detail: "Tailored industrial-grade sheets bending, CNC component cutting, and design replication for specific prototype assemblies or architecturally styled decors safely setups securely correctly bound triggers cleanly."
    },
    {
      icon: <LayoutTemplate size={28} />,
      title: "Steel Structures",
      description: "Roofing trusses and warehouse frames for maximum capacity.",
      tag: "Structural",
      image: "/services/steel_structures.png",
      detail: "Large-span roofing framing setups engineered safely distributing load securely bound trusses configurations optimized safe bounds layouts framed correctly safely bound."
    },
    {
      icon: <SquareDashedBottom size={28} />,
      title: "Gates & Grills",
      description: "Modern gates, window grills, and architectural railings.",
      tag: "Design",
      image: "/services/gates.png",
      detail: "Decorative precision framing laser setups securely correctly boundary guards sets safety panels cleanly layouts framed."
    },
    {
      icon: <Wrench size={28} />,
      title: "Maintenance",
      description: "Anti-rust treatment and structural repairs.",
      tag: "Care",
      image: "/services/maintenance.png",
      detail: "Protective coating applications framing safety checks repairs setup securely correctly bound triggers layout framed correctly safely bound."
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-12 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute top-20 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-brand/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center max-w-2xl sm:max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6 border border-primary/20">
            What We Offer
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-6 tracking-tight">Our Core Services</h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed px-2 sm:px-0">
            Comprehensive engineering and fabrication services designed for durability and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative bg-white/80 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 50 + 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-yellow-400 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-full mb-4 sm:mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                {service.tag}
              </span>
              
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                {service.description}
              </p>
              
              <button 
                onClick={() => setSelectedService(service)} 
                className="group/link inline-flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm hover:text-primary-hover transition-colors duration-300 cursor-pointer"
              >
                Learn More
                <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center transform group-hover/link:translate-x-1 group-hover/link:bg-primary group-hover/link:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4"><path d="m9 18 6-6-6-6"/></svg>
                </span>
              </button>
            </div>
          ))}
        </div>

        <div className={`mt-10 sm:mt-16 lg:mt-20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 bg-gradient-to-r from-gray-50 to-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-lg">
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-1">Need a Custom Solution?</h4>
              <p className="text-gray-500 text-xs sm:text-sm">Our team is ready to help.</p>
            </div>
            <Link href="#contact" className="shrink-0 bg-primary hover:bg-primary-hover text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 flex items-center gap-2 w-full sm:w-auto justify-center">
              <span className="text-sm sm:text-base">Get Free Consultation</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </div>
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in" onClick={() => setSelectedService(null)}>
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-scale-in relative border border-gray-100" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-black/20 text-gray-800 transition-colors z-10" onClick={() => setSelectedService(null)}>
              <X size={20} />
            </button>
            
            <img src={selectedService.image} alt={selectedService.title} className="w-full h-48 sm:h-64 object-cover" />
            
            <div className="p-6 sm:p-8">
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                {selectedService.tag}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{selectedService.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{selectedService.detail || selectedService.description}</p>
              
              <Link href="/quote" className="inline-flex justify-center items-center w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-primary/20 text-center">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
