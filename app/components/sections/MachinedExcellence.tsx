import { Compass, Factory, Hammer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MachinedExcellence() {
  return (
    <section className="relative z-30 w-full bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        
        {/* Top Cards block - moved out of Hero overlap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white shadow-xl rounded-2xl overflow-hidden mb-24 border border-slate-100">
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-100 bg-white hover:bg-slate-50 transition-colors group">
            <div className="text-brand mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 group-hover:scale-110 transition-transform">
              <Compass size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand transition-colors">Custom Fabrication</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Tailored metal solutions for architectural and industrial requirements.</p>
          </div>
          
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-100 bg-white hover:bg-slate-50 transition-colors group">
            <div className="text-brand mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 group-hover:scale-110 transition-transform">
              <Hammer size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand transition-colors">Professional Welding</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Certified welding processes ensuring structural integrity and durability.</p>
          </div>
          
          <div className="p-8 md:p-10 bg-white hover:bg-slate-50 transition-colors group">
            <div className="text-brand mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 group-hover:scale-110 transition-transform">
              <Factory size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand transition-colors">Steel Structures</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Large scale manufacturing for warehouses, factories and commercial spaces.</p>
          </div>
        </div>

        {/* Machined Excellence Title area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Machined Excellence</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Every cut is calculated. Every weld is verified. Our facility utilizes the latest in industrial automation to deliver perfection in every millimeter.
            </p>
          </div>
          <Link href="#gallery" className="text-brand font-semibold flex items-center gap-2 hover:text-brand-dark transition-colors mt-6 md:mt-0 group">
            Exploration Gallery
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Complex Grid area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left large image */}
          <div className="relative rounded-2xl overflow-hidden h-96 lg:h-full group min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1504917595423-ce36eadd2fbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Advanced Welding" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <div className="text-xs tracking-[0.2em] text-slate-300 mb-2 uppercase font-medium">Technique</div>
              <div className="text-2xl font-bold">Advanced TIG/MIG Welding</div>
            </div>
          </div>
          
          {/* Right smaller cards */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6 h-full">
              {/* Stat card */}
              <div className="bg-slate-200 rounded-2xl p-8 flex-1 flex flex-col justify-center">
                <div className="text-5xl font-bold text-brand mb-4">0.02</div>
                <div className="font-semibold text-slate-900 mb-1">Precision Margin</div>
                <div className="text-slate-500 text-sm">Millimeter Accuracy</div>
              </div>
              
              {/* Shield card */}
              <div className="bg-brand rounded-2xl p-8 flex-1 text-white flex flex-col justify-between">
                <div className="bg-white/20 w-fit p-3 rounded-full mb-12">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div className="text-xl font-bold leading-tight">
                  Reinforced Structural Integrity
                </div>
              </div>
            </div>
            
            {/* Wide bottom card */}
            <div className="bg-slate-200 rounded-2xl p-8 flex items-center gap-6">
              <div className="hidden sm:flex bg-white p-4 rounded-xl shadow-sm items-center justify-center shrink-0 border border-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand"><path d="M12 2v20"/><path d="M2 12h20"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Laser Cutting Tech</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Clean edges and intricate patterns achieved through 5000W fiber laser systems.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
