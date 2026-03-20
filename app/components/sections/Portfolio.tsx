export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Portfolio of Excellence</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              A showcase of our recent projects across Sri Lanka, from industrial hubs to luxury residences.
            </p>
          </div>
          <div className="flex gap-4 mt-8 md:mt-0">
            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 h-[800px] lg:h-[600px]">
          {/* Main Large Image */}
          <div className="lg:col-span-5 h-full rounded-2xl overflow-hidden group relative">
            <img 
              src="images/sample.jpg" 
              alt="Steel Framed Structure" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
          <div className="lg:col-span-7 h-full flex flex-col gap-6">
            {/* Top Right Image */}
            <div className="h-1/2 rounded-2xl overflow-hidden group relative">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Luxury Gates" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            {/* Bottom Right Split */}
            <div className="h-1/2 grid grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden group relative">
                <img 
                  src="https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Precision Welding Details" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="rounded-2xl overflow-hidden group relative">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern Steel Staircase" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
