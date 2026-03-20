import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-primary font-bold text-xl mb-4 tracking-wider uppercase">Subhash Engineering</h3>
          <p className="text-slate-400 max-w-sm">
            Custom fabrication, welding, and steel solutions with unmatched quality. We transform industrial visions into structural reality.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-slate-400">
            <li><Link href="#services" className="hover:text-primary transition-colors">Core Services</Link></li>
            <li><Link href="#portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact</h4>
          <ul className="space-y-2 text-slate-400">
            <li>info@subhashengineering.com</li>
            <li>+94 11 234 5678</li>
            <li>Colombo, Sri Lanka</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Subhash Engineering. All rights reserved.
      </div>
    </footer>
  );
}
