import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">Subhash Engineering</span>
        </Link>
        <nav className="hidden md:flex gap-8 items-center text-white text-sm font-medium">
          <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="#portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
          <Link href="#contact" className="hover:text-primary transition-colors flex items-center gap-2">
            Contact
          </Link>
          <Link href="#quote" className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-md transition-colors">
            Get a Quote
          </Link>
        </nav>
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
