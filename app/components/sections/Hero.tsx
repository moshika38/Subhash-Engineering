import Link from "next/link";
import { CheckCircle, Crosshair } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-start overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability - made lighter */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/50 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black/10 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col text-white mt-20">
        {/* <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 w-fit border border-primary/30 shadow-[0_0_15px_rgba(249,155,40,0.3)]">
          Precision & Power
        </div> */}
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          Precision Metal <br />
          <span className="text-primary text-6xl md:text-8xl drop-shadow-md">Engineering</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-200 max-w-xl mb-10 leading-relaxed font-medium">
          Custom fabrication, welding, and steel solutions with unmatched quality. We transform industrial visions into structural reality.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <Link href="#quote" className="bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 rounded-md transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/30">
            Get a Quote
          </Link>
          <Link href="#portfolio" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-md transition-colors">
            View Projects
          </Link>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap items-center gap-6 md:gap-12">
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-lg">
            <div className="bg-primary/20 p-2 rounded-full text-primary">
              <CheckCircle size={20} />
            </div>
            <div>
              <div className="font-semibold text-sm">ISO Certified</div>
              <div className="text-slate-300 text-xs">Global Standards</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-lg">
            <div className="bg-primary/20 p-2 rounded-full text-primary">
              <Crosshair size={20} />
            </div>
            <div>
              <div className="font-semibold text-sm">99% Accuracy</div>
              <div className="text-slate-300 text-xs">CNC Precision</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
