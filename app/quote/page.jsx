'use client';

import { useState } from 'react';
import { Send, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'General Inquiry',
    message: ''
  });

  const servicesList = [
    'General Inquiry',
    'Steel Structures',
    'Luxury Gates',
    'Grills & Hand Railings',
    'Roller Doors',
    'Roofing Works'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message template
    const message = `*Quote Request - Subhash Engineering*%0A%0A`
      + `*Name:* ${formData.name}%0A`
      + `*Phone:* ${formData.phone}%0A`
      + `*Service:* ${formData.service}%0A`
      + `*Message:* ${formData.message}`;

    // Target Phone: 0767705308 (Format as 94767705308 without leading zero)
    const whatsappUrl = `https://wa.me/94767705308?text=${message}`;

    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white pt-28 pb-16 px-4 flex items-center justify-center">
      <div className="w-full max-w-lg bg-neutral-800/50 border border-neutral-800 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-xl animate-fade-in-up">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-6 transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">
            Request a <span className="text-gradient">Quote</span>
          </h1>
          <p className="text-neutral-400 text-sm max-w-sm mx-auto">
            Fill out the details below to request quote rates instantly via WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">Your Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full bg-neutral-900 border border-neutral-800 hover:border-primary/50 focus:border-primary rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">Contact Number</label>
            <input 
              type="tel" 
              name="phone" 
              required 
              value={formData.phone}
              onChange={handleChange}
              placeholder="07X XXX XXXX"
              className="w-full bg-neutral-900 border border-neutral-800 hover:border-primary/50 focus:border-primary rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">Service Required</label>
            <select 
              name="service" 
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-neutral-900 border border-neutral-800 hover:border-primary/50 focus:border-primary rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-colors cursor-pointer"
            >
              {servicesList.map((service) => (
                <option key={service} value={service} className="bg-neutral-900">{service}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">Additional Message</label>
            <textarea 
              name="message" 
              rows="4" 
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements..."
              className="w-full bg-neutral-900 border border-neutral-800 hover:border-primary/50 focus:border-primary rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-colors resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 mt-4 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Send to WhatsApp</span>
            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
}
