import { Users, Diamond, Clock, ShieldCheck, Settings } from "lucide-react";

export default function Advantage() {
  const advantages = [
    {
      icon: <Users className="text-white bg-white/20 p-2 rounded-lg" size={40} />,
      title: "Experienced Team",
      description: "Our technicians are veterans in the industry with specialized certifications in heavy fabrication."
    },
    {
      icon: <Diamond className="text-white bg-white/20 p-2 rounded-lg" size={40} />,
      title: "High-quality Materials",
      description: "We never compromise. Every piece of metal used is tested for stress and environmental resistance."
    },
    {
      icon: <ShieldCheck className="text-white bg-white/20 p-2 rounded-lg" size={40} />,
      title: "Affordable Pricing",
      description: "Quality engineering should be accessible. We provide competitive rates without cutting corners."
    },
    {
      icon: <Clock className="text-white bg-white/20 p-2 rounded-lg" size={40} />,
      title: "Fast Delivery",
      description: "Our optimized workflow ensures project timelines are met with strict adherence to deadlines."
    }
  ];

  return (
    <section className="bg-brand py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 tracking-tight">The Subhash Engineering Advantage</h2>
            
            <div className="flex flex-col gap-8">
              {advantages.map((adv, index) => (
                <div key={index} className="flex gap-6 group hover:translate-x-2 transition-transform duration-300">
                  <div className="shrink-0 mt-1">
                    {adv.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{adv.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed max-w-md">
                      {adv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content / Graphic */}
          <div className="relative w-full aspect-square border-2 border-dashed border-white/20 rounded-3xl flex items-center justify-center bg-white/5 backdrop-blur-sm group hover:border-white/40 transition-colors">
            {/* The outer decorative box */}
            <div className="absolute inset-8 border border-white/10 rounded-2xl"></div>
            
            {/* Inner content */}
            <div className="relative z-10 p-8">
              <Settings size={120} className="text-white/20 group-hover:text-primary transition-all duration-700 animate-[spin_20s_linear_infinite]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
