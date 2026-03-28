"use client";

import Link from "next/link";
import { CheckCircle, Crosshair, ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsVideoLoaded(true);
    }

    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 10000);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [isMobile]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden">
      {/* Loading Screen Overlay */}
      <div
        className={`fixed inset-0 bg-neutral-950 z-[9999] flex flex-col items-center justify-center transition-opacity duration-700 ease-out ${isVideoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <div className="relative flex flex-col items-center">
          {/* Double Concentric Spinner */}
          <div className="w-16 h-16 relative">
            <div className="absolute inset-0 border-4 border-t-primary border-primary/20 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-b-yellow-400 border-yellow-400/20 rounded-full animate-spin [animation-duration:1.5s]"></div>
          </div>
          <p className="text-white mt-6 font-bold tracking-[0.2em] text-sm animate-pulse">
            SUBHASH ENGINEERING
          </p>
          <div className="h-[2px] w-12 bg-primary mt-2 animate-pulse"></div>
        </div>
      </div>

      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={`object-cover w-full h-full transition-opacity duration-1000 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
          onCanPlay={() => setIsVideoLoaded(true)}
        >
          <source
            src={isMobile ? "/videos/mp4-mobile.mp4" : "/videos/bg.mp4"}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/70 to-black/10 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col text-white pt-24 pb-12">
        <div
          className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-6 w-fit border border-primary/30 shadow-[0_0_15px_rgba(249,155,40,0.3)]">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
            Premium Engineering Solutions
          </div>
        </div>

        <h1
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-[1.1] transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-white/90">Subhash Engineering</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-300 to-primary animate-text-shimmer drop-shadow-lg">
            Sri Lanka
          </span>
        </h1>

        <p
          className={`text-sm sm:text-base md:text-lg text-slate-200 max-w-xl mb-6 sm:mb-8 leading-relaxed font-medium transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Subhash Engineering delivers custom metal fabrication, welding, and steel structures with unmatched precision from Hali-Ela, Sri Lanka.
          <span className="text-primary font-semibold hidden sm:inline">
            {" "}
            Trusted island-wide since 2007.
          </span>
        </p>

        <div
          className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12 transition-all duration-700 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Link
            href="/quote"
            className="group text-center bg-primary hover:bg-primary-hover text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5"
          >
            <span className="flex items-center justify-center gap-2">
              Get a Quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
          <Link
            href="/gallery"
            className="group text-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="flex items-center justify-center gap-2">
              View Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </Link>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 transition-all duration-700 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="group flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
            <div className="bg-primary/20 p-2 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
              <CheckCircle size={18} />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm">ISO Certified</div>
              <div className="text-slate-300 text-[10px] sm:text-xs hidden sm:block">
                Global Standards
              </div>
            </div>
          </div>

          <div className="group flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
            <div className="bg-primary/20 p-2 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
              <Crosshair size={18} />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm">99.8% Accuracy</div>
              <div className="text-slate-300 text-[10px] sm:text-xs hidden sm:block">
                CNC Precision
              </div>
            </div>
          </div>

          <div className="group flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
            <div className="bg-primary/20 p-2 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm">15+ Years</div>
              <div className="text-slate-300 text-[10px] sm:text-xs hidden sm:block">
                Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator z-20 flex-col items-center gap-2 hidden sm:flex">
        <span className="text-white/50 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="text-primary animate-bounce" size={20} />
      </div>
    </section>
  );
}
