import { Code, Settings, PenTool, LayoutTemplate, SquareDashedBottom, Wrench } from "lucide-react";
import Link from "next/link";

export default function CoreServices() {
  const services = [
    {
      icon: <PenTool className="text-primary mb-4" size={32} />,
      title: "Iron Works",
      description: "Heavy-duty iron structures, industrial components, and tailored frameworks for large-scale developments."
    },
    {
      icon: <Settings className="text-primary mb-4" size={32} />,
      title: "Welding Solutions",
      description: "Expert MIG, TIG, and ARC welding for seamless connections and structural integrity in any metal type."
    },
    {
      icon: <Code className="text-primary mb-4" size={32} />,
      title: "Custom Fabrication",
      description: "Bespoke metal furniture, decorative features, and specialized engineering parts made to your specifications."
    },
    {
      icon: <LayoutTemplate className="text-primary mb-4" size={32} />,
      title: "Steel Structures",
      description: "Roofing trusses, warehouse frames, and mezzanine floors engineered for maximum load-bearing capacity."
    },
    {
      icon: <SquareDashedBottom className="text-primary mb-4" size={32} />,
      title: "Gates & Grills",
      description: "Modern gates, secure window grills, and architectural railings that combine safety with elegant design."
    },
    {
      icon: <Wrench className="text-primary mb-4" size={32} />,
      title: "Maintenance",
      description: "Anti-rust treatment, structural repairs, and periodic inspections for industrial and residential assets."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Our Core Services</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Comprehensive engineering and fabrication services designed for durability and aesthetic precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow group flex flex-col h-full">
              {service.icon}
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <Link href="#contact" className="text-primary font-semibold flex items-center gap-2 group-hover:text-primary-dark transition-colors inline-block text-sm">
                Learn More
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
